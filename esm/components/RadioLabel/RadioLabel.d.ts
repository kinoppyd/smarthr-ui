/// <reference types="react" />
interface Props {
    label: string;
    checked: boolean;
    name: string;
    themeColor?: 'light' | 'dark';
    disabled?: boolean;
    className?: string;
    onChange?: (name: string, checked: boolean) => void;
}
export declare const RadioLabel: (props: Props) => JSX.Element;
export {};
