"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hasParentElement(element, parent) {
    if (!element)
        return false;
    return element === parent || hasParentElement(element.parentElement, parent);
}
exports.hasParentElement = hasParentElement;
function getContentBoxStyle(triggerRect, contentSize, windowSize, scroll) {
    var contentBox = {
        top: 'auto',
        left: 'auto',
        maxHeight: '',
    };
    if (triggerRect.bottom + contentSize.height <= windowSize.height) {
        contentBox.top = scroll.top + triggerRect.bottom + "px";
    }
    else if (triggerRect.top - contentSize.height >= 0) {
        contentBox.top = scroll.top + triggerRect.top - contentSize.height + "px";
    }
    else {
        var padding = 10;
        if (triggerRect.top + (triggerRect.bottom - triggerRect.top) / 2 < windowSize.height / 2) {
            contentBox.top = scroll.top + triggerRect.bottom + "px";
            contentBox.maxHeight = windowSize.height - triggerRect.bottom - padding + "px";
        }
        else {
            contentBox.top = scroll.top + padding + "px";
            contentBox.maxHeight = triggerRect.top - padding + "px";
        }
    }
    var triggerAlignCenter = triggerRect.left + (triggerRect.right - triggerRect.left) / 2;
    if (triggerAlignCenter <= windowSize.width / 2) {
        contentBox.left = scroll.left + triggerRect.left + "px";
    }
    else if (triggerAlignCenter >= windowSize.width / 2) {
        contentBox.left = scroll.left + triggerRect.right - contentSize.width + "px";
    }
    else {
        contentBox.left = scroll.left + triggerRect.left + "px";
    }
    return contentBox;
}
exports.getContentBoxStyle = getContentBoxStyle;
//# sourceMappingURL=dropdownHelper.js.map