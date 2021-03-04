/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@deriv/components"), require("@deriv/shared"), require("@deriv/translations"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["@deriv/components", "@deriv/shared", "@deriv/translations", "react"], factory);
	else if(typeof exports === 'object')
		exports["@deriv/account"] = factory(require("@deriv/components"), require("@deriv/shared"), require("@deriv/translations"), require("react"));
	else
		root["@deriv/account"] = factory(root["@deriv/components"], root["@deriv/shared"], root["@deriv/translations"], root["react"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE__deriv_components__, __WEBPACK_EXTERNAL_MODULE__deriv_shared__, __WEBPACK_EXTERNAL_MODULE__deriv_translations__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./Components/currency-selector/radio-button.jsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"../../../node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"@deriv/translations\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_deriv_translations__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(\"@deriv/components\");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_deriv_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(\"@deriv/shared\");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_deriv_shared__WEBPACK_IMPORTED_MODULE_4__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\n\n\n\nvar USTPopover = function USTPopover(_ref) {\n  var id = _ref.id;\n  var popover_message;\n\n  if (/^UST$/i.test(id)) {\n    popover_message = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_2__.Localize, {\n      i18n_default_text: 'Tether on Omnilayer (USDT) is a version of Tether, a digital token issued on blockchains and holds a value pegged to 1 USD at all times.<0 /><0 />USDT is built on the bitcoin blockchain via Omni Layer, a platform for digital assets and currencies that run in the bitcoin network.',\n      components: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", {\n        key: 0\n      })]\n    });\n  } else {\n    popover_message = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_2__.Localize, {\n      i18n_default_text: 'Tether as an ERC20 token (eUSDT) is a version of Tether that is hosted on Ethereum, an open software platform where anyone can build and deploy decentralised applications.'\n    });\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_3__.Popover, {\n    alignment: \"top\",\n    className: \"currency-list__popover\",\n    disable_message_icon: true,\n    icon: \"info\",\n    is_bubble_hover_enabled: true,\n    message: popover_message,\n    zIndex: 9999\n  });\n}; // Radio input\n\n\nvar RadioButton = function RadioButton(_ref2) {\n  var _ref2$field = _ref2.field,\n      name = _ref2$field.name,\n      value = _ref2$field.value,\n      onChange = _ref2$field.onChange,\n      onBlur = _ref2$field.onBlur,\n      id = _ref2.id,\n      label = _ref2.label,\n      className = _ref2.className,\n      props = _objectWithoutProperties(_ref2, [\"field\", \"id\", \"label\", \"className\"]);\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", _extends({\n    name: name,\n    id: id,\n    type: \"radio\",\n    value: id // could be something else for output?\n    ,\n    checked: id === value,\n    onChange: onChange,\n    onBlur: onBlur,\n    disabled: props.selected,\n    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('currency-list__radio-button')\n  }, props)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: id,\n    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('currency-list__item', {\n      'currency-list__item--selected': id === value,\n      'currency-list__item--current': props.selected\n    })\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {\n    className: \"currency-list__icon\",\n    icon: \"IcCurrency-\".concat(id.toLowerCase())\n  }), /^(UST|eUSDT)$/i.test(id) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(USTPopover, {\n    id: id\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"label currency-list__item-text\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"currency-list__item-label\"\n  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"currency-list__item-code\"\n  }, \"(\", (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_4__.getCurrencyDisplayCode)(id), \")\"))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RadioButton);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL2N1cnJlbmN5LXNlbGVjdG9yL3JhZGlvLWJ1dHRvbi5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvYWNjb3VudC8uL0NvbXBvbmVudHMvY3VycmVuY3ktc2VsZWN0b3IvcmFkaW8tYnV0dG9uLmpzeD9lODE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IExvY2FsaXplIH0gZnJvbSAnQGRlcml2L3RyYW5zbGF0aW9ucyc7XG5pbXBvcnQgeyBQb3BvdmVyLCBJY29uIH0gZnJvbSAnQGRlcml2L2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgZ2V0Q3VycmVuY3lEaXNwbGF5Q29kZSB9IGZyb20gJ0BkZXJpdi9zaGFyZWQnO1xuXG5jb25zdCBVU1RQb3BvdmVyID0gKHsgaWQgfSkgPT4ge1xuICAgIGxldCBwb3BvdmVyX21lc3NhZ2U7XG4gICAgaWYgKC9eVVNUJC9pLnRlc3QoaWQpKSB7XG4gICAgICAgIHBvcG92ZXJfbWVzc2FnZSA9IChcbiAgICAgICAgICAgIDxMb2NhbGl6ZVxuICAgICAgICAgICAgICAgIGkxOG5fZGVmYXVsdF90ZXh0PXtcbiAgICAgICAgICAgICAgICAgICAgJ1RldGhlciBvbiBPbW5pbGF5ZXIgKFVTRFQpIGlzIGEgdmVyc2lvbiBvZiBUZXRoZXIsIGEgZGlnaXRhbCB0b2tlbiBpc3N1ZWQgb24gYmxvY2tjaGFpbnMgYW5kIGhvbGRzIGEgdmFsdWUgcGVnZ2VkIHRvIDEgVVNEIGF0IGFsbCB0aW1lcy48MCAvPjwwIC8+VVNEVCBpcyBidWlsdCBvbiB0aGUgYml0Y29pbiBibG9ja2NoYWluIHZpYSBPbW5pIExheWVyLCBhIHBsYXRmb3JtIGZvciBkaWdpdGFsIGFzc2V0cyBhbmQgY3VycmVuY2llcyB0aGF0IHJ1biBpbiB0aGUgYml0Y29pbiBuZXR3b3JrLidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cz17WzxiciBrZXk9ezB9IC8+XX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcG9wb3Zlcl9tZXNzYWdlID0gKFxuICAgICAgICAgICAgPExvY2FsaXplXG4gICAgICAgICAgICAgICAgaTE4bl9kZWZhdWx0X3RleHQ9e1xuICAgICAgICAgICAgICAgICAgICAnVGV0aGVyIGFzIGFuIEVSQzIwIHRva2VuIChlVVNEVCkgaXMgYSB2ZXJzaW9uIG9mIFRldGhlciB0aGF0IGlzIGhvc3RlZCBvbiBFdGhlcmV1bSwgYW4gb3BlbiBzb2Z0d2FyZSBwbGF0Zm9ybSB3aGVyZSBhbnlvbmUgY2FuIGJ1aWxkIGFuZCBkZXBsb3kgZGVjZW50cmFsaXNlZCBhcHBsaWNhdGlvbnMuJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFBvcG92ZXJcbiAgICAgICAgICAgIGFsaWdubWVudD0ndG9wJ1xuICAgICAgICAgICAgY2xhc3NOYW1lPSdjdXJyZW5jeS1saXN0X19wb3BvdmVyJ1xuICAgICAgICAgICAgZGlzYWJsZV9tZXNzYWdlX2ljb25cbiAgICAgICAgICAgIGljb249J2luZm8nXG4gICAgICAgICAgICBpc19idWJibGVfaG92ZXJfZW5hYmxlZFxuICAgICAgICAgICAgbWVzc2FnZT17cG9wb3Zlcl9tZXNzYWdlfVxuICAgICAgICAgICAgekluZGV4PXs5OTk5fVxuICAgICAgICAvPlxuICAgICk7XG59O1xuXG4vLyBSYWRpbyBpbnB1dFxuY29uc3QgUmFkaW9CdXR0b24gPSAoeyBmaWVsZDogeyBuYW1lLCB2YWx1ZSwgb25DaGFuZ2UsIG9uQmx1ciB9LCBpZCwgbGFiZWwsIGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgICAgIHR5cGU9J3JhZGlvJ1xuICAgICAgICAgICAgICAgIHZhbHVlPXtpZH0gLy8gY291bGQgYmUgc29tZXRoaW5nIGVsc2UgZm9yIG91dHB1dD9cbiAgICAgICAgICAgICAgICBjaGVja2VkPXtpZCA9PT0gdmFsdWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgICAgIG9uQmx1cj17b25CbHVyfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtwcm9wcy5zZWxlY3RlZH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2N1cnJlbmN5LWxpc3RfX3JhZGlvLWJ1dHRvbicpfVxuICAgICAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICBodG1sRm9yPXtpZH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2N1cnJlbmN5LWxpc3RfX2l0ZW0nLCB7XG4gICAgICAgICAgICAgICAgICAgICdjdXJyZW5jeS1saXN0X19pdGVtLS1zZWxlY3RlZCc6IGlkID09PSB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgJ2N1cnJlbmN5LWxpc3RfX2l0ZW0tLWN1cnJlbnQnOiBwcm9wcy5zZWxlY3RlZCxcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9J2N1cnJlbmN5LWxpc3RfX2ljb24nIGljb249e2BJY0N1cnJlbmN5LSR7aWQudG9Mb3dlckNhc2UoKX1gfSAvPlxuICAgICAgICAgICAgICAgIHsvXihVU1R8ZVVTRFQpJC9pLnRlc3QoaWQpICYmIDxVU1RQb3BvdmVyIGlkPXtpZH0gLz59XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xhYmVsIGN1cnJlbmN5LWxpc3RfX2l0ZW0tdGV4dCc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjdXJyZW5jeS1saXN0X19pdGVtLWxhYmVsJz57bGFiZWx9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjdXJyZW5jeS1saXN0X19pdGVtLWNvZGUnPih7Z2V0Q3VycmVuY3lEaXNwbGF5Q29kZShpZCl9KTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmFkaW9CdXR0b247XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUdBO0FBQUE7QUFBQTtBQUpBO0FBT0E7QUFDQTtBQUVBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/currency-selector/radio-button.jsx\n");

/***/ }),

/***/ "../../../node_modules/classnames/index.js":
/***/ ((module, exports) => {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n  Copyright (c) 2017 Jed Watson.\n  Licensed under the MIT License (MIT), see\n  http://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\n\tfunction classNames () {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg) && arg.length) {\n\t\t\t\tvar inner = classNames.apply(null, arg);\n\t\t\t\tif (inner) {\n\t\t\t\t\tclasses.push(inner);\n\t\t\t\t}\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tfor (var key in arg) {\n\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif ( true && module.exports) {\n\t\tclassNames.default = classNames;\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n}());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvYWNjb3VudC8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcz8zZGNkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTcgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykgJiYgYXJnLmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQSxVQUVBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../../node_modules/classnames/index.js\n");

/***/ }),

/***/ "@deriv/components":
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_components__;

/***/ }),

/***/ "@deriv/shared":
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_shared__;

/***/ }),

/***/ "@deriv/translations":
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_translations__;

/***/ }),

/***/ "react":
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./Components/currency-selector/radio-button.jsx");
/******/ })()
.default;
});