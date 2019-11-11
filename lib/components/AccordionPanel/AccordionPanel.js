"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var accordionPanelHelper_1 = require("./accordionPanelHelper");
var map_1 = require("../../libs/map");
exports.AccordionPanelContext = react_1.default.createContext({
    iconPosition: 'left',
    displayIcon: true,
    expandedItems: new Map(),
    expandableMultiply: false,
    onClickTrigger: function () { },
    onClickProps: function () { },
});
exports.AccordionPanel = function (_a) {
    var children = _a.children, _b = _a.iconPosition, iconPosition = _b === void 0 ? 'left' : _b, _c = _a.displayIcon, displayIcon = _c === void 0 ? true : _c, _d = _a.expandableMultiply, expandableMultiply = _d === void 0 ? false : _d, _e = _a.defaultExpanded, defaultExpanded = _e === void 0 ? [] : _e, _f = _a.className, className = _f === void 0 ? '' : _f, onClickProps = _a.onClick;
    var _g = react_1.useState(new Map(map_1.flatArrayToMap(defaultExpanded))), expandedItems = _g[0], setExpanded = _g[1];
    var onClickTrigger = react_1.useCallback(function (itemName, isExpanded) {
        setExpanded(accordionPanelHelper_1.getNewExpandedItems(expandedItems, itemName, isExpanded, expandableMultiply));
    }, [expandableMultiply, expandedItems]);
    return (react_1.default.createElement(exports.AccordionPanelContext.Provider, { value: {
            onClickTrigger: onClickTrigger,
            onClickProps: onClickProps,
            expandedItems: expandedItems,
            iconPosition: iconPosition,
            displayIcon: displayIcon,
            expandableMultiply: expandableMultiply,
        } },
        react_1.default.createElement("div", { className: className }, children)));
};
//# sourceMappingURL=AccordionPanel.js.map