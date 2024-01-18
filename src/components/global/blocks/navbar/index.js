import { Fragment, useState } from "react";
import {
  Dialog,
  Disclosure,
  Menu,
  Popover,
  Transition,
} from "@headlessui/react";
import { MdMenu, MdSearch, MdClose } from "react-icons/md";
import Link from "next/link";
import { SearchBox } from "./elements";
import ThemeToggle from "../DarkLight";
import { usePathname, useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import Cookies from "js-cookie";
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { data: session, status } = useSession();

  console.log(session);
const route= useRouter()
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }


  const signouthandler = () => { 

    signOut()
    localStorage.clear()
    sessionStorage.clear()
    const cookies = Cookies.get();
    for (const cookie in cookies) {
      Cookies.remove(cookie);
    }
    route.push('/')
   }

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
        {!pathname?.includes("dashboard") && !pathname?.includes("auth") && (
          <div className=" lg:flex lg:gap-x-10 lg:flex-1 lg:justify-center">
            <SearchBox />
          </div>
        )}

        <div className="flex lg:hidden gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md "
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <MdMenu className="h-10 w-10" aria-hidden="true" />
          </button>
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-2 lg:flex-1 lg:justify-end items-center">
          <ThemeToggle />
          <Link
            href="/properties/search"
            className="text-sm font-semibold leading-6 "
          >
            Properties
          </Link>
          {session ? (
           <Menu as="div" className="relative ml-3">
           <div>
             <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
               <span className="absolute -inset-1.5" />
               <span className="sr-only">Open user menu</span>
               <img
                 className="h-8 w-8 rounded-full"
                 src={session.user.image}
                 alt=""
               />
             </Menu.Button>
           </div>
           <Transition
             as={Fragment}
             enter="transition ease-out duration-100"
             enterFrom="transform opacity-0 scale-95"
             enterTo="transform opacity-100 scale-100"
             leave="transition ease-in duration-75"
             leaveFrom="transform opacity-100 scale-100"
             leaveTo="transform opacity-0 scale-95"
           >
             <Menu.Items className="absolute right-0 z-10 mt-2 w-28 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
               <Menu.Item>
                 {({ active }) => (
                   <Link
                     href="/dashboard"
                     className={classNames(
                       active ? "bg-gray-100" : "",
                       "block px-4 py-2 text-sm text-gray-700 "
                     )}
                   >
                     Dashboard
                   </Link>
                 )}
               </Menu.Item>
               <Menu.Item>
                 {({ active }) => (
                   <Link
                     href="/dashboard/my-profile"
                     className={classNames(
                       active ? "bg-gray-100" : "",
                       "block px-4 py-2 text-sm text-gray-700"
                     )}
                   >
                     Your Profile
                   </Link>
                 )}
               </Menu.Item>
               <Menu.Item>
                 {({ active }) => (
                   <button
                     className={classNames(
                       active ? "bg-gray-100" : "",
                       "block px-4 py-2 text-sm text-gray-700 w-full text-start"
                     )}
                     onClick={signouthandler}
                   >
                     Sign out
                   </button>
                 )}
               </Menu.Item>
             </Menu.Items>
           </Transition>
         </Menu>
          ) : (
            <>
              {" "}
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
            </>
          )}

         
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
                <Link
                  href="/properties/search"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Properties
                </Link>
                {session && (
                  <Link
                    href="/dashboard"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Dashboard
                  </Link>
                )}
              </div>
              <div className="py-6">
                {!session ? (
                  <>
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
                  </>
                ) : (
                  <button
                    className={classNames(
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                    onClick={signouthandler}
                  >
                    Sign out
                  </button>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
