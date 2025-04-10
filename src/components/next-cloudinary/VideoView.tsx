"use client";

import { VideoProps } from "@/types";
import { CldVideoPlayer } from "next-cloudinary";
import 'next-cloudinary/dist/cld-video-player.css';


export default function VideoView({
  videoSrc,
  height,
  width,
  classNames,
}: VideoProps) {
  return (
    <>
      <CldVideoPlayer
        src={videoSrc}
        height={height}
        width={width}
        className={classNames}
        loop
        autoPlay
        
      />
    </>
  );
}
