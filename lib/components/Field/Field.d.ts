import * as React from 'react'
import { Props as InputProps } from '../Input'
declare type Omit<T, K> = Pick<T, Exclude<keyof T, K>>
declare type Props = Omit<InputProps, 'error'> & {
  label: string
  errorMessage?: string
  helpMessage?: string
  className?: string
  children?: React.ReactNode
}
export declare const Field: (props: Props) => JSX.Element
export {}
