import * as React from 'react';
import { withTheme } from '../../../hocs/withTheme';
var CrossIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 16 : _b, color = _a.color, theme = _a.theme;
    return (React.createElement("svg", { width: size + "px", height: size + "px", viewBox: "0 0 100 100" },
        React.createElement("title", null, "cross"),
        React.createElement("g", { id: "Cross" },
            React.createElement("path", { d: "M60.61,50,97.8,12.8A7.5,7.5,0,1,0,87.2,2.2L50,39.39,12.8,2.2A7.5,7.5,0,0,0,2.2,12.8L39.39,50,2.2,87.2A7.5,7.5,0,1,0,12.8,97.8L50,60.61,87.2,97.8A7.5,7.5,0,0,0,97.8,87.2Z", fill: color ? color : theme.palette.TEXT_GREY }))));
};
export var Cross = withTheme(CrossIcon);
//# sourceMappingURL=Cross.js.map