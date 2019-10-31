import * as React from 'react'
interface Option {
  label: string
  value: string
}
declare type Props = React.SelectHTMLAttributes<HTMLSelectElement> & {
  error?: boolean
  width?: number | string
  options: Option[]
  labelText?: string
}
export declare const Select: (props: Props) => JSX.Element
export {}
