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
var Button_1 = require("../Button");
var MessageDialogContentInnerComponent = function (_a) {
    var title = _a.title, description = _a.description, closeText = _a.closeText, onClickClose = _a.onClickClose, theme = _a.theme;
    return (React.createElement(Wrapper, { theme: theme },
        React.createElement(Title, { theme: theme }, title),
        React.createElement(Description, { theme: theme }, description),
        React.createElement(Bottom, null,
            React.createElement(Button_1.SecondaryButton, { onClick: onClickClose }, closeText))));
};
exports.MessageDialogContentInner = withTheme_1.withTheme(MessageDialogContentInnerComponent);
var Wrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    var _b = theme.size, pxToRem = _b.pxToRem, space = _b.space;
    return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      padding: ", " ", ";\n    "], ["\n      padding: ", " ", ";\n    "])), pxToRem(space.XS), pxToRem(space.S));
});
var Title = styled_components_1.default.p(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    var _b = theme.size, pxToRem = _b.pxToRem, space = _b.space, font = _b.font;
    return styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      margin: 0 0 ", " 0;\n      font-size: ", ";\n      line-height: 1;\n    "], ["\n      margin: 0 0 ", " 0;\n      font-size: ", ";\n      line-height: 1;\n    "])), pxToRem(space.S), pxToRem(font.GRANDE));
});
var Description = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    var _b = theme.size, pxToRem = _b.pxToRem, space = _b.space, font = _b.font;
    return styled_components_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      margin: 0 0 ", " 0;\n      font-size: ", ";\n      line-height: 1.5;\n    "], ["\n      margin: 0 0 ", " 0;\n      font-size: ", ";\n      line-height: 1.5;\n    "])), pxToRem(space.S), pxToRem(font.TALL));
});
var Bottom = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  justify-content: flex-end;\n"], ["\n  display: flex;\n  justify-content: flex-end;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=MessageDialogContentInner.js.map