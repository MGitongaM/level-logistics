"use client";
import { heroCarouselImages } from "@/StaticData/homePage";
import ImageView from "../next-cloudinary/ImageView";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function HeroCarouselContent() {
  return (
    <>
      <Carousel
        orientation="horizontal"
        opts={{ align: "start", loop: true }}
        plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
      >
        <CarouselContent>
          {heroCarouselImages.map((heroImage) => (
            <CarouselItem key={heroImage.id}>
              <ImageView
                imageSrc={heroImage.imageSource}
                height={800}
                width={1200}
                alt="Levels Services Logitsics Trucks"
                classNames="object-cover w-full h-full"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}
