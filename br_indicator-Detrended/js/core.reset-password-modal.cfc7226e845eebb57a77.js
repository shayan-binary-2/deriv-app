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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"../node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"../node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ \"../node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @deriv/components */ \"../../components/src/index.js\");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @deriv/shared */ \"../../shared/src/index.js\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @deriv/translations */ \"../../translations/src/index.js\");\n/* harmony import */ var Stores_connect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Stores/connect */ \"./Stores/connect.js\");\n/* harmony import */ var _common_base_login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! _common/base/login */ \"./_common/base/login.js\");\n/* harmony import */ var _common_base_login__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_common_base_login__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var Services_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Services/index */ \"./Services/index.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n\n\n\n\n\nvar resetInitialValues = {\n  password: ''\n};\n\nvar ResetPassword = /*#__PURE__*/function (_React$Component) {\n  _inherits(ResetPassword, _React$Component);\n\n  var _super = _createSuper(ResetPassword);\n\n  function ResetPassword() {\n    var _this;\n\n    _classCallCheck(this, ResetPassword);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    _this.onResetComplete = function (error_msg, actions) {\n      actions.setSubmitting(false);\n      actions.resetForm({\n        password: ''\n      }); // Error would be returned on invalid token (and the like) cases.\n      // TODO: Proper error handling (currently we have no place to put the message)\n\n      if (error_msg) {\n        // eslint-disable-next-line no-console\n        console.error(error_msg);\n        actions.setStatus({\n          error_msg: error_msg\n        });\n        return;\n      }\n\n      actions.setStatus({\n        reset_complete: true\n      });\n\n      _this.props.logoutClient().then(function () {\n        Object(_common_base_login__WEBPACK_IMPORTED_MODULE_8__[\"redirectToLogin\"])(_this.props.is_logged_in);\n      });\n    };\n\n    _this.handleSubmit = function (values, actions) {\n      var verification_code = _this.props.verification_code;\n      var api_request = {\n        reset_password: 1,\n        new_password: values.password,\n        verification_code: verification_code\n      };\n      Services_index__WEBPACK_IMPORTED_MODULE_9__[\"WS\"].resetPassword(api_request).then( /*#__PURE__*/function () {\n        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(response) {\n          return regeneratorRuntime.wrap(function _callee$(_context) {\n            while (1) {\n              switch (_context.prev = _context.next) {\n                case 0:\n                  if (response.error) {\n                    _this.onResetComplete(response.error.message, actions);\n                  } else {\n                    _this.onResetComplete(null, actions);\n                  }\n\n                case 1:\n                case \"end\":\n                  return _context.stop();\n              }\n            }\n          }, _callee);\n        }));\n\n        return function (_x) {\n          return _ref.apply(this, arguments);\n        };\n      }());\n    };\n\n    _this.validateReset = function (values) {\n      var errors = {};\n\n      if (!Object(_deriv_shared__WEBPACK_IMPORTED_MODULE_5__[\"validLength\"])(values.password, {\n        min: 8,\n        max: 25\n      })) {\n        errors.password = Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_6__[\"localize\"])('You should enter {{min_number}}-{{max_number}} characters.', {\n          min_number: 8,\n          max_number: 25\n        });\n      } else if (!Object(_deriv_shared__WEBPACK_IMPORTED_MODULE_5__[\"validPassword\"])(values.password)) {\n        errors.password = Object(_deriv_shared__WEBPACK_IMPORTED_MODULE_5__[\"getErrorMessages\"])().password();\n      }\n\n      return errors;\n    };\n\n    return _this;\n  }\n\n  _createClass(ResetPassword, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n        className: \"reset-password\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](formik__WEBPACK_IMPORTED_MODULE_3__[\"Formik\"], {\n        initialValues: resetInitialValues,\n        initialStatus: {\n          reset_complete: false,\n          error_msg: ''\n        },\n        validate: this.validateReset,\n        onSubmit: this.handleSubmit\n      }, function (_ref2) {\n        var handleBlur = _ref2.handleBlur,\n            errors = _ref2.errors,\n            values = _ref2.values,\n            touched = _ref2.touched,\n            isSubmitting = _ref2.isSubmitting,\n            handleChange = _ref2.handleChange,\n            status = _ref2.status;\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](formik__WEBPACK_IMPORTED_MODULE_3__[\"Form\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, status.reset_complete ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n          className: \"reset-password__password-selection\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", {\n          className: \"reset-password__heading\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_deriv_translations__WEBPACK_IMPORTED_MODULE_6__[\"Localize\"], {\n          i18n_default_text: \"Your password has been changed\"\n        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", {\n          className: \"reset-password__subtext\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_deriv_translations__WEBPACK_IMPORTED_MODULE_6__[\"Localize\"], {\n          i18n_default_text: \"We will now redirect you to the login page.\"\n        }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n          className: \"reset-password__password-selection\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", {\n          className: \"reset-password__heading\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_deriv_translations__WEBPACK_IMPORTED_MODULE_6__[\"Localize\"], {\n          i18n_default_text: \"Choose a new password\"\n        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"fieldset\", {\n          className: \"reset-password__fieldset\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_deriv_components__WEBPACK_IMPORTED_MODULE_4__[\"PasswordMeter\"], {\n          input: values.password,\n          has_error: !!(touched.password && errors.password)\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_deriv_components__WEBPACK_IMPORTED_MODULE_4__[\"PasswordInput\"], {\n          className: \"reset-password__password-field\",\n          name: \"password\",\n          label: Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_6__[\"localize\"])('Create a password'),\n          onChange: handleChange,\n          onBlur: handleBlur,\n          error: touched.password && errors.password,\n          value: values.password,\n          \"data-lpignore\": \"true\",\n          required: true\n        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", {\n          className: \"reset-password__subtext\"\n        }, status.error_msg ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_deriv_translations__WEBPACK_IMPORTED_MODULE_6__[\"Localize\"], {\n          i18n_default_text: \"{{error_msg}}\",\n          values: {\n            error_msg: status.error_msg\n          }\n        }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_deriv_translations__WEBPACK_IMPORTED_MODULE_6__[\"Localize\"], {\n          i18n_default_text: \"Strong passwords contain at least 8 characters, combine uppercase and lowercase letters, numbers, and symbols.\"\n        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_deriv_components__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('reset-password__btn', {\n            'reset-password__btn--disabled': !values.password || errors.password || isSubmitting\n          }),\n          type: \"submit\",\n          is_disabled: !values.password || errors.password || isSubmitting,\n          primary: true\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_deriv_translations__WEBPACK_IMPORTED_MODULE_6__[\"Localize\"], {\n          i18n_default_text: \"Reset my password\"\n        })))));\n      }));\n    }\n  }]);\n\n  return ResetPassword;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nResetPassword.propTypes = {\n  enableApp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  isModalVisible: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  verification_code: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\n\nvar ResetPasswordModal = function ResetPasswordModal(_ref3) {\n  var enableApp = _ref3.enableApp,\n      disableApp = _ref3.disableApp,\n      is_loading = _ref3.is_loading,\n      is_visible = _ref3.is_visible,\n      is_logged_in = _ref3.is_logged_in,\n      logoutClient = _ref3.logoutClient,\n      verification_code = _ref3.verification_code,\n      toggleResetPasswordModal = _ref3.toggleResetPasswordModal;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_deriv_components__WEBPACK_IMPORTED_MODULE_4__[\"Dialog\"], {\n    is_visible: is_visible,\n    disableApp: disableApp,\n    enableApp: enableApp,\n    is_loading: is_loading\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](ResetPassword, {\n    is_logged_in: is_logged_in,\n    verification_code: verification_code,\n    isModalVisible: toggleResetPasswordModal,\n    enableApp: enableApp,\n    logoutClient: logoutClient\n  }));\n};\n\nResetPasswordModal.propTypes = {\n  disableApp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  enableApp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  is_loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,\n  is_visible: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,\n  logoutClient: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  toggleResetPasswordModal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  verification_code: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(Stores_connect__WEBPACK_IMPORTED_MODULE_7__[\"connect\"])(function (_ref4) {\n  var ui = _ref4.ui,\n      client = _ref4.client;\n  return {\n    is_visible: ui.is_reset_password_modal_visible,\n    enableApp: ui.enableApp,\n    disableApp: ui.disableApp,\n    is_loading: ui.is_loading,\n    is_logged_in: client.is_logged_in,\n    logoutClient: client.logout,\n    toggleResetPasswordModal: ui.toggleResetPasswordModal,\n    verification_code: client.verification_code.reset_password\n  };\n})(ResetPasswordModal));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcHAvQ29udGFpbmVycy9SZXNldFBhc3N3b3JkTW9kYWwvcmVzZXQtcGFzc3dvcmQtbW9kYWwuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vQXBwL0NvbnRhaW5lcnMvUmVzZXRQYXNzd29yZE1vZGFsL3Jlc2V0LXBhc3N3b3JkLW1vZGFsLmpzeD84OGVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBGb3JtaWssIEZvcm0gfSBmcm9tICdmb3JtaWsnO1xuaW1wb3J0IHsgQnV0dG9uLCBEaWFsb2csIFBhc3N3b3JkSW5wdXQsIFBhc3N3b3JkTWV0ZXIgfSBmcm9tICdAZGVyaXYvY29tcG9uZW50cyc7XG5pbXBvcnQgeyB2YWxpZFBhc3N3b3JkLCB2YWxpZExlbmd0aCwgZ2V0RXJyb3JNZXNzYWdlcyB9IGZyb20gJ0BkZXJpdi9zaGFyZWQnO1xuaW1wb3J0IHsgbG9jYWxpemUsIExvY2FsaXplIH0gZnJvbSAnQGRlcml2L3RyYW5zbGF0aW9ucyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnU3RvcmVzL2Nvbm5lY3QnO1xuaW1wb3J0IHsgcmVkaXJlY3RUb0xvZ2luIH0gZnJvbSAnX2NvbW1vbi9iYXNlL2xvZ2luJztcbmltcG9ydCB7IFdTIH0gZnJvbSAnU2VydmljZXMvaW5kZXgnO1xuXG5jb25zdCByZXNldEluaXRpYWxWYWx1ZXMgPSB7IHBhc3N3b3JkOiAnJyB9O1xuXG5jbGFzcyBSZXNldFBhc3N3b3JkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBvblJlc2V0Q29tcGxldGUgPSAoZXJyb3JfbXNnLCBhY3Rpb25zKSA9PiB7XG4gICAgICAgIGFjdGlvbnMuc2V0U3VibWl0dGluZyhmYWxzZSk7XG4gICAgICAgIGFjdGlvbnMucmVzZXRGb3JtKHsgcGFzc3dvcmQ6ICcnIH0pO1xuICAgICAgICAvLyBFcnJvciB3b3VsZCBiZSByZXR1cm5lZCBvbiBpbnZhbGlkIHRva2VuIChhbmQgdGhlIGxpa2UpIGNhc2VzLlxuICAgICAgICAvLyBUT0RPOiBQcm9wZXIgZXJyb3IgaGFuZGxpbmcgKGN1cnJlbnRseSB3ZSBoYXZlIG5vIHBsYWNlIHRvIHB1dCB0aGUgbWVzc2FnZSlcbiAgICAgICAgaWYgKGVycm9yX21zZykge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JfbXNnKTtcbiAgICAgICAgICAgIGFjdGlvbnMuc2V0U3RhdHVzKHsgZXJyb3JfbXNnIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgYWN0aW9ucy5zZXRTdGF0dXMoeyByZXNldF9jb21wbGV0ZTogdHJ1ZSB9KTtcblxuICAgICAgICB0aGlzLnByb3BzLmxvZ291dENsaWVudCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgcmVkaXJlY3RUb0xvZ2luKHRoaXMucHJvcHMuaXNfbG9nZ2VkX2luKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGhhbmRsZVN1Ym1pdCA9ICh2YWx1ZXMsIGFjdGlvbnMpID0+IHtcbiAgICAgICAgY29uc3QgeyB2ZXJpZmljYXRpb25fY29kZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgYXBpX3JlcXVlc3QgPSB7XG4gICAgICAgICAgICByZXNldF9wYXNzd29yZDogMSxcbiAgICAgICAgICAgIG5ld19wYXNzd29yZDogdmFsdWVzLnBhc3N3b3JkLFxuICAgICAgICAgICAgdmVyaWZpY2F0aW9uX2NvZGUsXG4gICAgICAgIH07XG5cbiAgICAgICAgV1MucmVzZXRQYXNzd29yZChhcGlfcmVxdWVzdCkudGhlbihhc3luYyByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uUmVzZXRDb21wbGV0ZShyZXNwb25zZS5lcnJvci5tZXNzYWdlLCBhY3Rpb25zKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vblJlc2V0Q29tcGxldGUobnVsbCwgYWN0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2YWxpZGF0ZVJlc2V0ID0gdmFsdWVzID0+IHtcbiAgICAgICAgY29uc3QgZXJyb3JzID0ge307XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgIXZhbGlkTGVuZ3RoKHZhbHVlcy5wYXNzd29yZCwge1xuICAgICAgICAgICAgICAgIG1pbjogOCxcbiAgICAgICAgICAgICAgICBtYXg6IDI1LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBlcnJvcnMucGFzc3dvcmQgPSBsb2NhbGl6ZSgnWW91IHNob3VsZCBlbnRlciB7e21pbl9udW1iZXJ9fS17e21heF9udW1iZXJ9fSBjaGFyYWN0ZXJzLicsIHtcbiAgICAgICAgICAgICAgICBtaW5fbnVtYmVyOiA4LFxuICAgICAgICAgICAgICAgIG1heF9udW1iZXI6IDI1LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXZhbGlkUGFzc3dvcmQodmFsdWVzLnBhc3N3b3JkKSkge1xuICAgICAgICAgICAgZXJyb3JzLnBhc3N3b3JkID0gZ2V0RXJyb3JNZXNzYWdlcygpLnBhc3N3b3JkKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXJyb3JzO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVzZXQtcGFzc3dvcmQnPlxuICAgICAgICAgICAgICAgIDxGb3JtaWtcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17cmVzZXRJbml0aWFsVmFsdWVzfVxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsU3RhdHVzPXt7IHJlc2V0X2NvbXBsZXRlOiBmYWxzZSwgZXJyb3JfbXNnOiAnJyB9fVxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZT17dGhpcy52YWxpZGF0ZVJlc2V0fVxuICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7KHsgaGFuZGxlQmx1ciwgZXJyb3JzLCB2YWx1ZXMsIHRvdWNoZWQsIGlzU3VibWl0dGluZywgaGFuZGxlQ2hhbmdlLCBzdGF0dXMgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdHVzLnJlc2V0X2NvbXBsZXRlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jlc2V0LXBhc3N3b3JkX19wYXNzd29yZC1zZWxlY3Rpb24nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ncmVzZXQtcGFzc3dvcmRfX2hlYWRpbmcnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemUgaTE4bl9kZWZhdWx0X3RleHQ9J1lvdXIgcGFzc3dvcmQgaGFzIGJlZW4gY2hhbmdlZCcgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdyZXNldC1wYXNzd29yZF9fc3VidGV4dCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6ZSBpMThuX2RlZmF1bHRfdGV4dD0nV2Ugd2lsbCBub3cgcmVkaXJlY3QgeW91IHRvIHRoZSBsb2dpbiBwYWdlLicgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZXNldC1wYXNzd29yZF9fcGFzc3dvcmQtc2VsZWN0aW9uJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3Jlc2V0LXBhc3N3b3JkX19oZWFkaW5nJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsaXplIGkxOG5fZGVmYXVsdF90ZXh0PSdDaG9vc2UgYSBuZXcgcGFzc3dvcmQnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9J3Jlc2V0LXBhc3N3b3JkX19maWVsZHNldCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYXNzd29yZE1ldGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dD17dmFsdWVzLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzX2Vycm9yPXshISh0b3VjaGVkLnBhc3N3b3JkICYmIGVycm9ycy5wYXNzd29yZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYXNzd29yZElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdyZXNldC1wYXNzd29yZF9fcGFzc3dvcmQtZmllbGQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ncGFzc3dvcmQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2xvY2FsaXplKCdDcmVhdGUgYSBwYXNzd29yZCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXt0b3VjaGVkLnBhc3N3b3JkICYmIGVycm9ycy5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtbHBpZ25vcmU9J3RydWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFzc3dvcmRNZXRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ncmVzZXQtcGFzc3dvcmRfX3N1YnRleHQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdHVzLmVycm9yX21zZyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkxOG5fZGVmYXVsdF90ZXh0PSd7e2Vycm9yX21zZ319J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcz17eyBlcnJvcl9tc2c6IHN0YXR1cy5lcnJvcl9tc2cgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemUgaTE4bl9kZWZhdWx0X3RleHQ9J1N0cm9uZyBwYXNzd29yZHMgY29udGFpbiBhdCBsZWFzdCA4IGNoYXJhY3RlcnMsIGNvbWJpbmUgdXBwZXJjYXNlIGFuZCBsb3dlcmNhc2UgbGV0dGVycywgbnVtYmVycywgYW5kIHN5bWJvbHMuJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdyZXNldC1wYXNzd29yZF9fYnRuJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Jlc2V0LXBhc3N3b3JkX19idG4tLWRpc2FibGVkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdmFsdWVzLnBhc3N3b3JkIHx8IGVycm9ycy5wYXNzd29yZCB8fCBpc1N1Ym1pdHRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX2Rpc2FibGVkPXshdmFsdWVzLnBhc3N3b3JkIHx8IGVycm9ycy5wYXNzd29yZCB8fCBpc1N1Ym1pdHRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6ZSBpMThuX2RlZmF1bHRfdGV4dD0nUmVzZXQgbXkgcGFzc3dvcmQnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvRm9ybWlrPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5SZXNldFBhc3N3b3JkLnByb3BUeXBlcyA9IHtcbiAgICBlbmFibGVBcHA6IFByb3BUeXBlcy5mdW5jLFxuICAgIGlzTW9kYWxWaXNpYmxlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB2ZXJpZmljYXRpb25fY29kZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmNvbnN0IFJlc2V0UGFzc3dvcmRNb2RhbCA9ICh7XG4gICAgZW5hYmxlQXBwLFxuICAgIGRpc2FibGVBcHAsXG4gICAgaXNfbG9hZGluZyxcbiAgICBpc192aXNpYmxlLFxuICAgIGlzX2xvZ2dlZF9pbixcbiAgICBsb2dvdXRDbGllbnQsXG4gICAgdmVyaWZpY2F0aW9uX2NvZGUsXG4gICAgdG9nZ2xlUmVzZXRQYXNzd29yZE1vZGFsLFxufSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxEaWFsb2cgaXNfdmlzaWJsZT17aXNfdmlzaWJsZX0gZGlzYWJsZUFwcD17ZGlzYWJsZUFwcH0gZW5hYmxlQXBwPXtlbmFibGVBcHB9IGlzX2xvYWRpbmc9e2lzX2xvYWRpbmd9PlxuICAgICAgICAgICAgPFJlc2V0UGFzc3dvcmRcbiAgICAgICAgICAgICAgICBpc19sb2dnZWRfaW49e2lzX2xvZ2dlZF9pbn1cbiAgICAgICAgICAgICAgICB2ZXJpZmljYXRpb25fY29kZT17dmVyaWZpY2F0aW9uX2NvZGV9XG4gICAgICAgICAgICAgICAgaXNNb2RhbFZpc2libGU9e3RvZ2dsZVJlc2V0UGFzc3dvcmRNb2RhbH1cbiAgICAgICAgICAgICAgICBlbmFibGVBcHA9e2VuYWJsZUFwcH1cbiAgICAgICAgICAgICAgICBsb2dvdXRDbGllbnQ9e2xvZ291dENsaWVudH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvRGlhbG9nPlxuICAgICk7XG59O1xuXG5SZXNldFBhc3N3b3JkTW9kYWwucHJvcFR5cGVzID0ge1xuICAgIGRpc2FibGVBcHA6IFByb3BUeXBlcy5mdW5jLFxuICAgIGVuYWJsZUFwcDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaXNfbG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNfdmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgbG9nb3V0Q2xpZW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgICB0b2dnbGVSZXNldFBhc3N3b3JkTW9kYWw6IFByb3BUeXBlcy5mdW5jLFxuICAgIHZlcmlmaWNhdGlvbl9jb2RlOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgoeyB1aSwgY2xpZW50IH0pID0+ICh7XG4gICAgaXNfdmlzaWJsZTogdWkuaXNfcmVzZXRfcGFzc3dvcmRfbW9kYWxfdmlzaWJsZSxcbiAgICBlbmFibGVBcHA6IHVpLmVuYWJsZUFwcCxcbiAgICBkaXNhYmxlQXBwOiB1aS5kaXNhYmxlQXBwLFxuICAgIGlzX2xvYWRpbmc6IHVpLmlzX2xvYWRpbmcsXG4gICAgaXNfbG9nZ2VkX2luOiBjbGllbnQuaXNfbG9nZ2VkX2luLFxuICAgIGxvZ291dENsaWVudDogY2xpZW50LmxvZ291dCxcbiAgICB0b2dnbGVSZXNldFBhc3N3b3JkTW9kYWw6IHVpLnRvZ2dsZVJlc2V0UGFzc3dvcmRNb2RhbCxcbiAgICB2ZXJpZmljYXRpb25fY29kZTogY2xpZW50LnZlcmlmaWNhdGlvbl9jb2RlLnJlc2V0X3Bhc3N3b3JkLFxufSkpKFJlc2V0UGFzc3dvcmRNb2RhbCk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQWFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBS0E7QUFBQTtBQUtBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFBQTtBQXZEQTtBQWlFQTs7OztBQW5JQTtBQUNBO0FBcUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFVQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./App/Containers/ResetPasswordModal/reset-password-modal.jsx\n");

/***/ })

}]);