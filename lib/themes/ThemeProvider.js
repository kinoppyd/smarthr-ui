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
var createTheme_1 = require("../themes/createTheme");
exports.ThemeContext = React.createContext(createTheme_1.createTheme());
var Provider = exports.ThemeContext.Provider;
exports.ThemeProvider = function (_a) {
    var theme = _a.theme, children = _a.children;
    return React.createElement(Provider, { value: theme }, children);
};
//# sourceMappingURL=ThemeProvider.js.map