import * as React from 'react';
interface Props {
    isOpen: boolean;
    onClickBackground?: () => void;
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
}
export declare const Modal: React.FC<Props>;
export {};
