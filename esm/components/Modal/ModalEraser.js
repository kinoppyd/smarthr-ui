import * as React from 'react';
import { ModalConsumer } from './ModalWrapper';
export var ModalEraser = function (_a) {
    var children = _a.children;
    return (React.createElement(ModalConsumer, null, function (_a) {
        var hideModal = _a.hideModal;
        return React.createElement("div", { onClick: hideModal }, children);
    }));
};
//# sourceMappingURL=ModalEraser.js.map