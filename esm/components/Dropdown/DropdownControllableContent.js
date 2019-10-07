import { useContext, useEffect } from 'react';
import { DropdownContext } from './Dropdown';
import { toggleContentView } from './DropdownContent';
export var DropdownControllableContent = function (_a) {
    var children = _a.children;
    var _b = useContext(DropdownContext), key = _b.key, active = _b.active, triggerRect = _b.triggerRect, onClickCloser = _b.onClickCloser;
    useEffect(toggleContentView("dropdown-content-" + key, "dropdown-trigger-" + key)(active, triggerRect, children, onClickCloser), [active, children, key, onClickCloser]);
    return null;
};
//# sourceMappingURL=DropdownControllableContent.js.map