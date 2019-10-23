var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { useCallback } from 'react';
import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import { withTheme } from '../../hocs/withTheme';
import { Icon } from '../Icon';
import { hoverable } from '../../hocs/hoverable';
var CheckboxComponent = function (_a) {
    var checked = _a.checked, name = _a.name, _b = _a.disabled, disabled = _b === void 0 ? false : _b, _c = _a.themeColor, themeColor = _c === void 0 ? 'light' : _c, _d = _a.mixed, mixed = _d === void 0 ? false : _d, _e = _a.className, className = _e === void 0 ? '' : _e, onChange = _a.onChange, theme = _a.theme;
    var boxClassName = (checked ? 'active' : '') + " " + (disabled ? 'disabled' : '') + " " + themeColor;
    var handleChange = useCallback(function (e) {
        if (onChange)
            onChange(e);
    }, [onChange]);
    return (React.createElement(Wrapper, { theme: theme, className: className },
        React.createElement(Input, { type: "checkbox", checked: checked, name: name, disabled: disabled, theme: theme, onChange: handleChange }),
        React.createElement(Box, { className: boxClassName, theme: theme }),
        checked && (React.createElement(IconWrap, null,
            React.createElement(Icon, { name: mixed ? 'fa-minus' : 'fa-check', size: 12, color: themeColor === 'light' ? '#fff' : theme.palette.MAIN })))));
};
export var Checkbox = withTheme(CheckboxComponent);
var Wrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n  line-height: 1;\n  box-sizing: border-box;\n"], ["\n  position: relative;\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n  line-height: 1;\n  box-sizing: border-box;\n"])));
var Box = styled.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    var frame = theme.frame, palette = theme.palette;
    return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      border-radius: ", ";\n      border: ", ";\n      background-color: #fff;\n      box-sizing: border-box;\n      pointer-events: none;\n\n      &.active {\n        border-color: ", ";\n        background-color: ", ";\n      }\n\n      &.disabled {\n        background-color: ", ";\n        border-color: ", ";\n\n        &.active {\n          border-color: ", ";\n        }\n      }\n\n      &.dark {\n        border-color: ", ";\n\n        &.active {\n          background-color: #fff;\n        }\n      }\n    "], ["\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      border-radius: ", ";\n      border: ", ";\n      background-color: #fff;\n      box-sizing: border-box;\n      pointer-events: none;\n\n      &.active {\n        border-color: ", ";\n        background-color: ", ";\n      }\n\n      &.disabled {\n        background-color: ", ";\n        border-color: ", ";\n\n        &.active {\n          border-color: ", ";\n        }\n      }\n\n      &.dark {\n        border-color: ", ";\n\n        &.active {\n          background-color: #fff;\n        }\n      }\n    "])), frame.border.radius.s, frame.border.default, palette.MAIN, palette.MAIN, palette.BORDER, palette.BORDER, palette.BORDER, palette.MAIN);
});
var Input = hoverable()(styled.input(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    var palette = theme.palette;
    return css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      opacity: 0;\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      margin: 0;\n      cursor: pointer;\n\n      &[disabled] {\n        pointer-events: none;\n      }\n\n      &.hover + span {\n        box-shadow: 0 0 0 2px ", ";\n      }\n\n      &.focus + span {\n        box-shadow: 0 0 0 2px ", ";\n      }\n    "], ["\n      opacity: 0;\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      margin: 0;\n      cursor: pointer;\n\n      &[disabled] {\n        pointer-events: none;\n      }\n\n      &.hover + span {\n        box-shadow: 0 0 0 2px ", ";\n      }\n\n      &.focus + span {\n        box-shadow: 0 0 0 2px ", ";\n      }\n    "])), transparentize(0.78, palette.MAIN), palette.OUTLINE);
}));
var IconWrap = styled.span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  transform: translate(-50%, -50%);\n  pointer-events: none;\n\n  & > svg {\n    vertical-align: top;\n  }\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  transform: translate(-50%, -50%);\n  pointer-events: none;\n\n  & > svg {\n    vertical-align: top;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=Checkbox.js.map