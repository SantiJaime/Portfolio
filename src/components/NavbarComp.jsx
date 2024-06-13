import { Fragment } from "react";
import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import WaveText from "./WaveText";
import { Link } from "react-router-dom";
import { NAVIGATION } from "../constants/const";

const NavbarComp = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bgNav fixedTopNav">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <Link className="flex lg:flex-1" to="/" data-aos="fade-right">
            <WaveText text={"Santi Jaime"} />
          </Link>

          <button
            type="button"
            className="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-50 hover:bg-blue-gray-300 hover:bg-opacity-25 transition-all"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menú lateral</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div
            className="hidden lg:flex justify-center lg:gap-x-12"
            data-aos="fade-down"
          >
            {NAVIGATION.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className={
                  "text-base font-semibold leading-7 text-gray-50 hover:bg-blue-gray-300 hover:bg-opacity-25 transition-all rounded-md px-2 py-1 text-md no-underline"
                }
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
        </nav>
        <Transition as={Fragment} show={mobileMenuOpen}>
          <Dialog
            as="div"
            className="lg:hidden bg-blue-gray-500"
            onClose={setMobileMenuOpen}
          >
            <TransitionChild
              as={Fragment}
              enter="transition-opacity ease-linear duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 z-50" />
            </TransitionChild>
            <TransitionChild
              as={Fragment}
              enter="transition ease-in-out duration-500 transform"
              enterFrom="-translate-y-full"
              enterTo="translate-y-0"
              leave="transition ease-in-out duration-1000 transform"
              leaveFrom="translate-y-0"
              leaveTo="-translate-y-full"
            >
              <DialogPanel className="fixed inset-y-0 z-50 w-full bgNav px-6 py-6 sm:max-w-sm">
                <div className="flex items-center justify-between">
                  <Link className="-m-1.5 p-1.5 w-44" to="/">
                    <img src="/portfolio2.png" className="img-fluid" />
                  </Link>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-50 hover:bg-blue-gray-300 hover:bg-opacity-25 transition-all"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Cerrar menú lateral</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="my-3">
                  <WaveText text={"Santi Jaime"} menuOpen={mobileMenuOpen} />
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6">
                    <div className="space-y-2 py-6">
                      {NAVIGATION.map((item) => (
                        <Link
                          key={item.name}
                          to={item.to}
                          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                          className={
                            "block text-base font-semibold leading-7 text-gray-50 hover:bg-blue-gray-300 hover:bg-opacity-25 transition-all rounded-md px-2 py-1 text-md no-underline"
                          }
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </Dialog>
        </Transition>
      </header>
    </>
  );
};

export default NavbarComp;
