"use client"

import { IKVideo } from "imagekitio-next"

type VideoType = {
    path: string,
    className?: string
}

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

const Video = ({path, className} : VideoType) => {
  return (
    <IKVideo 
    urlEndpoint={urlEndpoint} 
    path={path} 
    className={className} 
    transformation={[{ height: "1920", width: "1080", q: "20" }]}
    controls
    />
  )
}

export default Video