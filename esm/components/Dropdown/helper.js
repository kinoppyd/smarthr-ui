export function getRandomStr() {
    var str = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var strLen = str.length;
    var result = '';
    for (var i = 0; i < 8; i++) {
        result += str[Math.floor(Math.random() * strLen)];
    }
    return result;
}
export function getParentElementRecursively(element, className) {
    if (className === void 0) { className = ''; }
    if (!element)
        return null;
    if (element.classList.contains(className))
        return element;
    if (element === document.body)
        return null;
    return getParentElementRecursively(element.parentElement, className);
}
//# sourceMappingURL=helper.js.map