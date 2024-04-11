import { Dropdown } from '../components/DropdownProduct'
import { DropdownProps } from '../types'
import { MobileFilterProduct } from './MobileFilterProduct'

export default function MobileHeader(props: DropdownProps) {
  return (
    <section className="flex select-none flex-col items-center gap-7 text-dark-gray-2 md:hidden">
      {/* TODO: Integrar isso com o search */}
      <div className="flex flex-row items-center justify-around gap-4">
        <Dropdown {...props} />
        <MobileFilterProduct />
      </div>
      <span className="mr-[5.9rem] text-left">
        <strong>
          Resultados para <q>Tênis</q>
        </strong>{' '}
        - 389 produtos
      </span>
    </section>
  )
}
