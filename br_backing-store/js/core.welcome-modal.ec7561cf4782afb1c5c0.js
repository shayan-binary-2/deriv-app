(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["welcome-modal"],{

/***/ "./App/Containers/WelcomeModal/index.js":
/*!**********************************************!*\
  !*** ./App/Containers/WelcomeModal/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _welcome_modal_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome-modal.jsx */ \"./App/Containers/WelcomeModal/welcome-modal.jsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _welcome_modal_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcHAvQ29udGFpbmVycy9XZWxjb21lTW9kYWwvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9BcHAvQ29udGFpbmVycy9XZWxjb21lTW9kYWwvaW5kZXguanM/MzczMCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmcm9tICcuL3dlbGNvbWUtbW9kYWwuanN4JztcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./App/Containers/WelcomeModal/index.js\n");

/***/ }),

/***/ "./App/Containers/WelcomeModal/welcome-modal.jsx":
/*!*******************************************************!*\
  !*** ./App/Containers/WelcomeModal/welcome-modal.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ \"../node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"../node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"../node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @deriv/components */ \"../../components/src/index.js\");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @deriv/shared */ \"../../shared/src/index.js\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @deriv/translations */ \"../../translations/src/index.js\");\n/* harmony import */ var Stores_connect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Stores/connect */ \"./Stores/connect.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n\nvar WelcomeColumn = function WelcomeColumn(_ref) {\n  var button_text = _ref.button_text,\n      className = _ref.className,\n      description = _ref.description,\n      icons = _ref.icons,\n      is_hovered = _ref.is_hovered,\n      onButtonClick = _ref.onButtonClick,\n      onMouseEnter = _ref.onMouseEnter,\n      onMouseLeave = _ref.onMouseLeave,\n      platforms = _ref.platforms,\n      title = _ref.title;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('welcome-column', className),\n    onMouseEnter: onMouseEnter,\n    onMouseLeave: onMouseLeave\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: \"welcome-column__icons\"\n  }, icons.map(function (icon, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_deriv_components__WEBPACK_IMPORTED_MODULE_4__[\"Icon\"], {\n      className: \"welcome-column__icon\",\n      icon: icon,\n      key: index,\n      size: 48\n    });\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: \"welcome-column__title\"\n  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: \"welcome-column__description\"\n  }, description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: \"welcome-column__platforms\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", {\n    className: \"welcome-column__platforms__title\"\n  }, Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_6__[\"localize\"])('Platforms')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: \"welcome-column__platforms__container\"\n  }, platforms.map(function (platform, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n      className: \"welcome-column__platform\",\n      key: index\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_deriv_components__WEBPACK_IMPORTED_MODULE_4__[\"Icon\"], {\n      className: \"welcome-column__platform__icon\",\n      icon: platform.icon,\n      size: 32\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h3\", {\n      className: \"welcome-column__platform__title\"\n    }, platform.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", {\n      className: \"welcome-column__platform__description\"\n    }, platform.description));\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_deriv_components__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n    className: \"welcome-column__button\",\n    onClick: onButtonClick,\n    large: true,\n    primary: is_hovered || Object(_deriv_shared__WEBPACK_IMPORTED_MODULE_5__[\"isMobile\"])(),\n    secondary: !(is_hovered || Object(_deriv_shared__WEBPACK_IMPORTED_MODULE_5__[\"isMobile\"])())\n  }, button_text));\n};\n\nWelcomeColumn.propTypes = {\n  button_text: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n  description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n  icons: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,\n  onButtonClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,\n  platforms: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object),\n  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string\n};\n\nvar WelcomeModal = function WelcomeModal(_ref2) {\n  var toggleWelcomeModal = _ref2.toggleWelcomeModal,\n      history = _ref2.history;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"](null),\n      _React$useState2 = _slicedToArray(_React$useState, 2),\n      hovered = _React$useState2[0],\n      setHovered = _React$useState2[1];\n\n  var switchPlatform = react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"](function (route) {\n    toggleWelcomeModal(false);\n    history.push(route);\n  }, [toggleWelcomeModal, history]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_deriv_components__WEBPACK_IMPORTED_MODULE_4__[\"Modal\"], {\n    width: \"760px\",\n    className: \"welcome\",\n    is_open: true,\n    toggleModal: function toggleModal() {},\n    has_close_icon: false,\n    has_outer_content: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_deriv_components__WEBPACK_IMPORTED_MODULE_4__[\"ThemedScrollbars\"], {\n    height: 700\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h2\", {\n    className: \"welcome__title\"\n  }, Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_6__[\"localize\"])('Where would you like to start?')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('welcome__message', 'welcome__message--left', {\n      'welcome__message--visible': hovered === 'left'\n    })\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", {\n    className: \"welcome__message__text\"\n  }, Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_6__[\"localize\"])('The choice of professionals')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_deriv_components__WEBPACK_IMPORTED_MODULE_4__[\"Icon\"], {\n    icon: \"IcArrowRightCurly\",\n    size: 43\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('welcome__message', 'welcome__message--right', {\n      'welcome__message--visible': hovered === 'right'\n    })\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_deriv_components__WEBPACK_IMPORTED_MODULE_4__[\"Icon\"], {\n    icon: \"IcArrowLeftCurly\",\n    size: 43\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", {\n    className: \"welcome__message__text\"\n  }, Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_6__[\"localize\"])('Not sure? try this'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: \"welcome__body\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](WelcomeColumn, {\n    button_text: Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_6__[\"localize\"])('Start here'),\n    className: \"welcome-column--left\",\n    description: Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_6__[\"localize\"])('Trade with leverage and low spreads for better returns on successful trades.'),\n    icons: ['IcPercentSolid'],\n    is_hovered: hovered === 'left',\n    onButtonClick: function onButtonClick() {\n      return switchPlatform(_deriv_shared__WEBPACK_IMPORTED_MODULE_5__[\"routes\"].mt5);\n    },\n    platforms: [{\n      icon: 'IcBrandDmt5',\n      title: Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_6__[\"localize\"])('Deriv MetaTrader 5 (DMT5)'),\n      description: Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_6__[\"localize\"])('The platform of choice for professionals.')\n    }],\n    title: Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_6__[\"localize\"])('Margin (MetaTrader 5)'),\n    onMouseEnter: function onMouseEnter() {\n      setHovered('left');\n    },\n    onMouseLeave: function onMouseLeave() {\n      setHovered(null);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](WelcomeColumn, {\n    button_text: Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_6__[\"localize\"])('Start here'),\n    className: \"welcome-column--right\",\n    description: Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_6__[\"localize\"])('Earn fixed payouts with options, or trade multipliers to combine the upside of margin trading with the simplicity of options.'),\n    icons: ['IcUpDownSolid', 'IcCrossSolid'],\n    is_hovered: hovered === 'right',\n    onButtonClick: function onButtonClick() {\n      return switchPlatform(_deriv_shared__WEBPACK_IMPORTED_MODULE_5__[\"routes\"].trade);\n    },\n    platforms: [{\n      icon: 'IcBrandDtrader',\n      title: Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_6__[\"localize\"])('DTrader'),\n      description: Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_6__[\"localize\"])('Start trading with a powerful, yet easy-to-use platform.')\n    }, {\n      icon: 'IcBrandDbot',\n      title: Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_6__[\"localize\"])('DBot'),\n      description: Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_6__[\"localize\"])('Automate your trading ideas without coding.')\n    }],\n    title: Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_6__[\"localize\"])('Options & Multipliers'),\n    onMouseEnter: function onMouseEnter() {\n      setHovered('right');\n    },\n    onMouseLeave: function onMouseLeave() {\n      setHovered(null);\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", {\n    className: \"welcome__footer\"\n  }, Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_6__[\"localize\"])('Whatever you choose, you will always be able to access Margin or Options & Multipliers at any time'))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_1__[\"withRouter\"])(Object(Stores_connect__WEBPACK_IMPORTED_MODULE_7__[\"connect\"])(function (_ref3) {\n  var ui = _ref3.ui;\n  return {\n    toggleWelcomeModal: ui.toggleWelcomeModal\n  };\n})(WelcomeModal)));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcHAvQ29udGFpbmVycy9XZWxjb21lTW9kYWwvd2VsY29tZS1tb2RhbC5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9BcHAvQ29udGFpbmVycy9XZWxjb21lTW9kYWwvd2VsY29tZS1tb2RhbC5qc3g/MGU3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBNb2RhbCwgSWNvbiwgQnV0dG9uLCBUaGVtZWRTY3JvbGxiYXJzIH0gZnJvbSAnQGRlcml2L2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgcm91dGVzLCBpc01vYmlsZSB9IGZyb20gJ0BkZXJpdi9zaGFyZWQnO1xuaW1wb3J0IHsgbG9jYWxpemUgfSBmcm9tICdAZGVyaXYvdHJhbnNsYXRpb25zJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdTdG9yZXMvY29ubmVjdCc7XG5cbmNvbnN0IFdlbGNvbWVDb2x1bW4gPSAoe1xuICAgIGJ1dHRvbl90ZXh0LFxuICAgIGNsYXNzTmFtZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBpY29ucyxcbiAgICBpc19ob3ZlcmVkLFxuICAgIG9uQnV0dG9uQ2xpY2ssXG4gICAgb25Nb3VzZUVudGVyLFxuICAgIG9uTW91c2VMZWF2ZSxcbiAgICBwbGF0Zm9ybXMsXG4gICAgdGl0bGUsXG59KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCd3ZWxjb21lLWNvbHVtbicsIGNsYXNzTmFtZSl9XG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9e29uTW91c2VFbnRlcn1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17b25Nb3VzZUxlYXZlfVxuICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2VsY29tZS1jb2x1bW5fX2ljb25zJz5cbiAgICAgICAgICAgICAgICB7aWNvbnMubWFwKChpY29uLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9J3dlbGNvbWUtY29sdW1uX19pY29uJyBpY29uPXtpY29ufSBrZXk9e2luZGV4fSBzaXplPXs0OH0gLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dlbGNvbWUtY29sdW1uX190aXRsZSc+e3RpdGxlfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dlbGNvbWUtY29sdW1uX19kZXNjcmlwdGlvbic+e2Rlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dlbGNvbWUtY29sdW1uX19wbGF0Zm9ybXMnPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nd2VsY29tZS1jb2x1bW5fX3BsYXRmb3Jtc19fdGl0bGUnPntsb2NhbGl6ZSgnUGxhdGZvcm1zJyl9PC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3ZWxjb21lLWNvbHVtbl9fcGxhdGZvcm1zX19jb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICB7cGxhdGZvcm1zLm1hcCgocGxhdGZvcm0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2VsY29tZS1jb2x1bW5fX3BsYXRmb3JtJyBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9J3dlbGNvbWUtY29sdW1uX19wbGF0Zm9ybV9faWNvbicgaWNvbj17cGxhdGZvcm0uaWNvbn0gc2l6ZT17MzJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nd2VsY29tZS1jb2x1bW5fX3BsYXRmb3JtX190aXRsZSc+e3BsYXRmb3JtLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd3ZWxjb21lLWNvbHVtbl9fcGxhdGZvcm1fX2Rlc2NyaXB0aW9uJz57cGxhdGZvcm0uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3ZWxjb21lLWNvbHVtbl9fYnV0dG9uJ1xuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQnV0dG9uQ2xpY2t9XG4gICAgICAgICAgICAgICAgbGFyZ2VcbiAgICAgICAgICAgICAgICBwcmltYXJ5PXtpc19ob3ZlcmVkIHx8IGlzTW9iaWxlKCl9XG4gICAgICAgICAgICAgICAgc2Vjb25kYXJ5PXshKGlzX2hvdmVyZWQgfHwgaXNNb2JpbGUoKSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2J1dHRvbl90ZXh0fVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5XZWxjb21lQ29sdW1uLnByb3BUeXBlcyA9IHtcbiAgICBidXR0b25fdGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpY29uczogUHJvcFR5cGVzLmFycmF5LFxuICAgIG9uQnV0dG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIHBsYXRmb3JtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5jb25zdCBXZWxjb21lTW9kYWwgPSAoeyB0b2dnbGVXZWxjb21lTW9kYWwsIGhpc3RvcnkgfSkgPT4ge1xuICAgIGNvbnN0IFtob3ZlcmVkLCBzZXRIb3ZlcmVkXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuXG4gICAgY29uc3Qgc3dpdGNoUGxhdGZvcm0gPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAgICAgcm91dGUgPT4ge1xuICAgICAgICAgICAgdG9nZ2xlV2VsY29tZU1vZGFsKGZhbHNlKTtcbiAgICAgICAgICAgIGhpc3RvcnkucHVzaChyb3V0ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIFt0b2dnbGVXZWxjb21lTW9kYWwsIGhpc3RvcnldXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgd2lkdGg9Jzc2MHB4J1xuICAgICAgICAgICAgY2xhc3NOYW1lPSd3ZWxjb21lJ1xuICAgICAgICAgICAgaXNfb3Blbj17dHJ1ZX1cbiAgICAgICAgICAgIHRvZ2dsZU1vZGFsPXsoKSA9PiB7fX1cbiAgICAgICAgICAgIGhhc19jbG9zZV9pY29uPXtmYWxzZX1cbiAgICAgICAgICAgIGhhc19vdXRlcl9jb250ZW50PXt0cnVlfVxuICAgICAgICA+XG4gICAgICAgICAgICA8VGhlbWVkU2Nyb2xsYmFycyBoZWlnaHQ9ezcwMH0+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nd2VsY29tZV9fdGl0bGUnPntsb2NhbGl6ZSgnV2hlcmUgd291bGQgeW91IGxpa2UgdG8gc3RhcnQ/Jyl9PC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnd2VsY29tZV9fbWVzc2FnZScsICd3ZWxjb21lX19tZXNzYWdlLS1sZWZ0Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3dlbGNvbWVfX21lc3NhZ2UtLXZpc2libGUnOiBob3ZlcmVkID09PSAnbGVmdCcsXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd3ZWxjb21lX19tZXNzYWdlX190ZXh0Jz57bG9jYWxpemUoJ1RoZSBjaG9pY2Ugb2YgcHJvZmVzc2lvbmFscycpfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPEljb24gaWNvbj0nSWNBcnJvd1JpZ2h0Q3VybHknIHNpemU9ezQzfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCd3ZWxjb21lX19tZXNzYWdlJywgJ3dlbGNvbWVfX21lc3NhZ2UtLXJpZ2h0Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3dlbGNvbWVfX21lc3NhZ2UtLXZpc2libGUnOiBob3ZlcmVkID09PSAncmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uIGljb249J0ljQXJyb3dMZWZ0Q3VybHknIHNpemU9ezQzfSAvPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3dlbGNvbWVfX21lc3NhZ2VfX3RleHQnPntsb2NhbGl6ZSgnTm90IHN1cmU/IHRyeSB0aGlzJyl9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3ZWxjb21lX19ib2R5Jz5cbiAgICAgICAgICAgICAgICAgICAgPFdlbGNvbWVDb2x1bW5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbl90ZXh0PXtsb2NhbGl6ZSgnU3RhcnQgaGVyZScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3ZWxjb21lLWNvbHVtbi0tbGVmdCdcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtsb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnVHJhZGUgd2l0aCBsZXZlcmFnZSBhbmQgbG93IHNwcmVhZHMgZm9yIGJldHRlciByZXR1cm5zIG9uIHN1Y2Nlc3NmdWwgdHJhZGVzLidcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29ucz17WydJY1BlcmNlbnRTb2xpZCddfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNfaG92ZXJlZD17aG92ZXJlZCA9PT0gJ2xlZnQnfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25CdXR0b25DbGljaz17KCkgPT4gc3dpdGNoUGxhdGZvcm0ocm91dGVzLm10NSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF0Zm9ybXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdJY0JyYW5kRG10NScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBsb2NhbGl6ZSgnRGVyaXYgTWV0YVRyYWRlciA1IChETVQ1KScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogbG9jYWxpemUoJ1RoZSBwbGF0Zm9ybSBvZiBjaG9pY2UgZm9yIHByb2Zlc3Npb25hbHMuJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17bG9jYWxpemUoJ01hcmdpbiAoTWV0YVRyYWRlciA1KScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SG92ZXJlZCgnbGVmdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEhvdmVyZWQobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8V2VsY29tZUNvbHVtblxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uX3RleHQ9e2xvY2FsaXplKCdTdGFydCBoZXJlJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3dlbGNvbWUtY29sdW1uLS1yaWdodCdcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtsb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnRWFybiBmaXhlZCBwYXlvdXRzIHdpdGggb3B0aW9ucywgb3IgdHJhZGUgbXVsdGlwbGllcnMgdG8gY29tYmluZSB0aGUgdXBzaWRlIG9mIG1hcmdpbiB0cmFkaW5nIHdpdGggdGhlIHNpbXBsaWNpdHkgb2Ygb3B0aW9ucy4nXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbnM9e1snSWNVcERvd25Tb2xpZCcsICdJY0Nyb3NzU29saWQnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlzX2hvdmVyZWQ9e2hvdmVyZWQgPT09ICdyaWdodCd9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkJ1dHRvbkNsaWNrPXsoKSA9PiBzd2l0Y2hQbGF0Zm9ybShyb3V0ZXMudHJhZGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhdGZvcm1zPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnSWNCcmFuZER0cmFkZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogbG9jYWxpemUoJ0RUcmFkZXInKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGxvY2FsaXplKCdTdGFydCB0cmFkaW5nIHdpdGggYSBwb3dlcmZ1bCwgeWV0IGVhc3ktdG8tdXNlIHBsYXRmb3JtLicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnSWNCcmFuZERib3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogbG9jYWxpemUoJ0RCb3QnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGxvY2FsaXplKCdBdXRvbWF0ZSB5b3VyIHRyYWRpbmcgaWRlYXMgd2l0aG91dCBjb2RpbmcuJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17bG9jYWxpemUoJ09wdGlvbnMgJiBNdWx0aXBsaWVycycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SG92ZXJlZCgncmlnaHQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRIb3ZlcmVkKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3dlbGNvbWVfX2Zvb3Rlcic+XG4gICAgICAgICAgICAgICAgICAgIHtsb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICdXaGF0ZXZlciB5b3UgY2hvb3NlLCB5b3Ugd2lsbCBhbHdheXMgYmUgYWJsZSB0byBhY2Nlc3MgTWFyZ2luIG9yIE9wdGlvbnMgJiBNdWx0aXBsaWVycyBhdCBhbnkgdGltZSdcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L1RoZW1lZFNjcm9sbGJhcnM+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoXG4gICAgY29ubmVjdCgoeyB1aSB9KSA9PiAoe1xuICAgICAgICB0b2dnbGVXZWxjb21lTW9kYWw6IHVpLnRvZ2dsZVdlbGNvbWVNb2RhbCxcbiAgICB9KSkoV2VsY29tZU1vZGFsKVxuKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFXQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUpBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBREE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF0QkE7QUF5QkE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBM0JBO0FBOEJBO0FBQUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./App/Containers/WelcomeModal/welcome-modal.jsx\n");

/***/ })

}]);