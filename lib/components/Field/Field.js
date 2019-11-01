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
var Input_1 = require("../Input");
var StatusLabel_1 = require("../StatusLabel");
var FieldComponent = function (_a) {
    var label = _a.label, _b = _a.input, input = _b === void 0 ? {} : _b, errorMessage = _a.errorMessage, helpMessage = _a.helpMessage, _c = _a.className, className = _c === void 0 ? '' : _c, theme = _a.theme, children = _a.children;
    return (React.createElement(Wrapper, { width: input.width || 'auto', className: className },
        React.createElement(LabelHead, { theme: theme },
            React.createElement(Title, { theme: theme },
                label,
                input.required && (React.createElement(StatusLabelWrapper, { theme: theme },
                    React.createElement(StatusLabel_1.StatusLabel, { type: "required" }, "\u5FC5\u9808")))),
            helpMessage && React.createElement(Help, { theme: theme }, helpMessage)),
        children ? children : React.createElement(Input_1.Input, __assign({}, input)),
        errorMessage && React.createElement(Error, { theme: theme }, errorMessage)));
};
exports.Field = withTheme_1.withTheme(FieldComponent);
var Wrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var width = _a.width;
    return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: inline-block;\n    width: ", ";\n  "], ["\n    display: inline-block;\n    width: ", ";\n  "])), typeof width === 'number' ? width + "px" : width);
});
var LabelHead = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: ", ";\n    line-height: 1.4;\n  "], ["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: ", ";\n    line-height: 1.4;\n  "])), theme.size.pxToRem(theme.size.space.XXS));
});
var Title = styled_components_1.default.p(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return styled_components_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    margin: 0;\n    color: ", ";\n    font-weight: bold;\n    font-size: ", ";\n  "], ["\n    margin: 0;\n    color: ", ";\n    font-weight: bold;\n    font-size: ", ";\n  "])), theme.palette.TEXT_GREY, theme.size.pxToRem(theme.size.font.TALL));
});
var Help = styled_components_1.default.p(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return styled_components_1.css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    margin: 0;\n    font-size: ", ";\n    color: ", ";\n  "], ["\n    margin: 0;\n    font-size: ", ";\n    color: ", ";\n  "])), theme.size.pxToRem(theme.size.font.SHORT), theme.palette.TEXT_GREY);
});
var Error = styled_components_1.default.p(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return styled_components_1.css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    margin: ", " 0 0 0;\n    font-size: ", ";\n    color: ", ";\n    line-height: 1.4;\n  "], ["\n    margin: ", " 0 0 0;\n    font-size: ", ";\n    color: ", ";\n    line-height: 1.4;\n  "])), theme.size.pxToRem(theme.size.space.XXS), theme.size.pxToRem(theme.size.font.TALL), theme.palette.DANGER);
});
var StatusLabelWrapper = styled_components_1.default.span(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return styled_components_1.css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n    margin-left: ", ";\n  "], ["\n    margin-left: ", ";\n  "])), theme.size.pxToRem(theme.size.space.XXS));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;
//# sourceMappingURL=Field.js.map