var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import * as React from 'react';
import styled, { css } from 'styled-components';
import { withTheme } from '../../hocs/withTheme';
import { range } from '../../libs/lodash';
import { NextPaginationItem } from './NextPaginationItem';
import { PaginationItem } from './PaginationItem';
import { PrevPaginationItem } from './PrevPaginationItem';
var PaginationComponent = function (_a) {
    var total = _a.total, current = _a.current, onClick = _a.onClick, _b = _a.padding, padding = _b === void 0 ? 4 : _b, _c = _a.className, className = _c === void 0 ? '' : _c, theme = _a.theme;
    if (total <= 1)
        return null;
    var prevPage = current >= 2 && (React.createElement("li", null,
        React.createElement(PrevPaginationItem, { onClick: onClick, prevPage: current - 1 })));
    var pages = __spreadArrays(range(current - padding, current).filter(function (page) { return page >= 1; }), range(current, current + padding + 1).filter(function (page) { return page <= total; })).map(function (page) { return (React.createElement("li", { key: "pagination-" + page },
        React.createElement(PaginationItem, { page: page, currentPage: current, onClick: onClick }))); });
    var nextPage = current + 1 <= total && (React.createElement("li", null,
        React.createElement(NextPaginationItem, { onClick: onClick, nextPage: current + 1 })));
    return (React.createElement(Wrapper, { className: className },
        React.createElement(List, { theme: theme },
            prevPage,
            pages,
            nextPage)));
};
export var Pagination = withTheme(PaginationComponent);
var Wrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n"], ["\n  display: inline-block;\n"])));
var List = styled.ul(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    var frame = theme.frame, palette = theme.palette;
    return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      display: flex;\n      border-radius: ", ";\n      border: 1px solid ", ";\n      margin: 0;\n      padding: 0;\n\n      & > li {\n        margin: 0;\n        padding: 0;\n        list-style: none;\n\n        &:not(:first-child) {\n          border-left: ", ";\n        }\n\n        &:first-child > .PaginationItem {\n          border-top-left-radius: ", ";\n          border-bottom-left-radius: ", ";\n        }\n\n        &:last-child > .PaginationItem {\n          border-top-right-radius: ", ";\n          border-bottom-right-radius: ", ";\n        }\n      }\n    "], ["\n      display: flex;\n      border-radius: ", ";\n      border: 1px solid ", ";\n      margin: 0;\n      padding: 0;\n\n      & > li {\n        margin: 0;\n        padding: 0;\n        list-style: none;\n\n        &:not(:first-child) {\n          border-left: ", ";\n        }\n\n        &:first-child > .PaginationItem {\n          border-top-left-radius: ", ";\n          border-bottom-left-radius: ", ";\n        }\n\n        &:last-child > .PaginationItem {\n          border-top-right-radius: ", ";\n          border-bottom-right-radius: ", ";\n        }\n      }\n    "])), frame.border.radius.s, palette.BORDER, frame.border.default, frame.border.radius.s, frame.border.radius.s, frame.border.radius.s, frame.border.radius.s);
});
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=Pagination.js.map