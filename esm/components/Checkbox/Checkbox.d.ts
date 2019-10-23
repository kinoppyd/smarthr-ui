import React from 'react';
export declare type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    themeColor?: 'light' | 'dark';
    mixed?: boolean;
};
export declare const Checkbox: (props: Props) => JSX.Element;
