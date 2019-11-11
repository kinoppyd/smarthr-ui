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
exports.AccordionPanelItemContext = React.createContext({
    name: '',
});
exports.AccordionPanelItem = function (_a) {
    var children = _a.children, name = _a.name, _b = _a.className, className = _b === void 0 ? '' : _b;
    return (React.createElement(exports.AccordionPanelItemContext.Provider, { value: {
            name: name,
        } },
        React.createElement("div", { className: className }, children)));
};
//# sourceMappingURL=AccordionPanelItem.js.map