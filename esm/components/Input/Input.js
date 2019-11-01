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
import * as React from 'react';
import styled, { css } from 'styled-components';
import { withTheme } from '../../hocs/withTheme';
var InputComponent = function (props) {
    var ref = React.useRef(null);
    var autoFocus = props.autoFocus;
    React.useEffect(function () {
        if (autoFocus && ref && ref.current) {
            ref.current.focus();
        }
    }, [autoFocus]);
    return React.createElement(StyledInput, __assign({}, props, { ref: ref }));
};
var StyledInput = styled.input(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (props) {
    var theme = props.theme, _a = props.width, width = _a === void 0 ? 'auto' : _a, error = props.error;
    var size = theme.size, frame = theme.frame, palette = theme.palette;
    return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      display: inline-block;\n      width: ", ";\n      padding: ", ";\n      border-radius: ", ";\n      border: ", ";\n      background-color: #fff;\n      font-size: ", ";\n      color: ", ";\n      line-height: 1.6;\n      outline: none;\n      box-sizing: border-box;\n\n      &::placeholder {\n        color: ", ";\n      }\n\n      ", "\n\n      &[disabled] {\n        border-color: ", ";\n        pointer-events: none;\n      }\n    "], ["\n      display: inline-block;\n      width: ", ";\n      padding: ", ";\n      border-radius: ", ";\n      border: ", ";\n      background-color: #fff;\n      font-size: ", ";\n      color: ", ";\n      line-height: 1.6;\n      outline: none;\n      box-sizing: border-box;\n\n      &::placeholder {\n        color: ", ";\n      }\n\n      ",
        "\n\n      &[disabled] {\n        border-color: ", ";\n        pointer-events: none;\n      }\n    "])), typeof width === 'number' ? width + "px" : width, size.pxToRem(size.space.XXS), frame.border.radius.m, frame.border.default, size.pxToRem(size.font.TALL), palette.TEXT_BLACK, palette.TEXT_GREY, error
        ? css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            border-color: ", ";\n          "], ["\n            border-color: ", ";\n          "])), palette.DANGER) : css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            &:focus {\n              border-color: ", ";\n            }\n          "], ["\n            &:focus {\n              border-color: ", ";\n            }\n          "])), palette.hoverColor(palette.MAIN)), palette.BORDER);
});
export var Input = withTheme(InputComponent);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=Input.js.map