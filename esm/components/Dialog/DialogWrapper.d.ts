import React from 'react';
declare type DialogContextType = {
    onClickTrigger: () => void;
    onClickClose: () => void;
    DialogContentRoot: React.FC<{
        children: React.ReactNode;
    }>;
};
export declare const DialogContext: React.Context<DialogContextType>;
export declare const DialogWrapper: React.FC;
export {};
