import Image from "next/image";
import {
  Bars3Icon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Left */}
      <div className="relative flex items-start h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          fill
          alt="airbnb logo"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Center - Search*/}
      <div className="flex items-center md:border-2 md:shadow-sm rounded-full py-2">
        <input
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Start your search"
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* Right */}
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;
