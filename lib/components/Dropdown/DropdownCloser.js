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
var DropdownContent_1 = require("./DropdownContent");
exports.DropdownCloser = function (_a) {
    var children = _a.children;
    var onClickCloser = react_1.useContext(DropdownContent_1.DropdownContentContext).onClickCloser;
    return react_1.default.createElement("div", { onClick: onClickCloser }, children);
};
//# sourceMappingURL=DropdownCloser.js.map