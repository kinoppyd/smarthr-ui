import * as React from 'react';
interface Props {
    label: string;
    name?: string;
    value?: string;
    required?: boolean;
    placeholder?: string;
    disabled?: boolean;
    error?: string;
    help?: string;
    width?: number | string;
    className?: string;
    onChange?: (name: string, value: string) => void;
    onBlur?: (name: string, value: string) => void;
    children?: React.ReactNode;
}
export declare const Field: (props: Props) => JSX.Element;
export declare const TextField: (props: Props) => JSX.Element;
export declare const NumberField: (props: Props) => JSX.Element;
export declare const PasswordField: (props: Props) => JSX.Element;
export {};
