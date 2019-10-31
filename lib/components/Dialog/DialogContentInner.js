"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
function exist(value) {
    return value !== undefined && value !== null;
}
var DialogContentInnerComponent = function (_a) {
    var onClickOverlay = _a.onClickOverlay, children = _a.children, props = __rest(_a, ["onClickOverlay", "children"]);
    var _b = react_1.useState(false), isMounted = _b[0], setIsMounted = _b[1];
    react_1.useEffect(function () {
        setIsMounted(true);
    }, []);
    return (react_1.default.createElement(Wrapper, { className: isMounted ? 'active' : '' },
        react_1.default.createElement(Background, __assign({ onClick: onClickOverlay }, props)),
        react_1.default.createElement(Inner, __assign({}, props), children),
        react_1.default.createElement(ScrollSuppressing, null)));
};
exports.DialogContentInner = withTheme_1.withTheme(DialogContentInnerComponent);
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  visibility: hidden;\n  opacity: 0;\n  z-index: 10000;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: opacity 0.3s ease-in-out;\n\n  &.active {\n    visibility: visible;\n    opacity: 1;\n  }\n"], ["\n  visibility: hidden;\n  opacity: 0;\n  z-index: 10000;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: opacity 0.3s ease-in-out;\n\n  &.active {\n    visibility: visible;\n    opacity: 1;\n  }\n"])));
var Inner = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left;
    var positionRight = exist(right) ? right + "px" : 'auto';
    var positionBottom = exist(bottom) ? bottom + "px" : 'auto';
    var positionTop = exist(top) ? top + "px" : 'auto';
    var positionLeft = exist(left) ? left + "px" : 'auto';
    var translateX = '0';
    var translateY = '0';
    if (top === undefined && bottom === undefined) {
        positionTop = '50%';
        translateY = '-50%';
    }
    if (right === undefined && left === undefined) {
        positionLeft = '50%';
        translateX = '-50%';
    }
    return styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      position: absolute;\n      z-index: 10100;\n      top: ", ";\n      right: ", ";\n      bottom: ", ";\n      left: ", ";\n      border-radius: ", ";\n      background-color: #fff;\n      box-shadow: 0 4px 10px 0 rgba(51, 51, 51, 0.3);\n      transform: translate(", ", ", ");\n    "], ["\n      position: absolute;\n      z-index: 10100;\n      top: ", ";\n      right: ", ";\n      bottom: ", ";\n      left: ", ";\n      border-radius: ", ";\n      background-color: #fff;\n      box-shadow: 0 4px 10px 0 rgba(51, 51, 51, 0.3);\n      transform: translate(", ", ", ");\n    "])), positionTop, positionRight, positionBottom, positionLeft, theme.frame.border.radius.l, translateX, translateY);
});
var Background = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return styled_components_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background-color: ", ";\n    "], ["\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background-color: ", ";\n    "])), theme.palette.SCRIM);
});
var ScrollSuppressing = styled_components_1.createGlobalStyle(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  body {\n    overflow: hidden;\n  }\n"], ["\n  body {\n    overflow: hidden;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=DialogContentInner.js.map