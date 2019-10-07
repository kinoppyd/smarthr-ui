export declare type Rect = {
    top: number;
    right: number;
    bottom: number;
    left: number;
};
export declare function getRandomStr(): string;
export declare function getParentElementByClassNameRecursively(element: HTMLElement | null, className?: string): HTMLElement | null;
declare type Size = {
    width: number;
    height: number;
};
export declare type Position = {
    top: string;
    left: string;
};
export declare function getContentPositionStyle(triggerRect: Rect, contentSize: Size, windowSize: Size, scroll: {
    top: number;
    left: number;
}): Position;
export {};
