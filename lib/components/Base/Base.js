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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var BaseComponent = function (_a) {
    var _b = _a.radius, radius = _b === void 0 ? 'm' : _b, children = _a.children, _c = _a.className, className = _c === void 0 ? '' : _c;
    var radiusMap = {
        s: '6px',
        m: '8px',
    };
    return (React.createElement(Wrapper, { radius: radiusMap[radius], className: className }, children));
};
var Wrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var radius = _a.radius;
    return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      border-radius: ", ";\n      box-shadow: rgba(51, 51, 51, 0.3) 1px 1px 4px 0;\n      overflow: hidden;\n    "], ["\n      border-radius: ", ";\n      box-shadow: rgba(51, 51, 51, 0.3) 1px 1px 4px 0;\n      overflow: hidden;\n    "])), radius);
});
exports.Base = BaseComponent;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Base.js.map