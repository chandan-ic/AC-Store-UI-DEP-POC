import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import { setIsOpen } from "../../store/user/actions";
export default function AdminHeader() {
  const isOpen = useSelector((state) => state.user.isOpen);
  const dispatch = useDispatch();
  const callOpenMenu = (e) => {
    dispatch(setIsOpen(!isOpen));
  };

  const admin = useSelector((state) => state.user.admin);
  const adminList = useSelector((state) => state.user.adminList);
  return (
    <header className="w-full h-20 fixed  z-20  shadow-sm border bg-secondary">
      <nav className="flex  justify-between my-1 items-center ">
        <div className="md:ml-4 mt-3">
          <img
            onClick={callOpenMenu}
            className=""
            src="/images/icons8-menu-24.png"
          />
        </div>
        <div>
          <img
            className="lg:h-14 w-40 "
            src="/images/khivrajlogo.png"
            alt="..."
          />
        </div>
        <div className="mt-1 md:block hidden">
          <h4 className="uppercase">{adminList}</h4>
        </div>
        <div className="">
          <ul>
            <li className="px-2 pt-3 ">
              <Link href="#">
                <a
                  className="bg-theme border-2 border-transparent hover:bg-default uppercase text-theme-inverse
                      hover:text-black hover:border-2 hover:border-theme px-5 md:py-2 py-1 text-sm "
                >
                  LOGOUT
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
