import { filterProduct } from '@/constants'

import { FilterGroup } from './../components/FilterGroup'

export const DesktopFilterProduct = () => (
  <aside className="select-none space-y-5 rounded-sm p-7 text-left max-md:hidden md:w-[14rem] xl:w-[20rem]">
    <span className="text-dark-gray-2">
      <strong>Filtrar por</strong>
    </span>
    <hr className="fill-light-gray-2" />
    {filterProduct.map((v, i) => (
      <FilterGroup key={i} {...v} />
    ))}
  </aside>
)
