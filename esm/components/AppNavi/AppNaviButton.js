var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
import { Icon } from '../Icon/Icon';
var AppNaviButtonComponent = function (_a) {
    var theme = _a.theme, props = __rest(_a, ["theme"]);
    return (React.createElement(Wrapper, { theme: theme }, props.current ? (React.createElement(CurrentWrapper, { theme: theme, "aria-selected": "true" },
        props.icon && (React.createElement(IconWrapper, { theme: theme },
            React.createElement(Icon, { name: props.icon, size: 14, color: theme.palette.TEXT_BLACK }))),
        props.children)) : (React.createElement(ButtonWrapper, { theme: theme, onClick: props.onClick },
        props.icon && (React.createElement(IconWrapper, { theme: theme },
            React.createElement(Icon, { name: props.icon, size: 14, color: theme.palette.TEXT_GREY }))),
        props.children))));
};
export var AppNaviButton = withTheme(AppNaviButtonComponent);
var Wrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      display: inline-block;\n      margin-right: ", ";\n    "], ["\n      display: inline-block;\n      margin-right: ", ";\n    "])), theme.size.pxToRem(4));
});
var BaseStyle = css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      display: flex;\n      align-items: center;\n      box-sizing: border-box;\n      height: ", ";\n      padding: 0 ", ";\n      background: none;\n      border: none;\n      font-size: ", ";\n      font-weight: bold;\n      text-decoration: none;\n    "], ["\n      display: flex;\n      align-items: center;\n      box-sizing: border-box;\n      height: ", ";\n      padding: 0 ", ";\n      background: none;\n      border: none;\n      font-size: ", ";\n      font-weight: bold;\n      text-decoration: none;\n    "])), theme.size.pxToRem(40), theme.size.pxToRem(theme.size.space.XXS), theme.size.pxToRem(theme.size.font.TALL));
});
var CurrentWrapper = styled.span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      ", "\n      border-bottom: ", " solid ", ";\n      color: ", ";\n    "], ["\n      ", "\n      border-bottom: ", " solid ", ";\n      color: ", ";\n    "])), BaseStyle, theme.size.pxToRem(3), theme.palette.MAIN, theme.palette.TEXT_BLACK);
});
var ButtonWrapper = styled.button(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      ", "\n      color: ", ";\n      cursor: pointer;\n      transition: background-color 0.3s;\n\n      &:hover{\n        background-color: ", ";\n      }\n    "], ["\n      ", "\n      color: ", ";\n      cursor: pointer;\n      transition: background-color 0.3s;\n\n      &:hover{\n        background-color: ", ";\n      }\n    "])), BaseStyle, theme.palette.TEXT_GREY, theme.palette.hoverColor('#fff'));
});
var IconWrapper = styled.figure(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n      display: inline-block;\n      padding: 0;\n      margin: 0 ", " 0 0;\n    "], ["\n      display: inline-block;\n      padding: 0;\n      margin: 0 ", " 0 0;\n    "])), theme.size.pxToRem(theme.size.space.XXS));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
//# sourceMappingURL=AppNaviButton.js.map