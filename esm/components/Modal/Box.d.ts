import * as React from 'react';
interface Props {
    active: boolean;
    onClickBackground?: () => void;
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
    children?: React.ReactNode;
}
export declare const Box: (props: Props) => JSX.Element;
export {};
