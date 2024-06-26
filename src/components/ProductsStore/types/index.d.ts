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

export interface FilterType {
  title: string
  multipleOptions: boolean
  options: string[]
}

export type OrderType = Record<string, string>

export interface DropdownProps {
  value: string
  setValue: (value: string) => void
}
