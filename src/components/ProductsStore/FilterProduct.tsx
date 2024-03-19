import { filterProduct } from '@/constants'

import { Checkbox } from '../ui/checkbox'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { FilterType } from './types'

const FilterGroup = ({ options, title, multipleOptions }: FilterType) => (
  <section className="flex flex-col space-y-[0.65rem] text-dark-gray-2">
    <small className="font-semibold ">{title}</small>
    {multipleOptions ? (
      options.map((v, i) => (
        <div key={i} className="flex items-center space-x-2">
          <Checkbox id={v.toLowerCase().trim()} />
          <label
            htmlFor={v.toLowerCase().trim()}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {v}
          </label>
        </div>
      ))
    ) : (
      <RadioGroup defaultValue={options.at(0)?.toLowerCase().trim()}>
        {options.map((v, i) => (
          <div key={i} className="flex items-center space-x-2">
            <RadioGroupItem
              value={v.toLowerCase().trim()}
              id={v.toLowerCase().trim()}
            />
            <label htmlFor={v.toLowerCase().trim()}>{v}</label>
          </div>
        ))}
      </RadioGroup>
    )}
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
