/* eslint-disable no-unused-vars */
import {video_yt} from "../../data/video_Datas"

import VideoCardInside from "./VideoCardInside";
function CardVideo() {

  return (
    <>
    {video_yt.map((content) => (
      <VideoCardInside key={content.id} content={content}/>
    ))}
    </>
  );
}

export default CardVideo;
