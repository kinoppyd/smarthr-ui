import React, { useContext, useEffect } from 'react';
import { render } from 'react-dom';
import { withTheme } from '../../hocs/withTheme';
import { ThemeProvider } from '../../themes/ThemeProvider';
import { DropdownContext } from './Dropdown';
import { DropdownContentInner } from './DropdownContentInner';
export var DropdownContentContext = React.createContext({
    onClickCloser: function () { },
});
export var toggleContentView = function (className, additionalClassName) { return function (active, triggerRect, children, theme, onClickCloser) { return function () {
    if (active) {
        var element = document.createElement('div');
        var classNames = className;
        if (additionalClassName)
            classNames += " " + additionalClassName;
        element.className = classNames;
        render(React.createElement(ThemeProvider, { theme: theme },
            React.createElement(DropdownContentContext.Provider, { value: { onClickCloser: onClickCloser } },
                React.createElement(DropdownContentInner, { triggerRect: triggerRect }, children))), document.body.appendChild(element));
    }
    else {
        var element = document.querySelector("." + className);
        if (element)
            document.body.removeChild(element);
    }
}; }; };
var DropdownContentComponent = function (_a) {
    var theme = _a.theme, children = _a.children;
    var _b = useContext(DropdownContext), key = _b.key, active = _b.active, triggerRect = _b.triggerRect, onClickCloser = _b.onClickCloser;
    useEffect(toggleContentView("dropdown-content-" + key)(active, triggerRect, children, theme, onClickCloser), [active, children, key, onClickCloser]);
    return null;
};
export var DropdownContent = withTheme(DropdownContentComponent);
//# sourceMappingURL=DropdownContent.js.map