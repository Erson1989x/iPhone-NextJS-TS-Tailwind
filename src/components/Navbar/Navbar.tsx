import Image from "next/image";
import {appleImg, searchImg, bagImg} from "../../utils"
import { navLists } from "@/constants";

export const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex items-center justify-between">
        <nav className="flex items-center justify-between w-full">
            <Image src={appleImg} alt="apple"  width={14} height={14} />
            <div className="flex flex-1 justify-center max-sm:hidden">
              {navLists.map((nav,i) => (
                <div key={nav} className="px-5 text-sm text-gray hover:text-white transition-all cursor-pointer">{nav}</div>
              ))}
            </div>
            <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
              <Image src={searchImg} alt="search" width={18} height={18} />
              <Image src={bagImg} alt="bag" width={18} height={18} />
            </div>
        </nav>
    </header>
  )
}
