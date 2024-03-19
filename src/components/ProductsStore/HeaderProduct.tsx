'use client'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

import { OrderObject } from '@/constants'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'

interface DropdownProps {
  value: string
  setValue: (value: string) => void
}

const Dropdown = ({ value, setValue }: DropdownProps) => {
  const [isOpen, setOpen] = useState<boolean>(false)

  return (
    <DropdownMenu onOpenChange={() => setOpen(!isOpen)}>
      <DropdownMenuTrigger className="flex w-[20rem] items-center justify-between rounded-sm border border-dark-gray-2 py-4 hover:cursor-pointer data-[state=open]:border-primary-figma data-[state=open]:text-primary-figma">
        <span className="ml-4 text-left">
          <strong>Ordernar por:</strong>{' '}
          {Object.entries(OrderObject)
            .filter(([k]) => k === value)
            .map(([, v], index) => (
              <span key={index} className="lowercase">
                {v}
              </span>
            ))}
        </span>
        {isOpen ? (
          <ChevronUp className="mr-4" />
        ) : (
          <ChevronDown className="mr-4" />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[20rem]">
        <DropdownMenuRadioGroup
          value={value}
          defaultValue="m_r"
          onValueChange={setValue}
        >
          {Object.entries(OrderObject).map(([k, v], index) => (
            <DropdownMenuRadioItem key={index} value={k}>
              {v}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

interface HeaderProductProps extends DropdownProps {}

export const HeaderSectionProduct = (props: HeaderProductProps) => (
  <section className="mx-[3.8%] my-7 flex select-none items-center justify-between text-dark-gray-2">
    {/* TODO: Integrar isso com o search */}
    <span className="text-left text-sm">
      <strong>
        Resultados para <q>Tênis</q>
      </strong>{' '}
      - 389 produtos
    </span>
    <Dropdown {...props} />
  </section>
)
