import React from 'react'
interface Option {
  label: string
  value: string
}
declare type Props = React.SelectHTMLAttributes<HTMLSelectElement> & {
  options: Option[]
  error?: boolean
  width?: number | string
}
export declare const Select: (props: Props) => JSX.Element
export {}
