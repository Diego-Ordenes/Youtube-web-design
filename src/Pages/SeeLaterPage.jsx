/* eslint-disable no-unused-vars */

/* Imports of Iconos of React-Icons  + Imports of images*/
import { AiOutlineMore, AiOutlineEye } from "react-icons/ai";
import { BsFillPlayFill, BsEye } from "react-icons/bs";
import { LiaRandomSolid } from "react-icons/lia";
import { MyContext } from "../Context/ContextAll";
import { TbLetterX } from "react-icons/tb";
import {IoIosRemoveCircleOutline} from "react-icons/io"
import {GrAdd} from "react-icons/gr"

import img_leo_video from "../assets/img/leo_video_1.jpg";

/* Imports of Hooks */
import { useContext } from "react";

/* Imports of Components */
import VideoList from "../Components/VideoList";

/* Imports of data */
import { video_yt } from "../data/video_Datas";

function SeeLaterPage() {
  /* Get functions and vars of "Context" */
  const { toggleVideoNoAvailable, listVideoNoAvailable } = useContext(MyContext);

  return (
    <div className="p-6 grid grid-cols-4 max-xl:grid-cols-1  max-md:px-0 w-full h-full cols max-xl:h-screen max-xl:overflow-y-scroll custom-scrollbar">
      <div className="col-span-1 h-screen max-lg:h-full pb-28 max-lg:pb-4 max-xl:pb-4 max-xl:h-full ">
        <div className="bg-gradient-to-r from-color-black-base_2 via-color-gray_2  to-color-black-base px-6 py-6 text-color-white  rounded-2xl h-full max-xl:rounded-none">
          <div className="max-xl:flex max-md:flex-col max-xl:justify-center w-full">
            <div className="max-xl:flex max-xl:justify-center">
              <div className="w-full max-w-sm">
                <a href="#">
                  <img
                    src={img_leo_video}
                    alt="img"
                    className="rounded-2xl w-full"
                  />
                </a>
              </div>
            </div>
            <div className="max-xl:pl-4">
              <div className="py-4">
                <span className="font-black text-2xl w-full">
                  Ver mas tarde
                </span>
              </div>
              <div className="pb-4 max-md:flex max-md:justify-between ">
                <div>
                <span className="font-extrabold text-sm">Fernando145</span>
                  <ul className="flex items-center gap-2 text-xs text-color-gray opacity-80 py-2 flex-wrap">
                    <li>400 Videos</li>
                    <li>0 Visualizaciones</li>
                    <li>Actualizada ayer</li>
                  </ul>
                </div>
                <div className="w-6 h-6 inline relative">
                  <button
                    className="rounded-full bg-color-black-base p-2"
                    onClick={toggleVideoNoAvailable}
                  >
                    <AiOutlineMore className="text-color-white" />
                  </button>
                  <div className={`absolute left-0 w-max max-lg:left-0  max-md:right-0 max-md:left-auto ${listVideoNoAvailable ? "" : "hidden"}`}>
                    <ul className="bg-color-white rounded-lg" >
                      <li className="py-2 px-5 hover:bg-color-gray cursor-pointer">
                        <a href="#" className="flex items-center">
                          <BsEye className="w-6 h-6 inline opacity-90 text-color-black-text" />
                          <span className="text-sm opacity-90 text-black pl-2">
                            Mostrar videos no disponibles
                          </span>
                        </a>
                      </li>
                      <li className="py-2 px-5 hover:bg-color-gray cursor-pointer">
                        <a href="#" className="flex items-center">
                          <GrAdd className="w-6 h-6 inline opacity-90 text-color-black-text" />
                          <span className="text-sm opacity-90 text-black pl-2">
                            Añadir videos
                          </span>
                        </a>
                      </li>
                      <li className="py-2 px-5 hover:bg-color-gray cursor-pointer">
                        <a href="#" className="flex items-center">
                          <IoIosRemoveCircleOutline className="w-6 h-6 inline opacity-90 text-color-black-text" />
                          <span className="text-sm opacity-90 text-black pl-2">
                            Quitar videos vistos
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 w-full pt-6 max-xl:justify-center max-2xl:flex-col max-xl:flex-row">
            <button className="flex items-center gap-2 bg-color-white text-color-black-text text-sm p-2 w-full rounded-2xl  truncate max-w-xs">
              <BsFillPlayFill className="w-6 h-6 inline" /> Reproducir todo
            </button>
            <button className="flex items-center gap-2 p-2 rounded-2xl text-sm  bg-color-black-base text-color-white  w-full  truncate max-w-xs">
              <LiaRandomSolid className="h-6 w-6 inline" /> Aleatorio
            </button>
          </div>
        </div>
      </div>
      <div className="px-4 w-full col-span-3 max-md:px-3 max-sm:p-2">
        <div className="flex items-center justify-between px-4 pb-8">
          <span>Los videos no disponibles estan ocultos</span>
          <button className="rounded-full hover:bg-color-gray_2">
            <TbLetterX className="w-6 h-6 inline" />
          </button>
        </div>
        <div>
          <ul className="flex items-center justify-start pb-8 h-screen flex-col overflow-y-scroll custom-scrollbar overflow-x-hidden ">
            <>
              {video_yt.map((content) => (
                <VideoList key={content.id} content={content} urlSeeLaterVideo={true} />
              ))}
            </>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SeeLaterPage;
