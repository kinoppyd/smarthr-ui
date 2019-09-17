/// <reference types="react" />
declare type Type = 'done' | 'success' | 'process' | 'required' | 'disabled' | 'must' | 'warning' | 'error';
interface Props {
    type?: Type;
    className?: string;
    children: string;
}
export declare const Tag: (props: Props) => JSX.Element;
export {};
