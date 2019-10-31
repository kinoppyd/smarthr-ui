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
var React = __importStar(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var withTheme_1 = require("../../hocs/withTheme");
var balloonFactory = function (theme) { return function (_a) {
    var horizontal = _a.horizontal, vertical = _a.vertical, _b = _a.className, className = _b === void 0 ? '' : _b, props = __rest(_a, ["horizontal", "vertical", "className"]);
    if (horizontal === 'center' && vertical === 'middle') {
        throw new Error('"vertical" can not be specified as "middle" when "horizontal" is "center".');
    }
    var classNames = theme + " " + horizontal + " " + vertical + " " + className;
    return React.createElement(Base, __assign({ className: classNames }, props));
}; };
exports.LightBalloon = withTheme_1.withTheme(balloonFactory('light'));
exports.DarkBalloon = withTheme_1.withTheme(balloonFactory('dark'));
var Base = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    var palette = theme.palette, frame = theme.frame, size = theme.size;
    return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      position: relative;\n      display: inline-block;\n      font-size: ", ";\n      border-radius: 4px;\n      box-shadow: 0 2px 8px 0 rgba(51, 51, 51, 0.35);\n      white-space: nowrap;\n\n      &::before,\n      &::after {\n        display: block;\n        position: absolute;\n        border-style: ", ";\n        content: '';\n      }\n\n      &.light {\n        background-color: #fff;\n        color: ", ";\n      }\n      &.dark {\n        background-color: ", ";\n        color: #fff;\n      }\n\n      &.light.top {\n        &::before {\n          border-color: transparent transparent ", ";\n        }\n        &::after {\n          border-color: transparent transparent #fff;\n        }\n      }\n      &.light.bottom {\n        &::before {\n          border-color: ", " transparent transparent;\n        }\n        &::after {\n          border-color: #fff transparent transparent;\n        }\n      }\n\n      &.dark.top {\n        &::before,\n        &::after {\n          border-color: transparent transparent ", ";\n        }\n      }\n      &.dark.bottom {\n        &::before,\n        &::after {\n          border-color: ", " transparent transparent;\n        }\n      }\n\n      &.top {\n        &::before,\n        &::after {\n          border-width: 0 8px 8px;\n        }\n        &::before {\n          top: -8px;\n        }\n        &::after {\n          top: -7px;\n        }\n      }\n      &.bottom {\n        &::before,\n        &::after {\n          border-width: 8px 8px 0;\n        }\n        &::before {\n          bottom: -8px;\n        }\n        &::after {\n          bottom: -7px;\n        }\n      }\n\n      &.right {\n        &::before,\n        &::after {\n          right: 24px;\n        }\n      }\n      &.center {\n        &::before,\n        &::after {\n          left: 50%;\n          transform: translateX(-8px);\n        }\n      }\n      &.left {\n        &::before,\n        &::after {\n          left: 24px;\n        }\n      }\n\n      &.middle {\n        &::before,\n        &::after {\n          top: 50%;\n          transform: translateY(-8px);\n        }\n        &.left {\n          &::before,\n          &::after {\n            border-width: 8px 8px 8px 0;\n          }\n          &::before {\n            left: -8px;\n          }\n          &::after {\n            left: -7px;\n          }\n          &.light {\n            &::before {\n              border-color: transparent ", " transparent transparent;\n            }\n            &::after {\n              border-color: transparent #fff transparent transparent;\n            }\n          }\n          &.dark {\n            &::before,\n            &::after {\n              border-color: transparent ", " transparent transparent;\n            }\n          }\n        }\n        &.right {\n          &::before,\n          &::after {\n            border-width: 8px 0 8px 8px;\n          }\n          &::before {\n            right: -8px;\n          }\n          &::after {\n            right: -7px;\n          }\n          &.light {\n            &::before {\n              border-color: transparent transparent transparent ", ";\n            }\n            &::after {\n              border-color: transparent transparent transparent #fff;\n            }\n          }\n          &.dark {\n            &::before,\n            &::after {\n              border-color: transparent transparent transparent ", ";\n            }\n          }\n        }\n      }\n    "], ["\n      position: relative;\n      display: inline-block;\n      font-size: ", ";\n      border-radius: 4px;\n      box-shadow: 0 2px 8px 0 rgba(51, 51, 51, 0.35);\n      white-space: nowrap;\n\n      &::before,\n      &::after {\n        display: block;\n        position: absolute;\n        border-style: ", ";\n        content: '';\n      }\n\n      &.light {\n        background-color: #fff;\n        color: ", ";\n      }\n      &.dark {\n        background-color: ", ";\n        color: #fff;\n      }\n\n      &.light.top {\n        &::before {\n          border-color: transparent transparent ", ";\n        }\n        &::after {\n          border-color: transparent transparent #fff;\n        }\n      }\n      &.light.bottom {\n        &::before {\n          border-color: ", " transparent transparent;\n        }\n        &::after {\n          border-color: #fff transparent transparent;\n        }\n      }\n\n      &.dark.top {\n        &::before,\n        &::after {\n          border-color: transparent transparent ", ";\n        }\n      }\n      &.dark.bottom {\n        &::before,\n        &::after {\n          border-color: ", " transparent transparent;\n        }\n      }\n\n      &.top {\n        &::before,\n        &::after {\n          border-width: 0 8px 8px;\n        }\n        &::before {\n          top: -8px;\n        }\n        &::after {\n          top: -7px;\n        }\n      }\n      &.bottom {\n        &::before,\n        &::after {\n          border-width: 8px 8px 0;\n        }\n        &::before {\n          bottom: -8px;\n        }\n        &::after {\n          bottom: -7px;\n        }\n      }\n\n      &.right {\n        &::before,\n        &::after {\n          right: 24px;\n        }\n      }\n      &.center {\n        &::before,\n        &::after {\n          left: 50%;\n          transform: translateX(-8px);\n        }\n      }\n      &.left {\n        &::before,\n        &::after {\n          left: 24px;\n        }\n      }\n\n      &.middle {\n        &::before,\n        &::after {\n          top: 50%;\n          transform: translateY(-8px);\n        }\n        &.left {\n          &::before,\n          &::after {\n            border-width: 8px 8px 8px 0;\n          }\n          &::before {\n            left: -8px;\n          }\n          &::after {\n            left: -7px;\n          }\n          &.light {\n            &::before {\n              border-color: transparent ", " transparent transparent;\n            }\n            &::after {\n              border-color: transparent #fff transparent transparent;\n            }\n          }\n          &.dark {\n            &::before,\n            &::after {\n              border-color: transparent ", " transparent transparent;\n            }\n          }\n        }\n        &.right {\n          &::before,\n          &::after {\n            border-width: 8px 0 8px 8px;\n          }\n          &::before {\n            right: -8px;\n          }\n          &::after {\n            right: -7px;\n          }\n          &.light {\n            &::before {\n              border-color: transparent transparent transparent ", ";\n            }\n            &::after {\n              border-color: transparent transparent transparent #fff;\n            }\n          }\n          &.dark {\n            &::before,\n            &::after {\n              border-color: transparent transparent transparent ", ";\n            }\n          }\n        }\n      }\n    "])), size.pxToRem(size.font.SHORT), frame.border.lineStyle, palette.TEXT_BLACK, palette.TEXT_BLACK, palette.BORDER, palette.BORDER, palette.TEXT_BLACK, palette.TEXT_BLACK, palette.BORDER, palette.TEXT_BLACK, palette.BORDER, palette.TEXT_BLACK);
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=Balloon.js.map