import React from 'react';
import { ActionDialogContentProps } from './ActionDialogContent';
declare type Props = ActionDialogContentProps & {
    isOpen: boolean;
    onClickClose: () => void;
};
export declare const ActionDialog: React.FC<Props>;
export {};
