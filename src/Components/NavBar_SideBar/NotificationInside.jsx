/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { AiOutlineMore } from "react-icons/ai";
import {BiBellOff} from "react-icons/bi"
import {BsEyeSlash} from "react-icons/bs"

import { useState } from "react";
import { Link } from 'react-router-dom';
function NotificationInside({content}) {

    /*  Funcion para mostrar menu pequeño dentro de NOTIFICACIONES  */
    const [menuNotificationInside, setmenuNotificationInside] = useState(false);

    const toggleNotificationsInside = () => {
      setmenuNotificationInside(!menuNotificationInside);
    };

    
  return (
    <Link to={`/videos/${content.id}`}>
        <div  className="flex items-start gap-4 p-4 max-sm:gap-2 max-sm:p-2">
        <div className="w-12 max-sm:w-10">
        <img src={content.img_channel} alt="" className="w-full rounded-full" />
        </div>
      <div className="flex flex-col w-64 max-sm:w-4/5">
        <p className="text-base  max-sm:text-xs overflow-hidden whitespace-normal overflow-ellipsis line-clamp-3  max max-sm:line-clamp-2">
          {content.nom_channel} ha subido:
          <span className="">{content.title}</span>
        </p>
        <span className="text-xs text-color-black opacity-80 pt-2">
          Hace {content.time_uploaded} meses
        </span>
      </div>
      <div className="w-28 max-sm:w-24">
        <img src={content.img_video} alt="" className="w-full rounded-sm" />
      </div>
      <div className="relative">
        <button onClick={toggleNotificationsInside}>
          <AiOutlineMore className="w-6 h-6" />
        </button>
        <div className={`absolute z-50 bg-color-white right-0 ${menuNotificationInside ? "" : "hidden"}`}>
          <ul className="flex flex-col w-max">
            <li className="py-2 px-2 hover:bg-color-gray rounded-lg cursor-pointer flex items-center">
                <BsEyeSlash className="w-6 h-6 max-sm:w-4 max-sm:h-4 inline opacity-90" />
                <span className="text-sm max-sm:text-xs opacity-90 text-black pl-3 ">
                  Ocultar esta notificación
                </span>
            </li> 
            <li className="py-2 px-2 hover:bg-color-gray rounded-lg cursor-pointer flex items-center">
                <BiBellOff className="w-6 h-6 max-sm:w-4 max-sm:h-4 inline opacity-90" />
                <span className="text-sm max-sm:text-xs opacity-90 text-black pl-3 ">
                  No notificar nada de {content.nom_channel}
                </span>
            </li>
          </ul>
        </div>
      </div>
        </div>
    </Link>
    
  )
}

export default NotificationInside