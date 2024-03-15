import { HeaderStore } from '@/components/HeaderStore/HeaderStore'
import { FooterStore } from '@/components/FooterStore/FooterStore'
import { ReactNode } from 'react'

const LayoutStore = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="grid min-h-screen w-full grid-cols-1
    grid-rows-[min-content_1fr]"
    >
      <HeaderStore />
      {children}
      <section className='bg-dark-gray padding-x padding-t pb-20'> 
        <FooterStore />
      </section>
    </div>
  )
}

export default LayoutStore
