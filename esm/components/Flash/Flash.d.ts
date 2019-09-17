/// <reference types="react" />
interface Props {
    type: 'success' | 'info' | 'alert' | 'danger' | '';
    text: string;
    visible: boolean;
    className?: string;
    onClose: () => void;
}
export declare const Flash: (props: Props) => JSX.Element;
export {};
