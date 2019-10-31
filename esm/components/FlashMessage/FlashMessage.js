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
import { SecondaryButton } from '../Button/SecondaryButton';
var REMOVE_DELAY = 8000;
var FlashMessageComponent = /** @class */ (function (_super) {
    __extends(FlashMessageComponent, _super);
    function FlashMessageComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.timerId = 0;
        _this.state = {
            visible: props.visible,
        };
        return _this;
    }
    FlashMessageComponent.getDerivedStateFromProps = function (props) {
        return {
            visible: props.visible,
        };
    };
    FlashMessageComponent.prototype.componentDidMount = function () {
        if (this.state.visible) {
            this.timerId = setTimeout(this.props.onClose, REMOVE_DELAY);
        }
    };
    FlashMessageComponent.prototype.componentDidUpdate = function (prevProps) {
        if (!prevProps.visible && this.props.visible) {
            this.timerId = setTimeout(this.props.onClose, REMOVE_DELAY);
        }
        if (prevProps.visible && !this.props.visible) {
            clearTimeout(this.timerId);
        }
    };
    FlashMessageComponent.prototype.componentWillUnmount = function () {
        clearTimeout(this.timerId);
    };
    FlashMessageComponent.prototype.render = function () {
        var visible = this.state.visible;
        var _a = this.props, type = _a.type, text = _a.text, onClose = _a.onClose, theme = _a.theme, className = _a.className;
        var iconName = 'fa-check-circle';
        var iconColor = theme.palette.TEXT_GREY;
        switch (type) {
            case 'success':
                iconName = 'fa-check-circle';
                iconColor = theme.palette.MAIN;
                break;
            case 'info':
                iconName = 'fa-info-circle';
                iconColor = theme.palette.TEXT_GREY;
                break;
            case 'warning':
                iconName = 'fa-exclamation-triangle';
                iconColor = theme.palette.WARNING;
                break;
            case 'error':
                iconName = 'fa-exclamation-circle';
                iconColor = theme.palette.DANGER;
        }
        if (!visible)
            return null;
        return (React.createElement(Wrapper, { className: type + " " + className, theme: theme },
            React.createElement(Icon, { name: iconName, size: 14, color: iconColor }),
            React.createElement(Txt, { theme: theme }, text),
            React.createElement(CloseButton, { className: "close", onClick: onClose, size: "s", square: true, theme: theme },
                React.createElement(Icon, { size: 16, name: "fa-times" }))));
    };
    return FlashMessageComponent;
}(React.PureComponent));
export var FlashMessage = withTheme(FlashMessageComponent);
var bounceAnimation = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from,\n  20%,\n  53%,\n  80%,\n  to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    transform: translate3d(0, 0, 0);\n  }\n  40%,\n  43% {\n    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    transform: translate3d(0, -30px, 0);\n  }\n  70% {\n    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    transform: translate3d(0, -15px, 0);\n  }\n  90% {\n    transform: translate3d(0, -4px, 0);\n  }\n"], ["\n  from,\n  20%,\n  53%,\n  80%,\n  to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    transform: translate3d(0, 0, 0);\n  }\n  40%,\n  43% {\n    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    transform: translate3d(0, -30px, 0);\n  }\n  70% {\n    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    transform: translate3d(0, -15px, 0);\n  }\n  90% {\n    transform: translate3d(0, -4px, 0);\n  }\n"])));
var Wrapper = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    var size = theme.size, frame = theme.frame, palette = theme.palette;
    return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      z-index: 1000;\n      display: flex;\n      position: fixed;\n      bottom: ", ";\n      left: ", ";\n      box-sizing: border-box;\n      align-items: center;\n      min-width: ", ";\n      padding: ", ";\n      padding-right: ", ";\n      background-color: #fff;\n      border: 1px solid ", "\n      border-radius: ", ";\n      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),\n        0 2px 1px -1px rgba(0, 0, 0, 0.12);\n      box-sizing: border-box;\n      animation: ", " 1s 0s both;\n\n    "], ["\n      z-index: 1000;\n      display: flex;\n      position: fixed;\n      bottom: ", ";\n      left: ", ";\n      box-sizing: border-box;\n      align-items: center;\n      min-width: ", ";\n      padding: ", ";\n      padding-right: ", ";\n      background-color: #fff;\n      border: 1px solid ", "\n      border-radius: ", ";\n      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),\n        0 2px 1px -1px rgba(0, 0, 0, 0.12);\n      box-sizing: border-box;\n      animation: ", " 1s 0s both;\n\n    "])), size.pxToRem(size.space.XXS), size.pxToRem(size.space.XXS), size.pxToRem(200), size.pxToRem(size.space.XS), size.pxToRem(54), palette.BORDER, frame.border.radius.m, bounceAnimation);
});
var CloseButton = styled(SecondaryButton)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    var size = theme.size;
    return css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      position: absolute;\n      top: 50%;\n      right: ", ";\n      transform: translateY(-50%);\n    "], ["\n      position: absolute;\n      top: 50%;\n      right: ", ";\n      transform: translateY(-50%);\n    "])), size.pxToRem(size.space.XXS));
});
var Txt = styled.p(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    var size = theme.size;
    return css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      flex: 1;\n      padding: 0;\n      margin: 0 0 0 ", ";\n      font-size: ", ";\n      line-height: 1;\n    "], ["\n      flex: 1;\n      padding: 0;\n      margin: 0 0 0 ", ";\n      font-size: ", ";\n      line-height: 1;\n    "])), size.pxToRem(size.space.XXS), size.pxToRem(size.font.TALL));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=FlashMessage.js.map