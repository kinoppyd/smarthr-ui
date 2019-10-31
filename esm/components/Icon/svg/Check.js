import * as React from 'react';
import { withTheme } from '../../../hocs/withTheme';
var CheckIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 16 : _b, color = _a.color, theme = _a.theme;
    return (React.createElement("svg", { width: size + "px", height: size + "px", viewBox: "0 0 100 100" },
        React.createElement("title", null, "check"),
        React.createElement("g", { id: "Check" },
            React.createElement("path", { d: "M100,26.06a6.2,6.2,0,0,1-1.81,4.5L51.48,78.44l-8.77,9a6.1,6.1,0,0,1-8.77,0l-8.78-9L1.81,54.5a6.5,6.5,0,0,1,0-9l8.77-9A5.88,5.88,0,0,1,15,34.66a5.86,5.86,0,0,1,4.38,1.85L38.32,56,80.65,12.57a6.1,6.1,0,0,1,8.77,0l8.77,9A6.19,6.19,0,0,1,100,26.06Z", fill: color ? color : theme.palette.TEXT_GREY, style: { fillRule: 'evenodd' } }))));
};
export var Check = withTheme(CheckIcon);
//# sourceMappingURL=Check.js.map