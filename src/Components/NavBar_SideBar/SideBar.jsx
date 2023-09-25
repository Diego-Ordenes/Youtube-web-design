/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

/* Images and iconos of "React/Icons" */
import img_logo_yt from "../../assets/img/youtube-logo.png";
import img_sub_1 from "../../assets/img/luisito.jpg";
import img_sub_2 from "../../assets/img/soydalto.jpg";
import img_sub_3 from "../../assets/img/auron.jpg";
import img_sub_4 from "../../assets/img/elrubius.jpg";
import img_sub_5 from "../../assets/img/elxokastv.jpg";
import img_sub_6 from "../../assets/img/stimp.jpg";
import img_sub_7 from "../../assets/img/leo.jpg";

import { AiOutlineQuestionCircle} from "react-icons/ai";
import { MdOutlineAppShortcut,MdOutlineSubscriptions,} from "react-icons/md";
import {  PiMusicNoteLight } from "react-icons/pi";
import { BiSolidHome, BiSolidVideos, BiTimeFive, BiLike } from "react-icons/bi";
import { GoHistory } from "react-icons/go";
import { RiVideoFill, RiPlayList2Line } from "react-icons/ri";
import { IoIosArrowUp, IoIosArrowDown} from "react-icons/io";
import { HiOutlineFire } from "react-icons/hi";
import { ImNewspaper } from "react-icons/im";
import { TfiCup } from "react-icons/tfi";
import { BsLightbulb, BsFlag, BsExclamationDiamond } from "react-icons/bs";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { SiYoutubemusic,SiYoutubegaming,SiYoutubestudio,} from "react-icons/si";
import { LuSettings } from "react-icons/lu";

/* */
import { useContext} from "react";
import {useLocation } from "react-router-dom"
import { MyContext } from "../../Context/ContextAll";
import { Link } from 'react-router-dom';


