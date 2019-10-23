"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var Dropdown_1 = require("./Dropdown");
exports.DropdownTrigger = function (_a) {
    var children = _a.children;
    var _b = react_1.useContext(Dropdown_1.DropdownContext), active = _b.active, onClickTrigger = _b.onClickTrigger;
    return (react_1.default.createElement(Wrapper, { onClick: function (e) {
            var rect = e.currentTarget.getBoundingClientRect();
            onClickTrigger({
                top: rect.top,
                right: rect.right,
                bottom: rect.bottom,
                left: rect.left,
            });
        } }, react_1.default.Children.map(children, function (child) {
        var props = child.props ? child.props : {};
        var _a = props.className, className = _a === void 0 ? '' : _a;
        switch (typeof child) {
            case 'string':
                return child;
            case 'object':
                return react_1.default.cloneElement(child, {
                    className: (active ? 'active' : '') + " " + className,
                });
            default:
                return null;
        }
    })));
};
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n"], ["\n  display: inline-block;\n"])));
var templateObject_1;
//# sourceMappingURL=DropdownTrigger.js.map