/* eslint-disable no-unused-vars */

import {AiOutlineSearch} from "react-icons/ai"
import {BiTrash} from "react-icons/bi"
import {BsPlayCircle} from "react-icons/bs"
import {IoSettingsOutline} from "react-icons/io5"
import VideoList from "../Components/VideoList"
import { video_yt } from "../data/video_Datas"
function HistoryPage() {
  return (
    <div>
        <div className="grid grid-cols-5 max-sm:grid-cols-1   w-full overflow-y-scroll overflow-x-hidden custom-scrollbar h-screen flex-row py-4 px-14 max-2xl:px-4 ">
             {/* History Videos */}
             <div className="col-span-3 max-2xl:col-span-3 max-md:col-span-2 max-sm:col-span-1 max-sm:order-2 ">
               <div className="py-4">
                <span className="font-extrabold text-base">Historial de reproducciones</span>
               </div>
               <div>
                <span className="font-extrabold text-base">18 Sep</span>
                 <div>
                    <ul>
                      {video_yt.map((content) => (
                      <VideoList key={content.id} content={content} urlHistory={true}/>
                     ))}
                    </ul>
                 </div>
               </div>
             </div>
             {/* History Search */}
             <div className="col-span-2 max-2xl:col-span-1 pt-4 pl-4 max-lg:col-span-2 max-sm:col-span-1 max-sm:order-1 max-sm:px-4">
                <div>
                    <div className="flex items-center border-b-2 border-color-black-base w-fit">
                        <AiOutlineSearch className="w-6 h-6 inline"/>
                        <input type="text" placeholder="Buscar en el historial..." className="border-none outline-none p-2"/>
                    </div>
                    <div className="pt-4 w-max">
                        <ul>
                          <li className="py-2 hover:bg-color-gray rounded-lg cursor-pointer">
                            <a href="#" className="flex items-center">
                            <BiTrash className="w-6 h-6 inline opacity-90" />
                            <span className="text-sm opacity-90 text-black pl-6 text-overflow: ellipsis; overflow-hidden whitespace-nowrap">
                              Borrar todo el historial de reproducciones
                            </span>
                           </a>
                          </li>
                          <li className="py-2 hover:bg-color-gray rounded-lg cursor-pointer">
                            <a href="#" className="flex items-center">
                            <BsPlayCircle className="w-6 h-6 inline opacity-90" />
                            <span className="text-sm opacity-90 text-black pl-6 text-overflow: ellipsis; overflow-hidden whitespace-nowrap">
                              Activar historial de reproducciones
                            </span>
                           </a>
                          </li>
                          <li className="py-2 hover:bg-color-gray rounded-lg cursor-pointer">
                            <a href="#" className="flex items-center">
                            <IoSettingsOutline className="w-6 h-6 inline opacity-90" />
                            <span className="text-sm opacity-90 text-black pl-6 text-overflow: ellipsis; overflow-hidden whitespace-nowrap">
                              Gestionar todo el historial
                            </span>
                           </a>
                          </li>
                        </ul>
                        <div className="flex flex-col justify-center pl-12">
                            <a href="#" className="py-2 text-sm font-extrabold"><span>Comentarios</span></a>
                            <a href="#" className="py-2 text-sm font-extrabold"><span>Publicaciones en la pestaña de Comunidad</span></a>
                            <a href="#" className="py-2 text-sm font-extrabold"><span>Chat en directo</span></a>
                        </div>
                    </div>
                </div>
             </div>
        </div> 
    </div>
  )
}

export default HistoryPage