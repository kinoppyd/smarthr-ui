var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from 'react';
import styled, { css } from 'styled-components';
import { withTheme } from '../../hocs/withTheme';
import { Heading } from '../Heading/Heading';
var HeadlineAreaComponent = function (_a) {
    var heading = _a.heading, description = _a.description, _b = _a.className, className = _b === void 0 ? '' : _b, theme = _a.theme;
    return (React.createElement(Wrapper, { theme: theme, className: className },
        React.createElement(Heading, { type: "screenTitle", tag: heading.tag ? heading.tag : 'h1' }, heading.children),
        description && React.createElement(Description, { theme: theme }, description)));
};
export var HeadlineArea = withTheme(HeadlineAreaComponent);
var Wrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: block;\n  margin: 0;\n  padding: 0;\n"], ["\n  display: block;\n  margin: 0;\n  padding: 0;\n"])));
var Description = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      margin-top: ", ";\n      color: ", ";\n      font-size: ", ";\n      line-height: 1.5;\n    "], ["\n      margin-top: ", ";\n      color: ", ";\n      font-size: ", ";\n      line-height: 1.5;\n    "])), theme.size.pxToRem(theme.size.space.XS), theme.palette.TEXT_BLACK, theme.size.pxToRem(theme.size.font.TALL));
});
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=HeadlineArea.js.map