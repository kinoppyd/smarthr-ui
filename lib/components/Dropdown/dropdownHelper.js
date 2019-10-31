"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hasParentElement(element, parent) {
    if (!element)
        return false;
    return element === parent || hasParentElement(element.parentElement, parent);
}
exports.hasParentElement = hasParentElement;
function getContentPositionStyle(triggerRect, contentSize, windowSize, scroll) {
    var position = {
        top: 'auto',
        left: 'auto',
    };
    if (triggerRect.bottom + contentSize.height <= windowSize.height) {
        position.top = scroll.top + triggerRect.bottom + "px";
    }
    else {
        position.top = scroll.top + triggerRect.top - contentSize.height + "px";
    }
    if (triggerRect.left + (triggerRect.right - triggerRect.left) / 2 <= windowSize.width / 2) {
        position.left = scroll.left + triggerRect.left + "px";
    }
    else {
        position.left = scroll.left + triggerRect.right - contentSize.width + "px";
    }
    return position;
}
exports.getContentPositionStyle = getContentPositionStyle;
//# sourceMappingURL=dropdownHelper.js.map