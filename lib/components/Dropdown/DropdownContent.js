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
var withTheme_1 = require("../../hocs/withTheme");
var ThemeProvider_1 = require("../../themes/ThemeProvider");
var Dropdown_1 = require("./Dropdown");
var DropdownContentInner_1 = require("./DropdownContentInner");
exports.DropdownContentContext = react_1.default.createContext({
    onClickCloser: function () { },
});
exports.toggleContentView = function (className, additionalClassName) { return function (active, triggerRect, children, theme, onClickCloser) { return function () {
    if (active) {
        var element = document.createElement('div');
        var classNames = className;
        if (additionalClassName)
            classNames += " " + additionalClassName;
        element.className = classNames;
        react_dom_1.render(react_1.default.createElement(ThemeProvider_1.ThemeProvider, { theme: theme },
            react_1.default.createElement(exports.DropdownContentContext.Provider, { value: { onClickCloser: onClickCloser } },
                react_1.default.createElement(DropdownContentInner_1.DropdownContentInner, { triggerRect: triggerRect }, children))), document.body.appendChild(element));
    }
    else {
        var element = document.querySelector("." + className);
        if (element)
            document.body.removeChild(element);
    }
}; }; };
var DropdownContentComponent = function (_a) {
    var theme = _a.theme, children = _a.children;
    var _b = react_1.useContext(Dropdown_1.DropdownContext), key = _b.key, active = _b.active, triggerRect = _b.triggerRect, onClickCloser = _b.onClickCloser;
    react_1.useEffect(exports.toggleContentView("dropdown-content-" + key)(active, triggerRect, children, theme, onClickCloser), [active, children, key, onClickCloser]);
    return null;
};
exports.DropdownContent = withTheme_1.withTheme(DropdownContentComponent);
//# sourceMappingURL=DropdownContent.js.map