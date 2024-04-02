import Image from 'next/image'

// import tenisImg from '@/../public/tenis.png'
import {
  DiscountProductProp,
  ImageProductProps,
  InfoProductDiscountProps,
  ProductsProps,
} from './types'

const DiscountTag = ({ discount }: DiscountProductProp) => (
  <span className="absolute m-4 items-center rounded-3xl bg-[#E7FF86] p-3 text-base font-bold text-dark-gray-2 md:p-2 md:text-xs">
    {discount}% OFF
  </span>
)

const ImageContainer = ({ discount, link, alt }: ImageProductProps) => (
  <div className="flex flex-col rounded-md bg-white">
    {discount > 0 && <DiscountTag discount={discount} />}
    <div className="flex h-[16rem] items-center justify-center">
      <Image
        className="mr-5 h-[75px] w-[160px] -rotate-[30deg] sm:h-[115px] sm:w-[220px] md:h-[80px] md:w-[165px] lg:h-[135px] lg:w-[240px]"
        src={link}
        alt={alt}
        width={248}
        height={134}
      />
    </div>
  </div>
)

const InfoContainer = ({
  category,
  price,
  priceOff,
  title,
}: InfoProductDiscountProps) => (
  <section className="flex flex-col">
    <small className="mb-0.5 font-bold tracking-wide text-light-gray">
      {category}
    </small>
    <span className="text-base tracking-wide text-dark-gray sm:text-lg md:text-base lg:text-lg">
      {title}
    </span>
    <div className="flex flex-row space-x-2">
      {priceOff !== price ? (
        <>
          <span className="text-light-gray line-through">R${price}</span>
          <span className="font-bold text-dark-gray">R${priceOff}</span>
        </>
      ) : (
        <>
          <span className="font-bold text-dark-gray">R${price}</span>
        </>
      )}
    </div>
  </section>
)

export const CardProduct = (product: ProductsProps) => {
  const priceOff = product.price - product.price * (product.discount / 100)

  return (
    <div className="flex max-w-[17.5rem] flex-col space-y-3 hover:cursor-pointer">
      <ImageContainer
        alt={product.alt}
        discount={product.discount}
        link={product.link}
      />
      <InfoContainer
        category={product.category}
        price={product.price}
        title={product.title}
        priceOff={priceOff}
      />
    </div>
  )
}
