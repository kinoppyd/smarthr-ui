/// <reference types="react" />
interface Option {
  label: string
  value: string
}
interface Props {
  className?: string
  value: string
  name: string
  required?: boolean
  disabled?: boolean
  error?: boolean
  width?: number | string
  options: Option[]
  labelText?: string
  onChange?: (name: string, value: string) => void
}
export declare const Select: (props: Props) => JSX.Element
export {}
