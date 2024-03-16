import Image from 'next/image'

import tenisImg from '@/../public/tenis.png' // Melhorar isso

// TODO: Criar um Props
const Card = () => (
  <div className="flex max-w-[17.5rem] flex-col space-y-3 hover:cursor-pointer">
    <div className="flex flex-col rounded-md bg-white">
      <span className="absolute m-4 items-center rounded-3xl bg-[#E7FF86] p-2 text-xs font-bold text-dark-gray-2">
        10% OFF
      </span>
      <div className="flex h-[16rem] items-center">
        <Image
          className="-rotate-[30deg]"
          src={tenisImg}
          alt="tenis"
          width={248}
          height={134}
        />
      </div>
    </div>
    <section className="flex flex-col">
      <small className="mb-0.5 font-bold tracking-wide text-light-gray">
        Tênis
      </small>
      <span className="text-lg tracking-wide text-dark-gray">
        K-Swiss V8 - Masculino
      </span>
      <div className="flex flex-row space-x-2">
        <span className="text-light-gray line-through">$200</span>
        <span className="font-bold text-dark-gray">$100</span>
      </div>
    </section>
  </div>
)

// Dissecar e separar em componentes depois
export const ProductsPage = () => {
  return (
    <section className="flex max-h-full max-w-full flex-col bg-[#F9F8FE]">
      <section className="my-7 ml-[1%] flex flex-row justify-center space-x-[54.6rem] text-dark-gray-2">
        <span className="text-sm">
          <strong>
            Resultados para <q>Tênis</q>
          </strong>{' '}
          - 389 produtos
        </span>
        {/* TODO: Colocar um Dropdown de verdade aqui */}
        <span>Dropdown foda</span>
      </section>
      <section className="ml-[3.9%] flex flex-row">
        <aside className="w-[20rem] select-none space-y-5 rounded-sm  p-7 text-left">
          <span className="text-dark-gray-2">
            <strong>Filtrar por</strong>
          </span>
          <hr className="fill-light-gray-2" />
          <section className="flex flex-col space-y-[0.65rem] text-dark-gray-2">
            <small className="font-semibold ">Marca</small>
            <span className="text-sm">Opção 1</span>
          </section>
          <section className="flex flex-col space-y-[0.65rem] text-dark-gray-2">
            <small className="font-semibold ">Categoria</small>
            <span className="text-sm">Opção 1</span>
          </section>
          <section className="flex flex-col space-y-[0.65rem] text-dark-gray-2">
            <small className="font-semibold ">Gênero</small>
            <span className="text-sm">Opção 1</span>
          </section>
          <section className="flex flex-col space-y-[0.65rem] text-dark-gray-2">
            <small className="font-semibold ">Estado</small>
            <span className="text-sm">Opção 1</span>
          </section>
        </aside>
        <main className="flex flex-1 select-none flex-col ">
          <section className="m-7 grid grid-cols-3 gap-7">
            <Card />
            <Card />
            <Card />
            <Card />
          </section>
        </main>
      </section>
    </section>
  )
}

export default ProductsPage
