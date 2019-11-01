import * as React from 'react'
import { Props as InputProps } from '../Input'
declare type Props = {
  label: string
  input?: InputProps
  errorMessage?: string
  helpMessage?: string
  className?: string
  children?: React.ReactNode
}
export declare const Field: (props: Props) => JSX.Element
export {}
