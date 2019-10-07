"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Dropdown_1 = require("./Dropdown");
var DropdownContent_1 = require("./DropdownContent");
exports.DropdownControllableContent = function (_a) {
    var children = _a.children;
    var _b = react_1.useContext(Dropdown_1.DropdownContext), key = _b.key, active = _b.active, triggerRect = _b.triggerRect, onClickCloser = _b.onClickCloser;
    react_1.useEffect(DropdownContent_1.toggleContentView("dropdown-content-" + key, "dropdown-trigger-" + key)(active, triggerRect, children, onClickCloser), [active, children, key, onClickCloser]);
    return null;
};
//# sourceMappingURL=DropdownControllableContent.js.map