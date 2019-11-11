var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { useContext, useCallback } from 'react';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';
import { withTheme } from '../../hocs/withTheme';
import { AccordionPanelItemContext } from './AccordionPanelItem';
import { AccordionPanelContext } from './AccordionPanel';
import { getIsInclude } from '../../libs/map';
var AccordionPanelContentComponent = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b;
    var name = useContext(AccordionPanelItemContext).name;
    var expandedItems = useContext(AccordionPanelContext).expandedItems;
    var wrapperRef = React.useRef(null);
    var handleEntering = useCallback(function (node) {
        var wrapperHeight = wrapperRef.current ? wrapperRef.current.clientHeight : 0;
        node.style.height = wrapperHeight + "px";
    }, [wrapperRef]);
    var handleEnterd = function (node) {
        node.style.height = 'auto';
    };
    var handleExit = useCallback(function (node) {
        var wrapperHeight = wrapperRef.current ? wrapperRef.current.clientHeight : 0;
        node.style.height = wrapperHeight + "px";
    }, [wrapperRef]);
    var handleExiting = useCallback(function (node) {
        var wrapperHeight = wrapperRef.current ? wrapperRef.current.clientHeight : 0;
        node.style.height = wrapperHeight + "px";
    }, [wrapperRef]);
    var handleExited = function (node) {
        node.style.height = '0px';
    };
    return (React.createElement(Transition, { in: getIsInclude(expandedItems, name), onEntering: handleEntering, onEntered: handleEnterd, onExit: handleExit, onExiting: handleExiting, onExited: handleExited, timeout: {
            enter: 300,
            exit: 0,
        } }, function (status) { return (React.createElement(CollapseContainer, { id: name + "-content", className: status + " " + className, "aria-labelledby": name + "-trigger", "aria-hidden": !getIsInclude(expandedItems, name) },
        React.createElement("div", { ref: wrapperRef }, children))); }));
};
export var AccordionPanelContent = withTheme(AccordionPanelContentComponent);
var CollapseContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 0;\n  overflow: hidden;\n  transition: height 0.3s ease;\n\n  &.entered {\n    height: auto;\n  }\n"], ["\n  height: 0;\n  overflow: hidden;\n  transition: height 0.3s ease;\n\n  &.entered {\n    height: auto;\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=AccordionPanelContent.js.map