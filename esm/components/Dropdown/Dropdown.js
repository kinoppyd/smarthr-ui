import React, { useState, useEffect, useRef } from 'react';
import { hasParentElement } from './dropdownHelper';
import { createPortal } from 'react-dom';
var initialRect = { top: 0, right: 0, bottom: 0, left: 0 };
export var DropdownContext = React.createContext({
    active: false,
    triggerRect: initialRect,
    onClickTrigger: function () { },
    onClickCloser: function () { },
    DropdownContentRoot: function () { return null; },
});
export var Dropdown = function (_a) {
    var children = _a.children;
    var _b = useState(false), active = _b[0], setActive = _b[1];
    var _c = useState(initialRect), triggerRect = _c[0], setTriggerRect = _c[1];
    var element = useRef(document.createElement('div')).current;
    useEffect(function () {
        var onClickBody = function (e) {
            if (hasParentElement(e.target, element))
                return;
            setActive(false);
        };
        document.body.appendChild(element);
        document.body.addEventListener('click', onClickBody, false);
        return function () {
            document.body.removeChild(element);
            document.body.removeEventListener('click', onClickBody, false);
        };
    }, [element]);
    // This is the root container of a dropdown content located in outside the DOM tree
    var DropdownContentRoot = function (props) {
        if (!active)
            return null;
        return createPortal(props.children, element);
    };
    return (React.createElement(DropdownContext.Provider, { value: {
            active: active,
            triggerRect: triggerRect,
            onClickTrigger: function (rect) {
                var newActive = !active;
                setActive(newActive);
                if (newActive)
                    setTriggerRect(rect);
            },
            onClickCloser: function () { return setActive(false); },
            DropdownContentRoot: DropdownContentRoot,
        } }, children));
};
//# sourceMappingURL=Dropdown.js.map