import * as React from 'react'
import { InjectedProps } from '../../hocs/withTheme'
declare type Tag = 'button' | 'a'
declare type Size = 'default' | 's'
declare type Omit<T, K> = Pick<T, Exclude<keyof T, K>>
export declare type ButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'size' | 'prefix'
> &
  BaseProps
export declare type AnchorProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'prefix'> &
  BaseProps
export interface BaseProps {
  size?: Size
  children?: React.ReactNode
  className?: string
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  square?: boolean
  wide?: boolean
}
export declare type MargedButtonProps = ButtonProps & InjectedProps
export declare type MargedAnchorProps = AnchorProps & InjectedProps
export declare const buttonFactory: <Props extends BaseProps>(
  tag: Tag,
) => React.FC<Props & InjectedProps>
export declare const BaseButton: React.FC<MargedButtonProps>
export declare const BaseButtonAnchor: React.FC<MargedAnchorProps>
export {}
