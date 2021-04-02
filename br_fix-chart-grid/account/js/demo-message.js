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
		module.exports = factory(require("@deriv/components"), require("@deriv/translations"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["@deriv/components", "@deriv/translations", "react"], factory);
	else if(typeof exports === 'object')
		exports["@deriv/account"] = factory(require("@deriv/components"), require("@deriv/translations"), require("react"));
	else
		root["@deriv/account"] = factory(root["@deriv/components"], root["@deriv/translations"], root["react"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE__deriv_components__, __WEBPACK_EXTERNAL_MODULE__deriv_translations__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./Components/demo-message/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  \"default\": () => (/* reexport */ demo_message)\n});\n\n// EXTERNAL MODULE: external \"react\"\nvar external_react_ = __webpack_require__(\"react\");\nvar external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);\n// EXTERNAL MODULE: external \"@deriv/translations\"\nvar translations_ = __webpack_require__(\"@deriv/translations\");\n// EXTERNAL MODULE: ../../../node_modules/prop-types/index.js\nvar prop_types = __webpack_require__(\"../../../node_modules/prop-types/index.js\");\nvar prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);\n// EXTERNAL MODULE: external \"@deriv/components\"\nvar components_ = __webpack_require__(\"@deriv/components\");\n;// CONCATENATED MODULE: ./Components/icon-with-message/icon-with-message.jsx\n\n\n\n\nvar IconWithMessage = function IconWithMessage(_ref) {\n  var icon = _ref.icon,\n      message = _ref.message;\n  return /*#__PURE__*/external_react_.createElement(\"div\", {\n    className: \"da-icon-with-message\"\n  }, /*#__PURE__*/external_react_.createElement(components_.Icon, {\n    icon: icon,\n    size: 128\n  }), /*#__PURE__*/external_react_.createElement(components_.Text, {\n    className: \"da-icon-with-message__text\",\n    as: \"p\",\n    color: \"general\",\n    size: \"s\",\n    line_height: \"m\",\n    weight: \"bold\"\n  }, message));\n};\n\nIconWithMessage.propTypes = {\n  icon: (prop_types_default()).string.isRequired,\n  message: (prop_types_default()).string.isRequired\n};\n/* harmony default export */ const icon_with_message = (IconWithMessage);\n;// CONCATENATED MODULE: ./Components/icon-with-message/index.js\n\n\n/* harmony default export */ const Components_icon_with_message = (icon_with_message);\n;// CONCATENATED MODULE: ./Components/demo-message/demo-message.jsx\n\n\n\n\nvar DemoMessage = function DemoMessage() {\n  return /*#__PURE__*/external_react_default().createElement(Components_icon_with_message, {\n    icon: \"IcPoaLock\",\n    message: (0,translations_.localize)('This feature is not available for demo accounts.')\n  });\n};\n\n/* harmony default export */ const demo_message = (DemoMessage);\n;// CONCATENATED MODULE: ./Components/demo-message/index.js\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL2RlbW8tbWVzc2FnZS9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9hY2NvdW50Ly4vQ29tcG9uZW50cy9pY29uLXdpdGgtbWVzc2FnZS9pY29uLXdpdGgtbWVzc2FnZS5qc3g/NjgwNSIsIndlYnBhY2s6Ly9AZGVyaXYvYWNjb3VudC8uL0NvbXBvbmVudHMvaWNvbi13aXRoLW1lc3NhZ2UvaW5kZXguanM/N2JlYiIsIndlYnBhY2s6Ly9AZGVyaXYvYWNjb3VudC8uL0NvbXBvbmVudHMvZGVtby1tZXNzYWdlL2RlbW8tbWVzc2FnZS5qc3g/MWUzOCIsIndlYnBhY2s6Ly9AZGVyaXYvYWNjb3VudC8uL0NvbXBvbmVudHMvZGVtby1tZXNzYWdlL2luZGV4LmpzPzUxMWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEljb24sIFRleHQgfSBmcm9tICdAZGVyaXYvY29tcG9uZW50cyc7XG5cbmNvbnN0IEljb25XaXRoTWVzc2FnZSA9ICh7IGljb24sIG1lc3NhZ2UgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkYS1pY29uLXdpdGgtbWVzc2FnZSc+XG4gICAgICAgICAgICA8SWNvbiBpY29uPXtpY29ufSBzaXplPXsxMjh9IC8+XG4gICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J2RhLWljb24td2l0aC1tZXNzYWdlX190ZXh0JyBhcz0ncCcgY29sb3I9J2dlbmVyYWwnIHNpemU9J3MnIGxpbmVfaGVpZ2h0PSdtJyB3ZWlnaHQ9J2JvbGQnPlxuICAgICAgICAgICAgICAgIHttZXNzYWdlfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuSWNvbldpdGhNZXNzYWdlLnByb3BUeXBlcyA9IHtcbiAgICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgbWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSWNvbldpdGhNZXNzYWdlO1xuIiwiaW1wb3J0IEljb25XaXRoTWVzc2FnZSBmcm9tICcuL2ljb24td2l0aC1tZXNzYWdlLmpzeCc7XG5pbXBvcnQgJy4vaWNvbi13aXRoLW1lc3NhZ2Uuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IEljb25XaXRoTWVzc2FnZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBsb2NhbGl6ZSB9IGZyb20gJ0BkZXJpdi90cmFuc2xhdGlvbnMnO1xuaW1wb3J0IEljb25XaXRoTWVzc2FnZSBmcm9tICdDb21wb25lbnRzL2ljb24td2l0aC1tZXNzYWdlJztcblxuY29uc3QgRGVtb01lc3NhZ2UgPSAoKSA9PiAoXG4gICAgPEljb25XaXRoTWVzc2FnZSBpY29uPSdJY1BvYUxvY2snIG1lc3NhZ2U9e2xvY2FsaXplKCdUaGlzIGZlYXR1cmUgaXMgbm90IGF2YWlsYWJsZSBmb3IgZGVtbyBhY2NvdW50cy4nKX0gLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IERlbW9NZXNzYWdlO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnJvbSAnLi9kZW1vLW1lc3NhZ2UuanN4JztcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7O0FDcEJBO0FBQ0E7QUFFQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUNBO0FBR0E7O0FDUkE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/demo-message/index.js\n");

/***/ }),

