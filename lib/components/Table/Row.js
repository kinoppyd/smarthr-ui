"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
exports.Row = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, children = _a.children;
    return (React.createElement("tr", { className: className }, children));
};
//# sourceMappingURL=Row.js.map