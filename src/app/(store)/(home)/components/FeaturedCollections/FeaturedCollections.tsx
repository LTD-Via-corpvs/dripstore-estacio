import Image from 'next/image'
import { CardHighlightProduts } from '../CardHighlightProduts/CardHighlightProduts'
import { TShirt } from '@/components/icons/TShirt'
import Link from 'next/link'
import { Pants } from '@/components/icons/Pants'
import { HeadPhones } from '@/components/icons/HeadPhones'
import { Shoes } from '@/components/icons/Shoes'

export const FeaturedCollections = () => {
  return (
    <section className="mx-auto mt-[2.37rem] flex w-full max-w-[1240px] flex-col items-center   ">
      <h2 className="self-start text-2xl font-bold text-dark-gray-2">
        Coleções em destaque
      </h2>
      <div className=" mt-5 flex flex-col flex-wrap gap-3 md:flex-row">
        {Array.from({ length: 3 }).map((_, index) => {
          return (
            <CardHighlightProduts
              discount="30% OFF"
              title="Novo drop Supreme "
              key={index}
            >
              <Image
                alt=""
                src={'/starWars2.png'}
                width={355}
                height={236}
                quality={100}
                className="absolute -bottom-[150px] -right-[136px] rotate-[-20.783deg] transform"
              />
            </CardHighlightProduts>
          )
        })}
      </div>
      <h3 className=" mt-[6.25rem] text-2xl font-bold text-dark-gray-2   ">
        Coleções em destaque
      </h3>
      <div className="mb-[7.69rem] mt-5 flex gap-12 ">
        <div className="flex flex-col">
          <Link
            href={'/'}
            className="flex items-center justify-center rounded-full bg-white p-5"
          >
            <TShirt className="h-6 w-6 lg:h-10 lg:w-10 xl:h-16 xl:w-16 " />
          </Link>
          <span className="mt-3 text-center text-sm font-bold text-dark-gray-2">
            Camisetas
          </span>
        </div>
        <div className="flex flex-col">
          <Link
            href={'/'}
            className="flex items-center justify-center rounded-full bg-white p-5"
          >
            <Pants className="h-6 w-6 lg:h-10 lg:w-10 xl:h-16 xl:w-16 " />
          </Link>
          <span className="mt-3 text-center text-sm font-bold text-dark-gray-2">
            Camisetas
          </span>
        </div>
        <div className="flex flex-col">
          <Link
            href={'/'}
            className="flex items-center justify-center rounded-full bg-white p-5"
          >
            <HeadPhones className="h-6 w-6 lg:h-10 lg:w-10 xl:h-16 xl:w-16 " />
          </Link>
          <span className="mt-3 text-center text-sm font-bold text-dark-gray-2">
            Camisetas
          </span>
        </div>
        <div className="flex flex-col">
          <Link
            href={'/'}
            className="flex items-center justify-center rounded-full bg-white p-5"
          >
            <Shoes className="h-6 w-6 lg:h-10 lg:w-10 xl:h-16 xl:w-16 " />
          </Link>
          <span className="mt-3 text-center text-sm font-bold text-dark-gray-2">
            Camisetas
          </span>
        </div>
      </div>
    </section>
  )
}
