/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
 
  /* Funcion para mostrar y ocultar el Buscador/Search cuando esta responsivo */
  const [searchVisible, setsearchVisible] = useState(false);

  const toggleSearch = () => {
    setsearchVisible(!searchVisible);
  };


  /* Funcion para Activar y desactivar Barra de Scroll Lateral izquierdo */
  const [showScrollbar, setShowScrollbar] = useState(false);

  const handleMouseEnter = () => {
    setShowScrollbar(true);
  };

  const handleMouseLeave = () => {
    setShowScrollbar(false);
  };

  /* Funcion para el menu lateral izquierdo */
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  /* Funcion para Recorrer los elementos a mostrar de Filtrado + moverlos hacia delante y atras. */
  const items = [
    "Todo",
    "VideoJuegos",
    "En Directo",
    "Música",
    "Prógramacion",
    "Mixes",
    "Todo",
    "VideoJuegos",
    "En Directo",
    "Música",
    "Prógramacion",
    "Mixes",
  ];
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;

  const handleClickNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleClickPrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  

  const startIndex = currentPage * 3; //itemsPerPage
  const endIndex = Math.min(startIndex + itemsPerPage, items.length);
  const visibleItems = items.slice(startIndex, endIndex);
  
 /* Funcion para mostrar el menu de CREAR VIDEO */
 const [menuCreate, setmenuCreate] = useState(false);
  
 const toggleCreateVideo = () => {
   setmenuCreate(!menuCreate);
   setmenuPerfil(false);
   setmenuNotification(false);
 };
  /* Funcion para mostrar el menu de NOTIFICACIONES*/
  const [menuNotification, setmenuNotification] = useState(false);
  
  const toggleNotifications = () => {
    setmenuNotification(!menuNotification);
    setmenuPerfil(false);
    setmenuCreate(false);
  };
   
  /* Funcion para mostrar menu pequeño dentro de NOTIFICACIONES(Se aplico en el mismo componente de "NotificationsInside") */
 
  /* Funcion para activar y desactivar menu de PERFIL */
  
  const [menuPerfil, setmenuPerfil] = useState(false);
  
  const togglePerfil = () => {
    setmenuPerfil(!menuPerfil);
    setmenuNotification(false);
    setmenuCreate(false)
  };
  
  /* Funciones para las Cards de videos en Youtube, Lista Adentro de la card + mostrar icono y ocultarlo al no pasar mouse sobre el */
  const [iconVisible, setIconVisible] = useState(false);
  const [listCardVideoInside, setlistCardVideoInside] = useState(false);

  const CardVideoMouseEnter = () => {
    if (!listCardVideoInside) {
      setIconVisible(true);
    }
  };

  const CardVideoMouseLeave = () => {
    if (!listCardVideoInside) {
      setIconVisible(false);
    }
  };

  const handleIconClick = () => {
    setlistCardVideoInside(!listCardVideoInside);
  };
  
  /* Funcion para mostrar y ocultar "videos no disponibles" de /likevideos */
  const [listVideoNoAvailable, setlistVideoNoAvailable] = useState(false);

  const toggleVideoNoAvailable = () => {
    setlistVideoNoAvailable(!listVideoNoAvailable);
  };

  /* ----------------------- MI BIBLIOTECA / HISTORIAL ------------------------- */

  /* Funcion para mostrar y ocultar en "MyLibraryPage" de "Listas de reproduccion" */
  const [menuListOfReproduction, setmenuListOfReproduction ] = useState(false);

  const toggleListOfReproduction = () =>{
    setmenuListOfReproduction(!menuListOfReproduction)
  };
   

  /*----------------------------- Ver Video / VideoShowPage ---------------------------- */
  /* Funcion para mostrar y ocultar  "Suscripciones" en "VideosShowPage" " */
  const [menuVisibleSuscription, setmenuVisibleSuscription ] = useState(false);

  const toggleVisibleSuscription = () =>{
     setmenuVisibleSuscription(!menuVisibleSuscription)
  };
  
    /* Funcion para mostrar y ocultar "opciones" de "Suscripciones" en "videoShowPage" */
  const [menuVisibleThreePoints, setmenuVisibleThreePoints ] = useState(false);
  
  const toggleVisibleThreePoints = () =>{
     setmenuVisibleThreePoints(!menuVisibleThreePoints)
  };
  /* Funcion para mostrar y ocultar la "Descripcion" de "VideoShowPage" */
  const [menuVisibleDescriptionVideo, setmenuVisibleDescriptionVideo ] = useState(false);
  
  const toggleVisibleDescriptionVideo = () =>{
    setmenuVisibleDescriptionVideo(!menuVisibleDescriptionVideo)
  }

  /* Funcion para mostrar y ocultar el "Ordernar por" de Comentarios de "CommentsVideo" */
  const [menuVisibleOrderByComments, setmenuVisibleOrderByComments ] = useState(false);
  
  const toggleVisibleOrderByComments = () =>{
    setmenuVisibleOrderByComments(!menuVisibleOrderByComments)
  }


  
  return (
    <MyContext.Provider
      value={{
        showScrollbar,
        setShowScrollbar,
        handleMouseEnter,
        handleMouseLeave,
        menuVisible,
        setMenuVisible,
        toggleMenu,
        toggleNotifications,
        togglePerfil,
        toggleCreateVideo,
        CardVideoMouseEnter,
        CardVideoMouseLeave,
        handleIconClick,
        toggleSearch,
        toggleVideoNoAvailable,
        toggleListOfReproduction,
        toggleVisibleSuscription,
        toggleVisibleThreePoints,
        toggleVisibleDescriptionVideo,
        toggleVisibleOrderByComments,
        menuListOfReproduction,
        listVideoNoAvailable,
        searchVisible,
        iconVisible,
        listCardVideoInside,
        menuVisibleSuscription,
        menuNotification,
        menuVisibleThreePoints,
        menuVisibleDescriptionVideo,
        menuVisibleOrderByComments,
        menuPerfil,
        menuCreate,
        items,
        currentPage,
        setCurrentPage,
        handleClickNext,
        handleClickPrev,
        startIndex,
        endIndex,
        visibleItems,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
