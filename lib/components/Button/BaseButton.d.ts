import * as React from 'react';
import { InjectedProps } from '../../hocs/withTheme';
declare type Tag = 'button' | 'a';
declare type Size = 'default' | 's';
interface ClickEvent {
    preventDefault: () => void;
}
export interface ButtonProps extends BaseProps {
    onClick?: (e: ClickEvent) => void;
    disabled?: boolean;
}
export interface AnchorProps extends BaseProps {
    href: string;
    target?: string;
    rel?: string;
}
export interface BaseProps {
    size?: Size;
    children?: React.ReactNode;
    className?: string;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    square?: boolean;
    wide?: boolean;
}
export declare type MargedButtonProps = ButtonProps & InjectedProps;
export declare type MargedAnchorProps = AnchorProps & InjectedProps;
export declare const buttonFactory: <Props extends BaseProps>(tag: Tag) => React.FC<Props & InjectedProps>;
export declare const BaseButton: React.FC<MargedButtonProps>;
export declare const BaseButtonAnchor: React.FC<MargedAnchorProps>;
export {};
