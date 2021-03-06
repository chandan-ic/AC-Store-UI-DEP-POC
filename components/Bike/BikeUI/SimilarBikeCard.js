import Link from "next/link";
import Image from "next/image";

export default function SimilarBikeCard({ similar }) {
  return (
    <div className=" h-full w-full flex flex-col justify-between
          md:w-1/3 lg:w-1/5 flex-wrap card 
        p-4 bg-white rounded-lg shadow-2xl">
      <div borderTest className="prod-title flex justify-center align-top  h-full">
        <h4 className="text-xl text-center uppercase text-theme font-md">
          {similar.name}
        </h4>
      </div>
      <div borderTest1 className="h-32 relative">
       <Image layout="fill"  objectFit="contain" src={`${similar.img}`} />
      </div>
      <div className=" grid gap-10 ">
        <div className="items-center justify-center  text-gray-900 text-center">
        <button className="mt-8 md:mt-10 bg-theme-inverse text-white px-8 py-1 text-base">
            <Link href={similar.link}>Explore</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
