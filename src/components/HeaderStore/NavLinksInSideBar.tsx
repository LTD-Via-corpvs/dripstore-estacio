import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'
import { Menu } from 'lucide-react'
import { NavLinksList } from './NavLinksList'

export const NavLinksInSideBar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent side={'left'} className="w-4/5">
        <SheetHeader>
          <SheetTitle>Páginas</SheetTitle>
        </SheetHeader>
        <div className="flex h-full flex-col justify-between">
          <NavLinksList />
          <div
            className="flex flex-col items-center gap-4 border-t-2
           border-t-slate-400 pb-[1.88rem] pt-5"
          >
            <button className="h-10 w-full rounded-lg bg-primary-figma text-light-gray-3 ">
              Entrar
            </button>
            <Link
              href={'/register'}
              className=" w-fit border-b-2 border-b-dark-gray-2 text-base
               font-normal text-dark-gray-2"
            >
              Cadastre-se
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
