import tenisImg from '@/../public/tenis.png'

import { CardProduct } from './CardProduct'
import { FilterSectionProduct } from './FilterProduct'
import { HeaderSectionProduct } from './HeaderProduct'

export default function ProductsMain() {
  return (
    <section className="flex max-h-full max-w-full flex-col bg-[#F9F8FE]">
      <HeaderSectionProduct />
      <section className="ml-[3.9%] flex flex-row">
        <FilterSectionProduct />
        <main className="flex flex-1 select-none flex-col ">
          <section className="m-7 grid grid-cols-3 gap-7">
            <CardProduct
              alt="tenis"
              link={tenisImg.src}
              category="Tênis"
              title="K-Swiss V8 - Masculino"
              discount={10}
              price={200}
            />
            <CardProduct
              alt="tenis"
              link={tenisImg.src}
              category="Tênis"
              title="K-Swiss V8 - Masculino"
              discount={20}
              price={200}
            />
            <CardProduct
              alt="tenis"
              link={tenisImg.src}
              category="Tênis"
              title="K-Swiss V8 - Masculino"
              discount={0}
              price={200}
            />
            <CardProduct
              alt="tenis"
              link={tenisImg.src}
              category="Sapato"
              title="K-Swiss V8 - Masculino"
              discount={0}
              price={400}
            />
          </section>
        </main>
      </section>
    </section>
  )
}
