export interface DiscountProductProp {
  discount: number
}

export interface ImageProductProps extends DiscountProductProp {
  link: string
  alt: string
}

type ProductCategory = 'Tênis' | 'Sapato'

export interface InfoProductProps {
  category: ProductCategory
  title: string
  price: number
}

export interface InfoProductDiscountProps extends InfoProductProps {
  priceOff: number
}

export type ProductsProps = ImageProductProps & InfoProductProps

export type FilterObject = {
  title: string
  multipleOptions: boolean
  options: string[]
}
