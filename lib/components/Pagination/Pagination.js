"use strict";
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var withTheme_1 = require("../../hocs/withTheme");
var lodash_1 = require("../../libs/lodash");
var PaginationItem_1 = require("./PaginationItem");
var PaginationControllerItem_1 = require("./PaginationControllerItem");
var PaginationComponent = function (_a) {
    var total = _a.total, current = _a.current, onClick = _a.onClick, _b = _a.padding, padding = _b === void 0 ? 4 : _b, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.withoutNumbers, withoutNumbers = _d === void 0 ? false : _d, theme = _a.theme;
    if (total <= 1)
        return null;
    var prevPage = (React.createElement(React.Fragment, null,
        React.createElement("li", { className: "prevDouble" },
            React.createElement(PaginationControllerItem_1.PaginationControllerItem, { onClick: onClick, direction: "prev", targetPage: 1, disabled: current === 1, double: true })),
        React.createElement("li", { className: "prev" },
            React.createElement(PaginationControllerItem_1.PaginationControllerItem, { onClick: onClick, direction: "prev", targetPage: current - 1, disabled: current === 1 }))));
    var pages = !withoutNumbers
        ? __spreadArrays(lodash_1.range(current - padding, current).filter(function (page) { return page >= 1; }), lodash_1.range(current, current + padding + 1).filter(function (page) { return page <= total; })).map(function (page) { return (React.createElement("li", { key: "pagination-" + page },
            React.createElement(PaginationItem_1.PaginationItem, { page: page, currentPage: current, onClick: onClick }))); })
        : null;
    var nextPage = (React.createElement(React.Fragment, null,
        React.createElement("li", { className: "next" },
            React.createElement(PaginationControllerItem_1.PaginationControllerItem, { onClick: onClick, direction: "next", targetPage: current + 1, disabled: current === total })),
        React.createElement("li", { className: "nextDouble" },
            React.createElement(PaginationControllerItem_1.PaginationControllerItem, { onClick: onClick, direction: "next", targetPage: total, disabled: current === total, double: true }))));
    return (React.createElement(Wrapper, { className: className },
        React.createElement(List, { theme: theme, className: withoutNumbers ? 'withoutNumbers' : '' },
            prevPage,
            pages,
            nextPage)));
};
exports.Pagination = withTheme_1.withTheme(PaginationComponent);
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n"], ["\n  display: inline-block;\n"])));
var List = styled_components_1.default.ul(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    var size = theme.size;
    return styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      display: flex;\n      margin: 0;\n      padding: 0;\n      > li {\n        list-style: none;\n        margin-left: ", ";\n        &.prev {\n          margin-right: ", ";\n          + li {\n            margin-left: 0;\n          }\n        }\n        &.next {\n          margin-left: ", ";\n        }\n        &.prevDouble {\n          margin-left: 0;\n        }\n      }\n      &.withoutNumbers {\n        > li {\n          &.prev {\n            margin-left: ", ";\n            margin-right: 0;\n          }\n          &.next {\n            margin-left: ", ";\n          }\n          &.nextDouble {\n            margin-left: ", ";\n          }\n        }\n      }\n    "], ["\n      display: flex;\n      margin: 0;\n      padding: 0;\n      > li {\n        list-style: none;\n        margin-left: ", ";\n        &.prev {\n          margin-right: ", ";\n          + li {\n            margin-left: 0;\n          }\n        }\n        &.next {\n          margin-left: ", ";\n        }\n        &.prevDouble {\n          margin-left: 0;\n        }\n      }\n      &.withoutNumbers {\n        > li {\n          &.prev {\n            margin-left: ", ";\n            margin-right: 0;\n          }\n          &.next {\n            margin-left: ", ";\n          }\n          &.nextDouble {\n            margin-left: ", ";\n          }\n        }\n      }\n    "])), size.pxToRem(size.space.XXS), size.pxToRem(size.space.XS), size.pxToRem(size.space.XS), size.pxToRem(size.space.XS), size.pxToRem(size.space.XXS), size.pxToRem(size.space.XS));
});
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=Pagination.js.map