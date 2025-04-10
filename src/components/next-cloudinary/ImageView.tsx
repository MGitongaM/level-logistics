'use client'

import { CldImage } from "next-cloudinary"

 interface ImageProps{
    imageSrc:string
    width:number
    height:number
    alt:string
    classNames:string
 }


export default function ImageView({imageSrc,height,width,alt,classNames}:ImageProps) {
  return (
    <>
    <CldImage
        width={width}
        height={height}
        src={imageSrc}
        alt={alt}
        className={classNames}
    />
    </>
  )
}