function SideBar() {
   
  /* Obteniendo funciones y valores de "MyContext" para usarlos en el SideBar */
   const {showScrollbar,menuVisible,handleMouseEnter,handleMouseLeave} = useContext(MyContext);

   /* Utilizar "useLocation()", para cambiar el estado del SideBar, si se encuentra en la URL "/videos" */
   const location = useLocation();

   // Obtener el videoId de la ruta actual
const match = location.pathname.match(/^\/videos\/(\d+)$/);
const isVideoShowPage = !!match;

// Obtener el videoId si corresponde
const videoId = isVideoShowPage ? match[1] : null;
   
  return (
    <>
    {/* Nav Lateral Izquierdo  + Nav Derecha*/}
    <div className={`left-0 flex`}>
      <div className={`  bg-black opacity-50  z-40 ${menuVisible ? "" : "fixed max-xl:w-full max-xl:h-full"} ${menuVisible && videoId ? "hidden" : ""} ${videoId ? "fixed w-full h-full" : ""} `}></div>
      <div className={`flex  flex-col px-1 h-full overflow-y-hidden  max-xl:overflow-y-scroll custom-scrollbar ${menuVisible && videoId ? "hidden" : ""} ${videoId ? 'fixed z-50 bg-color-white w-56' : ''} ${showScrollbar ? "overflow-y-scroll" : ""} ${menuVisible ? "w-20  max-xl:w-0 max-xl:p-0" : "w-60 max-xl:fixed max-xl:left-0 max-xl:bg-color-white max-xl:z-50 max-xl:w-56 "}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div >
          {/* Inicio */}
          <ul className="border-b-2 font-extrabold">
            <li className="py-2 px-5 hover:bg-color-gray rounded-lg cursor-pointer">
              <Link to={'/'}  className="flex items-center">
                <BiSolidHome className="w-6 h-6 inline opacity-90" />
                <span className={`text-sm opacity-90 text-black pl-6 text-overflow: ellipsis; overflow-hidden whitespace-nowrap ${menuVisible ? "hidden" : ""}`}>
                  Inicio
                </span>
              </Link>
            </li>
            <li className="py-2 px-5 hover:bg-color-gray rounded-lg cursor-pointer">
              <a href="#" className="flex items-center">
                <MdOutlineAppShortcut className="w-6 h-6 inline opacity-90" />
                <span className={`text-sm opacity-90 text-black pl-6 text-overflow: ellipsis; overflow-hidden whitespace-nowrap ${menuVisible ? "hidden" : ""}`}>
                  Shorts
                </span>
              </a>
            </li>
            <li className="py-2 px-5 hover:bg-color-gray rounded-lg cursor-pointer">
              <a href="#" className="flex items-center">
                <MdOutlineSubscriptions className="w-6 h-6 inline opacity-90" />
                <span className={`text-sm opacity-90 text-black pl-6 text-overflow: ellipsis; overflow-hidden whitespace-nowrap ${menuVisible ? "hidden" : ""}`}>
                  Suscripciones
                </span>
              </a>
            </li>
          </ul>
          <ul className="py-6 border-b-2 font-extrabold">
            <li className="py-2 px-5 hover:bg-color-gray rounded-lg cursor-pointer">
              <Link to={'/mylibrary'} className="flex items-center">
                <BiSolidVideos className="w-6 h-6 inline opacity-90" />
                <span className={`text-sm opacity-90 text-black pl-6 text-overflow: ellipsis; overflow-hidden whitespace-nowrap ${menuVisible  ? "hidden" : ""}`}>
                  Mi biblioteca
                </span>
              </Link>
            </li>
            <li className="py-2 px-5 hover:bg-color-gray rounded-lg cursor-pointer">
              <Link to={'/history'} className="flex items-center">
                <GoHistory className="w-6 h-6 inline opacity-90" />
                <span className={`text-sm opacity-90 text-black pl-6 text-overflow: ellipsis; overflow-hidden whitespace-nowrap ${menuVisible ? "hidden" : ""}`}>
                  Historial
                </span>
              </Link>
            </li>
            <li className="py-2 px-5 hover:bg-color-gray rounded-lg cursor-pointer">
              <a href="#" className="flex items-center">
                <RiVideoFill className="w-6 h-6 inline opacity-90" />
                <span className={`text-sm opacity-90 text-black pl-6 text-overflow: ellipsis; overflow-hidden whitespace-nowrap ${menuVisible ? "hidden" : ""}`}>
                  Mis videos
                </span>
              </a>
            </li>
            <li className="py-2 px-5 hover:bg-color-gray rounded-lg cursor-pointer">
              <Link to={'/seelater'}  className="flex items-center">
                <BiTimeFive className="w-6 h-6 inline opacity-90" />
                <span className={`text-sm opacity-90 text-black pl-6 text-overflow: ellipsis; overflow-hidden whitespace-nowrap ${menuVisible ? "hidden" : ""}`}>
                  Ver mas tarde
                </span>
              </Link>
            </li>
            <li className="py-2 px-5 hover:bg-color-gray rounded-lg cursor-pointer">
              <Link to={'/likevideos'} className="flex items-center">
                <BiLike className="w-6 h-6 inline opacity-90" />
                <span className={`text-sm opacity-90 text-black pl-6 text-overflow: ellipsis; overflow-hidden whitespace-nowrap ${menuVisible ? "hidden" : ""}`}>
                  Videos me gusta
                </span>
              </Link>
            </li>
            <li className="py-2 px-5 hover:bg-color-gray rounded-lg cursor-pointer">
              <a href="#" className="flex items-center">
                <RiPlayList2Line className="w-6 h-6 inline opacity-90" />
                <span className={`text-sm opacity-90 text-black pl-6 text-overflow: ellipsis; overflow-hidden whitespace-nowrap ${menuVisible ? "hidden" : ""}`}>
                  PlayList1
                </span>
              </a>
            </li>
            <li className="py-2 px-5 hover:bg-color-gray rounded-lg cursor-pointer">
              <a href="#" className="flex items-center">
                <RiPlayList2Line className="w-6 h-6 inline opacity-90" />
                <span className={`text-sm opacity-90 text-black pl-6 text-overflow: ellipsis; overflow-hidden whitespace-nowrap ${menuVisible ? "hidden" : ""}`}>
                  PlayList2
                </span>
              </a>
            </li>
            <li className="py-2 px-5 hover:bg-color-gray rounded-lg cursor-pointer">
              <a href="#" className="flex items-center">
                <RiPlayList2Line className="w-6 h-6 inline opacity-90" />
                <span className={`text-sm opacity-90 text-black pl-6 text-overflow: ellipsis; overflow-hidden whitespace-nowrap ${menuVisible ? "hidden" : ""}`}>
                  PlayList3
                </span>
              </a>
            </li>
            <li className="py-2 px-5 hover:bg-color-gray rounded-lg cursor-pointer">
              <a href="#" className="flex items-center">
                <IoIosArrowUp className="w-6 h-6 inline opacity-90" />
                <span className={`text-sm opacity-90 text-black pl-6 text-overflow: ellipsis; overflow-hidden whitespace-nowrap ${menuVisible ? "hidden" : ""}`}>
                  Mostrar menos
                </span>
              </a>
            </li>
          </ul>
          {/* Suscripciones */}
          <ul className="py-6 border-b-2 font-extrabold">
            <li className={`py-2 px-5 ${menuVisible ? "hidden" : ""}`}>
              <h3 className="font-extrabold text-1xl">Suscripciones</h3>
            </li>
            <li className="py-2 px-5 hover:bg-color-gray rounded-lg cursor-pointer">
              <a href="#" className="flex items-center">
                <div className="w-6 h-6 inline">
                  <img src={img_sub_1} alt="" className="w-full rounded-full" />
                </div>
                <span className={`text-sm opacity-90 text-black pl-6 text-overflow: ellipsis; overflow-hidden whitespace-nowrap ${menuVisible ? "hidden" : ""}`}>
                  Luisito Comunica
                </span>
              </a>
            </li>
            <li className="py-2 px-5 hover:bg-color-gray rounded-lg cursor-pointer">
              <a href="#" className="flex items-center">
                <div className="w-6 h-6 inline">
                  <img src={img_sub_2} alt="" className="w-full rounded-full" />
                </div>
                <span className={`text-sm opacity-90 text-black pl-6 text-overflow: ellipsis; overflow-hidden whitespace-nowrap ${menuVisible ? "hidden" : ""}`}>
                  Soy Dalto
                </span>
              </a>
            </li>
            <li className="py-2 px-5 hover:bg-color-gray rounded-lg cursor-pointer">
              <a href="#" className="flex items-center">
                <div className="w-6 h-6 inline">
                  <img src={img_sub_3} alt="" className="w-full rounded-full" />
                </div>
                <span className={`text-sm opacity-90 text-black pl-6 text-overflow: ellipsis; overflow-hidden whitespace-nowrap ${menuVisible ? "hidden" : ""}`}>
                  Auron
                </span>
              </a>
            </li>
            <li className="py-2 px-5 hover:bg-color-gray rounded-lg cursor-pointer">
              <a href="#" className="flex items-center">
                <div className="w-6 h-6 inline">
                  <img src={img_sub_4} alt="" className="w-full rounded-full" />
                </div>
                <span className={`text-sm opacity-90 text-black pl-6 text-overflow: ellipsis; overflow-hidden whitespace-nowrap ${menuVisible ? "hidden" : ""}`}>
                  ElRubiusOMG
                </span>
              </a>
            </li>
            <li className="py-2 px-5 hover:bg-color-gray rounded-lg cursor-pointer">
              <a href="#" className="flex items-center">
                <div className="w-6 h-6 inline">
                  <img src={img_sub_5} alt="" className="w-full rounded-full" />
                </div>
                <span className={`text-sm opacity-90 text-black pl-6 text-overflow: ellipsis; overflow-hidden whitespace-nowrap ${menuVisible ? "hidden" : ""}`}>
                  elxokasTV
                </span>
              </a>
            </li>
            <li className="py-2 px-5 hover:bg-color-gray rounded-lg cursor-pointer">
              <a href="#" className="flex items-center">
                <div className="w-6 h-6 inline">
                  <img src={img_sub_6} alt="" className="w-full rounded-full" />
                </div>
                <span className={`text-sm opacity-90 text-black pl-6 text-overflow: ellipsis; overflow-hidden whitespace-nowrap ${menuVisible ? "hidden" : ""}`}>
                  stimp
                </span>
              </a>
            </li>
            <li className="py-2 px-5 hover:bg-color-gray rounded-lg cursor-pointer">
              <a href="#" className="flex items-center">
                <div className="w-6 h-6 inline">
                  <img src={img_sub_7} alt="" className="w-full rounded-full" />
                </div>
                <span className={`text-sm opacity-90 text-black pl-6 text-overflow: ellipsis; overflow-hidden whitespace-nowrap ${menuVisible ? "hidden" : ""}`}>
                  Leo bascuñan
                </span>
              </a>
            </li>
            <li className="py-2 px-5 hover:bg-color-gray rounded-lg cursor-pointer">
              <a href="#" className="flex items-center">
                <IoIosArrowDown className="w-6 h-6 inline opacity-90" />
                <span className={`text-sm opacity-90 text-black pl-6 text-overflow: ellipsis; overflow-hidden whitespace-nowrap ${menuVisible ? "hidden" : ""}`}>
                  Mostrar mas
                </span>
              </a>
            </li>
          </ul>
          {/* Explorar */}
          <ul className="py-6 border-b-2 font-extrabold">
            <li className={`py-2 px-5 ${menuVisible ? "hidden" : ""}`}>
              <h3 className="font-extrabold text-1xl">Explorar</h3>
            </li>
            <li className="py-2 px-5 hover:bg-color-gray rounded-lg cursor-pointer">
              <a href="#" className="flex items-center">
                <HiOutlineFire className="w-6 h-6 inline opacity-90" />
                <span className={`text-sm opacity-90 text-black pl-6 text-overflow: ellipsis; overflow-hidden whitespace-nowrap ${menuVisible ? "hidden" : ""}`}>
                  Tendencias
                </span>
              </a>
            </li>
            <li className="py-2 px-5 hover:bg-color-gray rounded-lg cursor-pointer">
              <a href="#" className="flex items-center">
                <PiMusicNoteLight className="w-6 h-6 inline opacity-90" />
                <span className={`text-sm opacity-90 text-black pl-6 text-overflow: ellipsis; overflow-hidden whitespace-nowrap ${menuVisible ? "hidden" : ""}`}>
                  Musica
                </span>
              </a>
            </li>
            <li className="py-2 px-5 hover:bg-color-gray rounded-lg cursor-pointer">
              <a href="#" className="flex items-center">
                <SiYoutubegaming className="w-6 h-6 inline opacity-90" />
                <span className={`text-sm opacity-90 text-black pl-6 text-overflow: ellipsis; overflow-hidden whitespace-nowrap ${menuVisible ? "hidden" : ""}`}>
                  VideoJuegos
                </span>
              </a>
            </li>
            <li className="py-2 px-5 hover:bg-color-gray rounded-lg cursor-pointer">
              <a href="#" className="flex items-center">
                <ImNewspaper className="w-6 h-6 inline opacity-90" />
                <span className={`text-sm opacity-90 text-black pl-6 text-overflow: ellipsis; overflow-hidden whitespace-nowrap ${menuVisible ? "hidden" : ""}`}>
                  Noticias
                </span>
              </a>
            </li>
            <li className="py-2 px-5 hover:bg-color-gray rounded-lg cursor-pointer">
              <a href="#" className="flex items-center">
                <TfiCup className="w-6 h-6 inline opacity-90" />
                <span className={`text-sm opacity-90 text-black pl-6 text-overflow: ellipsis; overflow-hidden whitespace-nowrap ${menuVisible ? "hidden" : ""}`}>
                  Deportes
                </span>
              </a>
            </li>
            <li className="py-2 px-5 hover:bg-color-gray rounded-lg cursor-pointer">
              <a href="#" className="flex items-center">
                <BsLightbulb className="w-6 h-6 inline opacity-90" />
                <span className={`text-sm opacity-90 text-black pl-6 text-overflow: ellipsis; overflow-hidden whitespace-nowrap ${menuVisible ? "hidden" : ""}`}>
                  Aprendizaje
                </span>
              </a>
            </li>
          </ul>
          {/* Mas de Yotubue */}
          <ul className="py-6 border-b-2 font-extrabold">
            <li className={`py-2 px-5 ${menuVisible ? "hidden" : ""}`}>
              <h3 className="font-extrabold text-1xl">Más de Youtube</h3>
            </li>
            <li className="py-2 px-5 hover:bg-color-gray rounded-lg cursor-pointer">
              <a href="#" className="flex items-center">
                <div className="w-6 h-6 inline">
                  <img src={img_logo_yt} alt="" className="w-full" />
                </div>
                <span className={`text-sm opacity-90 text-black pl-6 text-overflow: ellipsis; overflow-hidden whitespace-nowrap ${menuVisible ? "hidden" : ""}`}>
                  Youtube Premium
                </span>
              </a>
            </li>
            <li className="py-2 px-5 hover:bg-color-gray rounded-lg cursor-pointer">
              <a href="#" className="flex items-center">
                <SiYoutubestudio className="w-6 h-6 inline opacity-90 text-color-red" />
                <span className={`text-sm opacity-90 text-black pl-6 text-overflow: ellipsis; overflow-hidden whitespace-nowrap ${menuVisible ? "hidden" : ""}`}>
                  Youtube Studio
                </span>
              </a>
            </li>
            <li className="py-2 px-5 hover:bg-color-gray rounded-lg cursor-pointer">
              <a href="#" className="flex items-center">
                <SiYoutubemusic className="w-6 h-6 inline opacity-90 text-color-red" />
                <span className={`text-sm opacity-90 text-black pl-6 text-overflow: ellipsis; overflow-hidden whitespace-nowrap ${menuVisible ? "hidden" : ""}`}>
                  Youtube Music
                </span>
              </a>
            </li>
            <li className="py-2 px-5 hover:bg-color-gray rounded-lg cursor-pointer">
              <a href="#" className="flex items-center">
                <TbBrandYoutubeKids className="w-6 h-6 inline opacity-90 text-color-red" />
                <span className={`text-sm opacity-90 text-black pl-6  text-overflow: ellipsis; overflow-hidden whitespace-nowrap ${menuVisible ? "hidden" : ""}`}>
                  Youtube Kids
                </span>
              </a>
            </li>
          </ul>
          <ul className="py-6 border-b-2 font-extrabold">
            <li className="py-2 px-5 hover:bg-color-gray rounded-lg cursor-pointer">
              <a href="#" className="flex items-center">
                <LuSettings className="w-6 h-6 inline opacity-90" />
                <span className={`text-sm opacity-90 text-black pl-6 text-overflow: ellipsis; overflow-hidden whitespace-nowrap ${menuVisible ? "hidden" : ""}`}>
                  Configuracion
                </span>
              </a>
            </li>
            <li className="py-2 px-5 hover:bg-color-gray rounded-lg cursor-pointer">
              <a href="#" className="flex items-center">
                <BsFlag className="w-6 h-6 inline opacity-90 " />
                <span className={`text-sm opacity-90 text-black pl-6 text-overflow: ellipsis; overflow-hidden whitespace-nowrap ${menuVisible ? "hidden" : ""}`}>
                  Historial de denuncia
                </span>
              </a>
            </li>
            <li className="py-2 px-5 hover:bg-color-gray rounded-lg cursor-pointer">
              <a href="#" className="flex items-center">
                <AiOutlineQuestionCircle className="w-6 h-6 inline opacity-90" />
                <span className={`text-sm opacity-90 text-black pl-6 text-overflow: ellipsis; overflow-hidden whitespace-nowrap ${menuVisible ? "hidden" : ""}`}>
                  Ayuda
                </span>
              </a>
            </li>
            <li className="py-2 px-5 hover:bg-color-gray rounded-lg cursor-pointer">
              <a href="#" className="flex items-center">
                <BsExclamationDiamond className="w-6 h-6 inline opacity-90 " />
                <span className={`text-sm opacity-90 text-black pl-6 text-overflow: ellipsis; overflow-hidden whitespace-nowrap ${menuVisible ? "hidden" : ""}`}>
                  Enviar Sugerencias
                </span>
              </a>
            </li>
          </ul>
          {/* Informacion Extra - Parte inferior */}
          <div className={` py-6  ${menuVisible ? "hidden" : ""}`}>
            <div className="py-2 px-5 w-full flex flex-wrap">
              <a href="#" className="pr-1.5 text-sm opacity-80 ">
                Desarrolladores
              </a>
              <a href="#" className="pr-1.5 text-sm opacity-80 ">
                Prensa
              </a>
              <a href="#" className="pr-1.5 text-sm opacity-80 ">
                Derechos de autor
              </a>
              <a href="#" className="pr-1.5 text-sm opacity-80 ">
                Contactar
              </a>
              <a href="#" className="pr-1.5 text-sm opacity-80 ">
                Creadores
              </a>
              <a href="#" className="pr-1.5 text-sm opacity-80 ">
                Publicidad
              </a>
              <a href="#" className="pr-1.5 text-sm opacity-80 ">
                Desarrolladores
              </a>
            </div>
            <div className="py-2 px-5 w-full flex flex-wrap">
              <a href="#" className="pr-1.5 text-sm opacity-80 ">
                Términos
              </a>
              <a href="#" className="pr-1.5 text-sm opacity-80 ">
                Privacidad y seguridad
              </a>
              <a href="#" className="pr-1.5 text-sm opacity-80 ">
                Cómo funciona Youtube
              </a>
              <a href="#" className="pr-1.5 text-sm opacity-80 ">
                Probar
              </a>
              <a href="#" className="pr-1.5 text-sm opacity-80 ">
                Funciones nuevas
              </a>
            </div>
            <div className="py-2 px-5 w-full text-sm opacity-80">© 2023 Google LLC</div>
          </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default SideBar