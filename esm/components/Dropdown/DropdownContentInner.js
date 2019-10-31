var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { withTheme } from '../../hocs/withTheme';
import { getContentBoxStyle } from './dropdownHelper';
var DropdownContentInnerComponent = function (_a) {
    var triggerRect = _a.triggerRect, theme = _a.theme, children = _a.children;
    var _b = useState(false), isMounted = _b[0], setIsMounted = _b[1];
    var _c = useState({
        top: 'auto',
        left: 'auto',
        maxHeight: '',
    }), contentBox = _c[0], setContentBox = _c[1];
    var wrapperRef = useRef(null);
    useEffect(function () {
        setIsMounted(true);
    }, []);
    useEffect(function () {
        if (isMounted && wrapperRef.current) {
            setContentBox(getContentBoxStyle(triggerRect, {
                width: wrapperRef.current.offsetWidth,
                height: wrapperRef.current.offsetHeight,
            }, {
                width: innerWidth,
                height: innerHeight,
            }, {
                top: pageYOffset,
                left: pageXOffset,
            }));
        }
    }, [isMounted, triggerRect]);
    return (React.createElement(Wrapper, { ref: wrapperRef, contentBox: contentBox, className: isMounted ? 'active' : '', theme: theme }, children));
};
export var DropdownContentInner = withTheme(DropdownContentInnerComponent);
var Wrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var contentBox = _a.contentBox, theme = _a.theme;
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      visibility: hidden;\n      z-index: 99999;\n      position: absolute;\n      top: ", ";\n      left: ", ";\n      border-radius: ", ";\n      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),\n        0 2px 1px -1px rgba(0, 0, 0, 0.12);\n      background-color: #fff;\n      white-space: nowrap;\n\n      &.active {\n        visibility: visible;\n      }\n\n      ", "\n    "], ["\n      visibility: hidden;\n      z-index: 99999;\n      position: absolute;\n      top: ", ";\n      left: ", ";\n      border-radius: ", ";\n      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),\n        0 2px 1px -1px rgba(0, 0, 0, 0.12);\n      background-color: #fff;\n      white-space: nowrap;\n\n      &.active {\n        visibility: visible;\n      }\n\n      ",
        "\n    "])), contentBox.top, contentBox.left, theme.frame.border.radius.m, contentBox.maxHeight
        ? "\n          overflow-y: scroll;\n          max-height: " + contentBox.maxHeight + ";\n      "
        : '');
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=DropdownContentInner.js.map