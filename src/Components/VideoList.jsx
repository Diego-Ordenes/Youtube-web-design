/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { TbLetterX } from "react-icons/tb";
import {AiOutlineMore,AiOutlineMinusCircle} from "react-icons/ai"
import {RiPlayList2Fill} from "react-icons/ri"
import {BiTimeFive,BiTrash} from "react-icons/bi"
import {MdPlaylistAdd} from "react-icons/md"
import {HiDownload} from "react-icons/hi"
import {PiShareFatLight} from "react-icons/pi"
import {GoMoveToTop,GoMoveToBottom} from "react-icons/go"
import {HiBars2} from "react-icons/hi2"
import {CiFlag1} from "react-icons/ci"
import {GoCircleSlash} from "react-icons/go"

import {React,useState} from "react";
import { Link } from 'react-router-dom';
function VideoList({ content, urlHistory, urlSeeLaterVideo, urlLikeVideo, urlVideo }) {

  /* Funciones para mostrar y ocultar icono al hacer hover en el "VideoList" */
  const [iconVisible, setIconVisible] = useState(false);
  const [menuVideoLikeInside, setmenuVideoLikeInside] = useState(false);

  const handleMouseEnter = () => {
    if (!menuVideoLikeInside) {
      setIconVisible(true);
    }
  };

  const handleMouseLeave = () => {
    if (!menuVideoLikeInside) {
      setIconVisible(false);
    }
  };

  const toggleVideoLikeInside = () => {
    setmenuVideoLikeInside(!menuVideoLikeInside);
  };




  return (
    <li className="flex items-center justify-between w-full py-2 cursor-pointer relative"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link to={`/videos/${content.id}`}>
        <div className="flex w-full ">
          <div className="flex items-center">
            <span className={`w-8 h-8 max-sm:w-6 max-sm:h-4 ${urlLikeVideo || urlHistory ? "" : "hidden"}`}>{content.id}</span>
            <span className={`w-8 h-8 max-sm:w-6 max-sm:h-4 ${urlSeeLaterVideo ? "" : "hidden"}`}><HiBars2/></span>
            <div className={`w-48 h-full relative max-sm:w-32  max-sm:min-24 ${urlVideo ? "max-sm:w-48" : ""}`}>
              <img src={content.img_video} alt={content.nom_channel} className="w-full rounded-lg" />
              <div className="absolute right-1 bottom-1 bg-color-black-base rounded-lg">
                <span className="text-color-white p-2 text-xs">{content.video_time}</span>
              </div>
            </div>
          </div>
          <div className={`pl-2 w-full max-[400px]:w-2/5 ${urlHistory ? "max-2xl:w-4/6 max-lg:w-3/6 max-md:hidden max-sm:w-1/2 max-sm:block" : ""} ${urlLikeVideo ? "max-md:w-2/5" : ""} ${urlVideo ? "max-sm:w-1/2" :""}` }>
            <h3 className="text-base text-color-black-text font-extrabold  overflow-hidden text-ellipsis  w-3/5 line-clamp-2 max-lg:w-full max-sm:text-sm">{content.title}</h3>
            <ul className={`flex items-center gap-2 text-xs ${urlHistory ? "pt-1" : "pt-4"} ${urlVideo ? "flex-col items-baseline" : ""}`}>
                <div className="flex items-center ">
                 <li className={`text-color-black-text opacity-75 line-clamp-1 overflow-hidden text-left ${urlVideo ? "opacity-70 font-extrabold" : ""}`}>{content.nom_channel}</li>
                </div>
                <div className="flex items-center">
                 <li className={`text-color-black-text opacity-75 line-clamp-1 overflow-hidden max-[400px]:hidden ${urlVideo ? "opacity-70 font-extrabold" : ""}`}>{content.visualizations} de visualizaciones</li>
                 <li className={`text-color-black-text opacity-75 line-clamp-1 overflow-hidden max-[400px]:hidden ${urlVideo ? "opacity-70 font-extrabold" : "" }  ${urlHistory ? "hidden" : ""}`}>° hace {content.time_uploaded} meses</li>
                </div>
            </ul>
            {urlHistory &&(
              <p className="text-xs overflow-hidden text-ellipsis opacity-75 line-clamp-2 max-sm:line-clamp-1">{content.video_description}</p>
            )}
          </div>
        </div>
      </Link>
      <div className={`w-8 h-8 inline max-md:w-6 max-md:h-6 ${urlVideo ? "absolute right-0 top-2 w-6 h-6" : ""}`}>
           <button className="rounded-full hover:bg-color-gray_2" onClick={toggleVideoLikeInside}>
            {iconVisible && <AiOutlineMore className={`w-8 h-8 inline max-md:w-6 max-md:h-6 ${urlVideo ? "w-6 h-6 inline" : ""}`} />}
           </button>
          <div className={`absolute z-50 bg-color-white right-0 shadow-xl w-max rounded-2xl py-3 ${menuVideoLikeInside ? "" : "hidden"}`}>
            <ul className={`flex flex-col   ${urlHistory ? "pb-0" : "pb-4"}`}>
               <li className="py-2 px-5 hover:bg-color-gray cursor-pointer">
                <a href="#" className="flex items-center">
                  <RiPlayList2Fill className="w-6 h-6 inline opacity-90" />
                  <span className="text-sm opacity-90 text-black pl-2 max-sm:text-xs">
                    Añadir a la cola
                  </span>
                </a>
               </li>
               <li className={`py-2 px-5 hover:bg-color-gray cursor-pointer ${urlSeeLaterVideo ? "hidden" : ""}`}>
                <a href="#" className="flex items-center">
                  <BiTimeFive className="w-6 h-6 inline opacity-90" />
                  <span className="text-sm opacity-90 text-black pl-2 max-sm:text-xs">
                    Guardar para ver más tarde
                  </span>
                </a>
               </li>
               <li className="py-2 px-5 hover:bg-color-gray cursor-pointer">
                <a href="#" className="flex items-center">
                  <MdPlaylistAdd className="w-6 h-6 inline opacity-90" />
                  <span className="text-sm opacity-90 text-black pl-2 max-sm:text-xs">
                    Añadir a lista de reproduccion
                  </span>
                </a>
               </li>
               <li className={`py-2 px-5 hover:bg-color-gray cursor-pointer ${urlSeeLaterVideo ? "" : "hidden"}`}>
                <a href="#" className="flex items-center">
                  <BiTrash className="w-6 h-6 inline opacity-90" />
                  <span className="text-sm opacity-90 text-black pl-2 max-sm:text-xs">
                    Quitar de Ver mas tarde
                  </span>
                </a>
               </li>
               <li className="py-2 px-5 hover:bg-color-gray cursor-pointer">
                <a href="#" className="flex items-center">
                  <HiDownload className="w-6 h-6 inline opacity-90" />
                  <span className="text-sm opacity-90 text-black pl-2 max-sm:text-xs">
                   Descargar
                  </span>
                </a>
               </li>
               <li className="py-2 px-5 hover:bg-color-gray cursor-pointer">
                <a href="#" className="flex items-center">
                  <PiShareFatLight className="w-6 h-6 inline opacity-90" />
                  <span className="text-sm opacity-90 text-black pl-2 max-sm:text-xs">
                    Compartir
                  </span>
                </a>
               </li>
             </ul>
            <ul className={`${urlHistory || urlSeeLaterVideo || urlVideo ? "hidden" : ""} `}>
              <li className="py-2 px-5 hover:bg-color-gray cursor-pointer">
                <a href="#" className="flex items-center">
                  <BiTrash className="w-6 h-6 inline opacity-90" />
                  <span className="text-sm opacity-90 text-black pl-2 max-sm:text-xs">
                    Quitar de videos que me gustan
                  </span>
                </a>
              </li>
            </ul>
            <ul className={`${urlSeeLaterVideo ? "" : "hidden"}`}>
              <li className="py-2 px-5 hover:bg-color-gray cursor-pointer">
                <a href="#" className="flex items-center">
                  <GoMoveToTop className="w-6 h-6 inline opacity-90" />
                  <span className="text-sm opacity-90 text-black pl-2 max-sm:text-xs">
                    Mover al principio
                  </span>
                </a>
              </li>
              <li className="py-2 px-5 hover:bg-color-gray cursor-pointer">
                <a href="#" className="flex items-center">
                  <GoMoveToBottom className="w-6 h-6 inline opacity-90" />
                  <span className="text-sm opacity-90 text-black pl-2 max-sm:text-xs">
                    Mover al final
                  </span>
                </a>
              </li>
            </ul>
            <ul className={`${urlVideo ? "" : "hidden"}`}>
              <li className="py-2 px-5 hover:bg-color-gray cursor-pointer">
                <a href="#" className="flex items-center">
                  <GoCircleSlash className="w-6 h-6 inline opacity-90" />
                  <span className="text-sm opacity-90 text-black pl-2 max-sm:text-xs">
                    No me interesa
                  </span>
                </a>
              </li>
              <li className="py-2 px-5 hover:bg-color-gray cursor-pointer">
                <a href="#" className="flex items-center">
                  <AiOutlineMinusCircle className="w-6 h-6 inline opacity-90" />
                  <span className="text-sm opacity-90 text-black pl-2 max-sm:text-xs">
                    No recomendarme este canal
                  </span>
                </a>
              </li>
              <li className="py-2 px-5 hover:bg-color-gray cursor-pointer">
                <a href="#" className="flex items-center">
                  <CiFlag1 className="w-6 h-6 inline opacity-90" />
                  <span className="text-sm opacity-90 text-black pl-2 max-sm:text-xs">
                    Denunciar
                  </span>
                </a>
              </li>
            </ul>
          </div>
      </div>
    </li>
  );
}

export default VideoList;
