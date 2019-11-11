var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from 'react';
import styled, { css } from 'styled-components';
import { withTheme } from '../../hocs/withTheme';
var TabBarComponent = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.bordered, bordered = _c === void 0 ? true : _c, theme = _a.theme, children = _a.children;
    var classNames = className + " " + (bordered ? 'bordered' : '');
    return (React.createElement(Wrapper, { role: "tablist", className: classNames, theme: theme }, children));
};
export var TabBar = withTheme(TabBarComponent);
var Wrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    var frame = theme.frame;
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      display: flex;\n      background-color: #fff;\n\n      &.bordered {\n        position: relative;\n\n        :after {\n          position: absolute;\n          bottom: 0px;\n          width: 100%;\n          border-bottom: ", ";\n          content: '';\n        }\n\n        > button {\n          &.selected {\n            position: relative;\n            z-index: 1;\n          }\n        }\n      }\n    "], ["\n      display: flex;\n      background-color: #fff;\n\n      &.bordered {\n        position: relative;\n\n        :after {\n          position: absolute;\n          bottom: 0px;\n          width: 100%;\n          border-bottom: ", ";\n          content: '';\n        }\n\n        > button {\n          &.selected {\n            position: relative;\n            z-index: 1;\n          }\n        }\n      }\n    "])), frame.border.default);
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=TabBar.js.map