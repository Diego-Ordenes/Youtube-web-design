/* eslint-disable no-unused-vars */

import { useContext } from "react";
import { MyContext } from "../../Context/ContextAll";

import img_logo_yt from "../../assets/img/youtube-logo.png";

import { FaUserCircle } from "react-icons/fa";
import { AiTwotoneAudio, AiOutlineBell } from "react-icons/ai";
import { MdOutlineVideoCall, MdWifiTethering } from "react-icons/md";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { PiUserSquareLight } from "react-icons/pi";
import { SiYoutubestudio } from "react-icons/si";
import { FiUsers } from "react-icons/fi";
import { TbLogout, TbShieldCog, TbLetterX } from "react-icons/tb";
import { RiArrowRightSLine, RiMoneyDollarCircleLine } from "react-icons/ri";
import { BiUserPin } from "react-icons/bi";
import {
  BsMoon,
  BsKeyboard,
  BsQuestionCircle,
  BsExclamationSquare,
} from "react-icons/bs";
import { CgPlayButtonR } from "react-icons/cg";
import { IoLanguageOutline } from "react-icons/io5";
import { GrLanguage } from "react-icons/gr";

import { HiBars3 } from "react-icons/hi2";
import Notifications from "./Notifications";

import img_bbyoda from "../../assets/img/baby_yoda.jpg";

