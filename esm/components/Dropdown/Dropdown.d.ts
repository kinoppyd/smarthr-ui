import React from 'react'
import { Rect } from './dropdownHelper'
declare type DropdownContextType = {
  active: boolean
  triggerRect: Rect
  onClickTrigger: (rect: Rect) => void
  onClickCloser: () => void
  DropdownContentRoot: React.FC<{
    children: React.ReactNode
  }>
}
export declare const DropdownContext: React.Context<DropdownContextType>
export declare const Dropdown: React.FC<{}>
export {}
