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
          className="relative flex  h-fit w-full  flex-col-reverse justify-center
         bg-light-gray-3 md:px-0 md:pt-[7.75rem] lg:h-[680px]  lg:flex-row lg:pl-[6.25rem]  "
        >
          <div
            className="flex flex-col items-center  px-8 pb-8
           lg:w-[30.9375rem] lg:items-start lg:px-0 lg:pb-0 xl:max-w-[30.9375rem]   "
          >
            <span
              className="text-sm font-bold leading-6 text-primary-figma
            sm:text-base md:text-warning"
            >
              Melhores ofertas personalizadas
            </span>
            <h1
              className="mt-5 text-center text-[2.5rem] font-extrabold leading-[3.125rem]
             text-dark-gray after:content-['🔥'] sm:text-start sm:text-[4rem]
              sm:leading-[4.25rem] md:after:content-[''] lg:after:content-['🔥'] "
            >
              Queima de stoque Nike
            </h1>
            <p
              className="mt-5 text-sm font-normal leading-[1.375rem] text-dark-gray-2
              sm:text-xl sm:leading-[2.125rem] "
            >
              Consequat culpa exercitation mollit nisi excepteur do do tempor
              laboris eiusmod irure consectetur.
            </p>
            <button
              className="mt-10 flex h-12 w-full items-center justify-center rounded-lg
             bg-primary-figma text-base font-bold leading-6 text-white sm:w-4/5
             lg:w-[13.75rem]
             "
            >
              Ver Ofertas
            </button>
          </div>
          <Image
            alt=""
            src={'/whiteSneaker.png'}
            width={733.506}
            height={431.606}
            className="z-10 rotate-[-7.343deg] transform object-cover   "
            quality={100}
            priority={true}
          />
          <Bubbles className="absolute right-[2.31rem] top-20 hidden md:block " />
        </CarouselItem>
        <CarouselItem className="bg-light-gray-2 ">...</CarouselItem>
        <CarouselItem className="bg-light-gray ">...</CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}
