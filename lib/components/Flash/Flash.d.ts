/// <reference types="react" />
interface Props {
  type: 'success' | 'info' | 'warning' | 'error' | ''
  text: string
  visible: boolean
  className?: string
  onClose: () => void
}
export declare const Flash: (props: Props) => JSX.Element
export {}
