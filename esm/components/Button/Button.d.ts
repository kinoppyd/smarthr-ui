import * as React from 'react';
declare type Type = 'primary' | 'danger' | 'sub-a' | 'sub-b' | 'sub-c';
declare type Size = 's' | 'm' | 'l';
interface ClickEvent {
    preventDefault: () => void;
}
interface BaseProps {
    type?: Type;
    size?: Size;
    full?: boolean;
    children?: React.ReactNode;
    className?: string;
}
interface ButtonProps extends BaseProps {
    onClick?: (e: ClickEvent) => void;
    disabled?: boolean;
}
interface AnchorProps extends BaseProps {
    href: string;
    target?: string;
}
interface ButtonDivProps extends BaseProps {
    onClick?: (e: ClickEvent) => void;
    disabled?: boolean;
    tabIndex?: number;
    role?: string;
}
export declare const Button: (props: ButtonProps) => JSX.Element;
export declare const ButtonAnchor: (props: AnchorProps) => JSX.Element;
export declare const ButtonDiv: (props: ButtonDivProps) => JSX.Element;
export {};
