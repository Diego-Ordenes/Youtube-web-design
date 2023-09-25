/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { useState, useContext } from "react";
import {RiArrowLeftSLine } from "react-icons/ri";
import {IoIosArrowForward } from "react-icons/io";

import { MyContext } from "../Context/ContextAll";

function Filter() {

    const {currentPage,visibleItems,endIndex,items,handleClickPrev,handleClickNext} = useContext(MyContext)
  return (
    <>
      {/* Filtro de Videos */}
      <div className="px-5">
       <div>
       <ul className="flex flex-row items-center relative whitespace-nowrap">
       <div className={`flex items-center ${currentPage ? "pr-12" : ""}`}>
       {currentPage > 0 && (
          <button className="px-2 py-2  cursor-pointer transition-all rounded-full hover:bg-gray-300 absolute left-0" onClick={handleClickPrev}>
            <RiArrowLeftSLine className="w-6 h-6 inline" />
          </button>
        )}
       </div>
        {visibleItems.map((item, index) => (
          <li key={index} className="px-3 py-2 mx-1 bg-color-gray_2 hover:bg-gray-300 cursor-pointer rounded-2xl transition-all whitespace-nowrap">
            {item}
          </li>
        ))}
        <div className={`flex items-center ${endIndex ? "pl-12" : ""}`}>
        {endIndex < items.length && (
          <button className="px-2 py-2  cursor-pointer transition-all rounded-full hover:bg-gray-300 absolute right-0 " onClick={handleClickNext}>
            <IoIosArrowForward className="w-6 h-6 inline" />
          </button>
        )}
        </div>
        </ul>
       </div>
      </div>
    </>
  )
}

export default Filter