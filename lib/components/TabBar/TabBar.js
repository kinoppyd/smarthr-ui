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
var React = __importStar(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var withTheme_1 = require("../../hocs/withTheme");
var TabBarComponent = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.bordered, bordered = _c === void 0 ? true : _c, theme = _a.theme, children = _a.children;
    var classNames = className + " " + (bordered ? 'bordered' : '');
    return (React.createElement(Wrapper, { role: "tablist", className: classNames, theme: theme }, children));
};
exports.TabBar = withTheme_1.withTheme(TabBarComponent);
var Wrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    var frame = theme.frame;
    return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      display: flex;\n      background-color: #fff;\n\n      &.bordered {\n        position: relative;\n\n        :after {\n          position: absolute;\n          bottom: 0px;\n          width: 100%;\n          border-bottom: ", ";\n          content: '';\n        }\n\n        > button {\n          &.selected {\n            position: relative;\n            z-index: 1;\n          }\n        }\n      }\n    "], ["\n      display: flex;\n      background-color: #fff;\n\n      &.bordered {\n        position: relative;\n\n        :after {\n          position: absolute;\n          bottom: 0px;\n          width: 100%;\n          border-bottom: ", ";\n          content: '';\n        }\n\n        > button {\n          &.selected {\n            position: relative;\n            z-index: 1;\n          }\n        }\n      }\n    "])), frame.border.default);
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=TabBar.js.map