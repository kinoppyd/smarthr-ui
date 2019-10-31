var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
import { BaseButton, BaseButtonAnchor } from './BaseButton';
import { withTheme } from '../../hocs/withTheme';
import { isTouchDevice } from '../../libs/ua';
var injectStyle = function (component) { return styled(component)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    var palette = theme.palette, interaction = theme.interaction, frame = theme.frame;
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      background-color: #fff;\n      color: ", ";\n      transition: ", ";\n      border: ", ";\n\n      &.hover {\n        background-color: ", ";\n      }\n\n      &[disabled] {\n        background-color: ", ";\n        color: ", ";\n      }\n    "], ["\n      background-color: #fff;\n      color: ", ";\n      transition: ", ";\n      border: ", ";\n\n      &.hover {\n        background-color: ", ";\n      }\n\n      &[disabled] {\n        background-color: ", ";\n        color: ", ";\n      }\n    "])), palette.TEXT_BLACK, isTouchDevice ? 'none' : "all " + interaction.hover.animation, frame.border.default, palette.hoverColor('#fff'), palette.disableColor('#fff'), palette.disableColor(palette.TEXT_BLACK));
}); };
export var SecondaryButton = withTheme(injectStyle(BaseButton));
export var SecondaryButtonAnchor = withTheme(injectStyle(BaseButtonAnchor));
var templateObject_1, templateObject_2;
//# sourceMappingURL=SecondaryButton.js.map