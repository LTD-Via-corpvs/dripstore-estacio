import { ReactNode } from 'react'

interface CardHighlightProdutsProps {
  children: ReactNode
  discount: string
  title: string
}

export const CardHighlightProduts = ({
  children,
  discount,
  title,
}: CardHighlightProdutsProps) => {
  return (
    <div
      className="relative flex h-[15.68rem]  w-[25.31rem] flex-col
        overflow-hidden rounded-lg  bg-[#D8E3F2] pb-[2.12rem] pl-[1.88rem] pt-[2.12rem]
        "
    >
      <span
        className="flex w-28 items-center justify-center rounded-full bg-[#E7FF86] px-4 py-1 text-sm
          font-bold text-dark-gray-2
          "
      >
        {discount}
      </span>
      <strong
        className="mb-5 mt-[0.62rem] h-[4.5rem] w-[10.75rem] text-[2rem] font-bold
            leading-9 text-dark-gray
          "
      >
        {title}
      </strong>
      <button
        className="z-10 flex h-12 w-[9.5rem] select-none items-center justify-center
          rounded-lg bg-white text-base font-bold text-primary-figma
          transition-colors  hover:bg-light-gray-3 active:bg-light-gray-2 active:transition-colors
          active:duration-0 active:ease-in-out
          "
      >
        Comprar
      </button>

      {children}
    </div>
  )
}
