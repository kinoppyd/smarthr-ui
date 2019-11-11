/// <reference types="react" />
declare type Type =
  | 'done'
  | 'success'
  | 'process'
  | 'required'
  | 'disabled'
  | 'must'
  | 'warning'
  | 'error'
interface Props {
  type?: Type
  className?: string
  children: string
}
export declare const StatusLabel: (props: Props) => JSX.Element
export {}
