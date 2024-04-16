'use client'
import Image from 'next/image'
import { useState } from 'react'

import { cards, sizeShoes } from '@/constants'

interface Size {
  width: number
  height: number
  measure: string
}
interface Params {
  params: {
    id: string
  }
}

export const ProductsDetails = ({ params: { id } }: Params) => {
  const [bg, setBg] = useState('bg-pink-200')
  const [size, setSize] = useState<Size>({
    width: 320,
    height: 170,
    measure: '39',
  })

  const handleBackground = (color: string) => {
    setBg(color)
  }
  const handleSize = (size: Size) => {
    setSize(size)
  }
  return (
    <div className="max-container padding-x flex min-h-screen w-full gap-10 max-lg:flex-col lg:gap-10">
      <div className="flex w-full flex-1 flex-col">
        {/* Image */}
        <div
          className={`flex h-[52%] w-full items-center justify-center max-lg:h-[500px] max-sm:h-[350px] ${bg}`}
        >
          <Image
            src="/sneakers.png"
            alt="Digital Store"
            width={size.width}
            height={size.height}
          />
        </div>
        <div className="mt-5 flex w-full items-center justify-between gap-4">
          {/* Cards */}
          {cards.map(({ color }, ix) => (
            <div
              key={ix}
              onClick={() => handleBackground(color)}
              className={`flex h-24 w-28 cursor-pointer items-center justify-center rounded-md ${color === bg ? 'border border-black' : ''} ${color} ${ix === cards.length - 1 ? 'max-sm:hidden' : ''}`}
            >
              <Image
                src="/sneakers.png"
                alt="Digital Store"
                width={70}
                height={35}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Product info */}
      <div className="flex h-[60%] flex-1 flex-col justify-start max-lg:mb-10">
        <p className="text-3xl font-semibold sm:max-w-sm">
          Tênis Nike Revolution 6 Next Nature Masculino
        </p>
        <p className="mt-1 text-gray-500">
          <small>Casual | Nike | REF:23897123</small>
        </p>
        <div className="mt-1 flex gap-3">
          <p>⭐⭐⭐⭐⭐</p>
          <p>4.7⭐</p>
          <p>
            <span className="min-w-lg text-gray-500">(90 avaliações)</span>
          </p>
        </div>
        <div className="mt-3 flex gap-3">
          <p>
            <small className="text-gray-500">R$</small>
            <span className="text-3xl">219</span>,00
          </p>
          <p className="mt-[9px] text-gray-500">
            <small>
              <del>219,00</del>
            </small>
          </p>
        </div>
        <div className="mt-5 flex flex-col gap-1">
          <p className="text-gray-500">Descrição do produto</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam minus
            necessitatibus fugiat temporibus nostrum eum impedit, enim aperiam
            harum odio. Ad iusto consectetur, ex enim at alias et? Ducimus,
            ipsam.
          </p>
        </div>
        {/* Sizes */}
        <div className="mt-4 flex flex-col gap-2">
          <p className="text-gray-500">Tamanho</p>
          <div className="flex gap-4">
            {sizeShoes.map((sizeShoe, ix) => (
              <div
                key={ix}
                onClick={() => handleSize(sizeShoe)}
                className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-light-gray-2 ${sizeShoe.height === size.height ? 'border-none bg-pink-500 text-white' : ''}`}
              >
                <p className="text-sm font-bold">{sizeShoe.measure}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Colors */}
        <div className="mt-4 flex flex-col gap-2">
          <p className="text-gray-500">Cor</p>
          <div className="flex gap-4">
            {cards.map(({ color }, ix) => (
              <div
                key={ix}
                onClick={() => handleBackground(color)}
                className={`h-8 w-8 rounded-full ${color} cursor-pointer ${color === bg ? 'border-2 border-black' : ''}`}
              />
            ))}
          </div>
        </div>
        <button
          type="button"
          className="mt-6 w-60 rounded-xl bg-yellow-500 px-4 py-2 text-lg font-bold text-white hover:bg-warning"
        >
          Comprar
        </button>
      </div>
    </div>
  )
}

export default ProductsDetails
