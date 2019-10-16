"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var withTheme_1 = require("../../hocs/withTheme");
var Dropdown_1 = require("./Dropdown");
var DropdownContent_1 = require("./DropdownContent");
var DropdownControllableContentComponent = function (_a) {
    var theme = _a.theme, children = _a.children;
    var _b = react_1.useContext(Dropdown_1.DropdownContext), key = _b.key, active = _b.active, triggerRect = _b.triggerRect, onClickCloser = _b.onClickCloser;
    react_1.useEffect(DropdownContent_1.toggleContentView("dropdown-content-" + key, "dropdown-trigger-" + key)(active, triggerRect, children, theme, onClickCloser), [active, children, key, onClickCloser]);
    return null;
};
exports.DropdownControllableContent = withTheme_1.withTheme(DropdownControllableContentComponent);
//# sourceMappingURL=DropdownControllableContent.js.map