'use client '

import { Search } from 'lucide-react'

import { cn } from '@/ultils/cnMerge'

interface FormSearchProductsProps {
  isHidden?: boolean
}

// TODO ADD HOOK FORM HERE AND GET QUERY PARAMS

export const FormSearchProducts = ({
  isHidden = true,
}: FormSearchProductsProps) => {
  return (
    <form
      className={cn(
        'relative  sm:flex sm:w-full  sm:items-center  ',
        isHidden ? 'hidden' : '',
      )}
    >
      <input
        type="text"
        placeholder="Pesquisar produto..."
        className="w-full  rounded-lg bg-light-gray-3
            px-6 py-4 text-dark-gray-3   "
      />
      <Search
        style={{ top: '50%', transform: 'translateY(-50%)' }}
        className=" top-50% -translate-y-50% absolute right-4 transform
           text-dark-gray placeholder:text-dark-gray-3 "
      />
    </form>
  )
}

// hidden sm:block
