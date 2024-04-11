import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

import { FilterType } from '../types'

export const FilterGroup = ({
  options,
  title,
  multipleOptions,
}: FilterType) => (
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
