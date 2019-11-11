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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var react_transition_group_1 = require("react-transition-group");
var withTheme_1 = require("../../hocs/withTheme");
var AccordionPanelItem_1 = require("./AccordionPanelItem");
var AccordionPanel_1 = require("./AccordionPanel");
var map_1 = require("../../libs/map");
var AccordionPanelContentComponent = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b;
    var name = react_1.useContext(AccordionPanelItem_1.AccordionPanelItemContext).name;
    var expandedItems = react_1.useContext(AccordionPanel_1.AccordionPanelContext).expandedItems;
    var wrapperRef = react_1.default.useRef(null);
    var handleEntering = react_1.useCallback(function (node) {
        var wrapperHeight = wrapperRef.current ? wrapperRef.current.clientHeight : 0;
        node.style.height = wrapperHeight + "px";
    }, [wrapperRef]);
    var handleEnterd = function (node) {
        node.style.height = 'auto';
    };
    var handleExit = react_1.useCallback(function (node) {
        var wrapperHeight = wrapperRef.current ? wrapperRef.current.clientHeight : 0;
        node.style.height = wrapperHeight + "px";
    }, [wrapperRef]);
    var handleExiting = react_1.useCallback(function (node) {
        var wrapperHeight = wrapperRef.current ? wrapperRef.current.clientHeight : 0;
        node.style.height = wrapperHeight + "px";
    }, [wrapperRef]);
    var handleExited = function (node) {
        node.style.height = '0px';
    };
    return (react_1.default.createElement(react_transition_group_1.Transition, { in: map_1.getIsInclude(expandedItems, name), onEntering: handleEntering, onEntered: handleEnterd, onExit: handleExit, onExiting: handleExiting, onExited: handleExited, timeout: {
            enter: 300,
            exit: 0,
        } }, function (status) { return (react_1.default.createElement(CollapseContainer, { id: name + "-content", className: status + " " + className, "aria-labelledby": name + "-trigger", "aria-hidden": !map_1.getIsInclude(expandedItems, name) },
        react_1.default.createElement("div", { ref: wrapperRef }, children))); }));
};
exports.AccordionPanelContent = withTheme_1.withTheme(AccordionPanelContentComponent);
var CollapseContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 0;\n  overflow: hidden;\n  transition: height 0.3s ease;\n\n  &.entered {\n    height: auto;\n  }\n"], ["\n  height: 0;\n  overflow: hidden;\n  transition: height 0.3s ease;\n\n  &.entered {\n    height: auto;\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=AccordionPanelContent.js.map