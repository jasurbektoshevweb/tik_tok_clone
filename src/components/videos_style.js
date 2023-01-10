import React from "react";
import VideosIcons from "./video-icons";
import Videosfoot from "./video-footer";
function VideosShow({ data }) {
  console.log("Data : ", data);
  return (
    <div className="videos-block">
      {data?.map((item) => {
        return (
          <div className="video-section-style">
            <video className="video-player" loop src={item?.url} />
            <VideosIcons likes={item?.likes} message={item?.comments} shares={item?.shares}/>
            <Videosfoot description={item?.description} page_name={item?.page_name} music={item?.music}/>
          </div>
        );
      })}
    </div>
  );
}

export default VideosShow;
