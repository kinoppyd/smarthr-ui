/// <reference types="react" />
export interface Props {
    id: string;
    label: string;
    selected?: boolean;
    disabled?: boolean;
    className?: string;
    onClick: (tabId: string) => void;
}
export declare const TabItem: (props: Props) => JSX.Element;
