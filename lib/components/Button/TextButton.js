"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importStar(require("styled-components"));
var BaseButton_1 = require("./BaseButton");
var withTheme_1 = require("../../hocs/withTheme");
var ua_1 = require("../../libs/ua");
var injectStyle = function (component) { return styled_components_1.default(component)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    var palette = theme.palette, interaction = theme.interaction, frame = theme.frame;
    return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      background-color: transparent;\n      color: ", ";\n      transition: ", ";\n      border: ", " ", " #fff;\n\n      &.hover {\n        background-color: ", ";\n      }\n\n      &[disabled] {\n        background-color: transparent;\n        color: ", ";\n      }\n    "], ["\n      background-color: transparent;\n      color: ", ";\n      transition: ", ";\n      border: ", " ", " #fff;\n\n      &.hover {\n        background-color: ", ";\n      }\n\n      &[disabled] {\n        background-color: transparent;\n        color: ", ";\n      }\n    "])), palette.TEXT_BLACK, ua_1.isTouchDevice ? 'none' : "all " + interaction.hover.animation, frame.border.lineWidth, frame.border.lineStyle, palette.hoverColor('#fff'), palette.disableColor(palette.TEXT_DISABLED));
}); };
exports.TextButton = withTheme_1.withTheme(injectStyle(BaseButton_1.BaseButton));
exports.TextButtonAnchor = withTheme_1.withTheme(injectStyle(BaseButton_1.BaseButtonAnchor));
var templateObject_1, templateObject_2;
//# sourceMappingURL=TextButton.js.map