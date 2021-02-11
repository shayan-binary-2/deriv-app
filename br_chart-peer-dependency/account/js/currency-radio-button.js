(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@deriv/components"), require("@deriv/shared"), require("@deriv/translations"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["@deriv/components", "@deriv/shared", "@deriv/translations", "react"], factory);
	else if(typeof exports === 'object')
		exports["@deriv/account"] = factory(require("@deriv/components"), require("@deriv/shared"), require("@deriv/translations"), require("react"));
	else
		root["@deriv/account"] = factory(root["@deriv/components"], root["@deriv/shared"], root["@deriv/translations"], root["react"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__deriv_components__, __WEBPACK_EXTERNAL_MODULE__deriv_shared__, __WEBPACK_EXTERNAL_MODULE__deriv_translations__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./Components/currency-selector/radio-button.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../node_modules/classnames/index.js":
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n  Copyright (c) 2017 Jed Watson.\n  Licensed under the MIT License (MIT), see\n  http://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\n\tfunction classNames () {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg) && arg.length) {\n\t\t\t\tvar inner = classNames.apply(null, arg);\n\t\t\t\tif (inner) {\n\t\t\t\t\tclasses.push(inner);\n\t\t\t\t}\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tfor (var key in arg) {\n\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif ( true && module.exports) {\n\t\tclassNames.default = classNames;\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n}());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvYWNjb3VudC8vdmFyL3d3dy9kZXJpdi1hcHAvbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanM/YmE4NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE3IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpICYmIGFyZy5sZW5ndGgpIHtcblx0XHRcdFx0dmFyIGlubmVyID0gY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXHRcdFx0XHRpZiAoaW5uZXIpIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goaW5uZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRjbGFzc05hbWVzLmRlZmF1bHQgPSBjbGFzc05hbWVzO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0EsVUFFQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../../node_modules/classnames/index.js\n");

/***/ }),

/***/ "./Components/currency-selector/radio-button.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"../../../node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"@deriv/translations\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_deriv_translations__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(\"@deriv/components\");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_deriv_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(\"@deriv/shared\");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_deriv_shared__WEBPACK_IMPORTED_MODULE_4__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\n\n\n\nvar USTPopover = function USTPopover(_ref) {\n  var id = _ref.id;\n  var popover_message;\n\n  if (/^UST$/i.test(id)) {\n    popover_message = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_2__[\"Localize\"], {\n      i18n_default_text: 'Tether on Omnilayer (USDT) is a version of Tether, a digital token issued on blockchains and holds a value pegged to 1 USD at all times.<0 /><0 />USDT is built on the bitcoin blockchain via Omni Layer, a platform for digital assets and currencies that run in the bitcoin network.',\n      components: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", {\n        key: 0\n      })]\n    });\n  } else {\n    popover_message = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_2__[\"Localize\"], {\n      i18n_default_text: 'Tether as an ERC20 token (eUSDT) is a version of Tether that is hosted on Ethereum, an open software platform where anyone can build and deploy decentralised applications.'\n    });\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_3__[\"Popover\"], {\n    alignment: \"top\",\n    icon: \"info\",\n    disable_message_icon: true,\n    zIndex: 9999,\n    className: \"currency-list__popover\",\n    message: popover_message\n  });\n}; // Radio input\n\n\nvar RadioButton = function RadioButton(_ref2) {\n  var _ref2$field = _ref2.field,\n      name = _ref2$field.name,\n      value = _ref2$field.value,\n      onChange = _ref2$field.onChange,\n      onBlur = _ref2$field.onBlur,\n      id = _ref2.id,\n      label = _ref2.label,\n      className = _ref2.className,\n      props = _objectWithoutProperties(_ref2, [\"field\", \"id\", \"label\", \"className\"]);\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", _extends({\n    name: name,\n    id: id,\n    type: \"radio\",\n    value: id // could be something else for output?\n    ,\n    checked: id === value,\n    onChange: onChange,\n    onBlur: onBlur,\n    disabled: props.selected,\n    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('currency-list__radio-button')\n  }, props)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: id,\n    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('currency-list__item', {\n      'currency-list__item--selected': id === value,\n      'currency-list__item--current': props.selected\n    })\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_3__[\"Icon\"], {\n    className: \"currency-list__icon\",\n    icon: \"IcCurrency-\".concat(id.toLowerCase())\n  }), /^(UST|eUSDT)$/i.test(id) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(USTPopover, {\n    id: id\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"label currency-list__item-text\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"currency-list__item-label\"\n  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"currency-list__item-code\"\n  }, \"(\", Object(_deriv_shared__WEBPACK_IMPORTED_MODULE_4__[\"getCurrencyDisplayCode\"])(id), \")\")))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RadioButton);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL2N1cnJlbmN5LXNlbGVjdG9yL3JhZGlvLWJ1dHRvbi5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvYWNjb3VudC8uL0NvbXBvbmVudHMvY3VycmVuY3ktc2VsZWN0b3IvcmFkaW8tYnV0dG9uLmpzeD9lODE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IExvY2FsaXplIH0gZnJvbSAnQGRlcml2L3RyYW5zbGF0aW9ucyc7XG5pbXBvcnQgeyBQb3BvdmVyLCBJY29uIH0gZnJvbSAnQGRlcml2L2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgZ2V0Q3VycmVuY3lEaXNwbGF5Q29kZSB9IGZyb20gJ0BkZXJpdi9zaGFyZWQnO1xuXG5jb25zdCBVU1RQb3BvdmVyID0gKHsgaWQgfSkgPT4ge1xuICAgIGxldCBwb3BvdmVyX21lc3NhZ2U7XG4gICAgaWYgKC9eVVNUJC9pLnRlc3QoaWQpKSB7XG4gICAgICAgIHBvcG92ZXJfbWVzc2FnZSA9IChcbiAgICAgICAgICAgIDxMb2NhbGl6ZVxuICAgICAgICAgICAgICAgIGkxOG5fZGVmYXVsdF90ZXh0PXtcbiAgICAgICAgICAgICAgICAgICAgJ1RldGhlciBvbiBPbW5pbGF5ZXIgKFVTRFQpIGlzIGEgdmVyc2lvbiBvZiBUZXRoZXIsIGEgZGlnaXRhbCB0b2tlbiBpc3N1ZWQgb24gYmxvY2tjaGFpbnMgYW5kIGhvbGRzIGEgdmFsdWUgcGVnZ2VkIHRvIDEgVVNEIGF0IGFsbCB0aW1lcy48MCAvPjwwIC8+VVNEVCBpcyBidWlsdCBvbiB0aGUgYml0Y29pbiBibG9ja2NoYWluIHZpYSBPbW5pIExheWVyLCBhIHBsYXRmb3JtIGZvciBkaWdpdGFsIGFzc2V0cyBhbmQgY3VycmVuY2llcyB0aGF0IHJ1biBpbiB0aGUgYml0Y29pbiBuZXR3b3JrLidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cz17WzxiciBrZXk9ezB9IC8+XX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcG9wb3Zlcl9tZXNzYWdlID0gKFxuICAgICAgICAgICAgPExvY2FsaXplXG4gICAgICAgICAgICAgICAgaTE4bl9kZWZhdWx0X3RleHQ9e1xuICAgICAgICAgICAgICAgICAgICAnVGV0aGVyIGFzIGFuIEVSQzIwIHRva2VuIChlVVNEVCkgaXMgYSB2ZXJzaW9uIG9mIFRldGhlciB0aGF0IGlzIGhvc3RlZCBvbiBFdGhlcmV1bSwgYW4gb3BlbiBzb2Z0d2FyZSBwbGF0Zm9ybSB3aGVyZSBhbnlvbmUgY2FuIGJ1aWxkIGFuZCBkZXBsb3kgZGVjZW50cmFsaXNlZCBhcHBsaWNhdGlvbnMuJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFBvcG92ZXJcbiAgICAgICAgICAgIGFsaWdubWVudD0ndG9wJ1xuICAgICAgICAgICAgaWNvbj0naW5mbydcbiAgICAgICAgICAgIGRpc2FibGVfbWVzc2FnZV9pY29uXG4gICAgICAgICAgICB6SW5kZXg9ezk5OTl9XG4gICAgICAgICAgICBjbGFzc05hbWU9J2N1cnJlbmN5LWxpc3RfX3BvcG92ZXInXG4gICAgICAgICAgICBtZXNzYWdlPXtwb3BvdmVyX21lc3NhZ2V9XG4gICAgICAgIC8+XG4gICAgKTtcbn07XG5cbi8vIFJhZGlvIGlucHV0XG5jb25zdCBSYWRpb0J1dHRvbiA9ICh7IGZpZWxkOiB7IG5hbWUsIHZhbHVlLCBvbkNoYW5nZSwgb25CbHVyIH0sIGlkLCBsYWJlbCwgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgICAgICAgdHlwZT0ncmFkaW8nXG4gICAgICAgICAgICAgICAgdmFsdWU9e2lkfSAvLyBjb3VsZCBiZSBzb21ldGhpbmcgZWxzZSBmb3Igb3V0cHV0P1xuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2lkID09PSB2YWx1ZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgb25CbHVyPXtvbkJsdXJ9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3Byb3BzLnNlbGVjdGVkfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnY3VycmVuY3ktbGlzdF9fcmFkaW8tYnV0dG9uJyl9XG4gICAgICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgIGh0bWxGb3I9e2lkfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnY3VycmVuY3ktbGlzdF9faXRlbScsIHtcbiAgICAgICAgICAgICAgICAgICAgJ2N1cnJlbmN5LWxpc3RfX2l0ZW0tLXNlbGVjdGVkJzogaWQgPT09IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAnY3VycmVuY3ktbGlzdF9faXRlbS0tY3VycmVudCc6IHByb3BzLnNlbGVjdGVkLFxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT0nY3VycmVuY3ktbGlzdF9faWNvbicgaWNvbj17YEljQ3VycmVuY3ktJHtpZC50b0xvd2VyQ2FzZSgpfWB9IC8+XG4gICAgICAgICAgICAgICAgICAgIHsvXihVU1R8ZVVTRFQpJC9pLnRlc3QoaWQpICYmIDxVU1RQb3BvdmVyIGlkPXtpZH0gLz59XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsYWJlbCBjdXJyZW5jeS1saXN0X19pdGVtLXRleHQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2N1cnJlbmN5LWxpc3RfX2l0ZW0tbGFiZWwnPntsYWJlbH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjdXJyZW5jeS1saXN0X19pdGVtLWNvZGUnPih7Z2V0Q3VycmVuY3lEaXNwbGF5Q29kZShpZCl9KTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGlvQnV0dG9uO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBR0E7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUNBO0FBRUE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFNQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/currency-selector/radio-button.jsx\n");

/***/ }),

/***/ "@deriv/components":
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_components__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQGRlcml2L2NvbXBvbmVudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvYWNjb3VudC9leHRlcm5hbCBcIkBkZXJpdi9jb21wb25lbnRzXCI/MjY4NyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2Rlcml2X2NvbXBvbmVudHNfXzsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@deriv/components\n");

/***/ }),

/***/ "@deriv/shared":
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_shared__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQGRlcml2L3NoYXJlZC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9hY2NvdW50L2V4dGVybmFsIFwiQGRlcml2L3NoYXJlZFwiPzEzOTQiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19kZXJpdl9zaGFyZWRfXzsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@deriv/shared\n");

/***/ }),

/***/ "@deriv/translations":
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_translations__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQGRlcml2L3RyYW5zbGF0aW9ucy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9hY2NvdW50L2V4dGVybmFsIFwiQGRlcml2L3RyYW5zbGF0aW9uc1wiPzI0MjYiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19kZXJpdl90cmFuc2xhdGlvbnNfXzsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@deriv/translations\n");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvYWNjb3VudC9leHRlcm5hbCBcInJlYWN0XCI/NTg4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ })["default"];
});