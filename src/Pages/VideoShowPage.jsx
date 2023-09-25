/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import video_corto from "../assets/videos/video_corto.mp4";
import img_auron from "../assets/img/auron.jpg";

import { BsBell } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { FiBellOff } from "react-icons/fi";
import { BiSolidBellRing } from "react-icons/bi";
import { AiOutlineLike, AiOutlineDislike,AiOutlineMore,AiOutlineUserDelete } from "react-icons/ai";
import { PiShareFatThin } from "react-icons/pi";
import { HiDownload } from "react-icons/hi";
import { FaScissors } from "react-icons/fa6";
import {MdOutlinePlaylistAdd} from "react-icons/md"
import {BsCardHeading,BsFlag,BsEmojiSmile} from "react-icons/bs"
import {AiOutlinePlaySquare} from "react-icons/ai"
import {PiUserSquareDuotone } from "react-icons/pi"
import {HiOutlineBars3BottomLeft} from "react-icons/hi2"

import {React,useState,useEffect} from "react"
import { useContext } from "react";
import { MyContext } from "../Context/ContextAll";
import VideoList from "../Components/VideoList"
import CommentsVideo from "../Components/CommentsVideo";
import CommentCreate from "../Components/CommentCreate";

import { useParams } from 'react-router-dom';
import { video_yt } from "../data/video_Datas";

