import React from 'react';
import { Rect } from './dropdownHelper';
declare type DropdownContextType = {
    key: string;
    active: boolean;
    triggerRect: Rect;
    onClickTrigger: (rect: Rect) => void;
    onClickCloser: () => void;
};
export declare const DropdownContext: React.Context<DropdownContextType>;
export declare const Dropdown: React.FC<{}>;
export {};
