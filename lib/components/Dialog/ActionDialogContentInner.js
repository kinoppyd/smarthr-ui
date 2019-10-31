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
var Button_1 = require("../Button");
var ActionDialogContentInnerComponent = function (_a) {
    var children = _a.children, title = _a.title, closeText = _a.closeText, actionText = _a.actionText, actionTheme = _a.actionTheme, onClickAction = _a.onClickAction, onClickClose = _a.onClickClose, _b = _a.actionDisabled, actionDisabled = _b === void 0 ? false : _b, theme = _a.theme;
    var handleClickAction = react_1.useCallback(function () {
        onClickAction(onClickClose);
    }, [onClickAction, onClickClose]);
    var ActionButton = Button_1.PrimaryButton;
    if (actionTheme === 'secondary')
        ActionButton = Button_1.SecondaryButton;
    if (actionTheme === 'danger')
        ActionButton = Button_1.DangerButton;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Title, { theme: theme }, title),
        children,
        react_1.default.createElement(Bottom, { theme: theme },
            react_1.default.createElement(Button_1.SecondaryButton, { onClick: onClickClose }, closeText),
            react_1.default.createElement(ActionButton, { onClick: handleClickAction, disabled: actionDisabled }, actionText))));
};
exports.ActionDialogContentInner = withTheme_1.withTheme(ActionDialogContentInnerComponent);
var Title = styled_components_1.default.p(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    var _b = theme.size, pxToRem = _b.pxToRem, space = _b.space, font = _b.font;
    var border = theme.frame.border;
    return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      margin: 0;\n      padding: ", " ", ";\n      border-bottom: ", ";\n      font-size: ", ";\n      line-height: 1;\n    "], ["\n      margin: 0;\n      padding: ", " ", ";\n      border-bottom: ", ";\n      font-size: ", ";\n      line-height: 1;\n    "])), pxToRem(space.XS), pxToRem(space.S), border.default, pxToRem(font.GRANDE));
});
var Bottom = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    var _b = theme.size, pxToRem = _b.pxToRem, space = _b.space;
    var border = theme.frame.border;
    return styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      display: flex;\n      justify-content: flex-end;\n      margin: 0;\n      padding: ", " ", ";\n      border-top: ", ";\n\n      & > *:not(:first-child) {\n        margin: 0 0 0 ", ";\n      }\n    "], ["\n      display: flex;\n      justify-content: flex-end;\n      margin: 0;\n      padding: ", " ", ";\n      border-top: ", ";\n\n      & > *:not(:first-child) {\n        margin: 0 0 0 ", ";\n      }\n    "])), pxToRem(space.XS), pxToRem(space.S), border.default, pxToRem(space.XS));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=ActionDialogContentInner.js.map