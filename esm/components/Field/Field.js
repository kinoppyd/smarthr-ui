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
import { Input } from '../Input';
import { StatusLabel } from '../StatusLabel';
var FieldComponent = function (_a) {
    var label = _a.label, errorMessage = _a.errorMessage, helpMessage = _a.helpMessage, _b = _a.className, className = _b === void 0 ? '' : _b, theme = _a.theme, children = _a.children, props = __rest(_a, ["label", "errorMessage", "helpMessage", "className", "theme", "children"]);
    return (React.createElement(Wrapper, { width: props.width || 'auto', className: className },
        React.createElement(LabelHead, { theme: theme },
            React.createElement(Title, { theme: theme },
                label,
                props.required && (React.createElement(StatusLabelWrapper, { theme: theme },
                    React.createElement(StatusLabel, { type: "required" }, "\u5FC5\u9808")))),
            helpMessage && React.createElement(Help, { theme: theme }, helpMessage)),
        children ? children : React.createElement(Input, __assign({}, props, { error: !!errorMessage })),
        errorMessage && React.createElement(Error, { theme: theme }, errorMessage)));
};
export var Field = withTheme(FieldComponent);
var Wrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var width = _a.width;
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: inline-block;\n    width: ", ";\n  "], ["\n    display: inline-block;\n    width: ", ";\n  "])), typeof width === 'number' ? width + "px" : width);
});
var LabelHead = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: ", ";\n    line-height: 1.4;\n  "], ["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: ", ";\n    line-height: 1.4;\n  "])), theme.size.pxToRem(theme.size.space.XXS));
});
var Title = styled.p(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    margin: 0;\n    color: ", ";\n    font-weight: bold;\n    font-size: ", ";\n  "], ["\n    margin: 0;\n    color: ", ";\n    font-weight: bold;\n    font-size: ", ";\n  "])), theme.palette.TEXT_GREY, theme.size.pxToRem(theme.size.font.TALL));
});
var Help = styled.p(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    margin: 0;\n    font-size: ", ";\n    color: ", ";\n  "], ["\n    margin: 0;\n    font-size: ", ";\n    color: ", ";\n  "])), theme.size.pxToRem(theme.size.font.SHORT), theme.palette.TEXT_GREY);
});
var Error = styled.p(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    margin: ", " 0 0 0;\n    font-size: ", ";\n    color: ", ";\n    line-height: 1.4;\n  "], ["\n    margin: ", " 0 0 0;\n    font-size: ", ";\n    color: ", ";\n    line-height: 1.4;\n  "])), theme.size.pxToRem(theme.size.space.XXS), theme.size.pxToRem(theme.size.font.TALL), theme.palette.DANGER);
});
var StatusLabelWrapper = styled.span(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n    margin-left: ", ";\n  "], ["\n    margin-left: ", ";\n  "])), theme.size.pxToRem(theme.size.space.XXS));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;
//# sourceMappingURL=Field.js.map