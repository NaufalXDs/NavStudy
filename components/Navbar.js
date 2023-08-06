import { useState } from "react";
import Container from "./Container";
import Link from "next/link";
// import dropdown from "@preline/dropdown";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  return (
    <header class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-gray-900 border-b border-gray-700 text-sm py-2.5 sm:py-4">
      <nav class="max-w-[85rem] flex basis-full items-center w-full mx-auto px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div class="mr-5 md:mr-8">
          <a class="flex-none text-xl font-semibold text-white" href="/" aria-label="Brand">NavStudy</a>
        </div>

        <div class="w-full flex items-center justify-end ml-auto sm:justify-between sm:gap-x-3 sm:order-3">
          {/* <div class="sm:hidden">
            <button type="button" class="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium hover:bg-white/[.2] text-white align-middle focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all text-xs">
              <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
          </div> */}

          <div class="mx-auto">
            {/* <label for="icon" class="sr-only">Search</label> */}
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
                <svg class="h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </div>
              <input type="text" id="icon" name="icon" class="py-2 px-4 pl-11 pr-20 block w-92 md:w-96 bg-transparent border-gray-700 shadow-sm rounded-md text-sm text-gray-300 focus:z-10 focus:border-gray-900 focus:ring-gray-600 placeholder:text-gray-500" placeholder="Search" />
              <div class="absolute inset-y-0 right-0 flex items-center pointer-events-none z-20 pr-4">
                <span class="text-gray-500">Ctrl + /</span>
              </div>
            </div>
          </div>

          <div class="hs-dropdown relative inline-flex md:hidden">
            <button id="hs-dropdown-basic" type="button" class="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="1em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
            </button>

            <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-56 hidden z-10 mt-2 min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700" aria-labelledby="hs-dropdown-basic">
              <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  dark:hover:bg-gray-700 dark:text-sky-500  dark:hover:text-gray-500" href="/">
                Home
              </a>
              <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  dark:hover:bg-gray-700 dark:text-gray-400  dark:hover:text-gray-500" href="/article">
                Article
              </a>
              <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  dark:hover:bg-gray-700 dark:text-gray-400  dark:hover:text-gray-500" href="/blog">
                Blog
              </a>
            </div>
          </div>

          <div class="md:flex flex-row items-center justify-end space-x-4 hidden">

            <a className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] font-medium align-middle focus:outline-none transition-all text-xl dark:text-sky-500 dark:hover:text-gray-500" href="/" aria-current="page">Home</a>


            <a className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] font-medium text-white align-middle focus:outline-none transition-all text-xl dark:text-gray-400 dark:hover:text-gray-500" href="/article" aria-current="page">Article</a>


            <a className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] font-medium text-white align-middle focus:outline-none transition-all text-xl dark:text-gray-400 dark:hover:text-gray-500" href="/blog" aria-current="page">Blog</a>

          </div>
        </div>
      </nav>
    </header>
  );
}
