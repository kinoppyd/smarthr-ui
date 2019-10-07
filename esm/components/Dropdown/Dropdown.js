import React, { useState, useEffect } from 'react';
import { getRandomStr, getParentElementByClassNameRecursively } from './dropdownHelper';
var initialRect = { top: 0, right: 0, bottom: 0, left: 0 };
export var DropdownContext = React.createContext({
    key: '',
    active: false,
    triggerRect: initialRect,
    onClickTrigger: function () { },
    onClickCloser: function () { },
});
export var Dropdown = function (_a) {
    var children = _a.children;
    var _b = useState(''), key = _b[0], setKey = _b[1];
    var _c = useState(false), active = _c[0], setActive = _c[1];
    var _d = useState(initialRect), triggerRect = _d[0], setTriggerRect = _d[1];
    useEffect(function () {
        var newKey = getRandomStr();
        var onClickBody = function (e) {
            if (getParentElementByClassNameRecursively(e.target, "dropdown-trigger-" + newKey))
                return;
            setActive(false);
        };
        setKey(newKey);
        document.body.addEventListener('click', onClickBody, false);
        return function () {
            var element = document.querySelector(".dropdown-content-" + newKey);
            if (element)
                document.body.removeChild(element);
            document.body.removeEventListener('click', onClickBody, false);
        };
    }, []);
    return (React.createElement(DropdownContext.Provider, { value: {
            key: key,
            active: active,
            triggerRect: triggerRect,
            onClickTrigger: function (rect) {
                var newActive = !active;
                setActive(newActive);
                if (newActive)
                    setTriggerRect(rect);
            },
            onClickCloser: function () { return setActive(false); },
        } }, children));
};
//# sourceMappingURL=Dropdown.js.map