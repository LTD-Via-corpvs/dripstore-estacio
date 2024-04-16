import { ArrowRight } from 'lucide-react'

import tenisImg from '@/../public/tenis.png'
import { CardProduct } from '@/components/ProductsStore/CardProduct'

export const TrendingProducts = () => {
  return (
    <section className="mx-auto mt-[2.37rem] flex w-full max-w-[1240px] flex-col first-letter:items-start lg:px-0">
      <section className="hidden select-none items-center justify-between text-dark-gray-2 md:flex">
        <h2 className=" px-4 text-2xl font-bold text-dark-gray-2 lg:pl-8 xl:px-0">
          Produtos em Alta
        </h2>
        <h2 className="flex items-center justify-center gap-2 text-primary-figma hover:cursor-pointer hover:text-primary-figma/80">
          Ver todos <ArrowRight />
        </h2>
      </section>
      <div className="mt-5 grid w-full max-w-[1240px] grid-cols-2 gap-3 overflow-x-auto px-4 sm:flex-row sm:px-0 md:grid-cols-4 [&::-webkit-scrollbar]:hidden">
        {Array.from({ length: 8 }).map((_, index) => {
          return (
            <CardProduct
              key={index}
              alt="tenis"
              link={tenisImg.src}
              category="Tênis"
              title="K-Swiss V8 - Masculino"
              discount={0}
              price={200}
            />
          )
        })}
      </div>
    </section>
  )
}
