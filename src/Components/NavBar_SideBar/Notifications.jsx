/* eslint-disable no-unused-vars */

import { video_yt } from "../../data/video_Datas";

import NotificationInside from "./NotificationInside";

function Notifications() {
  return (
    <>
      {video_yt.map((content) => (
        <NotificationInside key={content.id} content={content} />
      ))}
    </>
  );
}

export default Notifications;
