(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reset-password-modal"],{

/***/ "./App/Containers/ResetPasswordModal/index.js":
/*!****************************************************!*\
  !*** ./App/Containers/ResetPasswordModal/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reset_password_modal_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-password-modal.jsx */ \"./App/Containers/ResetPasswordModal/reset-password-modal.jsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _reset_password_modal_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcHAvQ29udGFpbmVycy9SZXNldFBhc3N3b3JkTW9kYWwvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9BcHAvQ29udGFpbmVycy9SZXNldFBhc3N3b3JkTW9kYWwvaW5kZXguanM/MmNmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmcm9tICcuL3Jlc2V0LXBhc3N3b3JkLW1vZGFsLmpzeCc7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./App/Containers/ResetPasswordModal/index.js\n");

/***/ }),

/***/ "./App/Containers/ResetPasswordModal/reset-password-modal.jsx":
/*!********************************************************************!*\
  !*** ./App/Containers/ResetPasswordModal/reset-password-modal.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"../node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"../node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ \"../node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @deriv/components */ \"../../components/src/index.js\");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @deriv/shared */ \"../../shared/src/index.js\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @deriv/translations */ \"../../translations/src/index.js\");\n/* harmony import */ var Stores_connect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Stores/connect */ \"./Stores/connect.js\");\n/* harmony import */ var Services_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Services/index */ \"./Services/index.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n\n\n\n\nvar resetInitialValues = {\n  password: ''\n};\n\nvar ResetPassword = /*#__PURE__*/function (_React$Component) {\n  _inherits(ResetPassword, _React$Component);\n\n  var _super = _createSuper(ResetPassword);\n\n  function ResetPassword() {\n    var _this;\n\n    _classCallCheck(this, ResetPassword);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    _this.onResetComplete = function (error_msg, actions) {\n      actions.setSubmitting(false);\n      actions.resetForm({\n        password: ''\n      }); // Error would be returned on invalid token (and the like) cases.\n      // TODO: Proper error handling (currently we have no place to put the message)\n\n      if (error_msg) {\n        // eslint-disable-next-line no-console\n        console.error(error_msg);\n        actions.setStatus({\n          error_msg: error_msg\n        });\n        return;\n      }\n\n      actions.setStatus({\n        reset_complete: true\n      });\n\n      _this.props.logoutClient().then(function () {\n        Object(_deriv_shared__WEBPACK_IMPORTED_MODULE_5__[\"redirectToLogin\"])(_this.props.is_logged_in, Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_6__[\"getLanguage\"])());\n      });\n    };\n\n    _this.handleSubmit = function (values, actions) {\n      var verification_code = _this.props.verification_code;\n      var api_request = {\n        reset_password: 1,\n        new_password: values.password,\n        verification_code: verification_code\n      };\n      Services_index__WEBPACK_IMPORTED_MODULE_8__[\"WS\"].resetPassword(api_request).then( /*#__PURE__*/function () {\n        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(response) {\n          return regeneratorRuntime.wrap(function _callee$(_context) {\n            while (1) {\n              switch (_context.prev = _context.next) {\n                case 0:\n                  if (response.error) {\n                    _this.onResetComplete(response.error.message, actions);\n                  } else {\n                    _this.onResetComplete(null, actions);\n                  }\n\n                case 1:\n                case \"end\":\n                  return _context.stop();\n              }\n            }\n          }, _callee);\n        }));\n\n        return function (_x) {\n          return _ref.apply(this, arguments);\n        };\n      }());\n    };\n\n    _this.validateReset = function (values) {\n      var errors = {};\n\n      if (!Object(_deriv_shared__WEBPACK_IMPORTED_MODULE_5__[\"validLength\"])(values.password, {\n        min: 8,\n        max: 25\n      })) {\n        errors.password = Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_6__[\"localize\"])('You should enter {{min_number}}-{{max_number}} characters.', {\n          min_number: 8,\n          max_number: 25\n        });\n      } else if (!Object(_deriv_shared__WEBPACK_IMPORTED_MODULE_5__[\"validPassword\"])(values.password)) {\n        errors.password = Object(_deriv_shared__WEBPACK_IMPORTED_MODULE_5__[\"getErrorMessages\"])().password();\n      }\n\n      return errors;\n    };\n\n    return _this;\n  }\n\n  _createClass(ResetPassword, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n        className: \"reset-password\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](formik__WEBPACK_IMPORTED_MODULE_3__[\"Formik\"], {\n        initialValues: resetInitialValues,\n        initialStatus: {\n          reset_complete: false,\n          error_msg: ''\n        },\n        validate: this.validateReset,\n        onSubmit: this.handleSubmit\n      }, function (_ref2) {\n        var handleBlur = _ref2.handleBlur,\n            errors = _ref2.errors,\n            values = _ref2.values,\n            touched = _ref2.touched,\n            isSubmitting = _ref2.isSubmitting,\n            handleChange = _ref2.handleChange,\n            status = _ref2.status;\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](formik__WEBPACK_IMPORTED_MODULE_3__[\"Form\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, status.reset_complete ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n          className: \"reset-password__password-selection\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", {\n          className: \"reset-password__heading\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_deriv_translations__WEBPACK_IMPORTED_MODULE_6__[\"Localize\"], {\n          i18n_default_text: \"Your password has been changed\"\n        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", {\n          className: \"reset-password__subtext\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_deriv_translations__WEBPACK_IMPORTED_MODULE_6__[\"Localize\"], {\n          i18n_default_text: \"We will now redirect you to the login page.\"\n        }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n          className: \"reset-password__password-selection\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", {\n          className: \"reset-password__heading\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_deriv_translations__WEBPACK_IMPORTED_MODULE_6__[\"Localize\"], {\n          i18n_default_text: \"Choose a new password\"\n        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"fieldset\", {\n          className: \"reset-password__fieldset\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_deriv_components__WEBPACK_IMPORTED_MODULE_4__[\"PasswordMeter\"], {\n          input: values.password,\n          has_error: !!(touched.password && errors.password)\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_deriv_components__WEBPACK_IMPORTED_MODULE_4__[\"PasswordInput\"], {\n          className: \"reset-password__password-field\",\n          name: \"password\",\n          label: Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_6__[\"localize\"])('Create a password'),\n          onChange: handleChange,\n          onBlur: handleBlur,\n          error: touched.password && errors.password,\n          value: values.password,\n          \"data-lpignore\": \"true\",\n          required: true\n        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", {\n          className: \"reset-password__subtext\"\n        }, status.error_msg ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_deriv_translations__WEBPACK_IMPORTED_MODULE_6__[\"Localize\"], {\n          i18n_default_text: \"{{error_msg}}\",\n          values: {\n            error_msg: status.error_msg\n          }\n        }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_deriv_translations__WEBPACK_IMPORTED_MODULE_6__[\"Localize\"], {\n          i18n_default_text: \"Strong passwords contain at least 8 characters, combine uppercase and lowercase letters, numbers, and symbols.\"\n        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_deriv_components__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('reset-password__btn', {\n            'reset-password__btn--disabled': !values.password || errors.password || isSubmitting\n          }),\n          type: \"submit\",\n          is_disabled: !values.password || errors.password || isSubmitting,\n          primary: true\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_deriv_translations__WEBPACK_IMPORTED_MODULE_6__[\"Localize\"], {\n          i18n_default_text: \"Reset my password\"\n        })))));\n      }));\n    }\n  }]);\n\n  return ResetPassword;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nResetPassword.propTypes = {\n  enableApp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  isModalVisible: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  verification_code: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\n\nvar ResetPasswordModal = function ResetPasswordModal(_ref3) {\n  var enableApp = _ref3.enableApp,\n      disableApp = _ref3.disableApp,\n      is_loading = _ref3.is_loading,\n      is_visible = _ref3.is_visible,\n      is_logged_in = _ref3.is_logged_in,\n      logoutClient = _ref3.logoutClient,\n      verification_code = _ref3.verification_code,\n      toggleResetPasswordModal = _ref3.toggleResetPasswordModal;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_deriv_components__WEBPACK_IMPORTED_MODULE_4__[\"Dialog\"], {\n    is_visible: is_visible,\n    disableApp: disableApp,\n    enableApp: enableApp,\n    is_loading: is_loading\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](ResetPassword, {\n    is_logged_in: is_logged_in,\n    verification_code: verification_code,\n    isModalVisible: toggleResetPasswordModal,\n    enableApp: enableApp,\n    logoutClient: logoutClient\n  }));\n};\n\nResetPasswordModal.propTypes = {\n  disableApp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  enableApp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  is_loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,\n  is_visible: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,\n  logoutClient: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  toggleResetPasswordModal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  verification_code: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(Stores_connect__WEBPACK_IMPORTED_MODULE_7__[\"connect\"])(function (_ref4) {\n  var ui = _ref4.ui,\n      client = _ref4.client;\n  return {\n    is_visible: ui.is_reset_password_modal_visible,\n    enableApp: ui.enableApp,\n    disableApp: ui.disableApp,\n    is_loading: ui.is_loading,\n    is_logged_in: client.is_logged_in,\n    logoutClient: client.logout,\n    toggleResetPasswordModal: ui.toggleResetPasswordModal,\n    verification_code: client.verification_code.reset_password\n  };\n})(ResetPasswordModal));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcHAvQ29udGFpbmVycy9SZXNldFBhc3N3b3JkTW9kYWwvcmVzZXQtcGFzc3dvcmQtbW9kYWwuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vQXBwL0NvbnRhaW5lcnMvUmVzZXRQYXNzd29yZE1vZGFsL3Jlc2V0LXBhc3N3b3JkLW1vZGFsLmpzeD84OGVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBGb3JtaWssIEZvcm0gfSBmcm9tICdmb3JtaWsnO1xuaW1wb3J0IHsgQnV0dG9uLCBEaWFsb2csIFBhc3N3b3JkSW5wdXQsIFBhc3N3b3JkTWV0ZXIgfSBmcm9tICdAZGVyaXYvY29tcG9uZW50cyc7XG5pbXBvcnQgeyByZWRpcmVjdFRvTG9naW4sIHZhbGlkUGFzc3dvcmQsIHZhbGlkTGVuZ3RoLCBnZXRFcnJvck1lc3NhZ2VzIH0gZnJvbSAnQGRlcml2L3NoYXJlZCc7XG5pbXBvcnQgeyBnZXRMYW5ndWFnZSwgbG9jYWxpemUsIExvY2FsaXplIH0gZnJvbSAnQGRlcml2L3RyYW5zbGF0aW9ucyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnU3RvcmVzL2Nvbm5lY3QnO1xuaW1wb3J0IHsgV1MgfSBmcm9tICdTZXJ2aWNlcy9pbmRleCc7XG5cbmNvbnN0IHJlc2V0SW5pdGlhbFZhbHVlcyA9IHsgcGFzc3dvcmQ6ICcnIH07XG5cbmNsYXNzIFJlc2V0UGFzc3dvcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIG9uUmVzZXRDb21wbGV0ZSA9IChlcnJvcl9tc2csIGFjdGlvbnMpID0+IHtcbiAgICAgICAgYWN0aW9ucy5zZXRTdWJtaXR0aW5nKGZhbHNlKTtcbiAgICAgICAgYWN0aW9ucy5yZXNldEZvcm0oeyBwYXNzd29yZDogJycgfSk7XG4gICAgICAgIC8vIEVycm9yIHdvdWxkIGJlIHJldHVybmVkIG9uIGludmFsaWQgdG9rZW4gKGFuZCB0aGUgbGlrZSkgY2FzZXMuXG4gICAgICAgIC8vIFRPRE86IFByb3BlciBlcnJvciBoYW5kbGluZyAoY3VycmVudGx5IHdlIGhhdmUgbm8gcGxhY2UgdG8gcHV0IHRoZSBtZXNzYWdlKVxuICAgICAgICBpZiAoZXJyb3JfbXNnKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcl9tc2cpO1xuICAgICAgICAgICAgYWN0aW9ucy5zZXRTdGF0dXMoeyBlcnJvcl9tc2cgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBhY3Rpb25zLnNldFN0YXR1cyh7IHJlc2V0X2NvbXBsZXRlOiB0cnVlIH0pO1xuXG4gICAgICAgIHRoaXMucHJvcHMubG9nb3V0Q2xpZW50KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICByZWRpcmVjdFRvTG9naW4odGhpcy5wcm9wcy5pc19sb2dnZWRfaW4sIGdldExhbmd1YWdlKCkpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgaGFuZGxlU3VibWl0ID0gKHZhbHVlcywgYWN0aW9ucykgPT4ge1xuICAgICAgICBjb25zdCB7IHZlcmlmaWNhdGlvbl9jb2RlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBhcGlfcmVxdWVzdCA9IHtcbiAgICAgICAgICAgIHJlc2V0X3Bhc3N3b3JkOiAxLFxuICAgICAgICAgICAgbmV3X3Bhc3N3b3JkOiB2YWx1ZXMucGFzc3dvcmQsXG4gICAgICAgICAgICB2ZXJpZmljYXRpb25fY29kZSxcbiAgICAgICAgfTtcblxuICAgICAgICBXUy5yZXNldFBhc3N3b3JkKGFwaV9yZXF1ZXN0KS50aGVuKGFzeW5jIHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5lcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMub25SZXNldENvbXBsZXRlKHJlc3BvbnNlLmVycm9yLm1lc3NhZ2UsIGFjdGlvbnMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uUmVzZXRDb21wbGV0ZShudWxsLCBhY3Rpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHZhbGlkYXRlUmVzZXQgPSB2YWx1ZXMgPT4ge1xuICAgICAgICBjb25zdCBlcnJvcnMgPSB7fTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhdmFsaWRMZW5ndGgodmFsdWVzLnBhc3N3b3JkLCB7XG4gICAgICAgICAgICAgICAgbWluOiA4LFxuICAgICAgICAgICAgICAgIG1heDogMjUsXG4gICAgICAgICAgICB9KVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGVycm9ycy5wYXNzd29yZCA9IGxvY2FsaXplKCdZb3Ugc2hvdWxkIGVudGVyIHt7bWluX251bWJlcn19LXt7bWF4X251bWJlcn19IGNoYXJhY3RlcnMuJywge1xuICAgICAgICAgICAgICAgIG1pbl9udW1iZXI6IDgsXG4gICAgICAgICAgICAgICAgbWF4X251bWJlcjogMjUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICghdmFsaWRQYXNzd29yZCh2YWx1ZXMucGFzc3dvcmQpKSB7XG4gICAgICAgICAgICBlcnJvcnMucGFzc3dvcmQgPSBnZXRFcnJvck1lc3NhZ2VzKCkucGFzc3dvcmQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlcnJvcnM7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZXNldC1wYXNzd29yZCc+XG4gICAgICAgICAgICAgICAgPEZvcm1pa1xuICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXtyZXNldEluaXRpYWxWYWx1ZXN9XG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxTdGF0dXM9e3sgcmVzZXRfY29tcGxldGU6IGZhbHNlLCBlcnJvcl9tc2c6ICcnIH19XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlPXt0aGlzLnZhbGlkYXRlUmVzZXR9XG4gICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHsoeyBoYW5kbGVCbHVyLCBlcnJvcnMsIHZhbHVlcywgdG91Y2hlZCwgaXNTdWJtaXR0aW5nLCBoYW5kbGVDaGFuZ2UsIHN0YXR1cyB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0dXMucmVzZXRfY29tcGxldGUgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVzZXQtcGFzc3dvcmRfX3Bhc3N3b3JkLXNlbGVjdGlvbic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdyZXNldC1wYXNzd29yZF9faGVhZGluZyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6ZSBpMThuX2RlZmF1bHRfdGV4dD0nWW91ciBwYXNzd29yZCBoYXMgYmVlbiBjaGFuZ2VkJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3Jlc2V0LXBhc3N3b3JkX19zdWJ0ZXh0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsaXplIGkxOG5fZGVmYXVsdF90ZXh0PSdXZSB3aWxsIG5vdyByZWRpcmVjdCB5b3UgdG8gdGhlIGxvZ2luIHBhZ2UuJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jlc2V0LXBhc3N3b3JkX19wYXNzd29yZC1zZWxlY3Rpb24nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ncmVzZXQtcGFzc3dvcmRfX2hlYWRpbmcnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemUgaTE4bl9kZWZhdWx0X3RleHQ9J0Nob29zZSBhIG5ldyBwYXNzd29yZCcgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT0ncmVzZXQtcGFzc3dvcmRfX2ZpZWxkc2V0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhc3N3b3JkTWV0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0PXt2YWx1ZXMucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNfZXJyb3I9eyEhKHRvdWNoZWQucGFzc3dvcmQgJiYgZXJyb3JzLnBhc3N3b3JkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhc3N3b3JkSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3Jlc2V0LXBhc3N3b3JkX19wYXNzd29yZC1maWVsZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdwYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17bG9jYWxpemUoJ0NyZWF0ZSBhIHBhc3N3b3JkJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e3RvdWNoZWQucGFzc3dvcmQgJiYgZXJyb3JzLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1scGlnbm9yZT0ndHJ1ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXNzd29yZE1ldGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdyZXNldC1wYXNzd29yZF9fc3VidGV4dCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0dXMuZXJyb3JfbXNnID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsaXplXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaTE4bl9kZWZhdWx0X3RleHQ9J3t7ZXJyb3JfbXNnfX0nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzPXt7IGVycm9yX21zZzogc3RhdHVzLmVycm9yX21zZyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6ZSBpMThuX2RlZmF1bHRfdGV4dD0nU3Ryb25nIHBhc3N3b3JkcyBjb250YWluIGF0IGxlYXN0IDggY2hhcmFjdGVycywgY29tYmluZSB1cHBlcmNhc2UgYW5kIGxvd2VyY2FzZSBsZXR0ZXJzLCBudW1iZXJzLCBhbmQgc3ltYm9scy4nIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3Jlc2V0LXBhc3N3b3JkX19idG4nLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmVzZXQtcGFzc3dvcmRfX2J0bi0tZGlzYWJsZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICF2YWx1ZXMucGFzc3dvcmQgfHwgZXJyb3JzLnBhc3N3b3JkIHx8IGlzU3VibWl0dGluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfZGlzYWJsZWQ9eyF2YWx1ZXMucGFzc3dvcmQgfHwgZXJyb3JzLnBhc3N3b3JkIHx8IGlzU3VibWl0dGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsaXplIGkxOG5fZGVmYXVsdF90ZXh0PSdSZXNldCBteSBwYXNzd29yZCcgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9Gb3JtaWs+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblJlc2V0UGFzc3dvcmQucHJvcFR5cGVzID0ge1xuICAgIGVuYWJsZUFwcDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaXNNb2RhbFZpc2libGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIHZlcmlmaWNhdGlvbl9jb2RlOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuY29uc3QgUmVzZXRQYXNzd29yZE1vZGFsID0gKHtcbiAgICBlbmFibGVBcHAsXG4gICAgZGlzYWJsZUFwcCxcbiAgICBpc19sb2FkaW5nLFxuICAgIGlzX3Zpc2libGUsXG4gICAgaXNfbG9nZ2VkX2luLFxuICAgIGxvZ291dENsaWVudCxcbiAgICB2ZXJpZmljYXRpb25fY29kZSxcbiAgICB0b2dnbGVSZXNldFBhc3N3b3JkTW9kYWwsXG59KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPERpYWxvZyBpc192aXNpYmxlPXtpc192aXNpYmxlfSBkaXNhYmxlQXBwPXtkaXNhYmxlQXBwfSBlbmFibGVBcHA9e2VuYWJsZUFwcH0gaXNfbG9hZGluZz17aXNfbG9hZGluZ30+XG4gICAgICAgICAgICA8UmVzZXRQYXNzd29yZFxuICAgICAgICAgICAgICAgIGlzX2xvZ2dlZF9pbj17aXNfbG9nZ2VkX2lufVxuICAgICAgICAgICAgICAgIHZlcmlmaWNhdGlvbl9jb2RlPXt2ZXJpZmljYXRpb25fY29kZX1cbiAgICAgICAgICAgICAgICBpc01vZGFsVmlzaWJsZT17dG9nZ2xlUmVzZXRQYXNzd29yZE1vZGFsfVxuICAgICAgICAgICAgICAgIGVuYWJsZUFwcD17ZW5hYmxlQXBwfVxuICAgICAgICAgICAgICAgIGxvZ291dENsaWVudD17bG9nb3V0Q2xpZW50fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9EaWFsb2c+XG4gICAgKTtcbn07XG5cblJlc2V0UGFzc3dvcmRNb2RhbC5wcm9wVHlwZXMgPSB7XG4gICAgZGlzYWJsZUFwcDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZW5hYmxlQXBwOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBpc19sb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc192aXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBsb2dvdXRDbGllbnQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIHRvZ2dsZVJlc2V0UGFzc3dvcmRNb2RhbDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdmVyaWZpY2F0aW9uX2NvZGU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCh7IHVpLCBjbGllbnQgfSkgPT4gKHtcbiAgICBpc192aXNpYmxlOiB1aS5pc19yZXNldF9wYXNzd29yZF9tb2RhbF92aXNpYmxlLFxuICAgIGVuYWJsZUFwcDogdWkuZW5hYmxlQXBwLFxuICAgIGRpc2FibGVBcHA6IHVpLmRpc2FibGVBcHAsXG4gICAgaXNfbG9hZGluZzogdWkuaXNfbG9hZGluZyxcbiAgICBpc19sb2dnZWRfaW46IGNsaWVudC5pc19sb2dnZWRfaW4sXG4gICAgbG9nb3V0Q2xpZW50OiBjbGllbnQubG9nb3V0LFxuICAgIHRvZ2dsZVJlc2V0UGFzc3dvcmRNb2RhbDogdWkudG9nZ2xlUmVzZXRQYXNzd29yZE1vZGFsLFxuICAgIHZlcmlmaWNhdGlvbl9jb2RlOiBjbGllbnQudmVyaWZpY2F0aW9uX2NvZGUucmVzZXRfcGFzc3dvcmQsXG59KSkoUmVzZXRQYXNzd29yZE1vZGFsKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFhQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUtBO0FBQUE7QUFLQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQUE7QUF2REE7QUFpRUE7Ozs7QUFuSUE7QUFDQTtBQXFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./App/Containers/ResetPasswordModal/reset-password-modal.jsx\n");

/***/ })

}]);