"use client"
import { cards, sizeShoes } from '@/constants'
import { useState } from 'react'
import Image from 'next/image'
interface Size {
    width: number,
    height: number,
    measure: string,
}
interface Params {
    params: {
        id: string
    }
}

export const ProductsDetails = ({ params: { id } }: Params) => {
    const [bg, setBg] = useState('bg-pink-200')
    const [size, setSize] = useState<Size>({ width: 320, height: 170, measure: '39' })

    const handleBackground = (color: string) => {
        setBg(color)
    }
    const handleSize = (size: Size) => {
        setSize(size)
    }
    return (
        <div className='max-container w-full min-h-screen padding-x flex max-lg:flex-col lg:gap-10 gap-10'>
            <div className="flex flex-col flex-1 w-full">
                {/*Image*/}
                <div className={`flex justify-center items-center w-full h-[52%] max-lg:h-[500px] max-sm:h-[350px] ${bg}`}>
                    <Image src="/sneakers.png" alt="Digital Store" width={size.width} height={size.height} />
                </div>
                <div className="flex gap-4 mt-5 w-full justify-between items-center">
                    {/*Cards*/}
                    {cards.map(({ color }, ix) => (
                        <div onClick={() => handleBackground(color)} key={ix} className={`flex justify-center items-center rounded-md w-28 h-24 cursor-pointer ${color === bg ? 'border border-black' : ''} ${color} ${ix === (cards.length - 1) ? 'max-sm:hidden' : ''}`}>
                            <Image src="/sneakers.png" alt="Digital Store" width={70} height={35} />
                        </div>
                    ))}
                </div>
            </div>

            {/*Product info*/}
            <div className="flex flex-1 flex-col justify-start h-[60%] max-lg:mb-10">
                <p className="text-3xl font-semibold sm:max-w-sm">Tênis Nike Revolution 6 Next Nature Masculino</p>
                <p className="text-gray-500 mt-1"><small>Casual | Nike | REF:23897123</small></p>
                <div className="flex gap-3 mt-1">
                    <p>⭐⭐⭐⭐⭐</p>
                    <p>4.7⭐</p>
                    <p><span className="text-gray-500 min-w-lg">(90 avaliações)</span></p>
                </div>
                <div className="flex gap-3 mt-3">
                    <p><small className="text-gray-500">R$</small><span className="text-3xl">219</span>,00</p>
                    <p className="text-gray-500 mt-[9px]"><small><del>219,00</del></small></p>
                </div>
                <div className="flex flex-col gap-1 mt-5">
                    <p className="text-gray-500">Descrição do produto</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam minus necessitatibus fugiat temporibus nostrum eum impedit, enim aperiam harum odio. Ad iusto consectetur, ex enim at alias et? Ducimus, ipsam.</p>
                </div>
                {/*Sizes*/}
                <div className="flex flex-col gap-2 mt-4">
                    <p className="text-gray-500">Tamanho</p>
                    <div className="flex gap-4">
                        {sizeShoes.map((sizeShoe, ix) => (
                            <div
                                key={ix}
                                onClick={() => handleSize(sizeShoe)}
                                className={`w-10 h-10 cursor-pointer rounded-md border border-light-gray-2 flex justify-center items-center ${sizeShoe.height === size.height ? 'bg-pink-500 text-white border-none' : ''}`}
                            >
                                <p className='text-sm font-bold'>{sizeShoe.measure}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/*Colors*/}
                <div className="flex flex-col gap-2 mt-4">
                    <p className="text-gray-500">Cor</p>
                    <div className="flex gap-4">
                        {cards.map(({ color }, ix) => (
                            <div
                                key={ix}
                                onClick={() => handleBackground(color)}
                                className={`w-8 h-8 rounded-full ${color} cursor-pointer ${color === bg ? 'border-2 border-black' : ''}`}
                            />
                        ))}
                    </div>
                </div>
                <button
                    type="button"
                    className="w-60 mt-6 rounded-xl bg-yellow-500 hover:bg-warning text-white text-lg font-bold py-2 px-4"
                >
                    Comprar
                </button>
            </div>
        </div>
    )
}

export default ProductsDetails
