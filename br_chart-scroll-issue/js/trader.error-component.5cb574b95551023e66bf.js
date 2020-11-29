(window["webpackJsonp_deriv_trader"] = window["webpackJsonp_deriv_trader"] || []).push([["error-component"],{

/***/ "./App/Components/Elements/Errors/error-component.jsx":
/*!************************************************************!*\
  !*** ./App/Components/Elements/Errors/error-component.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ \"../node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @deriv/components */ \"@deriv/components\");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_deriv_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @deriv/shared */ \"@deriv/shared\");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_deriv_shared__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @deriv/translations */ \"@deriv/translations\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_deriv_translations__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nvar ErrorComponent = function ErrorComponent(_ref) {\n  var header = _ref.header,\n      message = _ref.message,\n      is_dialog = _ref.is_dialog,\n      redirect_label = _ref.redirect_label,\n      redirectOnClick = _ref.redirectOnClick,\n      _ref$should_show_refr = _ref.should_show_refresh,\n      should_show_refresh = _ref$should_show_refr === void 0 ? true : _ref$should_show_refr;\n  var refresh_message = should_show_refresh ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](_deriv_translations__WEBPACK_IMPORTED_MODULE_4__[\"Localize\"], {\n    i18n_default_text: \"Please refresh this page to continue.\"\n  }) : '';\n  return is_dialog ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](_deriv_components__WEBPACK_IMPORTED_MODULE_2__[\"Dialog\"], {\n    title: header || Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_4__[\"localize\"])('There was an error'),\n    is_visible: true,\n    confirm_button_text: redirect_label || Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_4__[\"localize\"])('Ok'),\n    onConfirm: redirectOnClick || function () {\n      return location.reload();\n    }\n  }, message || Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_4__[\"localize\"])('Sorry, an error occured while processing your request.')) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](_deriv_components__WEBPACK_IMPORTED_MODULE_2__[\"PageError\"], {\n    header: header || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](_deriv_translations__WEBPACK_IMPORTED_MODULE_4__[\"Localize\"], {\n      i18n_default_text: \"Something\\u2019s not right\"\n    }),\n    messages: message ? [message, refresh_message] : [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](_deriv_translations__WEBPACK_IMPORTED_MODULE_4__[\"Localize\"], {\n      key: 0,\n      i18n_default_text: \"Sorry, an error occured while processing your request.\"\n    }), refresh_message],\n    redirect_url: _deriv_shared__WEBPACK_IMPORTED_MODULE_3__[\"routes\"].trade,\n    redirect_label: redirect_label || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](_deriv_translations__WEBPACK_IMPORTED_MODULE_4__[\"Localize\"], {\n      i18n_default_text: \"Refresh\"\n    }),\n    buttonOnClick: redirectOnClick || function () {\n      return location.reload();\n    }\n  });\n};\n\nErrorComponent.propTypes = {\n  message: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object]),\n  type: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ErrorComponent);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcHAvQ29tcG9uZW50cy9FbGVtZW50cy9FcnJvcnMvZXJyb3ItY29tcG9uZW50LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi90cmFkZXIvLi9BcHAvQ29tcG9uZW50cy9FbGVtZW50cy9FcnJvcnMvZXJyb3ItY29tcG9uZW50LmpzeD84MTJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUGFnZUVycm9yLCBEaWFsb2cgfSBmcm9tICdAZGVyaXYvY29tcG9uZW50cyc7XG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tICdAZGVyaXYvc2hhcmVkJztcbmltcG9ydCB7IExvY2FsaXplLCBsb2NhbGl6ZSB9IGZyb20gJ0BkZXJpdi90cmFuc2xhdGlvbnMnO1xuXG5jb25zdCBFcnJvckNvbXBvbmVudCA9ICh7XG4gICAgaGVhZGVyLFxuICAgIG1lc3NhZ2UsXG4gICAgaXNfZGlhbG9nLFxuICAgIHJlZGlyZWN0X2xhYmVsLFxuICAgIHJlZGlyZWN0T25DbGljayxcbiAgICBzaG91bGRfc2hvd19yZWZyZXNoID0gdHJ1ZSxcbn0pID0+IHtcbiAgICBjb25zdCByZWZyZXNoX21lc3NhZ2UgPSBzaG91bGRfc2hvd19yZWZyZXNoID8gKFxuICAgICAgICA8TG9jYWxpemUgaTE4bl9kZWZhdWx0X3RleHQ9J1BsZWFzZSByZWZyZXNoIHRoaXMgcGFnZSB0byBjb250aW51ZS4nIC8+XG4gICAgKSA6IChcbiAgICAgICAgJydcbiAgICApO1xuXG4gICAgcmV0dXJuIGlzX2RpYWxvZyA/IChcbiAgICAgICAgPERpYWxvZ1xuICAgICAgICAgICAgdGl0bGU9e2hlYWRlciB8fCBsb2NhbGl6ZSgnVGhlcmUgd2FzIGFuIGVycm9yJyl9XG4gICAgICAgICAgICBpc192aXNpYmxlXG4gICAgICAgICAgICBjb25maXJtX2J1dHRvbl90ZXh0PXtyZWRpcmVjdF9sYWJlbCB8fCBsb2NhbGl6ZSgnT2snKX1cbiAgICAgICAgICAgIG9uQ29uZmlybT17cmVkaXJlY3RPbkNsaWNrIHx8ICgoKSA9PiBsb2NhdGlvbi5yZWxvYWQoKSl9XG4gICAgICAgID5cbiAgICAgICAgICAgIHttZXNzYWdlIHx8IGxvY2FsaXplKCdTb3JyeSwgYW4gZXJyb3Igb2NjdXJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4nKX1cbiAgICAgICAgPC9EaWFsb2c+XG4gICAgKSA6IChcbiAgICAgICAgPFBhZ2VFcnJvclxuICAgICAgICAgICAgaGVhZGVyPXtoZWFkZXIgfHwgPExvY2FsaXplIGkxOG5fZGVmYXVsdF90ZXh0PSdTb21ldGhpbmfigJlzIG5vdCByaWdodCcgLz59XG4gICAgICAgICAgICBtZXNzYWdlcz17XG4gICAgICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICA/IFttZXNzYWdlLCByZWZyZXNoX21lc3NhZ2VdXG4gICAgICAgICAgICAgICAgICAgIDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkxOG5fZGVmYXVsdF90ZXh0PSdTb3JyeSwgYW4gZXJyb3Igb2NjdXJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoX21lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVkaXJlY3RfdXJsPXtyb3V0ZXMudHJhZGV9XG4gICAgICAgICAgICByZWRpcmVjdF9sYWJlbD17cmVkaXJlY3RfbGFiZWwgfHwgPExvY2FsaXplIGkxOG5fZGVmYXVsdF90ZXh0PSdSZWZyZXNoJyAvPn1cbiAgICAgICAgICAgIGJ1dHRvbk9uQ2xpY2s9e3JlZGlyZWN0T25DbGljayB8fCAoKCkgPT4gbG9jYXRpb24ucmVsb2FkKCkpfVxuICAgICAgICAvPlxuICAgICk7XG59O1xuXG5FcnJvckNvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gICAgbWVzc2FnZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm5vZGUsIFByb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JDb21wb25lbnQ7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUZBO0FBT0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFmQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./App/Components/Elements/Errors/error-component.jsx\n");

/***/ }),

/***/ "./App/Components/Elements/Errors/index.js":
/*!*************************************************!*\
  !*** ./App/Components/Elements/Errors/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _error_component_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-component.jsx */ \"./App/Components/Elements/Errors/error-component.jsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _error_component_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcHAvQ29tcG9uZW50cy9FbGVtZW50cy9FcnJvcnMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvdHJhZGVyLy4vQXBwL0NvbXBvbmVudHMvRWxlbWVudHMvRXJyb3JzL2luZGV4LmpzPzkwNTYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnJvbSAnLi9lcnJvci1jb21wb25lbnQuanN4JztcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./App/Components/Elements/Errors/index.js\n");

/***/ })

}]);