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
import * as React from 'react';
import styled, { css } from 'styled-components';
import { withTheme } from '../../hocs/withTheme';
import { hoverable } from '../../hocs/hoverable';
import { isTouchDevice } from '../../libs/ua';
var buttonFactory = function (tag) { return function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'primary' : _b, _c = _a.size, size = _c === void 0 ? 'm' : _c, _d = _a.full, full = _d === void 0 ? false : _d, _e = _a.className, className = _e === void 0 ? '' : _e, props = __rest(_a, ["type", "size", "full", "className"]);
    var Tag = hoverable()(Base.withComponent(tag));
    var classNames = type + " " + size + " " + (full ? 'full' : '') + " " + className;
    return React.createElement(Tag, __assign({ className: classNames }, props));
}; };
var ButtonComponent = buttonFactory('button');
var ButtonAnchorComponent = buttonFactory('a');
var ButtonDivComponent = buttonFactory('div');
export var Button = withTheme(ButtonComponent);
export var ButtonAnchor = withTheme(ButtonAnchorComponent);
export var ButtonDiv = withTheme(ButtonDivComponent);
var Base = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    var palette = theme.palette, frame = theme.frame, size = theme.size, interaction = theme.interaction;
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      display: inline-block;\n      width: ", ";\n      border: none;\n      border-radius: ", ";\n      color: #fff;\n      font-size: ", "px;\n      font-weight: bold;\n      text-align: center;\n      text-decoration: none;\n      box-sizing: border-box;\n      cursor: pointer;\n      transition: ", ";\n\n      &.s {\n        min-width: 80px;\n        height: 32px;\n        padding: 0 ", "px;\n        line-height: 32px;\n      }\n      &.m {\n        min-width: 180px;\n        height: 40px;\n        padding: 0 ", "px;\n        line-height: 40px;\n      }\n      &.l {\n        min-width: 220px;\n        height: 48px;\n        padding: 0 ", "px;\n        line-height: 48px;\n      }\n\n      &.full {\n        width: 100%;\n      }\n\n      &.primary {\n        background-color: ", ";\n      }\n      &.danger {\n        background-color: ", ";\n      }\n      &.sub-a {\n        background-color: #5e718d;\n      }\n      &.sub-b {\n        border: 1px solid ", ";\n        background-color: #fff;\n        color: ", ";\n      }\n      &.sub-c {\n        border: 1px solid #fff;\n        background-color: transparent;\n        color: #fff;\n      }\n\n      &.hover {\n        &.primary {\n          background-color: ", ";\n        }\n        &.danger {\n          background-color: ", ";\n        }\n        &.sub-a {\n          background-color: #414e62;\n        }\n        &.sub-b {\n          background-color: ", ";\n        }\n        &.sub-c {\n          background-color: #fff;\n          color: ", ";\n        }\n      }\n\n      &[disabled] {\n        background-color: ", ";\n        color: ", ";\n        pointer-events: none;\n      }\n    "], ["\n      display: inline-block;\n      width: ", ";\n      border: none;\n      border-radius: ", ";\n      color: #fff;\n      font-size: ", "px;\n      font-weight: bold;\n      text-align: center;\n      text-decoration: none;\n      box-sizing: border-box;\n      cursor: pointer;\n      transition: ", ";\n\n      &.s {\n        min-width: 80px;\n        height: 32px;\n        padding: 0 ", "px;\n        line-height: 32px;\n      }\n      &.m {\n        min-width: 180px;\n        height: 40px;\n        padding: 0 ", "px;\n        line-height: 40px;\n      }\n      &.l {\n        min-width: 220px;\n        height: 48px;\n        padding: 0 ", "px;\n        line-height: 48px;\n      }\n\n      &.full {\n        width: 100%;\n      }\n\n      &.primary {\n        background-color: ", ";\n      }\n      &.danger {\n        background-color: ", ";\n      }\n      &.sub-a {\n        background-color: #5e718d;\n      }\n      &.sub-b {\n        border: 1px solid ", ";\n        background-color: #fff;\n        color: ", ";\n      }\n      &.sub-c {\n        border: 1px solid #fff;\n        background-color: transparent;\n        color: #fff;\n      }\n\n      &.hover {\n        &.primary {\n          background-color: ", ";\n        }\n        &.danger {\n          background-color: ", ";\n        }\n        &.sub-a {\n          background-color: #414e62;\n        }\n        &.sub-b {\n          background-color: ", ";\n        }\n        &.sub-c {\n          background-color: #fff;\n          color: ", ";\n        }\n      }\n\n      &[disabled] {\n        background-color: ", ";\n        color: ", ";\n        pointer-events: none;\n      }\n    "])), function (_a) {
        var wide = _a.wide;
        return (wide ? '100%;' : 'auto');
    }, frame.border.radius.m, size.font.TALL, isTouchDevice ? 'none' : "all " + interaction.hover.animation, size.space.XXS, size.space.XS, size.space.S, palette.MAIN, palette.DANGER, palette.BORDER, palette.TEXT_GREY, palette.hoverColor(palette.MAIN), palette.hoverColor(palette.DANGER), palette.hoverColor('#fff'), palette.MAIN, palette.BORDER, palette.TEXT_GREY);
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=Button.js.map