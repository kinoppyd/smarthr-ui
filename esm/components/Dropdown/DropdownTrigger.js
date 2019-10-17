var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { useContext } from 'react';
import styled from 'styled-components';
import { DropdownContext } from './Dropdown';
export var DropdownTrigger = function (_a) {
    var children = _a.children;
    var _b = useContext(DropdownContext), key = _b.key, active = _b.active, onClickTrigger = _b.onClickTrigger;
    return (React.createElement(Wrapper, { className: "dropdown-trigger-" + key, onClick: function (e) {
            var rect = e.currentTarget.getBoundingClientRect();
            onClickTrigger({
                top: rect.top,
                right: rect.right,
                bottom: rect.bottom,
                left: rect.left,
            });
        } }, React.Children.map(children, function (child) {
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
var Wrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n"], ["\n  display: inline-block;\n"])));
var templateObject_1;
//# sourceMappingURL=DropdownTrigger.js.map