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
var dropdownHelper_1 = require("./dropdownHelper");
var initialRect = { top: 0, right: 0, bottom: 0, left: 0 };
exports.DropdownContext = react_1.default.createContext({
    key: '',
    active: false,
    triggerRect: initialRect,
    onClickTrigger: function () { },
    onClickCloser: function () { },
});
exports.Dropdown = function (_a) {
    var children = _a.children;
    var _b = react_1.useState(''), key = _b[0], setKey = _b[1];
    var _c = react_1.useState(false), active = _c[0], setActive = _c[1];
    var _d = react_1.useState(initialRect), triggerRect = _d[0], setTriggerRect = _d[1];
    react_1.useEffect(function () {
        var newKey = dropdownHelper_1.getRandomStr();
        var onClickBody = function (e) {
            if (dropdownHelper_1.getParentElementByClassNameRecursively(e.target, "dropdown-trigger-" + newKey))
                return;
            setActive(false);
        };
        setKey(newKey);
        document.body.addEventListener('click', onClickBody, false);
        return function () {
            var element = document.querySelector(".dropdown-content-" + newKey);
            if (element)
                document.body.removeChild(element);
            document.body.removeEventListener('click', onClickBody, false);
        };
    }, []);
    return (react_1.default.createElement(exports.DropdownContext.Provider, { value: {
            key: key,
            active: active,
            triggerRect: triggerRect,
            onClickTrigger: function (rect) {
                var newActive = !active;
                setActive(newActive);
                if (newActive)
                    setTriggerRect(rect);
            },
            onClickCloser: function () { return setActive(false); },
        } }, children));
};
//# sourceMappingURL=Dropdown.js.map