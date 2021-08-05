import Link from "next/link";
import Image from "next/image";
import {  useDispatch } from "react-redux";
import { setHomeSearchCategory } from "components/Home/store/home-action";
import Router, { useRouter } from "next/router";
import { SEARCH } from "utils/constant/routerPath";

export default function DiscoverCard({ category,searchParam }) {
  const dispatch = useDispatch();

  const setHomeSearchParams = () => {
    console.log("submitted category",category,searchParam);
    dispatch(setHomeSearchCategory(category,searchParam));
    Router.push(SEARCH);

  }
  return (
    <div className=" h-full w-full flex flex-col justify-between
          md:w-1/2 lg:w-1/4 flex-wrap  
        p-4 bg-white rounded-lg">
     <div borderTest className="prod-title flex justify-center align-top  h-full">
        <h4 className="text-xl text-center uppercase text-theme font-md">
          {category.Category}
        </h4>
        {category.SubTitle && (  <h4 className="text-xl text-center uppercase text-theme font-md">
          {category.subTitle}
        </h4>
        )}
      </div>
      {category.ImageUrl && (
          <div borderTest1 className="h-32 relative">
       <Image layout="fill"  objectFit="contain" src={`${category.ImageUrl}`} />
      </div>
    )}
      <div className=" grid gap-10 ">
        <div className="items-center justify-center  text-gray-900 text-center">
        <button className="mt-8 md:mt-10 bg-theme-inverse text-white px-8 py-1 text-base" onClick={setHomeSearchParams}>
            Explore 
        </button>
        </div>
      </div>
    </div>
  );
}