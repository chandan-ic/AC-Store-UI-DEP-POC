import Link from 'next/link';

export default function AutoHeader() {
  return (
    <header className="w-full pb-2 bg-white fixed z-10  shadow-sm border border-gray-100">
      <div className="container">
        <nav className="flex  justify-between my-2 items-center sticky ">
          <img src="/images/khivrajlogo.png" className="h-10 w-50" alt="Workflow" />
          <div className="">
            <ul>
              <li className="px-2 pt-3 ">
                <Link href="/register/signup" ><a className="bg-theme border-2 border-transparent hover:bg-default uppercase text-theme-inverse
 hover:text-black hover:border-2 hover:border-theme   px-5 py-2 
 tx-sm " >SIGN UP</a></Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}