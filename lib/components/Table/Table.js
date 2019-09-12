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
var React = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var withTheme_1 = require("../../hocs/withTheme");
exports.TableGroupContext = React.createContext({
    group: 'body',
});
var TableComponent = function (_a) {
    var theme = _a.theme, children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b;
    return (React.createElement(Wrapper, { theme: theme, className: className }, children));
};
exports.Table = withTheme_1.withTheme(TableComponent);
var Wrapper = styled_components_1.default.table(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n\n  & > thead > tr > th {\n    background-color: ", ";\n  }\n"], ["\n  ",
    "\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n\n  & > thead > tr > th {\n    background-color: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return "\n    background-color: " + theme.palette.COLUMN + ";\n  ";
}, function (_a) {
    var theme = _a.theme;
    return theme.palette.COLUMN;
});
var templateObject_1;
//# sourceMappingURL=Table.js.map