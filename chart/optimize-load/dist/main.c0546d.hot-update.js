webpackHotUpdatesmartcharts("main",{

/***/ "./app/test.jsx":
/*!**********************!*\
  !*** ./app/test.jsx ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _binary_com_smartcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @binary-com/smartcharts */ "./src/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var url_search_params_polyfill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! url-search-params-polyfill */ "./node_modules/url-search-params-polyfill/index.js");
/* harmony import */ var url_search_params_polyfill__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(url_search_params_polyfill__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.scss */ "./app/app.scss");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_app_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _test_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./test.scss */ "./app/test.scss");
/* harmony import */ var _test_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_test_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _welldone_software_why_did_you_render__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @welldone-software/why-did-you-render */ "./node_modules/@welldone-software/why-did-you-render/dist/umd/whyDidYouRender.min.js");
/* harmony import */ var _welldone_software_why_did_you_render__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_welldone_software_why_did_you_render__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _connection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./connection */ "./app/connection/index.js");
/* harmony import */ var _Notification_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Notification.jsx */ "./app/Notification.jsx");
/* harmony import */ var _ChartNotifier_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ChartNotifier.js */ "./app/ChartNotifier.js");
/* harmony import */ var _ChartHistory_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ChartHistory.jsx */ "./app/ChartHistory.jsx");
/* harmony import */ var _connection_NetworkMonitor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./connection/NetworkMonitor */ "./app/connection/NetworkMonitor.js");
/* harmony import */ var _initialData__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./initialData */ "./app/initialData.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // eslint-disable-line import/no-unresolved















Object(_binary_com_smartcharts__WEBPACK_IMPORTED_MODULE_0__["setSmartChartsPublicPath"])('./dist/');
var isMobile = window.navigator.userAgent.toLowerCase().includes('mobi');

if (false) {}

var trackJSDomains = ['binary.com', 'binary.me'];
window.isProductionWebsite = trackJSDomains.reduce(function (acc, val) {
  return acc || window.location.host.endsWith(val);
}, false);

if (window.isProductionWebsite) {
  window._trackJs = {
    token: '346262e7ffef497d85874322fff3bbf8',
    application: 'smartcharts'
  };
  var s = document.createElement('script');
  s.src = 'https://cdn.trackjs.com/releases/current/tracker.js';
  document.body.appendChild(s);
}
/* // PWA support is temporarily removed until its issues can be sorted out
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(`${window.location.origin + window.location.pathname}sw.js`)
        .then(() => {
            console.log('Service Worker Registered');
        }).catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
        });
}
*/


Object(mobx__WEBPACK_IMPORTED_MODULE_5__["configure"])({
  enforceActions: 'observed'
});

function getLanguageStorage() {
  var default_language = 'en';

  try {
    var setting_string = localStorage.getItem('smartchart-setting'),
        setting = JSON.parse(setting_string !== '' ? setting_string : '{}');
    return setting.language || default_language;
  } catch (e) {
    return default_language;
  }
}

function getServerUrl() {
  var local = localStorage.getItem('config.server_url');
  return "wss://".concat(local || 'ws.binaryws.com', "/websockets/v3");
}

var parseQueryString = function parseQueryString(query) {
  var vars = query.split('&');
  var query_string = {};

  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    var key = decodeURIComponent(pair[0]);
    var value = decodeURIComponent(pair[1]); // If first entry with this name

    if (typeof query_string[key] === 'undefined') {
      query_string[key] = decodeURIComponent(value); // If second entry with this name
    } else if (typeof query_string[key] === 'string') {
      var arr = [query_string[key], decodeURIComponent(value)];
      query_string[key] = arr; // If third or later entry with this name
    } else {
      query_string[key].push(decodeURIComponent(value));
    }
  }

  return query_string;
};

var generateURL = function generateURL(new_params) {
  var _window$location = window.location,
      origin = _window$location.origin,
      pathname = _window$location.pathname,
      search = _window$location.search;
  var cleanSearch = search.replace('?', '').trim();

  var params = _objectSpread(_objectSpread({}, cleanSearch !== '' ? parseQueryString(cleanSearch) : {}), new_params);

  window.location.href = "".concat(origin).concat(pathname, "?").concat(Object.keys(params).map(function (key) {
    return "".concat(key, "=").concat(params[key]);
  }).join('&'));
};

