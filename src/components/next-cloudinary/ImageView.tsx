'use client'

import { ImageProps } from "@/types"
import { CldImage } from "next-cloudinary"

 


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
