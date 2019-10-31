var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from 'react';
import styled, { css } from 'styled-components';
import { withTheme } from '../../hocs/withTheme';
import { TableGroupContext } from './Table';
import { isTouchDevice } from '../../libs/ua';
var CellComponent = function (_a) {
    var theme = _a.theme, _b = _a.className, className = _b === void 0 ? '' : _b, children = _a.children, onClick = _a.onClick, colspan = _a.colspan, rowspan = _a.rowspan, _c = _a.highlighted, highlighted = _c === void 0 ? false : _c;
    var group = React.useContext(TableGroupContext).group;
    var WrapComponent = (function (tableGroup) {
        switch (tableGroup) {
            case 'body':
                return Td;
            case 'head':
                return Th;
        }
    })(group);
    var classNames = className + " " + (highlighted ? 'highlighted' : '');
    return (React.createElement(WrapComponent, { onClick: onClick, className: classNames, theme: theme, colSpan: colspan, rowSpan: rowspan, highlighted: highlighted }, children));
};
var Th = styled.th(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (props) {
    var theme = props.theme;
    var size = theme.size, palette = theme.palette, interaction = theme.interaction;
    return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      font-size: ", "\n      font-weight: bold;\n      padding: ", ";\n      color: ", ";\n      transition: ", "\n      text-align: left;\n      line-height: 1.5;\n      vertical-align: middle;\n\n      &.highlighted {\n        background-color: ", ";\n      }\n\n      ", "\n    "], ["\n      font-size: ", "\n      font-weight: bold;\n      padding: ", ";\n      color: ", ";\n      transition: ", "\n      text-align: left;\n      line-height: 1.5;\n      vertical-align: middle;\n\n      &.highlighted {\n        background-color: ", ";\n      }\n\n      ",
        "\n    "])), size.pxToRem(size.font.SHORT), size.pxToRem(size.space.XS), palette.TEXT_GREY, isTouchDevice ? 'none' : "background-color " + interaction.hover.animation, palette.hoverColor(palette.COLUMN), props.onClick && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          :hover {\n            background-color: ", ";\n            cursor: pointer;\n          }\n        "], ["\n          :hover {\n            background-color: ", ";\n            cursor: pointer;\n          }\n        "])), palette.hoverColor(palette.COLUMN)));
});
var Td = styled.td(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ",
    ";\n"])), function (_a) {
    var theme = _a.theme;
    var size = theme.size, palette = theme.palette, frame = theme.frame;
    return css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      color: ", ";\n      padding: ", ";\n      border-top: ", ";\n      font-size: ", ";\n      line-height: 1.5;\n      vertical-align: middle;\n    "], ["\n      color: ", ";\n      padding: ", ";\n      border-top: ", ";\n      font-size: ", ";\n      line-height: 1.5;\n      vertical-align: middle;\n    "])), palette.TEXT_BLACK, size.pxToRem(size.space.XS), frame.border.default, size.pxToRem(size.font.TALL));
});
export var Cell = withTheme(CellComponent);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=Cell.js.map