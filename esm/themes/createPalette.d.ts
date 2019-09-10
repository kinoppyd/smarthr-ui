export interface PaletteProperty {
    TEXT_BLACK?: string;
    TEXT_GREY?: string;
    BORDER?: string;
    BACKGROUND?: string;
    COLUMN?: string;
    MAIN?: string;
    DANGER?: string;
    WARNING?: string;
    SCRIM?: string;
    OVERLAY?: string;
    OUTLINE?: string;
}
export interface CreatedPaletteTheme {
    hoverColor: (value: string) => string;
    disableColor: (value: string) => string;
    TEXT_BLACK: string;
    TEXT_GREY: string;
    BORDER: string;
    BACKGROUND: string;
    COLUMN: string;
    MAIN: string;
    DANGER: string;
    WARNING: string;
    SCRIM: string;
    OVERLAY: string;
    OUTLINE: string;
}
export declare const defaultPalette: {
    TEXT_BLACK: string;
    TEXT_GREY: string;
    BORDER: string;
    BACKGROUND: string;
    COLUMN: string;
    MAIN: string;
    DANGER: string;
    WARNING: string;
    SCRIM: string;
    OVERLAY: string;
};
export declare const createPalette: (userPalette?: PaletteProperty) => CreatedPaletteTheme;
