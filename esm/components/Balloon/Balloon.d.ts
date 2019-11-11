import * as React from 'react'
interface Props {
  horizontal: 'right' | 'center' | 'left'
  vertical: 'top' | 'middle' | 'bottom'
  className?: string
  children?: React.ReactNode
}
export declare const LightBalloon: (props: Props) => JSX.Element
export declare const DarkBalloon: (props: Props) => JSX.Element
export {}
