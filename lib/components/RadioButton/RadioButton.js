"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var withTheme_1 = require("../../hocs/withTheme");
var RadioButtonComponent = function (_a) {
    var _b = _a.themeColor, themeColor = _b === void 0 ? 'light' : _b, _c = _a.className, className = _c === void 0 ? '' : _c, onChange = _a.onChange, theme = _a.theme, props = __rest(_a, ["themeColor", "className", "onChange", "theme"]);
    var checked = props.checked, disabled = props.disabled;
    var boxClassName = (checked ? 'active' : '') + " " + (disabled ? 'disabled' : '') + " " + themeColor;
    var handleChange = react_1.useCallback(function (e) {
        if (onChange)
            onChange(e);
    }, [onChange]);
    return (react_1.default.createElement(Wrapper, { className: className },
        react_1.default.createElement(Input, __assign({ type: "radio", theme: theme, onChange: handleChange }, props)),
        react_1.default.createElement(Box, { className: boxClassName, theme: theme })));
};
exports.RadioButton = withTheme_1.withTheme(RadioButtonComponent);
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  line-height: 1;\n"], ["\n  position: relative;\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  line-height: 1;\n"])));
var Box = styled_components_1.default.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    var frame = theme.frame, palette = theme.palette;
    return styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      display: inline-block;\n      width: 100%;\n      height: 100%;\n      border-radius: 50%;\n      border: ", ";\n      background-color: #fff;\n      box-sizing: border-box;\n\n      &.active {\n        border-color: ", ";\n        background-color: ", ";\n\n        &::before {\n          position: absolute;\n          top: 50%;\n          left: 50%;\n          width: 8px;\n          height: 8px;\n          border-radius: 50%;\n          background-color: #fff;\n          transform: translate(-50%, -50%);\n          content: '';\n          pointer-events: none;\n        }\n      }\n\n      &.disabled {\n        background-color: ", ";\n        border-color: ", ";\n\n        &.active {\n          border-color: ", ";\n\n          &::before {\n            background-color: #fff;\n          }\n        }\n      }\n\n      &.dark {\n        border-color: ", ";\n\n        &.active {\n          background-color: #fff;\n\n          &::before {\n            background-color: ", ";\n          }\n        }\n      }\n    "], ["\n      display: inline-block;\n      width: 100%;\n      height: 100%;\n      border-radius: 50%;\n      border: ", ";\n      background-color: #fff;\n      box-sizing: border-box;\n\n      &.active {\n        border-color: ", ";\n        background-color: ", ";\n\n        &::before {\n          position: absolute;\n          top: 50%;\n          left: 50%;\n          width: 8px;\n          height: 8px;\n          border-radius: 50%;\n          background-color: #fff;\n          transform: translate(-50%, -50%);\n          content: '';\n          pointer-events: none;\n        }\n      }\n\n      &.disabled {\n        background-color: ", ";\n        border-color: ", ";\n\n        &.active {\n          border-color: ", ";\n\n          &::before {\n            background-color: #fff;\n          }\n        }\n      }\n\n      &.dark {\n        border-color: ", ";\n\n        &.active {\n          background-color: #fff;\n\n          &::before {\n            background-color: ", ";\n          }\n        }\n      }\n    "])), frame.border.default, palette.MAIN, palette.MAIN, palette.BORDER, palette.BORDER, palette.BORDER, palette.MAIN, palette.MAIN);
});
var Input = styled_components_1.default.input(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    var palette = theme.palette;
    return styled_components_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      opacity: 0;\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      margin: 0;\n      cursor: pointer;\n\n      &[disabled] {\n        pointer-events: none;\n      }\n\n      &:focus + span {\n        box-shadow: 0 0 0 2px ", ";\n      }\n    "], ["\n      opacity: 0;\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      margin: 0;\n      cursor: pointer;\n\n      &[disabled] {\n        pointer-events: none;\n      }\n\n      &:focus + span {\n        box-shadow: 0 0 0 2px ", ";\n      }\n    "])), palette.OUTLINE);
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=RadioButton.js.map