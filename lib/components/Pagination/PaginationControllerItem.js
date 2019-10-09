"use strict";
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var withTheme_1 = require("../../hocs/withTheme");
var PaginationItem_1 = require("./PaginationItem");
var Icon_1 = require("../Icon");
var PaginationControllerItemComponent = /** @class */ (function (_super) {
    __extends(PaginationControllerItemComponent, _super);
    function PaginationControllerItemComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onClick = function () {
            var _a = _this.props, onClick = _a.onClick, targetPage = _a.targetPage;
            onClick(targetPage);
        };
        return _this;
    }
    PaginationControllerItemComponent.prototype.render = function () {
        var _a = this.props, theme = _a.theme, direction = _a.direction, disabled = _a.disabled, double = _a.double;
        return (React.createElement(PaginationItem_1.ItemButton, { square: true, size: "s", className: "paginationItem", onClick: this.onClick, theme: theme, disabled: disabled },
            React.createElement(Icon_1.Icon, { name: direction === 'prev'
                    ? double
                        ? 'fa-angle-double-left'
                        : 'fa-chevron-left'
                    : double
                        ? 'fa-angle-double-right'
                        : 'fa-chevron-right', color: disabled ? theme.palette.TEXT_DISABLED : theme.palette.TEXT_BLACK, size: 13 })));
    };
    return PaginationControllerItemComponent;
}(React.PureComponent));
exports.PaginationControllerItem = withTheme_1.withTheme(PaginationControllerItemComponent);
//# sourceMappingURL=PaginationControllerItem.js.map