var chartId = '1';
var appId = localStorage.getItem('config.app_id') || 12812;
var serverUrl = getServerUrl();
var language = new URLSearchParams(window.location.search).get('l') || getLanguageStorage();
var today = moment__WEBPACK_IMPORTED_MODULE_3___default()().format('YYYY/MM/DD 00:00');
var connectionManager = new _connection__WEBPACK_IMPORTED_MODULE_9__["ConnectionManager"]({
  appId: appId,
  language: language,
  endpoint: serverUrl
});
var IntervalEnum = {
  second: 1,
  minute: 60,
  hour: 3600,
  day: 24 * 3600,
  year: 365 * 24 * 3600
};
var activeLanguagesList = ['ID', 'FR', 'IT', 'PT', 'DE'];
var streamManager = new _connection__WEBPACK_IMPORTED_MODULE_9__["StreamManager"](connectionManager);
var requestAPI = connectionManager.send.bind(connectionManager);
var requestSubscribe = streamManager.subscribe.bind(streamManager);
var requestForget = streamManager.forget.bind(streamManager);

var App = /*#__PURE__*/function (_Component) {
  _inherits(App, _Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this, props);
    _this.startingLanguage = 'en';

    _this.removeAllComparisons = function () {
      try {
        var layoutString = localStorage.getItem("layout-".concat(chartId)),
            layout = JSON.parse(layoutString !== '' ? layoutString : '{}');
        layout.symbols.splice(1, layout.symbols.length - 1);
        localStorage.setItem("layout-".concat(chartId), JSON.stringify(layout));
      } catch (e) {
        console.log(e);
      }
    };

    _this.handleNetworkStatus = function (status) {
      return _this.setState({
        networkStatus: status
      });
    };

    _this.symbolChange = function (symbol) {
      Object(_binary_com_smartcharts__WEBPACK_IMPORTED_MODULE_0__["logEvent"])(_binary_com_smartcharts__WEBPACK_IMPORTED_MODULE_0__["LogCategories"].ChartTitle, _binary_com_smartcharts__WEBPACK_IMPORTED_MODULE_0__["LogActions"].MarketSelector, symbol);

      _this.notifier.removeByCategory('activesymbol');

      _this.setState({
        symbol: symbol
      });
    };

    _this.saveSettings = function (settings) {
      var prevSetting = _this.state.settings;
      console.log('settings updated:', settings);
      localStorage.setItem('smartchart-setting', JSON.stringify(settings));

      if (!prevSetting.historical && settings.historical) {
        _this.setState({
          chartType: 'mountain',
          isChartTypeCandle: false,
          granularity: 0,
          endEpoch: new Date("".concat(today, ":00Z")).valueOf() / 1000
        });

        _this.removeAllComparisons();
      } else if (!settings.historical) {
        _this.handleDateChange('');
      }

      _this.setState({
        settings: settings
      });

      if (_this.startingLanguage !== settings.language) {
        // Place language in URL:
        var _window$location2 = window.location,
            origin = _window$location2.origin,
            search = _window$location2.search,
            pathname = _window$location2.pathname;
        var url = new URLSearchParams(search);
        url["delete"]('l');
        url.set('l', settings.language);
        url.set('activeLanguage', prevSetting.activeLanguages ? 'true' : 'false');
        window.location.href = "".concat(origin).concat(pathname, "?").concat(url.toString());
      }
    };

    _this.handleDateChange = function (value) {
      _this.setState({
        endEpoch: value !== '' ? new Date("".concat(value, ":00Z")).valueOf() / 1000 : undefined
      });
    };

    _this.renderTopWidgets = function () {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_binary_com_smartcharts__WEBPACK_IMPORTED_MODULE_0__["ChartTitle"], {
        onChange: _this.symbolChange,
        open_market: _this.state.openMarket,
        open: !!_this.state.openMarket.category
      }), !!_this.state.settings.historical && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ChartHistory_jsx__WEBPACK_IMPORTED_MODULE_12__["default"], {
        onChange: _this.handleDateChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Notification_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
        notifier: _this.notifier
      }));
    };

    _this.renderControls = function () {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, isMobile ? '' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_binary_com_smartcharts__WEBPACK_IMPORTED_MODULE_0__["CrosshairToggle"], {
        isVisible: false,
        onChange: function onChange(crosshair) {
          return _this.setState({
            crosshairState: crosshair
          });
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_binary_com_smartcharts__WEBPACK_IMPORTED_MODULE_0__["ChartMode"], {
        portalNodeId: "portal-node",
        onChartType: function onChartType(chartType, isChartTypeCandle) {
          _this.setState({
            chartType: chartType,
            isChartTypeCandle: isChartTypeCandle
          });
        },
        onGranularity: function onGranularity(timePeriod) {
          _this.setState({
            granularity: timePeriod
          });

          var isCandle = _this.state.isChartTypeCandle;

          if (isCandle && timePeriod === 0) {
            _this.setState({
              chartType: 'mountain',
              isChartTypeCandle: false
            });
          } else if (!isCandle && timePeriod !== 0) {
            _this.setState({
              chartType: 'candle',
              isChartTypeCandle: true
            });
          }
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_binary_com_smartcharts__WEBPACK_IMPORTED_MODULE_0__["StudyLegend"], {
        portalNodeId: "portal-node"
      }), _this.state.settings.historical ? '' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_binary_com_smartcharts__WEBPACK_IMPORTED_MODULE_0__["Comparison"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_binary_com_smartcharts__WEBPACK_IMPORTED_MODULE_0__["DrawTools"], {
        portalNodeId: "portal-node"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_binary_com_smartcharts__WEBPACK_IMPORTED_MODULE_0__["Views"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_binary_com_smartcharts__WEBPACK_IMPORTED_MODULE_0__["Share"], {
        portalNodeId: "portal-node"
      }), isMobile ? '' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_binary_com_smartcharts__WEBPACK_IMPORTED_MODULE_0__["ChartSize"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_binary_com_smartcharts__WEBPACK_IMPORTED_MODULE_0__["ChartSetting"], null));
    };

    _this.renderToolbarWidget = function () {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_binary_com_smartcharts__WEBPACK_IMPORTED_MODULE_0__["ToolbarWidget"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_binary_com_smartcharts__WEBPACK_IMPORTED_MODULE_0__["ChartMode"], {
        portalNodeId: "portal-node",
        onChartType: function onChartType(chartType, isChartTypeCandle) {
          _this.setState({
            chartType: chartType,
            isChartTypeCandle: isChartTypeCandle
          });
        },
        onGranularity: function onGranularity(timePeriod) {
          _this.setState({
            granularity: timePeriod
          });

          var isCandle = _this.state.isChartTypeCandle;

          if (isCandle && timePeriod === 0) {
            _this.setState({
              chartType: 'mountain',
              isChartTypeCandle: false
            });
          } else if (!isCandle && timePeriod !== 0) {
            _this.setState({
              chartType: 'candle',
              isChartTypeCandle: true
            });
          }
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_binary_com_smartcharts__WEBPACK_IMPORTED_MODULE_0__["StudyLegend"], {
        portalNodeId: "portal-node"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_binary_com_smartcharts__WEBPACK_IMPORTED_MODULE_0__["Views"], {
        portalNodeId: "portal-node"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_binary_com_smartcharts__WEBPACK_IMPORTED_MODULE_0__["DrawTools"], {
        portalNodeId: "portal-node"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_binary_com_smartcharts__WEBPACK_IMPORTED_MODULE_0__["Share"], {
        portalNodeId: "portal-node"
      }));
    };

    _this.onMessage = function (e) {
      return _this.notifier.notify(e);
    };

    _this.onPriceLineDisableChange = function (evt) {
      return _this.setState({
        hidePriceLines: evt.target.checked
      });
    };

    _this.onShadeColorChange = function (evt) {
      return _this.setState({
        shadeColor: evt.target.value
      });
    };

    _this.onColorChange = function (evt) {
      return _this.setState({
        color: evt.target.value
      });
    };

    _this.onFGColorChange = function (evt) {
      return _this.setState({
        foregroundColor: evt.target.value
      });
    };

    _this.onHighLowChange = function (evt) {
      var highLow = _this.state.highLow;

      _this.setState({
        highLow: Object.assign(highLow, _defineProperty({}, evt.target.id, +evt.target.value))
      });
    };

    _this.onRelativeChange = function (evt) {
      return _this.setState({
        relative: evt.target.checked
      });
    };

    _this.onDraggableChange = function (evt) {
      return _this.setState({
        draggable: evt.target.checked
      });
    };

    _this.handleBarrierChange = function (evt) {
      return _this.setState({
        highLow: evt
      });
    };

    _this.onBarrierTypeChange = function (evt) {
      var barrierType = evt.target.value;
      var nextState = barrierType === '' ? {
        highLow: {}
      } : {};

      _this.setState(_objectSpread(_objectSpread({}, nextState), {}, {
        barrierType: barrierType
      }));
    };

    _this.onAddMArker = function (evt) {
      var markers = _this.state.markers;
      markers = [];

      switch (evt.target.value) {
        case 'LINE':
          for (var i = 0; i < 5; i++) {
            markers.push({
              ts: moment__WEBPACK_IMPORTED_MODULE_3___default()().utc().second(0).subtract(i + 3, 'minutes').unix(),
              className: 'chart-marker-line',
              xPositioner: 'epoch',
              yPositioner: 'top'
            });
          }

          break;

        case 'CIRCLE':
          for (var _i = 0; _i < 15; _i++) {
            markers.push({
              ts: moment__WEBPACK_IMPORTED_MODULE_3___default()().utc().second(0).subtract(_i + 3, 'minutes').unix(),
              className: 'chart-marker-circle',
              xPositioner: 'epoch',
              yPositioner: 'value'
            });
          }

          break;

        default:
          markers = [];
      }

      _this.setState({
        markers: markers
      });
    };

    _this.onWidget = function () {
      return _this.setState(function (prevState) {
        return {
          enabledNavigationWidget: !prevState.enabledNavigationWidget
        };
      });
    };

    _this.onFooter = function () {
      return _this.setState(function (prevState) {
        return {
          enabledFooter: !prevState.enabledFooter
        };
      });
    };

    _this.toggleStartEpoch = function () {
      if (_this.state.scrollToEpoch) {
        _this.setState({
          scrollToEpoch: undefined
        });
      } else {
        _this.setState({
          scrollToEpoch: moment__WEBPACK_IMPORTED_MODULE_3___default.a.utc().unix()
        });
      }
    };

    _this.onLeftOffset = function (evt) {
      _this.setState({
        leftOffset: +evt.target.value
      });
    };

    _this.onActiveLanguage = function () {
      _this.setState(function (prevState) {
        return {
          activeLanguage: !prevState.activeLanguage,
          settings: _objectSpread(_objectSpread({}, prevState.settings), {}, {
            activeLanguages: !prevState.activeLanguage ? activeLanguagesList : null
          })
        };
      });
    };

    _this.onLanguage = function (evt) {
      var settings = _this.state.settings;
      var baseUrl = "".concat(window.location.protocol, "//").concat(window.location.host).concat(window.location.pathname);
      window.location.href = "".concat(baseUrl, "?l=").concat(evt.target.value, "&activeLanguage=").concat(settings.activeLanguages ? 'true' : 'false');
    };

    _this.onCrosshair = function (evt) {
      var value = evt.target.value;

      _this.setState({
        crosshairState: value === 'null' ? null : parseInt(value, 10)
      });
    };

    _this.onActiveSymbol = function (evt) {
      var baseUrl = "".concat(window.location.protocol, "//").concat(window.location.host).concat(window.location.pathname);
      window.location.href = "".concat(baseUrl, "?marketsOrder=").concat(evt.target.value);
    };

    _this.onOpenMarket = function (evt) {
      var marketArray = evt.target.value.split(',');
      if (marketArray.length === 0) return;

      _this.setState({
        openMarket: {
          category: marketArray[0],
          subcategory: marketArray[1] || null,
          market: marketArray[2] || null
        }
      });

      setTimeout(function () {
        _this.setState({
          openMarket: {}
        });
      }, 500);
    };

    _this.handleScroll = function () {
      return _this.setState(function (prevState) {
        return {
          enableScroll: !prevState.enableScroll
        };
      });
    };

    _this.handleZoom = function () {
      return _this.setState(function (prevState) {
        return {
          enableZoom: !prevState.enableZoom
        };
      });
    };

    _this.handleRefreshActiveSymbols = function () {
      _this.setState({
        refreshActiveSymbols: true
      }, function () {
        _this.setState({
          refreshActiveSymbols: false
        });
      });
    };

    _this.onChartSize = function (state) {
      _this.setState({
        zoom: state
      });

      setTimeout(function () {
        _this.setState({
          zoom: 0
        });
      }, 300);
    };

    _this.onMaxTick = function (evt) {
      var value = evt.target.value;

      _this.setState({
        maxTick: value === 'null' ? null : parseInt(value, 10)
      });
    };

    _this.onInitalDataTradingTime = function (evt) {
      return generateURL({
        initialdata_tradingTimes: evt.currentTarget.checked
      });
    };

    _this.onInitalDataActiveSymbols = function (evt) {
      return generateURL({
        initialdata_activeSymbols: evt.currentTarget.checked
      });
    };

    _this.onInitalDataMasterData = function (evt) {
      return generateURL({
        initialdata_masterData: evt.currentTarget.checked
      });
    };

    _this.onFeedCallTradingTime = function (evt) {
      return generateURL({
        feedcall_tradingTimes: evt.currentTarget.checked
      });
    };

    _this.onFeedCallActiveSymbols = function (evt) {
      return generateURL({
        feedcall_activeSymbols: evt.currentTarget.checked
      });
    };

    _this.notifier = new _ChartNotifier_js__WEBPACK_IMPORTED_MODULE_11__["default"]();

    var _layoutString = localStorage.getItem("layout-".concat(chartId)),
        _layout = JSON.parse(_layoutString !== '' ? _layoutString : '{}');

    var _chartType;

    var _isChartTypeCandle;

    var granularity = 60;
    var endEpoch;

    var _settings = Object(_binary_com_smartcharts__WEBPACK_IMPORTED_MODULE_0__["createObjectFromLocalStorage"])('smartchart-setting');

    var activeLanguage = new URLSearchParams(window.location.search).get('activeLanguage') === 'true';
    var feedCall = {};
    var initialData = {};

    if (_settings) {
      _settings.language = language;
      _this.startingLanguage = _settings.language;
    } else {
      _settings = {
        language: language
      };
    }

    _settings.activeLanguages = activeLanguage ? activeLanguagesList : null;

    if (_settings.historical) {
      _this.removeAllComparisons();

      endEpoch = new Date("".concat(today, ":00Z")).valueOf() / 1000;
      _chartType = 'line';
      _isChartTypeCandle = false;

      if (_layout) {
        granularity = _layout.timeUnit === 'second' ? 0 : parseInt(_layout.interval * IntervalEnum[_layout.timeUnit], 10);

        if (_layout.chartType === 'candle' && _layout.aggregationType !== 'ohlc') {
          _chartType = _layout.aggregationType;
        } else {
          _chartType = _layout.chartType;
        }

        if (['mountain', 'line', 'colored_line', 'spline', 'baseline'].indexOf(_chartType) === -1) {
          _isChartTypeCandle = true;
        }
      }
    }

    connectionManager.on(_connection__WEBPACK_IMPORTED_MODULE_9__["ConnectionManager"].EVENT_CONNECTION_CLOSE, function () {
      return _this.setState({
        isConnectionOpened: false
      });
    });
    connectionManager.on(_connection__WEBPACK_IMPORTED_MODULE_9__["ConnectionManager"].EVENT_CONNECTION_REOPEN, function () {
      return _this.setState({
        isConnectionOpened: true
      });
    });
    var networkMonitor = _connection_NetworkMonitor__WEBPACK_IMPORTED_MODULE_13__["default"].getInstance();
    networkMonitor.init(requestAPI, _this.handleNetworkStatus);
    var urlParams = parseQueryString(window.location.search.replace('?', ''));
    var marketsOrder = urlParams.marketsOrder || 'null';
    var getMarketsOrder = marketsOrder !== '' && marketsOrder !== 'null' ? function () {
      return marketsOrder.split(',');
    } : undefined;
    if (urlParams.feedcall_tradingTimes === 'false') feedCall.tradingTimes = false;
    if (urlParams.feedcall_activeSymbols === 'false') feedCall.activeSymbols = false;
    if (urlParams.initialdata_masterData === 'true') initialData.masterData = Object(_initialData__WEBPACK_IMPORTED_MODULE_14__["masterData"])();
    if (urlParams.initialdata_tradingTimes === 'true') initialData.tradingTimes = _initialData__WEBPACK_IMPORTED_MODULE_14__["MockTradingTime"];
    if (urlParams.initialdata_activeSymbols === 'true') initialData.activeSymbols = _initialData__WEBPACK_IMPORTED_MODULE_14__["MockActiveSymbol"];
    _this.state = {
      settings: _settings,
      endEpoch: endEpoch,
      chartType: _chartType,
      isChartTypeCandle: _isChartTypeCandle,
      granularity: granularity,
      activeLanguage: activeLanguage,
      isConnectionOpened: true,
      enabledFooter: true,
      enableScroll: null,
      enableZoom: null,
      highLow: {},
      barrierType: '',
      draggable: true,
      markers: [],
      crosshairState: 1,
      openMarket: {},
      getMarketsOrder: getMarketsOrder,
      refreshActiveSymbols: false,
      initialData: initialData,
      feedCall: feedCall
    };
    return _this;
  }
  /*
  shouldComponentUpdate(nextProps, nextState) {
      return this.state.symbol !== nextState.symbol
          || JSON.stringify(this.state.settings) !== JSON.stringify(nextState.settings);
  }
  */


  _createClass(App, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          settings = _this$state.settings,
          isConnectionOpened = _this$state.isConnectionOpened,
          symbol = _this$state.symbol,
          endEpoch = _this$state.endEpoch,
          startEpoch = _this$state.startEpoch,
          barrierType = _this$state.barrierType,
          _this$state$highLow = _this$state.highLow,
          high = _this$state$highLow.high,
          low = _this$state$highLow.low,
          hidePriceLines = _this$state.hidePriceLines,
          draggable = _this$state.draggable,
          relative = _this$state.relative,
          shadeColor = _this$state.shadeColor,
          scrollToEpoch = _this$state.scrollToEpoch,
          leftOffset = _this$state.leftOffset,
          color = _this$state.color,
          foregroundColor = _this$state.foregroundColor,
          markers = _this$state.markers,
          feedCall = _this$state.feedCall,
          enabledNavigationWidget = _this$state.enabledNavigationWidget,
          activeLanguage = _this$state.activeLanguage,
          crosshairState = _this$state.crosshairState,
          zoom = _this$state.zoom,
          maxTick = _this$state.maxTick,
          initialData = _this$state.initialData;
      var barriers = barrierType ? [{
        shade: barrierType,
        shadeColor: shadeColor,
        foregroundColor: foregroundColor || null,
        color: color || (settings.theme === 'light' ? '#39b19d' : '#555975'),
        onChange: this.handleBarrierChange,
        relative: relative,
        draggable: draggable,
        lineStyle: 'solid',
        hidePriceLines: hidePriceLines,
        high: high,
        low: low
      }] : [];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "test-container",
        style: {
          diplay: 'block'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "portal-node",
        className: "portal-node"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "chart-section"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_binary_com_smartcharts__WEBPACK_IMPORTED_MODULE_0__["SmartChart"], {
        id: chartId,
        symbol: symbol,
        isMobile: isMobile,
        onMessage: this.onMessage,
        enableRouting: true,
        enableScroll: this.state.enableScroll,
        enableZoom: this.state.enableZoom,
        chartControlsWidgets: null,
        enabledNavigationWidget: enabledNavigationWidget,
        enabledChartFooter: this.state.enabledFooter,
        removeAllComparisons: settings.historical,
        topWidgets: this.renderTopWidgets,
        settings: settings,
        initialData: initialData,
        feedCall: feedCall,
        requestAPI: requestAPI,
        requestSubscribe: requestSubscribe,
        requestForget: requestForget,
        toolbarWidget: this.renderToolbarWidget,
        endEpoch: endEpoch,
        startEpoch: startEpoch,
        chartType: this.state.chartType,
        granularity: this.state.granularity,
        onSettingsChange: this.saveSettings,
        isConnectionOpened: isConnectionOpened,
        barriers: barriers,
        scrollToEpoch: scrollToEpoch,
        scrollToEpochOffset: leftOffset,
        crosshairState: crosshairState,
        getMarketsOrder: this.state.getMarketsOrder,
        zoom: zoom,
        maxTick: maxTick,
        networkStatus: this.state.networkStatus,
        refreshActiveSymbols: this.state.refreshActiveSymbols
      }, endEpoch ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_binary_com_smartcharts__WEBPACK_IMPORTED_MODULE_0__["Marker"], {
        className: "chart-marker-historical",
        x: endEpoch,
        xPositioner: "epoch",
        yPositioner: "top"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, moment__WEBPACK_IMPORTED_MODULE_3___default()(endEpoch * 1000).utc().format('DD MMMM YYYY - HH:mm'))) : '', markers.map(function (x) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_binary_com_smartcharts__WEBPACK_IMPORTED_MODULE_0__["Marker"], {
          key: x.ts,
          className: x.className,
          x: x.ts,
          xPositioner: x.xPositioner,
          yPositioner: x.yPositioner
        });
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "action-section"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Toggle")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        type: "button",
        onClick: this.onWidget
      }, "Navigate Widget"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        type: "button",
        onClick: this.onFooter
      }, "Footer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        type: "button",
        onClick: this.onActiveLanguage
      }, "Active Lang: ", activeLanguage ? 'ON' : 'OFF'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        type: "button",
        onClick: this.handleScroll
      }, "Enable/Disable Scroll"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        type: "button",
        onClick: this.handleZoom
      }, "Enable/Disable Zoom"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        type: "button",
        onClick: this.handleRefreshActiveSymbols
      }, "Refresh ActiveSymbol")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        type: "button",
        onClick: function onClick() {
          return _this2.onChartSize(1);
        }
      }, "Zoom in"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        type: "button",
        onClick: function onClick() {
          return _this2.onChartSize(-1);
        }
      }, "Zoom out")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
        onChange: this.onActiveSymbol
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: ""
      }, " -- Set Active Symbols -- "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "null"
      }, "Default"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "synthetic_index,forex,indices,stocks,commodities"
      }, "synthetic_index,forex,indices,stocks,commodities"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "synthetic_index,indices,stocks,commodities,forex"
      }, "synthetic_index,indices,stocks,commodities,forex"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
        onChange: this.onOpenMarket
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: ""
      }, " -- Open Market -- "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "indices,europe,OTC_FCHI"
      }, "indices - europe - OTC_FCHI"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "synthetic_index,continuous-indices,1HZ10V"
      }, "Synthetic Index - Continuous Indices - 1HZ10V"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "forex,minor-pairs"
      }, "Forex - minor-pairs "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-row"
      }, "Crosshair State ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
        onChange: this.onCrosshair
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "null"
      }, "not set"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "0"
      }, "state 0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "1"
      }, "state 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "2"
      }, "state 2"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-row"
      }, "Max Tick ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
        onChange: this.onMaxTick
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "null"
      }, "not set"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "5"
      }, "5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "10"
      }, "10"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "20"
      }, "20"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-row"
      }, "Language ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
        onChange: this.onLanguage
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: ""
      }, "None"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "en"
      }, "English"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "pt"
      }, "Portugu\xEAs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "de"
      }, "Deutsch"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "fr"
      }, "French"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "pl"
      }, "Polish"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "ar"
      }, "Arabic(not supported)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-row"
      }, "Markers ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
        onChange: this.onAddMArker
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: ""
      }, "None"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "LINE"
      }, "Line"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "CIRCLE"
      }, "Circle"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-row"
      }, "barrier type:\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
        onChange: this.onBarrierTypeChange,
        defaultValue: barrierType
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: ""
      }, "disable"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "NONE_SINGLE"
      }, "NONE_SINGLE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "NONE_DOUBLE"
      }, "NONE_DOUBLE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "ABOVE"
      }, "ABOVE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "BELOW"
      }, "BELOW"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "BETWEEN"
      }, "BETWEEN"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "OUTSIDE"
      }, "OUTSIDE"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-row"
      }, "barrier shade bg color:\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
        onChange: this.onShadeColorChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "GREEN"
      }, "GREEN"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "RED"
      }, "RED"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "YELLOW"
      }, "YELLOW"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "ORANGERED"
      }, "ORANGERED"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "PURPLE"
      }, "PURPLE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "BLUE"
      }, "BLUE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "DEEPPINK"
      }, "DEEPPINK"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-row"
      }, "barrier bg color:\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
        onChange: this.onColorChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "GREEN"
      }, "GREEN"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "RED"
      }, "RED"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "YELLOW"
      }, "YELLOW"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "ORANGERED"
      }, "ORANGERED"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "PURPLE"
      }, "PURPLE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "BLUE"
      }, "BLUE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "DEEPPINK"
      }, "DEEPPINK"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-row"
      }, "barrier foreground color:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
        id: "barrierFGColor",
        onChange: this.onFGColorChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", null, "NONE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "#ffffff"
      }, "WHITE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "#00ff00"
      }, "GREEN"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "#ff0000"
      }, "RED"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "#000000"
      }, "BLACK"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, "low:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        id: "low",
        type: "number",
        value: low === undefined ? '' : low,
        onChange: this.onHighLowChange
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, "high:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        id: "high",
        type: "number",
        value: high === undefined ? '' : high,
        onChange: this.onHighLowChange
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-row"
      }, "No PriceLine: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "checkbox",
        checked: hidePriceLines === undefined ? '' : hidePriceLines,
        onChange: this.onPriceLineDisableChange
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-row"
      }, "Relative: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "checkbox",
        checked: relative === undefined ? '' : relative,
        onChange: this.onRelativeChange
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-row"
      }, "Draggable: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "checkbox",
        checked: draggable === undefined ? '' : draggable,
        onChange: this.onDraggableChange
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-row"
      }, "Toggle StartEpoch: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        type: "button",
        onClick: this.toggleStartEpoch
      }, "Toggle"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "LeftOffset(bars): ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "number",
        value: leftOffset || 0,
        onChange: this.onLeftOffset
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "InitialData"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-row"
      }, "tradingTime: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "checkbox",
        checked: !!initialData.tradingTimes,
        onChange: this.onInitalDataTradingTime
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-row"
      }, "activeSymbols: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "checkbox",
        checked: !!initialData.activeSymbols,
        onChange: this.onInitalDataActiveSymbols
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-row"
      }, "masterData: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "checkbox",
        checked: !!initialData.masterData,
        onChange: this.onInitalDataMasterData
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "FeedCall"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-row"
      }, "tradingTime: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "checkbox",
        checked: feedCall.tradingTimes !== false,
        onChange: this.onFeedCallTradingTime
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-row"
      }, "activeSymbols: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "checkbox",
        checked: feedCall.activeSymbols !== false,
        onChange: this.onFeedCallActiveSymbols
      }))))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(App, null), document.getElementById('root'));

/***/ })

})
//# sourceMappingURL=main.c0546d.hot-update.js.map