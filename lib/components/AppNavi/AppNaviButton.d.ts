import * as React from 'react';
import { Props as IconProps } from '../Icon/Icon';
interface ClickEvent {
    preventDefault: () => void;
}
export interface AppNaviButtonProps {
    children: React.ReactNode;
    icon?: IconProps['name'];
    onClick?: (e: ClickEvent) => void;
    current?: boolean;
}
export declare const AppNaviButton: (props: AppNaviButtonProps) => JSX.Element;
export {};
