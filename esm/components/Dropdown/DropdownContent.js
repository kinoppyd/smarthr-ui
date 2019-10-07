import React, { useContext, useEffect } from 'react';
import { render } from 'react-dom';
import { DropdownContext } from './Dropdown';
import { DropdownContentInner } from './DropdownContentInner';
export var DropdownContentContext = React.createContext({
    onClickCloser: function () { },
});
export var toggleContentView = function (className, additionalClassName) { return function (active, triggerRect, children, onClickCloser) { return function () {
    if (active) {
        var element = document.createElement('div');
        var classNames = className;
        if (additionalClassName)
            classNames += " " + additionalClassName;
        element.className = classNames;
        render(React.createElement(DropdownContentContext.Provider, { value: { onClickCloser: onClickCloser } },
            React.createElement(DropdownContentInner, { triggerRect: triggerRect }, children)), document.body.appendChild(element));
    }
    else {
        var element = document.querySelector("." + className);
        if (element)
            document.body.removeChild(element);
    }
}; }; };
export var DropdownContent = function (_a) {
    var children = _a.children;
    var _b = useContext(DropdownContext), key = _b.key, active = _b.active, triggerRect = _b.triggerRect, onClickCloser = _b.onClickCloser;
    useEffect(toggleContentView("dropdown-content-" + key)(active, triggerRect, children, onClickCloser), [active, children, key, onClickCloser]);
    return null;
};
//# sourceMappingURL=DropdownContent.js.map