import * as React from 'react';
interface State {
    active: boolean;
    children?: React.ReactNode[];
}
interface ModalContext {
    showModal: () => void;
    hideModal: () => void;
    active: boolean;
}
export declare const ModalConsumer: React.ExoticComponent<React.ConsumerProps<ModalContext>>;
export declare class ModalWrapper extends React.PureComponent<{}, State> {
    state: State;
    render(): JSX.Element;
    private hide;
    private show;
}
export {};