function NavBar() {
  const {
    toggleMenu,
    menuNotification,
    toggleNotifications,
    togglePerfil,
    menuPerfil,
    menuCreate,
    toggleCreateVideo,
    toggleSearch,
    searchVisible
  } = useContext(MyContext);

  return (
    <header>
      <nav className="px-4 py-1 flex flex-row items-center justify-between w-full relative h-14">
        <div className="flex items-center">
          <button
            className="hover:bg-color-gray rounded-full p-2"
            onClick={toggleMenu}
          >
            <HiBars3 className="text-2xl opacity-60" />
          </button>
          <div className="w-28">
            <a href="/">
              <img src={img_logo_yt} alt="" className="w-full" />
            </a>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center">
            <div className="flex items-center max-md:hidden">
              <input
                type="text"
                placeholder="Buscar"
                className="rounded-tl-3xl rounded-bl-3xl border-x-2 border-y-2 bg-transparent rounded-color-gray px-3 py-2 w-72"
              />
              <button className="px-4 py-2 rounded-color-gray  rounded-tr-3xl rounded-br-3xl border border-color-gray">
                <PiMagnifyingGlassLight className="w-6 h-6 inline" />
              </button>
              <button className="mx-4 hover:bg-color-gray rounded-full cursor-pointer p-2">
                <AiTwotoneAudio className="w-5 h-5 inline" />
              </button>
            </div>
            {/* Search Responsive */}
            <div className={`absolute right-0 w-full py-0 px-2 items-center bg-color-white z-50 ${searchVisible ? "" : "hidden"}`}>
              <div className="border-b-2 flex items-center w-full">
                <button className="px-4 py-2">
                  <PiMagnifyingGlassLight className="w-6 h-6 inline" />
                </button>
                <input
                  type="text"
                  placeholder="Buscar"
                  className="bg-transparent rounded-color-gray px-3 py-2 w-full outline-none"
                />
                <button className="mx-4 cursor-pointer p-2" onClick={toggleSearch}>
                  <TbLetterX className="w-5 h-5 inline" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ul className="flex justify-center items-center">
            <li className="py-2 px-0 mx-1 cursor-pointer">
              <button className="py-2 px-0 hidden max-md:block" onClick={toggleSearch}>
                <PiMagnifyingGlassLight className="w-6 h-6 inline" />
              </button>
            </li>
            <li className="p-2 mx-1 cursor-pointer rounded-full hover:bg-color-gray relative">
              <button onClick={toggleCreateVideo}>
                <MdOutlineVideoCall className="w-6 h-6 inline opacity-60" />
              </button>
              {/* Upload Videos + Direct */}
              <div
                className={`py-4 px-1 absolute right-0 w-max z-50 bg-color-white rounded-2xl ${
                  menuCreate ? "" : "hidden"
                }`}
              >
                <ul>
                  <li className="py-2 px-2 hover:bg-color-gray  cursor-pointer">
                    <a href="#" className="flex items-center">
                      <CgPlayButtonR className="w-6 h-6 inline opacity-90" />
                      <span className="text-sm max-sm:text-xs opacity-90 text-black pl-3 ">
                        Subir video
                      </span>
                    </a>
                  </li>
                  <li className="py-2 px-2 hover:bg-color-gray  cursor-pointer">
                    <a href="#" className="flex items-center">
                      <MdWifiTethering className="w-6 h-6 inline opacity-90" />
                      <span className="text-sm max-sm:text-xs opacity-90 text-black pl-3 ">
                        Emitir en directo
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="p-2 mx-1 cursor-pointer rounded-full hover:bg-color-gray relative">
              <button onClick={toggleNotifications}>
                <AiOutlineBell className="w-6 h-6 inline  opacity-60" />
              </button>
              {/* Notifications */}
              <div className={`absolute right-0 z-50 bg-color-white top-11 max-[400px]:-right-6 ${menuNotification ? "" : "hidden"}`}>
                <div className="flex items-center justify-between p-4">
                  <span className="font-extrabold max-sm:text-sm">Notificaciones</span>
                  <a href="#">
                    <IoSettingsOutline className="w-6 h-6 inline max-sm:w-4 max-sm:h-4" />
                  </a>
                </div>
                <div className="overflow-y-scroll custom-scrollbar max-h-96">
                  {/* Componente Notifications */}
                  <Notifications />
                </div>
              </div>
            </li>
            <li className="p-2 mx-1 cursor-pointer relative">
              <button className="flex items-center" onClick={togglePerfil}>
                <div className="w-6 h-6 ">
                  <img
                    src={img_bbyoda}
                    alt=""
                    className="w-full rounded-full"
                  />
                </div>
              </button>
              {/* My Perfil */}
              <div
                className={`absolute bg-color-white z-50 right-0 w-max flex flex-col p-4 rounded-2xl shadow-xl ${
                  menuPerfil ? "" : "hidden"
                }`}
              >
                <div className="flex items-start pb-2">
                  <div className="w-12">
                    <img
                      src={img_bbyoda}
                      alt=""
                      className="w-full rounded-full"
                    />
                  </div>
                  <div className="flex flex-col pl-4 font-extrabold ">
                    <span className="text-color-black text-base">
                      Fernando :D
                    </span>
                    <span className="text-color-black text-base">
                      @Fernando145
                    </span>
                    <a href="#" className="text-sm text-blue-600 py-2">
                      Gestionar tu cuenta de Google
                    </a>
                  </div>
                </div>
                <div className="overflow-y-scroll custom-scrollbar">
                  <ul className="w-full py-2 border-b-2">
                    <li className="py-1 px-2 hover:bg-color-gray rounded-lg cursor-pointer">
                      <a href="#" className="flex items-center">
                        <PiUserSquareLight className="w-6 h-6 inline opacity-90" />
                        <span className="text-sm max-sm:text-xs opacity-90 text-black pl-3 ">
                          Tu Canal
                        </span>
                      </a>
                    </li>
                    <li className="py-1 px-2 hover:bg-color-gray rounded-lg cursor-pointer">
                      <a href="#" className="flex items-center">
                        <SiYoutubestudio className="w-6 h-6 inline opacity-90" />
                        <span className="text-sm max-sm:text-xs opacity-90 text-black pl-3 ">
                          Youtube Studio
                        </span>
                      </a>
                    </li>
                    <li className="py-1 px-2 hover:bg-color-gray rounded-lg cursor-pointer">
                      <button
                        href="#"
                        className="flex items-center flex-row w-full justify-between"
                      >
                        <div>
                          <FiUsers className="w-6 h-6 inline opacity-90" />
                          <span className="text-sm max-sm:text-xs opacity-90 text-black pl-3 ">
                            Cambiar de cuenta
                          </span>
                        </div>
                        <div>
                          <RiArrowRightSLine className="w-6 h-6 inline opacity-90" />
                        </div>
                      </button>
                    </li>
                    <li className="py-1 px-2 hover:bg-color-gray rounded-lg cursor-pointer">
                      <a href="#" className="flex items-center">
                        <TbLogout className="w-6 h-6 inline opacity-90" />
                        <span className="text-sm max-sm:text-xs opacity-90 text-black pl-3 ">
                          Cerrar sesion
                        </span>
                      </a>
                    </li>
                  </ul>
                  <ul className="w-full py-2 border-b-2">
                    <li className="py-1 px-2 hover:bg-color-gray rounded-lg cursor-pointer">
                      <a href="#" className="flex items-center">
                        <RiMoneyDollarCircleLine className="w-6 h-6 inline opacity-90" />
                        <span className="text-sm max-sm:text-xs opacity-90 text-black pl-3 ">
                          Compras y suscripciones
                        </span>
                      </a>
                    </li>
                    <li className="py-1 px-2 hover:bg-color-gray rounded-lg cursor-pointer">
                      <a href="#" className="flex items-center">
                        <BiUserPin className="w-6 h-6 inline opacity-90" />
                        <span className="text-sm max-sm:text-xs opacity-90 text-black pl-3 ">
                          Tus datos en Youtube
                        </span>
                      </a>
                    </li>
                  </ul>
                  <ul className="w-full py-2 border-b-2">
                    <li className="py-1 px-2 hover:bg-color-gray rounded-lg cursor-pointer">
                      <button
                        href="#"
                        className="flex items-center flex-row w-full justify-between"
                      >
                        <div>
                          <BsMoon className="w-6 h-6 inline opacity-90" />
                          <span className="text-sm max-sm:text-xs opacity-90 text-black pl-3 ">
                            Aspecto: tema del dispositivo
                          </span>
                        </div>
                        <div>
                          <RiArrowRightSLine className="w-6 h-6 inline opacity-90" />
                        </div>
                      </button>
                    </li>
                    <li className="py-1 px-2 hover:bg-color-gray rounded-lg cursor-pointer">
                      <button
                        href="#"
                        className="flex items-center flex-row w-full justify-between"
                      >
                        <div>
                          <IoLanguageOutline className="w-6 h-6 inline opacity-90" />
                          <span className="text-sm max-sm:text-xs opacity-90 text-black pl-3 ">
                            Idioma: Español
                          </span>
                        </div>
                        <div>
                          <RiArrowRightSLine className="w-6 h-6 inline opacity-90" />
                        </div>
                      </button>
                    </li>
                    <li className="py-1 px-2 hover:bg-color-gray rounded-lg cursor-pointer">
                      <button
                        href="#"
                        className="flex items-center flex-row w-full justify-between"
                      >
                        <div>
                          <TbShieldCog className="w-6 h-6 inline opacity-90" />
                          <span className="text-sm max-sm:text-xs opacity-90 text-black pl-3 ">
                            Modo Restringido: Desactivado
                          </span>
                        </div>
                        <div>
                          <RiArrowRightSLine className="w-6 h-6 inline opacity-90" />
                        </div>
                      </button>
                    </li>
                    <li className="py-1 px-2 hover:bg-color-gray rounded-lg cursor-pointer">
                      <button
                        href="#"
                        className="flex items-center flex-row w-full justify-between"
                      >
                        <div>
                          <GrLanguage className="w-6 h-6 inline opacity-90" />
                          <span className="text-sm max-sm:text-xs opacity-90 text-black pl-3 ">
                            Ubicacion Chile
                          </span>
                        </div>
                        <div>
                          <RiArrowRightSLine className="w-6 h-6 inline opacity-90" />
                        </div>
                      </button>
                    </li>
                    <li className="py-1 px-2 hover:bg-color-gray rounded-lg cursor-pointer">
                      <a href="#" className="flex items-center">
                        <BsKeyboard className="w-6 h-6 inline opacity-90" />
                        <span className="text-sm max-sm:text-xs opacity-90 text-black pl-3 ">
                          Combinacion de teclas
                        </span>
                      </a>
                    </li>
                  </ul>
                  <ul className="w-full py-1 border-b-2">
                    <li className="py-2 px-2 hover:bg-color-gray rounded-lg cursor-pointer">
                      <a href="#" className="flex items-center">
                        <IoSettingsOutline className="w-6 h-6 inline opacity-90" />
                        <span className="text-sm max-sm:text-xs opacity-90 text-black pl-3 ">
                          Configuración
                        </span>
                      </a>
                    </li>
                  </ul>
                  <ul className="w-full py-1">
                    <li className="py-2 px-2 hover:bg-color-gray rounded-lg cursor-pointer">
                      <a href="#" className="flex items-center">
                        <BsQuestionCircle className="w-6 h-6 inline opacity-90" />
                        <span className="text-sm  max-sm:text-xs opacity-90 text-black pl-3 ">
                          Ayuda
                        </span>
                      </a>
                    </li>
                    <li className="py-2 px-2 hover:bg-color-gray rounded-lg cursor-pointer">
                      <a href="#" className="flex items-center">
                        <BsExclamationSquare className="w-6 h-6 inline opacity-90" />
                        <span className="text-sm  max-sm:text-xs opacity-90 text-black pl-3 ">
                          Enviar Sugerencias
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
