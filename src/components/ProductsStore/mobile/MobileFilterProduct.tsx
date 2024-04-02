import { Filter } from 'lucide-react'

import { Button } from '@/components/ui/button'
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
    <SheetTrigger>
      <Button className="h-16 w-16 bg-primary-figma">
        <Filter size={32} />
      </Button>
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
