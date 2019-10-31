import React from 'react';
import { MessageDialogContentProps } from './MessageDialogContent';
declare type Props = MessageDialogContentProps & {
    isOpen: boolean;
    onClickClose: () => void;
};
export declare const MessageDialog: React.FC<Props>;
export {};
