import Image from "next/image";
import Link from "next/link";
import SearchBox from "./SearchBox";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchHeaderOptions from "./SearchHeaderOptions";

export default function SearchHeader() {
  return (
    <header className="stikcky top-0 bg-white ">
      <div className="flex w-full p-6 items-center justify-between">
       <Link href="/">
        <Image priority style={{ width:"auto" }}
         src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png"
         alt="Google Logo" width={120} height={40}  />
         </Link>
         <div className="flex-1">
          <SearchBox/>
         </div>
         <div className=" hidden sm:inline-flex space-x-2">
           <RiSettings3Line className="bg-transparent hover:bg-gray-200 p-1  text-4x1 rounded-full cursor-pointer" size={30}/>
           <TbGridDots className="bg-transparent hover:bg-gray-200  p-1   text-4x1 rounded-full cursor-pointer" size={30}/>
         </div>
         <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 
        hover:shadow-md transition-shadow ml-2" > Sign in</button>

      </div>
      <SearchHeaderOptions/>
    </header>
  )
}
