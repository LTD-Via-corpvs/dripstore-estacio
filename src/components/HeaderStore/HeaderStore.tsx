import Image from 'next/image'
import { Search, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { NavLinksHeader } from './NavLinksHeader'

export const HeaderStore = () => {
  return (
    <header className=" mx-auto flex w-full max-w-[1240px] flex-col gap-10 py-8">
      <div className="flex items-center justify-between ">
        <Image src="/group.svg" alt="Digital Store" width={32} height={32} />
        <h2 className="text-4xl font-bold text-primary">Digital Store</h2>
        <form className="relative flex w-full max-w-[34rem] items-center ">
          <input
            type="text"
            placeholder="Pesquisar produto..."
            className="w-full  rounded-lg bg-light-gray-3
            px-6 py-4 text-dark-gray-3   "
          />
          <Search
            className="top-50% -translate-y-50% absolute right-4 transform
           text-dark-gray placeholder:text-dark-gray-3 "
          />
        </form>
        <Link
          href={'/register'}
          className=" border-b-2 border-b-dark-gray-2 text-base font-normal text-dark-gray-2"
        >
          Cadastre-se
        </Link>
        <button className="h-10 w-28 rounded-lg bg-primary text-light-gray-3 ">
          Entrar
        </button>
        <button>
          <ShoppingCart className="text-primary" />
          <span className="sr-only">Carrinho de Compras</span>
        </button>
      </div>
      <NavLinksHeader />
    </header>
  )
}