/***/ "../../../node_modules/prop-types/factoryWithThrowingShims.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nvar ReactPropTypesSecret = __webpack_require__(\"../../../node_modules/prop-types/lib/ReactPropTypesSecret.js\");\n\nfunction emptyFunction() {}\nfunction emptyFunctionWithReset() {}\nemptyFunctionWithReset.resetWarningCache = emptyFunction;\n\nmodule.exports = function() {\n  function shim(props, propName, componentName, location, propFullName, secret) {\n    if (secret === ReactPropTypesSecret) {\n      // It is still safe when called from React.\n      return;\n    }\n    var err = new Error(\n      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +\n      'Use PropTypes.checkPropTypes() to call them. ' +\n      'Read more at http://fb.me/use-check-prop-types'\n    );\n    err.name = 'Invariant Violation';\n    throw err;\n  };\n  shim.isRequired = shim;\n  function getShim() {\n    return shim;\n  };\n  // Important!\n  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.\n  var ReactPropTypes = {\n    array: shim,\n    bool: shim,\n    func: shim,\n    number: shim,\n    object: shim,\n    string: shim,\n    symbol: shim,\n\n    any: shim,\n    arrayOf: getShim,\n    element: shim,\n    elementType: shim,\n    instanceOf: getShim,\n    node: shim,\n    objectOf: getShim,\n    oneOf: getShim,\n    oneOfType: getShim,\n    shape: getShim,\n    exact: getShim,\n\n    checkPropTypes: emptyFunctionWithReset,\n    resetWarningCache: emptyFunction\n  };\n\n  ReactPropTypes.PropTypes = ReactPropTypes;\n\n  return ReactPropTypes;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlcml2L2FjY291bnQvLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzP2RjMDciXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fVxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvbldpdGhSZXNldCgpIHt9XG5lbXB0eUZ1bmN0aW9uV2l0aFJlc2V0LnJlc2V0V2FybmluZ0NhY2hlID0gZW1wdHlGdW5jdGlvbjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gc2hpbShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgIGlmIChzZWNyZXQgPT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAvLyBJdCBpcyBzdGlsbCBzYWZlIHdoZW4gY2FsbGVkIGZyb20gUmVhY3QuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAnVXNlIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICApO1xuICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIHRocm93IGVycjtcbiAgfTtcbiAgc2hpbS5pc1JlcXVpcmVkID0gc2hpbTtcbiAgZnVuY3Rpb24gZ2V0U2hpbSgpIHtcbiAgICByZXR1cm4gc2hpbTtcbiAgfTtcbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBzaGltLFxuICAgIGJvb2w6IHNoaW0sXG4gICAgZnVuYzogc2hpbSxcbiAgICBudW1iZXI6IHNoaW0sXG4gICAgb2JqZWN0OiBzaGltLFxuICAgIHN0cmluZzogc2hpbSxcbiAgICBzeW1ib2w6IHNoaW0sXG5cbiAgICBhbnk6IHNoaW0sXG4gICAgYXJyYXlPZjogZ2V0U2hpbSxcbiAgICBlbGVtZW50OiBzaGltLFxuICAgIGVsZW1lbnRUeXBlOiBzaGltLFxuICAgIGluc3RhbmNlT2Y6IGdldFNoaW0sXG4gICAgbm9kZTogc2hpbSxcbiAgICBvYmplY3RPZjogZ2V0U2hpbSxcbiAgICBvbmVPZjogZ2V0U2hpbSxcbiAgICBvbmVPZlR5cGU6IGdldFNoaW0sXG4gICAgc2hhcGU6IGdldFNoaW0sXG4gICAgZXhhY3Q6IGdldFNoaW0sXG5cbiAgICBjaGVja1Byb3BUeXBlczogZW1wdHlGdW5jdGlvbldpdGhSZXNldCxcbiAgICByZXNldFdhcm5pbmdDYWNoZTogZW1wdHlGdW5jdGlvblxuICB9O1xuXG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../../node_modules/prop-types/factoryWithThrowingShims.js\n");

/***/ }),

/***/ "../../../node_modules/prop-types/index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nif (false) { var throwOnDirectAccess, ReactIs; } else {\n  // By explicitly using `prop-types` you are opting into new production behavior.\n  // http://fb.me/prop-types-in-prod\n  module.exports = __webpack_require__(\"../../../node_modules/prop-types/factoryWithThrowingShims.js\")();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvYWNjb3VudC8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcz83MGQ0Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoUmVhY3RJcy5pc0VsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../../node_modules/prop-types/index.js\n");

/***/ }),

/***/ "../../../node_modules/prop-types/lib/ReactPropTypesSecret.js":
/***/ ((module) => {

"use strict";
eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nvar ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';\n\nmodule.exports = ReactPropTypesSecret;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlcml2L2FjY291bnQvLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzP2FkODMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../../node_modules/prop-types/lib/ReactPropTypesSecret.js\n");

/***/ }),

/***/ "@deriv/components":
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_components__;

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./Components/demo-message/index.js");
/******/ 	__webpack_exports__ = __webpack_exports__.default;
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});