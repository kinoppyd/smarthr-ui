import React, { useCallback, useState } from 'react';
import { getNewExpandedItems } from './accordionPanelHelper';
import { flatArrayToMap } from '../../libs/map';
export var AccordionPanelContext = React.createContext({
    iconPosition: 'left',
    displayIcon: true,
    expandedItems: new Map(),
    expandableMultiply: false,
    onClickTrigger: function () { },
    onClickProps: function () { },
});
export var AccordionPanel = function (_a) {
    var children = _a.children, _b = _a.iconPosition, iconPosition = _b === void 0 ? 'left' : _b, _c = _a.displayIcon, displayIcon = _c === void 0 ? true : _c, _d = _a.expandableMultiply, expandableMultiply = _d === void 0 ? false : _d, _e = _a.defaultExpanded, defaultExpanded = _e === void 0 ? [] : _e, _f = _a.className, className = _f === void 0 ? '' : _f, onClickProps = _a.onClick;
    var _g = useState(new Map(flatArrayToMap(defaultExpanded))), expandedItems = _g[0], setExpanded = _g[1];
    var onClickTrigger = useCallback(function (itemName, isExpanded) {
        setExpanded(getNewExpandedItems(expandedItems, itemName, isExpanded, expandableMultiply));
    }, [expandableMultiply, expandedItems]);
    return (React.createElement(AccordionPanelContext.Provider, { value: {
            onClickTrigger: onClickTrigger,
            onClickProps: onClickProps,
            expandedItems: expandedItems,
            iconPosition: iconPosition,
            displayIcon: displayIcon,
            expandableMultiply: expandableMultiply,
        } },
        React.createElement("div", { className: className }, children)));
};
//# sourceMappingURL=AccordionPanel.js.map