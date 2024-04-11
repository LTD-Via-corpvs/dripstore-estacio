import { Filter } from 'lucide-react'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { filterProduct } from '@/constants'

import { FilterGroup } from './../components/FilterGroup'

export const MobileFilterProduct = () => (
  <Sheet>
    <SheetTrigger className="inline-flex h-16 w-16 items-center justify-center whitespace-nowrap rounded-md bg-primary-figma text-sm font-medium text-primary-foreground ring-offset-background transition-colors">
      <Filter size={32} />
    </SheetTrigger>
    <SheetContent
      side={'left'}
      className="w-4/5 select-none space-y-5 rounded-sm p-7 text-left"
    >
      <SheetHeader>
        <SheetTitle className="font-semibold">Filtrar por</SheetTitle>
      </SheetHeader>
      <hr className="fill-light-gray-2" />
      {filterProduct.map((v, i) => (
        <FilterGroup key={i} {...v} />
      ))}
    </SheetContent>
  </Sheet>
)
