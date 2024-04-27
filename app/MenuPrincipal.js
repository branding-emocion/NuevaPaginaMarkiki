"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ItemMenu from "./ItemMenu";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { Facebook, Instagram } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";

const MenuPrincipal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [submenuOpenProyectos, setSubmenuOpenProyectos] = useState(false);

  const pathname = usePathname();

  const handleMouseEnter = () => {
    setSubmenuOpen(true);
  };
  const handleMouseLeave = () => {
    setSubmenuOpen(false);
  };

  const handleMouseEnterProyectos = () => {
    setSubmenuOpenProyectos(true);
  };
  const handleMouseLeaveProyectos = () => {
    setSubmenuOpenProyectos(false);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        style={{ filter: "drop-shadow(0px 0px 3px black)" }}
        className=" sticky z-50 top-0 p-2 md:px-16 shadow-sm md:flex md:gap-x-3 md:items-center md:justify-start bg-black"
      >
        <div className="  flex justify-between items-center">
          {/* Escudo Logo "inicio" */}
          <Link href="/">
            <div
              // style={{ filter: "drop-shadow(0px 0px 6px #99C5B5)" }}
              className="cursor-pointer"
            >
              <Image
                title="Ir a inicio"
                src="/GrupoMarkiki.jpeg"
                width={150}
                height={40}
                alt="Logotype"
                className="object-contain"
              />
            </div>
          </Link>
          <span className="text-3xl cursor-pointer mx-2 md:hidden block text-white">
            <button name="Menu" onClick={() => setIsOpen(!isOpen)}>
              <svg
                className="h-10 w-10 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>{" "}
            </button>
          </span>
        </div>
        <div>
          <div
            className={` text-center  flex flex-col h-screen md:h-auto  md:flex md:flex-row  md:items-center z-[-1] md:z-auto md:static gap-2 absolute text-white md:text-white  bg-[#3538a9] md:bg-transparent w-full left-0 top-full md:w-auto md:py-0  md:pl-0 pl-7 md:opacity-100 opacity-0 right-[-400px] transition-all ease-in  ${
              isOpen ? ` right-0 py-11 opacity-100` : `hidden`
            }`}
          >
            {/*  */}
            <ItemMenu
              ruta="/"
              setIsOpen={setIsOpen}
              border={pathname == "/" ? true : false}
            >
              Home
            </ItemMenu>

            <div
              className="relative inline-block text-center self-center"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                name="Menu"
                type="button"
                className=" hover:bg-black hover:text-white px-3 py-2 rounded-md  flex items-center uppercase md:text-base lg:text-xl  "
              >
                Empresas
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 ml-1 transition-transform ${
                    submenuOpen ? "transform rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.293 7.293a1 1 0 0 1 1.414 0L10 9.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {submenuOpen && (
                <div
                  className="origin-top-right absolute right-0  rounded-md shadow-lg left-0 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none w-56 py-2"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div
                    className=" flex flex-col items-center text-start px-4 font-semibold"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <Link
                      href={`/Empresa/Electronica`}
                      className="block w-full px-4 py-2 text-sm text-gray-700 hover:rounded-sm hover:bg-black hover:text-white uppercase"
                      role="menuitem"
                    >
                      Soluciones Eletrónicas{" "}
                    </Link>
                  </div>
                  <div
                    className=" flex flex-col items-center text-start px-4 font-semibold"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <Link
                      href={`/Empresa/Contratistas`}
                      className="block w-full px-4 py-2 text-sm text-gray-700 hover:rounded-sm hover:bg-black hover:text-white uppercase"
                      role="menuitem"
                    >
                      M&M{" "}
                    </Link>
                  </div>
                  <div
                    className=" flex flex-col items-center text-start px-4 font-semibold"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <Link
                      href={`/Empresa/Soundbeats`}
                      className="block w-full px-4 py-2 text-sm text-gray-700 hover:rounded-sm hover:bg-black hover:text-white uppercase"
                      role="menuitem"
                    >
                      Soundbeats
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <ItemMenu
              ruta="/Contacto"
              setIsOpen={setIsOpen}
              border={pathname == "/Contacto" ? true : false}
            >
              Contacto
            </ItemMenu>
          </div>
        </div>
        <div className="flex-grow  items-center text-white">
          <section className="hidden lg:flex justify-end items-center gap-x-2">
            <Facebook className="w-8 h-8" />
            <Instagram className="w-7 h-7" />
            <BsTwitterX className="w-7 h-7" />
          </section>
        </div>
      </nav>
    </>
  );
};

export default MenuPrincipal;
