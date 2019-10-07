"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Dropdown_1 = require("./Dropdown");
exports.DropdownTrigger = function (_a) {
    var children = _a.children;
    var _b = react_1.useContext(Dropdown_1.DropdownContext), key = _b.key, active = _b.active, onClickTrigger = _b.onClickTrigger;
    return (react_1.default.createElement("div", { onClick: function (e) {
            var rect = e.currentTarget.getBoundingClientRect();
            onClickTrigger({
                top: rect.top,
                right: rect.right,
                bottom: rect.bottom,
                left: rect.left,
            });
        }, className: "dropdown-trigger-" + key }, react_1.default.Children.map(children, function (child) {
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
//# sourceMappingURL=DropdownTrigger.js.map