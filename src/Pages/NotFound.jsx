
import img_monkey from "../assets/img/monkey_notfound.png"
import img_logo from "../assets/img/youtube-logo.png"

import {PiMagnifyingGlassLight} from "react-icons/pi"


function NotFound() {
  return (
    <div className="flex justify-center w-full items-start px-2">
      <div className="flex justify-center flex-col items-center">
        <div className="w-48 h-48">
            <img src={img_monkey} alt=""  className="w-full "/>
        </div>
        <p className="font-extrabold text-base py-2 text-center">Esta pagina no esta disponible. Disculpa las molestias. Prueba a realizar otra Búsqueda</p>
        <div className="flex items-center gap-2">
            <div className="w-52 ">
                <a href="/">
                <img src={img_logo} alt=""  className="w-full"/>
                </a>
            </div>
            <div>
              <div className="flex items-center justify-center">
               <div className="flex items-center">
                 <input
                type="text"
                placeholder="Buscar"
                className="rounded-tl-3xl rounded-bl-3xl border-x-2 border-y-2 bg-transparent rounded-color-gray px-3 py-2 w-72 max-lg:w-full"
                />
              <button className="px-4 py-2 rounded-color-gray  rounded-tr-3xl rounded-br-3xl border border-color-gray">
                <PiMagnifyingGlassLight className="w-6 h-6 inline" />
              </button>
            </div>
            </div>
        </div>     
      </div>
     </div>
   </div>
  )
}


export default NotFound