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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"../node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"../node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ \"../node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @deriv/components */ \"../../components/src/index.js\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @deriv/translations */ \"../../translations/lib/translations.main.js\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_deriv_translations__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var Stores_connect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Stores/connect */ \"./Stores/connect.js\");\n/* harmony import */ var Utils_Validator_declarative_validation_rules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Utils/Validator/declarative-validation-rules */ \"./Utils/Validator/declarative-validation-rules.js\");\n/* harmony import */ var _common_base_login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! _common/base/login */ \"./_common/base/login.js\");\n/* harmony import */ var _common_base_login__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_common_base_login__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var Services_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Services/index */ \"./Services/index.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n\n\n\n\n\nvar resetInitialValues = {\n  password: ''\n};\n\nvar ResetPassword = /*#__PURE__*/function (_React$Component) {\n  _inherits(ResetPassword, _React$Component);\n\n  var _super = _createSuper(ResetPassword);\n\n  function ResetPassword() {\n    var _this;\n\n    _classCallCheck(this, ResetPassword);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    _this.onResetComplete = function (error_msg, actions) {\n      actions.setSubmitting(false);\n      actions.resetForm({\n        password: ''\n      }); // Error would be returned on invalid token (and the like) cases.\n      // TODO: Proper error handling (currently we have no place to put the message)\n\n      if (error_msg) {\n        // eslint-disable-next-line no-console\n        console.error(error_msg);\n        actions.setStatus({\n          error_msg: error_msg\n        });\n        return;\n      }\n\n      actions.setStatus({\n        reset_complete: true\n      });\n\n      _this.props.logoutClient().then(function () {\n        Object(_common_base_login__WEBPACK_IMPORTED_MODULE_8__[\"redirectToLogin\"])();\n      });\n    };\n\n    _this.handleSubmit = function (values, actions) {\n      var verification_code = _this.props.verification_code;\n      var api_request = {\n        reset_password: 1,\n        new_password: values.password,\n        verification_code: verification_code\n      };\n      Services_index__WEBPACK_IMPORTED_MODULE_9__[\"WS\"].resetPassword(api_request).then( /*#__PURE__*/function () {\n        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(response) {\n          return regeneratorRuntime.wrap(function _callee$(_context) {\n            while (1) {\n              switch (_context.prev = _context.next) {\n                case 0:\n                  if (response.error) {\n                    _this.onResetComplete(response.error.message, actions);\n                  } else {\n                    _this.onResetComplete(null, actions);\n                  }\n\n                case 1:\n                case \"end\":\n                  return _context.stop();\n              }\n            }\n          }, _callee);\n        }));\n\n        return function (_x) {\n          return _ref.apply(this, arguments);\n        };\n      }());\n    };\n\n    _this.validateReset = function (values) {\n      var errors = {};\n      var min_password_length = 6;\n\n      if (values.password && (values.password.length < min_password_length || !Object(Utils_Validator_declarative_validation_rules__WEBPACK_IMPORTED_MODULE_7__[\"validPassword\"])(values.password))) {\n        errors.password = true;\n      }\n\n      return errors;\n    };\n\n    return _this;\n  }\n\n  _createClass(ResetPassword, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n        className: \"reset-password\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](formik__WEBPACK_IMPORTED_MODULE_3__[\"Formik\"], {\n        initialValues: resetInitialValues,\n        initialStatus: {\n          reset_complete: false,\n          error_msg: ''\n        },\n        validate: this.validateReset,\n        onSubmit: this.handleSubmit\n      }, function (_ref2) {\n        var handleBlur = _ref2.handleBlur,\n            errors = _ref2.errors,\n            values = _ref2.values,\n            touched = _ref2.touched,\n            isSubmitting = _ref2.isSubmitting,\n            handleChange = _ref2.handleChange,\n            status = _ref2.status;\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](formik__WEBPACK_IMPORTED_MODULE_3__[\"Form\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, status.reset_complete ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n          className: \"reset-password__password-selection\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", {\n          className: \"reset-password__heading\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_deriv_translations__WEBPACK_IMPORTED_MODULE_5__[\"Localize\"], {\n          i18n_default_text: \"Your password has been changed\"\n        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", {\n          className: \"reset-password__subtext\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_deriv_translations__WEBPACK_IMPORTED_MODULE_5__[\"Localize\"], {\n          i18n_default_text: \"We will now redirect you to the login page.\"\n        }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n          className: \"reset-password__password-selection\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", {\n          className: \"reset-password__heading\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_deriv_translations__WEBPACK_IMPORTED_MODULE_5__[\"Localize\"], {\n          i18n_default_text: \"Choose a new password\"\n        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"fieldset\", {\n          className: \"reset-password__fieldset\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_deriv_components__WEBPACK_IMPORTED_MODULE_4__[\"PasswordMeter\"], {\n          input: values.password,\n          has_error: !!(touched.password && errors.password)\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_deriv_components__WEBPACK_IMPORTED_MODULE_4__[\"PasswordInput\"], {\n          className: \"reset-password__password-field\",\n          name: \"password\",\n          label: Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_5__[\"localize\"])('Create a password'),\n          onChange: handleChange,\n          onBlur: handleBlur,\n          error: touched.password && errors.password,\n          value: values.password,\n          \"data-lpignore\": \"true\",\n          required: true\n        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", {\n          className: \"reset-password__subtext\"\n        }, status.error_msg ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_deriv_translations__WEBPACK_IMPORTED_MODULE_5__[\"Localize\"], {\n          i18n_default_text: \"{{error_msg}}\",\n          values: {\n            error_msg: status.error_msg\n          }\n        }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_deriv_translations__WEBPACK_IMPORTED_MODULE_5__[\"Localize\"], {\n          i18n_default_text: \"Strong passwords contain at least 6 characters, combine uppercase and lowercase letters, numbers, and symbols.\"\n        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_deriv_components__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('reset-password__btn', {\n            'reset-password__btn--disabled': !values.password || errors.password || isSubmitting\n          }),\n          type: \"submit\",\n          is_disabled: !values.password || errors.password || isSubmitting,\n          primary: true\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_deriv_translations__WEBPACK_IMPORTED_MODULE_5__[\"Localize\"], {\n          i18n_default_text: \"Reset my password\"\n        })))));\n      }));\n    }\n  }]);\n\n  return ResetPassword;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nResetPassword.propTypes = {\n  enableApp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  isModalVisible: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  verification_code: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\n\nvar ResetPasswordModal = function ResetPasswordModal(_ref3) {\n  var enableApp = _ref3.enableApp,\n      disableApp = _ref3.disableApp,\n      is_loading = _ref3.is_loading,\n      is_visible = _ref3.is_visible,\n      logoutClient = _ref3.logoutClient,\n      verification_code = _ref3.verification_code,\n      toggleResetPasswordModal = _ref3.toggleResetPasswordModal;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_deriv_components__WEBPACK_IMPORTED_MODULE_4__[\"Dialog\"], {\n    is_visible: is_visible,\n    disableApp: disableApp,\n    enableApp: enableApp,\n    is_loading: is_loading\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](ResetPassword, {\n    verification_code: verification_code,\n    isModalVisible: toggleResetPasswordModal,\n    enableApp: enableApp,\n    logoutClient: logoutClient\n  }));\n};\n\nResetPasswordModal.propTypes = {\n  disableApp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  enableApp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  is_loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,\n  is_visible: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,\n  logoutClient: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  toggleResetPasswordModal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  verification_code: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(Stores_connect__WEBPACK_IMPORTED_MODULE_6__[\"connect\"])(function (_ref4) {\n  var ui = _ref4.ui,\n      client = _ref4.client;\n  return {\n    is_visible: ui.is_reset_password_modal_visible,\n    enableApp: ui.enableApp,\n    disableApp: ui.disableApp,\n    is_loading: ui.is_loading,\n    logoutClient: client.logout,\n    toggleResetPasswordModal: ui.toggleResetPasswordModal,\n    verification_code: client.verification_code.reset_password\n  };\n})(ResetPasswordModal));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcHAvQ29udGFpbmVycy9SZXNldFBhc3N3b3JkTW9kYWwvcmVzZXQtcGFzc3dvcmQtbW9kYWwuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vQXBwL0NvbnRhaW5lcnMvUmVzZXRQYXNzd29yZE1vZGFsL3Jlc2V0LXBhc3N3b3JkLW1vZGFsLmpzeD84OGVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBGb3JtaWssIEZvcm0gfSBmcm9tICdmb3JtaWsnO1xuaW1wb3J0IHsgQnV0dG9uLCBEaWFsb2csIFBhc3N3b3JkSW5wdXQsIFBhc3N3b3JkTWV0ZXIgfSBmcm9tICdAZGVyaXYvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBsb2NhbGl6ZSwgTG9jYWxpemUgfSBmcm9tICdAZGVyaXYvdHJhbnNsYXRpb25zJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdTdG9yZXMvY29ubmVjdCc7XG5pbXBvcnQgeyB2YWxpZFBhc3N3b3JkIH0gZnJvbSAnVXRpbHMvVmFsaWRhdG9yL2RlY2xhcmF0aXZlLXZhbGlkYXRpb24tcnVsZXMnO1xuaW1wb3J0IHsgcmVkaXJlY3RUb0xvZ2luIH0gZnJvbSAnX2NvbW1vbi9iYXNlL2xvZ2luJztcbmltcG9ydCB7IFdTIH0gZnJvbSAnU2VydmljZXMvaW5kZXgnO1xuXG5jb25zdCByZXNldEluaXRpYWxWYWx1ZXMgPSB7IHBhc3N3b3JkOiAnJyB9O1xuXG5jbGFzcyBSZXNldFBhc3N3b3JkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBvblJlc2V0Q29tcGxldGUgPSAoZXJyb3JfbXNnLCBhY3Rpb25zKSA9PiB7XG4gICAgICAgIGFjdGlvbnMuc2V0U3VibWl0dGluZyhmYWxzZSk7XG4gICAgICAgIGFjdGlvbnMucmVzZXRGb3JtKHsgcGFzc3dvcmQ6ICcnIH0pO1xuICAgICAgICAvLyBFcnJvciB3b3VsZCBiZSByZXR1cm5lZCBvbiBpbnZhbGlkIHRva2VuIChhbmQgdGhlIGxpa2UpIGNhc2VzLlxuICAgICAgICAvLyBUT0RPOiBQcm9wZXIgZXJyb3IgaGFuZGxpbmcgKGN1cnJlbnRseSB3ZSBoYXZlIG5vIHBsYWNlIHRvIHB1dCB0aGUgbWVzc2FnZSlcbiAgICAgICAgaWYgKGVycm9yX21zZykge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JfbXNnKTtcbiAgICAgICAgICAgIGFjdGlvbnMuc2V0U3RhdHVzKHsgZXJyb3JfbXNnIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgYWN0aW9ucy5zZXRTdGF0dXMoeyByZXNldF9jb21wbGV0ZTogdHJ1ZSB9KTtcblxuICAgICAgICB0aGlzLnByb3BzLmxvZ291dENsaWVudCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgcmVkaXJlY3RUb0xvZ2luKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBoYW5kbGVTdWJtaXQgPSAodmFsdWVzLCBhY3Rpb25zKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdmVyaWZpY2F0aW9uX2NvZGUgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGFwaV9yZXF1ZXN0ID0ge1xuICAgICAgICAgICAgcmVzZXRfcGFzc3dvcmQ6IDEsXG4gICAgICAgICAgICBuZXdfcGFzc3dvcmQ6IHZhbHVlcy5wYXNzd29yZCxcbiAgICAgICAgICAgIHZlcmlmaWNhdGlvbl9jb2RlLFxuICAgICAgICB9O1xuXG4gICAgICAgIFdTLnJlc2V0UGFzc3dvcmQoYXBpX3JlcXVlc3QpLnRoZW4oYXN5bmMgcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vblJlc2V0Q29tcGxldGUocmVzcG9uc2UuZXJyb3IubWVzc2FnZSwgYWN0aW9ucyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMub25SZXNldENvbXBsZXRlKG51bGwsIGFjdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgdmFsaWRhdGVSZXNldCA9IHZhbHVlcyA9PiB7XG4gICAgICAgIGNvbnN0IGVycm9ycyA9IHt9O1xuICAgICAgICBjb25zdCBtaW5fcGFzc3dvcmRfbGVuZ3RoID0gNjtcblxuICAgICAgICBpZiAodmFsdWVzLnBhc3N3b3JkICYmICh2YWx1ZXMucGFzc3dvcmQubGVuZ3RoIDwgbWluX3Bhc3N3b3JkX2xlbmd0aCB8fCAhdmFsaWRQYXNzd29yZCh2YWx1ZXMucGFzc3dvcmQpKSkge1xuICAgICAgICAgICAgZXJyb3JzLnBhc3N3b3JkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlcnJvcnM7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZXNldC1wYXNzd29yZCc+XG4gICAgICAgICAgICAgICAgPEZvcm1pa1xuICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXtyZXNldEluaXRpYWxWYWx1ZXN9XG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxTdGF0dXM9e3sgcmVzZXRfY29tcGxldGU6IGZhbHNlLCBlcnJvcl9tc2c6ICcnIH19XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlPXt0aGlzLnZhbGlkYXRlUmVzZXR9XG4gICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHsoeyBoYW5kbGVCbHVyLCBlcnJvcnMsIHZhbHVlcywgdG91Y2hlZCwgaXNTdWJtaXR0aW5nLCBoYW5kbGVDaGFuZ2UsIHN0YXR1cyB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0dXMucmVzZXRfY29tcGxldGUgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVzZXQtcGFzc3dvcmRfX3Bhc3N3b3JkLXNlbGVjdGlvbic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdyZXNldC1wYXNzd29yZF9faGVhZGluZyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6ZSBpMThuX2RlZmF1bHRfdGV4dD0nWW91ciBwYXNzd29yZCBoYXMgYmVlbiBjaGFuZ2VkJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3Jlc2V0LXBhc3N3b3JkX19zdWJ0ZXh0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsaXplIGkxOG5fZGVmYXVsdF90ZXh0PSdXZSB3aWxsIG5vdyByZWRpcmVjdCB5b3UgdG8gdGhlIGxvZ2luIHBhZ2UuJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jlc2V0LXBhc3N3b3JkX19wYXNzd29yZC1zZWxlY3Rpb24nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ncmVzZXQtcGFzc3dvcmRfX2hlYWRpbmcnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemUgaTE4bl9kZWZhdWx0X3RleHQ9J0Nob29zZSBhIG5ldyBwYXNzd29yZCcgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT0ncmVzZXQtcGFzc3dvcmRfX2ZpZWxkc2V0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhc3N3b3JkTWV0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0PXt2YWx1ZXMucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNfZXJyb3I9eyEhKHRvdWNoZWQucGFzc3dvcmQgJiYgZXJyb3JzLnBhc3N3b3JkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhc3N3b3JkSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3Jlc2V0LXBhc3N3b3JkX19wYXNzd29yZC1maWVsZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdwYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17bG9jYWxpemUoJ0NyZWF0ZSBhIHBhc3N3b3JkJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e3RvdWNoZWQucGFzc3dvcmQgJiYgZXJyb3JzLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1scGlnbm9yZT0ndHJ1ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXNzd29yZE1ldGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdyZXNldC1wYXNzd29yZF9fc3VidGV4dCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0dXMuZXJyb3JfbXNnID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsaXplXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaTE4bl9kZWZhdWx0X3RleHQ9J3t7ZXJyb3JfbXNnfX0nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzPXt7IGVycm9yX21zZzogc3RhdHVzLmVycm9yX21zZyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6ZSBpMThuX2RlZmF1bHRfdGV4dD0nU3Ryb25nIHBhc3N3b3JkcyBjb250YWluIGF0IGxlYXN0IDYgY2hhcmFjdGVycywgY29tYmluZSB1cHBlcmNhc2UgYW5kIGxvd2VyY2FzZSBsZXR0ZXJzLCBudW1iZXJzLCBhbmQgc3ltYm9scy4nIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3Jlc2V0LXBhc3N3b3JkX19idG4nLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmVzZXQtcGFzc3dvcmRfX2J0bi0tZGlzYWJsZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICF2YWx1ZXMucGFzc3dvcmQgfHwgZXJyb3JzLnBhc3N3b3JkIHx8IGlzU3VibWl0dGluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfZGlzYWJsZWQ9eyF2YWx1ZXMucGFzc3dvcmQgfHwgZXJyb3JzLnBhc3N3b3JkIHx8IGlzU3VibWl0dGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsaXplIGkxOG5fZGVmYXVsdF90ZXh0PSdSZXNldCBteSBwYXNzd29yZCcgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9Gb3JtaWs+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblJlc2V0UGFzc3dvcmQucHJvcFR5cGVzID0ge1xuICAgIGVuYWJsZUFwcDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaXNNb2RhbFZpc2libGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIHZlcmlmaWNhdGlvbl9jb2RlOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuY29uc3QgUmVzZXRQYXNzd29yZE1vZGFsID0gKHtcbiAgICBlbmFibGVBcHAsXG4gICAgZGlzYWJsZUFwcCxcbiAgICBpc19sb2FkaW5nLFxuICAgIGlzX3Zpc2libGUsXG4gICAgbG9nb3V0Q2xpZW50LFxuICAgIHZlcmlmaWNhdGlvbl9jb2RlLFxuICAgIHRvZ2dsZVJlc2V0UGFzc3dvcmRNb2RhbCxcbn0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8RGlhbG9nIGlzX3Zpc2libGU9e2lzX3Zpc2libGV9IGRpc2FibGVBcHA9e2Rpc2FibGVBcHB9IGVuYWJsZUFwcD17ZW5hYmxlQXBwfSBpc19sb2FkaW5nPXtpc19sb2FkaW5nfT5cbiAgICAgICAgICAgIDxSZXNldFBhc3N3b3JkXG4gICAgICAgICAgICAgICAgdmVyaWZpY2F0aW9uX2NvZGU9e3ZlcmlmaWNhdGlvbl9jb2RlfVxuICAgICAgICAgICAgICAgIGlzTW9kYWxWaXNpYmxlPXt0b2dnbGVSZXNldFBhc3N3b3JkTW9kYWx9XG4gICAgICAgICAgICAgICAgZW5hYmxlQXBwPXtlbmFibGVBcHB9XG4gICAgICAgICAgICAgICAgbG9nb3V0Q2xpZW50PXtsb2dvdXRDbGllbnR9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L0RpYWxvZz5cbiAgICApO1xufTtcblxuUmVzZXRQYXNzd29yZE1vZGFsLnByb3BUeXBlcyA9IHtcbiAgICBkaXNhYmxlQXBwOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBlbmFibGVBcHA6IFByb3BUeXBlcy5mdW5jLFxuICAgIGlzX2xvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzX3Zpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGxvZ291dENsaWVudDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdG9nZ2xlUmVzZXRQYXNzd29yZE1vZGFsOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB2ZXJpZmljYXRpb25fY29kZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKHsgdWksIGNsaWVudCB9KSA9PiAoe1xuICAgIGlzX3Zpc2libGU6IHVpLmlzX3Jlc2V0X3Bhc3N3b3JkX21vZGFsX3Zpc2libGUsXG4gICAgZW5hYmxlQXBwOiB1aS5lbmFibGVBcHAsXG4gICAgZGlzYWJsZUFwcDogdWkuZGlzYWJsZUFwcCxcbiAgICBpc19sb2FkaW5nOiB1aS5pc19sb2FkaW5nLFxuICAgIGxvZ291dENsaWVudDogY2xpZW50LmxvZ291dCxcbiAgICB0b2dnbGVSZXNldFBhc3N3b3JkTW9kYWw6IHVpLnRvZ2dsZVJlc2V0UGFzc3dvcmRNb2RhbCxcbiAgICB2ZXJpZmljYXRpb25fY29kZTogY2xpZW50LnZlcmlmaWNhdGlvbl9jb2RlLnJlc2V0X3Bhc3N3b3JkLFxufSkpKFJlc2V0UGFzc3dvcmRNb2RhbCk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBYUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFLQTtBQUFBO0FBS0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUFBO0FBdkRBO0FBaUVBOzs7O0FBMUhBO0FBQ0E7QUE0SEE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./App/Containers/ResetPasswordModal/reset-password-modal.jsx\n");

/***/ })

}]);