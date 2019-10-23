export function hasParentElement(element, parent) {
    if (!element)
        return false;
    return element === parent || hasParentElement(element.parentElement, parent);
}
export function getContentPositionStyle(triggerRect, contentSize, windowSize, scroll) {
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
//# sourceMappingURL=dropdownHelper.js.map