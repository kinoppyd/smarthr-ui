import React from 'react';
import { Rect } from './dropdownHelper';
declare type DropdownContentContextType = {
    onClickCloser: () => void;
};
export declare const DropdownContentContext: React.Context<DropdownContentContextType>;
export declare const toggleContentView: (className: string, additionalClassName?: string | undefined) => (active: boolean, triggerRect: Rect, children: React.ReactNode, onClickCloser: () => void) => () => void;
export declare const DropdownContent: React.FC<{}>;
export {};
