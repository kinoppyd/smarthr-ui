"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var DialogWrapper_1 = require("./DialogWrapper");
var DialogContentInner_1 = require("./DialogContentInner");
var MessageDialogContentInner_1 = require("./MessageDialogContentInner");
exports.MessageDialogContent = function (_a) {
    var title = _a.title, description = _a.description, closeText = _a.closeText, props = __rest(_a, ["title", "description", "closeText"]);
    var _b = react_1.useContext(DialogWrapper_1.DialogContext), DialogContentRoot = _b.DialogContentRoot, onClickClose = _b.onClickClose;
    return (react_1.default.createElement(DialogContentRoot, null,
        react_1.default.createElement(DialogContentInner_1.DialogContentInner, __assign({ onClickOverlay: onClickClose }, props),
            react_1.default.createElement(MessageDialogContentInner_1.MessageDialogContentInner, { title: title, description: description, closeText: closeText, onClickClose: onClickClose }))));
};
//# sourceMappingURL=MessageDialogContent.js.map