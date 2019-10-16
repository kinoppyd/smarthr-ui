import React from 'react'
import { Rect } from './dropdownHelper'
declare type DropdownContentContextType = {
  onClickCloser: () => void
}
export declare const DropdownContentContext: React.Context<DropdownContentContextType>
export declare const toggleContentView: (
  className: string,
  additionalClassName?: string | undefined,
) => (
  active: boolean,
  triggerRect: Rect,
  children: React.ReactNode,
  theme: import('../../themes/createTheme').CreatedTheme,
  onClickCloser: () => void,
) => () => void
export declare const DropdownContent: (props: { children: React.ReactNode }) => JSX.Element
export {}
