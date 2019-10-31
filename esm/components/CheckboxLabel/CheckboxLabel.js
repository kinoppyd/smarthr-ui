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
import { CheckBox } from '../CheckBox';
var CheckBoxLabelComponent = function (_a) {
    var label = _a.label, theme = _a.theme, _b = _a.className, className = _b === void 0 ? '' : _b, props = __rest(_a, ["label", "theme", "className"]);
    return (React.createElement(Wrapper, { className: className },
        React.createElement(Label, { className: "" + (props.disabled ? 'disabled' : '') },
            React.createElement(CheckBox, __assign({}, props)),
            React.createElement(Txt, { theme: theme }, label))));
};
export var CheckBoxLabel = withTheme(CheckBoxLabelComponent);
var Wrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n"], ["\n  display: inline-block;\n"])));
var Label = styled.label(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n\n  &.disabled {\n    cursor: default;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n\n  &.disabled {\n    cursor: default;\n  }\n"])));
var Txt = styled.p(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    margin: 0 0 0 ", ";\n    font-size: ", ";\n    color: ", ";\n  "], ["\n    margin: 0 0 0 ", ";\n    font-size: ", ";\n    color: ", ";\n  "])), theme.size.pxToRem(theme.size.space.XXS), theme.size.pxToRem(theme.size.font.TALL), theme.palette.TEXT_BLACK);
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=CheckBoxLabel.js.map