import { Bubbles } from '@/components/icons/bubbles'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Image from 'next/image'

export const HeroCarousel = () => {
  return (
    <Carousel>
      <CarouselContent className=" ">
        <CarouselItem
          className="md:h-[680px] md:pl-[6.25rem]  md:pt-[7.75rem] md:px-0  relative flex
         h-fit w-full flex-col-reverse  justify-center bg-light-gray-3 px-5 "
        >
          <div className="md:w-[30.9375rem] flex flex-col   ">
            <span className="text-base font-bold leading-6 text-warning">
              Melhores ofertas personalizadas
            </span>
            <h1 className="mt-5 text-[4rem] font-extrabold leading-[4.25rem] text-dark-gray">
              Queima de stoque Nike 🔥
            </h1>
            <p className="mt-5 text-xl font-normal leading-[2.125rem] text-dark-gray-2 ">
              Consequat culpa exercitation mollit nisi excepteur do do tempor
              laboris eiusmod irure consectetur.
            </p>
            <button
              className="md:w-[13.75rem] mt-10 flex h-12 w-full items-center justify-center
             rounded-lg bg-primary-figma text-base font-bold leading-6 text-white    "
            >
              Ver Ofertas
            </button>
          </div>
          <Image
            alt=""
            src={'/whiteSneaker.png'}
            width={733.506}
            height={431.606}
            className="z-10 rotate-[-7.343deg] transform   "
            quality={100}
          />
          <Bubbles className="md:block absolute right-[2.31rem] top-20 hidden " />
        </CarouselItem>
        <CarouselItem className="bg-light-gray-2 ">...</CarouselItem>
        <CarouselItem className="bg-light-gray ">...</CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}
