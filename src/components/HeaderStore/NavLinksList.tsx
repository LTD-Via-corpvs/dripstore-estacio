'use client'

import { cn } from '@/ultils/cnMerge'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export const NavLinksList = () => {
  const [activeLink, setActiveLink] = useState('/')
  const pathName = usePathname()

  useEffect(() => {
    setActiveLink(pathName)
  }, [pathName])

  const activeStyle =
    'font-bold text-primary-figma border-b-primary-figma border-b-2'

  return (
    <nav className="flex flex-col gap-[0.66rem] md:flex-row md:gap-8 ">
      <Link
        className={cn(
          'w-fit border-b-2 border-b-transparent text-base font-normal text-dark-gray-2',
          activeLink === '/' && activeStyle,
        )}
        href={'/'}
      >
        Home
      </Link>
      <Link
        className={cn(
          'w-fit border-b-2 border-b-transparent text-base font-normal text-dark-gray-2',
          activeLink === '/products' && activeStyle,
        )}
        href={'/products'}
      >
        Produtos
      </Link>
      <Link
        className={cn(
          'w-fit border-b-2 border-b-transparent text-base font-normal text-dark-gray-2',
          activeLink === '/categories' && activeStyle,
        )}
        href={'/categories'}
      >
        Categorias
      </Link>
      <Link
        className={cn(
          'w-fit border-b-2 border-b-transparent text-base font-normal text-dark-gray-2',
          activeLink === '/myOrders' && activeStyle,
        )}
        href={'/myOrders'}
      >
        Meus Pedidos
      </Link>
    </nav>
  )
}
