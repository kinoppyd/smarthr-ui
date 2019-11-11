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
var AppBarComponent = function (_a) {
    var props = __rest(_a, []);
    return React.createElement(Wrapper, __assign({}, props));
};
export var AppBar = withTheme(AppBarComponent);
var getSpaceSize = function (size) {
    var spaceMap = {
        s: 'XS',
        m: 'S',
        l: 'M',
    };
    return spaceMap[size];
};
var Wrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var _b = _a.spSize, spSize = _b === void 0 ? 'm' : _b, _c = _a.pcSize, pcSize = _c === void 0 ? 'm' : _c, _d = _a.tabletSize, tabletSize = _d === void 0 ? 'm' : _d, theme = _a.theme;
    var size = theme.size, palette = theme.palette;
    var _e = [pcSize, tabletSize, spSize]
        .map(getSpaceSize)
        .map(function (spaceSize) { return "0 " + size.pxToRem(size.space[spaceSize]); }), pcPadding = _e[0], tabletPadding = _e[1], spPadding = _e[2];
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      padding: ", ";\n      background: ", ";\n\n      @media screen and (max-width: ", "px) {\n        padding: ", ";\n      }\n\n      @media screen and (max-width: ", "px) {\n        padding: ", ";\n      }\n    "], ["\n      padding: ", ";\n      background: ", ";\n\n      @media screen and (max-width: ", "px) {\n        padding: ", ";\n      }\n\n      @media screen and (max-width: ", "px) {\n        padding: ", ";\n      }\n    "])), pcPadding, palette.MAIN, size.mediaQuery.TABLET, tabletPadding, size.mediaQuery.SP, spPadding);
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=AppBar.js.map