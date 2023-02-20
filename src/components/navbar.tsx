import {
  Bars3Icon,
  XMarkIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/solid";

import Link from "next/link";
import { useState } from "react";
import Modal from "./modal";

const Navbar: React.FC = () => {
  const [navbar, setNavbar] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <>
      <nav className="w-full bg-gray-800 shadow">
        <div className=" mx-auto justify-between px-4 md:flex md:items-center md:px-8 lg:max-w-7xl ">
          <div>
            <div className="relative flex items-center justify-center py-2 md:block md:py-5">
              {!navbar && (
                <button
                  className="group absolute -bottom-7 rounded-full bg-gray-800"
                  onClick={() => setModal(true)}
                >
                  <PlusCircleIcon className="border-5 h-14 w-14 text-white" />
                </button>
              )}
              <div className="ml-auto md:hidden">
                <button
                  className="rounded-md p-1 text-gray-700 outline-none focus:outline focus:outline-gray-400"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <XMarkIcon className="h-6 w-6 text-white" />
                  ) : (
                    <Bars3Icon className="h-6 w-6 text-white" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-white">
                  <Link href="/">Login</Link>
                </li>
                {/* <li className="text-white">
                <Link href="/blogs">Blogs</Link>
              </li>
              <li className="text-white">
                <Link href="/about">About US</Link>
              </li>
              <li className="text-white">
                <Link href="/contact">Contact US</Link>
              </li> */}
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {modal && <Modal tester={() => setModal(false)} />}
    </>
  );
};

export default Navbar;
