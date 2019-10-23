import React, { useContext } from 'react';
import { DropdownContext } from './Dropdown';
import { DropdownContentInner } from './DropdownContentInner';
import { DropdownCloser } from './DropdownCloser';
export var DropdownContentContext = React.createContext({
    onClickCloser: function () { },
});
export var DropdownContent = function (_a) {
    var _b = _a.controllable, controllable = _b === void 0 ? false : _b, children = _a.children;
    var _c = useContext(DropdownContext), DropdownContentRoot = _c.DropdownContentRoot, triggerRect = _c.triggerRect, onClickCloser = _c.onClickCloser;
    return (React.createElement(DropdownContentRoot, null,
        React.createElement(DropdownContentContext.Provider, { value: { onClickCloser: onClickCloser } },
            React.createElement(DropdownContentInner, { triggerRect: triggerRect }, controllable ? children : React.createElement(DropdownCloser, null, children)))));
};
//# sourceMappingURL=DropdownContent.js.map