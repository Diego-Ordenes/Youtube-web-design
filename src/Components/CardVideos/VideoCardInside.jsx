/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { AiOutlineMore } from "react-icons/ai";
import {MdPlaylistPlay,MdPlaylistAdd,MdOutlineDoNotDisturbAlt,MdOutlineDoNotDisturbOn} from "react-icons/md"
import {BiTimeFive} from "react-icons/bi"
import {HiDownload} from "react-icons/hi"
import {PiShareFatDuotone} from "react-icons/pi"
import {BsFlag} from "react-icons/bs"

import { MyContext } from "../../Context/ContextAll";
import { useContext,useState} from "react";

import {video_yt} from "../../data/video_Datas"
import { Link } from 'react-router-dom';
function VideoCardInside({content}) {
  const [iconVisible, setIconVisible] = useState(false);
  const [algoVisible, setAlgoVisible] = useState(false);

  const handleMouseEnter = () => {
    if (!algoVisible) {
      setIconVisible(true);
    }
  };

  const handleMouseLeave = () => {
    if (!algoVisible) {
      setIconVisible(false);
    }
  };

  const handleIconClick = () => {
    setAlgoVisible(!algoVisible);
  };
  
  

  return (
      <div  className="rounded cursor-pointer max-w-2xl group h-full w-full" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="relative rounded w-auto block ">
        <Link to={`/videos/${content.id}`}>
        <img src={content.img_video} alt="" className={`w-full  transition-all duration-700 ease-in-out transform ${iconVisible ? " hover:rounded-none" : "rounded-2xl"}`}/>
        </Link>
        <div className="absolute right-0 bottom-0 px-1 mr-1 mb-1 bg-color-black-base rounded-md">
          <span className="text-white text-xs p-0 font-extrabold">{content.video_time}</span>
        </div>
      </div>
      <div className="flex pt-4 gap-4 relative">
        <div className="w-10 h-10 inline">
          <img src={content.img_channel} alt="" className="rounded-full w-full" />
        </div>
        <div className="w-full">
          <h3 className="text-sm text-color-black-text font-extrabold overflow-hidden line-clamp-2 text-ellipsis">
            {content.title}
          </h3>
          <span className="text-sm ">{content.nom_channel}</span>
          <div className="flex flex-wrap text-color-black-text opacity-90 text-sm">
            <span>{content.visualizations} Visualizaciones</span>
            <span className="pl-1">° hace {content.time_uploaded} </span>
          </div>
        </div>
        <div>
          <div className="w-6 h-6">
            <button onClick={handleIconClick}>
              {iconVisible && <AiOutlineMore  className="w-6 h-6 inline"/>}
            </button>
          </div>
          <div className={`absolute z-50 right-0 shadow-xl bg-white w-max rounded-xl ${algoVisible ? "" : "hidden"}`}>
            <ul className="border-b-2">
              <li className="py-2 px-5 hover:bg-color-gray cursor-pointer">
                <a href="#" className="flex items-center">
                  <MdPlaylistPlay className="w-6 h-6 inline opacity-90" />
                  <span className="text-sm opacity-90 text-black pl-2">
                    Añadir a la cola
                  </span>
                </a>
              </li>
              <li className="py-2 px-5 hover:bg-color-gray cursor-pointer">
                <a href="#" className="flex items-center">
                  <BiTimeFive className="w-6 h-6 inline opacity-90" />
                  <span className="text-sm opacity-90 text-black pl-2">
                    Guardar para ver más tarde
                  </span>
                </a>
              </li>
              <li className="py-2 px-5 hover:bg-color-gray cursor-pointer">
                <a href="#" className="flex items-center">
                  <MdPlaylistAdd className="w-6 h-6 inline opacity-90" />
                  <span className="text-sm opacity-90 text-black pl-2">
                    Añadir a lista de reproduccíon
                  </span>
                </a>
              </li>
              <li className="py-2 px-5 hover:bg-color-gray cursor-pointer">
                <a href="#" className="flex items-center">
                  <HiDownload className="w-6 h-6 inline opacity-90" />
                  <span className="text-sm opacity-90 text-black pl-2">
                    Descargar
                  </span>
                </a>
              </li>
              <li className="py-2 px-5 hover:bg-color-gray cursor-pointer">
                <a href="#" className="flex items-center">
                  <PiShareFatDuotone className="w-6 h-6 inline opacity-90" />
                  <span className="text-sm opacity-90 text-black pl-2">
                    Compartir
                  </span>
                </a>
              </li>
            </ul>
            <ul>
              <li className="py-2 px-5 hover:bg-color-gray cursor-pointer">
                <a href="#" className="flex items-center">
                  <MdOutlineDoNotDisturbAlt className="w-6 h-6 inline opacity-90" />
                  <span className="text-sm opacity-90 text-black pl-2">
                    No me interesa
                  </span>
                </a>
              </li>
              <li className="py-2 px-5 hover:bg-color-gray cursor-pointer">
                <a href="#" className="flex items-center">
                  <MdOutlineDoNotDisturbOn className="w-6 h-6 inline opacity-90" />
                  <span className="text-sm opacity-90 text-black pl-2">
                    No recomendarme este canal
                  </span>
                </a>
              </li>
              <li className="py-2 px-5 hover:bg-color-gray cursor-pointer">
                <a href="#" className="flex items-center">
                  <BsFlag className="w-6 h-6 inline opacity-90" />
                  <span className="text-sm opacity-90 text-black pl-2">
                    Denunciar
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
  )
}

export default VideoCardInside