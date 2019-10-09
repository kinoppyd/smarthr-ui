/// <reference types="react" />
interface Props {
  targetPage: number
  onClick: (pageNumber: number) => void
  direction: 'prev' | 'next'
  disabled: boolean
  double?: boolean
}
export declare const PaginationControllerItem: (props: Props) => JSX.Element
export {}
