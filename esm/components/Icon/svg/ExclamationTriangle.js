import * as React from 'react';
import { withTheme } from '../../../hocs/withTheme';
var ExclamationTriangleIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 16 : _b, color = _a.color, theme = _a.theme;
    return (React.createElement("svg", { width: size + "px", height: size + "px", viewBox: "0 0 100 100" },
        React.createElement("title", null, "exclamation triangle"),
        React.createElement("g", { id: "Exclamation_Triangle" },
            React.createElement("path", { d: "M98.72,80.6l-40-70.79a9.74,9.74,0,0,0-16.93,0L1.3,80.57A9.73,9.73,0,0,0,9.75,95.13h80.5A9.73,9.73,0,0,0,98.72,80.6ZM45,36.33a5,5,0,0,1,10,0V58.67a5,5,0,0,1-10,0Zm5.11,43.82a5.62,5.62,0,1,1,5.61-5.62A5.62,5.62,0,0,1,50.11,80.15Z", fill: color ? color : theme.palette.TEXT_GREY, style: { fillRule: 'evenodd' } }))));
};
export var ExclamationTriangle = withTheme(ExclamationTriangleIcon);
//# sourceMappingURL=ExclamationTriangle.js.map