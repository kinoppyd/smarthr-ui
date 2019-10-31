import * as React from 'react';
export declare type Props = {
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
    colspan?: number;
    rowspan?: number;
    highlighted?: boolean;
};
export declare const Cell: (props: Props) => JSX.Element;
