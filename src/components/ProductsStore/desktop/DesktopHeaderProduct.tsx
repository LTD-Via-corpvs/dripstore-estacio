import { Dropdown } from '../components/DropdownProduct'
import { DropdownProps } from '../types'

export default function DesktopHeader(props: DropdownProps) {
  return (
    <section className="mx-[3.8%] my-7 hidden select-none items-center justify-between text-dark-gray-2 md:flex">
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
}
