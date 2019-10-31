"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var withTheme_1 = require("../../hocs/withTheme");
var dropdownHelper_1 = require("./dropdownHelper");
var DropdownContentInnerComponent = function (_a) {
    var triggerRect = _a.triggerRect, theme = _a.theme, children = _a.children;
    var _b = react_1.useState(false), isMounted = _b[0], setIsMounted = _b[1];
    var _c = react_1.useState({
        top: 'auto',
        left: 'auto',
        maxHeight: '',
    }), contentBox = _c[0], setContentBox = _c[1];
    var wrapperRef = react_1.useRef(null);
    react_1.useEffect(function () {
        setIsMounted(true);
    }, []);
    react_1.useEffect(function () {
        if (isMounted && wrapperRef.current) {
            setContentBox(dropdownHelper_1.getContentBoxStyle(triggerRect, {
                width: wrapperRef.current.offsetWidth,
                height: wrapperRef.current.offsetHeight,
            }, {
                width: innerWidth,
                height: innerHeight,
            }, {
                top: pageYOffset,
                left: pageXOffset,
            }));
        }
    }, [isMounted, triggerRect]);
    return (react_1.default.createElement(Wrapper, { ref: wrapperRef, contentBox: contentBox, className: isMounted ? 'active' : '', theme: theme }, children));
};
exports.DropdownContentInner = withTheme_1.withTheme(DropdownContentInnerComponent);
var Wrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var contentBox = _a.contentBox, theme = _a.theme;
    return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      visibility: hidden;\n      z-index: 99999;\n      position: absolute;\n      top: ", ";\n      left: ", ";\n      border-radius: ", ";\n      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),\n        0 2px 1px -1px rgba(0, 0, 0, 0.12);\n      background-color: #fff;\n      white-space: nowrap;\n\n      &.active {\n        visibility: visible;\n      }\n\n      ", "\n    "], ["\n      visibility: hidden;\n      z-index: 99999;\n      position: absolute;\n      top: ", ";\n      left: ", ";\n      border-radius: ", ";\n      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),\n        0 2px 1px -1px rgba(0, 0, 0, 0.12);\n      background-color: #fff;\n      white-space: nowrap;\n\n      &.active {\n        visibility: visible;\n      }\n\n      ",
        "\n    "])), contentBox.top, contentBox.left, theme.frame.border.radius.m, contentBox.maxHeight
        ? "\n          overflow-y: scroll;\n          max-height: " + contentBox.maxHeight + ";\n      "
        : '');
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=DropdownContentInner.js.map