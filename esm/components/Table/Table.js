var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from 'react';
import styled from 'styled-components';
import { withTheme } from '../../hocs/withTheme';
export var TableGroupContext = React.createContext({
    group: 'body',
});
var TableComponent = function (_a) {
    var theme = _a.theme, children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b;
    return (React.createElement(Wrapper, { theme: theme, className: className }, children));
};
export var Table = withTheme(TableComponent);
var Wrapper = styled.table(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n\n  & > thead > tr > th {\n    background-color: ", ";\n  }\n"], ["\n  ",
    "\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n\n  & > thead > tr > th {\n    background-color: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return "\n    background-color: " + theme.palette.COLUMN + ";\n  ";
}, function (_a) {
    var theme = _a.theme;
    return theme.palette.COLUMN;
});
var templateObject_1;
//# sourceMappingURL=Table.js.map