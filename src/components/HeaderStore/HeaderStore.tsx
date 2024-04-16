'use client'

import { Search, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { cn } from '@/ultils/cnMerge'

import { FormSearchProducts } from './FormSearchProducts'
import { NavLinksInSideBar } from './NavLinksInSideBar'
import { NavLinksList } from './NavLinksList'

export const HeaderStore = () => {
  const [formSearchIsOpen, setFormSearchIsOpen] = useState(false)

  const handleToggleFormSearch = () => setFormSearchIsOpen(!formSearchIsOpen)

  return (
    <header className="mx-auto flex w-full max-w-[1240px] flex-col gap-4 p-8 xl:px-0">
      <div
        className="flex w-full  flex-row-reverse
    items-center gap-4  md:flex-col md:items-start md:gap-10 "
      >
        <div className="flex w-full items-center justify-between gap-8 sm:justify-around ">
          <div className="flex min-w-fit items-center gap-2">
            <Image
              src="/group.svg"
              alt="Digital Store"
              width={32}
              height={32}
              className="h-5 w-5 md:h-8 md:w-8"
            />
            <h2 className="whitespace-nowrap text-xl font-bold text-primary-figma md:text-2xl lg:min-w-36 lg:text-4xl">
              Digital Store
            </h2>
          </div>
          <FormSearchProducts />
          <button
            onClick={handleToggleFormSearch}
            className={cn(
              'h-5 w-5 text-light-gray-2 sm:hidden',
              formSearchIsOpen && 'text-primary-figma',
            )}
          >
            <Search />
          </button>
          <Link
            href={'/register'}
            className=" hidden min-w-[100px] border-b-2 border-b-dark-gray-2 text-base font-normal
            text-dark-gray-2 md:block
            "
          >
            Cadastre-se
          </Link>
          <button className="hidden h-10 w-40 rounded-lg bg-primary-figma text-light-gray-3 md:block ">
            Entrar
          </button>
          <button>
            <ShoppingCart className="text-primary-figma" />
            <span className="sr-only">Carrinho de Compras</span>
          </button>
        </div>
        <span className="flex items-center justify-center md:hidden">
          <NavLinksInSideBar />
        </span>
        <span className="hidden md:block">
          <NavLinksList />
        </span>
      </div>
      {formSearchIsOpen && (
        <div className="sm:hidden">
          <FormSearchProducts isHidden={false} />
        </div>
      )}
    </header>
  )
}
