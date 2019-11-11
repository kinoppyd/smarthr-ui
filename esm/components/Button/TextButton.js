var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
import { BaseButton, BaseButtonAnchor, } from './BaseButton';
import { withTheme } from '../../hocs/withTheme';
import { isTouchDevice } from '../../libs/ua';
var injectStyle = function (component) { return styled(component)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    var palette = theme.palette, interaction = theme.interaction, frame = theme.frame;
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      background-color: transparent;\n      color: ", ";\n      transition: ", ";\n      border: ", " ", " #fff;\n\n      &.hover {\n        background-color: ", ";\n      }\n\n      &[disabled] {\n        background-color: transparent;\n        color: ", ";\n      }\n    "], ["\n      background-color: transparent;\n      color: ", ";\n      transition: ", ";\n      border: ", " ", " #fff;\n\n      &.hover {\n        background-color: ", ";\n      }\n\n      &[disabled] {\n        background-color: transparent;\n        color: ", ";\n      }\n    "])), palette.TEXT_BLACK, isTouchDevice ? 'none' : "all " + interaction.hover.animation, frame.border.lineWidth, frame.border.lineStyle, palette.hoverColor('#fff'), palette.disableColor(palette.TEXT_DISABLED));
}); };
export var TextButton = withTheme(injectStyle(BaseButton));
export var TextButtonAnchor = withTheme(injectStyle(BaseButtonAnchor));
var templateObject_1, templateObject_2;
//# sourceMappingURL=TextButton.js.map