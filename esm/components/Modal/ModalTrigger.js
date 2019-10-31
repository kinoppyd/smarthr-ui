import * as React from 'react';
import { ModalConsumer } from './ModalWrapper';
export var ModalTrigger = function (_a) {
    var children = _a.children;
    return (React.createElement(ModalConsumer, null, function (_a) {
        var showModal = _a.showModal;
        return React.createElement("div", { onClick: showModal }, children);
    }));
};
//# sourceMappingURL=ModalTrigger.js.map