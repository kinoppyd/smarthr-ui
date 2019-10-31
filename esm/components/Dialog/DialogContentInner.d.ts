import React from 'react';
declare type Props = {
    onClickOverlay?: () => void;
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
    children: React.ReactNode;
};
export declare const DialogContentInner: (props: Props) => JSX.Element;
export {};
