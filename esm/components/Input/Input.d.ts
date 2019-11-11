import * as React from 'react'
export declare type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  type?: 'text' | 'number' | 'password'
  error?: boolean
  width?: number | string
  autoFocus?: boolean
}
export declare const Input: (props: Props) => JSX.Element
