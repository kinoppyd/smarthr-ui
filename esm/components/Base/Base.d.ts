import * as React from 'react';
declare type Radius = 's' | 'm';
interface Props {
    radius?: Radius;
    children?: React.ReactNode;
    className?: string;
}
export declare const Base: React.FunctionComponent<Props>;
export {};
