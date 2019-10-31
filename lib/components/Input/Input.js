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
var withTheme_1 = require("../../hocs/withTheme");
var inputFactory = function (inputType) {
    return /** @class */ (function (_super) {
        __extends(InputComponent, _super);
        function InputComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.handleChange = function (e) {
                var _a = _this.props, name = _a.name, onChange = _a.onChange;
                var value = e.currentTarget.value;
                if (onChange)
                    onChange(name, value);
            };
            _this.handleBlur = function (e) {
                var _a = _this.props, name = _a.name, onBlur = _a.onBlur;
                var value = e.currentTarget.value;
                if (onBlur)
                    onBlur(name, value);
            };
            return _this;
        }
        InputComponent.prototype.render = function () {
            var _a = this.props, _b = _a.className, className = _b === void 0 ? '' : _b, value = _a.value, name = _a.name, _c = _a.required, required = _c === void 0 ? false : _c, _d = _a.placeholder, placeholder = _d === void 0 ? '' : _d, _e = _a.disabled, disabled = _e === void 0 ? false : _e, _f = _a.error, error = _f === void 0 ? false : _f, _g = _a.width, width = _g === void 0 ? 'auto' : _g, theme = _a.theme;
            var widthStyle = typeof width === 'number' ? width + "px" : width;
            var classNames = className + " " + (error ? 'error' : '');
            return (React.createElement(Base, { className: classNames, type: inputType, value: value, name: name, required: required, placeholder: placeholder, disabled: disabled, onChange: this.handleChange, onBlur: this.handleBlur, width: widthStyle, theme: theme }));
        };
        return InputComponent;
    }(React.PureComponent));
};
exports.TextInput = withTheme_1.withTheme(inputFactory('text'));
exports.NumberInput = withTheme_1.withTheme(inputFactory('number'));
exports.PasswordInput = withTheme_1.withTheme(inputFactory('password'));
var Base = styled_components_1.default.input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme, width = _a.width;
    var size = theme.size, frame = theme.frame, palette = theme.palette;
    return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      display: inline-block;\n      width: ", ";\n      padding: ", ";\n      border-radius: ", ";\n      border: ", ";\n      background-color: #fff;\n      font-size: ", ";\n      color: ", ";\n      line-height: 1.6;\n      outline: none;\n      box-sizing: border-box;\n\n      &::placeholder {\n        color: ", ";\n      }\n\n      &:focus {\n        border-color: ", ";\n      }\n\n      &.error {\n        border-color: ", ";\n      }\n\n      &[disabled] {\n        border-color: ", ";\n        pointer-events: none;\n      }\n    "], ["\n      display: inline-block;\n      width: ", ";\n      padding: ", ";\n      border-radius: ", ";\n      border: ", ";\n      background-color: #fff;\n      font-size: ", ";\n      color: ", ";\n      line-height: 1.6;\n      outline: none;\n      box-sizing: border-box;\n\n      &::placeholder {\n        color: ", ";\n      }\n\n      &:focus {\n        border-color: ", ";\n      }\n\n      &.error {\n        border-color: ", ";\n      }\n\n      &[disabled] {\n        border-color: ", ";\n        pointer-events: none;\n      }\n    "])), width, size.pxToRem(size.space.XXS), frame.border.radius.m, frame.border.default, size.pxToRem(size.font.TALL), palette.TEXT_BLACK, palette.TEXT_GREY, palette.hoverColor(palette.MAIN), palette.DANGER, palette.BORDER);
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=Input.js.map