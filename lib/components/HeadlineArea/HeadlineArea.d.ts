import * as React from 'react';
import { HeadingProps } from '../Heading/Heading';
interface Props {
    heading: {
        children: HeadingProps['children'];
        tag?: HeadingProps['tag'];
    };
    description?: React.ReactNode;
    className?: string;
}
export declare const HeadlineArea: (props: Props) => JSX.Element;
export {};
