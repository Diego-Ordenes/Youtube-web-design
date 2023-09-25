/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import {React,useState} from "react";
import img_bbyoda from "../assets/img/baby_yoda.jpg";
import {BsEmojiSmile} from "react-icons/bs"



function CommentCreate({ onAddTask }) {

 /* Obtener el valor escrito en el input y agregarlo a "tasks" */
 const [task, setTask] = useState('');

 const handleSubmit = (e) => {
  e.preventDefault();
  if (task.trim() === '') return;


  const newTask = {
    id: new Date().getTime(),
    text: task,
    time: new Date(), // Utiliza new Date() para obtener la fecha y hora actual
  };
  onAddTask(newTask);
  setTask('');
};

 const handleCancel = () => {
   setTask('');
 };


  return (
    <div className="w-full relative">
    <form onSubmit={handleSubmit} className="flex items-start w-full">
        <div className="w-12 h-12">
            <img src={img_bbyoda} alt=""  className="rounded-full w-full"/>
        </div>
        <div className="w-full pl-4">
            <input type="text" placeholder="Añade un comentario..." className="bg-transparent border-b-2 w-full outline-none" value={task} onChange={(e) => setTask(e.target.value)}/>
            <div className="flex items-center justify-between py-3">
            <div>
                <BsEmojiSmile className="w-6 h-6 inline"/>
            </div>
            <div className="flex items-center gap-6">
             <button onClick={handleCancel} type="button" className=" bg-transparent font-extrabold text-sm text-color-black-text px-3 py-2 rounded-3xl">Cancelar</button>
             <button type="submit" className="bg-blue-500 hover:bg-blue-400 font-extrabold text-sm text-color-white  px-3 py-2 rounded-3xl">Comentar</button>
            </div>
        </div>
        </div>
    </form>
   </div>
  )
}

export default CommentCreate