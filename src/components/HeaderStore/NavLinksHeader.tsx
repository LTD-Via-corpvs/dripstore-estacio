'use client'

import { cn } from '@/ultils/cnMerge'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export const NavLinksHeader = () => {
  const [activeLink, setActiveLink] = useState('/')
  const pathName = usePathname()

  useEffect(() => {
    setActiveLink(pathName)
    console.log(pathName)
  }, [pathName])

  const activeStyle = 'font-bold text-primary border-b-primary border-b-2'

  return (
    <nav className="flex gap-8">
      <Link
        className={cn(
          'border-b-2 border-b-transparent text-base font-normal text-dark-gray-2',
          activeLink === '/' && activeStyle,
        )}
        href={'/'}
      >
        Home
      </Link>
      <Link
        className={cn(
          'border-b-2 border-b-transparent text-base font-normal text-dark-gray-2',
          activeLink === '/products' && activeStyle,
        )}
        href={'/products'}
      >
        Produtos
      </Link>
      <Link
        className={cn(
          'border-b-2 border-b-transparent text-base font-normal text-dark-gray-2',
          activeLink === '/categories' && activeStyle,
        )}
        href={'/categories'}
      >
        Categorias
      </Link>
      <Link
        className={cn(
          'border-b-2 border-b-transparent text-base font-normal text-dark-gray-2',
          activeLink === '/myOrders' && activeStyle,
        )}
        href={'/myOrders'}
      >
        Meus Pedidos
      </Link>
    </nav>
  )
}
