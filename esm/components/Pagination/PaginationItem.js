var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from 'react';
import styled, { css } from 'styled-components';
import { withTheme } from '../../hocs/withTheme';
import { SecondaryButton } from '../Button';
var PaginationItemComponent = /** @class */ (function (_super) {
    __extends(PaginationItemComponent, _super);
    function PaginationItemComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onClick = function () {
            var _a = _this.props, onClick = _a.onClick, page = _a.page;
            onClick(page);
        };
        return _this;
    }
    PaginationItemComponent.prototype.render = function () {
        var _a = this.props, page = _a.page, currentPage = _a.currentPage, theme = _a.theme;
        if (page === currentPage) {
            return (React.createElement(ItemButton, { square: true, size: "s", className: "paginationItem active", theme: theme, disabled: true }, page));
        }
        return (React.createElement(ItemButton, { square: true, size: "s", className: "paginationItem", onClick: this.onClick, theme: theme }, page));
    };
    return PaginationItemComponent;
}(React.PureComponent));
export var PaginationItem = withTheme(PaginationItemComponent);
export var ItemButton = styled(SecondaryButton)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    var palette = theme.palette;
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      &.paginationItem.s.square {\n        line-height: 25px;\n        border-radius: 4px;\n        &.active {\n          color: #fff;\n          background-color: ", ";\n          border: solid 1px ", ";\n          cursor: default;\n          outline: none;\n        }\n      }\n    "], ["\n      &.paginationItem.s.square {\n        line-height: 25px;\n        border-radius: 4px;\n        &.active {\n          color: #fff;\n          background-color: ", ";\n          border: solid 1px ", ";\n          cursor: default;\n          outline: none;\n        }\n      }\n    "])), palette.MAIN, palette.MAIN);
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=PaginationItem.js.map