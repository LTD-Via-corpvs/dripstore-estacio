'use client'

import DesktopHeader from './desktop/DesktopHeaderProduct'
import MobileHeader from './mobile/MobileHeaderProduct'
import { DropdownProps } from './types'

export const HeaderSectionProduct = (props: DropdownProps) => (
  <>
    <MobileHeader {...props} />
    <DesktopHeader {...props} />
  </>
)
