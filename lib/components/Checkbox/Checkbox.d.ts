/// <reference types="react" />
export declare type Props = {
    checked: boolean;
    name: string;
    themeColor?: 'light' | 'dark';
    disabled?: boolean;
    mixed?: boolean;
    className?: string;
    onChange?: (name: string, checked: boolean) => void;
};
export declare const Checkbox: (props: Props) => JSX.Element;
