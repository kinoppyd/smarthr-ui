/// <reference types="react" />
export interface Props {
    className?: string;
    value: string;
    name: string;
    required?: boolean;
    placeholder?: string;
    disabled?: boolean;
    error?: boolean;
    width?: number | string;
    onChange?: (name: string, value: string) => void;
    onBlur?: (name: string, value: string) => void;
}
export declare const TextInput: (props: Props) => JSX.Element;
export declare const NumberInput: (props: Props) => JSX.Element;
export declare const PasswordInput: (props: Props) => JSX.Element;
