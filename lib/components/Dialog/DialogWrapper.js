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
exports.DialogContext = react_1.createContext({
    onClickTrigger: function () { },
    onClickClose: function () { },
    DialogContentRoot: function () { return null; },
});
exports.DialogWrapper = function (_a) {
    var children = _a.children;
    var _b = react_1.useState(false), active = _b[0], setActive = _b[1];
    var element = react_1.useRef(document.createElement('div')).current;
    react_1.useEffect(function () {
        document.body.appendChild(element);
        return function () {
            document.body.removeChild(element);
        };
    }, [element]);
    // This is the root container of a dialog content located in outside the DOM tree
    var DialogContentRoot = react_1.useMemo(function () { return function (props) {
        if (!active)
            return null;
        return react_dom_1.createPortal(props.children, element);
    }; }, [active, element]);
    // set the displayName explicit for DevTools
    DialogContentRoot.displayName = 'DialogContentRoot';
    return (react_1.default.createElement(exports.DialogContext.Provider, { value: {
            onClickTrigger: function () { return setActive(true); },
            onClickClose: function () { return setActive(false); },
            DialogContentRoot: DialogContentRoot,
        } }, children));
};
//# sourceMappingURL=DialogWrapper.js.map