function VideoShowPage() {
  const { toggleVisibleSuscription, menuVisibleSuscription,toggleVisibleThreePoints,menuVisibleThreePoints,toggleVisibleDescriptionVideo
  ,menuVisibleDescriptionVideo,toggleVisibleOrderByComments,menuVisibleOrderByComments } =
    useContext(MyContext);
  
    /* ----------------- Creacion de Comentarios ----------------------------- */
    /* para contar comentarios creados */
    const [commentCount, setCommentCount] = useState(0);
    /* Creacion de tareas(Comentarios) */
    const [tasks, setTasks] = useState([]);



  // Función para obtener la hora, minutos y segundos actual
  const getCurrentTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      return `${hours}:${minutes}:${seconds}`;
  };     
  
  // Función para calcular la diferencia de tiempo en formato de texto
  const calculateTimeDifference = (taskTime) => {
    const taskDate = new Date(taskTime);
    const now = new Date();
    const timeDifference = now - taskDate;
    const secondsDifference = Math.floor(timeDifference / 1000);
  
    const units = [
      { unit: 'día', duration: 24 * 60 * 60 },
      { unit: 'hora', duration: 60 * 60 },
      { unit: 'minuto', duration: 60 },
      { unit: 'segundo', duration: 1 },
    ];
  
    for (const { unit, duration } of units) {
      const value = Math.floor(secondsDifference / duration);
      if (value >= 1) {
        return `${value} ${unit}${value !== 1 ? 's' : ''} atrás`;
      }
    }
  
    return 'hace unos segundos';
  };


  // Función para agregar una tarea a la lista y actualizar el contador
  const addTask = (newTask) => {
    const currentTime = getCurrentTime();
    const taskWithTime = {
      ...newTask,
      time: currentTime, // Agrega la hora al objeto de la tarea
    };
    setTasks([...tasks, taskWithTime]);

    // Actualiza el contador
    const newCommentCount = commentCount + 1;
    setCommentCount(newCommentCount);

    // Actualiza el contador en localStorage
    localStorage.setItem("commentCount", newCommentCount.toString());

    // Al agregar una tarea, también la guardamos en localStorage
    localStorage.setItem(newTask.id.toString(), JSON.stringify(taskWithTime));

    // Establecemos un temporizador para eliminar la tarea después de 1 minuto (60,000 ms)
    setTimeout(() => {
      removeTask(newTask.id); // Llama a la función para eliminar la tarea
    }, 60 * 1000); // 1 minuto en milisegundos
  };

  // Función para eliminar una tarea de la lista y actualizar el contador
  const removeTask = (taskId) => {
  // Elimina la tarea con el ID especificado
  const updatedTasks = tasks.filter((task) => task.id !== taskId);
  setTasks(updatedTasks);

  // Actualiza el contador si es mayor que cero
  if (commentCount > 0) {
    const newCommentCount = commentCount - 1;
    setCommentCount(newCommentCount);

    // Actualiza el contador en localStorage
    localStorage.setItem("commentCount", newCommentCount.toString());
  }

  // Elimina la tarea del almacenamiento local
  localStorage.removeItem(taskId.toString());
 };


    useEffect(() => {
      // Obtener el contador de comentarios desde localStorage al cargar la página
      const storedCommentCount = localStorage.getItem("commentCount");
      if (storedCommentCount) {
        setCommentCount(parseInt(storedCommentCount));
      }
  
      // Obtener tareas almacenadas en localStorage al cargar la página
      const storedTasks = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && !isNaN(Number(key))) {
          // Verifica que la clave sea un número (ID de tarea)
          const storedTask = JSON.parse(localStorage.getItem(key));
          if (storedTask) {
            storedTasks.push(storedTask);
          }
        }
      }
      setTasks(storedTasks);
    }, []); // Se ejecuta una vez al cargar la página
  
    useEffect(() => {
      // Guardar tareas en localStorage cada vez que cambian
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
  

  const { videoId } = useParams(); // Obtiene el valor del parámetro dinámico desde la URL

   // Lógica para encontrar los datos del video con el ID correspondiente desde mi JSON
   const videoData = video_yt.find((video) => video.id === parseInt(videoId));
   

  return (
    <div className="overflow-y-scroll custom-scrollbar overflow-x-hidden h-screen w-full">
      <div className="px-20 py-8 w-full h-full max-2xl:px-4">
        <div className="w-full h-full">
          <div className="grid grid-cols-12 gap-4 max-2xl:grid-cols-1">
            {/* Video for watch */}
            <div className="col-span-9 pr-6 pb-4 max-2xl:pr-0 max-2xl:col-span-1">
              <div>
              <div>
              <div className="max-lg:flex max-lg:justify-center">
                  <div className="w-full max-sm:w-96">
                   <video
                   controls
                   
                   className="w-full rounded-lg"
                   >
                  <source src={video_corto} type="video/mp4" />
                  </video>
                 </div>
              </div>
              <div className="py-4">
                <div className="py-2">
                  <h3 className="font-extrabold text-lg">
                    {videoData.title}
                  </h3>
                </div>
                <div className="flex items-center justify-between max-md:items-start max-md:justify-start max-md:flex-col">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12">
                      <a href="#">
                        <img
                          src={videoData.img_channel}
                          alt=""
                          className="w-full rounded-full"
                        />
                      </a>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <a href="#">
                        <span className="font-extrabold text-base text-color-black-text ">
                          {videoData.nom_channel}
                        </span>
                      </a>
                      <span className="text-sm font-extrabold text-color-black-text opacity-70 ">
                        {videoData.subscribers} Suscriptores
                      </span>
                    </div>
                    <div className="relative">
                      <button
                        className="flex items-center gap-1 hover:bg-color-gray px-4 py-2 rounded-3xl text-sm"
                        onClick={toggleVisibleSuscription}
                      >
                        <BsBell className="w-5 h-5 inline" />
                        Suscrito
                        <IoIosArrowDown  className="w-5 h-5 inline"/>
                      </button>
                      <div
                        className={`absolute bg-color-white z-50 ${
                          menuVisibleSuscription ? "" : "hidden"
                        }`}
                      >
                        <ul>
                          <li className="py-2 px-5 hover:bg-color-gray rounded-lg cursor-pointer">
                            <button className="flex items-center">
                              <BiSolidBellRing className="w-6 h-6 inline opacity-90" />
                              <span className="text-sm opacity-90 text-black pl-6 text-overflow: ellipsis; overflow-hidden whitespace-nowrap">
                                Todas
                              </span>
                            </button>
                          </li>
                          <li className="py-2 px-5 hover:bg-color-gray rounded-lg cursor-pointer">
                            <button className="flex items-center">
                              <BsBell className="w-6 h-6 inline opacity-90" />
                              <span className="text-sm opacity-90 text-black pl-6 text-overflow: ellipsis; overflow-hidden whitespace-nowrap">
                                Personalizadas
                              </span>
                            </button>
                          </li>
                          <li className="py-2 px-5 hover:bg-color-gray rounded-lg cursor-pointer">
                            <button className="flex items-center">
                              <FiBellOff className="w-6 h-6 inline opacity-90" />
                              <span className="text-sm opacity-90 text-black pl-6 text-overflow: ellipsis; overflow-hidden whitespace-nowrap">
                                Ninguna
                              </span>
                            </button>
                          </li>
                          <li className="py-2 px-5 hover:bg-color-gray rounded-lg cursor-pointer">
                            <button className="flex items-center">
                              <AiOutlineUserDelete className="w-6 h-6 inline opacity-90" />
                              <span className="text-sm opacity-90 text-black pl-6 text-overflow: ellipsis; overflow-hidden whitespace-nowrap">
                                Anular suscripción
                              </span>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center max-md:pt-2">
                    <div className="flex items-center gap-2 hover:bg-color-gray_2  bg-color-gray p-2 rounded-3xl">
                      <button className="flex items-center gap-1   font-extrabold  text-color-black-text px-2 text-sm">
                        <AiOutlineLike className="w-5 h-5 inline" /> 128K
                      </button>
                      <button className="flex items-center   border-l-2 border-color-gray_3 px-2">
                        <AiOutlineDislike className="w-5 h-5 inline" />
                      </button>
                    </div>
                    <div className="flex items-center gap-2 hover:bg-color-gray_2  bg-color-gray p-2 rounded-3xl">
                      <button className="flex items-center gap-1   font-extrabold  text-color-black-text px-2 text-sm">
                        <PiShareFatThin className="w-5 h-5 inline" /> Compartir
                      </button>
                    </div>
                    <div className="flex items-center gap-2 hover:bg-color-gray_2  bg-color-gray p-2 rounded-3xl max-xl:hidden">
                      <button className="flex items-center gap-1   font-extrabold  text-color-black-text px-2 text-sm">
                        <HiDownload className="w-5 h-5 inline" /> Descargar
                      </button>
                    </div>
                    <div className="flex items-center gap-2 hover:bg-color-gray_2  bg-color-gray p-2 rounded-3xl max-sm:hidden">
                      <button className="flex items-center gap-1   font-extrabold  text-color-black-text px-2 text-sm">
                        <FaScissors className="w-5 h-5 inline" /> Clip
                      </button>
                    </div>
                    <div className="flex items-center relative gap-2 hover:bg-color-gray_2  bg-color-gray p-2 rounded-full">
                      <button className="flex items-center gap-1   font-extrabold text-base text-color-black-text px-1 transform rotate-90" onClick={toggleVisibleThreePoints}>
                        <AiOutlineMore className="w-5 h-5 inline" />
                      </button>
                      <div className={`absolute top-12 left-0 bg-color-white z-50 max-2xl:-left-40 max-md:left-0 max-sm:-left-40 w-max ${menuVisibleThreePoints ? "" : "hidden"}`} >
                          <ul>
                          <li className="py-2 px-5 hover:bg-color-gray rounded-lg cursor-pointer hidden max-sm:block">
                            <button className="flex items-center">
                              <FaScissors className="w-6 h-6 inline opacity-90" />
                              <span className="text-sm opacity-90 text-black pl-6 text-overflow: ellipsis; overflow-hidden whitespace-nowrap">
                                Clip
                              </span>
                            </button>
                          </li>
                          <li className="py-2 px-5 hover:bg-color-gray rounded-lg cursor-pointer hidden max-xl:block">
                            <button className="flex items-center">
                              <HiDownload className="w-6 h-6 inline opacity-90" />
                              <span className="text-sm opacity-90 text-black pl-6 text-overflow: ellipsis; overflow-hidden whitespace-nowrap">
                                Descargar
                              </span>
                            </button>
                          </li>
                          <li className="py-2 px-5 hover:bg-color-gray rounded-lg cursor-pointer">
                            <button className="flex items-center">
                              <MdOutlinePlaylistAdd className="w-6 h-6 inline opacity-90" />
                              <span className="text-sm opacity-90 text-black pl-6 text-overflow: ellipsis; overflow-hidden whitespace-nowrap">
                                Guardar
                              </span>
                            </button>
                          </li>
                          <li className="py-2 px-5 hover:bg-color-gray rounded-lg cursor-pointer">
                            <button className="flex items-center">
                              <BsFlag className="w-6 h-6 inline opacity-90" />
                              <span className="text-sm opacity-90 text-black pl-6 text-overflow: ellipsis; overflow-hidden whitespace-nowrap">
                                Denunciar
                              </span>
                            </button>
                          </li>
                          <li className="py-2 px-5 hover:bg-color-gray rounded-lg cursor-pointer">
                            <button className="flex items-center">
                              <BsCardHeading className="w-6 h-6 inline opacity-90" />
                              <span className="text-sm opacity-90 text-black pl-6 text-overflow: ellipsis; overflow-hidden whitespace-nowrap">
                                Mostrar transcripción
                              </span>
                            </button>
                          </li>
                          </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Description video */}
              <div className={`px-4 py-2 bg-color-gray  cursor-pointer rounded-md transition-all duration-500 ${menuVisibleDescriptionVideo ? "h-fit" : "h-22 "}`}>
                <div className="text-sm font-extrabold flex gap-4">
                  <span>{videoData.visualizations} Visualizaciones</span><span>Hace {videoData.time_uploaded}</span>
                </div>
                <div className={` py-2 ${menuVisibleDescriptionVideo ? "border-b-8" : ""}`}>
                  <p className={` text-sm ${menuVisibleDescriptionVideo ? "" : "whitespace-normal overflow-hidden line-clamp-1"}`}>{videoData.video_description}</p>
                </div >
                <div className={` ${menuVisibleDescriptionVideo ? "" : "hidden"}`}>
                  <div className="border-b-8 py-4 flex flex-col gap-3 items-start">
                   <span className="text-lg font-extrabold">Transcripción</span>
                   <p className="font-extrabold text-sm">Sigue la transcripción para no perderte nada</p>
                   <button className="bg-transparent px-4 py-2 border-2 rounded-3xl text-blue-700 font-extrabold text-sm hover:bg-blue-100">Mostrar transcripción</button>
                  </div>
                  <div>
                  <div className="flex items-center gap-4 py-4">
                    <div className="w-16 h-16">
                        <img
                          src={videoData.img_channel}
                          alt={videoData.nom_channel}
                          className="w-full rounded-full"
                        />
                      
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <a href="#">
                        <span className="font-extrabold text-base text-color-black-text ">
                          {videoData.nom_channel}
                        </span>
                      </a>
                      <span className="text-sm font-extrabold text-color-black-text opacity-70 ">
                        134k Suscriptores
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 max-md:flex-col max-md:items-start">
                    <button className="bg-transparent text-color-black-text flex items-center gap-2 px-24 py-2 rounded-2xl border-2 hover:bg-color-gray_2 max-md:w-80 max-[400px]:w-full"><AiOutlinePlaySquare className="w-6 h-6 inline"/>Videos</button>
                    <button className="bg-transparent text-color-black-text flex items-center gap-2 px-24 py-2 rounded-2xl border-2 hover:bg-color-gray_2 max-md:w-80 max-[400px]:w-full"><PiUserSquareDuotone className="w-6 h-6 inline"/>Informacion</button>
                  </div>
                  </div>
                </div>
                <div className="py-2"> 
                  <button onClick={toggleVisibleDescriptionVideo}>
                    <span className={`font-extrabold text-base ${menuVisibleDescriptionVideo ? "hidden" : ""}`}>...más</span>
                    <span className={`font-extrabold text-base ${menuVisibleDescriptionVideo ? "" : "hidden"}`}>Mostrar menos</span>
                  </button>
                </div>
              </div>
              </div>
              </div>
              {/* Comments  + Add Comment*/}
             <div className="w-full h-fit">
              <div className="py-4 flex items-center gap-4">
                <span className="font-extrabold text-color-black-text">{commentCount} Comentarios</span>
                <div className="relative">
                  <button onClick={toggleVisibleOrderByComments}>
                    <span className="flex items-center font-extrabold text-color-black-text gap-2"><HiOutlineBars3BottomLeft className="w-6 h-6 inline"/> Ordenar por</span>
                  </button>
                  <div className={`absolute w-max z-50 bg-color-white ${menuVisibleOrderByComments ? "" : "hidden"}`}>
                    <ul className="py-2 rounded-lg">
                      <li className="py-3 px-2 hover:bg-color-gray cursor-pointer rounded-lg">
                       <a href="#" className="flex items-center">
                         <span className="text-sm opacity-90 text-black pl-2 max-sm:text-xs">
                           Mejores comentarios
                         </span>
                       </a>
                      </li>
                      <li className="py-3 px-2 hover:bg-color-gray cursor-pointer rounded-lg">
                       <a href="#" className="flex items-center">
                         <span className="text-sm opacity-90 text-black pl-2 max-sm:text-xs">
                           Más recientes primero
                         </span>
                       </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Add Comments */}
              <div className="w-full">
                  <CommentCreate onAddTask={addTask}  />
              </div>
               <ul className="py-4">
                {tasks.length === 0 ? (
                  <div className="flex justify-center">
                    <p className="font-extrabold">No hay Comentarios...</p>
                  </div>
                ) : (
                  tasks.map((tasks) =>(
                    <CommentsVideo tasks={tasks} key={tasks.id} removeTask={removeTask} calculateTimeDifference={calculateTimeDifference}/>
                  ))
                )}
               </ul>
             </div>
            </div>
            {/* List of videos */}
            <div className="col-span-3 max-2xl:col-span-1">
                 <div>
                {video_yt.map((content) =>(
                  <VideoList key={content.id} content={content} urlVideo={true}/>
                ))}
                 </div>
            </div>
          </div>
          {/* Comments */}
        </div>
      </div>
    </div>
  );
}

export default VideoShowPage;
