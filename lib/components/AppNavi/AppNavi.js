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
var StatusLabel_1 = require("../StatusLabel/StatusLabel");
var AppNaviButton_1 = require("./AppNaviButton");
var AppNaviComponent = function (_a) {
    var theme = _a.theme, label = _a.label, buttons = _a.buttons, _b = _a.children, children = _b === void 0 ? null : _b;
    return (React.createElement(Wrapper, { theme: theme },
        label && (React.createElement(StatusLabelWrapper, { theme: theme },
            React.createElement(StatusLabel_1.StatusLabel, null, label))),
        buttons &&
            buttons.map(function (button, index) { return (React.createElement(AppNaviButton_1.AppNaviButton, { icon: button.icon, current: button.current, key: index, onClick: button.onClick }, button.children)); }),
        children));
};
exports.AppNavi = withTheme_1.withTheme(AppNaviComponent);
var Wrapper = styled_components_1.default.nav(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      display: flex;\n      align-items: center;\n      width: 100%;\n      height: ", ";\n      padding: 0 ", ";\n      background-color: #fff;\n      box-sizing: border-box;\n      box-shadow: 0 ", " ", " rgba(0, 0, 0, 0.15);\n    "], ["\n      display: flex;\n      align-items: center;\n      width: 100%;\n      height: ", ";\n      padding: 0 ", ";\n      background-color: #fff;\n      box-sizing: border-box;\n      box-shadow: 0 ", " ", " rgba(0, 0, 0, 0.15);\n    "])), theme.size.pxToRem(40), theme.size.pxToRem(20), theme.size.pxToRem(1), theme.size.pxToRem(4));
});
var StatusLabelWrapper = styled_components_1.default.span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      display: inline-block;\n      margin-right: ", ";\n    "], ["\n      display: inline-block;\n      margin-right: ", ";\n    "])), theme.size.pxToRem(theme.size.space.XS));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=AppNavi.js.map