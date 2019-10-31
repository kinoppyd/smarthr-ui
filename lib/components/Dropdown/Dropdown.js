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
var dropdownHelper_1 = require("./dropdownHelper");
var initialRect = { top: 0, right: 0, bottom: 0, left: 0 };
exports.DropdownContext = react_1.default.createContext({
    active: false,
    triggerRect: initialRect,
    onClickTrigger: function () { },
    onClickCloser: function () { },
    DropdownContentRoot: function () { return null; },
});
exports.Dropdown = function (_a) {
    var children = _a.children;
    var _b = react_1.useState(false), active = _b[0], setActive = _b[1];
    var _c = react_1.useState(initialRect), triggerRect = _c[0], setTriggerRect = _c[1];
    var element = react_1.useRef(document.createElement('div')).current;
    react_1.useEffect(function () {
        var onClickBody = function (e) {
            if (dropdownHelper_1.hasParentElement(e.target, element))
                return;
            setActive(false);
        };
        document.body.appendChild(element);
        document.body.addEventListener('click', onClickBody, false);
        return function () {
            document.body.removeChild(element);
            document.body.removeEventListener('click', onClickBody, false);
        };
    }, [element]);
    // This is the root container of a dropdown content located in outside the DOM tree
    var DropdownContentRoot = react_1.useMemo(function () { return function (props) {
        if (!active)
            return null;
        return react_dom_1.createPortal(props.children, element);
    }; }, [active, element]);
    // set the displayName explicit for DevTools
    DropdownContentRoot.displayName = 'DropdownContentRoot';
    return (react_1.default.createElement(exports.DropdownContext.Provider, { value: {
            active: active,
            triggerRect: triggerRect,
            onClickTrigger: function (rect) {
                var newActive = !active;
                setActive(newActive);
                if (newActive)
                    setTriggerRect(rect);
            },
            onClickCloser: function () { return setActive(false); },
            DropdownContentRoot: DropdownContentRoot,
        } }, children));
};
//# sourceMappingURL=Dropdown.js.map