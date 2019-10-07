export function getRandomStr() {
    var str = 'abcdefghijklmnopqrstuvwxyz';
    var strLen = str.length;
    var result = '';
    for (var i = 0; i < 8; i++) {
        result += str[Math.floor(Math.random() * strLen)];
    }
    return result;
}
export function getParentElementByClassNameRecursively(element, className) {
    if (className === void 0) { className = ''; }
    if (!element)
        return null;
    if (element.classList.contains(className))
        return element;
    if (element === document.body)
        return null;
    return getParentElementByClassNameRecursively(element.parentElement, className);
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