import React from 'react'
declare type Props = {
  children: React.ReactNode
  iconPosition?: 'left' | 'right'
  displayIcon?: boolean
  expandableMultiply?: boolean
  defaultExpanded?: string[]
  className?: string
  onClick?: (expandedItems: string[]) => void
}
export declare const AccordionPanelContext: React.Context<any>
export declare const AccordionPanel: React.FC<Props>
export {}
