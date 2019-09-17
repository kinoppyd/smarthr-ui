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
import * as React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { withTheme } from '../../hocs/withTheme';
import { Icon } from '../Icon';
var REMOVE_DELAY = 8000;
var FlashComponent = /** @class */ (function (_super) {
    __extends(FlashComponent, _super);
    function FlashComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.timerId = 0;
        _this.state = {
            visible: props.visible,
        };
        return _this;
    }
    FlashComponent.getDerivedStateFromProps = function (props) {
        return {
            visible: props.visible,
        };
    };
    FlashComponent.prototype.componentDidMount = function () {
        if (this.state.visible) {
            this.timerId = setTimeout(this.props.onClose, REMOVE_DELAY);
        }
    };
    FlashComponent.prototype.componentDidUpdate = function (prevProps) {
        if (!prevProps.visible && this.props.visible) {
            this.timerId = setTimeout(this.props.onClose, REMOVE_DELAY);
        }
        if (prevProps.visible && !this.props.visible) {
            clearTimeout(this.timerId);
        }
    };
    FlashComponent.prototype.componentWillUnmount = function () {
        clearTimeout(this.timerId);
    };
    FlashComponent.prototype.render = function () {
        var visible = this.state.visible;
        var _a = this.props, type = _a.type, text = _a.text, _b = _a.className, className = _b === void 0 ? '' : _b, onClose = _a.onClose, theme = _a.theme;
        var iconName = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-triangle';
        if (!visible)
            return null;
        return (React.createElement(Wrapper, { className: type + " " + className, theme: theme },
            React.createElement(Icon, { name: iconName, size: 24, color: "#fff" }),
            React.createElement(Txt, { theme: theme }, text),
            React.createElement(CloseButton, { onClick: onClose, className: "close" },
                React.createElement(Icon, { name: "fa-times", size: 12, color: theme.palette.BORDER }))));
    };
    return FlashComponent;
}(React.PureComponent));
export var Flash = withTheme(FlashComponent);
var bounceAnimation = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from,\n  20%,\n  53%,\n  80%,\n  to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    transform: translate3d(0, 0, 0);\n  }\n  40%,\n  43% {\n    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    transform: translate3d(0, -30px, 0);\n  }\n  70% {\n    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    transform: translate3d(0, -15px, 0);\n  }\n  90% {\n    transform: translate3d(0, -4px, 0);\n  }\n"], ["\n  from,\n  20%,\n  53%,\n  80%,\n  to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    transform: translate3d(0, 0, 0);\n  }\n  40%,\n  43% {\n    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    transform: translate3d(0, -30px, 0);\n  }\n  70% {\n    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    transform: translate3d(0, -15px, 0);\n  }\n  90% {\n    transform: translate3d(0, -4px, 0);\n  }\n"])));
var Wrapper = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    var size = theme.size, frame = theme.frame, palette = theme.palette;
    return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      z-index: 1000;\n      position: fixed;\n      bottom: ", ";\n      left: ", ";\n      display: flex;\n      align-items: center;\n      width: 404px;\n      height: 50px;\n      padding: 0 ", ";\n      border-radius: ", ";\n      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),\n        0 2px 1px -1px rgba(0, 0, 0, 0.12);\n      box-sizing: border-box;\n      animation: ", " 1s 0s both;\n\n      &.success {\n        background-color: ", ";\n      }\n\n      &.danger {\n        background-color: ", ";\n      }\n    "], ["\n      z-index: 1000;\n      position: fixed;\n      bottom: ", ";\n      left: ", ";\n      display: flex;\n      align-items: center;\n      width: 404px;\n      height: 50px;\n      padding: 0 ", ";\n      border-radius: ", ";\n      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),\n        0 2px 1px -1px rgba(0, 0, 0, 0.12);\n      box-sizing: border-box;\n      animation: ", " 1s 0s both;\n\n      &.success {\n        background-color: ", ";\n      }\n\n      &.danger {\n        background-color: ", ";\n      }\n    "])), size.pxToRem(size.space.XXS), size.pxToRem(size.space.XXS), size.pxToRem(size.space.XS), frame.border.radius.m, bounceAnimation, palette.MAIN, palette.DANGER);
});
var Txt = styled.p(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    var size = theme.size;
    return css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      flex: 1;\n      padding: 0 ", ";\n      color: #fff;\n      font-size: ", ";\n    "], ["\n      flex: 1;\n      padding: 0 ", ";\n      color: #fff;\n      font-size: ", ";\n    "])), size.pxToRem(size.space.XS), size.pxToRem(size.font.TALL));
});
var CloseButton = styled.button(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: 12px;\n  height: 12px;\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n  cursor: pointer;\n"], ["\n  width: 12px;\n  height: 12px;\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n  cursor: pointer;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=Flash.js.map