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
import styled, { css, createGlobalStyle } from 'styled-components';
import { withTheme } from '../../hocs/withTheme';
var BoxComponent = function (_a) {
    var active = _a.active, children = _a.children, onClickBackground = _a.onClickBackground, props = __rest(_a, ["active", "children", "onClickBackground"]);
    return (React.createElement(Wrapper, __assign({ className: active ? 'active' : '' }, props), active ? (React.createElement(React.Fragment, null,
        React.createElement(Background, __assign({}, props, { onClick: onClickBackground })),
        React.createElement(Inner, __assign({}, props), children),
        React.createElement(ScrollSuppressing, null))) : null));
};
export var Box = withTheme(BoxComponent);
function exist(value) {
    return value !== undefined && value !== null;
}
var Wrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  visibility: hidden;\n  opacity: 0;\n  z-index: 10000;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: opacity 0.3s ease-in-out;\n  &.active {\n    visibility: visible;\n    opacity: 1;\n  }\n"], ["\n  visibility: hidden;\n  opacity: 0;\n  z-index: 10000;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: opacity 0.3s ease-in-out;\n  &.active {\n    visibility: visible;\n    opacity: 1;\n  }\n"])));
var Inner = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left;
    var positionRight = exist(right) ? right + "px" : 'auto';
    var positionBottom = exist(bottom) ? bottom + "px" : 'auto';
    var positionTop = exist(top) ? top + "px" : 'auto';
    var positionLeft = exist(left) ? left + "px" : 'auto';
    var translateX = '0';
    var translateY = '0';
    if (top === undefined && bottom === undefined) {
        positionTop = '50%';
        translateY = '-50%';
    }
    if (right === undefined && left === undefined) {
        positionLeft = '50%';
        translateX = '-50%';
    }
    return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      position: absolute;\n      z-index: 10100;\n      top: ", ";\n      right: ", ";\n      bottom: ", ";\n      left: ", ";\n      border-radius: ", ";\n      background-color: #fff;\n      box-shadow: 0 4px 10px 0 rgba(51, 51, 51, 0.3);\n      transform: translate(", ", ", ");\n    "], ["\n      position: absolute;\n      z-index: 10100;\n      top: ", ";\n      right: ", ";\n      bottom: ", ";\n      left: ", ";\n      border-radius: ", ";\n      background-color: #fff;\n      box-shadow: 0 4px 10px 0 rgba(51, 51, 51, 0.3);\n      transform: translate(", ", ", ");\n    "])), positionTop, positionRight, positionBottom, positionLeft, theme.frame.border.radius.l, translateX, translateY);
});
var Background = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background-color: ", ";\n    "], ["\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background-color: ", ";\n    "])), theme.palette.SCRIM);
});
var ScrollSuppressing = createGlobalStyle(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  body {\n    overflow: hidden;\n  }\n"], ["\n  body {\n    overflow: hidden;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=Box.js.map