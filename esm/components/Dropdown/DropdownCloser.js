import React, { useContext } from 'react';
import { DropdownContentContext } from './DropdownContent';
export var DropdownCloser = function (_a) {
    var children = _a.children;
    var onClickCloser = useContext(DropdownContentContext).onClickCloser;
    return React.createElement("div", { onClick: onClickCloser }, children);
};
//# sourceMappingURL=DropdownCloser.js.map