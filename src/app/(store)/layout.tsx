import { HeaderStore } from '@/components/HeaderStore/HeaderStore'
import { ReactNode } from 'react'

const LayoutStore = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="grid min-h-screen w-full grid-cols-1
    grid-rows-[min-content_1fr]"
    >
      <HeaderStore />
      {children}
    </div>
  )
}

export default LayoutStore
