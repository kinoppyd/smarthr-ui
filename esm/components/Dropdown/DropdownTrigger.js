import React, { useContext } from 'react';
import { DropdownContext } from './Dropdown';
export var DropdownTrigger = function (_a) {
    var children = _a.children;
    var _b = useContext(DropdownContext), key = _b.key, active = _b.active, onClickTrigger = _b.onClickTrigger;
    return (React.createElement("div", { onClick: function (e) {
            var rect = e.currentTarget.getBoundingClientRect();
            onClickTrigger({
                top: rect.top,
                right: rect.right,
                bottom: rect.bottom,
                left: rect.left,
            });
        }, className: "dropdown-trigger-" + key }, React.Children.map(children, function (child) {
        var props = child.props ? child.props : {};
        var _a = props.className, className = _a === void 0 ? '' : _a;
        switch (typeof child) {
            case 'string':
                return child;
            case 'object':
                return React.cloneElement(child, {
                    className: (active ? 'active' : '') + " " + className,
                });
            default:
                return null;
        }
    })));
};
//# sourceMappingURL=DropdownTrigger.js.map