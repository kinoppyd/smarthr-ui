import * as React from 'react';
export interface Props {
    id: string;
    children: React.ReactNode;
    selected?: boolean;
    disabled?: boolean;
    className?: string;
    onClick: (tabId: string) => void;
}
export declare const TabItem: (props: Props) => JSX.Element;
