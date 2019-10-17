import React, { useContext } from 'react';
import { createPortal } from 'react-dom';
import { DropdownContext } from './Dropdown';
import { DropdownContentInner } from './DropdownContentInner';
export var DropdownContentContext = React.createContext({
    onClickCloser: function () { },
});
function createElement(tagName, className) {
    var element = document.createElement(tagName);
    element.className = className;
    return element;
}
export var DropdownContent = function (_a) {
    var _b = _a.controllable, controllable = _b === void 0 ? false : _b, children = _a.children;
    var _c = useContext(DropdownContext), key = _c.key, active = _c.active, triggerRect = _c.triggerRect, onClickCloser = _c.onClickCloser;
    if (!active)
        return null;
    var contentClassName = "dropdown-content-" + key;
    var element = document.querySelector("." + contentClassName);
    if (!element) {
        element = createElement('div', contentClassName + " " + (controllable ? "dropdown-trigger-" + key : ''));
        document.body.appendChild(element);
    }
    return createPortal(React.createElement(DropdownContentContext.Provider, { value: { onClickCloser: onClickCloser } },
        React.createElement(DropdownContentInner, { triggerRect: triggerRect }, children)), element);
};
//# sourceMappingURL=DropdownContent.js.map