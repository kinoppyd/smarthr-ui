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
    var palette = theme.palette, interaction = theme.interaction;
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      color: #fff;\n      border: none;\n      background-color: ", ";\n      color: #fff;\n      transition: ", ";\n\n      &.hover {\n        background-color: ", ";\n      }\n\n      &[disabled] {\n        background-color: ", ";\n        color: ", ";\n      }\n    "], ["\n      color: #fff;\n      border: none;\n      background-color: ", ";\n      color: #fff;\n      transition: ", ";\n\n      &.hover {\n        background-color: ", ";\n      }\n\n      &[disabled] {\n        background-color: ", ";\n        color: ", ";\n      }\n    "])), palette.DANGER, isTouchDevice ? 'none' : "all " + interaction.hover.animation, palette.hoverColor(palette.DANGER), palette.disableColor(palette.DANGER), palette.disableColor('#fff'));
}); };
export var DangerButton = withTheme(injectStyle(BaseButton));
export var DangerButtonAnchor = withTheme(injectStyle(BaseButtonAnchor));
var templateObject_1, templateObject_2;
//# sourceMappingURL=DangerButton.js.map