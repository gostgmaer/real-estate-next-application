import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { MdMenu, MdSearch, MdClose } from "react-icons/md";
import Link from "next/link";
import { SearchBox } from "./elements";
import ThemeToggle from "../DarkLight";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  return (
    <header className="bg-white dark:bg-gray-700 w-full">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8 gap-2"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </Link>
        </div>
        <div className=" lg:flex lg:gap-x-10 lg:flex-1 lg:justify-center">
          <SearchBox />
        </div>

      <div className=" lg:hidden">    <ThemeToggle/></div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md "
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <MdMenu className="h-10 w-10" aria-hidden="true" />
          </button>
        </div>
        {/* <Popover.Group className="hidden lg:flex lg:gap-x-10 lg:flex-1 lg:justify-end">
          <Link
            href="/properties/search"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Properties
          </Link>
          <Link
            href="/dashboard"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Dashboard
          </Link>
          <Link
            href="/auth/signin"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
         User
          </Link>
        </Popover.Group> */}

        <Popover.Group className="hidden lg:flex lg:gap-x-2 lg:flex-1 lg:justify-end">
        <ThemeToggle/>
          <Link
            href="/auth/signin"
            className="text-sm font-semibold leading-6  px-5 py-1"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
          <Link
            href="/auth/signup"
            className="text-sm  border-gray-700 dark:border-gray-50 font-semibold leading-6 dark:bg-gray-700 bg-gray-50 rounded-md px-5 py-1 dark:hover:text-gray-50 dark:hover:bg-gray-700 hover:bg-gray-50 border"
          >
            Sign up 
          </Link>
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
                height={32}
                width={32}
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <MdClose className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <Link
                  href="/auth/signin"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
