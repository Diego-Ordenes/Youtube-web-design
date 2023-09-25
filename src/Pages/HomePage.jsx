/* eslint-disable no-unused-vars */


import CardVideo from "../Components/CardVideos/CardVideo";
import Filter from "../Components/Filter";

function HomePage() {
  return (
    <>
      {/* Contenido = Videos */}
      <div className="px-4 max-md:px-2 w-full h-screen">
        {/* <Filter/> */}
        
        {/* Videos */}
        <div className="pt-6 w-full ">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 overflow-y-auto custom-scrollbar h-screen w-full">
            <CardVideo />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
