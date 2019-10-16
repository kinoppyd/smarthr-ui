import { useContext, useEffect } from 'react';
import { withTheme } from '../../hocs/withTheme';
import { DropdownContext } from './Dropdown';
import { toggleContentView } from './DropdownContent';
var DropdownControllableContentComponent = function (_a) {
    var theme = _a.theme, children = _a.children;
    var _b = useContext(DropdownContext), key = _b.key, active = _b.active, triggerRect = _b.triggerRect, onClickCloser = _b.onClickCloser;
    useEffect(toggleContentView("dropdown-content-" + key, "dropdown-trigger-" + key)(active, triggerRect, children, theme, onClickCloser), [active, children, key, onClickCloser]);
    return null;
};
export var DropdownControllableContent = withTheme(DropdownControllableContentComponent);
//# sourceMappingURL=DropdownControllableContent.js.map