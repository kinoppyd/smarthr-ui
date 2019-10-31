"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Icon_1 = require("../Icon");
var withTheme_1 = require("../../hocs/withTheme");
var ua_1 = require("../../libs/ua");
var SelectComponent = /** @class */ (function (_super) {
    __extends(SelectComponent, _super);
    function SelectComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleChange = function (e) {
            var onChange = _this.props.onChange;
            if (onChange)
                onChange(e);
        };
        return _this;
    }
    SelectComponent.prototype.render = function () {
        var _a = this.props, _b = _a.className, className = _b === void 0 ? '' : _b, value = _a.value, name = _a.name, _c = _a.required, required = _c === void 0 ? false : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.error, error = _e === void 0 ? false : _e, _f = _a.width, width = _f === void 0 ? 260 : _f, theme = _a.theme, options = _a.options, _g = _a.labelText, labelText = _g === void 0 ? '' : _g;
        var widthStyle = typeof width === 'number' ? width + "px" : width;
        var classNames = className + " " + (error ? 'error' : '');
        return (React.createElement(Wrapper, { width: widthStyle, theme: theme },
            React.createElement(Base, { className: classNames, value: value, name: name, required: required, disabled: disabled, onChange: this.handleChange, theme: theme, "aria-label": labelText }, options.map(function (option) { return (React.createElement("option", { key: option.value, value: option.value }, option.label)); })),
            React.createElement(IconWrap, null,
                React.createElement(Icon_1.Icon, { size: 13, name: "fa-sort" }))));
    };
    return SelectComponent;
}(React.PureComponent));
exports.Select = withTheme_1.withTheme(SelectComponent);
var Wrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var width = _a.width;
    return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      position: relative;\n      width: ", ";\n    "], ["\n      position: relative;\n      width: ", ";\n    "])), width);
});
var Base = styled_components_1.default.select(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    var size = theme.size, frame = theme.frame, palette = theme.palette, interaction = theme.interaction;
    return styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      display: inline-block;\n      width: 100%;\n      padding: ", ";\n      border-radius: ", ";\n      border: ", ";\n      background-color: #fff;\n      font-size: ", ";\n      color: ", ";\n      line-height: 1.6;\n      outline: none;\n      box-sizing: border-box;\n      appearance: none;\n      cursor: pointer;\n      transition: ", ";\n      text-align: right;\n\n      &:hover {\n        background-color: ", ";\n      }\n\n      &::placeholder {\n        color: ", ";\n      }\n\n      &:focus {\n        border-color: ", ";\n      }\n\n      &.error {\n        border-color: ", ";\n      }\n\n      &[disabled] {\n        border-color: #f5f5f5;\n        pointer-events: none;\n        cursor: not-allowed;\n        background-color: #f5f5f5;\n        color: #c1c1c1;\n      }\n\n      &:-ms-expand {\n        display: none;\n      }\n    "], ["\n      display: inline-block;\n      width: 100%;\n      padding: ", ";\n      border-radius: ", ";\n      border: ", ";\n      background-color: #fff;\n      font-size: ", ";\n      color: ", ";\n      line-height: 1.6;\n      outline: none;\n      box-sizing: border-box;\n      appearance: none;\n      cursor: pointer;\n      transition: ", ";\n      text-align: right;\n\n      &:hover {\n        background-color: ", ";\n      }\n\n      &::placeholder {\n        color: ", ";\n      }\n\n      &:focus {\n        border-color: ", ";\n      }\n\n      &.error {\n        border-color: ", ";\n      }\n\n      &[disabled] {\n        border-color: #f5f5f5;\n        pointer-events: none;\n        cursor: not-allowed;\n        background-color: #f5f5f5;\n        color: #c1c1c1;\n      }\n\n      &:-ms-expand {\n        display: none;\n      }\n    "])), size.pxToRem(size.space.XXS), frame.border.radius.m, frame.border.default, size.pxToRem(size.font.TALL), palette.TEXT_BLACK, ua_1.isTouchDevice ? 'none' : "all " + interaction.hover.animation, palette.hoverColor('#fff'), palette.TEXT_GREY, palette.MAIN, palette.DANGER);
});
var IconWrap = styled_components_1.default.span(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  right: 6px;\n  display: inline-block;\n  width: 13px;\n  height: 13px;\n  transform: translate(-50%, -50%);\n  pointer-events: none;\n\n  & > svg {\n    vertical-align: top;\n  }\n"], ["\n  position: absolute;\n  top: 50%;\n  right: 6px;\n  display: inline-block;\n  width: 13px;\n  height: 13px;\n  transform: translate(-50%, -50%);\n  pointer-events: none;\n\n  & > svg {\n    vertical-align: top;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=Select.js.map