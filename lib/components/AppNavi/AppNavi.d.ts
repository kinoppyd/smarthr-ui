import * as React from 'react'
import { AppNaviButtonProps } from './AppNaviButton'
interface Props {
  label?: string
  buttons?: AppNaviButtonProps[]
  children?: React.ReactNode
}
export declare const AppNavi: (props: Props) => JSX.Element
export {}
