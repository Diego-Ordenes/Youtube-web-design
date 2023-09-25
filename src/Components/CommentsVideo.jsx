/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import img_bbyoda from "../assets/img/baby_yoda.jpg";
import {react,useState} from "react"
/* Imports of React/Icons */
import {AiOutlineLike,AiOutlineDislike,AiOutlineMore} from "react-icons/ai"
import {BsFlag} from "react-icons/bs"
function CommentsVideo({tasks,removeTask,calculateTimeDifference}) {

  /* Funciones para mostrar y ocultar icono al hacer hover en el "CommentsVideo" */
  const [iconVisible, setIconVisible] = useState(false);
  const [menuCommentVideo, setmenuCommentVideo] = useState(false);

  const handleMouseEnter = () => {
    if (!menuCommentVideo) {
      setIconVisible(true);
    }
  };

  const handleMouseLeave = () => {
    if (!menuCommentVideo) {
      setIconVisible(false);
    }
  };

  const toggleVideoLikeInside = () => {
    setmenuCommentVideo(!menuCommentVideo);
  };





  return (
    <li key={tasks.id} className="relative flex items-center justify-between w-full py-3" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
        <div className="flex items-start">
           <div className="w-12 h-12">
            <img src={img_bbyoda} alt="" className="w-full rounded-full"/>
           </div>
           <div className="pl-4 flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-sm text-color-black-text">@Fernando145 </span>
                <span className="font-extrabold text-sm text-color-black-text opacity-50">{calculateTimeDifference(tasks.time)} </span>
              </div>
              <div className="w-full">
                <p className="text-base text-color-black-text opacity-90">{tasks.text}</p>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <button className="flex items-center gap-1 text-sm"><AiOutlineLike className="w-6 h-6 inline"/>0</button>
                <button><AiOutlineDislike className="w-6 h-6 inline"/></button>
                <button className="text-xs font-extrabold">Responder</button>
              </div>
           </div>
        </div>
        <div className="absolute right-0">
            <button onClick={toggleVideoLikeInside}>{iconVisible && <AiOutlineMore className="w-6 h-6 inline"/>}</button>
            <div className={`absolute w-max bg-color-white z-50 ${menuCommentVideo ? "" : "hidden"}`}>
               <ul>
               <li className="py-2 px-5 hover:bg-color-gray cursor-pointer rounded-lg">
                <a href="#" className="flex items-center">
                  <button>
                  <BsFlag className="w-6 h-6 inline opacity-90" />
                  <span className="text-sm opacity-90 text-black pl-2 max-sm:text-xs">
                    Denunciar
                  </span>
                  </button>
                </a>
               </li>
               </ul>
            </div>
        </div>
    </li>
  )
}

export default CommentsVideo