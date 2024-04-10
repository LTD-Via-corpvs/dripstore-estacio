import { filterProduct } from '@/constants'

import { FilterObject } from './types'

const FilterGroup = ({ options, title }: FilterObject) => (
  <section className="flex flex-col space-y-[0.65rem] text-dark-gray-2">
    <small className="font-semibold ">{title}</small>
    {options.map((v, i) => (
      <span key={i} className="text-sm">
        {v}
      </span>
    ))}
  </section>
)

export const FilterSectionProduct = () => (
  <aside className="w-[20rem] select-none space-y-5 rounded-sm  p-7 text-left">
    <span className="text-dark-gray-2">
      <strong>Filtrar por</strong>
    </span>
    <hr className="fill-light-gray-2" />
    {filterProduct.map((v, i) => (
      <FilterGroup key={i} {...v} />
    ))}
  </aside>
)
