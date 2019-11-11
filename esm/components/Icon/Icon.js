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
import * as React from 'react';
import { FaAddressBook, FaAddressCard, FaAngleDoubleDown, FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleDown, FaAngleLeft, FaAngleRight, FaArrowCircleDown, FaArrowDown, FaBirthdayCake, FaBuilding, FaCalendarAlt, FaCaretDown, FaCaretUp, FaChartArea, FaChartBar, FaChartLine, FaChartPie, FaCheck, FaCheckCircle, FaChevronLeft, FaChevronRight, FaClone, FaCloudDownloadAlt, FaCog, FaDatabase, FaEllipsisH, FaEnvelope, FaExclamationCircle, FaExclamationTriangle, FaExternalLinkAlt, FaEye, FaFile, FaFileAlt, FaFileArchive, FaFileDownload, FaFileExport, FaFileImport, FaFileUpload, FaFilter, FaFont, FaGripVertical, FaInfoCircle, FaLock, FaLockOpen, FaMinus, FaPaperPlane, FaPencilAlt, FaPlus, FaPlusCircle, FaQuestionCircle, FaRegCalendarCheck, FaRegChartBar, FaRegImage, FaReply, FaSearch, FaSlidersH, FaSort, FaSyncAlt, FaTable, FaThList, FaTimes, FaUserAlt, FaUserCircle, FaUsers, FaUndo, } from 'react-icons/fa';
export var iconMap = {
    'fa-address-book': FaAddressBook,
    'fa-address-card': FaAddressCard,
    'fa-angle-double-down': FaAngleDoubleDown,
    'fa-angle-double-left': FaAngleDoubleLeft,
    'fa-angle-double-right': FaAngleDoubleRight,
    'fa-angle-down': FaAngleDown,
    'fa-angle-left': FaAngleLeft,
    'fa-angle-right': FaAngleRight,
    'fa-arrow-circle-down': FaArrowCircleDown,
    'fa-arrow-down': FaArrowDown,
    'fa-birthday-cake': FaBirthdayCake,
    'fa-building': FaBuilding,
    'fa-calendar-alt': FaCalendarAlt,
    'fa-caret-down': FaCaretDown,
    'fa-caret-up': FaCaretUp,
    'fa-chart-area': FaChartArea,
    'fa-chart-bar': FaChartBar,
    'fa-chart-line': FaChartLine,
    'fa-chart-pie': FaChartPie,
    'fa-check': FaCheck,
    'fa-check-circle': FaCheckCircle,
    'fa-chevron-left': FaChevronLeft,
    'fa-chevron-right': FaChevronRight,
    'fa-clone': FaClone,
    'fa-cloud-download-alt': FaCloudDownloadAlt,
    'fa-cog': FaCog,
    'fa-database': FaDatabase,
    'fa-ellipsis-h': FaEllipsisH,
    'fa-envelope': FaEnvelope,
    'fa-exclamation-circle': FaExclamationCircle,
    'fa-exclamation-triangle': FaExclamationTriangle,
    'fa-external-link-alt': FaExternalLinkAlt,
    'fa-eye': FaEye,
    'fa-file': FaFile,
    'fa-file-alt': FaFileAlt,
    'fa-file-archive': FaFileArchive,
    'fa-file-download': FaFileDownload,
    'fa-file-export': FaFileExport,
    'fa-file-import': FaFileImport,
    'fa-file-upload': FaFileUpload,
    'fa-filter': FaFilter,
    'fa-font': FaFont,
    'fa-grip-vertical': FaGripVertical,
    'fa-info-circle': FaInfoCircle,
    'fa-lock': FaLock,
    'fa-lock-open': FaLockOpen,
    'fa-minus': FaMinus,
    'fa-paper-plane': FaPaperPlane,
    'fa-pencil-alt': FaPencilAlt,
    'fa-plus': FaPlus,
    'fa-plus-circle': FaPlusCircle,
    'fa-question-circle': FaQuestionCircle,
    'fa-reg-calendar-check': FaRegCalendarCheck,
    'fa-reg-chart-bar': FaRegChartBar,
    'fa-reg-image': FaRegImage,
    'fa-reply': FaReply,
    'fa-search': FaSearch,
    'fa-sliders-h': FaSlidersH,
    'fa-sort': FaSort,
    'fa-sync-alt': FaSyncAlt,
    'fa-table': FaTable,
    'fa-th-list': FaThList,
    'fa-times': FaTimes,
    'fa-user-alt': FaUserAlt,
    'fa-user-circle': FaUserCircle,
    'fa-users': FaUsers,
    'fa-undo': FaUndo,
};
export var Icon = function (_a) {
    var name = _a.name, _b = _a.className, className = _b === void 0 ? '' : _b, props = __rest(_a, ["name", "className"]);
    var SvgIcon = iconMap[name];
    return React.createElement(SvgIcon, __assign({ className: className }, props));
};
//# sourceMappingURL=Icon.js.map