import { Dropdown } from '../components/DropdownProduct'
import { DropdownProps } from '../types'

export default function MobileHeader(props: DropdownProps) {
  return (
    <section className="flex select-none flex-col items-center gap-7 text-dark-gray-2 md:hidden">
      {/* TODO: Integrar isso com o search */}
      <div className="flex items-center justify-center gap-4">
        <Dropdown {...props} />
        <div>Botão</div>
      </div>
      <span className="mr-[4.5rem] text-left">
        <strong>
          Resultados para <q>Tênis</q>
        </strong>{' '}
        - 389 produtos
      </span>
    </section>
  )
}
