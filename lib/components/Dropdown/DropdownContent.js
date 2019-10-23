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
var Dropdown_1 = require("./Dropdown");
var DropdownContentInner_1 = require("./DropdownContentInner");
var DropdownCloser_1 = require("./DropdownCloser");
exports.DropdownContentContext = react_1.default.createContext({
    onClickCloser: function () { },
});
exports.DropdownContent = function (_a) {
    var _b = _a.controllable, controllable = _b === void 0 ? false : _b, children = _a.children;
    var _c = react_1.useContext(Dropdown_1.DropdownContext), DropdownContentRoot = _c.DropdownContentRoot, triggerRect = _c.triggerRect, onClickCloser = _c.onClickCloser;
    return (react_1.default.createElement(DropdownContentRoot, null,
        react_1.default.createElement(exports.DropdownContentContext.Provider, { value: { onClickCloser: onClickCloser } },
            react_1.default.createElement(DropdownContentInner_1.DropdownContentInner, { triggerRect: triggerRect }, controllable ? children : react_1.default.createElement(DropdownCloser_1.DropdownCloser, null, children)))));
};
//# sourceMappingURL=DropdownContent.js.map