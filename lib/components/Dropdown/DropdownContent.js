"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_dom_1 = require("react-dom");
var Dropdown_1 = require("./Dropdown");
var DropdownContentInner_1 = require("./DropdownContentInner");
exports.DropdownContentContext = react_1.default.createContext({
    onClickCloser: function () { },
});
function createElement(tagName, className) {
    var element = document.createElement(tagName);
    element.className = className;
    return element;
}
exports.DropdownContent = function (_a) {
    var _b = _a.controllable, controllable = _b === void 0 ? false : _b, children = _a.children;
    var _c = react_1.useContext(Dropdown_1.DropdownContext), key = _c.key, active = _c.active, triggerRect = _c.triggerRect, onClickCloser = _c.onClickCloser;
    if (!active)
        return null;
    var contentClassName = "dropdown-content-" + key;
    var element = document.querySelector("." + contentClassName);
    if (!element) {
        element = createElement('div', contentClassName + " " + (controllable ? "dropdown-trigger-" + key : ''));
        document.body.appendChild(element);
    }
    return react_dom_1.createPortal(react_1.default.createElement(exports.DropdownContentContext.Provider, { value: { onClickCloser: onClickCloser } },
        react_1.default.createElement(DropdownContentInner_1.DropdownContentInner, { triggerRect: triggerRect }, children)), element);
};
//# sourceMappingURL=DropdownContent.js.map