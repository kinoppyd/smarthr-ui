import * as React from 'react';
import { CreatedTheme } from '../themes/createTheme';
export interface InjectedProps {
    theme: CreatedTheme;
}
export declare const withTheme: <OriginalProps extends {}>(WrappedComponent: React.ComponentType<OriginalProps & InjectedProps>) => (props: OriginalProps) => JSX.Element;
