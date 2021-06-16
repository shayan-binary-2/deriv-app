/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["settings-language"],{

/***/ "./App/Containers/SettingsModal/settings-language.jsx":
/*!************************************************************!*\
  !*** ./App/Containers/SettingsModal/settings-language.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../../node_modules/react/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"../../../node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"../../../node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @deriv/components */ \"../../components/src/index.js\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @deriv/translations */ \"../../translations/src/index.js\");\n/* harmony import */ var Utils_Language__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Utils/Language */ \"./Utils/Language/index.js\");\n\n\n\n\n\n\n\nvar isCurrentLanguage = function isCurrentLanguage(lang) {\n  return lang === Utils_Language__WEBPACK_IMPORTED_MODULE_5__.currentLanguage;\n};\n\nvar NonClickableLink = function NonClickableLink(_ref) {\n  var children = _ref.children,\n      lang = _ref.lang;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    id: \"dt_settings_\".concat(lang, \"_button\"),\n    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('settings-language__language-link', {\n      'settings-language__language-link--active': isCurrentLanguage(lang)\n    })\n  }, children);\n};\n\nvar LanguageLink = function LanguageLink(_ref2) {\n  var lang = _ref2.lang;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {\n    icon: \"IcFlag\".concat(lang.replace('_', '-')),\n    className: 'settings-language__language-link-flag settings-language__language-flag',\n    type: lang.replace(/(\\s|_)/, '-').toLowerCase()\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('settings-language__language-name', {\n      'settings-language__language-name--active': isCurrentLanguage(lang)\n    })\n  }, (0,Utils_Language__WEBPACK_IMPORTED_MODULE_5__.getAllowedLanguages)()[lang]));\n};\n\nvar LanguageSettings = function LanguageSettings() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"settings-language\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"settings-language__language-header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_3__.Text, {\n    size: \"xs\",\n    color: \"prominent\",\n    weight: \"bold\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_4__.Localize, {\n    i18n_default_text: \"Select language\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"settings-language__language-container\"\n  }, Object.keys((0,Utils_Language__WEBPACK_IMPORTED_MODULE_5__.getAllowedLanguages)()).map(function (key) {\n    return isCurrentLanguage(key) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(NonClickableLink, {\n      lang: key,\n      key: key\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LanguageLink, {\n      lang: key\n    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n      id: \"dt_settings_\".concat(key, \"_button\"),\n      key: key,\n      onClick: function onClick() {\n        (0,Utils_Language__WEBPACK_IMPORTED_MODULE_5__.changeLanguage)(key);\n      },\n      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('settings-language__language-link', {\n        'settings-language__language-link--active': isCurrentLanguage(key)\n      })\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LanguageLink, {\n      lang: key,\n      key: key\n    }));\n  })));\n};\n\nLanguageLink.propTypes = {\n  lang: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)\n};\nNonClickableLink.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().node)), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node)]).isRequired,\n  lang: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LanguageSettings);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcHAvQ29udGFpbmVycy9TZXR0aW5nc01vZGFsL3NldHRpbmdzLWxhbmd1YWdlLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL0FwcC9Db250YWluZXJzL1NldHRpbmdzTW9kYWwvc2V0dGluZ3MtbGFuZ3VhZ2UuanN4Pzk3OWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEljb24sIFRleHQgfSBmcm9tICdAZGVyaXYvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBMb2NhbGl6ZSB9IGZyb20gJ0BkZXJpdi90cmFuc2xhdGlvbnMnO1xuaW1wb3J0IHsgZ2V0QWxsb3dlZExhbmd1YWdlcywgY2hhbmdlTGFuZ3VhZ2UsIGN1cnJlbnRMYW5ndWFnZSB9IGZyb20gJ1V0aWxzL0xhbmd1YWdlJztcblxuY29uc3QgaXNDdXJyZW50TGFuZ3VhZ2UgPSBsYW5nID0+IGxhbmcgPT09IGN1cnJlbnRMYW5ndWFnZTtcblxuY29uc3QgTm9uQ2xpY2thYmxlTGluayA9ICh7IGNoaWxkcmVuLCBsYW5nIH0pID0+IChcbiAgICA8ZGl2XG4gICAgICAgIGlkPXtgZHRfc2V0dGluZ3NfJHtsYW5nfV9idXR0b25gfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3NldHRpbmdzLWxhbmd1YWdlX19sYW5ndWFnZS1saW5rJywge1xuICAgICAgICAgICAgJ3NldHRpbmdzLWxhbmd1YWdlX19sYW5ndWFnZS1saW5rLS1hY3RpdmUnOiBpc0N1cnJlbnRMYW5ndWFnZShsYW5nKSxcbiAgICAgICAgfSl9XG4gICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4pO1xuXG5jb25zdCBMYW5ndWFnZUxpbmsgPSAoeyBsYW5nIH0pID0+IChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxJY29uXG4gICAgICAgICAgICBpY29uPXtgSWNGbGFnJHtsYW5nLnJlcGxhY2UoJ18nLCAnLScpfWB9XG4gICAgICAgICAgICBjbGFzc05hbWU9eydzZXR0aW5ncy1sYW5ndWFnZV9fbGFuZ3VhZ2UtbGluay1mbGFnIHNldHRpbmdzLWxhbmd1YWdlX19sYW5ndWFnZS1mbGFnJ31cbiAgICAgICAgICAgIHR5cGU9e2xhbmcucmVwbGFjZSgvKFxcc3xfKS8sICctJykudG9Mb3dlckNhc2UoKX1cbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnc2V0dGluZ3MtbGFuZ3VhZ2VfX2xhbmd1YWdlLW5hbWUnLCB7XG4gICAgICAgICAgICAgICAgJ3NldHRpbmdzLWxhbmd1YWdlX19sYW5ndWFnZS1uYW1lLS1hY3RpdmUnOiBpc0N1cnJlbnRMYW5ndWFnZShsYW5nKSxcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA+XG4gICAgICAgICAgICB7Z2V0QWxsb3dlZExhbmd1YWdlcygpW2xhbmddfVxuICAgICAgICA8L3NwYW4+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbik7XG5cbmNvbnN0IExhbmd1YWdlU2V0dGluZ3MgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NldHRpbmdzLWxhbmd1YWdlJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZXR0aW5ncy1sYW5ndWFnZV9fbGFuZ3VhZ2UtaGVhZGVyJz5cbiAgICAgICAgICAgICAgICA8VGV4dCBzaXplPSd4cycgY29sb3I9J3Byb21pbmVudCcgd2VpZ2h0PSdib2xkJz5cbiAgICAgICAgICAgICAgICAgICAgPExvY2FsaXplIGkxOG5fZGVmYXVsdF90ZXh0PSdTZWxlY3QgbGFuZ3VhZ2UnIC8+XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2V0dGluZ3MtbGFuZ3VhZ2VfX2xhbmd1YWdlLWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAge09iamVjdC5rZXlzKGdldEFsbG93ZWRMYW5ndWFnZXMoKSkubWFwKGtleSA9PlxuICAgICAgICAgICAgICAgICAgICBpc0N1cnJlbnRMYW5ndWFnZShrZXkpID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPE5vbkNsaWNrYWJsZUxpbmsgbGFuZz17a2V5fSBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhbmd1YWdlTGluayBsYW5nPXtrZXl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L05vbkNsaWNrYWJsZUxpbms+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgZHRfc2V0dGluZ3NfJHtrZXl9X2J1dHRvbmB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VMYW5ndWFnZShrZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdzZXR0aW5ncy1sYW5ndWFnZV9fbGFuZ3VhZ2UtbGluaycsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NldHRpbmdzLWxhbmd1YWdlX19sYW5ndWFnZS1saW5rLS1hY3RpdmUnOiBpc0N1cnJlbnRMYW5ndWFnZShrZXkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYW5ndWFnZUxpbmsgbGFuZz17a2V5fSBrZXk9e2tleX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbkxhbmd1YWdlTGluay5wcm9wVHlwZXMgPSB7XG4gICAgbGFuZzogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbk5vbkNsaWNrYWJsZUxpbmsucHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSksIFByb3BUeXBlcy5ub2RlXSkuaXNSZXF1aXJlZCxcbiAgICBsYW5nOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGFuZ3VhZ2VTZXR0aW5ncztcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFGQTtBQURBO0FBQ0E7QUFVQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFEQTtBQURBO0FBUEE7QUFDQTtBQWdCQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQU5BO0FBVUE7QUFBQTtBQUFBO0FBaEJBO0FBdUJBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./App/Containers/SettingsModal/settings-language.jsx\n");

/***/ })

}]);