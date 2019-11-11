import * as React from 'react';
export var AccordionPanelItemContext = React.createContext({
    name: '',
});
export var AccordionPanelItem = function (_a) {
    var children = _a.children, name = _a.name, _b = _a.className, className = _b === void 0 ? '' : _b;
    return (React.createElement(AccordionPanelItemContext.Provider, { value: {
            name: name,
        } },
        React.createElement("div", { className: className }, children)));
};
//# sourceMappingURL=AccordionPanelItem.js.map