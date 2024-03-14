import { HeaderStore } from '@/components/HeaderStore'
import { ReactNode } from 'react'

const LayoutStore = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <HeaderStore />
      layout
      {children}
    </div>
  )
}

export default LayoutStore
