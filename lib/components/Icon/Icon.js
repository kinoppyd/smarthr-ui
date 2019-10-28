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
var React = __importStar(require("react"));
var fa_1 = require("react-icons/fa");
exports.iconMap = {
    'fa-address-book': fa_1.FaAddressBook,
    'fa-address-card': fa_1.FaAddressCard,
    'fa-angle-double-down': fa_1.FaAngleDoubleDown,
    'fa-angle-double-left': fa_1.FaAngleDoubleLeft,
    'fa-angle-double-right': fa_1.FaAngleDoubleRight,
    'fa-angle-down': fa_1.FaAngleDown,
    'fa-angle-left': fa_1.FaAngleLeft,
    'fa-angle-right': fa_1.FaAngleRight,
    'fa-arrow-circle-down': fa_1.FaArrowCircleDown,
    'fa-arrow-down': fa_1.FaArrowDown,
    'fa-birthday-cake': fa_1.FaBirthdayCake,
    'fa-building': fa_1.FaBuilding,
    'fa-calendar-alt': fa_1.FaCalendarAlt,
    'fa-caret-down': fa_1.FaCaretDown,
    'fa-caret-up': fa_1.FaCaretUp,
    'fa-chart-area': fa_1.FaChartArea,
    'fa-chart-bar': fa_1.FaChartBar,
    'fa-chart-line': fa_1.FaChartLine,
    'fa-chart-pie': fa_1.FaChartPie,
    'fa-check': fa_1.FaCheck,
    'fa-check-circle': fa_1.FaCheckCircle,
    'fa-chevron-left': fa_1.FaChevronLeft,
    'fa-chevron-right': fa_1.FaChevronRight,
    'fa-clone': fa_1.FaClone,
    'fa-cloud-download-alt': fa_1.FaCloudDownloadAlt,
    'fa-cog': fa_1.FaCog,
    'fa-databas': fa_1.FaDatabase,
    'fa-ellipsis-h': fa_1.FaEllipsisH,
    'fa-envelope': fa_1.FaEnvelope,
    'fa-exclamation-circle': fa_1.FaExclamationCircle,
    'fa-exclamation-triangle': fa_1.FaExclamationTriangle,
    'fa-external-link-alt': fa_1.FaExternalLinkAlt,
    'fa-eye': fa_1.FaEye,
    'fa-file': fa_1.FaFile,
    'fa-file-alt': fa_1.FaFileAlt,
    'fa-file-archive': fa_1.FaFileArchive,
    'fa-file-download': fa_1.FaFileDownload,
    'fa-file-export': fa_1.FaFileExport,
    'fa-file-import': fa_1.FaFileImport,
    'fa-file-upload': fa_1.FaFileUpload,
    'fa-filter': fa_1.FaFilter,
    'fa-font': fa_1.FaFont,
    'fa-grip-vertical': fa_1.FaGripVertical,
    'fa-info-circle': fa_1.FaInfoCircle,
    'fa-lock': fa_1.FaLock,
    'fa-lock-open': fa_1.FaLockOpen,
    'fa-minus': fa_1.FaMinus,
    'fa-paper-plane': fa_1.FaPaperPlane,
    'fa-pencil-alt': fa_1.FaPencilAlt,
    'fa-plus': fa_1.FaPlus,
    'fa-plus-circle': fa_1.FaPlusCircle,
    'fa-question-circle': fa_1.FaQuestionCircle,
    'fa-reg-calendar-check': fa_1.FaRegCalendarCheck,
    'fa-reg-chart-bar': fa_1.FaRegChartBar,
    'fa-reg-image': fa_1.FaRegImage,
    'fa-reply': fa_1.FaReply,
    'fa-search': fa_1.FaSearch,
    'fa-sliders-h': fa_1.FaSlidersH,
    'fa-sort': fa_1.FaSort,
    'fa-sync-alt': fa_1.FaSyncAlt,
    'fa-table': fa_1.FaTable,
    'fa-th-list': fa_1.FaThList,
    'fa-times': fa_1.FaTimes,
    'fa-user-alt': fa_1.FaUserAlt,
    'fa-user-circle': fa_1.FaUserCircle,
    'fa-users': fa_1.FaUsers,
};
exports.Icon = function (_a) {
    var name = _a.name, _b = _a.className, className = _b === void 0 ? '' : _b, props = __rest(_a, ["name", "className"]);
    var SvgIcon = exports.iconMap[name];
    return React.createElement(SvgIcon, __assign({ className: className }, props));
};
//# sourceMappingURL=Icon.js.map