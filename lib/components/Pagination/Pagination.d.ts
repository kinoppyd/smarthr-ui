/// <reference types="react" />
interface Props {
    total: number;
    current: number;
    onClick: (pageNumber: number) => void;
    padding?: number;
    className?: string;
    withoutNumbers?: boolean;
}
export declare const Pagination: (props: Props) => JSX.Element;
export {};
