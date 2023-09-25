/* eslint-disable no-unused-vars */
/* Imports of icons of ReactIcons */
import { GiBackwardTime } from "react-icons/gi";
import {IoMdTime} from "react-icons/io"
import {AiOutlineLike} from "react-icons/ai"
import {MdKeyboardArrowDown,MdOutlinePlaylistPlay} from "react-icons/md"
import {FiScissors} from "react-icons/fi"
import img_perfil from "../assets/img/baby_yoda.jpg";

import { MyContext } from "../Context/ContextAll";

import VideoCardInside from "../Components/CardVideos/VideoCardInside";
import { video_yt } from "../data/video_Datas";
import { useContext } from "react";
function MyLibraryPage() {
  const {toggleListOfReproduction,menuListOfReproduction} = useContext(MyContext);

  /* Mostrara solamente los primeros 10 videos  "Historial" */
  const firstTenVideos = video_yt.slice(0, 10);
  /* Mostrara solamente los primeros 5 videos "SeeLater" */
  const firstFiveVideos = video_yt.slice(0,5);
  
  return (
    <div className="flex justify-center">
        <div className="grid grid-cols-5  w-full overflow-y-scroll custom-scrollbar h-screen flex-row py-4 px-14 max-md:px-2 max-sm:px-1">
          {/* Historial / SeeLater / List of reproduction / LikeVideos  */}
          <div className="col-span-4 max-xl:col-span-5 ">
            {/* Historial */}
           <div className="border-b-2 pb-8">
             <div className="flex justify-between items-center w-full py-4">
            <div className="flex items-center">
              <a href="/history">
              <GiBackwardTime className="w-6 h-6 inline" />
              <span className="text-base font-extrabold pl-4">Historial</span>
              </a>
            </div>
            <div>
              <a href="#" className="text-blue-500 py-2 px-4 rounded-2xl font-extrabold hover:bg-blue-100">Ver todo
              </a>
            </div>
             </div>
             <div className="py-4">
            <div className="grid grid-cols-5 max-2xl:grid-cols-4 max-xl:grid-cols-3 max-md:grid-cols-2 gap-1 h-full">
                {firstTenVideos.map((content) =>(
                  <VideoCardInside key={content.id} content={content}/>
                ))}
            </div>
             </div>
           </div>
           {/* SeeLater */}
           <div className="border-b-2 pb-8">
             <div className="flex justify-between items-center w-full py-4">
            <div className="flex items-center">
              <a href="/seelater">
              <IoMdTime className="w-6 h-6 inline" />
              <span className="text-base font-extrabold pl-4">Ver más tarde</span>
              </a>
              <span className="pl-4">17</span>
            </div>
            <div>
              <a href="#" className="text-blue-500 py-2 px-4 rounded-2xl font-extrabold hover:bg-blue-100">Ver todo
              </a>
            </div>
             </div>
             <div className="py-4">
            <div className="grid grid-cols-5 max-2xl:grid-cols-4 max-xl:grid-cols-3 max-md:grid-cols-2 gap-1 h-full">
                {firstFiveVideos.map((content) =>(
                  <VideoCardInside key={content.id} content={content}/>
                ))}
            </div>
             </div>
           </div>
           {/* List of reproduction */}
           <div className="border-b-2 pb-8">
             <div className="flex justify-between items-center w-full py-4">
            <div className="flex items-center">
              <a href="#">
              <MdOutlinePlaylistPlay className="w-6 h-6 inline" />
              <span className="text-base font-extrabold pl-4">Lista de reproducción</span>
              </a>
              <div className="pl-4 relative">
                <button className="flex items-center" onClick={toggleListOfReproduction}>Añadidas recientemente<MdKeyboardArrowDown/></button>
                <div className={`absolute bg-color-white z-50 w-max ${menuListOfReproduction ? "" : "hidden"}`}>
                   <ul>
                   <li className="py-2 px-5 hover:bg-color-gray cursor-pointer">
                     <a href="#" className="flex items-center">
                     <span className="text-sm opacity-90 text-black pl-2 max-sm:text-xs">
                       A-Z
                     </span>
                     </a>
                   </li>
                   <li className="py-2 px-5 hover:bg-color-gray cursor-pointer">
                     <a href="#" className="flex items-center">
                     <span className="text-sm opacity-90 text-black pl-2 max-sm:text-xs">
                       Añadidas recientemente
                     </span>
                     </a>
                   </li>
                   </ul>
                </div>
              </div>
            </div>
            <div>
              <a href="#" className="text-blue-500 py-2 px-4 rounded-2xl font-extrabold hover:bg-blue-100">Ver todo
              </a>
            </div>
             </div>
             <div className="py-4">
            <div className="grid grid-cols-5 max-2xl:grid-cols-4 max-xl:grid-cols-3 max-md:grid-cols-2 gap-1 h-full">
                {firstFiveVideos.map((content) =>(
                  <VideoCardInside key={content.id} content={content}/>
                ))}
            </div>
             </div>
           </div>
           {/* LikeVideos */}
           <div className="border-b-2 pb-8">
             <div className="flex justify-between items-center w-full py-4">
            <div className="flex items-center">
              <a href="/likevideos"><AiOutlineLike className="w-6 h-6 inline" />
              <span className="text-base font-extrabold pl-4">Videos que me gustan</span></a>
              <span className="pl-4">3523</span>
            </div>
            <div>
              <a href="#" className="text-blue-500 py-2 px-4 rounded-2xl font-extrabold hover:bg-blue-100">Ver todo
              </a>
            </div>
             </div>
             <div className="py-4">
            <div className="grid grid-cols-5 max-2xl:grid-cols-4 max-xl:grid-cols-3 max-md:grid-cols-2 gap-1 h-full">
                {firstFiveVideos.map((content) =>(
                  <VideoCardInside key={content.id} content={content}/>
                ))}
            </div>
             </div>
           </div>
           {/* My Clips */}
           <div className="flex h-40 flex-col py-4">
              <div>
              <a href="#">
              <FiScissors className="w-6 h-6 inline" />
              <span className="text-base font-extrabold pl-4">Videos que me gustan</span>
              </a>
              <p className="max-sm:text-sm">Crea clips y comparte tus momentos favoritos. Tu lista aparecera aquí.</p>
              </div>
            </div>
          </div>
          {/* My Starts of channel */}
          <div className="col-span-1 max-2xl:col-span-1 flex items-start w-full pl-10 pt-10 max-xl:hidden">
          <div className="flex flex-col w-40">
            <div className="flex justify-center">
              <div className="w-28">
                <img src={img_perfil} alt="" className="w-full rounded-full" />
              </div>
            </div>
            <span className="text-center text-base font-extrabold text-color-black-text">
              Fernando :D
            </span>
            <div>
              <ul className="w-full border-t-2">
                <li className="flex items-center justify-between py-2 font-extrabold text-sm opacity-50 border-b-2">
                  <span>Suscripciones</span>
                  <span>150</span>
                </li>
                <li className="flex items-center justify-between py-2 font-extrabold text-sm opacity-50 border-b-2">
                  <span>Subidas</span>
                  <span>5</span>
                </li>
                <li className="flex items-center justify-between py-2 font-extrabold text-sm opacity-50 border-b-2">
                  <span>Me gusta</span>
                  <span>3523</span>
                </li>
              </ul>
            </div>
          </div>
          </div>
        </div>
    </div>
  );
}

export default MyLibraryPage;
