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
var React = __importStar(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var withTheme_1 = require("../../hocs/withTheme");
var StatusLabelComponent = function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'done' : _b, _c = _a.className, className = _c === void 0 ? '' : _c, children = _a.children, theme = _a.theme;
    return (React.createElement(Wrapper, { theme: theme, className: type + " " + className }, children));
};
exports.StatusLabel = withTheme_1.withTheme(StatusLabelComponent);
var BorderStyle = styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      border: ", ";\n    "], ["\n      border: ", ";\n    "])), theme.frame.border.default);
});
var FillStyle = styled_components_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      background-color: ", ";\n      color: #fff;\n    "], ["\n      background-color: ", ";\n      color: #fff;\n    "])), theme.palette.BORDER);
});
var Wrapper = styled_components_1.default.span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return styled_components_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      height: ", ";\n      box-sizing: border-box;\n      margin: 0;\n      padding: 0 ", ";\n      display: inline-block;\n      white-space: nowrap;\n      font-size: ", ";\n      font-weight: bold;\n      line-height: ", ";\n\n      &.done {\n        ", "\n        border-color: ", ";\n        color: ", ";\n      }\n\n      &.success {\n        ", "\n        border-color: ", ";\n        color: ", ";\n      }\n\n      &.process {\n        ", "\n        border-color: ", ";\n        color: ", ";\n      }\n\n      &.required {\n        ", "\n        border-color: ", ";\n        color: ", ";\n      }\n\n      &.disabled {\n        ", "\n        background-color: ", ";\n      }\n\n      &.must {\n        ", "\n        background-color: ", ";\n      }\n\n      &.warning {\n        ", "\n        background-color: ", ";\n      }\n\n      &.error {\n        ", "\n        background-color: ", ";\n      }\n    "], ["\n      height: ", ";\n      box-sizing: border-box;\n      margin: 0;\n      padding: 0 ", ";\n      display: inline-block;\n      white-space: nowrap;\n      font-size: ", ";\n      font-weight: bold;\n      line-height: ", ";\n\n      &.done {\n        ", "\n        border-color: ", ";\n        color: ", ";\n      }\n\n      &.success {\n        ", "\n        border-color: ", ";\n        color: ", ";\n      }\n\n      &.process {\n        ", "\n        border-color: ", ";\n        color: ", ";\n      }\n\n      &.required {\n        ", "\n        border-color: ", ";\n        color: ", ";\n      }\n\n      &.disabled {\n        ", "\n        background-color: ", ";\n      }\n\n      &.must {\n        ", "\n        background-color: ", ";\n      }\n\n      &.warning {\n        ", "\n        background-color: ", ";\n      }\n\n      &.error {\n        ", "\n        background-color: ", ";\n      }\n    "])), theme.size.pxToRem(20), theme.size.pxToRem(theme.size.space.XXS), theme.size.pxToRem(theme.size.font.SHORT), theme.size.pxToRem(20), BorderStyle, theme.palette.BORDER, theme.palette.TEXT_GREY, BorderStyle, theme.palette.MAIN, theme.palette.MAIN, BorderStyle, theme.palette.WARNING, theme.palette.WARNING, BorderStyle, theme.palette.DANGER, theme.palette.DANGER, FillStyle, theme.palette.TEXT_GREY, FillStyle, theme.palette.MAIN, FillStyle, theme.palette.WARNING, FillStyle, theme.palette.DANGER);
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=StatusLabel.js.map