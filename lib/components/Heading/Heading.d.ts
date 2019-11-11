/// <reference types="react" />
export interface HeadingProps {
  children: string
  type?: 'screenTitle' | 'sectionTitle' | 'blockTitle' | 'subBlockTitle' | 'subSubBlockTitle'
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  className?: string
}
export declare const Heading: (props: HeadingProps) => JSX.Element
