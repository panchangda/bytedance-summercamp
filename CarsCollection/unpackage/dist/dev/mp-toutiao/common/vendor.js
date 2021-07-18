(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],[
/* 0 */,
/* 1 */
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.createPlugin = createPlugin;exports.createSubpackageApp = createSubpackageApp;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

function b64DecodeUnicode(str) {
  return decodeURIComponent(atob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

function getCurrentUserInfo() {
  var token = tt.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0 };

  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('获取当前用户信息出错，详细错误信息为：' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}

function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {var _getCurrentUserInfo =


    getCurrentUserInfo(),role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {var _getCurrentUserInfo2 =


    getCurrentUserInfo(),permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {var _getCurrentUserInfo3 =


    getCurrentUserInfo(),tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|Window$|WindowStyle$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _tt$getSystemInfoSync =




  tt.getSystemInfoSync(),platform = _tt$getSystemInfoSync.platform,pixelRatio = _tt$getSystemInfoSync.pixelRatio,windowWidth = _tt$getSystemInfoSync.windowWidth; // uni=>tt runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });var


EventChannel = /*#__PURE__*/function () {
  function EventChannel(id, events) {var _this = this;_classCallCheck(this, EventChannel);
    this.id = id;
    this.listener = {};
    this.emitCache = {};
    if (events) {
      Object.keys(events).forEach(function (name) {
        _this.on(name, events[name]);
      });
    }
  }_createClass(EventChannel, [{ key: "emit", value: function emit(

    eventName) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
      var fns = this.listener[eventName];
      if (!fns) {
        return (this.emitCache[eventName] || (this.emitCache[eventName] = [])).push(args);
      }
      fns.forEach(function (opt) {
        opt.fn.apply(opt.fn, args);
      });
      this.listener[eventName] = fns.filter(function (opt) {return opt.type !== 'once';});
    } }, { key: "on", value: function on(

    eventName, fn) {
      this._addListener(eventName, 'on', fn);
      this._clearCache(eventName);
    } }, { key: "once", value: function once(

    eventName, fn) {
      this._addListener(eventName, 'once', fn);
      this._clearCache(eventName);
    } }, { key: "off", value: function off(

    eventName, fn) {
      var fns = this.listener[eventName];
      if (!fns) {
        return;
      }
      if (fn) {
        for (var i = 0; i < fns.length;) {
          if (fns[i].fn === fn) {
            fns.splice(i, 1);
            i--;
          }
          i++;
        }
      } else {
        delete this.listener[eventName];
      }
    } }, { key: "_clearCache", value: function _clearCache(

    eventName) {
      var cacheArgs = this.emitCache[eventName];
      if (cacheArgs) {
        for (; cacheArgs.length > 0;) {
          this.emit.apply(this, [eventName].concat(cacheArgs.shift()));
        }
      }
    } }, { key: "_addListener", value: function _addListener(

    eventName, type, fn) {
      (this.listener[eventName] || (this.listener[eventName] = [])).push({
        fn: fn,
        type: type });

    } }]);return EventChannel;}();


var eventChannels = {};

var eventChannelStack = [];

var id = 0;

function initEventChannel(events) {var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  id++;
  var eventChannel = new EventChannel(id, events);
  if (cache) {
    eventChannels[id] = eventChannel;
    eventChannelStack.push(eventChannel);
  }
  return eventChannel;
}

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var navigateTo = {
  args: function args(fromArgs, toArgs) {
    var id = initEventChannel(fromArgs.events).id;
    if (fromArgs.url) {
      fromArgs.url = fromArgs.url + (fromArgs.url.indexOf('?') === -1 ? '?' : '&') + '__id__=' + id;
    }
  },
  returnValue: function returnValue(fromRes, toRes) {
    fromRes.eventChannel = getEventChannel();
  } };


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function addUuid(result) {
  deviceId = deviceId || tt.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    tt.setStorage({
      key: UUID_KEY,
      data: deviceId });

  }
  result.deviceId = deviceId;
}

function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}

var getSystemInfo = {
  returnValue: function returnValue(result) {
    addUuid(result);
    addSafeAreaInsets(result);
  } };


var oName = 'getUserInfo';
var nName = 'getUserProfile';

var getUserProfile = {
  name: tt.canIUse(nName) ? nName : oName };


// 不支持的 API 列表
var todos = [
'preloadPage',
'unPreloadPage',
'loadSubPackage'
// 'createCameraContext',
// 'createLivePlayerContext',
// 'getSavedFileInfo',
// 'createMapContext',
// 'onMemoryWarning',
// 'onGyroscopeChange',
// 'startGyroscope',
// 'stopGyroscope',
// 'setScreenBrightness',
// 'getScreenBrightness',
// 'addPhoneContact',
// 'openBluetoothAdapter',
// 'startBluetoothDevicesDiscovery',
// 'onBluetoothDeviceFound',
// 'stopBluetoothDevicesDiscovery',
// 'onBluetoothAdapterStateChange',
// 'getConnectedBluetoothDevices',
// 'getBluetoothDevices',
// 'getBluetoothAdapterState',
// 'closeBluetoothAdapter',
// 'writeBLECharacteristicValue',
// 'readBLECharacteristicValue',
// 'onBLEConnectionStateChange',
// 'onBLECharacteristicValueChange',
// 'notifyBLECharacteristicValueChange',
// 'getBLEDeviceServices',
// 'getBLEDeviceCharacteristics',
// 'createBLEConnection',
// 'closeBLEConnection',
// 'onBeaconServiceChange',
// 'onBeaconUpdate',
// 'getBeacons',
// 'startBeaconDiscovery',
// 'stopBeaconDiscovery',
// 'showNavigationBarLoading',
// 'hideNavigationBarLoading',
// 'setTabBarItem',
// 'setTabBarStyle',
// 'hideTabBar',
// 'showTabBar',
// 'setTabBarBadge',
// 'removeTabBarBadge',
// 'showTabBarRedDot',
// 'hideTabBarRedDot',
// 'setBackgroundColor',
// 'setBackgroundTextStyle',
// 'chooseInvoiceTitle',
// 'addTemplate',
// 'deleteTemplate',
// 'getTemplateLibraryById',
// 'getTemplateLibraryList',
// 'getTemplateList',
// 'sendTemplateMessage',
// 'setEnableDebug',
// 'onWindowResize',
// 'offWindowResize',
// 'createOffscreenCanvas',
// 'vibrate'
];

// 存在兼容性的 API 列表
// 头条小程序自1.35.0+支持canIUses
var canIUses = [
  // 'createIntersectionObserver',
  // 'getSavedFileList',
  // 'removeSavedFile',
  // 'hideKeyboard',
  // 'getImageInfo',
  // 'createVideoContext',
  // 'onSocketOpen',
  // 'onSocketError',
  // 'sendSocketMessage',
  // 'onSocketMessage',
  // 'closeSocket',
  // 'onSocketClose',
  // 'getExtConfig',
  // 'getExtConfigSync',
  // 'navigateToMiniProgram',
  // 'navigateBackMiniProgram',
  // 'compressImage',
  // 'chooseLocation',
  // 'openDocument',
  // 'onUserCaptureScreen',
  // 'getBackgroundAudioManager',
  // 'setNavigationBarColor',
];

// 需要做转换的 API 列表
var protocols = {
  chooseImage: {
    args: {
      sizeType: false } },


  navigateTo: navigateTo,
  redirectTo: redirectTo,
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo,
  getUserProfile: getUserProfile,
  connectSocket: {
    args: {
      method: false } },


  chooseVideo: {
    args: {
      camera: false } },


  scanCode: {
    args: {
      onlyFromCamera: false,
      scanType: false } },


  startAccelerometer: {
    args: {
      interval: false } },


  showToast: {
    args: {
      image: false,
      mask: false } },


  showLoading: {
    args: {
      mask: false } },


  showModal: {
    args: {
      cancelColor: false,
      confirmColor: false } },


  showActionSheet: {
    args: {
      itemColor: false } },


  login: {
    args: {
      scopes: false,
      timeout: false } },


  getUserInfo: {
    args: {
      lang: false,
      timeout: false } },


  requestPayment: {
    name: tt.pay ? 'pay' : 'requestPayment',
    args: {
      orderInfo: tt.pay ? 'orderInfo' : 'data' } },


  getFileInfo: {
    args: {
      digestAlgorithm: false } } };




var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform '\u5934\u6761\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("Platform '\u5934\u6761\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = tt[methodName].apply(tt, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['toutiao'],
  share: ['toutiao'],
  payment: ['toutiao'],
  push: ['toutiao'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


function createMediaQueryObserver() {
  var mediaQueryObserver = {};var _tt$getSystemInfoSync2 =



  tt.getSystemInfoSync(),windowWidth = _tt$getSystemInfoSync2.windowWidth,windowHeight = _tt$getSystemInfoSync2.windowHeight;

  var orientation = windowWidth < windowHeight ? 'portrait' : 'landscape';

  mediaQueryObserver.observe = function (options, callback) {
    var matches = true;
    for (var item in options) {
      var itemValue = item === 'orientation' ? options[item] : Number(options[item]);
      if (options[item] !== '') {
        if (item === 'width') {
          if (itemValue === windowWidth) {
            matches = true;
          } else {
            matches = false;
            callback(matches);
            return matches;
          }
        }
        if (item === 'minWidth') {
          if (windowWidth >= itemValue) {
            matches = true;
          } else {
            matches = false;
            callback(matches);
            return matches;
          }
        }
        if (item === 'maxWidth') {
          if (windowWidth <= itemValue) {
            matches = true;
          } else {
            matches = false;
            callback(matches);
            return matches;
          }
        }

        if (item === 'height') {
          if (itemValue === windowHeight) {
            matches = true;
          } else {
            matches = false;
            callback(matches);
            return matches;
          }
        }
        if (item === 'minHeight') {
          if (windowHeight >= itemValue) {
            matches = true;
          } else {
            matches = false;
            callback(matches);
            return matches;
          }
        }
        if (item === 'maxHeight') {
          if (windowHeight <= itemValue) {
            matches = true;
          } else {
            matches = false;
            callback(matches);
            return matches;
          }
        }

        if (item === 'orientation') {
          if (options[item] === orientation) {
            matches = true;
          } else {
            matches = false;
            callback(matches);
            return matches;
          }
        }
      }
    }
    callback(matches);

    return matches;
  };

  mediaQueryObserver.disconnect = function () {
  };

  return mediaQueryObserver;
}

var api = /*#__PURE__*/Object.freeze({
  __proto__: null,
  createMediaQueryObserver: createMediaQueryObserver });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {args[_key4 - 1] = arguments[_key4];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      return oldHook.apply(this, args);
    };
  }
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;

  Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_NAME":"车型大全","VUE_APP_PLATFORM":"mp-toutiao","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "tt".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // 用于字节跳动小程序模拟抽象节点
    properties.generic = {
      type: Object,
      value: null };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this2.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this2.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function initEventChannel$1() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    if (!this.__eventChannel__) {
      this.__eventChannel__ = new EventChannel();
    }
    return this.__eventChannel__;
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}

function initScopedSlotsParams() {
  var center = {};
  var parents = {};

  _vue.default.prototype.$hasScopedSlotsParams = function (vueId) {
    var has = center[vueId];
    if (!has) {
      parents[vueId] = this;
      this.$on('hook:destory', function () {
        delete parents[vueId];
      });
    }
    return has;
  };

  _vue.default.prototype.$getScopedSlotsParams = function (vueId, name, key) {
    var data = center[vueId];
    if (data) {
      var object = data[name] || {};
      return key ? object[key] : object;
    } else {
      parents[vueId] = this;
      this.$on('hook:destory', function () {
        delete parents[vueId];
      });
    }
  };

  _vue.default.prototype.$setScopedSlotsParams = function (name, value) {
    var vueId = this.$options.propsData.vueId;
    var object = center[vueId] = center[vueId] || {};
    object[name] = value;
    if (parents[vueId]) {
      parents[vueId].$forceUpdate();
    }
  };

  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    } });

}

function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  initEventChannel$1();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);

  _vue.default.prototype.mpHost = "mp-toutiao";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {// hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initHooks(appOptions, hooks);

  return appOptions;
}

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

var mocks = ['__route__', '__webviewId__', '__nodeid__', '__nodeId__'];

function isPage() {
  return this.__nodeid__ === 0 || this.__nodeId__ === 0;
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  /* eslint-disable no-undef */
  var minorVersion = parseInt(tt.getSystemInfoSync().SDKVersion.split('.')[1]);
  if (minorVersion > 16) {
    Object.defineProperty(vm, '$refs', {
      get: function get() {
        var $refs = {};
        var components = mpInstance.selectAllComponents('.vue-ref');
        components.forEach(function (component) {
          var ref = component.dataset.ref;
          $refs[ref] = component.$vm || component;
        });
        var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
        forComponents.forEach(function (component) {
          var ref = component.dataset.ref;
          if (!$refs[ref]) {
            $refs[ref] = [];
          }
          $refs[ref].push(component.$vm || component);
        });
        return $refs;
      } });

  } else {
    mpInstance.selectAllComponents('.vue-ref', function (components) {
      components.forEach(function (component) {
        var ref = component.dataset.ref;
        vm.$refs[ref] = component.$vm || component;
      });
    });
    mpInstance.selectAllComponents('.vue-ref-in-for', function (forComponents) {
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!vm.$refs[ref]) {
          vm.$refs[ref] = [];
        }
        vm.$refs[ref].push(component.$vm || component);
      });
    });
  }
}

var instances = Object.create(null);

function initRelation(_ref5)


{var vuePid = _ref5.vuePid,mpInstance = _ref5.mpInstance;
  // 头条 triggerEvent 后，接收事件时机特别晚，已经到了 ready 之后
  var nodeId = (mpInstance.__nodeId__ || mpInstance.__nodeid__) + '';
  var webviewId = mpInstance.__webviewId__ + '';

  instances[webviewId + '_' + nodeId] = mpInstance.$vm;

  this.triggerEvent('__l', {
    vuePid: vuePid,
    nodeId: nodeId,
    webviewId: webviewId });

}

function handleLink$1(_ref6)





{var _ref6$detail = _ref6.detail,vuePid = _ref6$detail.vuePid,nodeId = _ref6$detail.nodeId,webviewId = _ref6$detail.webviewId;
  var vm = instances[webviewId + '_' + nodeId];
  if (!vm) {
    return;
  }

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vm.$parent = parentVm;
  vm.$root = parentVm.$root;
  parentVm.$children.push(vm);

  vm.__call_hook('created');
  vm.__call_hook('beforeMount');
  vm._isMounted = true;
  vm.__call_hook('mounted');
  vm.__call_hook('onReady');
}

function parseApp(vm) {
  _vue.default.prototype._$fallback = true; // 降级（调整原 vue 的部分生命周期，如 created，beforeMount,inject,provide）

  _vue.default.mixin({
    created: function created() {// 处理 injections,头条 triggerEvent 是异步，且触发时机很慢，故延迟 relation 设置
      if (this.mpType !== 'app') {
        if (
        this.mpType === 'page' &&
        !this.$scope.route &&
        this.$scope.__route__)
        {
          this.$scope.route = this.$scope.__route__;
        }

        initRefs(this);

        this.__init_injections(this);
        this.__init_provide(this);
      }
    } });


  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: function initRefs() {} // attached 时，可能查询不到
  });
}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref7 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref7.isPage,initRelation = _ref7.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueOptions) {var _parseBaseComponent =
  parseBaseComponent(vueOptions),_parseBaseComponent2 = _slicedToArray(_parseBaseComponent, 2),componentOptions = _parseBaseComponent2[0],VueComponent = _parseBaseComponent2[1];

  componentOptions.lifetimes.attached = function attached() {
    var properties = this.properties;

    var options = {
      mpType: isPage.call(this) ? 'page' : 'component',
      mpInstance: this,
      propsData: properties };


    initVueIds(properties.vueId, this);

    // 初始化 vue 实例
    this.$vm = new VueComponent(options);

    // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
    initSlots(this.$vm, properties.vueSlots);

    // 处理父子关系
    initRelation.call(this, {
      vuePid: this._$vuePid,
      mpInstance: this });


    // 触发首次 setData
    this.$vm.$mount();
  };

  // ready 比 handleLink 还早，初始化逻辑放到 handleLink 中
  delete componentOptions.lifetimes.ready;

  componentOptions.methods.__l = handleLink$1;

  return componentOptions;
}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref8)


{var isPage = _ref8.isPage,initRelation = _ref8.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  var pageOptions = parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

  // 页面需要在 ready 中触发，其他组件是在 handleLink 中触发
  pageOptions.lifetimes.ready = function ready() {
    if (this.$vm && this.$vm.mpType === 'page') {
      this.$vm.__call_hook('created');
      this.$vm.__call_hook('beforeMount');
      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted');
      this.$vm.__call_hook('onReady');
    } else {
      this.is && console.warn(this.is + ' is not ready');
    }
  };

  pageOptions.lifetimes.detached = function detached() {
    this.$vm && this.$vm.$destroy();
    // 清理
    var webviewId = this.__webviewId__;
    webviewId && Object.keys(instances).forEach(function (key) {
      if (key.indexOf(webviewId + '_') === 0) {
        delete instances[key];
      }
    });
  };

  return pageOptions;
}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true });

  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && tt.onAppShow) {
    tt.onAppShow(function () {for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {args[_key6] = arguments[_key6];}
      appOptions.onShow.apply(app, args);
    });
  }
  if (isFn(appOptions.onHide) && tt.onAppHide) {
    tt.onAppHide(function () {for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {args[_key7] = arguments[_key7];}
      appOptions.onHide.apply(app, args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = tt.getLaunchOptionsSync && tt.getLaunchOptionsSync();
    appOptions.onLaunch.call(app, args);
  }
  return vm;
}

function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && tt.onAppShow) {
    tt.onAppShow(function () {for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {args[_key8] = arguments[_key8];}
      appOptions.onShow.apply(vm, args);
    });
  }
  if (isFn(appOptions.onHide) && tt.onAppHide) {
    tt.onAppHide(function () {for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {args[_key9] = arguments[_key9];}
      appOptions.onHide.apply(vm, args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = tt.getLaunchOptionsSync && tt.getLaunchOptionsSync();
    appOptions.onLaunch.call(vm, args);
  }
  return vm;
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!tt.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-toutiao" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(tt, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, tt[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(tt).forEach(function (name) {
    if (hasOwn(tt, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, tt[name]));
    }
  });
}

tt.createApp = createApp;
tt.createPage = createPage;
tt.createComponent = createComponent;
tt.createSubpackageApp = createSubpackageApp;
tt.createPlugin = createPlugin;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),
/* 2 */
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_NAME":"车型大全","VUE_APP_PLATFORM":"mp-toutiao","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_NAME":"车型大全","VUE_APP_PLATFORM":"mp-toutiao","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_NAME":"车型大全","VUE_APP_PLATFORM":"mp-toutiao","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_NAME":"车型大全","VUE_APP_PLATFORM":"mp-toutiao","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),
/* 3 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/*!***********************************************!*\
  !*** D:/HXProjects/CarsCollection/pages.json ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 13 */
/*!*******************************************************************!*\
  !*** D:/HXProjects/CarsCollection/node_modules/uview-ui/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
var _mixin = _interopRequireDefault(__webpack_require__(/*! ./libs/mixin/mixin.js */ 14));



var _request = _interopRequireDefault(__webpack_require__(/*! ./libs/request */ 15));




















var _queryParams = _interopRequireDefault(__webpack_require__(/*! ./libs/function/queryParams.js */ 19));

var _route = _interopRequireDefault(__webpack_require__(/*! ./libs/function/route.js */ 20));

var _timeFormat = _interopRequireDefault(__webpack_require__(/*! ./libs/function/timeFormat.js */ 24));

var _timeFrom = _interopRequireDefault(__webpack_require__(/*! ./libs/function/timeFrom.js */ 25));

var _colorGradient = _interopRequireDefault(__webpack_require__(/*! ./libs/function/colorGradient.js */ 26));

var _guid = _interopRequireDefault(__webpack_require__(/*! ./libs/function/guid.js */ 27));

var _color = _interopRequireDefault(__webpack_require__(/*! ./libs/function/color.js */ 28));

var _type2icon = _interopRequireDefault(__webpack_require__(/*! ./libs/function/type2icon.js */ 29));

var _randomArray = _interopRequireDefault(__webpack_require__(/*! ./libs/function/randomArray.js */ 30));

var _deepClone = _interopRequireDefault(__webpack_require__(/*! ./libs/function/deepClone.js */ 17));

var _deepMerge = _interopRequireDefault(__webpack_require__(/*! ./libs/function/deepMerge.js */ 16));

var _addUnit = _interopRequireDefault(__webpack_require__(/*! ./libs/function/addUnit.js */ 31));


var _test = _interopRequireDefault(__webpack_require__(/*! ./libs/function/test.js */ 18));

var _random = _interopRequireDefault(__webpack_require__(/*! ./libs/function/random.js */ 32));

var _trim = _interopRequireDefault(__webpack_require__(/*! ./libs/function/trim.js */ 33));

var _toast = _interopRequireDefault(__webpack_require__(/*! ./libs/function/toast.js */ 34));

var _getParent = _interopRequireDefault(__webpack_require__(/*! ./libs/function/getParent.js */ 35));

var _$parent = _interopRequireDefault(__webpack_require__(/*! ./libs/function/$parent.js */ 36));



var _sys = __webpack_require__(/*! ./libs/function/sys.js */ 37);

var _debounce = _interopRequireDefault(__webpack_require__(/*! ./libs/function/debounce.js */ 38));

var _throttle = _interopRequireDefault(__webpack_require__(/*! ./libs/function/throttle.js */ 39));



var _config = _interopRequireDefault(__webpack_require__(/*! ./libs/config/config.js */ 40));

var _zIndex = _interopRequireDefault(__webpack_require__(/*! ./libs/config/zIndex.js */ 41));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // 引入全局mixin
// 引入关于是否mixin集成小程序分享的配置
// import wxshare from './libs/mixin/mpShare.js'
// 全局挂载引入http相关请求拦截插件
function wranning(str) {// 开发环境进行信息输出,主要是一些报错信息
  // 这个环境的来由是在程序编写时候,点击hx编辑器运行调试代码的时候,详见:
  // 	https://uniapp.dcloud.io/frame?id=%e5%bc%80%e5%8f%91%e7%8e%af%e5%a2%83%e5%92%8c%e7%94%9f%e4%ba%a7%e7%8e%af%e5%a2%83
  if (true) {console.warn(str);}} // 尝试判断在根目录的/store中是否有$u.mixin.js，此文件uView默认为需要挂在到全局的vuex的state变量
// HX2.6.11版本,放到try中,控制台依然会警告,暂时不用此方式，
// let vuexStore = {};
// try {
// 	vuexStore = require("@/store/$u.mixin.js");
// } catch (e) {
// 	//TODO handle the exception
// }
// post类型对象参数转为get类型url参数
var $u = { queryParams: _queryParams.default, route: _route.default, timeFormat: _timeFormat.default, date: _timeFormat.default, // 另名date
  timeFrom: _timeFrom.default, colorGradient: _colorGradient.default.colorGradient, colorToRgba: _colorGradient.default.colorToRgba, guid: _guid.default, color: _color.default, sys: _sys.sys, os: _sys.os, type2icon: _type2icon.default, randomArray: _randomArray.default, wranning: wranning, get: _request.default.get,
  post: _request.default.post,
  put: _request.default.put,
  'delete': _request.default.delete,
  hexToRgb: _colorGradient.default.hexToRgb,
  rgbToHex: _colorGradient.default.rgbToHex,
  test: _test.default,
  random: _random.default,
  deepClone: _deepClone.default,
  deepMerge: _deepMerge.default,
  getParent: _getParent.default,
  $parent: _$parent.default,
  addUnit: _addUnit.default,
  trim: _trim.default,
  type: ['primary', 'success', 'error', 'warning', 'info'],
  http: _request.default,
  toast: _toast.default,
  config: _config.default, // uView配置信息相关，比如版本号
  zIndex: _zIndex.default,
  debounce: _debounce.default,
  throttle: _throttle.default };


// $u挂载到uni对象上
uni.$u = $u;

var install = function install(Vue) {
  Vue.mixin(_mixin.default);
  if (Vue.prototype.openShare) {
    Vue.mixin(mpShare);
  }
  // Vue.mixin(vuexStore);
  // 时间格式化，同时两个名称，date和timeFormat
  Vue.filter('timeFormat', function (timestamp, format) {
    return (0, _timeFormat.default)(timestamp, format);
  });
  Vue.filter('date', function (timestamp, format) {
    return (0, _timeFormat.default)(timestamp, format);
  });
  // 将多久以前的方法，注入到全局过滤器
  Vue.filter('timeFrom', function (timestamp, format) {
    return (0, _timeFrom.default)(timestamp, format);
  });
  Vue.prototype.$u = $u;
};var _default =

{
  install: install };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),
/* 14 */
/*!******************************************************************************!*\
  !*** D:/HXProjects/CarsCollection/node_modules/uview-ui/libs/mixin/mixin.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni) {module.exports = {
  data: function data() {
    return {};
  },
  onLoad: function onLoad() {
    // getRect挂载到$u上，因为这方法需要使用in(this)，所以无法把它独立成一个单独的文件导出
    this.$u.getRect = this.$uGetRect;
  },
  methods: {
    // 查询节点信息
    // 目前此方法在支付宝小程序中无法获取组件跟接点的尺寸，为支付宝的bug(2020-07-21)
    // 解决办法为在组件根部再套一个没有任何作用的view元素
    $uGetRect: function $uGetRect(selector, all) {var _this = this;
      return new Promise(function (resolve) {
        uni.createSelectorQuery().
        in(_this)[all ? 'selectAll' : 'select'](selector).
        boundingClientRect(function (rect) {
          if (all && Array.isArray(rect) && rect.length) {
            resolve(rect);
          }
          if (!all && rect) {
            resolve(rect);
          }
        }).
        exec();
      });
    },
    getParentData: function getParentData() {var _this2 = this;var parentName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      // 避免在created中去定义parent变量
      if (!this.parent) this.parent = false;
      // 这里的本质原理是，通过获取父组件实例(也即u-radio-group的this)
      // 将父组件this中对应的参数，赋值给本组件(u-radio的this)的parentData对象中对应的属性
      // 之所以需要这么做，是因为所有端中，头条小程序不支持通过this.parent.xxx去监听父组件参数的变化
      this.parent = this.$u.$parent.call(this, parentName);
      if (this.parent) {
        // 历遍parentData中的属性，将parent中的同名属性赋值给parentData
        Object.keys(this.parentData).map(function (key) {
          _this2.parentData[key] = _this2.parent[key];
        });
      }
    },
    // 阻止事件冒泡
    preventEvent: function preventEvent(e) {
      e && e.stopPropagation && e.stopPropagation();
    } },

  onReachBottom: function onReachBottom() {
    uni.$emit('uOnReachBottom');
  },
  beforeDestroy: function beforeDestroy() {var _this3 = this;
    // 判断当前页面是否存在parent和chldren，一般在checkbox和checkbox-group父子联动的场景会有此情况
    // 组件销毁时，移除子组件在父组件children数组中的实例，释放资源，避免数据混乱
    if (this.parent && uni.$u.test.array(this.parent.children)) {
      // 组件销毁时，移除父组件中的children数组中对应的实例
      var childrenList = this.parent.children;
      childrenList.map(function (child, index) {
        // 如果相等，则移除
        if (child === _this3) {
          childrenList.splice(index, 1);
        }
      });
    }
  } };
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),
/* 15 */
/*!********************************************************************************!*\
  !*** D:/HXProjects/CarsCollection/node_modules/uview-ui/libs/request/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _deepMerge = _interopRequireDefault(__webpack_require__(/*! ../function/deepMerge */ 16));
var _test = _interopRequireDefault(__webpack_require__(/*! ../function/test */ 18));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var
Request = /*#__PURE__*/function () {_createClass(Request, [{ key: "setConfig",
    // 设置全局默认配置
    value: function setConfig(customConfig) {
      // 深度合并对象，否则会造成对象深层属性丢失
      this.config = (0, _deepMerge.default)(this.config, customConfig);
    }

    // 主要请求部分
  }, { key: "request", value: function request() {var _this = this;var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // 检查请求拦截
      if (this.interceptor.request && typeof this.interceptor.request === 'function') {
        var tmpConfig = {};
        var interceptorRequest = this.interceptor.request(options);
        if (interceptorRequest === false) {
          // 返回一个处于pending状态中的Promise，来取消原promise，避免进入then()回调
          return new Promise(function () {});
        }
        this.options = interceptorRequest;
      }
      options.dataType = options.dataType || this.config.dataType;
      options.responseType = options.responseType || this.config.responseType;
      options.url = options.url || '';
      options.params = options.params || {};
      options.header = Object.assign({}, this.config.header, options.header);
      options.method = options.method || this.config.method;

      return new Promise(function (resolve, reject) {
        options.complete = function (response) {
          // 请求返回后，隐藏loading(如果请求返回快的话，可能会没有loading)
          uni.hideLoading();
          // 清除定时器，如果请求回来了，就无需loading
          clearTimeout(_this.config.timer);
          _this.config.timer = null;
          // 判断用户对拦截返回数据的要求，如果originalData为true，返回所有的数据(response)到拦截器，否则只返回response.data
          if (_this.config.originalData) {
            // 判断是否存在拦截器
            if (_this.interceptor.response && typeof _this.interceptor.response === 'function') {
              var resInterceptors = _this.interceptor.response(response);
              // 如果拦截器不返回false，就将拦截器返回的内容给this.$u.post的then回调
              if (resInterceptors !== false) {
                resolve(resInterceptors);
              } else {
                // 如果拦截器返回false，意味着拦截器定义者认为返回有问题，直接接入catch回调
                reject(response);
              }
            } else {
              // 如果要求返回原始数据，就算没有拦截器，也返回最原始的数据
              resolve(response);
            }
          } else {
            if (response.statusCode == 200) {
              if (_this.interceptor.response && typeof _this.interceptor.response === 'function') {
                var _resInterceptors = _this.interceptor.response(response.data);
                if (_resInterceptors !== false) {
                  resolve(_resInterceptors);
                } else {
                  reject(response.data);
                }
              } else {
                // 如果不是返回原始数据(originalData=false)，且没有拦截器的情况下，返回纯数据给then回调
                resolve(response.data);
              }
            } else {
              // 不返回原始数据的情况下，服务器状态码不为200，modal弹框提示
              // if(response.errMsg) {
              // 	uni.showModal({
              // 		title: response.errMsg
              // 	});
              // }
              reject(response);
            }
          }
        };

        // 判断用户传递的URL是否/开头,如果不是,加上/，这里使用了uView的test.js验证库的url()方法
        options.url = _test.default.url(options.url) ? options.url : _this.config.baseUrl + (options.url.indexOf('/') == 0 ?
        options.url : '/' + options.url);

        // 是否显示loading
        // 加一个是否已有timer定时器的判断，否则有两个同时请求的时候，后者会清除前者的定时器id
        // 而没有清除前者的定时器，导致前者超时，一直显示loading
        if (_this.config.showLoading && !_this.config.timer) {
          _this.config.timer = setTimeout(function () {
            uni.showLoading({
              title: _this.config.loadingText,
              mask: _this.config.loadingMask });

            _this.config.timer = null;
          }, _this.config.loadingTime);
        }
        uni.request(options);
      });
      // .catch(res => {
      // 	// 如果返回reject()，不让其进入this.$u.post().then().catch()后面的catct()
      // 	// 因为很多人都会忘了写后面的catch()，导致报错捕获不到catch
      // 	return new Promise(()=>{});
      // })
    } }]);

  function Request() {var _this2 = this;_classCallCheck(this, Request);
    this.config = {
      baseUrl: '', // 请求的根域名
      // 默认的请求头
      header: {},
      method: 'POST',
      // 设置为json，返回后uni.request会对数据进行一次JSON.parse
      dataType: 'json',
      // 此参数无需处理，因为5+和支付宝小程序不支持，默认为text即可
      responseType: 'text',
      showLoading: true, // 是否显示请求中的loading
      loadingText: '请求中...',
      loadingTime: 800, // 在此时间内，请求还没回来的话，就显示加载中动画，单位ms
      timer: null, // 定时器
      originalData: false, // 是否在拦截器中返回服务端的原始数据，见文档说明
      loadingMask: true // 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
    };

    // 拦截器
    this.interceptor = {
      // 请求前的拦截
      request: null,
      // 请求后的拦截
      response: null };


    // get请求
    this.get = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        method: 'GET',
        url: url,
        header: header,
        data: data });

    };

    // post请求
    this.post = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        url: url,
        method: 'POST',
        header: header,
        data: data });

    };

    // put请求，不支持支付宝小程序(HX2.6.15)
    this.put = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        url: url,
        method: 'PUT',
        header: header,
        data: data });

    };

    // delete请求，不支持支付宝和头条小程序(HX2.6.15)
    this.delete = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        url: url,
        method: 'DELETE',
        header: header,
        data: data });

    };
  }return Request;}();var _default =

new Request();exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),
/* 16 */
/*!*************************************************************************************!*\
  !*** D:/HXProjects/CarsCollection/node_modules/uview-ui/libs/function/deepMerge.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _deepClone = _interopRequireDefault(__webpack_require__(/*! ./deepClone */ 17));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// JS对象深度合并
function deepMerge() {var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  target = (0, _deepClone.default)(target);
  if (typeof target !== 'object' || typeof source !== 'object') return false;
  for (var prop in source) {
    if (!source.hasOwnProperty(prop)) continue;
    if (prop in target) {
      if (typeof target[prop] !== 'object') {
        target[prop] = source[prop];
      } else {
        if (typeof source[prop] !== 'object') {
          target[prop] = source[prop];
        } else {
          if (target[prop].concat && source[prop].concat) {
            target[prop] = target[prop].concat(source[prop]);
          } else {
            target[prop] = deepMerge(target[prop], source[prop]);
          }
        }
      }
    } else {
      target[prop] = source[prop];
    }
  }
  return target;
}var _default =

deepMerge;exports.default = _default;

/***/ }),
/* 17 */
/*!*************************************************************************************!*\
  !*** D:/HXProjects/CarsCollection/node_modules/uview-ui/libs/function/deepClone.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
}

// 深度克隆
function deepClone(obj) {
  // 对常见的“非”值，直接返回原来值
  if ([null, undefined, NaN, false].includes(obj)) return obj;
  if (typeof obj !== "object" && typeof obj !== 'function') {
    //原始类型直接返回
    return obj;
  }
  var o = isArray(obj) ? [] : {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i];
    }
  }
  return o;
}var _default =

deepClone;exports.default = _default;

/***/ }),
/* 18 */
/*!********************************************************************************!*\
  !*** D:/HXProjects/CarsCollection/node_modules/uview-ui/libs/function/test.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 验证电子邮箱格式
                                                                                                      */
function email(value) {
  return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
}

/**
   * 验证手机格式
   */
function mobile(value) {
  return /^1[3-9]\d{9}$/.test(value);
}

/**
   * 验证URL格式
   */
function url(value) {
  return /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/.test(value);
}

/**
   * 验证日期格式
   */
function date(value) {
  return !/Invalid|NaN/.test(new Date(value).toString());
}

/**
   * 验证ISO类型的日期格式
   */
function dateISO(value) {
  return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
}

/**
   * 验证十进制数字
   */
function number(value) {
  return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
}

/**
   * 验证整数
   */
function digits(value) {
  return /^\d+$/.test(value);
}

/**
   * 验证身份证号码
   */
function idCard(value) {
  return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
  value);
}

/**
   * 是否车牌号
   */
function carNo(value) {
  // 新能源车牌
  var xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
  // 旧车牌
  var creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
  if (value.length === 7) {
    return creg.test(value);
  } else if (value.length === 8) {
    return xreg.test(value);
  } else {
    return false;
  }
}

/**
   * 金额,只允许2位小数
   */
function amount(value) {
  //金额，只允许保留两位小数
  return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
}

/**
   * 中文
   */
function chinese(value) {
  var reg = /^[\u4e00-\u9fa5]+$/gi;
  return reg.test(value);
}

/**
   * 只能输入字母
   */
function letter(value) {
  return /^[a-zA-Z]*$/.test(value);
}

/**
   * 只能是字母或者数字
   */
function enOrNum(value) {
  //英文或者数字
  var reg = /^[0-9a-zA-Z]*$/g;
  return reg.test(value);
}

/**
   * 验证是否包含某个值
   */
function contains(value, param) {
  return value.indexOf(param) >= 0;
}

/**
   * 验证一个值范围[min, max]
   */
function range(value, param) {
  return value >= param[0] && value <= param[1];
}

/**
   * 验证一个长度范围[min, max]
   */
function rangeLength(value, param) {
  return value.length >= param[0] && value.length <= param[1];
}

/**
   * 是否固定电话
   */
function landline(value) {
  var reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
  return reg.test(value);
}

/**
   * 判断是否为空
   */
function empty(value) {
  switch (typeof value) {
    case 'undefined':
      return true;
    case 'string':
      if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) return true;
      break;
    case 'boolean':
      if (!value) return true;
      break;
    case 'number':
      if (0 === value || isNaN(value)) return true;
      break;
    case 'object':
      if (null === value || value.length === 0) return true;
      for (var i in value) {
        return false;
      }
      return true;}

  return false;
}

/**
   * 是否json字符串
   */
function jsonString(value) {
  if (typeof value == 'string') {
    try {
      var obj = JSON.parse(value);
      if (typeof obj == 'object' && obj) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
  return false;
}


/**
   * 是否数组
   */
function array(value) {
  if (typeof Array.isArray === "function") {
    return Array.isArray(value);
  } else {
    return Object.prototype.toString.call(value) === "[object Array]";
  }
}

/**
   * 是否对象
   */
function object(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}

/**
   * 是否短信验证码
   */
function code(value) {var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return new RegExp("^\\d{".concat(len, "}$")).test(value);
}var _default =


{
  email: email,
  mobile: mobile,
  url: url,
  date: date,
  dateISO: dateISO,
  number: number,
  digits: digits,
  idCard: idCard,
  carNo: carNo,
  amount: amount,
  chinese: chinese,
  letter: letter,
  enOrNum: enOrNum,
  contains: contains,
  range: range,
  rangeLength: rangeLength,
  empty: empty,
  isEmpty: empty,
  jsonString: jsonString,
  landline: landline,
  object: object,
  array: array,
  code: code };exports.default = _default;

/***/ }),
/* 19 */
/*!***************************************************************************************!*\
  !*** D:/HXProjects/CarsCollection/node_modules/uview-ui/libs/function/queryParams.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 对象转url参数
                                                                                                      * @param {*} data,对象
                                                                                                      * @param {*} isPrefix,是否自动加上"?"
                                                                                                      */
function queryParams() {var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var isPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;var arrayFormat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'brackets';
  var prefix = isPrefix ? '?' : '';
  var _result = [];
  if (['indices', 'brackets', 'repeat', 'comma'].indexOf(arrayFormat) == -1) arrayFormat = 'brackets';var _loop = function _loop(
  key) {
    var value = data[key];
    // 去掉为空的参数
    if (['', undefined, null].indexOf(value) >= 0) {
      return "continue";
    }
    // 如果值为数组，另行处理
    if (value.constructor === Array) {
      // e.g. {ids: [1, 2, 3]}
      switch (arrayFormat) {
        case 'indices':
          // 结果: ids[0]=1&ids[1]=2&ids[2]=3
          for (var i = 0; i < value.length; i++) {
            _result.push(key + '[' + i + ']=' + value[i]);
          }
          break;
        case 'brackets':
          // 结果: ids[]=1&ids[]=2&ids[]=3
          value.forEach(function (_value) {
            _result.push(key + '[]=' + _value);
          });
          break;
        case 'repeat':
          // 结果: ids=1&ids=2&ids=3
          value.forEach(function (_value) {
            _result.push(key + '=' + _value);
          });
          break;
        case 'comma':
          // 结果: ids=1,2,3
          var commaStr = "";
          value.forEach(function (_value) {
            commaStr += (commaStr ? "," : "") + _value;
          });
          _result.push(key + '=' + commaStr);
          break;
        default:
          value.forEach(function (_value) {
            _result.push(key + '[]=' + _value);
          });}

    } else {
      _result.push(key + '=' + value);
    }};for (var key in data) {var _ret = _loop(key);if (_ret === "continue") continue;
  }
  return _result.length ? prefix + _result.join('&') : '';
}var _default =

queryParams;exports.default = _default;

/***/ }),
/* 20 */
/*!*********************************************************************************!*\
  !*** D:/HXProjects/CarsCollection/node_modules/uview-ui/libs/function/route.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 21));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 路由跳转方法，该方法相对于直接使用uni.xxx的好处是使用更加简单快捷
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 并且带有路由拦截功能
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */var

Router = /*#__PURE__*/function () {
  function Router() {_classCallCheck(this, Router);
    // 原始属性定义
    this.config = {
      type: 'navigateTo',
      url: '',
      delta: 1, // navigateBack页面后退时,回退的层数
      params: {}, // 传递的参数
      animationType: 'pop-in', // 窗口动画,只在APP有效
      animationDuration: 300, // 窗口动画持续时间,单位毫秒,只在APP有效
      intercept: false // 是否需要拦截
    };
    // 因为route方法是需要对外赋值给另外的对象使用，同时route内部有使用this，会导致route失去上下文
    // 这里在构造函数中进行this绑定
    this.route = this.route.bind(this);
  }

  // 判断url前面是否有"/"，如果没有则加上，否则无法跳转
  _createClass(Router, [{ key: "addRootPath", value: function addRootPath(url) {
      return url[0] === '/' ? url : "/".concat(url);
    }

    // 整合路由参数
  }, { key: "mixinParam", value: function mixinParam(url, params) {
      url = url && this.addRootPath(url);

      // 使用正则匹配，主要依据是判断是否有"/","?","="等，如“/page/index/index?name=mary"
      // 如果有url中有get参数，转换后无需带上"?"
      var query = '';
      if (/.*\/.*\?.*=.*/.test(url)) {
        // object对象转为get类型的参数
        query = uni.$u.queryParams(params, false);
        // 因为已有get参数,所以后面拼接的参数需要带上"&"隔开
        return url += "&" + query;
      } else {
        // 直接拼接参数，因为此处url中没有后面的query参数，也就没有"?/&"之类的符号
        query = uni.$u.queryParams(params);
        return url += query;
      }
    }

    // 对外的方法名称
  }, { key: "route", value: function () {var _route = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var options,params,mergeConfig,isNext,_args = arguments;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};params = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                // 合并用户的配置和内部的默认配置
                mergeConfig = {};

                if (typeof options === 'string') {
                  // 如果options为字符串，则为route(url, params)的形式
                  mergeConfig.url = this.mixinParam(options, params);
                  mergeConfig.type = 'navigateTo';
                } else {
                  mergeConfig = uni.$u.deepClone(options, this.config);
                  // 否则正常使用mergeConfig中的url和params进行拼接
                  mergeConfig.url = this.mixinParam(options.url, options.params);
                }

                if (params.intercept) {
                  this.config.intercept = params.intercept;
                }
                // params参数也带给拦截器
                mergeConfig.params = params;
                // 合并内外部参数
                mergeConfig = uni.$u.deepMerge(this.config, mergeConfig);
                // 判断用户是否定义了拦截器
                if (!(typeof uni.$u.routeIntercept === 'function')) {_context.next = 14;break;}_context.next = 10;return (

                  new Promise(function (resolve, reject) {
                    uni.$u.routeIntercept(mergeConfig, resolve);
                  }));case 10:isNext = _context.sent;
                // 如果isNext为true，则执行路由跳转
                isNext && this.openPage(mergeConfig);_context.next = 15;break;case 14:

                this.openPage(mergeConfig);case 15:case "end":return _context.stop();}}}, _callee, this);}));function route() {return _route.apply(this, arguments);}return route;}()



    // 执行路由跳转
  }, { key: "openPage", value: function openPage(config) {
      // 解构参数
      var
      url =




      config.url,type = config.type,delta = config.delta,animationType = config.animationType,animationDuration = config.animationDuration;
      if (config.type == 'navigateTo' || config.type == 'to') {
        uni.navigateTo({
          url: url,
          animationType: animationType,
          animationDuration: animationDuration });

      }
      if (config.type == 'redirectTo' || config.type == 'redirect') {
        uni.redirectTo({
          url: url });

      }
      if (config.type == 'switchTab' || config.type == 'tab') {
        uni.switchTab({
          url: url });

      }
      if (config.type == 'reLaunch' || config.type == 'launch') {
        uni.reLaunch({
          url: url });

      }
      if (config.type == 'navigateBack' || config.type == 'back') {
        uni.navigateBack({
          delta: delta });

      }
    } }]);return Router;}();var _default =


new Router().route;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),
/* 21 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 22);

/***/ }),
/* 22 */
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 23);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 23 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 24 */
/*!**************************************************************************************!*\
  !*** D:/HXProjects/CarsCollection/node_modules/uview-ui/libs/function/timeFormat.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // padStart 的 polyfill，因为某些机型或情况，还无法支持es7的padStart，比如电脑版的微信小程序
// 所以这里做一个兼容polyfill的兼容处理
if (!String.prototype.padStart) {
  // 为了方便表示这里 fillString 用了ES6 的默认参数，不影响理解
  String.prototype.padStart = function (maxLength) {var fillString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
    if (Object.prototype.toString.call(fillString) !== "[object String]") throw new TypeError(
    'fillString must be String');
    var str = this;
    // 返回 String(str) 这里是为了使返回的值是字符串字面量，在控制台中更符合直觉
    if (str.length >= maxLength) return String(str);

    var fillLength = maxLength - str.length,
    times = Math.ceil(fillLength / fillString.length);
    while (times >>= 1) {
      fillString += fillString;
      if (times === 1) {
        fillString += fillString;
      }
    }
    return fillString.slice(0, fillLength) + str;
  };
}

// 其他更多是格式化有如下:
// yyyy:mm:dd|yyyy:mm|yyyy年mm月dd日|yyyy年mm月dd日 hh时MM分等,可自定义组合
function timeFormat() {var dateTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  // 如果为null,则格式化当前时间
  if (!dateTime) dateTime = Number(new Date());
  // 如果dateTime长度为10或者13，则为秒和毫秒的时间戳，如果超过13位，则为其他的时间格式
  if (dateTime.toString().length == 10) dateTime *= 1000;
  var date = new Date(dateTime);
  var ret;
  var opt = {
    "y+": date.getFullYear().toString(), // 年
    "m+": (date.getMonth() + 1).toString(), // 月
    "d+": date.getDate().toString(), // 日
    "h+": date.getHours().toString(), // 时
    "M+": date.getMinutes().toString(), // 分
    "s+": date.getSeconds().toString() // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (var k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0"));
    };
  };
  return fmt;
}var _default =

timeFormat;exports.default = _default;

/***/ }),
/* 25 */
/*!************************************************************************************!*\
  !*** D:/HXProjects/CarsCollection/node_modules/uview-ui/libs/function/timeFrom.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _timeFormat = _interopRequireDefault(__webpack_require__(/*! ../../libs/function/timeFormat.js */ 24));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                                                                                                                                          * 时间戳转为多久之前
                                                                                                                                                                                                                                                                                          * @param String timestamp 时间戳
                                                                                                                                                                                                                                                                                          * @param String | Boolean format 如果为时间格式字符串，超出一定时间范围，返回固定的时间格式；
                                                                                                                                                                                                                                                                                          * 如果为布尔值false，无论什么时间，都返回多久以前的格式
                                                                                                                                                                                                                                                                                          */
function timeFrom() {var dateTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  // 如果为null,则格式化当前时间
  if (!dateTime) dateTime = Number(new Date());
  // 如果dateTime长度为10或者13，则为秒和毫秒的时间戳，如果超过13位，则为其他的时间格式
  if (dateTime.toString().length == 10) dateTime *= 1000;
  var timestamp = +new Date(Number(dateTime));

  var timer = (Number(new Date()) - timestamp) / 1000;
  // 如果小于5分钟,则返回"刚刚",其他以此类推
  var tips = '';
  switch (true) {
    case timer < 300:
      tips = '刚刚';
      break;
    case timer >= 300 && timer < 3600:
      tips = parseInt(timer / 60) + '分钟前';
      break;
    case timer >= 3600 && timer < 86400:
      tips = parseInt(timer / 3600) + '小时前';
      break;
    case timer >= 86400 && timer < 2592000:
      tips = parseInt(timer / 86400) + '天前';
      break;
    default:
      // 如果format为false，则无论什么时间戳，都显示xx之前
      if (format === false) {
        if (timer >= 2592000 && timer < 365 * 86400) {
          tips = parseInt(timer / (86400 * 30)) + '个月前';
        } else {
          tips = parseInt(timer / (86400 * 365)) + '年前';
        }
      } else {
        tips = (0, _timeFormat.default)(timestamp, format);
      }}

  return tips;
}var _default =

timeFrom;exports.default = _default;

/***/ }),
/* 26 */
/*!*****************************************************************************************!*\
  !*** D:/HXProjects/CarsCollection/node_modules/uview-ui/libs/function/colorGradient.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 求两个颜色之间的渐变值
                                                                                                      * @param {string} startColor 开始的颜色
                                                                                                      * @param {string} endColor 结束的颜色
                                                                                                      * @param {number} step 颜色等分的份额
                                                                                                      * */
function colorGradient() {var startColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'rgb(0, 0, 0)';var endColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rgb(255, 255, 255)';var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  var startRGB = hexToRgb(startColor, false); //转换为rgb数组模式
  var startR = startRGB[0];
  var startG = startRGB[1];
  var startB = startRGB[2];

  var endRGB = hexToRgb(endColor, false);
  var endR = endRGB[0];
  var endG = endRGB[1];
  var endB = endRGB[2];

  var sR = (endR - startR) / step; //总差值
  var sG = (endG - startG) / step;
  var sB = (endB - startB) / step;
  var colorArr = [];
  for (var i = 0; i < step; i++) {
    //计算每一步的hex值 
    var hex = rgbToHex('rgb(' + Math.round(sR * i + startR) + ',' + Math.round(sG * i + startG) + ',' + Math.round(sB *
    i + startB) + ')');
    colorArr.push(hex);
  }
  return colorArr;
}

// 将hex表示方式转换为rgb表示方式(这里返回rgb数组模式)
function hexToRgb(sColor) {var str = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  sColor = sColor.toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = "#";
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    //处理六位的颜色值
    var sColorChange = [];
    for (var _i = 1; _i < 7; _i += 2) {
      sColorChange.push(parseInt("0x" + sColor.slice(_i, _i + 2)));
    }
    if (!str) {
      return sColorChange;
    } else {
      return "rgb(".concat(sColorChange[0], ",").concat(sColorChange[1], ",").concat(sColorChange[2], ")");
    }
  } else if (/^(rgb|RGB)/.test(sColor)) {
    var arr = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    return arr.map(function (val) {return Number(val);});
  } else {
    return sColor;
  }
};

// 将rgb表示方式转换为hex表示方式
function rgbToHex(rgb) {
  var _this = rgb;
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  if (/^(rgb|RGB)/.test(_this)) {
    var aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    var strHex = "#";
    for (var i = 0; i < aColor.length; i++) {
      var hex = Number(aColor[i]).toString(16);
      hex = String(hex).length == 1 ? 0 + '' + hex : hex; // 保证每个rgb的值为2位
      if (hex === "0") {
        hex += hex;
      }
      strHex += hex;
    }
    if (strHex.length !== 7) {
      strHex = _this;
    }
    return strHex;
  } else if (reg.test(_this)) {
    var aNum = _this.replace(/#/, "").split("");
    if (aNum.length === 6) {
      return _this;
    } else if (aNum.length === 3) {
      var numHex = "#";
      for (var _i2 = 0; _i2 < aNum.length; _i2 += 1) {
        numHex += aNum[_i2] + aNum[_i2];
      }
      return numHex;
    }
  } else {
    return _this;
  }
}


/**
  * JS颜色十六进制转换为rgb或rgba,返回的格式为 rgba（255，255，255，0.5）字符串
  * sHex为传入的十六进制的色值
  * alpha为rgba的透明度
  */
function colorToRgba(color) {var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.3;
  color = rgbToHex(color);
  // 十六进制颜色值的正则表达式
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  /* 16进制颜色转为RGB格式 */
  var sColor = color.toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = '#';
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    // 处理六位的颜色值
    var sColorChange = [];
    for (var _i3 = 1; _i3 < 7; _i3 += 2) {
      sColorChange.push(parseInt('0x' + sColor.slice(_i3, _i3 + 2)));
    }
    // return sColorChange.join(',')
    return 'rgba(' + sColorChange.join(',') + ',' + alpha + ')';
  } else
  {
    return sColor;
  }
}var _default =

{
  colorGradient: colorGradient,
  hexToRgb: hexToRgb,
  rgbToHex: rgbToHex,
  colorToRgba: colorToRgba };exports.default = _default;

/***/ }),
/* 27 */
/*!********************************************************************************!*\
  !*** D:/HXProjects/CarsCollection/node_modules/uview-ui/libs/function/guid.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 本算法来源于简书开源代码，详见：https://www.jianshu.com/p/fdbf293d0a85
                                                                                                      * 全局唯一标识符（uuid，Globally Unique Identifier）,也称作 uuid(Universally Unique IDentifier) 
                                                                                                      * 一般用于多个组件之间,给它一个唯一的标识符,或者v-for循环的时候,如果使用数组的index可能会导致更新列表出现问题
                                                                                                      * 最可能的情况是左滑删除item或者对某条信息流"不喜欢"并去掉它的时候,会导致组件内的数据可能出现错乱
                                                                                                      * v-for的时候,推荐使用后端返回的id而不是循环的index
                                                                                                      * @param {Number} len uuid的长度
                                                                                                      * @param {Boolean} firstU 将返回的首字母置为"u"
                                                                                                      * @param {Nubmer} radix 生成uuid的基数(意味着返回的字符串都是这个基数),2-二进制,8-八进制,10-十进制,16-十六进制
                                                                                                      */
function guid() {var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;var firstU = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var uuid = [];
  radix = radix || chars.length;

  if (len) {
    // 如果指定uuid长度,只是取随机的字符,0|x为位运算,能去掉x的小数位,返回整数位
    for (var i = 0; i < len; i++) {uuid[i] = chars[0 | Math.random() * radix];}
  } else {
    var r;
    // rfc4122标准要求返回的uuid中,某些位为固定的字符
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';

    for (var _i = 0; _i < 36; _i++) {
      if (!uuid[_i]) {
        r = 0 | Math.random() * 16;
        uuid[_i] = chars[_i == 19 ? r & 0x3 | 0x8 : r];
      }
    }
  }
  // 移除第一个字符,并用u替代,因为第一个字符为数值时,该guuid不能用作id或者class
  if (firstU) {
    uuid.shift();
    return 'u' + uuid.join('');
  } else {
    return uuid.join('');
  }
}var _default =

guid;exports.default = _default;

/***/ }),
/* 28 */
/*!*********************************************************************************!*\
  !*** D:/HXProjects/CarsCollection/node_modules/uview-ui/libs/function/color.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 为了让用户能够自定义主题，会逐步弃用此文件，各颜色通过css提供
// 为了给某些特殊场景使用和向后兼容，无需删除此文件(2020-06-20)
var color = {
  primary: "#2979ff",
  primaryDark: "#2b85e4",
  primaryDisabled: "#a0cfff",
  primaryLight: "#ecf5ff",
  bgColor: "#f3f4f6",

  info: "#909399",
  infoDark: "#82848a",
  infoDisabled: "#c8c9cc",
  infoLight: "#f4f4f5",

  warning: "#ff9900",
  warningDark: "#f29100",
  warningDisabled: "#fcbd71",
  warningLight: "#fdf6ec",

  error: "#fa3534",
  errorDark: "#dd6161",
  errorDisabled: "#fab6b6",
  errorLight: "#fef0f0",

  success: "#19be6b",
  successDark: "#18b566",
  successDisabled: "#71d5a1",
  successLight: "#dbf1e1",

  mainColor: "#303133",
  contentColor: "#606266",
  tipsColor: "#909399",
  lightColor: "#c0c4cc",
  borderColor: "#e4e7ed" };var _default =


color;exports.default = _default;

/***/ }),
/* 29 */
/*!*************************************************************************************!*\
  !*** D:/HXProjects/CarsCollection/node_modules/uview-ui/libs/function/type2icon.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 根据主题type值,获取对应的图标
                                                                                                      * @param String type 主题名称,primary|info|error|warning|success
                                                                                                      * @param String fill 是否使用fill填充实体的图标  
                                                                                                      */
function type2icon() {var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'success';var fill = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  // 如果非预置值,默认为success
  if (['primary', 'info', 'error', 'warning', 'success'].indexOf(type) == -1) type = 'success';
  var iconName = '';
  // 目前(2019-12-12),info和primary使用同一个图标
  switch (type) {
    case 'primary':
      iconName = 'info-circle';
      break;
    case 'info':
      iconName = 'info-circle';
      break;
    case 'error':
      iconName = 'close-circle';
      break;
    case 'warning':
      iconName = 'error-circle';
      break;
    case 'success':
      iconName = 'checkmark-circle';
      break;
    default:
      iconName = 'checkmark-circle';}

  // 是否是实体类型,加上-fill,在icon组件库中,实体的类名是后面加-fill的
  if (fill) iconName += '-fill';
  return iconName;
}var _default =

type2icon;exports.default = _default;

/***/ }),
/* 30 */
/*!***************************************************************************************!*\
  !*** D:/HXProjects/CarsCollection/node_modules/uview-ui/libs/function/randomArray.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 打乱数组
function randomArray() {var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  // 原理是sort排序,Math.random()产生0<= x < 1之间的数,会导致x-0.05大于或者小于0
  return array.sort(function () {return Math.random() - 0.5;});
}var _default =

randomArray;exports.default = _default;

/***/ }),
/* 31 */
/*!***********************************************************************************!*\
  !*** D:/HXProjects/CarsCollection/node_modules/uview-ui/libs/function/addUnit.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = addUnit;var _test = _interopRequireDefault(__webpack_require__(/*! ./test.js */ 18));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// 添加单位，如果有rpx，%，px等单位结尾或者值为auto，直接返回，否则加上rpx单位结尾
function addUnit() {var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'auto';var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rpx';
  value = String(value);
  // 用uView内置验证规则中的number判断是否为数值
  return _test.default.number(value) ? "".concat(value).concat(unit) : value;
}

/***/ }),
/* 32 */
/*!**********************************************************************************!*\
  !*** D:/HXProjects/CarsCollection/node_modules/uview-ui/libs/function/random.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function random(min, max) {
  if (min >= 0 && max > 0 && max >= min) {
    var gab = max - min + 1;
    return Math.floor(Math.random() * gab + min);
  } else {
    return 0;
  }
}var _default =

random;exports.default = _default;

/***/ }),
/* 33 */
/*!********************************************************************************!*\
  !*** D:/HXProjects/CarsCollection/node_modules/uview-ui/libs/function/trim.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function trim(str) {var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'both';
  if (pos == 'both') {
    return str.replace(/^\s+|\s+$/g, "");
  } else if (pos == "left") {
    return str.replace(/^\s*/, '');
  } else if (pos == 'right') {
    return str.replace(/(\s*$)/g, "");
  } else if (pos == 'all') {
    return str.replace(/\s+/g, "");
  } else {
    return str;
  }
}var _default =

trim;exports.default = _default;

/***/ }),
/* 34 */
/*!*********************************************************************************!*\
  !*** D:/HXProjects/CarsCollection/node_modules/uview-ui/libs/function/toast.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function toast(title) {var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;
  uni.showToast({
    title: title,
    icon: 'none',
    duration: duration });

}var _default =

toast;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),
/* 35 */
/*!*************************************************************************************!*\
  !*** D:/HXProjects/CarsCollection/node_modules/uview-ui/libs/function/getParent.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = getParent; // 获取父组件的参数，因为支付宝小程序不支持provide/inject的写法
// this.$parent在非H5中，可以准确获取到父组件，但是在H5中，需要多次this.$parent.$parent.xxx
function getParent(name, keys) {
  var parent = this.$parent;
  // 通过while历遍，这里主要是为了H5需要多层解析的问题
  while (parent) {
    // 父组件
    if (parent.$options.name !== name) {
      // 如果组件的name不相等，继续上一级寻找
      parent = parent.$parent;
    } else {var _ret = function () {
        var data = {};
        // 判断keys是否数组，如果传过来的是一个数组，那么直接使用数组元素值当做键值去父组件寻找
        if (Array.isArray(keys)) {
          keys.map(function (val) {
            data[val] = parent[val] ? parent[val] : '';
          });
        } else {
          // 历遍传过来的对象参数
          for (var i in keys) {
            // 如果子组件有此值则用，无此值则用父组件的值
            // 判断是否空数组，如果是，则用父组件的值，否则用子组件的值
            if (Array.isArray(keys[i])) {
              if (keys[i].length) {
                data[i] = keys[i];
              } else {
                data[i] = parent[i];
              }
            } else if (keys[i].constructor === Object) {
              // 判断是否对象，如果是对象，且有属性，那么使用子组件的值，否则使用父组件的值
              if (Object.keys(keys[i]).length) {
                data[i] = keys[i];
              } else {
                data[i] = parent[i];
              }
            } else {
              // 只要子组件有传值，即使是false值，也是“传值”了，也需要覆盖父组件的同名参数
              data[i] = keys[i] || keys[i] === false ? keys[i] : parent[i];
            }
          }
        }
        return { v: data };}();if (typeof _ret === "object") return _ret.v;
    }
  }

  return {};
}

/***/ }),
/* 36 */
/*!***********************************************************************************!*\
  !*** D:/HXProjects/CarsCollection/node_modules/uview-ui/libs/function/$parent.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = $parent; // 获取父组件的参数，因为支付宝小程序不支持provide/inject的写法
// this.$parent在非H5中，可以准确获取到父组件，但是在H5中，需要多次this.$parent.$parent.xxx
// 这里默认值等于undefined有它的含义，因为最顶层元素(组件)的$parent就是undefined，意味着不传name
// 值(默认为undefined)，就是查找最顶层的$parent
function $parent() {var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  var parent = this.$parent;
  // 通过while历遍，这里主要是为了H5需要多层解析的问题
  while (parent) {
    // 父组件
    if (parent.$options && parent.$options.name !== name) {
      // 如果组件的name不相等，继续上一级寻找
      parent = parent.$parent;
    } else {
      return parent;
    }
  }
  return false;
}

/***/ }),
/* 37 */
/*!*******************************************************************************!*\
  !*** D:/HXProjects/CarsCollection/node_modules/uview-ui/libs/function/sys.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.os = os;exports.sys = sys;function os() {
  return uni.getSystemInfoSync().platform;
};

function sys() {
  return uni.getSystemInfoSync();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),
/* 38 */
/*!************************************************************************************!*\
  !*** D:/HXProjects/CarsCollection/node_modules/uview-ui/libs/function/debounce.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var timeout = null;

/**
                                                                                                                         * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
                                                                                                                         * 
                                                                                                                         * @param {Function} func 要执行的回调函数 
                                                                                                                         * @param {Number} wait 延时的时间
                                                                                                                         * @param {Boolean} immediate 是否立即执行 
                                                                                                                         * @return null
                                                                                                                         */
function debounce(func) {var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // 清除定时器
  if (timeout !== null) clearTimeout(timeout);
  // 立即执行，此类情况一般用不到
  if (immediate) {
    var callNow = !timeout;
    timeout = setTimeout(function () {
      timeout = null;
    }, wait);
    if (callNow) typeof func === 'function' && func();
  } else {
    // 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
    timeout = setTimeout(function () {
      typeof func === 'function' && func();
    }, wait);
  }
}var _default =

debounce;exports.default = _default;

/***/ }),
/* 39 */
/*!************************************************************************************!*\
  !*** D:/HXProjects/CarsCollection/node_modules/uview-ui/libs/function/throttle.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var timer, flag;
/**
                                                                                                                      * 节流原理：在一定时间内，只能触发一次
                                                                                                                      * 
                                                                                                                      * @param {Function} func 要执行的回调函数 
                                                                                                                      * @param {Number} wait 延时的时间
                                                                                                                      * @param {Boolean} immediate 是否立即执行
                                                                                                                      * @return null
                                                                                                                      */
function throttle(func) {var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (immediate) {
    if (!flag) {
      flag = true;
      // 如果是立即执行，则在wait毫秒内开始时执行
      typeof func === 'function' && func();
      timer = setTimeout(function () {
        flag = false;
      }, wait);
    }
  } else {
    if (!flag) {
      flag = true;
      // 如果是非立即执行，则在wait毫秒内的结束处执行
      timer = setTimeout(function () {
        flag = false;
        typeof func === 'function' && func();
      }, wait);
    }

  }
};var _default =
throttle;exports.default = _default;

/***/ }),
/* 40 */
/*!********************************************************************************!*\
  !*** D:/HXProjects/CarsCollection/node_modules/uview-ui/libs/config/config.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 此版本发布于2020-12-17
var version = '1.8.3';var _default =

{
  v: version,
  version: version,
  // 主题名称
  type: [
  'primary',
  'success',
  'info',
  'error',
  'warning'] };exports.default = _default;

/***/ }),
/* 41 */
/*!********************************************************************************!*\
  !*** D:/HXProjects/CarsCollection/node_modules/uview-ui/libs/config/zIndex.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // uniapp在H5中各API的z-index值如下：
/**
 * actionsheet: 999
 * modal: 999
 * navigate: 998
 * tabbar: 998
 * toast: 999
 */var _default =

{
  toast: 10090,
  noNetwork: 10080,
  // popup包含popup，actionsheet，keyboard，picker的值
  popup: 10075,
  mask: 10070,
  navbar: 980,
  topTips: 975,
  sticky: 970,
  indexListSticky: 965 };exports.default = _default;

/***/ })
]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3VuaS1tcC10b3V0aWFvL2Rpc3QvaW5kZXguanM/ZjI2NiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy9tcC12dWUvZGlzdC9tcC5ydW50aW1lLmVzbS5qcz82NmZkIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanM/Y2QwMCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanM/ZjBjNSIsInVuaS1hcHA6Ly8vbm9kZV9tb2R1bGVzL3V2aWV3LXVpL2luZGV4LmpzIiwidW5pLWFwcDovLy9ub2RlX21vZHVsZXMvdXZpZXctdWkvbGlicy9taXhpbi9taXhpbi5qcyIsInVuaS1hcHA6Ly8vbm9kZV9tb2R1bGVzL3V2aWV3LXVpL2xpYnMvcmVxdWVzdC9pbmRleC5qcyIsInVuaS1hcHA6Ly8vbm9kZV9tb2R1bGVzL3V2aWV3LXVpL2xpYnMvZnVuY3Rpb24vZGVlcE1lcmdlLmpzIiwidW5pLWFwcDovLy9ub2RlX21vZHVsZXMvdXZpZXctdWkvbGlicy9mdW5jdGlvbi9kZWVwQ2xvbmUuanMiLCJ1bmktYXBwOi8vL25vZGVfbW9kdWxlcy91dmlldy11aS9saWJzL2Z1bmN0aW9uL3Rlc3QuanMiLCJ1bmktYXBwOi8vL25vZGVfbW9kdWxlcy91dmlldy11aS9saWJzL2Z1bmN0aW9uL3F1ZXJ5UGFyYW1zLmpzIiwidW5pLWFwcDovLy9ub2RlX21vZHVsZXMvdXZpZXctdWkvbGlicy9mdW5jdGlvbi9yb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanM/YTM0YSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLW1vZHVsZS5qcz9iYmRkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanM/OTZjZiIsInVuaS1hcHA6Ly8vbm9kZV9tb2R1bGVzL3V2aWV3LXVpL2xpYnMvZnVuY3Rpb24vdGltZUZvcm1hdC5qcyIsInVuaS1hcHA6Ly8vbm9kZV9tb2R1bGVzL3V2aWV3LXVpL2xpYnMvZnVuY3Rpb24vdGltZUZyb20uanMiLCJ1bmktYXBwOi8vL25vZGVfbW9kdWxlcy91dmlldy11aS9saWJzL2Z1bmN0aW9uL2NvbG9yR3JhZGllbnQuanMiLCJ1bmktYXBwOi8vL25vZGVfbW9kdWxlcy91dmlldy11aS9saWJzL2Z1bmN0aW9uL2d1aWQuanMiLCJ1bmktYXBwOi8vL25vZGVfbW9kdWxlcy91dmlldy11aS9saWJzL2Z1bmN0aW9uL2NvbG9yLmpzIiwidW5pLWFwcDovLy9ub2RlX21vZHVsZXMvdXZpZXctdWkvbGlicy9mdW5jdGlvbi90eXBlMmljb24uanMiLCJ1bmktYXBwOi8vL25vZGVfbW9kdWxlcy91dmlldy11aS9saWJzL2Z1bmN0aW9uL3JhbmRvbUFycmF5LmpzIiwidW5pLWFwcDovLy9ub2RlX21vZHVsZXMvdXZpZXctdWkvbGlicy9mdW5jdGlvbi9hZGRVbml0LmpzIiwidW5pLWFwcDovLy9ub2RlX21vZHVsZXMvdXZpZXctdWkvbGlicy9mdW5jdGlvbi9yYW5kb20uanMiLCJ1bmktYXBwOi8vL25vZGVfbW9kdWxlcy91dmlldy11aS9saWJzL2Z1bmN0aW9uL3RyaW0uanMiLCJ1bmktYXBwOi8vL25vZGVfbW9kdWxlcy91dmlldy11aS9saWJzL2Z1bmN0aW9uL3RvYXN0LmpzIiwidW5pLWFwcDovLy9ub2RlX21vZHVsZXMvdXZpZXctdWkvbGlicy9mdW5jdGlvbi9nZXRQYXJlbnQuanMiLCJ1bmktYXBwOi8vL25vZGVfbW9kdWxlcy91dmlldy11aS9saWJzL2Z1bmN0aW9uLyRwYXJlbnQuanMiLCJ1bmktYXBwOi8vL25vZGVfbW9kdWxlcy91dmlldy11aS9saWJzL2Z1bmN0aW9uL3N5cy5qcyIsInVuaS1hcHA6Ly8vbm9kZV9tb2R1bGVzL3V2aWV3LXVpL2xpYnMvZnVuY3Rpb24vZGVib3VuY2UuanMiLCJ1bmktYXBwOi8vL25vZGVfbW9kdWxlcy91dmlldy11aS9saWJzL2Z1bmN0aW9uL3Rocm90dGxlLmpzIiwidW5pLWFwcDovLy9ub2RlX21vZHVsZXMvdXZpZXctdWkvbGlicy9jb25maWcvY29uZmlnLmpzIiwidW5pLWFwcDovLy9ub2RlX21vZHVsZXMvdXZpZXctdWkvbGlicy9jb25maWcvekluZGV4LmpzIl0sIm5hbWVzIjpbImI2NERlY29kZVVuaWNvZGUiLCJzdHIiLCJkZWNvZGVVUklDb21wb25lbnQiLCJhdG9iIiwic3BsaXQiLCJtYXAiLCJjIiwiY2hhckNvZGVBdCIsInRvU3RyaW5nIiwic2xpY2UiLCJqb2luIiwiZ2V0Q3VycmVudFVzZXJJbmZvIiwidG9rZW4iLCJ0dCIsImdldFN0b3JhZ2VTeW5jIiwidG9rZW5BcnIiLCJsZW5ndGgiLCJ1aWQiLCJyb2xlIiwicGVybWlzc2lvbiIsInRva2VuRXhwaXJlZCIsInVzZXJJbmZvIiwiSlNPTiIsInBhcnNlIiwiZXJyb3IiLCJFcnJvciIsIm1lc3NhZ2UiLCJleHAiLCJpYXQiLCJ1bmlJZE1peGluIiwiVnVlIiwicHJvdG90eXBlIiwidW5pSURIYXNSb2xlIiwicm9sZUlkIiwiaW5kZXhPZiIsInVuaUlESGFzUGVybWlzc2lvbiIsInBlcm1pc3Npb25JZCIsInVuaUlEVG9rZW5WYWxpZCIsIkRhdGUiLCJub3ciLCJfdG9TdHJpbmciLCJPYmplY3QiLCJoYXNPd25Qcm9wZXJ0eSIsImlzRm4iLCJmbiIsImlzU3RyIiwiaXNQbGFpbk9iamVjdCIsIm9iaiIsImNhbGwiLCJoYXNPd24iLCJrZXkiLCJub29wIiwiY2FjaGVkIiwiY2FjaGUiLCJjcmVhdGUiLCJjYWNoZWRGbiIsImhpdCIsImNhbWVsaXplUkUiLCJjYW1lbGl6ZSIsInJlcGxhY2UiLCJfIiwidG9VcHBlckNhc2UiLCJIT09LUyIsImdsb2JhbEludGVyY2VwdG9ycyIsInNjb3BlZEludGVyY2VwdG9ycyIsIm1lcmdlSG9vayIsInBhcmVudFZhbCIsImNoaWxkVmFsIiwicmVzIiwiY29uY2F0IiwiQXJyYXkiLCJpc0FycmF5IiwiZGVkdXBlSG9va3MiLCJob29rcyIsImkiLCJwdXNoIiwicmVtb3ZlSG9vayIsImhvb2siLCJpbmRleCIsInNwbGljZSIsIm1lcmdlSW50ZXJjZXB0b3JIb29rIiwiaW50ZXJjZXB0b3IiLCJvcHRpb24iLCJrZXlzIiwiZm9yRWFjaCIsInJlbW92ZUludGVyY2VwdG9ySG9vayIsImFkZEludGVyY2VwdG9yIiwibWV0aG9kIiwicmVtb3ZlSW50ZXJjZXB0b3IiLCJ3cmFwcGVySG9vayIsImRhdGEiLCJpc1Byb21pc2UiLCJ0aGVuIiwicXVldWUiLCJwcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjYWxsYmFjayIsIndyYXBwZXJPcHRpb25zIiwib3B0aW9ucyIsIm5hbWUiLCJvbGRDYWxsYmFjayIsImNhbGxiYWNrSW50ZXJjZXB0b3IiLCJ3cmFwcGVyUmV0dXJuVmFsdWUiLCJyZXR1cm5WYWx1ZSIsInJldHVyblZhbHVlSG9va3MiLCJnZXRBcGlJbnRlcmNlcHRvckhvb2tzIiwic2NvcGVkSW50ZXJjZXB0b3IiLCJpbnZva2VBcGkiLCJhcGkiLCJwYXJhbXMiLCJpbnZva2UiLCJwcm9taXNlSW50ZXJjZXB0b3IiLCJjYXRjaCIsIlNZTkNfQVBJX1JFIiwiQ09OVEVYVF9BUElfUkUiLCJDT05URVhUX0FQSV9SRV9FWEMiLCJBU1lOQ19BUEkiLCJDQUxMQkFDS19BUElfUkUiLCJpc0NvbnRleHRBcGkiLCJ0ZXN0IiwiaXNTeW5jQXBpIiwiaXNDYWxsYmFja0FwaSIsImhhbmRsZVByb21pc2UiLCJlcnIiLCJzaG91bGRQcm9taXNlIiwiZmluYWxseSIsImNvbnN0cnVjdG9yIiwidmFsdWUiLCJyZWFzb24iLCJwcm9taXNpZnkiLCJwcm9taXNlQXBpIiwic3VjY2VzcyIsImZhaWwiLCJjb21wbGV0ZSIsInJlamVjdCIsImFzc2lnbiIsIkVQUyIsIkJBU0VfREVWSUNFX1dJRFRIIiwiaXNJT1MiLCJkZXZpY2VXaWR0aCIsImRldmljZURQUiIsImNoZWNrRGV2aWNlV2lkdGgiLCJnZXRTeXN0ZW1JbmZvU3luYyIsInBsYXRmb3JtIiwicGl4ZWxSYXRpbyIsIndpbmRvd1dpZHRoIiwidXB4MnB4IiwibnVtYmVyIiwibmV3RGV2aWNlV2lkdGgiLCJOdW1iZXIiLCJyZXN1bHQiLCJNYXRoIiwiZmxvb3IiLCJpbnRlcmNlcHRvcnMiLCJiYXNlQXBpIiwiZnJlZXplIiwiX19wcm90b19fIiwiRXZlbnRDaGFubmVsIiwiaWQiLCJldmVudHMiLCJsaXN0ZW5lciIsImVtaXRDYWNoZSIsIm9uIiwiZXZlbnROYW1lIiwiYXJncyIsImZucyIsIm9wdCIsImFwcGx5IiwiZmlsdGVyIiwidHlwZSIsIl9hZGRMaXN0ZW5lciIsIl9jbGVhckNhY2hlIiwiY2FjaGVBcmdzIiwiZW1pdCIsInNoaWZ0IiwiZXZlbnRDaGFubmVscyIsImV2ZW50Q2hhbm5lbFN0YWNrIiwiaW5pdEV2ZW50Q2hhbm5lbCIsImV2ZW50Q2hhbm5lbCIsImdldEV2ZW50Q2hhbm5lbCIsIm5hdmlnYXRlVG8iLCJmcm9tQXJncyIsInRvQXJncyIsInVybCIsImZyb21SZXMiLCJ0b1JlcyIsImZpbmRFeGlzdHNQYWdlSW5kZXgiLCJwYWdlcyIsImdldEN1cnJlbnRQYWdlcyIsImxlbiIsInBhZ2UiLCIkcGFnZSIsImZ1bGxQYXRoIiwicmVkaXJlY3RUbyIsImV4aXN0cyIsImRlbHRhIiwiZXhpc3RzUGFnZUluZGV4IiwicHJldmlld0ltYWdlIiwiY3VycmVudEluZGV4IiwicGFyc2VJbnQiLCJjdXJyZW50IiwiaXNOYU4iLCJ1cmxzIiwiaXRlbSIsImluZGljYXRvciIsImxvb3AiLCJVVUlEX0tFWSIsImRldmljZUlkIiwiYWRkVXVpZCIsInJhbmRvbSIsInNldFN0b3JhZ2UiLCJhZGRTYWZlQXJlYUluc2V0cyIsInNhZmVBcmVhIiwic2FmZUFyZWFJbnNldHMiLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJ3aW5kb3dIZWlnaHQiLCJnZXRTeXN0ZW1JbmZvIiwib05hbWUiLCJuTmFtZSIsImdldFVzZXJQcm9maWxlIiwiY2FuSVVzZSIsInRvZG9zIiwiY2FuSVVzZXMiLCJwcm90b2NvbHMiLCJjaG9vc2VJbWFnZSIsInNpemVUeXBlIiwiY29ubmVjdFNvY2tldCIsImNob29zZVZpZGVvIiwiY2FtZXJhIiwic2NhbkNvZGUiLCJvbmx5RnJvbUNhbWVyYSIsInNjYW5UeXBlIiwic3RhcnRBY2NlbGVyb21ldGVyIiwiaW50ZXJ2YWwiLCJzaG93VG9hc3QiLCJpbWFnZSIsIm1hc2siLCJzaG93TG9hZGluZyIsInNob3dNb2RhbCIsImNhbmNlbENvbG9yIiwiY29uZmlybUNvbG9yIiwic2hvd0FjdGlvblNoZWV0IiwiaXRlbUNvbG9yIiwibG9naW4iLCJzY29wZXMiLCJ0aW1lb3V0IiwiZ2V0VXNlckluZm8iLCJsYW5nIiwicmVxdWVzdFBheW1lbnQiLCJwYXkiLCJvcmRlckluZm8iLCJnZXRGaWxlSW5mbyIsImRpZ2VzdEFsZ29yaXRobSIsIkNBTExCQUNLUyIsInByb2Nlc3NDYWxsYmFjayIsIm1ldGhvZE5hbWUiLCJwcm9jZXNzUmV0dXJuVmFsdWUiLCJwcm9jZXNzQXJncyIsImFyZ3NPcHRpb24iLCJrZWVwRnJvbUFyZ3MiLCJrZXlPcHRpb24iLCJjb25zb2xlIiwid2FybiIsImtlZXBSZXR1cm5WYWx1ZSIsIndyYXBwZXIiLCJwcm90b2NvbCIsImFyZzEiLCJhcmcyIiwidG9kb0FwaXMiLCJUT0RPUyIsImNyZWF0ZVRvZG9BcGkiLCJ0b2RvQXBpIiwiZXJyTXNnIiwicHJvdmlkZXJzIiwib2F1dGgiLCJzaGFyZSIsInBheW1lbnQiLCJnZXRQcm92aWRlciIsInNlcnZpY2UiLCJwcm92aWRlciIsImV4dHJhQXBpIiwiZ2V0RW1pdHRlciIsIkVtaXR0ZXIiLCJnZXRVbmlFbWl0dGVyIiwiY3R4IiwiJG9uIiwiYXJndW1lbnRzIiwiJG9mZiIsIiRvbmNlIiwiJGVtaXQiLCJldmVudEFwaSIsImNyZWF0ZU1lZGlhUXVlcnlPYnNlcnZlciIsIm1lZGlhUXVlcnlPYnNlcnZlciIsIm9yaWVudGF0aW9uIiwib2JzZXJ2ZSIsIm1hdGNoZXMiLCJpdGVtVmFsdWUiLCJkaXNjb25uZWN0IiwiTVBQYWdlIiwiUGFnZSIsIk1QQ29tcG9uZW50IiwiQ29tcG9uZW50IiwiY3VzdG9taXplUkUiLCJjdXN0b21pemUiLCJpbml0VHJpZ2dlckV2ZW50IiwibXBJbnN0YW5jZSIsIm9sZFRyaWdnZXJFdmVudCIsInRyaWdnZXJFdmVudCIsImV2ZW50IiwiaW5pdEhvb2siLCJvbGRIb29rIiwiX18kd3JhcHBlcmVkIiwiYWZ0ZXIiLCJQQUdFX0VWRU5UX0hPT0tTIiwiaW5pdE1vY2tzIiwidm0iLCJtb2NrcyIsIiRtcCIsIm1wVHlwZSIsIm1vY2siLCJoYXNIb29rIiwidnVlT3B0aW9ucyIsImRlZmF1bHQiLCJleHRlbmRPcHRpb25zIiwic3VwZXIiLCJtaXhpbnMiLCJmaW5kIiwibWl4aW4iLCJpbml0SG9va3MiLCJtcE9wdGlvbnMiLCIkdm0iLCJfX2NhbGxfaG9vayIsImluaXRWdWVDb21wb25lbnQiLCJWdWVDb21wb25lbnQiLCJleHRlbmQiLCJpbml0U2xvdHMiLCJ2dWVTbG90cyIsIiRzbG90cyIsInNsb3ROYW1lIiwiJHNjb3BlZFNsb3RzIiwiaW5pdFZ1ZUlkcyIsInZ1ZUlkcyIsIl8kdnVlSWQiLCJfJHZ1ZVBpZCIsImluaXREYXRhIiwiY29udGV4dCIsIm1ldGhvZHMiLCJlIiwicHJvY2VzcyIsIlZVRV9BUFBfREVCVUciLCJzdHJpbmdpZnkiLCJfX2xpZmVjeWNsZV9ob29rc19fIiwiUFJPUF9UWVBFUyIsIlN0cmluZyIsIkJvb2xlYW4iLCJjcmVhdGVPYnNlcnZlciIsIm9ic2VydmVyIiwibmV3VmFsIiwib2xkVmFsIiwiaW5pdEJlaGF2aW9ycyIsImluaXRCZWhhdmlvciIsInZ1ZUJlaGF2aW9ycyIsImJlaGF2aW9ycyIsInZ1ZUV4dGVuZHMiLCJleHRlbmRzIiwidnVlTWl4aW5zIiwidnVlUHJvcHMiLCJwcm9wcyIsImJlaGF2aW9yIiwicHJvcGVydGllcyIsImluaXRQcm9wZXJ0aWVzIiwidnVlTWl4aW4iLCJwYXJzZVByb3BUeXBlIiwiZGVmYXVsdFZhbHVlIiwiZmlsZSIsImlzQmVoYXZpb3IiLCJ2dWVJZCIsImdlbmVyaWMiLCJzZXREYXRhIiwib3B0cyIsIndyYXBwZXIkMSIsIm1wIiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJkZXRhaWwiLCJtYXJrZXJJZCIsImdldEV4dHJhVmFsdWUiLCJkYXRhUGF0aHNBcnJheSIsImRhdGFQYXRoQXJyYXkiLCJkYXRhUGF0aCIsInByb3BQYXRoIiwidmFsdWVQYXRoIiwidkZvciIsImlzSW50ZWdlciIsInN1YnN0ciIsIl9fZ2V0X3ZhbHVlIiwidkZvckl0ZW0iLCJ2Rm9yS2V5IiwicHJvY2Vzc0V2ZW50RXh0cmEiLCJleHRyYSIsImV4dHJhT2JqIiwiX19hcmdzX18iLCJnZXRPYmpCeUFycmF5IiwiYXJyIiwiZWxlbWVudCIsInByb2Nlc3NFdmVudEFyZ3MiLCJpc0N1c3RvbSIsImlzQ3VzdG9tTVBFdmVudCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiY29tVHlwZSIsInJldCIsImFyZyIsIk9OQ0UiLCJDVVNUT00iLCJpc01hdGNoRXZlbnRUeXBlIiwiZXZlbnRUeXBlIiwib3B0VHlwZSIsImdldENvbnRleHRWbSIsIiRwYXJlbnQiLCIkb3B0aW9ucyIsIiRzY29wZSIsImhhbmRsZUV2ZW50IiwiZXZlbnRPcHRzIiwiZXZlbnRPcHQiLCJldmVudHNBcnJheSIsImNoYXJBdCIsImlzT25jZSIsImV2ZW50QXJyYXkiLCJoYW5kbGVyQ3R4IiwiaGFuZGxlciIsIm9uY2UiLCJpbml0RXZlbnRDaGFubmVsJDEiLCJnZXRPcGVuZXJFdmVudENoYW5uZWwiLCJfX2V2ZW50Q2hhbm5lbF9fIiwiY2FsbEhvb2siLCJfX2lkX18iLCJpbml0U2NvcGVkU2xvdHNQYXJhbXMiLCJjZW50ZXIiLCJwYXJlbnRzIiwiJGhhc1Njb3BlZFNsb3RzUGFyYW1zIiwiaGFzIiwiJGdldFNjb3BlZFNsb3RzUGFyYW1zIiwib2JqZWN0IiwiJHNldFNjb3BlZFNsb3RzUGFyYW1zIiwicHJvcHNEYXRhIiwiJGZvcmNlVXBkYXRlIiwiZGVzdHJveWVkIiwicGFyc2VCYXNlQXBwIiwiaW5pdFJlZnMiLCJzdG9yZSIsIiRzdG9yZSIsIm1wSG9zdCIsImJlZm9yZUNyZWF0ZSIsImdldEFwcCIsImFwcCIsIiRpMThuIiwiX2kxOG4iLCJhcHBPcHRpb25zIiwib25MYXVuY2giLCJnbG9iYWxEYXRhIiwiX2lzTW91bnRlZCIsImZpbmRWbUJ5VnVlSWQiLCJ2dWVQaWQiLCIkY2hpbGRyZW4iLCJjaGlsZFZtIiwicGFyZW50Vm0iLCJCZWhhdmlvciIsImhhbmRsZUxpbmsiLCJwYXJlbnQiLCJpc1BhZ2UiLCJfX25vZGVpZF9fIiwiX19ub2RlSWRfXyIsIm1pbm9yVmVyc2lvbiIsIlNES1ZlcnNpb24iLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsIiRyZWZzIiwiY29tcG9uZW50cyIsInNlbGVjdEFsbENvbXBvbmVudHMiLCJjb21wb25lbnQiLCJyZWYiLCJmb3JDb21wb25lbnRzIiwiaW5zdGFuY2VzIiwiaW5pdFJlbGF0aW9uIiwibm9kZUlkIiwid2Vidmlld0lkIiwiX193ZWJ2aWV3SWRfXyIsImhhbmRsZUxpbmskMSIsIiRyb290IiwicGFyc2VBcHAiLCJfJGZhbGxiYWNrIiwiY3JlYXRlZCIsInJvdXRlIiwiX19yb3V0ZV9fIiwiX19pbml0X2luamVjdGlvbnMiLCJfX2luaXRfcHJvdmlkZSIsImNyZWF0ZUFwcCIsIkFwcCIsImVuY29kZVJlc2VydmVSRSIsImVuY29kZVJlc2VydmVSZXBsYWNlciIsImNvbW1hUkUiLCJlbmNvZGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzdHJpbmdpZnlRdWVyeSIsImVuY29kZVN0ciIsInZhbCIsInVuZGVmaW5lZCIsInZhbDIiLCJ4IiwicGFyc2VCYXNlQ29tcG9uZW50IiwidnVlQ29tcG9uZW50T3B0aW9ucyIsIm11bHRpcGxlU2xvdHMiLCJhZGRHbG9iYWxDbGFzcyIsImNvbXBvbmVudE9wdGlvbnMiLCJfX2ZpbGUiLCJsaWZldGltZXMiLCJhdHRhY2hlZCIsIiRtb3VudCIsInJlYWR5IiwiZGV0YWNoZWQiLCIkZGVzdHJveSIsInBhZ2VMaWZldGltZXMiLCJzaG93IiwiaGlkZSIsInJlc2l6ZSIsInNpemUiLCJfX2wiLCJfX2UiLCJleHRlcm5hbENsYXNzZXMiLCJ3eHNDYWxsTWV0aG9kcyIsImNhbGxNZXRob2QiLCJwYXJzZUNvbXBvbmVudCIsImhvb2tzJDEiLCJwYXJzZUJhc2VQYWdlIiwidnVlUGFnZU9wdGlvbnMiLCJwYWdlT3B0aW9ucyIsIm9uTG9hZCIsInF1ZXJ5IiwiY29weVF1ZXJ5IiwiaXMiLCJwYXJzZVBhZ2UiLCJjcmVhdGVQYWdlIiwiY3JlYXRlQ29tcG9uZW50IiwiY3JlYXRlU3VicGFja2FnZUFwcCIsImFsbG93RGVmYXVsdCIsIm9uU2hvdyIsIm9uQXBwU2hvdyIsIm9uSGlkZSIsIm9uQXBwSGlkZSIsImdldExhdW5jaE9wdGlvbnNTeW5jIiwiY3JlYXRlUGx1Z2luIiwiY2FuSVVzZUFwaSIsImFwaU5hbWUiLCJ1bmkiLCJQcm94eSIsInNldCIsInVuaSQxIiwid3Jhbm5pbmciLCIkdSIsInF1ZXJ5UGFyYW1zIiwidGltZUZvcm1hdCIsImRhdGUiLCJ0aW1lRnJvbSIsImNvbG9yR3JhZGllbnQiLCJjb2xvclRvUmdiYSIsImd1aWQiLCJjb2xvciIsInN5cyIsIm9zIiwidHlwZTJpY29uIiwicmFuZG9tQXJyYXkiLCJodHRwIiwicG9zdCIsInB1dCIsImRlbGV0ZSIsImhleFRvUmdiIiwicmdiVG9IZXgiLCJkZWVwQ2xvbmUiLCJkZWVwTWVyZ2UiLCJnZXRQYXJlbnQiLCJhZGRVbml0IiwidHJpbSIsInRvYXN0IiwiY29uZmlnIiwiekluZGV4IiwiZGVib3VuY2UiLCJ0aHJvdHRsZSIsImluc3RhbGwiLCJvcGVuU2hhcmUiLCJtcFNoYXJlIiwidGltZXN0YW1wIiwiZm9ybWF0IiwibW9kdWxlIiwiZXhwb3J0cyIsImdldFJlY3QiLCIkdUdldFJlY3QiLCJzZWxlY3RvciIsImFsbCIsImNyZWF0ZVNlbGVjdG9yUXVlcnkiLCJpbiIsImJvdW5kaW5nQ2xpZW50UmVjdCIsInJlY3QiLCJleGVjIiwiZ2V0UGFyZW50RGF0YSIsInBhcmVudE5hbWUiLCJwYXJlbnREYXRhIiwicHJldmVudEV2ZW50Iiwib25SZWFjaEJvdHRvbSIsImJlZm9yZURlc3Ryb3kiLCJhcnJheSIsImNoaWxkcmVuIiwiY2hpbGRyZW5MaXN0IiwiY2hpbGQiLCJSZXF1ZXN0IiwiY3VzdG9tQ29uZmlnIiwicmVxdWVzdCIsInRtcENvbmZpZyIsImludGVyY2VwdG9yUmVxdWVzdCIsImRhdGFUeXBlIiwicmVzcG9uc2VUeXBlIiwiaGVhZGVyIiwicmVzcG9uc2UiLCJoaWRlTG9hZGluZyIsImNsZWFyVGltZW91dCIsInRpbWVyIiwib3JpZ2luYWxEYXRhIiwicmVzSW50ZXJjZXB0b3JzIiwic3RhdHVzQ29kZSIsInZhbGlkYXRlIiwiYmFzZVVybCIsInNldFRpbWVvdXQiLCJ0aXRsZSIsImxvYWRpbmdUZXh0IiwibG9hZGluZ01hc2siLCJsb2FkaW5nVGltZSIsInNvdXJjZSIsInByb3AiLCJOYU4iLCJpbmNsdWRlcyIsIm8iLCJlbWFpbCIsIm1vYmlsZSIsImRhdGVJU08iLCJkaWdpdHMiLCJpZENhcmQiLCJjYXJObyIsInhyZWciLCJjcmVnIiwiYW1vdW50IiwiY2hpbmVzZSIsInJlZyIsImxldHRlciIsImVuT3JOdW0iLCJjb250YWlucyIsInBhcmFtIiwicmFuZ2UiLCJyYW5nZUxlbmd0aCIsImxhbmRsaW5lIiwiZW1wdHkiLCJqc29uU3RyaW5nIiwiY29kZSIsIlJlZ0V4cCIsImlzRW1wdHkiLCJpc1ByZWZpeCIsImFycmF5Rm9ybWF0IiwicHJlZml4IiwiX3Jlc3VsdCIsIl92YWx1ZSIsImNvbW1hU3RyIiwiUm91dGVyIiwiYW5pbWF0aW9uVHlwZSIsImFuaW1hdGlvbkR1cmF0aW9uIiwiaW50ZXJjZXB0IiwiYmluZCIsImFkZFJvb3RQYXRoIiwibWVyZ2VDb25maWciLCJtaXhpblBhcmFtIiwicm91dGVJbnRlcmNlcHQiLCJpc05leHQiLCJvcGVuUGFnZSIsInN3aXRjaFRhYiIsInJlTGF1bmNoIiwibmF2aWdhdGVCYWNrIiwicmVxdWlyZSIsInBhZFN0YXJ0IiwibWF4TGVuZ3RoIiwiZmlsbFN0cmluZyIsIlR5cGVFcnJvciIsImZpbGxMZW5ndGgiLCJ0aW1lcyIsImNlaWwiLCJkYXRlVGltZSIsImZtdCIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsImsiLCJ0aXBzIiwic3RhcnRDb2xvciIsImVuZENvbG9yIiwic3RlcCIsInN0YXJ0UkdCIiwic3RhcnRSIiwic3RhcnRHIiwic3RhcnRCIiwiZW5kUkdCIiwiZW5kUiIsImVuZEciLCJlbmRCIiwic1IiLCJzRyIsInNCIiwiY29sb3JBcnIiLCJoZXgiLCJyb3VuZCIsInNDb2xvciIsInRvTG93ZXJDYXNlIiwic0NvbG9yTmV3Iiwic0NvbG9yQ2hhbmdlIiwicmdiIiwiX3RoaXMiLCJhQ29sb3IiLCJzdHJIZXgiLCJhTnVtIiwibnVtSGV4IiwiYWxwaGEiLCJmaXJzdFUiLCJyYWRpeCIsImNoYXJzIiwidXVpZCIsInIiLCJwcmltYXJ5IiwicHJpbWFyeURhcmsiLCJwcmltYXJ5RGlzYWJsZWQiLCJwcmltYXJ5TGlnaHQiLCJiZ0NvbG9yIiwiaW5mbyIsImluZm9EYXJrIiwiaW5mb0Rpc2FibGVkIiwiaW5mb0xpZ2h0Iiwid2FybmluZyIsIndhcm5pbmdEYXJrIiwid2FybmluZ0Rpc2FibGVkIiwid2FybmluZ0xpZ2h0IiwiZXJyb3JEYXJrIiwiZXJyb3JEaXNhYmxlZCIsImVycm9yTGlnaHQiLCJzdWNjZXNzRGFyayIsInN1Y2Nlc3NEaXNhYmxlZCIsInN1Y2Nlc3NMaWdodCIsIm1haW5Db2xvciIsImNvbnRlbnRDb2xvciIsInRpcHNDb2xvciIsImxpZ2h0Q29sb3IiLCJib3JkZXJDb2xvciIsImZpbGwiLCJpY29uTmFtZSIsInNvcnQiLCJ1bml0IiwidmFsaWRhdGlvbiIsIm1pbiIsIm1heCIsImdhYiIsInBvcyIsImR1cmF0aW9uIiwiaWNvbiIsImZ1bmMiLCJ3YWl0IiwiaW1tZWRpYXRlIiwiY2FsbE5vdyIsImZsYWciLCJ2ZXJzaW9uIiwidiIsIm5vTmV0d29yayIsInBvcHVwIiwibmF2YmFyIiwidG9wVGlwcyIsInN0aWNreSIsImluZGV4TGlzdFN0aWNreSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztxUkFBQSxxRTs7QUFFQSxTQUFTQSxnQkFBVCxDQUEyQkMsR0FBM0IsRUFBZ0M7QUFDOUIsU0FBT0Msa0JBQWtCLENBQUNDLElBQUksQ0FBQ0YsR0FBRCxDQUFKLENBQVVHLEtBQVYsQ0FBZ0IsRUFBaEIsRUFBb0JDLEdBQXBCLENBQXdCLFVBQVVDLENBQVYsRUFBYTtBQUM3RCxXQUFPLE1BQU0sQ0FBQyxPQUFPQSxDQUFDLENBQUNDLFVBQUYsQ0FBYSxDQUFiLEVBQWdCQyxRQUFoQixDQUF5QixFQUF6QixDQUFSLEVBQXNDQyxLQUF0QyxDQUE0QyxDQUFDLENBQTdDLENBQWI7QUFDRCxHQUZ5QixFQUV2QkMsSUFGdUIsQ0FFbEIsRUFGa0IsQ0FBRCxDQUF6QjtBQUdEOztBQUVELFNBQVNDLGtCQUFULEdBQStCO0FBQzdCLE1BQU1DLEtBQUssR0FBS0MsRUFBRixDQUFNQyxjQUFOLENBQXFCLGNBQXJCLEtBQXdDLEVBQXREO0FBQ0EsTUFBTUMsUUFBUSxHQUFHSCxLQUFLLENBQUNSLEtBQU4sQ0FBWSxHQUFaLENBQWpCO0FBQ0EsTUFBSSxDQUFDUSxLQUFELElBQVVHLFFBQVEsQ0FBQ0MsTUFBVCxLQUFvQixDQUFsQyxFQUFxQztBQUNuQyxXQUFPO0FBQ0xDLFNBQUcsRUFBRSxJQURBO0FBRUxDLFVBQUksRUFBRSxFQUZEO0FBR0xDLGdCQUFVLEVB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O0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdCQUFnQjtBQUNqQyxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGFBQW9COztBQUVyQztBQUNBO0FBQ0E7QUFDQSxZQUFZLGFBQW9COztBQUVoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxQkFBcUI7QUFDeEMsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEdBQUc7QUFDUjtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDOztBQUVBLElBQUksSUFBcUM7QUFDekM7QUFDQTtBQUNBLGlDQUFpQztBQUNqQyx1Q0FBdUMsd0JBQXdCLEVBQUU7QUFDakUsMEJBQTBCOztBQUUxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFlBQVk7QUFDcEMsa0JBQWtCLFlBQVk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0Esd0NBQXdDLEVBQUU7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isb0JBQW9CLEVBQUU7QUFDckQ7QUFDQSxrQ0FBa0MsT0FBTztBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCLFNBQVMscUJBQXFCOztBQUV4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLEtBQXFDO0FBQ3pDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyx1QkFBdUI7QUFDekQsaUNBQWlDLHNCQUFzQjtBQUN2RDtBQUNBLGtCQUFrQjtBQUNsQixNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsYUFBb0I7QUFDdEM7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsT0FBTyxVQUFVLElBQXFDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsR0FBRyxVQUFVLElBQXFDO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsbUJBQW1CLG1CQUFtQjtBQUN0QywrQkFBK0I7QUFDL0I7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFlBQVk7QUFDOUIsV0FBVztBQUNYO0FBQ0EsR0FBRyxVQUFVLElBQXFDO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFxQztBQUMzQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLE9BQU87QUFDckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBLG9DQUFvQztBQUNwQztBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLElBRVE7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJCQUEyQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxTQUFTO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZDQUE2QyxxQ0FBcUMsRUFBRTtBQUNwRjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0NBQW9DLHlDQUF5QyxFQUFFO0FBQy9FOztBQUVBOztBQUVBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbUJBQW1CO0FBQ3hDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxJQUFxQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHFCQUFxQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxxQkFBcUI7QUFDbEM7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxJQUFxQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPLE1BQU0sRUFFTjtBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsVUFBVSxJQUFxQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsT0FBTztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0VBQWtFO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLG1CQUFtQjtBQUN6Qzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixPQUFPO0FBQ3RDLHVDQUF1QztBQUN2QztBQUNBLEdBQUc7QUFDSDtBQUNBLGVBQWUsU0FBUztBQUN4QixzQ0FBc0M7QUFDdEM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRDtBQUMzRDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxrQ0FBa0MsT0FBTztBQUN6QztBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsVUFBVSxLQUFxQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEMsZUFBZTtBQUMzRCxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xELDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixpQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxpQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLEtBQUssVUFBVSxLQUFxQztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILHFDQUFxQyxnRUFBZ0U7QUFDckc7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILDRCQUE0QiwrQkFBK0I7QUFDM0QsNEJBQTRCLCtCQUErQjtBQUMzRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxtQkFBbUIsbUJBQW1CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLElBQXFDO0FBQzNDLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNFQUFzRTs7QUFFdEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHVGQUF1RjtBQUM1RjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQyxpQkFBaUIseUJBQXlCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLCtCQUErQjtBQUNsQyxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxLQUFxQztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxLQUFxQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsb0JBQW9CLG9CQUFvQjtBQUN4QyxzQkFBc0IsNEJBQTRCO0FBQ2xEO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLE9BQU87QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsbUJBQW1CO0FBQ25CLHlCQUF5QjtBQUN6QjtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyw2Q0FBNkM7QUFDOUU7QUFDQTtBQUNBLDZDQUE2Qyw0Q0FBNEM7O0FBRXpGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0sSUFBcUM7QUFDM0M7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUcsTUFBTSxFQUdOO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLEtBQXFDO0FBQy9DO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsS0FBcUM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLLDJDQUEyQyw4QkFBOEIsRUFBRTs7QUFFaEY7QUFDQSx3Q0FBd0MsT0FBTztBQUMvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixLQUFxQztBQUNyRDtBQUNBLG9CQUFvQixTQUFJO0FBQ3hCO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxPQUFPO0FBQzlDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxTQUFTO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLElBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLE9BQU87QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsS0FBcUM7QUFDekQ7QUFDQSxNQUFNLFNBQUU7QUFDUjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwyQkFBMkI7QUFDOUMscUJBQXFCLCtCQUErQjtBQUNwRDtBQUNBO0FBQ0EsR0FBRztBQUNILHlCQUF5QjtBQUN6QjtBQUNBLHNCQUFzQixpQ0FBaUM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSyxNQUFNLEVBRU47QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLEtBQXFDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEsOEJBQThCOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsS0FBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssVUFBVSxJQUFxQztBQUNwRDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG9CQUFvQjtBQUN6QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0EsOEJBQThCO0FBQzlCLE1BQU0sSUFBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLEtBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQSxLQUFLLE1BQU0sRUFFTjtBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBLHNDQUFzQztBQUN0Qyw4Qzs7QUFFQTtBQUNBLFFBQVEsS0FBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGVBQWU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsS0FBcUM7QUFDN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLFlBQVksS0FBcUM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQywyQkFBMkIsRUFBRTtBQUN2RSxLQUFLO0FBQ0w7QUFDQSwwQ0FBMEMsNEJBQTRCLEVBQUU7QUFDeEUsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixlQUFlO0FBQzlDLE1BQU0sSUFBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsS0FBSztBQUNMLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFD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RyxJQUFMLEVBQVc7QUFDVkEsVUFBSSxHQUFHLElBQVA7QUFDQTtBQUNBckosV0FBSyxHQUFHTSxVQUFVLENBQUMsWUFBTTtBQUN4QitJLFlBQUksR0FBRyxLQUFQO0FBQ0EsZUFBT0osSUFBUCxLQUFnQixVQUFoQixJQUE4QkEsSUFBSSxFQUFsQztBQUNBLE9BSGlCLEVBR2ZDLElBSGUsQ0FBbEI7QUFJQTs7QUFFRDtBQUNELEU7QUFDY3hMLFE7Ozs7Ozs7Ozs7O3dGQy9CZjtBQUNBLElBQUk0TCxPQUFPLEdBQUcsT0FBZCxDOztBQUVlO0FBQ2RDLEdBQUMsRUFBRUQsT0FEVztBQUVkQSxTQUFPLEVBQUVBLE9BRks7QUFHZDtBQUNBbG1CLE1BQUksRUFBRTtBQUNMLFdBREs7QUFFTCxXQUZLO0FBR0wsUUFISztBQUlMLFNBSks7QUFLTCxXQUxLLENBSlEsRTs7Ozs7Ozs7Ozs7d0ZDSGY7QUFDQTs7Ozs7Ozs7QUFRZTtBQUNka2EsT0FBSyxFQUFFLEtBRE87QUFFZGtNLFdBQVMsRUFBRSxLQUZHO0FBR2Q7QUFDQUMsT0FBSyxFQUFFLEtBSk87QUFLZC9oQixNQUFJLEVBQUUsS0FMUTtBQU1kZ2lCLFFBQU0sRUFBRSxHQU5NO0FBT2RDLFNBQU8sRUFBRSxHQVBLO0FBUWRDLFFBQU0sRUFBRSxHQVJNO0FBU2RDLGlCQUFlLEVBQUUsR0FUSCxFIiwiZmlsZSI6ImNvbW1vbi92ZW5kb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XHJcblxyXG5mdW5jdGlvbiBiNjREZWNvZGVVbmljb2RlIChzdHIpIHtcclxuICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGF0b2Ioc3RyKS5zcGxpdCgnJykubWFwKGZ1bmN0aW9uIChjKSB7XHJcbiAgICByZXR1cm4gJyUnICsgKCcwMCcgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtMilcclxuICB9KS5qb2luKCcnKSlcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q3VycmVudFVzZXJJbmZvICgpIHtcclxuICBjb25zdCB0b2tlbiA9ICggdHQpLmdldFN0b3JhZ2VTeW5jKCd1bmlfaWRfdG9rZW4nKSB8fCAnJztcclxuICBjb25zdCB0b2tlbkFyciA9IHRva2VuLnNwbGl0KCcuJyk7XHJcbiAgaWYgKCF0b2tlbiB8fCB0b2tlbkFyci5sZW5ndGggIT09IDMpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVpZDogbnVsbCxcclxuICAgICAgcm9sZTogW10sXHJcbiAgICAgIHBlcm1pc3Npb246IFtdLFxyXG4gICAgICB0b2tlbkV4cGlyZWQ6IDBcclxuICAgIH1cclxuICB9XHJcbiAgbGV0IHVzZXJJbmZvO1xyXG4gIHRyeSB7XHJcbiAgICB1c2VySW5mbyA9IEpTT04ucGFyc2UoYjY0RGVjb2RlVW5pY29kZSh0b2tlbkFyclsxXSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ+iOt+WPluW9k+WJjeeUqOaIt+S/oeaBr+WHuumUme+8jOivpue7humUmeivr+S/oeaBr+S4uu+8micgKyBlcnJvci5tZXNzYWdlKVxyXG4gIH1cclxuICB1c2VySW5mby50b2tlbkV4cGlyZWQgPSB1c2VySW5mby5leHAgKiAxMDAwO1xyXG4gIGRlbGV0ZSB1c2VySW5mby5leHA7XHJcbiAgZGVsZXRlIHVzZXJJbmZvLmlhdDtcclxuICByZXR1cm4gdXNlckluZm9cclxufVxyXG5cclxuZnVuY3Rpb24gdW5pSWRNaXhpbiAoVnVlKSB7XHJcbiAgVnVlLnByb3RvdHlwZS51bmlJREhhc1JvbGUgPSBmdW5jdGlvbiAocm9sZUlkKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHJvbGVcclxuICAgIH0gPSBnZXRDdXJyZW50VXNlckluZm8oKTtcclxuICAgIHJldHVybiByb2xlLmluZGV4T2Yocm9sZUlkKSA+IC0xXHJcbiAgfTtcclxuICBWdWUucHJvdG90eXBlLnVuaUlESGFzUGVybWlzc2lvbiA9IGZ1bmN0aW9uIChwZXJtaXNzaW9uSWQpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgcGVybWlzc2lvblxyXG4gICAgfSA9IGdldEN1cnJlbnRVc2VySW5mbygpO1xyXG4gICAgcmV0dXJuIHRoaXMudW5pSURIYXNSb2xlKCdhZG1pbicpIHx8IHBlcm1pc3Npb24uaW5kZXhPZihwZXJtaXNzaW9uSWQpID4gLTFcclxuICB9O1xyXG4gIFZ1ZS5wcm90b3R5cGUudW5pSURUb2tlblZhbGlkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICB0b2tlbkV4cGlyZWRcclxuICAgIH0gPSBnZXRDdXJyZW50VXNlckluZm8oKTtcclxuICAgIHJldHVybiB0b2tlbkV4cGlyZWQgPiBEYXRlLm5vdygpXHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgX3RvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcclxuY29uc3QgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xyXG5cclxuZnVuY3Rpb24gaXNGbiAoZm4pIHtcclxuICByZXR1cm4gdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzU3RyIChzdHIpIHtcclxuICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZydcclxufVxyXG5cclxuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCAob2JqKSB7XHJcbiAgcmV0dXJuIF90b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IE9iamVjdF0nXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhc093biAob2JqLCBrZXkpIHtcclxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSlcclxufVxyXG5cclxuZnVuY3Rpb24gbm9vcCAoKSB7fVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBhIGNhY2hlZCB2ZXJzaW9uIG9mIGEgcHVyZSBmdW5jdGlvbi5cclxuICovXHJcbmZ1bmN0aW9uIGNhY2hlZCAoZm4pIHtcclxuICBjb25zdCBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIGNhY2hlZEZuIChzdHIpIHtcclxuICAgIGNvbnN0IGhpdCA9IGNhY2hlW3N0cl07XHJcbiAgICByZXR1cm4gaGl0IHx8IChjYWNoZVtzdHJdID0gZm4oc3RyKSlcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDYW1lbGl6ZSBhIGh5cGhlbi1kZWxpbWl0ZWQgc3RyaW5nLlxyXG4gKi9cclxuY29uc3QgY2FtZWxpemVSRSA9IC8tKFxcdykvZztcclxuY29uc3QgY2FtZWxpemUgPSBjYWNoZWQoKHN0cikgPT4ge1xyXG4gIHJldHVybiBzdHIucmVwbGFjZShjYW1lbGl6ZVJFLCAoXywgYykgPT4gYyA/IGMudG9VcHBlckNhc2UoKSA6ICcnKVxyXG59KTtcclxuXHJcbmNvbnN0IEhPT0tTID0gW1xyXG4gICdpbnZva2UnLFxyXG4gICdzdWNjZXNzJyxcclxuICAnZmFpbCcsXHJcbiAgJ2NvbXBsZXRlJyxcclxuICAncmV0dXJuVmFsdWUnXHJcbl07XHJcblxyXG5jb25zdCBnbG9iYWxJbnRlcmNlcHRvcnMgPSB7fTtcclxuY29uc3Qgc2NvcGVkSW50ZXJjZXB0b3JzID0ge307XHJcblxyXG5mdW5jdGlvbiBtZXJnZUhvb2sgKHBhcmVudFZhbCwgY2hpbGRWYWwpIHtcclxuICBjb25zdCByZXMgPSBjaGlsZFZhbFxyXG4gICAgPyBwYXJlbnRWYWxcclxuICAgICAgPyBwYXJlbnRWYWwuY29uY2F0KGNoaWxkVmFsKVxyXG4gICAgICA6IEFycmF5LmlzQXJyYXkoY2hpbGRWYWwpXHJcbiAgICAgICAgPyBjaGlsZFZhbCA6IFtjaGlsZFZhbF1cclxuICAgIDogcGFyZW50VmFsO1xyXG4gIHJldHVybiByZXNcclxuICAgID8gZGVkdXBlSG9va3MocmVzKVxyXG4gICAgOiByZXNcclxufVxyXG5cclxuZnVuY3Rpb24gZGVkdXBlSG9va3MgKGhvb2tzKSB7XHJcbiAgY29uc3QgcmVzID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBob29rcy5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKHJlcy5pbmRleE9mKGhvb2tzW2ldKSA9PT0gLTEpIHtcclxuICAgICAgcmVzLnB1c2goaG9va3NbaV0pO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcmVzXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUhvb2sgKGhvb2tzLCBob29rKSB7XHJcbiAgY29uc3QgaW5kZXggPSBob29rcy5pbmRleE9mKGhvb2spO1xyXG4gIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgIGhvb2tzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtZXJnZUludGVyY2VwdG9ySG9vayAoaW50ZXJjZXB0b3IsIG9wdGlvbikge1xyXG4gIE9iamVjdC5rZXlzKG9wdGlvbikuZm9yRWFjaChob29rID0+IHtcclxuICAgIGlmIChIT09LUy5pbmRleE9mKGhvb2spICE9PSAtMSAmJiBpc0ZuKG9wdGlvbltob29rXSkpIHtcclxuICAgICAgaW50ZXJjZXB0b3JbaG9va10gPSBtZXJnZUhvb2soaW50ZXJjZXB0b3JbaG9va10sIG9wdGlvbltob29rXSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUludGVyY2VwdG9ySG9vayAoaW50ZXJjZXB0b3IsIG9wdGlvbikge1xyXG4gIGlmICghaW50ZXJjZXB0b3IgfHwgIW9wdGlvbikge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIE9iamVjdC5rZXlzKG9wdGlvbikuZm9yRWFjaChob29rID0+IHtcclxuICAgIGlmIChIT09LUy5pbmRleE9mKGhvb2spICE9PSAtMSAmJiBpc0ZuKG9wdGlvbltob29rXSkpIHtcclxuICAgICAgcmVtb3ZlSG9vayhpbnRlcmNlcHRvcltob29rXSwgb3B0aW9uW2hvb2tdKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkSW50ZXJjZXB0b3IgKG1ldGhvZCwgb3B0aW9uKSB7XHJcbiAgaWYgKHR5cGVvZiBtZXRob2QgPT09ICdzdHJpbmcnICYmIGlzUGxhaW5PYmplY3Qob3B0aW9uKSkge1xyXG4gICAgbWVyZ2VJbnRlcmNlcHRvckhvb2soc2NvcGVkSW50ZXJjZXB0b3JzW21ldGhvZF0gfHwgKHNjb3BlZEludGVyY2VwdG9yc1ttZXRob2RdID0ge30pLCBvcHRpb24pO1xyXG4gIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdChtZXRob2QpKSB7XHJcbiAgICBtZXJnZUludGVyY2VwdG9ySG9vayhnbG9iYWxJbnRlcmNlcHRvcnMsIG1ldGhvZCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVJbnRlcmNlcHRvciAobWV0aG9kLCBvcHRpb24pIHtcclxuICBpZiAodHlwZW9mIG1ldGhvZCA9PT0gJ3N0cmluZycpIHtcclxuICAgIGlmIChpc1BsYWluT2JqZWN0KG9wdGlvbikpIHtcclxuICAgICAgcmVtb3ZlSW50ZXJjZXB0b3JIb29rKHNjb3BlZEludGVyY2VwdG9yc1ttZXRob2RdLCBvcHRpb24pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGVsZXRlIHNjb3BlZEludGVyY2VwdG9yc1ttZXRob2RdO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdChtZXRob2QpKSB7XHJcbiAgICByZW1vdmVJbnRlcmNlcHRvckhvb2soZ2xvYmFsSW50ZXJjZXB0b3JzLCBtZXRob2QpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gd3JhcHBlckhvb2sgKGhvb2spIHtcclxuICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgIHJldHVybiBob29rKGRhdGEpIHx8IGRhdGFcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzUHJvbWlzZSAob2JqKSB7XHJcbiAgcmV0dXJuICEhb2JqICYmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyB8fCB0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nKSAmJiB0eXBlb2Ygb2JqLnRoZW4gPT09ICdmdW5jdGlvbidcclxufVxyXG5cclxuZnVuY3Rpb24gcXVldWUgKGhvb2tzLCBkYXRhKSB7XHJcbiAgbGV0IHByb21pc2UgPSBmYWxzZTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGhvb2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBob29rID0gaG9va3NbaV07XHJcbiAgICBpZiAocHJvbWlzZSkge1xyXG4gICAgICBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKHdyYXBwZXJIb29rKGhvb2spKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGhvb2soZGF0YSk7XHJcbiAgICAgIGlmIChpc1Byb21pc2UocmVzKSkge1xyXG4gICAgICAgIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUocmVzKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAocmVzID09PSBmYWxzZSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB0aGVuICgpIHt9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBwcm9taXNlIHx8IHtcclxuICAgIHRoZW4gKGNhbGxiYWNrKSB7XHJcbiAgICAgIHJldHVybiBjYWxsYmFjayhkYXRhKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gd3JhcHBlck9wdGlvbnMgKGludGVyY2VwdG9yLCBvcHRpb25zID0ge30pIHtcclxuICBbJ3N1Y2Nlc3MnLCAnZmFpbCcsICdjb21wbGV0ZSddLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShpbnRlcmNlcHRvcltuYW1lXSkpIHtcclxuICAgICAgY29uc3Qgb2xkQ2FsbGJhY2sgPSBvcHRpb25zW25hbWVdO1xyXG4gICAgICBvcHRpb25zW25hbWVdID0gZnVuY3Rpb24gY2FsbGJhY2tJbnRlcmNlcHRvciAocmVzKSB7XHJcbiAgICAgICAgcXVldWUoaW50ZXJjZXB0b3JbbmFtZV0sIHJlcykudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1taXhlZC1vcGVyYXRvcnMgKi9cclxuICAgICAgICAgIHJldHVybiBpc0ZuKG9sZENhbGxiYWNrKSAmJiBvbGRDYWxsYmFjayhyZXMpIHx8IHJlc1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiBvcHRpb25zXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdyYXBwZXJSZXR1cm5WYWx1ZSAobWV0aG9kLCByZXR1cm5WYWx1ZSkge1xyXG4gIGNvbnN0IHJldHVyblZhbHVlSG9va3MgPSBbXTtcclxuICBpZiAoQXJyYXkuaXNBcnJheShnbG9iYWxJbnRlcmNlcHRvcnMucmV0dXJuVmFsdWUpKSB7XHJcbiAgICByZXR1cm5WYWx1ZUhvb2tzLnB1c2goLi4uZ2xvYmFsSW50ZXJjZXB0b3JzLnJldHVyblZhbHVlKTtcclxuICB9XHJcbiAgY29uc3QgaW50ZXJjZXB0b3IgPSBzY29wZWRJbnRlcmNlcHRvcnNbbWV0aG9kXTtcclxuICBpZiAoaW50ZXJjZXB0b3IgJiYgQXJyYXkuaXNBcnJheShpbnRlcmNlcHRvci5yZXR1cm5WYWx1ZSkpIHtcclxuICAgIHJldHVyblZhbHVlSG9va3MucHVzaCguLi5pbnRlcmNlcHRvci5yZXR1cm5WYWx1ZSk7XHJcbiAgfVxyXG4gIHJldHVyblZhbHVlSG9va3MuZm9yRWFjaChob29rID0+IHtcclxuICAgIHJldHVyblZhbHVlID0gaG9vayhyZXR1cm5WYWx1ZSkgfHwgcmV0dXJuVmFsdWU7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHJldHVyblZhbHVlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFwaUludGVyY2VwdG9ySG9va3MgKG1ldGhvZCkge1xyXG4gIGNvbnN0IGludGVyY2VwdG9yID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICBPYmplY3Qua2V5cyhnbG9iYWxJbnRlcmNlcHRvcnMpLmZvckVhY2goaG9vayA9PiB7XHJcbiAgICBpZiAoaG9vayAhPT0gJ3JldHVyblZhbHVlJykge1xyXG4gICAgICBpbnRlcmNlcHRvcltob29rXSA9IGdsb2JhbEludGVyY2VwdG9yc1tob29rXS5zbGljZSgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGNvbnN0IHNjb3BlZEludGVyY2VwdG9yID0gc2NvcGVkSW50ZXJjZXB0b3JzW21ldGhvZF07XHJcbiAgaWYgKHNjb3BlZEludGVyY2VwdG9yKSB7XHJcbiAgICBPYmplY3Qua2V5cyhzY29wZWRJbnRlcmNlcHRvcikuZm9yRWFjaChob29rID0+IHtcclxuICAgICAgaWYgKGhvb2sgIT09ICdyZXR1cm5WYWx1ZScpIHtcclxuICAgICAgICBpbnRlcmNlcHRvcltob29rXSA9IChpbnRlcmNlcHRvcltob29rXSB8fCBbXSkuY29uY2F0KHNjb3BlZEludGVyY2VwdG9yW2hvb2tdKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJldHVybiBpbnRlcmNlcHRvclxyXG59XHJcblxyXG5mdW5jdGlvbiBpbnZva2VBcGkgKG1ldGhvZCwgYXBpLCBvcHRpb25zLCAuLi5wYXJhbXMpIHtcclxuICBjb25zdCBpbnRlcmNlcHRvciA9IGdldEFwaUludGVyY2VwdG9ySG9va3MobWV0aG9kKTtcclxuICBpZiAoaW50ZXJjZXB0b3IgJiYgT2JqZWN0LmtleXMoaW50ZXJjZXB0b3IpLmxlbmd0aCkge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaW50ZXJjZXB0b3IuaW52b2tlKSkge1xyXG4gICAgICBjb25zdCByZXMgPSBxdWV1ZShpbnRlcmNlcHRvci5pbnZva2UsIG9wdGlvbnMpO1xyXG4gICAgICByZXR1cm4gcmVzLnRoZW4oKG9wdGlvbnMpID0+IHtcclxuICAgICAgICByZXR1cm4gYXBpKHdyYXBwZXJPcHRpb25zKGludGVyY2VwdG9yLCBvcHRpb25zKSwgLi4ucGFyYW1zKVxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGFwaSh3cmFwcGVyT3B0aW9ucyhpbnRlcmNlcHRvciwgb3B0aW9ucyksIC4uLnBhcmFtcylcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGFwaShvcHRpb25zLCAuLi5wYXJhbXMpXHJcbn1cclxuXHJcbmNvbnN0IHByb21pc2VJbnRlcmNlcHRvciA9IHtcclxuICByZXR1cm5WYWx1ZSAocmVzKSB7XHJcbiAgICBpZiAoIWlzUHJvbWlzZShyZXMpKSB7XHJcbiAgICAgIHJldHVybiByZXNcclxuICAgIH1cclxuICAgIHJldHVybiByZXMudGhlbihyZXMgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzWzFdXHJcbiAgICB9KS5jYXRjaChyZXMgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzWzBdXHJcbiAgICB9KVxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IFNZTkNfQVBJX1JFID1cclxuICAvXlxcJHxXaW5kb3ckfFdpbmRvd1N0eWxlJHxzZW5kTmF0aXZlRXZlbnR8cmVzdG9yZUdsb2JhbHxnZXRDdXJyZW50U3ViTlZ1ZXxnZXRNZW51QnV0dG9uQm91bmRpbmdDbGllbnRSZWN0fF5yZXBvcnR8aW50ZXJjZXB0b3JzfEludGVyY2VwdG9yJHxnZXRTdWJOVnVlQnlJZHxyZXF1aXJlTmF0aXZlUGx1Z2lufHVweDJweHxoaWRlS2V5Ym9hcmR8Y2FuSVVzZXxeY3JlYXRlfFN5bmMkfE1hbmFnZXIkfGJhc2U2NFRvQXJyYXlCdWZmZXJ8YXJyYXlCdWZmZXJUb0Jhc2U2NC87XHJcblxyXG5jb25zdCBDT05URVhUX0FQSV9SRSA9IC9eY3JlYXRlfE1hbmFnZXIkLztcclxuXHJcbi8vIENvbnRleHTkvovlpJbmg4XlhrVcclxuY29uc3QgQ09OVEVYVF9BUElfUkVfRVhDID0gWydjcmVhdGVCTEVDb25uZWN0aW9uJ107XHJcblxyXG4vLyDlkIzmraXkvovlpJbmg4XlhrVcclxuY29uc3QgQVNZTkNfQVBJID0gWydjcmVhdGVCTEVDb25uZWN0aW9uJ107XHJcblxyXG5jb25zdCBDQUxMQkFDS19BUElfUkUgPSAvXm9ufF5vZmYvO1xyXG5cclxuZnVuY3Rpb24gaXNDb250ZXh0QXBpIChuYW1lKSB7XHJcbiAgcmV0dXJuIENPTlRFWFRfQVBJX1JFLnRlc3QobmFtZSkgJiYgQ09OVEVYVF9BUElfUkVfRVhDLmluZGV4T2YobmFtZSkgPT09IC0xXHJcbn1cclxuZnVuY3Rpb24gaXNTeW5jQXBpIChuYW1lKSB7XHJcbiAgcmV0dXJuIFNZTkNfQVBJX1JFLnRlc3QobmFtZSkgJiYgQVNZTkNfQVBJLmluZGV4T2YobmFtZSkgPT09IC0xXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzQ2FsbGJhY2tBcGkgKG5hbWUpIHtcclxuICByZXR1cm4gQ0FMTEJBQ0tfQVBJX1JFLnRlc3QobmFtZSkgJiYgbmFtZSAhPT0gJ29uUHVzaCdcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlUHJvbWlzZSAocHJvbWlzZSkge1xyXG4gIHJldHVybiBwcm9taXNlLnRoZW4oZGF0YSA9PiB7XHJcbiAgICByZXR1cm4gW251bGwsIGRhdGFdXHJcbiAgfSlcclxuICAgIC5jYXRjaChlcnIgPT4gW2Vycl0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3VsZFByb21pc2UgKG5hbWUpIHtcclxuICBpZiAoXHJcbiAgICBpc0NvbnRleHRBcGkobmFtZSkgfHxcclxuICAgIGlzU3luY0FwaShuYW1lKSB8fFxyXG4gICAgaXNDYWxsYmFja0FwaShuYW1lKVxyXG4gICkge1xyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG4gIHJldHVybiB0cnVlXHJcbn1cclxuXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLWV4dGVuZC1uYXRpdmUgKi9cclxuaWYgKCFQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5KSB7XHJcbiAgUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gICAgY29uc3QgcHJvbWlzZSA9IHRoaXMuY29uc3RydWN0b3I7XHJcbiAgICByZXR1cm4gdGhpcy50aGVuKFxyXG4gICAgICB2YWx1ZSA9PiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbigoKSA9PiB2YWx1ZSksXHJcbiAgICAgIHJlYXNvbiA9PiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhyb3cgcmVhc29uXHJcbiAgICAgIH0pXHJcbiAgICApXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJvbWlzaWZ5IChuYW1lLCBhcGkpIHtcclxuICBpZiAoIXNob3VsZFByb21pc2UobmFtZSkpIHtcclxuICAgIHJldHVybiBhcGlcclxuICB9XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIHByb21pc2VBcGkgKG9wdGlvbnMgPSB7fSwgLi4ucGFyYW1zKSB7XHJcbiAgICBpZiAoaXNGbihvcHRpb25zLnN1Y2Nlc3MpIHx8IGlzRm4ob3B0aW9ucy5mYWlsKSB8fCBpc0ZuKG9wdGlvbnMuY29tcGxldGUpKSB7XHJcbiAgICAgIHJldHVybiB3cmFwcGVyUmV0dXJuVmFsdWUobmFtZSwgaW52b2tlQXBpKG5hbWUsIGFwaSwgb3B0aW9ucywgLi4ucGFyYW1zKSlcclxuICAgIH1cclxuICAgIHJldHVybiB3cmFwcGVyUmV0dXJuVmFsdWUobmFtZSwgaGFuZGxlUHJvbWlzZShuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGludm9rZUFwaShuYW1lLCBhcGksIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcclxuICAgICAgICBzdWNjZXNzOiByZXNvbHZlLFxyXG4gICAgICAgIGZhaWw6IHJlamVjdFxyXG4gICAgICB9KSwgLi4ucGFyYW1zKTtcclxuICAgIH0pKSlcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IEVQUyA9IDFlLTQ7XHJcbmNvbnN0IEJBU0VfREVWSUNFX1dJRFRIID0gNzUwO1xyXG5sZXQgaXNJT1MgPSBmYWxzZTtcclxubGV0IGRldmljZVdpZHRoID0gMDtcclxubGV0IGRldmljZURQUiA9IDA7XHJcblxyXG5mdW5jdGlvbiBjaGVja0RldmljZVdpZHRoICgpIHtcclxuICBjb25zdCB7XHJcbiAgICBwbGF0Zm9ybSxcclxuICAgIHBpeGVsUmF0aW8sXHJcbiAgICB3aW5kb3dXaWR0aFxyXG4gIH0gPSB0dC5nZXRTeXN0ZW1JbmZvU3luYygpOyAvLyB1bmk9PnR0IHJ1bnRpbWUg57yW6K+R55uu5qCH5pivIHVuaSDlr7nosaHvvIzlhoXpg6jkuI3lhYHorrjnm7TmjqXkvb/nlKggdW5pXHJcblxyXG4gIGRldmljZVdpZHRoID0gd2luZG93V2lkdGg7XHJcbiAgZGV2aWNlRFBSID0gcGl4ZWxSYXRpbztcclxuICBpc0lPUyA9IHBsYXRmb3JtID09PSAnaW9zJztcclxufVxyXG5cclxuZnVuY3Rpb24gdXB4MnB4IChudW1iZXIsIG5ld0RldmljZVdpZHRoKSB7XHJcbiAgaWYgKGRldmljZVdpZHRoID09PSAwKSB7XHJcbiAgICBjaGVja0RldmljZVdpZHRoKCk7XHJcbiAgfVxyXG5cclxuICBudW1iZXIgPSBOdW1iZXIobnVtYmVyKTtcclxuICBpZiAobnVtYmVyID09PSAwKSB7XHJcbiAgICByZXR1cm4gMFxyXG4gIH1cclxuICBsZXQgcmVzdWx0ID0gKG51bWJlciAvIEJBU0VfREVWSUNFX1dJRFRIKSAqIChuZXdEZXZpY2VXaWR0aCB8fCBkZXZpY2VXaWR0aCk7XHJcbiAgaWYgKHJlc3VsdCA8IDApIHtcclxuICAgIHJlc3VsdCA9IC1yZXN1bHQ7XHJcbiAgfVxyXG4gIHJlc3VsdCA9IE1hdGguZmxvb3IocmVzdWx0ICsgRVBTKTtcclxuICBpZiAocmVzdWx0ID09PSAwKSB7XHJcbiAgICBpZiAoZGV2aWNlRFBSID09PSAxIHx8ICFpc0lPUykge1xyXG4gICAgICByZXN1bHQgPSAxO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzdWx0ID0gMC41O1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gbnVtYmVyIDwgMCA/IC1yZXN1bHQgOiByZXN1bHRcclxufVxyXG5cclxuY29uc3QgaW50ZXJjZXB0b3JzID0ge1xyXG4gIHByb21pc2VJbnRlcmNlcHRvclxyXG59O1xyXG5cclxudmFyIGJhc2VBcGkgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XHJcbiAgX19wcm90b19fOiBudWxsLFxyXG4gIHVweDJweDogdXB4MnB4LFxyXG4gIGFkZEludGVyY2VwdG9yOiBhZGRJbnRlcmNlcHRvcixcclxuICByZW1vdmVJbnRlcmNlcHRvcjogcmVtb3ZlSW50ZXJjZXB0b3IsXHJcbiAgaW50ZXJjZXB0b3JzOiBpbnRlcmNlcHRvcnNcclxufSk7XHJcblxyXG5jbGFzcyBFdmVudENoYW5uZWwge1xyXG4gIGNvbnN0cnVjdG9yIChpZCwgZXZlbnRzKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLmxpc3RlbmVyID0ge307XHJcbiAgICB0aGlzLmVtaXRDYWNoZSA9IHt9O1xyXG4gICAgaWYgKGV2ZW50cykge1xyXG4gICAgICBPYmplY3Qua2V5cyhldmVudHMpLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICAgICAgdGhpcy5vbihuYW1lLCBldmVudHNbbmFtZV0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGVtaXQgKGV2ZW50TmFtZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgZm5zID0gdGhpcy5saXN0ZW5lcltldmVudE5hbWVdO1xyXG4gICAgaWYgKCFmbnMpIHtcclxuICAgICAgcmV0dXJuICh0aGlzLmVtaXRDYWNoZVtldmVudE5hbWVdIHx8ICh0aGlzLmVtaXRDYWNoZVtldmVudE5hbWVdID0gW10pKS5wdXNoKGFyZ3MpXHJcbiAgICB9XHJcbiAgICBmbnMuZm9yRWFjaChvcHQgPT4ge1xyXG4gICAgICBvcHQuZm4uYXBwbHkob3B0LmZuLCBhcmdzKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5saXN0ZW5lcltldmVudE5hbWVdID0gZm5zLmZpbHRlcihvcHQgPT4gb3B0LnR5cGUgIT09ICdvbmNlJyk7XHJcbiAgfVxyXG5cclxuICBvbiAoZXZlbnROYW1lLCBmbikge1xyXG4gICAgdGhpcy5fYWRkTGlzdGVuZXIoZXZlbnROYW1lLCAnb24nLCBmbik7XHJcbiAgICB0aGlzLl9jbGVhckNhY2hlKGV2ZW50TmFtZSk7XHJcbiAgfVxyXG5cclxuICBvbmNlIChldmVudE5hbWUsIGZuKSB7XHJcbiAgICB0aGlzLl9hZGRMaXN0ZW5lcihldmVudE5hbWUsICdvbmNlJywgZm4pO1xyXG4gICAgdGhpcy5fY2xlYXJDYWNoZShldmVudE5hbWUpO1xyXG4gIH1cclxuXHJcbiAgb2ZmIChldmVudE5hbWUsIGZuKSB7XHJcbiAgICBjb25zdCBmbnMgPSB0aGlzLmxpc3RlbmVyW2V2ZW50TmFtZV07XHJcbiAgICBpZiAoIWZucykge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGlmIChmbikge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZucy5sZW5ndGg7KSB7XHJcbiAgICAgICAgaWYgKGZuc1tpXS5mbiA9PT0gZm4pIHtcclxuICAgICAgICAgIGZucy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICBpLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGkrKztcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGVsZXRlIHRoaXMubGlzdGVuZXJbZXZlbnROYW1lXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9jbGVhckNhY2hlIChldmVudE5hbWUpIHtcclxuICAgIGNvbnN0IGNhY2hlQXJncyA9IHRoaXMuZW1pdENhY2hlW2V2ZW50TmFtZV07XHJcbiAgICBpZiAoY2FjaGVBcmdzKSB7XHJcbiAgICAgIGZvciAoOyBjYWNoZUFyZ3MubGVuZ3RoID4gMDspIHtcclxuICAgICAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgW2V2ZW50TmFtZV0uY29uY2F0KGNhY2hlQXJncy5zaGlmdCgpKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9hZGRMaXN0ZW5lciAoZXZlbnROYW1lLCB0eXBlLCBmbikge1xyXG4gICAgKHRoaXMubGlzdGVuZXJbZXZlbnROYW1lXSB8fCAodGhpcy5saXN0ZW5lcltldmVudE5hbWVdID0gW10pKS5wdXNoKHtcclxuICAgICAgZm4sXHJcbiAgICAgIHR5cGVcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZXZlbnRDaGFubmVscyA9IHt9O1xyXG5cclxuY29uc3QgZXZlbnRDaGFubmVsU3RhY2sgPSBbXTtcclxuXHJcbmxldCBpZCA9IDA7XHJcblxyXG5mdW5jdGlvbiBpbml0RXZlbnRDaGFubmVsIChldmVudHMsIGNhY2hlID0gdHJ1ZSkge1xyXG4gIGlkKys7XHJcbiAgY29uc3QgZXZlbnRDaGFubmVsID0gbmV3IEV2ZW50Q2hhbm5lbChpZCwgZXZlbnRzKTtcclxuICBpZiAoY2FjaGUpIHtcclxuICAgIGV2ZW50Q2hhbm5lbHNbaWRdID0gZXZlbnRDaGFubmVsO1xyXG4gICAgZXZlbnRDaGFubmVsU3RhY2sucHVzaChldmVudENoYW5uZWwpO1xyXG4gIH1cclxuICByZXR1cm4gZXZlbnRDaGFubmVsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEV2ZW50Q2hhbm5lbCAoaWQpIHtcclxuICBpZiAoaWQpIHtcclxuICAgIGNvbnN0IGV2ZW50Q2hhbm5lbCA9IGV2ZW50Q2hhbm5lbHNbaWRdO1xyXG4gICAgZGVsZXRlIGV2ZW50Q2hhbm5lbHNbaWRdO1xyXG4gICAgcmV0dXJuIGV2ZW50Q2hhbm5lbFxyXG4gIH1cclxuICByZXR1cm4gZXZlbnRDaGFubmVsU3RhY2suc2hpZnQoKVxyXG59XHJcblxyXG52YXIgbmF2aWdhdGVUbyA9IHtcclxuICBhcmdzIChmcm9tQXJncywgdG9BcmdzKSB7XHJcbiAgICBjb25zdCBpZCA9IGluaXRFdmVudENoYW5uZWwoZnJvbUFyZ3MuZXZlbnRzKS5pZDtcclxuICAgIGlmIChmcm9tQXJncy51cmwpIHtcclxuICAgICAgZnJvbUFyZ3MudXJsID0gZnJvbUFyZ3MudXJsICsgKGZyb21BcmdzLnVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArICdfX2lkX189JyArIGlkO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmV0dXJuVmFsdWUgKGZyb21SZXMsIHRvUmVzKSB7XHJcbiAgICBmcm9tUmVzLmV2ZW50Q2hhbm5lbCA9IGdldEV2ZW50Q2hhbm5lbCgpO1xyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIGZpbmRFeGlzdHNQYWdlSW5kZXggKHVybCkge1xyXG4gIGNvbnN0IHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgbGV0IGxlbiA9IHBhZ2VzLmxlbmd0aDtcclxuICB3aGlsZSAobGVuLS0pIHtcclxuICAgIGNvbnN0IHBhZ2UgPSBwYWdlc1tsZW5dO1xyXG4gICAgaWYgKHBhZ2UuJHBhZ2UgJiYgcGFnZS4kcGFnZS5mdWxsUGF0aCA9PT0gdXJsKSB7XHJcbiAgICAgIHJldHVybiBsZW5cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIC0xXHJcbn1cclxuXHJcbnZhciByZWRpcmVjdFRvID0ge1xyXG4gIG5hbWUgKGZyb21BcmdzKSB7XHJcbiAgICBpZiAoZnJvbUFyZ3MuZXhpc3RzID09PSAnYmFjaycgJiYgZnJvbUFyZ3MuZGVsdGEpIHtcclxuICAgICAgcmV0dXJuICduYXZpZ2F0ZUJhY2snXHJcbiAgICB9XHJcbiAgICByZXR1cm4gJ3JlZGlyZWN0VG8nXHJcbiAgfSxcclxuICBhcmdzIChmcm9tQXJncykge1xyXG4gICAgaWYgKGZyb21BcmdzLmV4aXN0cyA9PT0gJ2JhY2snICYmIGZyb21BcmdzLnVybCkge1xyXG4gICAgICBjb25zdCBleGlzdHNQYWdlSW5kZXggPSBmaW5kRXhpc3RzUGFnZUluZGV4KGZyb21BcmdzLnVybCk7XHJcbiAgICAgIGlmIChleGlzdHNQYWdlSW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgY29uc3QgZGVsdGEgPSBnZXRDdXJyZW50UGFnZXMoKS5sZW5ndGggLSAxIC0gZXhpc3RzUGFnZUluZGV4O1xyXG4gICAgICAgIGlmIChkZWx0YSA+IDApIHtcclxuICAgICAgICAgIGZyb21BcmdzLmRlbHRhID0gZGVsdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxudmFyIHByZXZpZXdJbWFnZSA9IHtcclxuICBhcmdzIChmcm9tQXJncykge1xyXG4gICAgbGV0IGN1cnJlbnRJbmRleCA9IHBhcnNlSW50KGZyb21BcmdzLmN1cnJlbnQpO1xyXG4gICAgaWYgKGlzTmFOKGN1cnJlbnRJbmRleCkpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBjb25zdCB1cmxzID0gZnJvbUFyZ3MudXJscztcclxuICAgIGlmICghQXJyYXkuaXNBcnJheSh1cmxzKSkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGNvbnN0IGxlbiA9IHVybHMubGVuZ3RoO1xyXG4gICAgaWYgKCFsZW4pIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBpZiAoY3VycmVudEluZGV4IDwgMCkge1xyXG4gICAgICBjdXJyZW50SW5kZXggPSAwO1xyXG4gICAgfSBlbHNlIGlmIChjdXJyZW50SW5kZXggPj0gbGVuKSB7XHJcbiAgICAgIGN1cnJlbnRJbmRleCA9IGxlbiAtIDE7XHJcbiAgICB9XHJcbiAgICBpZiAoY3VycmVudEluZGV4ID4gMCkge1xyXG4gICAgICBmcm9tQXJncy5jdXJyZW50ID0gdXJsc1tjdXJyZW50SW5kZXhdO1xyXG4gICAgICBmcm9tQXJncy51cmxzID0gdXJscy5maWx0ZXIoXHJcbiAgICAgICAgKGl0ZW0sIGluZGV4KSA9PiBpbmRleCA8IGN1cnJlbnRJbmRleCA/IGl0ZW0gIT09IHVybHNbY3VycmVudEluZGV4XSA6IHRydWVcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZyb21BcmdzLmN1cnJlbnQgPSB1cmxzWzBdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaW5kaWNhdG9yOiBmYWxzZSxcclxuICAgICAgbG9vcDogZmFsc2VcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBVVUlEX0tFWSA9ICdfX0RDX1NUQVRfVVVJRCc7XHJcbmxldCBkZXZpY2VJZDtcclxuZnVuY3Rpb24gYWRkVXVpZCAocmVzdWx0KSB7XHJcbiAgZGV2aWNlSWQgPSBkZXZpY2VJZCB8fCB0dC5nZXRTdG9yYWdlU3luYyhVVUlEX0tFWSk7XHJcbiAgaWYgKCFkZXZpY2VJZCkge1xyXG4gICAgZGV2aWNlSWQgPSBEYXRlLm5vdygpICsgJycgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxZTcpO1xyXG4gICAgdHQuc2V0U3RvcmFnZSh7XHJcbiAgICAgIGtleTogVVVJRF9LRVksXHJcbiAgICAgIGRhdGE6IGRldmljZUlkXHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmVzdWx0LmRldmljZUlkID0gZGV2aWNlSWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFNhZmVBcmVhSW5zZXRzIChyZXN1bHQpIHtcclxuICBpZiAocmVzdWx0LnNhZmVBcmVhKSB7XHJcbiAgICBjb25zdCBzYWZlQXJlYSA9IHJlc3VsdC5zYWZlQXJlYTtcclxuICAgIHJlc3VsdC5zYWZlQXJlYUluc2V0cyA9IHtcclxuICAgICAgdG9wOiBzYWZlQXJlYS50b3AsXHJcbiAgICAgIGxlZnQ6IHNhZmVBcmVhLmxlZnQsXHJcbiAgICAgIHJpZ2h0OiByZXN1bHQud2luZG93V2lkdGggLSBzYWZlQXJlYS5yaWdodCxcclxuICAgICAgYm90dG9tOiByZXN1bHQud2luZG93SGVpZ2h0IC0gc2FmZUFyZWEuYm90dG9tXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxudmFyIGdldFN5c3RlbUluZm8gPSB7XHJcbiAgcmV0dXJuVmFsdWU6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgIGFkZFV1aWQocmVzdWx0KTtcclxuICAgIGFkZFNhZmVBcmVhSW5zZXRzKHJlc3VsdCk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3Qgb05hbWUgPSAnZ2V0VXNlckluZm8nO1xyXG5jb25zdCBuTmFtZSA9ICdnZXRVc2VyUHJvZmlsZSc7XHJcblxyXG52YXIgZ2V0VXNlclByb2ZpbGUgPSB7XHJcbiAgbmFtZTogdHQuY2FuSVVzZShuTmFtZSkgPyBuTmFtZSA6IG9OYW1lXHJcbn07XHJcblxyXG4vLyDkuI3mlK/mjIHnmoQgQVBJIOWIl+ihqFxyXG5jb25zdCB0b2RvcyA9IFtcclxuICAncHJlbG9hZFBhZ2UnLFxyXG4gICd1blByZWxvYWRQYWdlJyxcclxuICAnbG9hZFN1YlBhY2thZ2UnXHJcbiAgLy8gJ2NyZWF0ZUNhbWVyYUNvbnRleHQnLFxyXG4gIC8vICdjcmVhdGVMaXZlUGxheWVyQ29udGV4dCcsXHJcbiAgLy8gJ2dldFNhdmVkRmlsZUluZm8nLFxyXG4gIC8vICdjcmVhdGVNYXBDb250ZXh0JyxcclxuICAvLyAnb25NZW1vcnlXYXJuaW5nJyxcclxuICAvLyAnb25HeXJvc2NvcGVDaGFuZ2UnLFxyXG4gIC8vICdzdGFydEd5cm9zY29wZScsXHJcbiAgLy8gJ3N0b3BHeXJvc2NvcGUnLFxyXG4gIC8vICdzZXRTY3JlZW5CcmlnaHRuZXNzJyxcclxuICAvLyAnZ2V0U2NyZWVuQnJpZ2h0bmVzcycsXHJcbiAgLy8gJ2FkZFBob25lQ29udGFjdCcsXHJcbiAgLy8gJ29wZW5CbHVldG9vdGhBZGFwdGVyJyxcclxuICAvLyAnc3RhcnRCbHVldG9vdGhEZXZpY2VzRGlzY292ZXJ5JyxcclxuICAvLyAnb25CbHVldG9vdGhEZXZpY2VGb3VuZCcsXHJcbiAgLy8gJ3N0b3BCbHVldG9vdGhEZXZpY2VzRGlzY292ZXJ5JyxcclxuICAvLyAnb25CbHVldG9vdGhBZGFwdGVyU3RhdGVDaGFuZ2UnLFxyXG4gIC8vICdnZXRDb25uZWN0ZWRCbHVldG9vdGhEZXZpY2VzJyxcclxuICAvLyAnZ2V0Qmx1ZXRvb3RoRGV2aWNlcycsXHJcbiAgLy8gJ2dldEJsdWV0b290aEFkYXB0ZXJTdGF0ZScsXHJcbiAgLy8gJ2Nsb3NlQmx1ZXRvb3RoQWRhcHRlcicsXHJcbiAgLy8gJ3dyaXRlQkxFQ2hhcmFjdGVyaXN0aWNWYWx1ZScsXHJcbiAgLy8gJ3JlYWRCTEVDaGFyYWN0ZXJpc3RpY1ZhbHVlJyxcclxuICAvLyAnb25CTEVDb25uZWN0aW9uU3RhdGVDaGFuZ2UnLFxyXG4gIC8vICdvbkJMRUNoYXJhY3RlcmlzdGljVmFsdWVDaGFuZ2UnLFxyXG4gIC8vICdub3RpZnlCTEVDaGFyYWN0ZXJpc3RpY1ZhbHVlQ2hhbmdlJyxcclxuICAvLyAnZ2V0QkxFRGV2aWNlU2VydmljZXMnLFxyXG4gIC8vICdnZXRCTEVEZXZpY2VDaGFyYWN0ZXJpc3RpY3MnLFxyXG4gIC8vICdjcmVhdGVCTEVDb25uZWN0aW9uJyxcclxuICAvLyAnY2xvc2VCTEVDb25uZWN0aW9uJyxcclxuICAvLyAnb25CZWFjb25TZXJ2aWNlQ2hhbmdlJyxcclxuICAvLyAnb25CZWFjb25VcGRhdGUnLFxyXG4gIC8vICdnZXRCZWFjb25zJyxcclxuICAvLyAnc3RhcnRCZWFjb25EaXNjb3ZlcnknLFxyXG4gIC8vICdzdG9wQmVhY29uRGlzY292ZXJ5JyxcclxuICAvLyAnc2hvd05hdmlnYXRpb25CYXJMb2FkaW5nJyxcclxuICAvLyAnaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nJyxcclxuICAvLyAnc2V0VGFiQmFySXRlbScsXHJcbiAgLy8gJ3NldFRhYkJhclN0eWxlJyxcclxuICAvLyAnaGlkZVRhYkJhcicsXHJcbiAgLy8gJ3Nob3dUYWJCYXInLFxyXG4gIC8vICdzZXRUYWJCYXJCYWRnZScsXHJcbiAgLy8gJ3JlbW92ZVRhYkJhckJhZGdlJyxcclxuICAvLyAnc2hvd1RhYkJhclJlZERvdCcsXHJcbiAgLy8gJ2hpZGVUYWJCYXJSZWREb3QnLFxyXG4gIC8vICdzZXRCYWNrZ3JvdW5kQ29sb3InLFxyXG4gIC8vICdzZXRCYWNrZ3JvdW5kVGV4dFN0eWxlJyxcclxuICAvLyAnY2hvb3NlSW52b2ljZVRpdGxlJyxcclxuICAvLyAnYWRkVGVtcGxhdGUnLFxyXG4gIC8vICdkZWxldGVUZW1wbGF0ZScsXHJcbiAgLy8gJ2dldFRlbXBsYXRlTGlicmFyeUJ5SWQnLFxyXG4gIC8vICdnZXRUZW1wbGF0ZUxpYnJhcnlMaXN0JyxcclxuICAvLyAnZ2V0VGVtcGxhdGVMaXN0JyxcclxuICAvLyAnc2VuZFRlbXBsYXRlTWVzc2FnZScsXHJcbiAgLy8gJ3NldEVuYWJsZURlYnVnJyxcclxuICAvLyAnb25XaW5kb3dSZXNpemUnLFxyXG4gIC8vICdvZmZXaW5kb3dSZXNpemUnLFxyXG4gIC8vICdjcmVhdGVPZmZzY3JlZW5DYW52YXMnLFxyXG4gIC8vICd2aWJyYXRlJ1xyXG5dO1xyXG5cclxuLy8g5a2Y5Zyo5YW85a655oCn55qEIEFQSSDliJfooahcclxuLy8g5aS05p2h5bCP56iL5bqP6IeqMS4zNS4wK+aUr+aMgWNhbklVc2VzXHJcbmNvbnN0IGNhbklVc2VzID0gW1xyXG4gIC8vICdjcmVhdGVJbnRlcnNlY3Rpb25PYnNlcnZlcicsXHJcbiAgLy8gJ2dldFNhdmVkRmlsZUxpc3QnLFxyXG4gIC8vICdyZW1vdmVTYXZlZEZpbGUnLFxyXG4gIC8vICdoaWRlS2V5Ym9hcmQnLFxyXG4gIC8vICdnZXRJbWFnZUluZm8nLFxyXG4gIC8vICdjcmVhdGVWaWRlb0NvbnRleHQnLFxyXG4gIC8vICdvblNvY2tldE9wZW4nLFxyXG4gIC8vICdvblNvY2tldEVycm9yJyxcclxuICAvLyAnc2VuZFNvY2tldE1lc3NhZ2UnLFxyXG4gIC8vICdvblNvY2tldE1lc3NhZ2UnLFxyXG4gIC8vICdjbG9zZVNvY2tldCcsXHJcbiAgLy8gJ29uU29ja2V0Q2xvc2UnLFxyXG4gIC8vICdnZXRFeHRDb25maWcnLFxyXG4gIC8vICdnZXRFeHRDb25maWdTeW5jJyxcclxuICAvLyAnbmF2aWdhdGVUb01pbmlQcm9ncmFtJyxcclxuICAvLyAnbmF2aWdhdGVCYWNrTWluaVByb2dyYW0nLFxyXG4gIC8vICdjb21wcmVzc0ltYWdlJyxcclxuICAvLyAnY2hvb3NlTG9jYXRpb24nLFxyXG4gIC8vICdvcGVuRG9jdW1lbnQnLFxyXG4gIC8vICdvblVzZXJDYXB0dXJlU2NyZWVuJyxcclxuICAvLyAnZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlcicsXHJcbiAgLy8gJ3NldE5hdmlnYXRpb25CYXJDb2xvcicsXHJcbl07XHJcblxyXG4vLyDpnIDopoHlgZrovazmjaLnmoQgQVBJIOWIl+ihqFxyXG5jb25zdCBwcm90b2NvbHMgPSB7XHJcbiAgY2hvb3NlSW1hZ2U6IHtcclxuICAgIGFyZ3M6IHtcclxuICAgICAgc2l6ZVR5cGU6IGZhbHNlXHJcbiAgICB9XHJcbiAgfSxcclxuICBuYXZpZ2F0ZVRvLFxyXG4gIHJlZGlyZWN0VG8sXHJcbiAgcHJldmlld0ltYWdlLFxyXG4gIGdldFN5c3RlbUluZm8sXHJcbiAgZ2V0U3lzdGVtSW5mb1N5bmM6IGdldFN5c3RlbUluZm8sXHJcbiAgZ2V0VXNlclByb2ZpbGUsXHJcbiAgY29ubmVjdFNvY2tldDoge1xyXG4gICAgYXJnczoge1xyXG4gICAgICBtZXRob2Q6IGZhbHNlXHJcbiAgICB9XHJcbiAgfSxcclxuICBjaG9vc2VWaWRlbzoge1xyXG4gICAgYXJnczoge1xyXG4gICAgICBjYW1lcmE6IGZhbHNlXHJcbiAgICB9XHJcbiAgfSxcclxuICBzY2FuQ29kZToge1xyXG4gICAgYXJnczoge1xyXG4gICAgICBvbmx5RnJvbUNhbWVyYTogZmFsc2UsXHJcbiAgICAgIHNjYW5UeXBlOiBmYWxzZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgc3RhcnRBY2NlbGVyb21ldGVyOiB7XHJcbiAgICBhcmdzOiB7XHJcbiAgICAgIGludGVydmFsOiBmYWxzZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgc2hvd1RvYXN0OiB7XHJcbiAgICBhcmdzOiB7XHJcbiAgICAgIGltYWdlOiBmYWxzZSxcclxuICAgICAgbWFzazogZmFsc2VcclxuICAgIH1cclxuICB9LFxyXG4gIHNob3dMb2FkaW5nOiB7XHJcbiAgICBhcmdzOiB7XHJcbiAgICAgIG1hc2s6IGZhbHNlXHJcbiAgICB9XHJcbiAgfSxcclxuICBzaG93TW9kYWw6IHtcclxuICAgIGFyZ3M6IHtcclxuICAgICAgY2FuY2VsQ29sb3I6IGZhbHNlLFxyXG4gICAgICBjb25maXJtQ29sb3I6IGZhbHNlXHJcbiAgICB9XHJcbiAgfSxcclxuICBzaG93QWN0aW9uU2hlZXQ6IHtcclxuICAgIGFyZ3M6IHtcclxuICAgICAgaXRlbUNvbG9yOiBmYWxzZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbG9naW46IHtcclxuICAgIGFyZ3M6IHtcclxuICAgICAgc2NvcGVzOiBmYWxzZSxcclxuICAgICAgdGltZW91dDogZmFsc2VcclxuICAgIH1cclxuICB9LFxyXG4gIGdldFVzZXJJbmZvOiB7XHJcbiAgICBhcmdzOiB7XHJcbiAgICAgIGxhbmc6IGZhbHNlLFxyXG4gICAgICB0aW1lb3V0OiBmYWxzZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmVxdWVzdFBheW1lbnQ6IHtcclxuICAgIG5hbWU6IHR0LnBheSA/ICdwYXknIDogJ3JlcXVlc3RQYXltZW50JyxcclxuICAgIGFyZ3M6IHtcclxuICAgICAgb3JkZXJJbmZvOiB0dC5wYXkgPyAnb3JkZXJJbmZvJyA6ICdkYXRhJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgZ2V0RmlsZUluZm86IHtcclxuICAgIGFyZ3M6IHtcclxuICAgICAgZGlnZXN0QWxnb3JpdGhtOiBmYWxzZVxyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IENBTExCQUNLUyA9IFsnc3VjY2VzcycsICdmYWlsJywgJ2NhbmNlbCcsICdjb21wbGV0ZSddO1xyXG5cclxuZnVuY3Rpb24gcHJvY2Vzc0NhbGxiYWNrIChtZXRob2ROYW1lLCBtZXRob2QsIHJldHVyblZhbHVlKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIChyZXMpIHtcclxuICAgIHJldHVybiBtZXRob2QocHJvY2Vzc1JldHVyblZhbHVlKG1ldGhvZE5hbWUsIHJlcywgcmV0dXJuVmFsdWUpKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcHJvY2Vzc0FyZ3MgKG1ldGhvZE5hbWUsIGZyb21BcmdzLCBhcmdzT3B0aW9uID0ge30sIHJldHVyblZhbHVlID0ge30sIGtlZXBGcm9tQXJncyA9IGZhbHNlKSB7XHJcbiAgaWYgKGlzUGxhaW5PYmplY3QoZnJvbUFyZ3MpKSB7IC8vIOS4gOiIrCBhcGkg55qE5Y+C5pWw6Kej5p6QXHJcbiAgICBjb25zdCB0b0FyZ3MgPSBrZWVwRnJvbUFyZ3MgPT09IHRydWUgPyBmcm9tQXJncyA6IHt9OyAvLyByZXR1cm5WYWx1ZSDkuLogZmFsc2Ug5pe277yM6K+05piO5piv5qC85byP5YyW6L+U5Zue5YC877yM55u05o6l5Zyo6L+U5Zue5YC85a+56LGh5LiK5L+u5pS56LWL5YC8XHJcbiAgICBpZiAoaXNGbihhcmdzT3B0aW9uKSkge1xyXG4gICAgICBhcmdzT3B0aW9uID0gYXJnc09wdGlvbihmcm9tQXJncywgdG9BcmdzKSB8fCB7fTtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3Qga2V5IGluIGZyb21BcmdzKSB7XHJcbiAgICAgIGlmIChoYXNPd24oYXJnc09wdGlvbiwga2V5KSkge1xyXG4gICAgICAgIGxldCBrZXlPcHRpb24gPSBhcmdzT3B0aW9uW2tleV07XHJcbiAgICAgICAgaWYgKGlzRm4oa2V5T3B0aW9uKSkge1xyXG4gICAgICAgICAga2V5T3B0aW9uID0ga2V5T3B0aW9uKGZyb21BcmdzW2tleV0sIGZyb21BcmdzLCB0b0FyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWtleU9wdGlvbikgeyAvLyDkuI3mlK/mjIHnmoTlj4LmlbBcclxuICAgICAgICAgIGNvbnNvbGUud2FybihgVGhlICcke21ldGhvZE5hbWV9JyBtZXRob2Qgb2YgcGxhdGZvcm0gJ+WktOadoeWwj+eoi+W6jycgZG9lcyBub3Qgc3VwcG9ydCBvcHRpb24gJyR7a2V5fSdgKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGlzU3RyKGtleU9wdGlvbikpIHsgLy8g6YeN5YaZ5Y+C5pWwIGtleVxyXG4gICAgICAgICAgdG9BcmdzW2tleU9wdGlvbl0gPSBmcm9tQXJnc1trZXldO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdChrZXlPcHRpb24pKSB7IC8vIHtuYW1lOm5ld05hbWUsdmFsdWU6dmFsdWV95Y+v6YeN5paw5oyH5a6a5Y+C5pWwIGtleTp2YWx1ZVxyXG4gICAgICAgICAgdG9BcmdzW2tleU9wdGlvbi5uYW1lID8ga2V5T3B0aW9uLm5hbWUgOiBrZXldID0ga2V5T3B0aW9uLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChDQUxMQkFDS1MuaW5kZXhPZihrZXkpICE9PSAtMSkge1xyXG4gICAgICAgIGlmIChpc0ZuKGZyb21BcmdzW2tleV0pKSB7XHJcbiAgICAgICAgICB0b0FyZ3Nba2V5XSA9IHByb2Nlc3NDYWxsYmFjayhtZXRob2ROYW1lLCBmcm9tQXJnc1trZXldLCByZXR1cm5WYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICgha2VlcEZyb21BcmdzKSB7XHJcbiAgICAgICAgICB0b0FyZ3Nba2V5XSA9IGZyb21BcmdzW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG9BcmdzXHJcbiAgfSBlbHNlIGlmIChpc0ZuKGZyb21BcmdzKSkge1xyXG4gICAgZnJvbUFyZ3MgPSBwcm9jZXNzQ2FsbGJhY2sobWV0aG9kTmFtZSwgZnJvbUFyZ3MsIHJldHVyblZhbHVlKTtcclxuICB9XHJcbiAgcmV0dXJuIGZyb21BcmdzXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2Nlc3NSZXR1cm5WYWx1ZSAobWV0aG9kTmFtZSwgcmVzLCByZXR1cm5WYWx1ZSwga2VlcFJldHVyblZhbHVlID0gZmFsc2UpIHtcclxuICBpZiAoaXNGbihwcm90b2NvbHMucmV0dXJuVmFsdWUpKSB7IC8vIOWkhOeQhumAmueUqCByZXR1cm5WYWx1ZVxyXG4gICAgcmVzID0gcHJvdG9jb2xzLnJldHVyblZhbHVlKG1ldGhvZE5hbWUsIHJlcyk7XHJcbiAgfVxyXG4gIHJldHVybiBwcm9jZXNzQXJncyhtZXRob2ROYW1lLCByZXMsIHJldHVyblZhbHVlLCB7fSwga2VlcFJldHVyblZhbHVlKVxyXG59XHJcblxyXG5mdW5jdGlvbiB3cmFwcGVyIChtZXRob2ROYW1lLCBtZXRob2QpIHtcclxuICBpZiAoaGFzT3duKHByb3RvY29scywgbWV0aG9kTmFtZSkpIHtcclxuICAgIGNvbnN0IHByb3RvY29sID0gcHJvdG9jb2xzW21ldGhvZE5hbWVdO1xyXG4gICAgaWYgKCFwcm90b2NvbCkgeyAvLyDmmoLkuI3mlK/mjIHnmoQgYXBpXHJcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihgUGxhdGZvcm0gJ+WktOadoeWwj+eoi+W6jycgZG9lcyBub3Qgc3VwcG9ydCAnJHttZXRob2ROYW1lfScuYCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmdW5jdGlvbiAoYXJnMSwgYXJnMikgeyAvLyDnm67liY0gYXBpIOacgOWkmuS4pOS4quWPguaVsFxyXG4gICAgICBsZXQgb3B0aW9ucyA9IHByb3RvY29sO1xyXG4gICAgICBpZiAoaXNGbihwcm90b2NvbCkpIHtcclxuICAgICAgICBvcHRpb25zID0gcHJvdG9jb2woYXJnMSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGFyZzEgPSBwcm9jZXNzQXJncyhtZXRob2ROYW1lLCBhcmcxLCBvcHRpb25zLmFyZ3MsIG9wdGlvbnMucmV0dXJuVmFsdWUpO1xyXG5cclxuICAgICAgY29uc3QgYXJncyA9IFthcmcxXTtcclxuICAgICAgaWYgKHR5cGVvZiBhcmcyICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIGFyZ3MucHVzaChhcmcyKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXNGbihvcHRpb25zLm5hbWUpKSB7XHJcbiAgICAgICAgbWV0aG9kTmFtZSA9IG9wdGlvbnMubmFtZShhcmcxKTtcclxuICAgICAgfSBlbHNlIGlmIChpc1N0cihvcHRpb25zLm5hbWUpKSB7XHJcbiAgICAgICAgbWV0aG9kTmFtZSA9IG9wdGlvbnMubmFtZTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCByZXR1cm5WYWx1ZSA9IHR0W21ldGhvZE5hbWVdLmFwcGx5KHR0LCBhcmdzKTtcclxuICAgICAgaWYgKGlzU3luY0FwaShtZXRob2ROYW1lKSkgeyAvLyDlkIzmraUgYXBpXHJcbiAgICAgICAgcmV0dXJuIHByb2Nlc3NSZXR1cm5WYWx1ZShtZXRob2ROYW1lLCByZXR1cm5WYWx1ZSwgb3B0aW9ucy5yZXR1cm5WYWx1ZSwgaXNDb250ZXh0QXBpKG1ldGhvZE5hbWUpKVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXR1cm5WYWx1ZVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gbWV0aG9kXHJcbn1cclxuXHJcbmNvbnN0IHRvZG9BcGlzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuXHJcbmNvbnN0IFRPRE9TID0gW1xyXG4gICdvblRhYkJhck1pZEJ1dHRvblRhcCcsXHJcbiAgJ3N1YnNjcmliZVB1c2gnLFxyXG4gICd1bnN1YnNjcmliZVB1c2gnLFxyXG4gICdvblB1c2gnLFxyXG4gICdvZmZQdXNoJyxcclxuICAnc2hhcmUnXHJcbl07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUb2RvQXBpIChuYW1lKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIHRvZG9BcGkgKHtcclxuICAgIGZhaWwsXHJcbiAgICBjb21wbGV0ZVxyXG4gIH0pIHtcclxuICAgIGNvbnN0IHJlcyA9IHtcclxuICAgICAgZXJyTXNnOiBgJHtuYW1lfTpmYWlsIG1ldGhvZCAnJHtuYW1lfScgbm90IHN1cHBvcnRlZGBcclxuICAgIH07XHJcbiAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmVzKTtcclxuICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgfVxyXG59XHJcblxyXG5UT0RPUy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgdG9kb0FwaXNbbmFtZV0gPSBjcmVhdGVUb2RvQXBpKG5hbWUpO1xyXG59KTtcclxuXHJcbnZhciBwcm92aWRlcnMgPSB7XHJcbiAgb2F1dGg6IFsndG91dGlhbyddLFxyXG4gIHNoYXJlOiBbJ3RvdXRpYW8nXSxcclxuICBwYXltZW50OiBbJ3RvdXRpYW8nXSxcclxuICBwdXNoOiBbJ3RvdXRpYW8nXVxyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0UHJvdmlkZXIgKHtcclxuICBzZXJ2aWNlLFxyXG4gIHN1Y2Nlc3MsXHJcbiAgZmFpbCxcclxuICBjb21wbGV0ZVxyXG59KSB7XHJcbiAgbGV0IHJlcyA9IGZhbHNlO1xyXG4gIGlmIChwcm92aWRlcnNbc2VydmljZV0pIHtcclxuICAgIHJlcyA9IHtcclxuICAgICAgZXJyTXNnOiAnZ2V0UHJvdmlkZXI6b2snLFxyXG4gICAgICBzZXJ2aWNlLFxyXG4gICAgICBwcm92aWRlcjogcHJvdmlkZXJzW3NlcnZpY2VdXHJcbiAgICB9O1xyXG4gICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHJlcyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcyA9IHtcclxuICAgICAgZXJyTXNnOiAnZ2V0UHJvdmlkZXI6ZmFpbCBzZXJ2aWNlIG5vdCBmb3VuZCdcclxuICAgIH07XHJcbiAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmVzKTtcclxuICB9XHJcbiAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxufVxyXG5cclxudmFyIGV4dHJhQXBpID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xyXG4gIF9fcHJvdG9fXzogbnVsbCxcclxuICBnZXRQcm92aWRlcjogZ2V0UHJvdmlkZXJcclxufSk7XHJcblxyXG5jb25zdCBnZXRFbWl0dGVyID0gKGZ1bmN0aW9uICgpIHtcclxuICBsZXQgRW1pdHRlcjtcclxuICByZXR1cm4gZnVuY3Rpb24gZ2V0VW5pRW1pdHRlciAoKSB7XHJcbiAgICBpZiAoIUVtaXR0ZXIpIHtcclxuICAgICAgRW1pdHRlciA9IG5ldyBWdWUoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBFbWl0dGVyXHJcbiAgfVxyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gYXBwbHkgKGN0eCwgbWV0aG9kLCBhcmdzKSB7XHJcbiAgcmV0dXJuIGN0eFttZXRob2RdLmFwcGx5KGN0eCwgYXJncylcclxufVxyXG5cclxuZnVuY3Rpb24gJG9uICgpIHtcclxuICByZXR1cm4gYXBwbHkoZ2V0RW1pdHRlcigpLCAnJG9uJywgWy4uLmFyZ3VtZW50c10pXHJcbn1cclxuZnVuY3Rpb24gJG9mZiAoKSB7XHJcbiAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRvZmYnLCBbLi4uYXJndW1lbnRzXSlcclxufVxyXG5mdW5jdGlvbiAkb25jZSAoKSB7XHJcbiAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRvbmNlJywgWy4uLmFyZ3VtZW50c10pXHJcbn1cclxuZnVuY3Rpb24gJGVtaXQgKCkge1xyXG4gIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckZW1pdCcsIFsuLi5hcmd1bWVudHNdKVxyXG59XHJcblxyXG52YXIgZXZlbnRBcGkgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XHJcbiAgX19wcm90b19fOiBudWxsLFxyXG4gICRvbjogJG9uLFxyXG4gICRvZmY6ICRvZmYsXHJcbiAgJG9uY2U6ICRvbmNlLFxyXG4gICRlbWl0OiAkZW1pdFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU1lZGlhUXVlcnlPYnNlcnZlciAoKSB7XHJcbiAgY29uc3QgbWVkaWFRdWVyeU9ic2VydmVyID0ge307XHJcbiAgY29uc3Qge1xyXG4gICAgd2luZG93V2lkdGgsXHJcbiAgICB3aW5kb3dIZWlnaHRcclxuICB9ID0gdHQuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuXHJcbiAgY29uc3Qgb3JpZW50YXRpb24gPSB3aW5kb3dXaWR0aCA8IHdpbmRvd0hlaWdodCA/ICdwb3J0cmFpdCcgOiAnbGFuZHNjYXBlJztcclxuXHJcbiAgbWVkaWFRdWVyeU9ic2VydmVyLm9ic2VydmUgPSAob3B0aW9ucywgY2FsbGJhY2spID0+IHtcclxuICAgIGxldCBtYXRjaGVzID0gdHJ1ZTtcclxuICAgIGZvciAoY29uc3QgaXRlbSBpbiBvcHRpb25zKSB7XHJcbiAgICAgIGNvbnN0IGl0ZW1WYWx1ZSA9IGl0ZW0gPT09ICdvcmllbnRhdGlvbicgPyBvcHRpb25zW2l0ZW1dIDogTnVtYmVyKG9wdGlvbnNbaXRlbV0pO1xyXG4gICAgICBpZiAob3B0aW9uc1tpdGVtXSAhPT0gJycpIHtcclxuICAgICAgICBpZiAoaXRlbSA9PT0gJ3dpZHRoJykge1xyXG4gICAgICAgICAgaWYgKGl0ZW1WYWx1ZSA9PT0gd2luZG93V2lkdGgpIHtcclxuICAgICAgICAgICAgbWF0Y2hlcyA9IHRydWU7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtYXRjaGVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKG1hdGNoZXMpO1xyXG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hlc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXRlbSA9PT0gJ21pbldpZHRoJykge1xyXG4gICAgICAgICAgaWYgKHdpbmRvd1dpZHRoID49IGl0ZW1WYWx1ZSkge1xyXG4gICAgICAgICAgICBtYXRjaGVzID0gdHJ1ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1hdGNoZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2FsbGJhY2sobWF0Y2hlcyk7XHJcbiAgICAgICAgICAgIHJldHVybiBtYXRjaGVzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpdGVtID09PSAnbWF4V2lkdGgnKSB7XHJcbiAgICAgICAgICBpZiAod2luZG93V2lkdGggPD0gaXRlbVZhbHVlKSB7XHJcbiAgICAgICAgICAgIG1hdGNoZXMgPSB0cnVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWF0Y2hlcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYWxsYmFjayhtYXRjaGVzKTtcclxuICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXNcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpdGVtID09PSAnaGVpZ2h0Jykge1xyXG4gICAgICAgICAgaWYgKGl0ZW1WYWx1ZSA9PT0gd2luZG93SGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIG1hdGNoZXMgPSB0cnVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWF0Y2hlcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYWxsYmFjayhtYXRjaGVzKTtcclxuICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXNcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGl0ZW0gPT09ICdtaW5IZWlnaHQnKSB7XHJcbiAgICAgICAgICBpZiAod2luZG93SGVpZ2h0ID49IGl0ZW1WYWx1ZSkge1xyXG4gICAgICAgICAgICBtYXRjaGVzID0gdHJ1ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1hdGNoZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2FsbGJhY2sobWF0Y2hlcyk7XHJcbiAgICAgICAgICAgIHJldHVybiBtYXRjaGVzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpdGVtID09PSAnbWF4SGVpZ2h0Jykge1xyXG4gICAgICAgICAgaWYgKHdpbmRvd0hlaWdodCA8PSBpdGVtVmFsdWUpIHtcclxuICAgICAgICAgICAgbWF0Y2hlcyA9IHRydWU7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtYXRjaGVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKG1hdGNoZXMpO1xyXG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hlc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGl0ZW0gPT09ICdvcmllbnRhdGlvbicpIHtcclxuICAgICAgICAgIGlmIChvcHRpb25zW2l0ZW1dID09PSBvcmllbnRhdGlvbikge1xyXG4gICAgICAgICAgICBtYXRjaGVzID0gdHJ1ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1hdGNoZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2FsbGJhY2sobWF0Y2hlcyk7XHJcbiAgICAgICAgICAgIHJldHVybiBtYXRjaGVzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjYWxsYmFjayhtYXRjaGVzKTtcclxuXHJcbiAgICByZXR1cm4gbWF0Y2hlc1xyXG4gIH07XHJcblxyXG4gIG1lZGlhUXVlcnlPYnNlcnZlci5kaXNjb25uZWN0ID0gKCkgPT4ge1xyXG4gIH07XHJcblxyXG4gIHJldHVybiBtZWRpYVF1ZXJ5T2JzZXJ2ZXJcclxufVxyXG5cclxudmFyIGFwaSA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcclxuICBfX3Byb3RvX186IG51bGwsXHJcbiAgY3JlYXRlTWVkaWFRdWVyeU9ic2VydmVyOiBjcmVhdGVNZWRpYVF1ZXJ5T2JzZXJ2ZXJcclxufSk7XHJcblxyXG5jb25zdCBNUFBhZ2UgPSBQYWdlO1xyXG5jb25zdCBNUENvbXBvbmVudCA9IENvbXBvbmVudDtcclxuXHJcbmNvbnN0IGN1c3RvbWl6ZVJFID0gLzovZztcclxuXHJcbmNvbnN0IGN1c3RvbWl6ZSA9IGNhY2hlZCgoc3RyKSA9PiB7XHJcbiAgcmV0dXJuIGNhbWVsaXplKHN0ci5yZXBsYWNlKGN1c3RvbWl6ZVJFLCAnLScpKVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGluaXRUcmlnZ2VyRXZlbnQgKG1wSW5zdGFuY2UpIHtcclxuICBjb25zdCBvbGRUcmlnZ2VyRXZlbnQgPSBtcEluc3RhbmNlLnRyaWdnZXJFdmVudDtcclxuICBtcEluc3RhbmNlLnRyaWdnZXJFdmVudCA9IGZ1bmN0aW9uIChldmVudCwgLi4uYXJncykge1xyXG4gICAgcmV0dXJuIG9sZFRyaWdnZXJFdmVudC5hcHBseShtcEluc3RhbmNlLCBbY3VzdG9taXplKGV2ZW50KSwgLi4uYXJnc10pXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdEhvb2sgKG5hbWUsIG9wdGlvbnMpIHtcclxuICBjb25zdCBvbGRIb29rID0gb3B0aW9uc1tuYW1lXTtcclxuICBpZiAoIW9sZEhvb2spIHtcclxuICAgIG9wdGlvbnNbbmFtZV0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGluaXRUcmlnZ2VyRXZlbnQodGhpcyk7XHJcbiAgICB9O1xyXG4gIH0gZWxzZSB7XHJcbiAgICBvcHRpb25zW25hbWVdID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcclxuICAgICAgaW5pdFRyaWdnZXJFdmVudCh0aGlzKTtcclxuICAgICAgcmV0dXJuIG9sZEhvb2suYXBwbHkodGhpcywgYXJncylcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbmlmICghTVBQYWdlLl9fJHdyYXBwZXJlZCkge1xyXG4gIE1QUGFnZS5fXyR3cmFwcGVyZWQgPSB0cnVlO1xyXG4gIFBhZ2UgPSBmdW5jdGlvbiAob3B0aW9ucyA9IHt9KSB7XHJcbiAgICBpbml0SG9vaygnb25Mb2FkJywgb3B0aW9ucyk7XHJcbiAgICByZXR1cm4gTVBQYWdlKG9wdGlvbnMpXHJcbiAgfTtcclxuICBQYWdlLmFmdGVyID0gTVBQYWdlLmFmdGVyO1xyXG5cclxuICBDb21wb25lbnQgPSBmdW5jdGlvbiAob3B0aW9ucyA9IHt9KSB7XHJcbiAgICBpbml0SG9vaygnY3JlYXRlZCcsIG9wdGlvbnMpO1xyXG4gICAgcmV0dXJuIE1QQ29tcG9uZW50KG9wdGlvbnMpXHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgUEFHRV9FVkVOVF9IT09LUyA9IFtcclxuICAnb25QdWxsRG93blJlZnJlc2gnLFxyXG4gICdvblJlYWNoQm90dG9tJyxcclxuICAnb25BZGRUb0Zhdm9yaXRlcycsXHJcbiAgJ29uU2hhcmVUaW1lbGluZScsXHJcbiAgJ29uU2hhcmVBcHBNZXNzYWdlJyxcclxuICAnb25QYWdlU2Nyb2xsJyxcclxuICAnb25SZXNpemUnLFxyXG4gICdvblRhYkl0ZW1UYXAnXHJcbl07XHJcblxyXG5mdW5jdGlvbiBpbml0TW9ja3MgKHZtLCBtb2Nrcykge1xyXG4gIGNvbnN0IG1wSW5zdGFuY2UgPSB2bS4kbXBbdm0ubXBUeXBlXTtcclxuICBtb2Nrcy5mb3JFYWNoKG1vY2sgPT4ge1xyXG4gICAgaWYgKGhhc093bihtcEluc3RhbmNlLCBtb2NrKSkge1xyXG4gICAgICB2bVttb2NrXSA9IG1wSW5zdGFuY2VbbW9ja107XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhc0hvb2sgKGhvb2ssIHZ1ZU9wdGlvbnMpIHtcclxuICBpZiAoIXZ1ZU9wdGlvbnMpIHtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBpZiAoVnVlLm9wdGlvbnMgJiYgQXJyYXkuaXNBcnJheShWdWUub3B0aW9uc1tob29rXSkpIHtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICB2dWVPcHRpb25zID0gdnVlT3B0aW9ucy5kZWZhdWx0IHx8IHZ1ZU9wdGlvbnM7XHJcblxyXG4gIGlmIChpc0ZuKHZ1ZU9wdGlvbnMpKSB7XHJcbiAgICBpZiAoaXNGbih2dWVPcHRpb25zLmV4dGVuZE9wdGlvbnNbaG9va10pKSB7XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICBpZiAodnVlT3B0aW9ucy5zdXBlciAmJlxyXG4gICAgICB2dWVPcHRpb25zLnN1cGVyLm9wdGlvbnMgJiZcclxuICAgICAgQXJyYXkuaXNBcnJheSh2dWVPcHRpb25zLnN1cGVyLm9wdGlvbnNbaG9va10pKSB7XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcblxyXG4gIGlmIChpc0ZuKHZ1ZU9wdGlvbnNbaG9va10pKSB7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuICBjb25zdCBtaXhpbnMgPSB2dWVPcHRpb25zLm1peGlucztcclxuICBpZiAoQXJyYXkuaXNBcnJheShtaXhpbnMpKSB7XHJcbiAgICByZXR1cm4gISFtaXhpbnMuZmluZChtaXhpbiA9PiBoYXNIb29rKGhvb2ssIG1peGluKSlcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRIb29rcyAobXBPcHRpb25zLCBob29rcywgdnVlT3B0aW9ucykge1xyXG4gIGhvb2tzLmZvckVhY2goaG9vayA9PiB7XHJcbiAgICBpZiAoaGFzSG9vayhob29rLCB2dWVPcHRpb25zKSkge1xyXG4gICAgICBtcE9wdGlvbnNbaG9va10gPSBmdW5jdGlvbiAoYXJncykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiR2bSAmJiB0aGlzLiR2bS5fX2NhbGxfaG9vayhob29rLCBhcmdzKVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0VnVlQ29tcG9uZW50IChWdWUsIHZ1ZU9wdGlvbnMpIHtcclxuICB2dWVPcHRpb25zID0gdnVlT3B0aW9ucy5kZWZhdWx0IHx8IHZ1ZU9wdGlvbnM7XHJcbiAgbGV0IFZ1ZUNvbXBvbmVudDtcclxuICBpZiAoaXNGbih2dWVPcHRpb25zKSkge1xyXG4gICAgVnVlQ29tcG9uZW50ID0gdnVlT3B0aW9ucztcclxuICB9IGVsc2Uge1xyXG4gICAgVnVlQ29tcG9uZW50ID0gVnVlLmV4dGVuZCh2dWVPcHRpb25zKTtcclxuICB9XHJcbiAgdnVlT3B0aW9ucyA9IFZ1ZUNvbXBvbmVudC5vcHRpb25zO1xyXG4gIHJldHVybiBbVnVlQ29tcG9uZW50LCB2dWVPcHRpb25zXVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0U2xvdHMgKHZtLCB2dWVTbG90cykge1xyXG4gIGlmIChBcnJheS5pc0FycmF5KHZ1ZVNsb3RzKSAmJiB2dWVTbG90cy5sZW5ndGgpIHtcclxuICAgIGNvbnN0ICRzbG90cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcbiAgICB2dWVTbG90cy5mb3JFYWNoKHNsb3ROYW1lID0+IHtcclxuICAgICAgJHNsb3RzW3Nsb3ROYW1lXSA9IHRydWU7XHJcbiAgICB9KTtcclxuICAgIHZtLiRzY29wZWRTbG90cyA9IHZtLiRzbG90cyA9ICRzbG90cztcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRWdWVJZHMgKHZ1ZUlkcywgbXBJbnN0YW5jZSkge1xyXG4gIHZ1ZUlkcyA9ICh2dWVJZHMgfHwgJycpLnNwbGl0KCcsJyk7XHJcbiAgY29uc3QgbGVuID0gdnVlSWRzLmxlbmd0aDtcclxuXHJcbiAgaWYgKGxlbiA9PT0gMSkge1xyXG4gICAgbXBJbnN0YW5jZS5fJHZ1ZUlkID0gdnVlSWRzWzBdO1xyXG4gIH0gZWxzZSBpZiAobGVuID09PSAyKSB7XHJcbiAgICBtcEluc3RhbmNlLl8kdnVlSWQgPSB2dWVJZHNbMF07XHJcbiAgICBtcEluc3RhbmNlLl8kdnVlUGlkID0gdnVlSWRzWzFdO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdERhdGEgKHZ1ZU9wdGlvbnMsIGNvbnRleHQpIHtcclxuICBsZXQgZGF0YSA9IHZ1ZU9wdGlvbnMuZGF0YSB8fCB7fTtcclxuICBjb25zdCBtZXRob2RzID0gdnVlT3B0aW9ucy5tZXRob2RzIHx8IHt9O1xyXG5cclxuICBpZiAodHlwZW9mIGRhdGEgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRhdGEgPSBkYXRhLmNhbGwoY29udGV4dCk7IC8vIOaUr+aMgSBWdWUucHJvdG90eXBlIOS4iuaMgueahOaVsOaNrlxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuVlVFX0FQUF9ERUJVRykge1xyXG4gICAgICAgIGNvbnNvbGUud2Fybign5qC55o2uIFZ1ZSDnmoQgZGF0YSDlh73mlbDliJ3lp4vljJblsI/nqIvluo8gZGF0YSDlpLHotKXvvIzor7flsL3ph4/noa7kv50gZGF0YSDlh73mlbDkuK3kuI3orr/pl64gdm0g5a+56LGh77yM5ZCm5YiZ5Y+v6IO95b2x5ZON6aaW5qyh5pWw5o2u5riy5p+T6YCf5bqm44CCJywgZGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8g5a+5IGRhdGEg5qC85byP5YyWXHJcbiAgICAgIGRhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgIH0gY2F0Y2ggKGUpIHt9XHJcbiAgfVxyXG5cclxuICBpZiAoIWlzUGxhaW5PYmplY3QoZGF0YSkpIHtcclxuICAgIGRhdGEgPSB7fTtcclxuICB9XHJcblxyXG4gIE9iamVjdC5rZXlzKG1ldGhvZHMpLmZvckVhY2gobWV0aG9kTmFtZSA9PiB7XHJcbiAgICBpZiAoY29udGV4dC5fX2xpZmVjeWNsZV9ob29rc19fLmluZGV4T2YobWV0aG9kTmFtZSkgPT09IC0xICYmICFoYXNPd24oZGF0YSwgbWV0aG9kTmFtZSkpIHtcclxuICAgICAgZGF0YVttZXRob2ROYW1lXSA9IG1ldGhvZHNbbWV0aG9kTmFtZV07XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBkYXRhXHJcbn1cclxuXHJcbmNvbnN0IFBST1BfVFlQRVMgPSBbU3RyaW5nLCBOdW1iZXIsIEJvb2xlYW4sIE9iamVjdCwgQXJyYXksIG51bGxdO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIgKG5hbWUpIHtcclxuICByZXR1cm4gZnVuY3Rpb24gb2JzZXJ2ZXIgKG5ld1ZhbCwgb2xkVmFsKSB7XHJcbiAgICBpZiAodGhpcy4kdm0pIHtcclxuICAgICAgdGhpcy4kdm1bbmFtZV0gPSBuZXdWYWw7IC8vIOS4uuS6huinpuWPkeWFtuS7lumdniByZW5kZXIgd2F0Y2hlclxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdEJlaGF2aW9ycyAodnVlT3B0aW9ucywgaW5pdEJlaGF2aW9yKSB7XHJcbiAgY29uc3QgdnVlQmVoYXZpb3JzID0gdnVlT3B0aW9ucy5iZWhhdmlvcnM7XHJcbiAgY29uc3QgdnVlRXh0ZW5kcyA9IHZ1ZU9wdGlvbnMuZXh0ZW5kcztcclxuICBjb25zdCB2dWVNaXhpbnMgPSB2dWVPcHRpb25zLm1peGlucztcclxuXHJcbiAgbGV0IHZ1ZVByb3BzID0gdnVlT3B0aW9ucy5wcm9wcztcclxuXHJcbiAgaWYgKCF2dWVQcm9wcykge1xyXG4gICAgdnVlT3B0aW9ucy5wcm9wcyA9IHZ1ZVByb3BzID0gW107XHJcbiAgfVxyXG5cclxuICBjb25zdCBiZWhhdmlvcnMgPSBbXTtcclxuICBpZiAoQXJyYXkuaXNBcnJheSh2dWVCZWhhdmlvcnMpKSB7XHJcbiAgICB2dWVCZWhhdmlvcnMuZm9yRWFjaChiZWhhdmlvciA9PiB7XHJcbiAgICAgIGJlaGF2aW9ycy5wdXNoKGJlaGF2aW9yLnJlcGxhY2UoJ3VuaTovLycsIGAke1widHRcIn06Ly9gKSk7XHJcbiAgICAgIGlmIChiZWhhdmlvciA9PT0gJ3VuaTovL2Zvcm0tZmllbGQnKSB7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodnVlUHJvcHMpKSB7XHJcbiAgICAgICAgICB2dWVQcm9wcy5wdXNoKCduYW1lJyk7XHJcbiAgICAgICAgICB2dWVQcm9wcy5wdXNoKCd2YWx1ZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB2dWVQcm9wcy5uYW1lID0ge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcnXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgdnVlUHJvcHMudmFsdWUgPSB7XHJcbiAgICAgICAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlciwgQm9vbGVhbiwgQXJyYXksIE9iamVjdCwgRGF0ZV0sXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcnXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGlmIChpc1BsYWluT2JqZWN0KHZ1ZUV4dGVuZHMpICYmIHZ1ZUV4dGVuZHMucHJvcHMpIHtcclxuICAgIGJlaGF2aW9ycy5wdXNoKFxyXG4gICAgICBpbml0QmVoYXZpb3Ioe1xyXG4gICAgICAgIHByb3BlcnRpZXM6IGluaXRQcm9wZXJ0aWVzKHZ1ZUV4dGVuZHMucHJvcHMsIHRydWUpXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuICBpZiAoQXJyYXkuaXNBcnJheSh2dWVNaXhpbnMpKSB7XHJcbiAgICB2dWVNaXhpbnMuZm9yRWFjaCh2dWVNaXhpbiA9PiB7XHJcbiAgICAgIGlmIChpc1BsYWluT2JqZWN0KHZ1ZU1peGluKSAmJiB2dWVNaXhpbi5wcm9wcykge1xyXG4gICAgICAgIGJlaGF2aW9ycy5wdXNoKFxyXG4gICAgICAgICAgaW5pdEJlaGF2aW9yKHtcclxuICAgICAgICAgICAgcHJvcGVydGllczogaW5pdFByb3BlcnRpZXModnVlTWl4aW4ucHJvcHMsIHRydWUpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICByZXR1cm4gYmVoYXZpb3JzXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlUHJvcFR5cGUgKGtleSwgdHlwZSwgZGVmYXVsdFZhbHVlLCBmaWxlKSB7XHJcbiAgLy8gW1N0cmluZ109PlN0cmluZ1xyXG4gIGlmIChBcnJheS5pc0FycmF5KHR5cGUpICYmIHR5cGUubGVuZ3RoID09PSAxKSB7XHJcbiAgICByZXR1cm4gdHlwZVswXVxyXG4gIH1cclxuICByZXR1cm4gdHlwZVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0UHJvcGVydGllcyAocHJvcHMsIGlzQmVoYXZpb3IgPSBmYWxzZSwgZmlsZSA9ICcnKSB7XHJcbiAgY29uc3QgcHJvcGVydGllcyA9IHt9O1xyXG4gIGlmICghaXNCZWhhdmlvcikge1xyXG4gICAgcHJvcGVydGllcy52dWVJZCA9IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB2YWx1ZTogJydcclxuICAgIH07XHJcbiAgICAvLyDnlKjkuo7lrZfoioLot7PliqjlsI/nqIvluo/mqKHmi5/mir3osaHoioLngrlcclxuICAgIHByb3BlcnRpZXMuZ2VuZXJpYyA9IHtcclxuICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICB2YWx1ZTogbnVsbFxyXG4gICAgfTtcclxuICAgIHByb3BlcnRpZXMudnVlU2xvdHMgPSB7IC8vIOWwj+eoi+W6j+S4jeiDveebtOaOpeWumuS5iSAkc2xvdHMg55qEIHByb3Bz77yM5omA5Lul6YCa6L+HIHZ1ZVNsb3RzIOi9rOaNouWIsCAkc2xvdHNcclxuICAgICAgdHlwZTogbnVsbCxcclxuICAgICAgdmFsdWU6IFtdLFxyXG4gICAgICBvYnNlcnZlcjogZnVuY3Rpb24gKG5ld1ZhbCwgb2xkVmFsKSB7XHJcbiAgICAgICAgY29uc3QgJHNsb3RzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICAgICAgICBuZXdWYWwuZm9yRWFjaChzbG90TmFtZSA9PiB7XHJcbiAgICAgICAgICAkc2xvdHNbc2xvdE5hbWVdID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgJHNsb3RzXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG4gIGlmIChBcnJheS5pc0FycmF5KHByb3BzKSkgeyAvLyBbJ3RpdGxlJ11cclxuICAgIHByb3BzLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgcHJvcGVydGllc1trZXldID0ge1xyXG4gICAgICAgIHR5cGU6IG51bGwsXHJcbiAgICAgICAgb2JzZXJ2ZXI6IGNyZWF0ZU9ic2VydmVyKGtleSlcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdChwcm9wcykpIHsgLy8ge3RpdGxlOnt0eXBlOlN0cmluZyxkZWZhdWx0OicnfSxjb250ZW50OlN0cmluZ31cclxuICAgIE9iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgIGNvbnN0IG9wdHMgPSBwcm9wc1trZXldO1xyXG4gICAgICBpZiAoaXNQbGFpbk9iamVjdChvcHRzKSkgeyAvLyB0aXRsZTp7dHlwZTpTdHJpbmcsZGVmYXVsdDonJ31cclxuICAgICAgICBsZXQgdmFsdWUgPSBvcHRzLmRlZmF1bHQ7XHJcbiAgICAgICAgaWYgKGlzRm4odmFsdWUpKSB7XHJcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvcHRzLnR5cGUgPSBwYXJzZVByb3BUeXBlKGtleSwgb3B0cy50eXBlKTtcclxuXHJcbiAgICAgICAgcHJvcGVydGllc1trZXldID0ge1xyXG4gICAgICAgICAgdHlwZTogUFJPUF9UWVBFUy5pbmRleE9mKG9wdHMudHlwZSkgIT09IC0xID8gb3B0cy50eXBlIDogbnVsbCxcclxuICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgb2JzZXJ2ZXI6IGNyZWF0ZU9ic2VydmVyKGtleSlcclxuICAgICAgICB9O1xyXG4gICAgICB9IGVsc2UgeyAvLyBjb250ZW50OlN0cmluZ1xyXG4gICAgICAgIGNvbnN0IHR5cGUgPSBwYXJzZVByb3BUeXBlKGtleSwgb3B0cyk7XHJcbiAgICAgICAgcHJvcGVydGllc1trZXldID0ge1xyXG4gICAgICAgICAgdHlwZTogUFJPUF9UWVBFUy5pbmRleE9mKHR5cGUpICE9PSAtMSA/IHR5cGUgOiBudWxsLFxyXG4gICAgICAgICAgb2JzZXJ2ZXI6IGNyZWF0ZU9ic2VydmVyKGtleSlcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmV0dXJuIHByb3BlcnRpZXNcclxufVxyXG5cclxuZnVuY3Rpb24gd3JhcHBlciQxIChldmVudCkge1xyXG4gIC8vIFRPRE8g5Y+I5b6X5YW85a65IG1wdnVlIOeahCBtcCDlr7nosaFcclxuICB0cnkge1xyXG4gICAgZXZlbnQubXAgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGV2ZW50KSk7XHJcbiAgfSBjYXRjaCAoZSkge31cclxuXHJcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uID0gbm9vcDtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCA9IG5vb3A7XHJcblxyXG4gIGV2ZW50LnRhcmdldCA9IGV2ZW50LnRhcmdldCB8fCB7fTtcclxuXHJcbiAgaWYgKCFoYXNPd24oZXZlbnQsICdkZXRhaWwnKSkge1xyXG4gICAgZXZlbnQuZGV0YWlsID0ge307XHJcbiAgfVxyXG5cclxuICBpZiAoaGFzT3duKGV2ZW50LCAnbWFya2VySWQnKSkge1xyXG4gICAgZXZlbnQuZGV0YWlsID0gdHlwZW9mIGV2ZW50LmRldGFpbCA9PT0gJ29iamVjdCcgPyBldmVudC5kZXRhaWwgOiB7fTtcclxuICAgIGV2ZW50LmRldGFpbC5tYXJrZXJJZCA9IGV2ZW50Lm1hcmtlcklkO1xyXG4gIH1cclxuXHJcbiAgaWYgKGlzUGxhaW5PYmplY3QoZXZlbnQuZGV0YWlsKSkge1xyXG4gICAgZXZlbnQudGFyZ2V0ID0gT2JqZWN0LmFzc2lnbih7fSwgZXZlbnQudGFyZ2V0LCBldmVudC5kZXRhaWwpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGV2ZW50XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEV4dHJhVmFsdWUgKHZtLCBkYXRhUGF0aHNBcnJheSkge1xyXG4gIGxldCBjb250ZXh0ID0gdm07XHJcbiAgZGF0YVBhdGhzQXJyYXkuZm9yRWFjaChkYXRhUGF0aEFycmF5ID0+IHtcclxuICAgIGNvbnN0IGRhdGFQYXRoID0gZGF0YVBhdGhBcnJheVswXTtcclxuICAgIGNvbnN0IHZhbHVlID0gZGF0YVBhdGhBcnJheVsyXTtcclxuICAgIGlmIChkYXRhUGF0aCB8fCB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7IC8vIFsnJywnJyxpbmRleCwnZGlzYWJsZSddXHJcbiAgICAgIGNvbnN0IHByb3BQYXRoID0gZGF0YVBhdGhBcnJheVsxXTtcclxuICAgICAgY29uc3QgdmFsdWVQYXRoID0gZGF0YVBhdGhBcnJheVszXTtcclxuXHJcbiAgICAgIGxldCB2Rm9yO1xyXG4gICAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihkYXRhUGF0aCkpIHtcclxuICAgICAgICB2Rm9yID0gZGF0YVBhdGg7XHJcbiAgICAgIH0gZWxzZSBpZiAoIWRhdGFQYXRoKSB7XHJcbiAgICAgICAgdkZvciA9IGNvbnRleHQ7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRhdGFQYXRoID09PSAnc3RyaW5nJyAmJiBkYXRhUGF0aCkge1xyXG4gICAgICAgIGlmIChkYXRhUGF0aC5pbmRleE9mKCcjcyMnKSA9PT0gMCkge1xyXG4gICAgICAgICAgdkZvciA9IGRhdGFQYXRoLnN1YnN0cigzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdkZvciA9IHZtLl9fZ2V0X3ZhbHVlKGRhdGFQYXRoLCBjb250ZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHZGb3IpKSB7XHJcbiAgICAgICAgY29udGV4dCA9IHZhbHVlO1xyXG4gICAgICB9IGVsc2UgaWYgKCFwcm9wUGF0aCkge1xyXG4gICAgICAgIGNvbnRleHQgPSB2Rm9yW3ZhbHVlXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2Rm9yKSkge1xyXG4gICAgICAgICAgY29udGV4dCA9IHZGb3IuZmluZCh2Rm9ySXRlbSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB2bS5fX2dldF92YWx1ZShwcm9wUGF0aCwgdkZvckl0ZW0pID09PSB2YWx1ZVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHZGb3IpKSB7XHJcbiAgICAgICAgICBjb250ZXh0ID0gT2JqZWN0LmtleXModkZvcikuZmluZCh2Rm9yS2V5ID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHZtLl9fZ2V0X3ZhbHVlKHByb3BQYXRoLCB2Rm9yW3ZGb3JLZXldKSA9PT0gdmFsdWVcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCd2LWZvciDmmoLkuI3mlK/mjIHlvqrnjq/mlbDmja7vvJonLCB2Rm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh2YWx1ZVBhdGgpIHtcclxuICAgICAgICBjb250ZXh0ID0gdm0uX19nZXRfdmFsdWUodmFsdWVQYXRoLCBjb250ZXh0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiBjb250ZXh0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2Nlc3NFdmVudEV4dHJhICh2bSwgZXh0cmEsIGV2ZW50KSB7XHJcbiAgY29uc3QgZXh0cmFPYmogPSB7fTtcclxuXHJcbiAgaWYgKEFycmF5LmlzQXJyYXkoZXh0cmEpICYmIGV4dHJhLmxlbmd0aCkge1xyXG4gICAgLyoqXHJcbiAgICAgKltcclxuICAgICAqICAgIFsnZGF0YS5pdGVtcycsICdkYXRhLmlkJywgaXRlbS5kYXRhLmlkXSxcclxuICAgICAqICAgIFsnbWV0YXMnLCAnaWQnLCBtZXRhLmlkXVxyXG4gICAgICpdLFxyXG4gICAgICpbXHJcbiAgICAgKiAgICBbJ2RhdGEuaXRlbXMnLCAnZGF0YS5pZCcsIGl0ZW0uZGF0YS5pZF0sXHJcbiAgICAgKiAgICBbJ21ldGFzJywgJ2lkJywgbWV0YS5pZF1cclxuICAgICAqXSxcclxuICAgICAqJ3Rlc3QnXHJcbiAgICAgKi9cclxuICAgIGV4dHJhLmZvckVhY2goKGRhdGFQYXRoLCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAodHlwZW9mIGRhdGFQYXRoID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIGlmICghZGF0YVBhdGgpIHsgLy8gbW9kZWwscHJvcC5zeW5jXHJcbiAgICAgICAgICBleHRyYU9ialsnJCcgKyBpbmRleF0gPSB2bTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKGRhdGFQYXRoID09PSAnJGV2ZW50JykgeyAvLyAkZXZlbnRcclxuICAgICAgICAgICAgZXh0cmFPYmpbJyQnICsgaW5kZXhdID0gZXZlbnQ7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGRhdGFQYXRoID09PSAnYXJndW1lbnRzJykge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuZGV0YWlsICYmIGV2ZW50LmRldGFpbC5fX2FyZ3NfXykge1xyXG4gICAgICAgICAgICAgIGV4dHJhT2JqWyckJyArIGluZGV4XSA9IGV2ZW50LmRldGFpbC5fX2FyZ3NfXztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBleHRyYU9ialsnJCcgKyBpbmRleF0gPSBbZXZlbnRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGRhdGFQYXRoLmluZGV4T2YoJyRldmVudC4nKSA9PT0gMCkgeyAvLyAkZXZlbnQudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgIGV4dHJhT2JqWyckJyArIGluZGV4XSA9IHZtLl9fZ2V0X3ZhbHVlKGRhdGFQYXRoLnJlcGxhY2UoJyRldmVudC4nLCAnJyksIGV2ZW50KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGV4dHJhT2JqWyckJyArIGluZGV4XSA9IHZtLl9fZ2V0X3ZhbHVlKGRhdGFQYXRoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZXh0cmFPYmpbJyQnICsgaW5kZXhdID0gZ2V0RXh0cmFWYWx1ZSh2bSwgZGF0YVBhdGgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiBleHRyYU9ialxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRPYmpCeUFycmF5IChhcnIpIHtcclxuICBjb25zdCBvYmogPSB7fTtcclxuICBmb3IgKGxldCBpID0gMTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGFycltpXTtcclxuICAgIG9ialtlbGVtZW50WzBdXSA9IGVsZW1lbnRbMV07XHJcbiAgfVxyXG4gIHJldHVybiBvYmpcclxufVxyXG5cclxuZnVuY3Rpb24gcHJvY2Vzc0V2ZW50QXJncyAodm0sIGV2ZW50LCBhcmdzID0gW10sIGV4dHJhID0gW10sIGlzQ3VzdG9tLCBtZXRob2ROYW1lKSB7XHJcbiAgbGV0IGlzQ3VzdG9tTVBFdmVudCA9IGZhbHNlOyAvLyB3eGNvbXBvbmVudCDnu4Tku7bvvIzkvKDpgJLljp/lp4sgZXZlbnQg5a+56LGhXHJcbiAgaWYgKGlzQ3VzdG9tKSB7IC8vIOiHquWumuS5ieS6i+S7tlxyXG4gICAgaXNDdXN0b21NUEV2ZW50ID0gZXZlbnQuY3VycmVudFRhcmdldCAmJlxyXG4gICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQgJiZcclxuICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmNvbVR5cGUgPT09ICd3eCc7XHJcbiAgICBpZiAoIWFyZ3MubGVuZ3RoKSB7IC8vIOaXoOWPguaVsO+8jOebtOaOpeS8oOWFpSBldmVudCDmiJYgZGV0YWlsIOaVsOe7hFxyXG4gICAgICBpZiAoaXNDdXN0b21NUEV2ZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIFtldmVudF1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZXZlbnQuZGV0YWlsLl9fYXJnc19fIHx8IGV2ZW50LmRldGFpbFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZXh0cmFPYmogPSBwcm9jZXNzRXZlbnRFeHRyYSh2bSwgZXh0cmEsIGV2ZW50KTtcclxuXHJcbiAgY29uc3QgcmV0ID0gW107XHJcbiAgYXJncy5mb3JFYWNoKGFyZyA9PiB7XHJcbiAgICBpZiAoYXJnID09PSAnJGV2ZW50Jykge1xyXG4gICAgICBpZiAobWV0aG9kTmFtZSA9PT0gJ19fc2V0X21vZGVsJyAmJiAhaXNDdXN0b20pIHsgLy8gaW5wdXQgdi1tb2RlbCB2YWx1ZVxyXG4gICAgICAgIHJldC5wdXNoKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGlzQ3VzdG9tICYmICFpc0N1c3RvbU1QRXZlbnQpIHtcclxuICAgICAgICAgIHJldC5wdXNoKGV2ZW50LmRldGFpbC5fX2FyZ3NfX1swXSk7XHJcbiAgICAgICAgfSBlbHNlIHsgLy8gd3hjb21wb25lbnQg57uE5Lu25oiW5YaF572u57uE5Lu2XHJcbiAgICAgICAgICByZXQucHVzaChldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShhcmcpICYmIGFyZ1swXSA9PT0gJ28nKSB7XHJcbiAgICAgICAgcmV0LnB1c2goZ2V0T2JqQnlBcnJheShhcmcpKTtcclxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYXJnID09PSAnc3RyaW5nJyAmJiBoYXNPd24oZXh0cmFPYmosIGFyZykpIHtcclxuICAgICAgICByZXQucHVzaChleHRyYU9ialthcmddKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXQucHVzaChhcmcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiByZXRcclxufVxyXG5cclxuY29uc3QgT05DRSA9ICd+JztcclxuY29uc3QgQ1VTVE9NID0gJ14nO1xyXG5cclxuZnVuY3Rpb24gaXNNYXRjaEV2ZW50VHlwZSAoZXZlbnRUeXBlLCBvcHRUeXBlKSB7XHJcbiAgcmV0dXJuIChldmVudFR5cGUgPT09IG9wdFR5cGUpIHx8XHJcbiAgICAoXHJcbiAgICAgIG9wdFR5cGUgPT09ICdyZWdpb25jaGFuZ2UnICYmXHJcbiAgICAgIChcclxuICAgICAgICBldmVudFR5cGUgPT09ICdiZWdpbicgfHxcclxuICAgICAgICBldmVudFR5cGUgPT09ICdlbmQnXHJcbiAgICAgIClcclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q29udGV4dFZtICh2bSkge1xyXG4gIGxldCAkcGFyZW50ID0gdm0uJHBhcmVudDtcclxuICAvLyDniLbnu4Tku7bmmK8gc2NvcGVkIHNsb3RzIOaIluiAheWFtuS7luiHquWumuS5iee7hOS7tuaXtue7p+e7reafpeaJvlxyXG4gIHdoaWxlICgkcGFyZW50ICYmICRwYXJlbnQuJHBhcmVudCAmJiAoJHBhcmVudC4kb3B0aW9ucy5nZW5lcmljIHx8ICRwYXJlbnQuJHBhcmVudC4kb3B0aW9ucy5nZW5lcmljIHx8ICRwYXJlbnQuJHNjb3BlLl8kdnVlUGlkKSkge1xyXG4gICAgJHBhcmVudCA9ICRwYXJlbnQuJHBhcmVudDtcclxuICB9XHJcbiAgcmV0dXJuICRwYXJlbnQgJiYgJHBhcmVudC4kcGFyZW50XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUV2ZW50IChldmVudCkge1xyXG4gIGV2ZW50ID0gd3JhcHBlciQxKGV2ZW50KTtcclxuXHJcbiAgLy8gW1sndGFwJyxbWydoYW5kbGUnLFsxLDIsYV1dLFsnaGFuZGxlMScsWzEsMixhXV1dXV1cclxuICBjb25zdCBkYXRhc2V0ID0gKGV2ZW50LmN1cnJlbnRUYXJnZXQgfHwgZXZlbnQudGFyZ2V0KS5kYXRhc2V0O1xyXG4gIGlmICghZGF0YXNldCkge1xyXG4gICAgcmV0dXJuIGNvbnNvbGUud2Fybign5LqL5Lu25L+h5oGv5LiN5a2Y5ZyoJylcclxuICB9XHJcbiAgY29uc3QgZXZlbnRPcHRzID0gZGF0YXNldC5ldmVudE9wdHMgfHwgZGF0YXNldFsnZXZlbnQtb3B0cyddOyAvLyDmlK/ku5jlrp0gd2ViLXZpZXcg57uE5Lu2IGRhdGFzZXQg6Z2e6am85bOwXHJcbiAgaWYgKCFldmVudE9wdHMpIHtcclxuICAgIHJldHVybiBjb25zb2xlLndhcm4oJ+S6i+S7tuS/oeaBr+S4jeWtmOWcqCcpXHJcbiAgfVxyXG5cclxuICAvLyBbWydoYW5kbGUnLFsxLDIsYV1dLFsnaGFuZGxlMScsWzEsMixhXV1dXHJcbiAgY29uc3QgZXZlbnRUeXBlID0gZXZlbnQudHlwZTtcclxuXHJcbiAgY29uc3QgcmV0ID0gW107XHJcblxyXG4gIGV2ZW50T3B0cy5mb3JFYWNoKGV2ZW50T3B0ID0+IHtcclxuICAgIGxldCB0eXBlID0gZXZlbnRPcHRbMF07XHJcbiAgICBjb25zdCBldmVudHNBcnJheSA9IGV2ZW50T3B0WzFdO1xyXG5cclxuICAgIGNvbnN0IGlzQ3VzdG9tID0gdHlwZS5jaGFyQXQoMCkgPT09IENVU1RPTTtcclxuICAgIHR5cGUgPSBpc0N1c3RvbSA/IHR5cGUuc2xpY2UoMSkgOiB0eXBlO1xyXG4gICAgY29uc3QgaXNPbmNlID0gdHlwZS5jaGFyQXQoMCkgPT09IE9OQ0U7XHJcbiAgICB0eXBlID0gaXNPbmNlID8gdHlwZS5zbGljZSgxKSA6IHR5cGU7XHJcblxyXG4gICAgaWYgKGV2ZW50c0FycmF5ICYmIGlzTWF0Y2hFdmVudFR5cGUoZXZlbnRUeXBlLCB0eXBlKSkge1xyXG4gICAgICBldmVudHNBcnJheS5mb3JFYWNoKGV2ZW50QXJyYXkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1ldGhvZE5hbWUgPSBldmVudEFycmF5WzBdO1xyXG4gICAgICAgIGlmIChtZXRob2ROYW1lKSB7XHJcbiAgICAgICAgICBsZXQgaGFuZGxlckN0eCA9IHRoaXMuJHZtO1xyXG4gICAgICAgICAgaWYgKGhhbmRsZXJDdHguJG9wdGlvbnMuZ2VuZXJpYykgeyAvLyBtcC13ZWl4aW4sbXAtdG91dGlhbyDmir3osaHoioLngrnmqKHmi58gc2NvcGVkIHNsb3RzXHJcbiAgICAgICAgICAgIGhhbmRsZXJDdHggPSBnZXRDb250ZXh0Vm0oaGFuZGxlckN0eCkgfHwgaGFuZGxlckN0eDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChtZXRob2ROYW1lID09PSAnJGVtaXQnKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZXJDdHguJGVtaXQuYXBwbHkoaGFuZGxlckN0eCxcclxuICAgICAgICAgICAgICBwcm9jZXNzRXZlbnRBcmdzKFxyXG4gICAgICAgICAgICAgICAgdGhpcy4kdm0sXHJcbiAgICAgICAgICAgICAgICBldmVudCxcclxuICAgICAgICAgICAgICAgIGV2ZW50QXJyYXlbMV0sXHJcbiAgICAgICAgICAgICAgICBldmVudEFycmF5WzJdLFxyXG4gICAgICAgICAgICAgICAgaXNDdXN0b20sXHJcbiAgICAgICAgICAgICAgICBtZXRob2ROYW1lXHJcbiAgICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc3QgaGFuZGxlciA9IGhhbmRsZXJDdHhbbWV0aG9kTmFtZV07XHJcbiAgICAgICAgICBpZiAoIWlzRm4oaGFuZGxlcikpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAgX3ZtLiR7bWV0aG9kTmFtZX0gaXMgbm90IGEgZnVuY3Rpb25gKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGlzT25jZSkge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlci5vbmNlKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaGFuZGxlci5vbmNlID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGxldCBwYXJhbXMgPSBwcm9jZXNzRXZlbnRBcmdzKFxyXG4gICAgICAgICAgICB0aGlzLiR2bSxcclxuICAgICAgICAgICAgZXZlbnQsXHJcbiAgICAgICAgICAgIGV2ZW50QXJyYXlbMV0sXHJcbiAgICAgICAgICAgIGV2ZW50QXJyYXlbMl0sXHJcbiAgICAgICAgICAgIGlzQ3VzdG9tLFxyXG4gICAgICAgICAgICBtZXRob2ROYW1lXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgcGFyYW1zID0gQXJyYXkuaXNBcnJheShwYXJhbXMpID8gcGFyYW1zIDogW107XHJcbiAgICAgICAgICAvLyDlj4LmlbDlsL7pg6jlop7liqDljp/lp4vkuovku7blr7nosaHnlKjkuo7lpI3mnYLooajovr7lvI/lhoXojrflj5bpop3lpJbmlbDmja5cclxuICAgICAgICAgIGlmICgvPVxccypcXFMrXFwuZXZlbnRQYXJhbXNcXHMqXFx8XFx8XFxzKlxcUytcXFtbJ1wiXWV2ZW50LXBhcmFtc1snXCJdXFxdLy50ZXN0KGhhbmRsZXIudG9TdHJpbmcoKSkpIHtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNwYXJzZS1hcnJheXNcclxuICAgICAgICAgICAgcGFyYW1zID0gcGFyYW1zLmNvbmNhdChbLCAsICwgLCAsICwgLCAsICwgLCBldmVudF0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0LnB1c2goaGFuZGxlci5hcHBseShoYW5kbGVyQ3R4LCBwYXJhbXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBpZiAoXHJcbiAgICBldmVudFR5cGUgPT09ICdpbnB1dCcgJiZcclxuICAgIHJldC5sZW5ndGggPT09IDEgJiZcclxuICAgIHR5cGVvZiByZXRbMF0gIT09ICd1bmRlZmluZWQnXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gcmV0WzBdXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBob29rcyA9IFtcclxuICAnb25TaG93JyxcclxuICAnb25IaWRlJyxcclxuICAnb25FcnJvcicsXHJcbiAgJ29uUGFnZU5vdEZvdW5kJyxcclxuICAnb25UaGVtZUNoYW5nZScsXHJcbiAgJ29uVW5oYW5kbGVkUmVqZWN0aW9uJ1xyXG5dO1xyXG5cclxuZnVuY3Rpb24gaW5pdEV2ZW50Q2hhbm5lbCQxICgpIHtcclxuICBWdWUucHJvdG90eXBlLmdldE9wZW5lckV2ZW50Q2hhbm5lbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICghdGhpcy5fX2V2ZW50Q2hhbm5lbF9fKSB7XHJcbiAgICAgIHRoaXMuX19ldmVudENoYW5uZWxfXyA9IG5ldyBFdmVudENoYW5uZWwoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl9fZXZlbnRDaGFubmVsX19cclxuICB9O1xyXG4gIGNvbnN0IGNhbGxIb29rID0gVnVlLnByb3RvdHlwZS5fX2NhbGxfaG9vaztcclxuICBWdWUucHJvdG90eXBlLl9fY2FsbF9ob29rID0gZnVuY3Rpb24gKGhvb2ssIGFyZ3MpIHtcclxuICAgIGlmIChob29rID09PSAnb25Mb2FkJyAmJiBhcmdzICYmIGFyZ3MuX19pZF9fKSB7XHJcbiAgICAgIHRoaXMuX19ldmVudENoYW5uZWxfXyA9IGdldEV2ZW50Q2hhbm5lbChhcmdzLl9faWRfXyk7XHJcbiAgICAgIGRlbGV0ZSBhcmdzLl9faWRfXztcclxuICAgIH1cclxuICAgIHJldHVybiBjYWxsSG9vay5jYWxsKHRoaXMsIGhvb2ssIGFyZ3MpXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdFNjb3BlZFNsb3RzUGFyYW1zICgpIHtcclxuICBjb25zdCBjZW50ZXIgPSB7fTtcclxuICBjb25zdCBwYXJlbnRzID0ge307XHJcblxyXG4gIFZ1ZS5wcm90b3R5cGUuJGhhc1Njb3BlZFNsb3RzUGFyYW1zID0gZnVuY3Rpb24gKHZ1ZUlkKSB7XHJcbiAgICBjb25zdCBoYXMgPSBjZW50ZXJbdnVlSWRdO1xyXG4gICAgaWYgKCFoYXMpIHtcclxuICAgICAgcGFyZW50c1t2dWVJZF0gPSB0aGlzO1xyXG4gICAgICB0aGlzLiRvbignaG9vazpkZXN0b3J5JywgKCkgPT4ge1xyXG4gICAgICAgIGRlbGV0ZSBwYXJlbnRzW3Z1ZUlkXTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaGFzXHJcbiAgfTtcclxuXHJcbiAgVnVlLnByb3RvdHlwZS4kZ2V0U2NvcGVkU2xvdHNQYXJhbXMgPSBmdW5jdGlvbiAodnVlSWQsIG5hbWUsIGtleSkge1xyXG4gICAgY29uc3QgZGF0YSA9IGNlbnRlclt2dWVJZF07XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICBjb25zdCBvYmplY3QgPSBkYXRhW25hbWVdIHx8IHt9O1xyXG4gICAgICByZXR1cm4ga2V5ID8gb2JqZWN0W2tleV0gOiBvYmplY3RcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBhcmVudHNbdnVlSWRdID0gdGhpcztcclxuICAgICAgdGhpcy4kb24oJ2hvb2s6ZGVzdG9yeScsICgpID0+IHtcclxuICAgICAgICBkZWxldGUgcGFyZW50c1t2dWVJZF07XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFZ1ZS5wcm90b3R5cGUuJHNldFNjb3BlZFNsb3RzUGFyYW1zID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XHJcbiAgICBjb25zdCB2dWVJZCA9IHRoaXMuJG9wdGlvbnMucHJvcHNEYXRhLnZ1ZUlkO1xyXG4gICAgY29uc3Qgb2JqZWN0ID0gY2VudGVyW3Z1ZUlkXSA9IGNlbnRlclt2dWVJZF0gfHwge307XHJcbiAgICBvYmplY3RbbmFtZV0gPSB2YWx1ZTtcclxuICAgIGlmIChwYXJlbnRzW3Z1ZUlkXSkge1xyXG4gICAgICBwYXJlbnRzW3Z1ZUlkXS4kZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBWdWUubWl4aW4oe1xyXG4gICAgZGVzdHJveWVkICgpIHtcclxuICAgICAgY29uc3QgcHJvcHNEYXRhID0gdGhpcy4kb3B0aW9ucy5wcm9wc0RhdGE7XHJcbiAgICAgIGNvbnN0IHZ1ZUlkID0gcHJvcHNEYXRhICYmIHByb3BzRGF0YS52dWVJZDtcclxuICAgICAgaWYgKHZ1ZUlkKSB7XHJcbiAgICAgICAgZGVsZXRlIGNlbnRlclt2dWVJZF07XHJcbiAgICAgICAgZGVsZXRlIHBhcmVudHNbdnVlSWRdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlQmFzZUFwcCAodm0sIHtcclxuICBtb2NrcyxcclxuICBpbml0UmVmc1xyXG59KSB7XHJcbiAgaW5pdEV2ZW50Q2hhbm5lbCQxKCk7XHJcbiAge1xyXG4gICAgaW5pdFNjb3BlZFNsb3RzUGFyYW1zKCk7XHJcbiAgfVxyXG4gIGlmICh2bS4kb3B0aW9ucy5zdG9yZSkge1xyXG4gICAgVnVlLnByb3RvdHlwZS4kc3RvcmUgPSB2bS4kb3B0aW9ucy5zdG9yZTtcclxuICB9XHJcbiAgdW5pSWRNaXhpbihWdWUpO1xyXG5cclxuICBWdWUucHJvdG90eXBlLm1wSG9zdCA9IFwibXAtdG91dGlhb1wiO1xyXG5cclxuICBWdWUubWl4aW4oe1xyXG4gICAgYmVmb3JlQ3JlYXRlICgpIHtcclxuICAgICAgaWYgKCF0aGlzLiRvcHRpb25zLm1wVHlwZSkge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLm1wVHlwZSA9IHRoaXMuJG9wdGlvbnMubXBUeXBlO1xyXG5cclxuICAgICAgdGhpcy4kbXAgPSB7XHJcbiAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgW3RoaXMubXBUeXBlXTogdGhpcy4kb3B0aW9ucy5tcEluc3RhbmNlXHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aGlzLiRzY29wZSA9IHRoaXMuJG9wdGlvbnMubXBJbnN0YW5jZTtcclxuXHJcbiAgICAgIGRlbGV0ZSB0aGlzLiRvcHRpb25zLm1wVHlwZTtcclxuICAgICAgZGVsZXRlIHRoaXMuJG9wdGlvbnMubXBJbnN0YW5jZTtcclxuICAgICAgaWYgKHRoaXMubXBUeXBlID09PSAncGFnZScgJiYgdHlwZW9mIGdldEFwcCA9PT0gJ2Z1bmN0aW9uJykgeyAvLyBoYWNrIHZ1ZS1pMThuXHJcbiAgICAgICAgY29uc3QgYXBwID0gZ2V0QXBwKCk7XHJcbiAgICAgICAgaWYgKGFwcC4kdm0gJiYgYXBwLiR2bS4kaTE4bikge1xyXG4gICAgICAgICAgdGhpcy5faTE4biA9IGFwcC4kdm0uJGkxOG47XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLm1wVHlwZSAhPT0gJ2FwcCcpIHtcclxuICAgICAgICBpbml0UmVmcyh0aGlzKTtcclxuICAgICAgICBpbml0TW9ja3ModGhpcywgbW9ja3MpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGFwcE9wdGlvbnMgPSB7XHJcbiAgICBvbkxhdW5jaCAoYXJncykge1xyXG4gICAgICBpZiAodGhpcy4kdm0pIHsgLy8g5bey57uP5Yid5aeL5YyW6L+H5LqG77yM5Li76KaB5piv5Li65LqG55m+5bqm77yM55m+5bqmIG9uU2hvdyDlnKggb25MYXVuY2gg5LmL5YmNXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuJHZtID0gdm07XHJcblxyXG4gICAgICB0aGlzLiR2bS4kbXAgPSB7XHJcbiAgICAgICAgYXBwOiB0aGlzXHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aGlzLiR2bS4kc2NvcGUgPSB0aGlzO1xyXG4gICAgICAvLyB2bSDkuIrkuZ/mjILovb0gZ2xvYmFsRGF0YVxyXG4gICAgICB0aGlzLiR2bS5nbG9iYWxEYXRhID0gdGhpcy5nbG9iYWxEYXRhO1xyXG5cclxuICAgICAgdGhpcy4kdm0uX2lzTW91bnRlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuJHZtLl9fY2FsbF9ob29rKCdtb3VudGVkJywgYXJncyk7XHJcblxyXG4gICAgICB0aGlzLiR2bS5fX2NhbGxfaG9vaygnb25MYXVuY2gnLCBhcmdzKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyDlhbzlrrnml6fniYjmnKwgZ2xvYmFsRGF0YVxyXG4gIGFwcE9wdGlvbnMuZ2xvYmFsRGF0YSA9IHZtLiRvcHRpb25zLmdsb2JhbERhdGEgfHwge307XHJcbiAgLy8g5bCGIG1ldGhvZHMg5Lit55qE5pa55rOV5oyC5ZyoIGdldEFwcCgpIOS4rVxyXG4gIGNvbnN0IG1ldGhvZHMgPSB2bS4kb3B0aW9ucy5tZXRob2RzO1xyXG4gIGlmIChtZXRob2RzKSB7XHJcbiAgICBPYmplY3Qua2V5cyhtZXRob2RzKS5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICBhcHBPcHRpb25zW25hbWVdID0gbWV0aG9kc1tuYW1lXTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW5pdEhvb2tzKGFwcE9wdGlvbnMsIGhvb2tzKTtcclxuXHJcbiAgcmV0dXJuIGFwcE9wdGlvbnNcclxufVxyXG5cclxuZnVuY3Rpb24gZmluZFZtQnlWdWVJZCAodm0sIHZ1ZVBpZCkge1xyXG4gIGNvbnN0ICRjaGlsZHJlbiA9IHZtLiRjaGlsZHJlbjtcclxuICAvLyDkvJjlhYjmn6Xmib7nm7TlsZ4o5Y+N5ZCR5p+l5om+Omh0dHBzOi8vZ2l0aHViLmNvbS9kY2xvdWRpby91bmktYXBwL2lzc3Vlcy8xMjAwKVxyXG4gIGZvciAobGV0IGkgPSAkY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgIGNvbnN0IGNoaWxkVm0gPSAkY2hpbGRyZW5baV07XHJcbiAgICBpZiAoY2hpbGRWbS4kc2NvcGUuXyR2dWVJZCA9PT0gdnVlUGlkKSB7XHJcbiAgICAgIHJldHVybiBjaGlsZFZtXHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIOWPjeWQkemAkuW9kuafpeaJvlxyXG4gIGxldCBwYXJlbnRWbTtcclxuICBmb3IgKGxldCBpID0gJGNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICBwYXJlbnRWbSA9IGZpbmRWbUJ5VnVlSWQoJGNoaWxkcmVuW2ldLCB2dWVQaWQpO1xyXG4gICAgaWYgKHBhcmVudFZtKSB7XHJcbiAgICAgIHJldHVybiBwYXJlbnRWbVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdEJlaGF2aW9yIChvcHRpb25zKSB7XHJcbiAgcmV0dXJuIEJlaGF2aW9yKG9wdGlvbnMpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUxpbmsgKGV2ZW50KSB7XHJcbiAgY29uc3Qge1xyXG4gICAgdnVlUGlkLFxyXG4gICAgdnVlT3B0aW9uc1xyXG4gIH0gPSBldmVudC5kZXRhaWwgfHwgZXZlbnQudmFsdWU7IC8vIGRldGFpbCDmmK/lvq7kv6EsdmFsdWUg5piv55m+5bqmKGRpcGF0Y2gpXHJcblxyXG4gIGxldCBwYXJlbnRWbTtcclxuXHJcbiAgaWYgKHZ1ZVBpZCkge1xyXG4gICAgcGFyZW50Vm0gPSBmaW5kVm1CeVZ1ZUlkKHRoaXMuJHZtLCB2dWVQaWQpO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFwYXJlbnRWbSkge1xyXG4gICAgcGFyZW50Vm0gPSB0aGlzLiR2bTtcclxuICB9XHJcblxyXG4gIHZ1ZU9wdGlvbnMucGFyZW50ID0gcGFyZW50Vm07XHJcbn1cclxuXHJcbmNvbnN0IG1vY2tzID0gWydfX3JvdXRlX18nLCAnX193ZWJ2aWV3SWRfXycsICdfX25vZGVpZF9fJywgJ19fbm9kZUlkX18nXTtcclxuXHJcbmZ1bmN0aW9uIGlzUGFnZSAoKSB7XHJcbiAgcmV0dXJuIHRoaXMuX19ub2RlaWRfXyA9PT0gMCB8fCB0aGlzLl9fbm9kZUlkX18gPT09IDBcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdFJlZnMgKHZtKSB7XHJcbiAgY29uc3QgbXBJbnN0YW5jZSA9IHZtLiRzY29wZTtcclxuICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xyXG4gIGNvbnN0IG1pbm9yVmVyc2lvbiA9IHBhcnNlSW50KHR0LmdldFN5c3RlbUluZm9TeW5jKCkuU0RLVmVyc2lvbi5zcGxpdCgnLicpWzFdKTtcclxuICBpZiAobWlub3JWZXJzaW9uID4gMTYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2bSwgJyRyZWZzJywge1xyXG4gICAgICBnZXQgKCkge1xyXG4gICAgICAgIGNvbnN0ICRyZWZzID0ge307XHJcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IG1wSW5zdGFuY2Uuc2VsZWN0QWxsQ29tcG9uZW50cygnLnZ1ZS1yZWYnKTtcclxuICAgICAgICBjb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHtcclxuICAgICAgICAgIGNvbnN0IHJlZiA9IGNvbXBvbmVudC5kYXRhc2V0LnJlZjtcclxuICAgICAgICAgICRyZWZzW3JlZl0gPSBjb21wb25lbnQuJHZtIHx8IGNvbXBvbmVudDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBmb3JDb21wb25lbnRzID0gbXBJbnN0YW5jZS5zZWxlY3RBbGxDb21wb25lbnRzKCcudnVlLXJlZi1pbi1mb3InKTtcclxuICAgICAgICBmb3JDb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHtcclxuICAgICAgICAgIGNvbnN0IHJlZiA9IGNvbXBvbmVudC5kYXRhc2V0LnJlZjtcclxuICAgICAgICAgIGlmICghJHJlZnNbcmVmXSkge1xyXG4gICAgICAgICAgICAkcmVmc1tyZWZdID0gW107XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAkcmVmc1tyZWZdLnB1c2goY29tcG9uZW50LiR2bSB8fCBjb21wb25lbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiAkcmVmc1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgbXBJbnN0YW5jZS5zZWxlY3RBbGxDb21wb25lbnRzKCcudnVlLXJlZicsIChjb21wb25lbnRzKSA9PiB7XHJcbiAgICAgIGNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlZiA9IGNvbXBvbmVudC5kYXRhc2V0LnJlZjtcclxuICAgICAgICB2bS4kcmVmc1tyZWZdID0gY29tcG9uZW50LiR2bSB8fCBjb21wb25lbnQ7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBtcEluc3RhbmNlLnNlbGVjdEFsbENvbXBvbmVudHMoJy52dWUtcmVmLWluLWZvcicsIChmb3JDb21wb25lbnRzKSA9PiB7XHJcbiAgICAgIGZvckNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlZiA9IGNvbXBvbmVudC5kYXRhc2V0LnJlZjtcclxuICAgICAgICBpZiAoIXZtLiRyZWZzW3JlZl0pIHtcclxuICAgICAgICAgIHZtLiRyZWZzW3JlZl0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdm0uJHJlZnNbcmVmXS5wdXNoKGNvbXBvbmVudC4kdm0gfHwgY29tcG9uZW50KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGluc3RhbmNlcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcblxyXG5mdW5jdGlvbiBpbml0UmVsYXRpb24gKHtcclxuICB2dWVQaWQsXHJcbiAgbXBJbnN0YW5jZVxyXG59KSB7XHJcbiAgLy8g5aS05p2hIHRyaWdnZXJFdmVudCDlkI7vvIzmjqXmlLbkuovku7bml7bmnLrnibnliKvmmZrvvIzlt7Lnu4/liLDkuoYgcmVhZHkg5LmL5ZCOXHJcbiAgY29uc3Qgbm9kZUlkID0gKG1wSW5zdGFuY2UuX19ub2RlSWRfXyB8fCBtcEluc3RhbmNlLl9fbm9kZWlkX18pICsgJyc7XHJcbiAgY29uc3Qgd2Vidmlld0lkID0gbXBJbnN0YW5jZS5fX3dlYnZpZXdJZF9fICsgJyc7XHJcblxyXG4gIGluc3RhbmNlc1t3ZWJ2aWV3SWQgKyAnXycgKyBub2RlSWRdID0gbXBJbnN0YW5jZS4kdm07XHJcblxyXG4gIHRoaXMudHJpZ2dlckV2ZW50KCdfX2wnLCB7XHJcbiAgICB2dWVQaWQsXHJcbiAgICBub2RlSWQsXHJcbiAgICB3ZWJ2aWV3SWRcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlTGluayQxICh7XHJcbiAgZGV0YWlsOiB7XHJcbiAgICB2dWVQaWQsXHJcbiAgICBub2RlSWQsXHJcbiAgICB3ZWJ2aWV3SWRcclxuICB9XHJcbn0pIHtcclxuICBjb25zdCB2bSA9IGluc3RhbmNlc1t3ZWJ2aWV3SWQgKyAnXycgKyBub2RlSWRdO1xyXG4gIGlmICghdm0pIHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcbiAgbGV0IHBhcmVudFZtO1xyXG5cclxuICBpZiAodnVlUGlkKSB7XHJcbiAgICBwYXJlbnRWbSA9IGZpbmRWbUJ5VnVlSWQodGhpcy4kdm0sIHZ1ZVBpZCk7XHJcbiAgfVxyXG5cclxuICBpZiAoIXBhcmVudFZtKSB7XHJcbiAgICBwYXJlbnRWbSA9IHRoaXMuJHZtO1xyXG4gIH1cclxuXHJcbiAgdm0uJHBhcmVudCA9IHBhcmVudFZtO1xyXG4gIHZtLiRyb290ID0gcGFyZW50Vm0uJHJvb3Q7XHJcbiAgcGFyZW50Vm0uJGNoaWxkcmVuLnB1c2godm0pO1xyXG5cclxuICB2bS5fX2NhbGxfaG9vaygnY3JlYXRlZCcpO1xyXG4gIHZtLl9fY2FsbF9ob29rKCdiZWZvcmVNb3VudCcpO1xyXG4gIHZtLl9pc01vdW50ZWQgPSB0cnVlO1xyXG4gIHZtLl9fY2FsbF9ob29rKCdtb3VudGVkJyk7XHJcbiAgdm0uX19jYWxsX2hvb2soJ29uUmVhZHknKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VBcHAgKHZtKSB7XHJcbiAgVnVlLnByb3RvdHlwZS5fJGZhbGxiYWNrID0gdHJ1ZTsgLy8g6ZmN57qn77yI6LCD5pW05Y6fIHZ1ZSDnmoTpg6jliIbnlJ/lkb3lkajmnJ/vvIzlpoIgY3JlYXRlZO+8jGJlZm9yZU1vdW50LGluamVjdCxwcm92aWRl77yJXHJcblxyXG4gIFZ1ZS5taXhpbih7XHJcbiAgICBjcmVhdGVkICgpIHsgLy8g5aSE55CGIGluamVjdGlvbnMs5aS05p2hIHRyaWdnZXJFdmVudCDmmK/lvILmraXvvIzkuJTop6blj5Hml7bmnLrlvojmhaLvvIzmlYXlu7bov58gcmVsYXRpb24g6K6+572uXHJcbiAgICAgIGlmICh0aGlzLm1wVHlwZSAhPT0gJ2FwcCcpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICB0aGlzLm1wVHlwZSA9PT0gJ3BhZ2UnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgIXRoaXMuJHNjb3BlLnJvdXRlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2NvcGUuX19yb3V0ZV9fXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aGlzLiRzY29wZS5yb3V0ZSA9IHRoaXMuJHNjb3BlLl9fcm91dGVfXztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGluaXRSZWZzKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLl9faW5pdF9pbmplY3Rpb25zKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX19pbml0X3Byb3ZpZGUodGhpcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHBhcnNlQmFzZUFwcCh2bSwge1xyXG4gICAgbW9ja3MsXHJcbiAgICBpbml0UmVmczogZnVuY3Rpb24gKCkge30gLy8gYXR0YWNoZWQg5pe277yM5Y+v6IO95p+l6K+i5LiN5YiwXHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQXBwICh2bSkge1xyXG4gIEFwcChwYXJzZUFwcCh2bSkpO1xyXG4gIHJldHVybiB2bVxyXG59XHJcblxyXG5jb25zdCBlbmNvZGVSZXNlcnZlUkUgPSAvWyEnKCkqXS9nO1xyXG5jb25zdCBlbmNvZGVSZXNlcnZlUmVwbGFjZXIgPSBjID0+ICclJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNik7XHJcbmNvbnN0IGNvbW1hUkUgPSAvJTJDL2c7XHJcblxyXG4vLyBmaXhlZCBlbmNvZGVVUklDb21wb25lbnQgd2hpY2ggaXMgbW9yZSBjb25mb3JtYW50IHRvIFJGQzM5ODY6XHJcbi8vIC0gZXNjYXBlcyBbIScoKSpdXHJcbi8vIC0gcHJlc2VydmUgY29tbWFzXHJcbmNvbnN0IGVuY29kZSA9IHN0ciA9PiBlbmNvZGVVUklDb21wb25lbnQoc3RyKVxyXG4gIC5yZXBsYWNlKGVuY29kZVJlc2VydmVSRSwgZW5jb2RlUmVzZXJ2ZVJlcGxhY2VyKVxyXG4gIC5yZXBsYWNlKGNvbW1hUkUsICcsJyk7XHJcblxyXG5mdW5jdGlvbiBzdHJpbmdpZnlRdWVyeSAob2JqLCBlbmNvZGVTdHIgPSBlbmNvZGUpIHtcclxuICBjb25zdCByZXMgPSBvYmogPyBPYmplY3Qua2V5cyhvYmopLm1hcChrZXkgPT4ge1xyXG4gICAgY29uc3QgdmFsID0gb2JqW2tleV07XHJcblxyXG4gICAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiAnJ1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh2YWwgPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIGVuY29kZVN0cihrZXkpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgdmFsLmZvckVhY2godmFsMiA9PiB7XHJcbiAgICAgICAgaWYgKHZhbDIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2YWwyID09PSBudWxsKSB7XHJcbiAgICAgICAgICByZXN1bHQucHVzaChlbmNvZGVTdHIoa2V5KSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlc3VsdC5wdXNoKGVuY29kZVN0cihrZXkpICsgJz0nICsgZW5jb2RlU3RyKHZhbDIpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gcmVzdWx0LmpvaW4oJyYnKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBlbmNvZGVTdHIoa2V5KSArICc9JyArIGVuY29kZVN0cih2YWwpXHJcbiAgfSkuZmlsdGVyKHggPT4geC5sZW5ndGggPiAwKS5qb2luKCcmJykgOiBudWxsO1xyXG4gIHJldHVybiByZXMgPyBgPyR7cmVzfWAgOiAnJ1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZUJhc2VDb21wb25lbnQgKHZ1ZUNvbXBvbmVudE9wdGlvbnMsIHtcclxuICBpc1BhZ2UsXHJcbiAgaW5pdFJlbGF0aW9uXHJcbn0gPSB7fSkge1xyXG4gIGNvbnN0IFtWdWVDb21wb25lbnQsIHZ1ZU9wdGlvbnNdID0gaW5pdFZ1ZUNvbXBvbmVudChWdWUsIHZ1ZUNvbXBvbmVudE9wdGlvbnMpO1xyXG5cclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgbXVsdGlwbGVTbG90czogdHJ1ZSxcclxuICAgIGFkZEdsb2JhbENsYXNzOiB0cnVlLFxyXG4gICAgLi4uKHZ1ZU9wdGlvbnMub3B0aW9ucyB8fCB7fSlcclxuICB9O1xyXG5cclxuICBjb25zdCBjb21wb25lbnRPcHRpb25zID0ge1xyXG4gICAgb3B0aW9ucyxcclxuICAgIGRhdGE6IGluaXREYXRhKHZ1ZU9wdGlvbnMsIFZ1ZS5wcm90b3R5cGUpLFxyXG4gICAgYmVoYXZpb3JzOiBpbml0QmVoYXZpb3JzKHZ1ZU9wdGlvbnMsIGluaXRCZWhhdmlvciksXHJcbiAgICBwcm9wZXJ0aWVzOiBpbml0UHJvcGVydGllcyh2dWVPcHRpb25zLnByb3BzLCBmYWxzZSwgdnVlT3B0aW9ucy5fX2ZpbGUpLFxyXG4gICAgbGlmZXRpbWVzOiB7XHJcbiAgICAgIGF0dGFjaGVkICgpIHtcclxuICAgICAgICBjb25zdCBwcm9wZXJ0aWVzID0gdGhpcy5wcm9wZXJ0aWVzO1xyXG5cclxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgbXBUeXBlOiBpc1BhZ2UuY2FsbCh0aGlzKSA/ICdwYWdlJyA6ICdjb21wb25lbnQnLFxyXG4gICAgICAgICAgbXBJbnN0YW5jZTogdGhpcyxcclxuICAgICAgICAgIHByb3BzRGF0YTogcHJvcGVydGllc1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGluaXRWdWVJZHMocHJvcGVydGllcy52dWVJZCwgdGhpcyk7XHJcblxyXG4gICAgICAgIC8vIOWkhOeQhueItuWtkOWFs+ezu1xyXG4gICAgICAgIGluaXRSZWxhdGlvbi5jYWxsKHRoaXMsIHtcclxuICAgICAgICAgIHZ1ZVBpZDogdGhpcy5fJHZ1ZVBpZCxcclxuICAgICAgICAgIHZ1ZU9wdGlvbnM6IG9wdGlvbnNcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8g5Yid5aeL5YyWIHZ1ZSDlrp7kvotcclxuICAgICAgICB0aGlzLiR2bSA9IG5ldyBWdWVDb21wb25lbnQob3B0aW9ucyk7XHJcblxyXG4gICAgICAgIC8vIOWkhOeQhiRzbG90cywkc2NvcGVkU2xvdHPvvIjmmoLkuI3mlK/mjIHliqjmgIHlj5jljJYkc2xvdHPvvIlcclxuICAgICAgICBpbml0U2xvdHModGhpcy4kdm0sIHByb3BlcnRpZXMudnVlU2xvdHMpO1xyXG5cclxuICAgICAgICAvLyDop6blj5HpppbmrKEgc2V0RGF0YVxyXG4gICAgICAgIHRoaXMuJHZtLiRtb3VudCgpO1xyXG4gICAgICB9LFxyXG4gICAgICByZWFkeSAoKSB7XHJcbiAgICAgICAgLy8g5b2T57uE5Lu2IHByb3BzIOm7mOiupOWAvOS4uiB0cnVl77yM5Yid5aeL5YyW5pe25Lyg5YWlIGZhbHNlIOS8muWvvOiHtCBjcmVhdGVkLHJlYWR5IOinpuWPkSwg5L2GIGF0dGFjaGVkIOS4jeinpuWPkVxyXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVycy53ZWl4aW4ucXEuY29tL2NvbW11bml0eS9kZXZlbG9wL2RvYy8wMDA2NmFlMjg0NGNjMGY4ZWI4ODNlMmE1NTc4MDBcclxuICAgICAgICBpZiAodGhpcy4kdm0pIHtcclxuICAgICAgICAgIHRoaXMuJHZtLl9pc01vdW50ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy4kdm0uX19jYWxsX2hvb2soJ21vdW50ZWQnKTtcclxuICAgICAgICAgIHRoaXMuJHZtLl9fY2FsbF9ob29rKCdvblJlYWR5Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBkZXRhY2hlZCAoKSB7XHJcbiAgICAgICAgdGhpcy4kdm0gJiYgdGhpcy4kdm0uJGRlc3Ryb3koKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHBhZ2VMaWZldGltZXM6IHtcclxuICAgICAgc2hvdyAoYXJncykge1xyXG4gICAgICAgIHRoaXMuJHZtICYmIHRoaXMuJHZtLl9fY2FsbF9ob29rKCdvblBhZ2VTaG93JywgYXJncyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGhpZGUgKCkge1xyXG4gICAgICAgIHRoaXMuJHZtICYmIHRoaXMuJHZtLl9fY2FsbF9ob29rKCdvblBhZ2VIaWRlJyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHJlc2l6ZSAoc2l6ZSkge1xyXG4gICAgICAgIHRoaXMuJHZtICYmIHRoaXMuJHZtLl9fY2FsbF9ob29rKCdvblBhZ2VSZXNpemUnLCBzaXplKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgX19sOiBoYW5kbGVMaW5rLFxyXG4gICAgICBfX2U6IGhhbmRsZUV2ZW50XHJcbiAgICB9XHJcbiAgfTtcclxuICAvLyBleHRlcm5hbENsYXNzZXNcclxuICBpZiAodnVlT3B0aW9ucy5leHRlcm5hbENsYXNzZXMpIHtcclxuICAgIGNvbXBvbmVudE9wdGlvbnMuZXh0ZXJuYWxDbGFzc2VzID0gdnVlT3B0aW9ucy5leHRlcm5hbENsYXNzZXM7XHJcbiAgfVxyXG5cclxuICBpZiAoQXJyYXkuaXNBcnJheSh2dWVPcHRpb25zLnd4c0NhbGxNZXRob2RzKSkge1xyXG4gICAgdnVlT3B0aW9ucy53eHNDYWxsTWV0aG9kcy5mb3JFYWNoKGNhbGxNZXRob2QgPT4ge1xyXG4gICAgICBjb21wb25lbnRPcHRpb25zLm1ldGhvZHNbY2FsbE1ldGhvZF0gPSBmdW5jdGlvbiAoYXJncykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiR2bVtjYWxsTWV0aG9kXShhcmdzKVxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpZiAoaXNQYWdlKSB7XHJcbiAgICByZXR1cm4gY29tcG9uZW50T3B0aW9uc1xyXG4gIH1cclxuICByZXR1cm4gW2NvbXBvbmVudE9wdGlvbnMsIFZ1ZUNvbXBvbmVudF1cclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VDb21wb25lbnQgKHZ1ZU9wdGlvbnMpIHtcclxuICBjb25zdCBbY29tcG9uZW50T3B0aW9ucywgVnVlQ29tcG9uZW50XSA9IHBhcnNlQmFzZUNvbXBvbmVudCh2dWVPcHRpb25zKTtcclxuXHJcbiAgY29tcG9uZW50T3B0aW9ucy5saWZldGltZXMuYXR0YWNoZWQgPSBmdW5jdGlvbiBhdHRhY2hlZCAoKSB7XHJcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gdGhpcy5wcm9wZXJ0aWVzO1xyXG5cclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgIG1wVHlwZTogaXNQYWdlLmNhbGwodGhpcykgPyAncGFnZScgOiAnY29tcG9uZW50JyxcclxuICAgICAgbXBJbnN0YW5jZTogdGhpcyxcclxuICAgICAgcHJvcHNEYXRhOiBwcm9wZXJ0aWVzXHJcbiAgICB9O1xyXG5cclxuICAgIGluaXRWdWVJZHMocHJvcGVydGllcy52dWVJZCwgdGhpcyk7XHJcblxyXG4gICAgLy8g5Yid5aeL5YyWIHZ1ZSDlrp7kvotcclxuICAgIHRoaXMuJHZtID0gbmV3IFZ1ZUNvbXBvbmVudChvcHRpb25zKTtcclxuXHJcbiAgICAvLyDlpITnkIYkc2xvdHMsJHNjb3BlZFNsb3Rz77yI5pqC5LiN5pSv5oyB5Yqo5oCB5Y+Y5YyWJHNsb3Rz77yJXHJcbiAgICBpbml0U2xvdHModGhpcy4kdm0sIHByb3BlcnRpZXMudnVlU2xvdHMpO1xyXG5cclxuICAgIC8vIOWkhOeQhueItuWtkOWFs+ezu1xyXG4gICAgaW5pdFJlbGF0aW9uLmNhbGwodGhpcywge1xyXG4gICAgICB2dWVQaWQ6IHRoaXMuXyR2dWVQaWQsXHJcbiAgICAgIG1wSW5zdGFuY2U6IHRoaXNcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIOinpuWPkemmluasoSBzZXREYXRhXHJcbiAgICB0aGlzLiR2bS4kbW91bnQoKTtcclxuICB9O1xyXG5cclxuICAvLyByZWFkeSDmr5QgaGFuZGxlTGluayDov5jml6nvvIzliJ3lp4vljJbpgLvovpHmlL7liLAgaGFuZGxlTGluayDkuK1cclxuICBkZWxldGUgY29tcG9uZW50T3B0aW9ucy5saWZldGltZXMucmVhZHk7XHJcblxyXG4gIGNvbXBvbmVudE9wdGlvbnMubWV0aG9kcy5fX2wgPSBoYW5kbGVMaW5rJDE7XHJcblxyXG4gIHJldHVybiBjb21wb25lbnRPcHRpb25zXHJcbn1cclxuXHJcbmNvbnN0IGhvb2tzJDEgPSBbXHJcbiAgJ29uU2hvdycsXHJcbiAgJ29uSGlkZScsXHJcbiAgJ29uVW5sb2FkJ1xyXG5dO1xyXG5cclxuaG9va3MkMS5wdXNoKC4uLlBBR0VfRVZFTlRfSE9PS1MpO1xyXG5cclxuZnVuY3Rpb24gcGFyc2VCYXNlUGFnZSAodnVlUGFnZU9wdGlvbnMsIHtcclxuICBpc1BhZ2UsXHJcbiAgaW5pdFJlbGF0aW9uXHJcbn0pIHtcclxuICBjb25zdCBwYWdlT3B0aW9ucyA9IHBhcnNlQ29tcG9uZW50KHZ1ZVBhZ2VPcHRpb25zKTtcclxuXHJcbiAgaW5pdEhvb2tzKHBhZ2VPcHRpb25zLm1ldGhvZHMsIGhvb2tzJDEsIHZ1ZVBhZ2VPcHRpb25zKTtcclxuXHJcbiAgcGFnZU9wdGlvbnMubWV0aG9kcy5vbkxvYWQgPSBmdW5jdGlvbiAocXVlcnkpIHtcclxuICAgIHRoaXMub3B0aW9ucyA9IHF1ZXJ5O1xyXG4gICAgY29uc3QgY29weVF1ZXJ5ID0gT2JqZWN0LmFzc2lnbih7fSwgcXVlcnkpO1xyXG4gICAgZGVsZXRlIGNvcHlRdWVyeS5fX2lkX187XHJcbiAgICB0aGlzLiRwYWdlID0ge1xyXG4gICAgICBmdWxsUGF0aDogJy8nICsgKHRoaXMucm91dGUgfHwgdGhpcy5pcykgKyBzdHJpbmdpZnlRdWVyeShjb3B5UXVlcnkpXHJcbiAgICB9O1xyXG4gICAgdGhpcy4kdm0uJG1wLnF1ZXJ5ID0gcXVlcnk7IC8vIOWFvOWuuSBtcHZ1ZVxyXG4gICAgdGhpcy4kdm0uX19jYWxsX2hvb2soJ29uTG9hZCcsIHF1ZXJ5KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gcGFnZU9wdGlvbnNcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VQYWdlICh2dWVQYWdlT3B0aW9ucykge1xyXG4gIGNvbnN0IHBhZ2VPcHRpb25zID0gcGFyc2VCYXNlUGFnZSh2dWVQYWdlT3B0aW9ucywge1xyXG4gICAgaXNQYWdlLFxyXG4gICAgaW5pdFJlbGF0aW9uXHJcbiAgfSk7XHJcbiAgLy8g6aG16Z2i6ZyA6KaB5ZyoIHJlYWR5IOS4reinpuWPke+8jOWFtuS7lue7hOS7tuaYr+WcqCBoYW5kbGVMaW5rIOS4reinpuWPkVxyXG4gIHBhZ2VPcHRpb25zLmxpZmV0aW1lcy5yZWFkeSA9IGZ1bmN0aW9uIHJlYWR5ICgpIHtcclxuICAgIGlmICh0aGlzLiR2bSAmJiB0aGlzLiR2bS5tcFR5cGUgPT09ICdwYWdlJykge1xyXG4gICAgICB0aGlzLiR2bS5fX2NhbGxfaG9vaygnY3JlYXRlZCcpO1xyXG4gICAgICB0aGlzLiR2bS5fX2NhbGxfaG9vaygnYmVmb3JlTW91bnQnKTtcclxuICAgICAgdGhpcy4kdm0uX2lzTW91bnRlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuJHZtLl9fY2FsbF9ob29rKCdtb3VudGVkJyk7XHJcbiAgICAgIHRoaXMuJHZtLl9fY2FsbF9ob29rKCdvblJlYWR5Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmlzICYmIGNvbnNvbGUud2Fybih0aGlzLmlzICsgJyBpcyBub3QgcmVhZHknKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwYWdlT3B0aW9ucy5saWZldGltZXMuZGV0YWNoZWQgPSBmdW5jdGlvbiBkZXRhY2hlZCAoKSB7XHJcbiAgICB0aGlzLiR2bSAmJiB0aGlzLiR2bS4kZGVzdHJveSgpO1xyXG4gICAgLy8g5riF55CGXHJcbiAgICBjb25zdCB3ZWJ2aWV3SWQgPSB0aGlzLl9fd2Vidmlld0lkX187XHJcbiAgICB3ZWJ2aWV3SWQgJiYgT2JqZWN0LmtleXMoaW5zdGFuY2VzKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgIGlmIChrZXkuaW5kZXhPZih3ZWJ2aWV3SWQgKyAnXycpID09PSAwKSB7XHJcbiAgICAgICAgZGVsZXRlIGluc3RhbmNlc1trZXldO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gcGFnZU9wdGlvbnNcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUGFnZSAodnVlUGFnZU9wdGlvbnMpIHtcclxuICB7XHJcbiAgICByZXR1cm4gQ29tcG9uZW50KHBhcnNlUGFnZSh2dWVQYWdlT3B0aW9ucykpXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb21wb25lbnQgKHZ1ZU9wdGlvbnMpIHtcclxuICB7XHJcbiAgICByZXR1cm4gQ29tcG9uZW50KHBhcnNlQ29tcG9uZW50KHZ1ZU9wdGlvbnMpKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3VicGFja2FnZUFwcCAodm0pIHtcclxuICBjb25zdCBhcHBPcHRpb25zID0gcGFyc2VBcHAodm0pO1xyXG4gIGNvbnN0IGFwcCA9IGdldEFwcCh7XHJcbiAgICBhbGxvd0RlZmF1bHQ6IHRydWVcclxuICB9KTtcclxuICBjb25zdCBnbG9iYWxEYXRhID0gYXBwLmdsb2JhbERhdGE7XHJcbiAgaWYgKGdsb2JhbERhdGEpIHtcclxuICAgIE9iamVjdC5rZXlzKGFwcE9wdGlvbnMuZ2xvYmFsRGF0YSkuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgaWYgKCFoYXNPd24oZ2xvYmFsRGF0YSwgbmFtZSkpIHtcclxuICAgICAgICBnbG9iYWxEYXRhW25hbWVdID0gYXBwT3B0aW9ucy5nbG9iYWxEYXRhW25hbWVdO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgT2JqZWN0LmtleXMoYXBwT3B0aW9ucykuZm9yRWFjaChuYW1lID0+IHtcclxuICAgIGlmICghaGFzT3duKGFwcCwgbmFtZSkpIHtcclxuICAgICAgYXBwW25hbWVdID0gYXBwT3B0aW9uc1tuYW1lXTtcclxuICAgIH1cclxuICB9KTtcclxuICBpZiAoaXNGbihhcHBPcHRpb25zLm9uU2hvdykgJiYgdHQub25BcHBTaG93KSB7XHJcbiAgICB0dC5vbkFwcFNob3coKC4uLmFyZ3MpID0+IHtcclxuICAgICAgYXBwT3B0aW9ucy5vblNob3cuYXBwbHkoYXBwLCBhcmdzKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBpZiAoaXNGbihhcHBPcHRpb25zLm9uSGlkZSkgJiYgdHQub25BcHBIaWRlKSB7XHJcbiAgICB0dC5vbkFwcEhpZGUoKC4uLmFyZ3MpID0+IHtcclxuICAgICAgYXBwT3B0aW9ucy5vbkhpZGUuYXBwbHkoYXBwLCBhcmdzKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBpZiAoaXNGbihhcHBPcHRpb25zLm9uTGF1bmNoKSkge1xyXG4gICAgY29uc3QgYXJncyA9IHR0LmdldExhdW5jaE9wdGlvbnNTeW5jICYmIHR0LmdldExhdW5jaE9wdGlvbnNTeW5jKCk7XHJcbiAgICBhcHBPcHRpb25zLm9uTGF1bmNoLmNhbGwoYXBwLCBhcmdzKTtcclxuICB9XHJcbiAgcmV0dXJuIHZtXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVBsdWdpbiAodm0pIHtcclxuICBjb25zdCBhcHBPcHRpb25zID0gcGFyc2VBcHAodm0pO1xyXG4gIGlmIChpc0ZuKGFwcE9wdGlvbnMub25TaG93KSAmJiB0dC5vbkFwcFNob3cpIHtcclxuICAgIHR0Lm9uQXBwU2hvdygoLi4uYXJncykgPT4ge1xyXG4gICAgICBhcHBPcHRpb25zLm9uU2hvdy5hcHBseSh2bSwgYXJncyk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgaWYgKGlzRm4oYXBwT3B0aW9ucy5vbkhpZGUpICYmIHR0Lm9uQXBwSGlkZSkge1xyXG4gICAgdHQub25BcHBIaWRlKCguLi5hcmdzKSA9PiB7XHJcbiAgICAgIGFwcE9wdGlvbnMub25IaWRlLmFwcGx5KHZtLCBhcmdzKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBpZiAoaXNGbihhcHBPcHRpb25zLm9uTGF1bmNoKSkge1xyXG4gICAgY29uc3QgYXJncyA9IHR0LmdldExhdW5jaE9wdGlvbnNTeW5jICYmIHR0LmdldExhdW5jaE9wdGlvbnNTeW5jKCk7XHJcbiAgICBhcHBPcHRpb25zLm9uTGF1bmNoLmNhbGwodm0sIGFyZ3MpO1xyXG4gIH1cclxuICByZXR1cm4gdm1cclxufVxyXG5cclxudG9kb3MuZm9yRWFjaCh0b2RvQXBpID0+IHtcclxuICBwcm90b2NvbHNbdG9kb0FwaV0gPSBmYWxzZTtcclxufSk7XHJcblxyXG5jYW5JVXNlcy5mb3JFYWNoKGNhbklVc2VBcGkgPT4ge1xyXG4gIGNvbnN0IGFwaU5hbWUgPSBwcm90b2NvbHNbY2FuSVVzZUFwaV0gJiYgcHJvdG9jb2xzW2NhbklVc2VBcGldLm5hbWUgPyBwcm90b2NvbHNbY2FuSVVzZUFwaV0ubmFtZVxyXG4gICAgOiBjYW5JVXNlQXBpO1xyXG4gIGlmICghdHQuY2FuSVVzZShhcGlOYW1lKSkge1xyXG4gICAgcHJvdG9jb2xzW2NhbklVc2VBcGldID0gZmFsc2U7XHJcbiAgfVxyXG59KTtcclxuXHJcbmxldCB1bmkgPSB7fTtcclxuXHJcbmlmICh0eXBlb2YgUHJveHkgIT09ICd1bmRlZmluZWQnICYmIFwibXAtdG91dGlhb1wiICE9PSAnYXBwLXBsdXMnKSB7XHJcbiAgdW5pID0gbmV3IFByb3h5KHt9LCB7XHJcbiAgICBnZXQgKHRhcmdldCwgbmFtZSkge1xyXG4gICAgICBpZiAoaGFzT3duKHRhcmdldCwgbmFtZSkpIHtcclxuICAgICAgICByZXR1cm4gdGFyZ2V0W25hbWVdXHJcbiAgICAgIH1cclxuICAgICAgaWYgKGJhc2VBcGlbbmFtZV0pIHtcclxuICAgICAgICByZXR1cm4gYmFzZUFwaVtuYW1lXVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChhcGlbbmFtZV0pIHtcclxuICAgICAgICByZXR1cm4gcHJvbWlzaWZ5KG5hbWUsIGFwaVtuYW1lXSlcclxuICAgICAgfVxyXG4gICAgICB7XHJcbiAgICAgICAgaWYgKGV4dHJhQXBpW25hbWVdKSB7XHJcbiAgICAgICAgICByZXR1cm4gcHJvbWlzaWZ5KG5hbWUsIGV4dHJhQXBpW25hbWVdKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodG9kb0FwaXNbbmFtZV0pIHtcclxuICAgICAgICAgIHJldHVybiBwcm9taXNpZnkobmFtZSwgdG9kb0FwaXNbbmFtZV0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChldmVudEFwaVtuYW1lXSkge1xyXG4gICAgICAgIHJldHVybiBldmVudEFwaVtuYW1lXVxyXG4gICAgICB9XHJcbiAgICAgIGlmICghaGFzT3duKHR0LCBuYW1lKSAmJiAhaGFzT3duKHByb3RvY29scywgbmFtZSkpIHtcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcHJvbWlzaWZ5KG5hbWUsIHdyYXBwZXIobmFtZSwgdHRbbmFtZV0pKVxyXG4gICAgfSxcclxuICAgIHNldCAodGFyZ2V0LCBuYW1lLCB2YWx1ZSkge1xyXG4gICAgICB0YXJnZXRbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICB9KTtcclxufSBlbHNlIHtcclxuICBPYmplY3Qua2V5cyhiYXNlQXBpKS5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgdW5pW25hbWVdID0gYmFzZUFwaVtuYW1lXTtcclxuICB9KTtcclxuXHJcbiAge1xyXG4gICAgT2JqZWN0LmtleXModG9kb0FwaXMpLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICAgIHVuaVtuYW1lXSA9IHByb21pc2lmeShuYW1lLCB0b2RvQXBpc1tuYW1lXSk7XHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5rZXlzKGV4dHJhQXBpKS5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICB1bmlbbmFtZV0gPSBwcm9taXNpZnkobmFtZSwgdG9kb0FwaXNbbmFtZV0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBPYmplY3Qua2V5cyhldmVudEFwaSkuZm9yRWFjaChuYW1lID0+IHtcclxuICAgIHVuaVtuYW1lXSA9IGV2ZW50QXBpW25hbWVdO1xyXG4gIH0pO1xyXG5cclxuICBPYmplY3Qua2V5cyhhcGkpLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICB1bmlbbmFtZV0gPSBwcm9taXNpZnkobmFtZSwgYXBpW25hbWVdKTtcclxuICB9KTtcclxuXHJcbiAgT2JqZWN0LmtleXModHQpLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICBpZiAoaGFzT3duKHR0LCBuYW1lKSB8fCBoYXNPd24ocHJvdG9jb2xzLCBuYW1lKSkge1xyXG4gICAgICB1bmlbbmFtZV0gPSBwcm9taXNpZnkobmFtZSwgd3JhcHBlcihuYW1lLCB0dFtuYW1lXSkpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG50dC5jcmVhdGVBcHAgPSBjcmVhdGVBcHA7XHJcbnR0LmNyZWF0ZVBhZ2UgPSBjcmVhdGVQYWdlO1xyXG50dC5jcmVhdGVDb21wb25lbnQgPSBjcmVhdGVDb21wb25lbnQ7XHJcbnR0LmNyZWF0ZVN1YnBhY2thZ2VBcHAgPSBjcmVhdGVTdWJwYWNrYWdlQXBwO1xyXG50dC5jcmVhdGVQbHVnaW4gPSBjcmVhdGVQbHVnaW47XHJcblxyXG52YXIgdW5pJDEgPSB1bmk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1bmkkMTtcclxuZXhwb3J0IHsgY3JlYXRlQXBwLCBjcmVhdGVDb21wb25lbnQsIGNyZWF0ZVBhZ2UsIGNyZWF0ZVBsdWdpbiwgY3JlYXRlU3VicGFja2FnZUFwcCB9O1xyXG4iLCIvKiFcbiAqIFZ1ZS5qcyB2Mi42LjExXG4gKiAoYykgMjAxNC0yMDIxIEV2YW4gWW91XG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cbi8qICAqL1xuXG52YXIgZW1wdHlPYmplY3QgPSBPYmplY3QuZnJlZXplKHt9KTtcblxuLy8gVGhlc2UgaGVscGVycyBwcm9kdWNlIGJldHRlciBWTSBjb2RlIGluIEpTIGVuZ2luZXMgZHVlIHRvIHRoZWlyXG4vLyBleHBsaWNpdG5lc3MgYW5kIGZ1bmN0aW9uIGlubGluaW5nLlxuZnVuY3Rpb24gaXNVbmRlZiAodikge1xuICByZXR1cm4gdiA9PT0gdW5kZWZpbmVkIHx8IHYgPT09IG51bGxcbn1cblxuZnVuY3Rpb24gaXNEZWYgKHYpIHtcbiAgcmV0dXJuIHYgIT09IHVuZGVmaW5lZCAmJiB2ICE9PSBudWxsXG59XG5cbmZ1bmN0aW9uIGlzVHJ1ZSAodikge1xuICByZXR1cm4gdiA9PT0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc0ZhbHNlICh2KSB7XG4gIHJldHVybiB2ID09PSBmYWxzZVxufVxuXG4vKipcbiAqIENoZWNrIGlmIHZhbHVlIGlzIHByaW1pdGl2ZS5cbiAqL1xuZnVuY3Rpb24gaXNQcmltaXRpdmUgKHZhbHVlKSB7XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fFxuICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgfHxcbiAgICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgICB0eXBlb2YgdmFsdWUgPT09ICdzeW1ib2wnIHx8XG4gICAgdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbidcbiAgKVxufVxuXG4vKipcbiAqIFF1aWNrIG9iamVjdCBjaGVjayAtIHRoaXMgaXMgcHJpbWFyaWx5IHVzZWQgdG8gdGVsbFxuICogT2JqZWN0cyBmcm9tIHByaW1pdGl2ZSB2YWx1ZXMgd2hlbiB3ZSBrbm93IHRoZSB2YWx1ZVxuICogaXMgYSBKU09OLWNvbXBsaWFudCB0eXBlLlxuICovXG5mdW5jdGlvbiBpc09iamVjdCAob2JqKSB7XG4gIHJldHVybiBvYmogIT09IG51bGwgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCdcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHJhdyB0eXBlIHN0cmluZyBvZiBhIHZhbHVlLCBlLmcuLCBbb2JqZWN0IE9iamVjdF0uXG4gKi9cbnZhciBfdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG5mdW5jdGlvbiB0b1Jhd1R5cGUgKHZhbHVlKSB7XG4gIHJldHVybiBfdG9TdHJpbmcuY2FsbCh2YWx1ZSkuc2xpY2UoOCwgLTEpXG59XG5cbi8qKlxuICogU3RyaWN0IG9iamVjdCB0eXBlIGNoZWNrLiBPbmx5IHJldHVybnMgdHJ1ZVxuICogZm9yIHBsYWluIEphdmFTY3JpcHQgb2JqZWN0cy5cbiAqL1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCAob2JqKSB7XG4gIHJldHVybiBfdG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBPYmplY3RdJ1xufVxuXG5mdW5jdGlvbiBpc1JlZ0V4cCAodikge1xuICByZXR1cm4gX3RvU3RyaW5nLmNhbGwodikgPT09ICdbb2JqZWN0IFJlZ0V4cF0nXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdmFsIGlzIGEgdmFsaWQgYXJyYXkgaW5kZXguXG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWRBcnJheUluZGV4ICh2YWwpIHtcbiAgdmFyIG4gPSBwYXJzZUZsb2F0KFN0cmluZyh2YWwpKTtcbiAgcmV0dXJuIG4gPj0gMCAmJiBNYXRoLmZsb29yKG4pID09PSBuICYmIGlzRmluaXRlKHZhbClcbn1cblxuZnVuY3Rpb24gaXNQcm9taXNlICh2YWwpIHtcbiAgcmV0dXJuIChcbiAgICBpc0RlZih2YWwpICYmXG4gICAgdHlwZW9mIHZhbC50aGVuID09PSAnZnVuY3Rpb24nICYmXG4gICAgdHlwZW9mIHZhbC5jYXRjaCA9PT0gJ2Z1bmN0aW9uJ1xuICApXG59XG5cbi8qKlxuICogQ29udmVydCBhIHZhbHVlIHRvIGEgc3RyaW5nIHRoYXQgaXMgYWN0dWFsbHkgcmVuZGVyZWQuXG4gKi9cbmZ1bmN0aW9uIHRvU3RyaW5nICh2YWwpIHtcbiAgcmV0dXJuIHZhbCA9PSBudWxsXG4gICAgPyAnJ1xuICAgIDogQXJyYXkuaXNBcnJheSh2YWwpIHx8IChpc1BsYWluT2JqZWN0KHZhbCkgJiYgdmFsLnRvU3RyaW5nID09PSBfdG9TdHJpbmcpXG4gICAgICA/IEpTT04uc3RyaW5naWZ5KHZhbCwgbnVsbCwgMilcbiAgICAgIDogU3RyaW5nKHZhbClcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGFuIGlucHV0IHZhbHVlIHRvIGEgbnVtYmVyIGZvciBwZXJzaXN0ZW5jZS5cbiAqIElmIHRoZSBjb252ZXJzaW9uIGZhaWxzLCByZXR1cm4gb3JpZ2luYWwgc3RyaW5nLlxuICovXG5mdW5jdGlvbiB0b051bWJlciAodmFsKSB7XG4gIHZhciBuID0gcGFyc2VGbG9hdCh2YWwpO1xuICByZXR1cm4gaXNOYU4obikgPyB2YWwgOiBuXG59XG5cbi8qKlxuICogTWFrZSBhIG1hcCBhbmQgcmV0dXJuIGEgZnVuY3Rpb24gZm9yIGNoZWNraW5nIGlmIGEga2V5XG4gKiBpcyBpbiB0aGF0IG1hcC5cbiAqL1xuZnVuY3Rpb24gbWFrZU1hcCAoXG4gIHN0cixcbiAgZXhwZWN0c0xvd2VyQ2FzZVxuKSB7XG4gIHZhciBtYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB2YXIgbGlzdCA9IHN0ci5zcGxpdCgnLCcpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBtYXBbbGlzdFtpXV0gPSB0cnVlO1xuICB9XG4gIHJldHVybiBleHBlY3RzTG93ZXJDYXNlXG4gICAgPyBmdW5jdGlvbiAodmFsKSB7IHJldHVybiBtYXBbdmFsLnRvTG93ZXJDYXNlKCldOyB9XG4gICAgOiBmdW5jdGlvbiAodmFsKSB7IHJldHVybiBtYXBbdmFsXTsgfVxufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgdGFnIGlzIGEgYnVpbHQtaW4gdGFnLlxuICovXG52YXIgaXNCdWlsdEluVGFnID0gbWFrZU1hcCgnc2xvdCxjb21wb25lbnQnLCB0cnVlKTtcblxuLyoqXG4gKiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgaXMgYSByZXNlcnZlZCBhdHRyaWJ1dGUuXG4gKi9cbnZhciBpc1Jlc2VydmVkQXR0cmlidXRlID0gbWFrZU1hcCgna2V5LHJlZixzbG90LHNsb3Qtc2NvcGUsaXMnKTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gaXRlbSBmcm9tIGFuIGFycmF5LlxuICovXG5mdW5jdGlvbiByZW1vdmUgKGFyciwgaXRlbSkge1xuICBpZiAoYXJyLmxlbmd0aCkge1xuICAgIHZhciBpbmRleCA9IGFyci5pbmRleE9mKGl0ZW0pO1xuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICByZXR1cm4gYXJyLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIGFuIG9iamVjdCBoYXMgdGhlIHByb3BlcnR5LlxuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuZnVuY3Rpb24gaGFzT3duIChvYmosIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSlcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBjYWNoZWQgdmVyc2lvbiBvZiBhIHB1cmUgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNhY2hlZCAoZm4pIHtcbiAgdmFyIGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgcmV0dXJuIChmdW5jdGlvbiBjYWNoZWRGbiAoc3RyKSB7XG4gICAgdmFyIGhpdCA9IGNhY2hlW3N0cl07XG4gICAgcmV0dXJuIGhpdCB8fCAoY2FjaGVbc3RyXSA9IGZuKHN0cikpXG4gIH0pXG59XG5cbi8qKlxuICogQ2FtZWxpemUgYSBoeXBoZW4tZGVsaW1pdGVkIHN0cmluZy5cbiAqL1xudmFyIGNhbWVsaXplUkUgPSAvLShcXHcpL2c7XG52YXIgY2FtZWxpemUgPSBjYWNoZWQoZnVuY3Rpb24gKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoY2FtZWxpemVSRSwgZnVuY3Rpb24gKF8sIGMpIHsgcmV0dXJuIGMgPyBjLnRvVXBwZXJDYXNlKCkgOiAnJzsgfSlcbn0pO1xuXG4vKipcbiAqIENhcGl0YWxpemUgYSBzdHJpbmcuXG4gKi9cbnZhciBjYXBpdGFsaXplID0gY2FjaGVkKGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKVxufSk7XG5cbi8qKlxuICogSHlwaGVuYXRlIGEgY2FtZWxDYXNlIHN0cmluZy5cbiAqL1xudmFyIGh5cGhlbmF0ZVJFID0gL1xcQihbQS1aXSkvZztcbnZhciBoeXBoZW5hdGUgPSBjYWNoZWQoZnVuY3Rpb24gKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoaHlwaGVuYXRlUkUsICctJDEnKS50b0xvd2VyQ2FzZSgpXG59KTtcblxuLyoqXG4gKiBTaW1wbGUgYmluZCBwb2x5ZmlsbCBmb3IgZW52aXJvbm1lbnRzIHRoYXQgZG8gbm90IHN1cHBvcnQgaXQsXG4gKiBlLmcuLCBQaGFudG9tSlMgMS54LiBUZWNobmljYWxseSwgd2UgZG9uJ3QgbmVlZCB0aGlzIGFueW1vcmVcbiAqIHNpbmNlIG5hdGl2ZSBiaW5kIGlzIG5vdyBwZXJmb3JtYW50IGVub3VnaCBpbiBtb3N0IGJyb3dzZXJzLlxuICogQnV0IHJlbW92aW5nIGl0IHdvdWxkIG1lYW4gYnJlYWtpbmcgY29kZSB0aGF0IHdhcyBhYmxlIHRvIHJ1biBpblxuICogUGhhbnRvbUpTIDEueCwgc28gdGhpcyBtdXN0IGJlIGtlcHQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkuXG4gKi9cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmZ1bmN0aW9uIHBvbHlmaWxsQmluZCAoZm4sIGN0eCkge1xuICBmdW5jdGlvbiBib3VuZEZuIChhKSB7XG4gICAgdmFyIGwgPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHJldHVybiBsXG4gICAgICA/IGwgPiAxXG4gICAgICAgID8gZm4uYXBwbHkoY3R4LCBhcmd1bWVudHMpXG4gICAgICAgIDogZm4uY2FsbChjdHgsIGEpXG4gICAgICA6IGZuLmNhbGwoY3R4KVxuICB9XG5cbiAgYm91bmRGbi5fbGVuZ3RoID0gZm4ubGVuZ3RoO1xuICByZXR1cm4gYm91bmRGblxufVxuXG5mdW5jdGlvbiBuYXRpdmVCaW5kIChmbiwgY3R4KSB7XG4gIHJldHVybiBmbi5iaW5kKGN0eClcbn1cblxudmFyIGJpbmQgPSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZFxuICA/IG5hdGl2ZUJpbmRcbiAgOiBwb2x5ZmlsbEJpbmQ7XG5cbi8qKlxuICogQ29udmVydCBhbiBBcnJheS1saWtlIG9iamVjdCB0byBhIHJlYWwgQXJyYXkuXG4gKi9cbmZ1bmN0aW9uIHRvQXJyYXkgKGxpc3QsIHN0YXJ0KSB7XG4gIHN0YXJ0ID0gc3RhcnQgfHwgMDtcbiAgdmFyIGkgPSBsaXN0Lmxlbmd0aCAtIHN0YXJ0O1xuICB2YXIgcmV0ID0gbmV3IEFycmF5KGkpO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgcmV0W2ldID0gbGlzdFtpICsgc3RhcnRdO1xuICB9XG4gIHJldHVybiByZXRcbn1cblxuLyoqXG4gKiBNaXggcHJvcGVydGllcyBpbnRvIHRhcmdldCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZCAodG8sIF9mcm9tKSB7XG4gIGZvciAodmFyIGtleSBpbiBfZnJvbSkge1xuICAgIHRvW2tleV0gPSBfZnJvbVtrZXldO1xuICB9XG4gIHJldHVybiB0b1xufVxuXG4vKipcbiAqIE1lcmdlIGFuIEFycmF5IG9mIE9iamVjdHMgaW50byBhIHNpbmdsZSBPYmplY3QuXG4gKi9cbmZ1bmN0aW9uIHRvT2JqZWN0IChhcnIpIHtcbiAgdmFyIHJlcyA9IHt9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGlmIChhcnJbaV0pIHtcbiAgICAgIGV4dGVuZChyZXMsIGFycltpXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuLyoqXG4gKiBQZXJmb3JtIG5vIG9wZXJhdGlvbi5cbiAqIFN0dWJiaW5nIGFyZ3MgdG8gbWFrZSBGbG93IGhhcHB5IHdpdGhvdXQgbGVhdmluZyB1c2VsZXNzIHRyYW5zcGlsZWQgY29kZVxuICogd2l0aCAuLi5yZXN0IChodHRwczovL2Zsb3cub3JnL2Jsb2cvMjAxNy8wNS8wNy9TdHJpY3QtRnVuY3Rpb24tQ2FsbC1Bcml0eS8pLlxuICovXG5mdW5jdGlvbiBub29wIChhLCBiLCBjKSB7fVxuXG4vKipcbiAqIEFsd2F5cyByZXR1cm4gZmFsc2UuXG4gKi9cbnZhciBubyA9IGZ1bmN0aW9uIChhLCBiLCBjKSB7IHJldHVybiBmYWxzZTsgfTtcblxuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG4vKipcbiAqIFJldHVybiB0aGUgc2FtZSB2YWx1ZS5cbiAqL1xudmFyIGlkZW50aXR5ID0gZnVuY3Rpb24gKF8pIHsgcmV0dXJuIF87IH07XG5cbi8qKlxuICogQ2hlY2sgaWYgdHdvIHZhbHVlcyBhcmUgbG9vc2VseSBlcXVhbCAtIHRoYXQgaXMsXG4gKiBpZiB0aGV5IGFyZSBwbGFpbiBvYmplY3RzLCBkbyB0aGV5IGhhdmUgdGhlIHNhbWUgc2hhcGU/XG4gKi9cbmZ1bmN0aW9uIGxvb3NlRXF1YWwgKGEsIGIpIHtcbiAgaWYgKGEgPT09IGIpIHsgcmV0dXJuIHRydWUgfVxuICB2YXIgaXNPYmplY3RBID0gaXNPYmplY3QoYSk7XG4gIHZhciBpc09iamVjdEIgPSBpc09iamVjdChiKTtcbiAgaWYgKGlzT2JqZWN0QSAmJiBpc09iamVjdEIpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIGlzQXJyYXlBID0gQXJyYXkuaXNBcnJheShhKTtcbiAgICAgIHZhciBpc0FycmF5QiA9IEFycmF5LmlzQXJyYXkoYik7XG4gICAgICBpZiAoaXNBcnJheUEgJiYgaXNBcnJheUIpIHtcbiAgICAgICAgcmV0dXJuIGEubGVuZ3RoID09PSBiLmxlbmd0aCAmJiBhLmV2ZXJ5KGZ1bmN0aW9uIChlLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIGxvb3NlRXF1YWwoZSwgYltpXSlcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAoYSBpbnN0YW5jZW9mIERhdGUgJiYgYiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuIGEuZ2V0VGltZSgpID09PSBiLmdldFRpbWUoKVxuICAgICAgfSBlbHNlIGlmICghaXNBcnJheUEgJiYgIWlzQXJyYXlCKSB7XG4gICAgICAgIHZhciBrZXlzQSA9IE9iamVjdC5rZXlzKGEpO1xuICAgICAgICB2YXIga2V5c0IgPSBPYmplY3Qua2V5cyhiKTtcbiAgICAgICAgcmV0dXJuIGtleXNBLmxlbmd0aCA9PT0ga2V5c0IubGVuZ3RoICYmIGtleXNBLmV2ZXJ5KGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICByZXR1cm4gbG9vc2VFcXVhbChhW2tleV0sIGJba2V5XSlcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH0gZWxzZSBpZiAoIWlzT2JqZWN0QSAmJiAhaXNPYmplY3RCKSB7XG4gICAgcmV0dXJuIFN0cmluZyhhKSA9PT0gU3RyaW5nKGIpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIGZpcnN0IGluZGV4IGF0IHdoaWNoIGEgbG9vc2VseSBlcXVhbCB2YWx1ZSBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBhcnJheSAoaWYgdmFsdWUgaXMgYSBwbGFpbiBvYmplY3QsIHRoZSBhcnJheSBtdXN0XG4gKiBjb250YWluIGFuIG9iamVjdCBvZiB0aGUgc2FtZSBzaGFwZSksIG9yIC0xIGlmIGl0IGlzIG5vdCBwcmVzZW50LlxuICovXG5mdW5jdGlvbiBsb29zZUluZGV4T2YgKGFyciwgdmFsKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGxvb3NlRXF1YWwoYXJyW2ldLCB2YWwpKSB7IHJldHVybiBpIH1cbiAgfVxuICByZXR1cm4gLTFcbn1cblxuLyoqXG4gKiBFbnN1cmUgYSBmdW5jdGlvbiBpcyBjYWxsZWQgb25seSBvbmNlLlxuICovXG5mdW5jdGlvbiBvbmNlIChmbikge1xuICB2YXIgY2FsbGVkID0gZmFsc2U7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgQVNTRVRfVFlQRVMgPSBbXG4gICdjb21wb25lbnQnLFxuICAnZGlyZWN0aXZlJyxcbiAgJ2ZpbHRlcidcbl07XG5cbnZhciBMSUZFQ1lDTEVfSE9PS1MgPSBbXG4gICdiZWZvcmVDcmVhdGUnLFxuICAnY3JlYXRlZCcsXG4gICdiZWZvcmVNb3VudCcsXG4gICdtb3VudGVkJyxcbiAgJ2JlZm9yZVVwZGF0ZScsXG4gICd1cGRhdGVkJyxcbiAgJ2JlZm9yZURlc3Ryb3knLFxuICAnZGVzdHJveWVkJyxcbiAgJ2FjdGl2YXRlZCcsXG4gICdkZWFjdGl2YXRlZCcsXG4gICdlcnJvckNhcHR1cmVkJyxcbiAgJ3NlcnZlclByZWZldGNoJ1xuXTtcblxuLyogICovXG5cblxuXG52YXIgY29uZmlnID0gKHtcbiAgLyoqXG4gICAqIE9wdGlvbiBtZXJnZSBzdHJhdGVnaWVzICh1c2VkIGluIGNvcmUvdXRpbC9vcHRpb25zKVxuICAgKi9cbiAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gIG9wdGlvbk1lcmdlU3RyYXRlZ2llczogT2JqZWN0LmNyZWF0ZShudWxsKSxcblxuICAvKipcbiAgICogV2hldGhlciB0byBzdXBwcmVzcyB3YXJuaW5ncy5cbiAgICovXG4gIHNpbGVudDogZmFsc2UsXG5cbiAgLyoqXG4gICAqIFNob3cgcHJvZHVjdGlvbiBtb2RlIHRpcCBtZXNzYWdlIG9uIGJvb3Q/XG4gICAqL1xuICBwcm9kdWN0aW9uVGlwOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nLFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIGVuYWJsZSBkZXZ0b29sc1xuICAgKi9cbiAgZGV2dG9vbHM6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicsXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gcmVjb3JkIHBlcmZcbiAgICovXG4gIHBlcmZvcm1hbmNlOiBmYWxzZSxcblxuICAvKipcbiAgICogRXJyb3IgaGFuZGxlciBmb3Igd2F0Y2hlciBlcnJvcnNcbiAgICovXG4gIGVycm9ySGFuZGxlcjogbnVsbCxcblxuICAvKipcbiAgICogV2FybiBoYW5kbGVyIGZvciB3YXRjaGVyIHdhcm5zXG4gICAqL1xuICB3YXJuSGFuZGxlcjogbnVsbCxcblxuICAvKipcbiAgICogSWdub3JlIGNlcnRhaW4gY3VzdG9tIGVsZW1lbnRzXG4gICAqL1xuICBpZ25vcmVkRWxlbWVudHM6IFtdLFxuXG4gIC8qKlxuICAgKiBDdXN0b20gdXNlciBrZXkgYWxpYXNlcyBmb3Igdi1vblxuICAgKi9cbiAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gIGtleUNvZGVzOiBPYmplY3QuY3JlYXRlKG51bGwpLFxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhIHRhZyBpcyByZXNlcnZlZCBzbyB0aGF0IGl0IGNhbm5vdCBiZSByZWdpc3RlcmVkIGFzIGFcbiAgICogY29tcG9uZW50LiBUaGlzIGlzIHBsYXRmb3JtLWRlcGVuZGVudCBhbmQgbWF5IGJlIG92ZXJ3cml0dGVuLlxuICAgKi9cbiAgaXNSZXNlcnZlZFRhZzogbm8sXG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBpcyByZXNlcnZlZCBzbyB0aGF0IGl0IGNhbm5vdCBiZSB1c2VkIGFzIGEgY29tcG9uZW50XG4gICAqIHByb3AuIFRoaXMgaXMgcGxhdGZvcm0tZGVwZW5kZW50IGFuZCBtYXkgYmUgb3ZlcndyaXR0ZW4uXG4gICAqL1xuICBpc1Jlc2VydmVkQXR0cjogbm8sXG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGEgdGFnIGlzIGFuIHVua25vd24gZWxlbWVudC5cbiAgICogUGxhdGZvcm0tZGVwZW5kZW50LlxuICAgKi9cbiAgaXNVbmtub3duRWxlbWVudDogbm8sXG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbmFtZXNwYWNlIG9mIGFuIGVsZW1lbnRcbiAgICovXG4gIGdldFRhZ05hbWVzcGFjZTogbm9vcCxcblxuICAvKipcbiAgICogUGFyc2UgdGhlIHJlYWwgdGFnIG5hbWUgZm9yIHRoZSBzcGVjaWZpYyBwbGF0Zm9ybS5cbiAgICovXG4gIHBhcnNlUGxhdGZvcm1UYWdOYW1lOiBpZGVudGl0eSxcblxuICAvKipcbiAgICogQ2hlY2sgaWYgYW4gYXR0cmlidXRlIG11c3QgYmUgYm91bmQgdXNpbmcgcHJvcGVydHksIGUuZy4gdmFsdWVcbiAgICogUGxhdGZvcm0tZGVwZW5kZW50LlxuICAgKi9cbiAgbXVzdFVzZVByb3A6IG5vLFxuXG4gIC8qKlxuICAgKiBQZXJmb3JtIHVwZGF0ZXMgYXN5bmNocm9ub3VzbHkuIEludGVuZGVkIHRvIGJlIHVzZWQgYnkgVnVlIFRlc3QgVXRpbHNcbiAgICogVGhpcyB3aWxsIHNpZ25pZmljYW50bHkgcmVkdWNlIHBlcmZvcm1hbmNlIGlmIHNldCB0byBmYWxzZS5cbiAgICovXG4gIGFzeW5jOiB0cnVlLFxuXG4gIC8qKlxuICAgKiBFeHBvc2VkIGZvciBsZWdhY3kgcmVhc29uc1xuICAgKi9cbiAgX2xpZmVjeWNsZUhvb2tzOiBMSUZFQ1lDTEVfSE9PS1Ncbn0pO1xuXG4vKiAgKi9cblxuLyoqXG4gKiB1bmljb2RlIGxldHRlcnMgdXNlZCBmb3IgcGFyc2luZyBodG1sIHRhZ3MsIGNvbXBvbmVudCBuYW1lcyBhbmQgcHJvcGVydHkgcGF0aHMuXG4gKiB1c2luZyBodHRwczovL3d3dy53My5vcmcvVFIvaHRtbDUzL3NlbWFudGljcy1zY3JpcHRpbmcuaHRtbCNwb3RlbnRpYWxjdXN0b21lbGVtZW50bmFtZVxuICogc2tpcHBpbmcgXFx1MTAwMDAtXFx1RUZGRkYgZHVlIHRvIGl0IGZyZWV6aW5nIHVwIFBoYW50b21KU1xuICovXG52YXIgdW5pY29kZVJlZ0V4cCA9IC9hLXpBLVpcXHUwMEI3XFx1MDBDMC1cXHUwMEQ2XFx1MDBEOC1cXHUwMEY2XFx1MDBGOC1cXHUwMzdEXFx1MDM3Ri1cXHUxRkZGXFx1MjAwQy1cXHUyMDBEXFx1MjAzRi1cXHUyMDQwXFx1MjA3MC1cXHUyMThGXFx1MkMwMC1cXHUyRkVGXFx1MzAwMS1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkZELztcblxuLyoqXG4gKiBDaGVjayBpZiBhIHN0cmluZyBzdGFydHMgd2l0aCAkIG9yIF9cbiAqL1xuZnVuY3Rpb24gaXNSZXNlcnZlZCAoc3RyKSB7XG4gIHZhciBjID0gKHN0ciArICcnKS5jaGFyQ29kZUF0KDApO1xuICByZXR1cm4gYyA9PT0gMHgyNCB8fCBjID09PSAweDVGXG59XG5cbi8qKlxuICogRGVmaW5lIGEgcHJvcGVydHkuXG4gKi9cbmZ1bmN0aW9uIGRlZiAob2JqLCBrZXksIHZhbCwgZW51bWVyYWJsZSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICB2YWx1ZTogdmFsLFxuICAgIGVudW1lcmFibGU6ICEhZW51bWVyYWJsZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbi8qKlxuICogUGFyc2Ugc2ltcGxlIHBhdGguXG4gKi9cbnZhciBiYWlsUkUgPSBuZXcgUmVnRXhwKChcIlteXCIgKyAodW5pY29kZVJlZ0V4cC5zb3VyY2UpICsgXCIuJF9cXFxcZF1cIikpO1xuZnVuY3Rpb24gcGFyc2VQYXRoIChwYXRoKSB7XG4gIGlmIChiYWlsUkUudGVzdChwYXRoKSkge1xuICAgIHJldHVyblxuICB9XG4gIHZhciBzZWdtZW50cyA9IHBhdGguc3BsaXQoJy4nKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChvYmopIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlZ21lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIW9iaikgeyByZXR1cm4gfVxuICAgICAgb2JqID0gb2JqW3NlZ21lbnRzW2ldXTtcbiAgICB9XG4gICAgcmV0dXJuIG9ialxuICB9XG59XG5cbi8qICAqL1xuXG4vLyBjYW4gd2UgdXNlIF9fcHJvdG9fXz9cbnZhciBoYXNQcm90byA9ICdfX3Byb3RvX18nIGluIHt9O1xuXG4vLyBCcm93c2VyIGVudmlyb25tZW50IHNuaWZmaW5nXG52YXIgaW5Ccm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG52YXIgaW5XZWV4ID0gdHlwZW9mIFdYRW52aXJvbm1lbnQgIT09ICd1bmRlZmluZWQnICYmICEhV1hFbnZpcm9ubWVudC5wbGF0Zm9ybTtcbnZhciB3ZWV4UGxhdGZvcm0gPSBpbldlZXggJiYgV1hFbnZpcm9ubWVudC5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpO1xudmFyIFVBID0gaW5Ccm93c2VyICYmIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG52YXIgaXNJRSA9IFVBICYmIC9tc2llfHRyaWRlbnQvLnRlc3QoVUEpO1xudmFyIGlzSUU5ID0gVUEgJiYgVUEuaW5kZXhPZignbXNpZSA5LjAnKSA+IDA7XG52YXIgaXNFZGdlID0gVUEgJiYgVUEuaW5kZXhPZignZWRnZS8nKSA+IDA7XG52YXIgaXNBbmRyb2lkID0gKFVBICYmIFVBLmluZGV4T2YoJ2FuZHJvaWQnKSA+IDApIHx8ICh3ZWV4UGxhdGZvcm0gPT09ICdhbmRyb2lkJyk7XG52YXIgaXNJT1MgPSAoVUEgJiYgL2lwaG9uZXxpcGFkfGlwb2R8aW9zLy50ZXN0KFVBKSkgfHwgKHdlZXhQbGF0Zm9ybSA9PT0gJ2lvcycpO1xudmFyIGlzQ2hyb21lID0gVUEgJiYgL2Nocm9tZVxcL1xcZCsvLnRlc3QoVUEpICYmICFpc0VkZ2U7XG52YXIgaXNQaGFudG9tSlMgPSBVQSAmJiAvcGhhbnRvbWpzLy50ZXN0KFVBKTtcbnZhciBpc0ZGID0gVUEgJiYgVUEubWF0Y2goL2ZpcmVmb3hcXC8oXFxkKykvKTtcblxuLy8gRmlyZWZveCBoYXMgYSBcIndhdGNoXCIgZnVuY3Rpb24gb24gT2JqZWN0LnByb3RvdHlwZS4uLlxudmFyIG5hdGl2ZVdhdGNoID0gKHt9KS53YXRjaDtcbmlmIChpbkJyb3dzZXIpIHtcbiAgdHJ5IHtcbiAgICB2YXIgb3B0cyA9IHt9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvcHRzLCAncGFzc2l2ZScsICh7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCAoKSB7XG4gICAgICB9XG4gICAgfSkpOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmxvdy9pc3N1ZXMvMjg1XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QtcGFzc2l2ZScsIG51bGwsIG9wdHMpO1xuICB9IGNhdGNoIChlKSB7fVxufVxuXG4vLyB0aGlzIG5lZWRzIHRvIGJlIGxhenktZXZhbGVkIGJlY2F1c2UgdnVlIG1heSBiZSByZXF1aXJlZCBiZWZvcmVcbi8vIHZ1ZS1zZXJ2ZXItcmVuZGVyZXIgY2FuIHNldCBWVUVfRU5WXG52YXIgX2lzU2VydmVyO1xudmFyIGlzU2VydmVyUmVuZGVyaW5nID0gZnVuY3Rpb24gKCkge1xuICBpZiAoX2lzU2VydmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIWluQnJvd3NlciAmJiAhaW5XZWV4ICYmIHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBkZXRlY3QgcHJlc2VuY2Ugb2YgdnVlLXNlcnZlci1yZW5kZXJlciBhbmQgYXZvaWRcbiAgICAgIC8vIFdlYnBhY2sgc2hpbW1pbmcgdGhlIHByb2Nlc3NcbiAgICAgIF9pc1NlcnZlciA9IGdsb2JhbFsncHJvY2VzcyddICYmIGdsb2JhbFsncHJvY2VzcyddLmVudi5WVUVfRU5WID09PSAnc2VydmVyJztcbiAgICB9IGVsc2Uge1xuICAgICAgX2lzU2VydmVyID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiBfaXNTZXJ2ZXJcbn07XG5cbi8vIGRldGVjdCBkZXZ0b29sc1xudmFyIGRldnRvb2xzID0gaW5Ccm93c2VyICYmIHdpbmRvdy5fX1ZVRV9ERVZUT09MU19HTE9CQUxfSE9PS19fO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZnVuY3Rpb24gaXNOYXRpdmUgKEN0b3IpIHtcbiAgcmV0dXJuIHR5cGVvZiBDdG9yID09PSAnZnVuY3Rpb24nICYmIC9uYXRpdmUgY29kZS8udGVzdChDdG9yLnRvU3RyaW5nKCkpXG59XG5cbnZhciBoYXNTeW1ib2wgPVxuICB0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShTeW1ib2wpICYmXG4gIHR5cGVvZiBSZWZsZWN0ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShSZWZsZWN0Lm93bktleXMpO1xuXG52YXIgX1NldDtcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqLyAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbmlmICh0eXBlb2YgU2V0ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShTZXQpKSB7XG4gIC8vIHVzZSBuYXRpdmUgU2V0IHdoZW4gYXZhaWxhYmxlLlxuICBfU2V0ID0gU2V0O1xufSBlbHNlIHtcbiAgLy8gYSBub24tc3RhbmRhcmQgU2V0IHBvbHlmaWxsIHRoYXQgb25seSB3b3JrcyB3aXRoIHByaW1pdGl2ZSBrZXlzLlxuICBfU2V0ID0gLypAX19QVVJFX18qLyhmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2V0ICgpIHtcbiAgICAgIHRoaXMuc2V0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB9XG4gICAgU2V0LnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiBoYXMgKGtleSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0W2tleV0gPT09IHRydWVcbiAgICB9O1xuICAgIFNldC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gYWRkIChrZXkpIHtcbiAgICAgIHRoaXMuc2V0W2tleV0gPSB0cnVlO1xuICAgIH07XG4gICAgU2V0LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyICgpIHtcbiAgICAgIHRoaXMuc2V0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFNldDtcbiAgfSgpKTtcbn1cblxuLyogICovXG5cbnZhciB3YXJuID0gbm9vcDtcbnZhciB0aXAgPSBub29wO1xudmFyIGdlbmVyYXRlQ29tcG9uZW50VHJhY2UgPSAobm9vcCk7IC8vIHdvcmsgYXJvdW5kIGZsb3cgY2hlY2tcbnZhciBmb3JtYXRDb21wb25lbnROYW1lID0gKG5vb3ApO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgaGFzQ29uc29sZSA9IHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJztcbiAgdmFyIGNsYXNzaWZ5UkUgPSAvKD86XnxbLV9dKShcXHcpL2c7XG4gIHZhciBjbGFzc2lmeSA9IGZ1bmN0aW9uIChzdHIpIHsgcmV0dXJuIHN0clxuICAgIC5yZXBsYWNlKGNsYXNzaWZ5UkUsIGZ1bmN0aW9uIChjKSB7IHJldHVybiBjLnRvVXBwZXJDYXNlKCk7IH0pXG4gICAgLnJlcGxhY2UoL1stX10vZywgJycpOyB9O1xuXG4gIHdhcm4gPSBmdW5jdGlvbiAobXNnLCB2bSkge1xuICAgIHZhciB0cmFjZSA9IHZtID8gZ2VuZXJhdGVDb21wb25lbnRUcmFjZSh2bSkgOiAnJztcblxuICAgIGlmIChjb25maWcud2FybkhhbmRsZXIpIHtcbiAgICAgIGNvbmZpZy53YXJuSGFuZGxlci5jYWxsKG51bGwsIG1zZywgdm0sIHRyYWNlKTtcbiAgICB9IGVsc2UgaWYgKGhhc0NvbnNvbGUgJiYgKCFjb25maWcuc2lsZW50KSkge1xuICAgICAgY29uc29sZS5lcnJvcigoXCJbVnVlIHdhcm5dOiBcIiArIG1zZyArIHRyYWNlKSk7XG4gICAgfVxuICB9O1xuXG4gIHRpcCA9IGZ1bmN0aW9uIChtc2csIHZtKSB7XG4gICAgaWYgKGhhc0NvbnNvbGUgJiYgKCFjb25maWcuc2lsZW50KSkge1xuICAgICAgY29uc29sZS53YXJuKFwiW1Z1ZSB0aXBdOiBcIiArIG1zZyArIChcbiAgICAgICAgdm0gPyBnZW5lcmF0ZUNvbXBvbmVudFRyYWNlKHZtKSA6ICcnXG4gICAgICApKTtcbiAgICB9XG4gIH07XG5cbiAgZm9ybWF0Q29tcG9uZW50TmFtZSA9IGZ1bmN0aW9uICh2bSwgaW5jbHVkZUZpbGUpIHtcbiAgICBpZiAodm0uJHJvb3QgPT09IHZtKSB7XG4gICAgICBpZiAodm0uJG9wdGlvbnMgJiYgdm0uJG9wdGlvbnMuX19maWxlKSB7IC8vIGZpeGVkIGJ5IHh4eHh4eFxuICAgICAgICByZXR1cm4gKCcnKSArIHZtLiRvcHRpb25zLl9fZmlsZVxuICAgICAgfVxuICAgICAgcmV0dXJuICc8Um9vdD4nXG4gICAgfVxuICAgIHZhciBvcHRpb25zID0gdHlwZW9mIHZtID09PSAnZnVuY3Rpb24nICYmIHZtLmNpZCAhPSBudWxsXG4gICAgICA/IHZtLm9wdGlvbnNcbiAgICAgIDogdm0uX2lzVnVlXG4gICAgICAgID8gdm0uJG9wdGlvbnMgfHwgdm0uY29uc3RydWN0b3Iub3B0aW9uc1xuICAgICAgICA6IHZtO1xuICAgIHZhciBuYW1lID0gb3B0aW9ucy5uYW1lIHx8IG9wdGlvbnMuX2NvbXBvbmVudFRhZztcbiAgICB2YXIgZmlsZSA9IG9wdGlvbnMuX19maWxlO1xuICAgIGlmICghbmFtZSAmJiBmaWxlKSB7XG4gICAgICB2YXIgbWF0Y2ggPSBmaWxlLm1hdGNoKC8oW14vXFxcXF0rKVxcLnZ1ZSQvKTtcbiAgICAgIG5hbWUgPSBtYXRjaCAmJiBtYXRjaFsxXTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgKG5hbWUgPyAoXCI8XCIgKyAoY2xhc3NpZnkobmFtZSkpICsgXCI+XCIpIDogXCI8QW5vbnltb3VzPlwiKSArXG4gICAgICAoZmlsZSAmJiBpbmNsdWRlRmlsZSAhPT0gZmFsc2UgPyAoXCIgYXQgXCIgKyBmaWxlKSA6ICcnKVxuICAgIClcbiAgfTtcblxuICB2YXIgcmVwZWF0ID0gZnVuY3Rpb24gKHN0ciwgbikge1xuICAgIHZhciByZXMgPSAnJztcbiAgICB3aGlsZSAobikge1xuICAgICAgaWYgKG4gJSAyID09PSAxKSB7IHJlcyArPSBzdHI7IH1cbiAgICAgIGlmIChuID4gMSkgeyBzdHIgKz0gc3RyOyB9XG4gICAgICBuID4+PSAxO1xuICAgIH1cbiAgICByZXR1cm4gcmVzXG4gIH07XG5cbiAgZ2VuZXJhdGVDb21wb25lbnRUcmFjZSA9IGZ1bmN0aW9uICh2bSkge1xuICAgIGlmICh2bS5faXNWdWUgJiYgdm0uJHBhcmVudCkge1xuICAgICAgdmFyIHRyZWUgPSBbXTtcbiAgICAgIHZhciBjdXJyZW50UmVjdXJzaXZlU2VxdWVuY2UgPSAwO1xuICAgICAgd2hpbGUgKHZtICYmIHZtLiRvcHRpb25zLm5hbWUgIT09ICdQYWdlQm9keScpIHtcbiAgICAgICAgaWYgKHRyZWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHZhciBsYXN0ID0gdHJlZVt0cmVlLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGlmIChsYXN0LmNvbnN0cnVjdG9yID09PSB2bS5jb25zdHJ1Y3Rvcikge1xuICAgICAgICAgICAgY3VycmVudFJlY3Vyc2l2ZVNlcXVlbmNlKys7XG4gICAgICAgICAgICB2bSA9IHZtLiRwYXJlbnQ7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFJlY3Vyc2l2ZVNlcXVlbmNlID4gMCkge1xuICAgICAgICAgICAgdHJlZVt0cmVlLmxlbmd0aCAtIDFdID0gW2xhc3QsIGN1cnJlbnRSZWN1cnNpdmVTZXF1ZW5jZV07XG4gICAgICAgICAgICBjdXJyZW50UmVjdXJzaXZlU2VxdWVuY2UgPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAhdm0uJG9wdGlvbnMuaXNSZXNlcnZlZCAmJiB0cmVlLnB1c2godm0pO1xuICAgICAgICB2bSA9IHZtLiRwYXJlbnQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gJ1xcblxcbmZvdW5kIGluXFxuXFxuJyArIHRyZWVcbiAgICAgICAgLm1hcChmdW5jdGlvbiAodm0sIGkpIHsgcmV0dXJuIChcIlwiICsgKGkgPT09IDAgPyAnLS0tPiAnIDogcmVwZWF0KCcgJywgNSArIGkgKiAyKSkgKyAoQXJyYXkuaXNBcnJheSh2bSlcbiAgICAgICAgICAgID8gKChmb3JtYXRDb21wb25lbnROYW1lKHZtWzBdKSkgKyBcIi4uLiAoXCIgKyAodm1bMV0pICsgXCIgcmVjdXJzaXZlIGNhbGxzKVwiKVxuICAgICAgICAgICAgOiBmb3JtYXRDb21wb25lbnROYW1lKHZtKSkpOyB9KVxuICAgICAgICAuam9pbignXFxuJylcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcIlxcblxcbihmb3VuZCBpbiBcIiArIChmb3JtYXRDb21wb25lbnROYW1lKHZtKSkgKyBcIilcIilcbiAgICB9XG4gIH07XG59XG5cbi8qICAqL1xuXG52YXIgdWlkID0gMDtcblxuLyoqXG4gKiBBIGRlcCBpcyBhbiBvYnNlcnZhYmxlIHRoYXQgY2FuIGhhdmUgbXVsdGlwbGVcbiAqIGRpcmVjdGl2ZXMgc3Vic2NyaWJpbmcgdG8gaXQuXG4gKi9cbnZhciBEZXAgPSBmdW5jdGlvbiBEZXAgKCkge1xuICB0aGlzLmlkID0gdWlkKys7XG4gIHRoaXMuc3VicyA9IFtdO1xufTtcblxuRGVwLnByb3RvdHlwZS5hZGRTdWIgPSBmdW5jdGlvbiBhZGRTdWIgKHN1Yikge1xuICB0aGlzLnN1YnMucHVzaChzdWIpO1xufTtcblxuRGVwLnByb3RvdHlwZS5yZW1vdmVTdWIgPSBmdW5jdGlvbiByZW1vdmVTdWIgKHN1Yikge1xuICByZW1vdmUodGhpcy5zdWJzLCBzdWIpO1xufTtcblxuRGVwLnByb3RvdHlwZS5kZXBlbmQgPSBmdW5jdGlvbiBkZXBlbmQgKCkge1xuICBpZiAoRGVwLlNoYXJlZE9iamVjdC50YXJnZXQpIHtcbiAgICBEZXAuU2hhcmVkT2JqZWN0LnRhcmdldC5hZGREZXAodGhpcyk7XG4gIH1cbn07XG5cbkRlcC5wcm90b3R5cGUubm90aWZ5ID0gZnVuY3Rpb24gbm90aWZ5ICgpIHtcbiAgLy8gc3RhYmlsaXplIHRoZSBzdWJzY3JpYmVyIGxpc3QgZmlyc3RcbiAgdmFyIHN1YnMgPSB0aGlzLnN1YnMuc2xpY2UoKTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIWNvbmZpZy5hc3luYykge1xuICAgIC8vIHN1YnMgYXJlbid0IHNvcnRlZCBpbiBzY2hlZHVsZXIgaWYgbm90IHJ1bm5pbmcgYXN5bmNcbiAgICAvLyB3ZSBuZWVkIHRvIHNvcnQgdGhlbSBub3cgdG8gbWFrZSBzdXJlIHRoZXkgZmlyZSBpbiBjb3JyZWN0XG4gICAgLy8gb3JkZXJcbiAgICBzdWJzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEuaWQgLSBiLmlkOyB9KTtcbiAgfVxuICBmb3IgKHZhciBpID0gMCwgbCA9IHN1YnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgc3Vic1tpXS51cGRhdGUoKTtcbiAgfVxufTtcblxuLy8gVGhlIGN1cnJlbnQgdGFyZ2V0IHdhdGNoZXIgYmVpbmcgZXZhbHVhdGVkLlxuLy8gVGhpcyBpcyBnbG9iYWxseSB1bmlxdWUgYmVjYXVzZSBvbmx5IG9uZSB3YXRjaGVyXG4vLyBjYW4gYmUgZXZhbHVhdGVkIGF0IGEgdGltZS5cbi8vIGZpeGVkIGJ5IHh4eHh4eCAobnZ1ZSBzaGFyZWQgdnVleClcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG5EZXAuU2hhcmVkT2JqZWN0ID0ge307XG5EZXAuU2hhcmVkT2JqZWN0LnRhcmdldCA9IG51bGw7XG5EZXAuU2hhcmVkT2JqZWN0LnRhcmdldFN0YWNrID0gW107XG5cbmZ1bmN0aW9uIHB1c2hUYXJnZXQgKHRhcmdldCkge1xuICBEZXAuU2hhcmVkT2JqZWN0LnRhcmdldFN0YWNrLnB1c2godGFyZ2V0KTtcbiAgRGVwLlNoYXJlZE9iamVjdC50YXJnZXQgPSB0YXJnZXQ7XG4gIERlcC50YXJnZXQgPSB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIHBvcFRhcmdldCAoKSB7XG4gIERlcC5TaGFyZWRPYmplY3QudGFyZ2V0U3RhY2sucG9wKCk7XG4gIERlcC5TaGFyZWRPYmplY3QudGFyZ2V0ID0gRGVwLlNoYXJlZE9iamVjdC50YXJnZXRTdGFja1tEZXAuU2hhcmVkT2JqZWN0LnRhcmdldFN0YWNrLmxlbmd0aCAtIDFdO1xuICBEZXAudGFyZ2V0ID0gRGVwLlNoYXJlZE9iamVjdC50YXJnZXQ7XG59XG5cbi8qICAqL1xuXG52YXIgVk5vZGUgPSBmdW5jdGlvbiBWTm9kZSAoXG4gIHRhZyxcbiAgZGF0YSxcbiAgY2hpbGRyZW4sXG4gIHRleHQsXG4gIGVsbSxcbiAgY29udGV4dCxcbiAgY29tcG9uZW50T3B0aW9ucyxcbiAgYXN5bmNGYWN0b3J5XG4pIHtcbiAgdGhpcy50YWcgPSB0YWc7XG4gIHRoaXMuZGF0YSA9IGRhdGE7XG4gIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgdGhpcy5lbG0gPSBlbG07XG4gIHRoaXMubnMgPSB1bmRlZmluZWQ7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gIHRoaXMuZm5Db250ZXh0ID0gdW5kZWZpbmVkO1xuICB0aGlzLmZuT3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgdGhpcy5mblNjb3BlSWQgPSB1bmRlZmluZWQ7XG4gIHRoaXMua2V5ID0gZGF0YSAmJiBkYXRhLmtleTtcbiAgdGhpcy5jb21wb25lbnRPcHRpb25zID0gY29tcG9uZW50T3B0aW9ucztcbiAgdGhpcy5jb21wb25lbnRJbnN0YW5jZSA9IHVuZGVmaW5lZDtcbiAgdGhpcy5wYXJlbnQgPSB1bmRlZmluZWQ7XG4gIHRoaXMucmF3ID0gZmFsc2U7XG4gIHRoaXMuaXNTdGF0aWMgPSBmYWxzZTtcbiAgdGhpcy5pc1Jvb3RJbnNlcnQgPSB0cnVlO1xuICB0aGlzLmlzQ29tbWVudCA9IGZhbHNlO1xuICB0aGlzLmlzQ2xvbmVkID0gZmFsc2U7XG4gIHRoaXMuaXNPbmNlID0gZmFsc2U7XG4gIHRoaXMuYXN5bmNGYWN0b3J5ID0gYXN5bmNGYWN0b3J5O1xuICB0aGlzLmFzeW5jTWV0YSA9IHVuZGVmaW5lZDtcbiAgdGhpcy5pc0FzeW5jUGxhY2Vob2xkZXIgPSBmYWxzZTtcbn07XG5cbnZhciBwcm90b3R5cGVBY2Nlc3NvcnMgPSB7IGNoaWxkOiB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH07XG5cbi8vIERFUFJFQ0FURUQ6IGFsaWFzIGZvciBjb21wb25lbnRJbnN0YW5jZSBmb3IgYmFja3dhcmRzIGNvbXBhdC5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5wcm90b3R5cGVBY2Nlc3NvcnMuY2hpbGQuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5jb21wb25lbnRJbnN0YW5jZVxufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIFZOb2RlLnByb3RvdHlwZSwgcHJvdG90eXBlQWNjZXNzb3JzICk7XG5cbnZhciBjcmVhdGVFbXB0eVZOb2RlID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgaWYgKCB0ZXh0ID09PSB2b2lkIDAgKSB0ZXh0ID0gJyc7XG5cbiAgdmFyIG5vZGUgPSBuZXcgVk5vZGUoKTtcbiAgbm9kZS50ZXh0ID0gdGV4dDtcbiAgbm9kZS5pc0NvbW1lbnQgPSB0cnVlO1xuICByZXR1cm4gbm9kZVxufTtcblxuZnVuY3Rpb24gY3JlYXRlVGV4dFZOb2RlICh2YWwpIHtcbiAgcmV0dXJuIG5ldyBWTm9kZSh1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBTdHJpbmcodmFsKSlcbn1cblxuLy8gb3B0aW1pemVkIHNoYWxsb3cgY2xvbmVcbi8vIHVzZWQgZm9yIHN0YXRpYyBub2RlcyBhbmQgc2xvdCBub2RlcyBiZWNhdXNlIHRoZXkgbWF5IGJlIHJldXNlZCBhY3Jvc3Ncbi8vIG11bHRpcGxlIHJlbmRlcnMsIGNsb25pbmcgdGhlbSBhdm9pZHMgZXJyb3JzIHdoZW4gRE9NIG1hbmlwdWxhdGlvbnMgcmVseVxuLy8gb24gdGhlaXIgZWxtIHJlZmVyZW5jZS5cbmZ1bmN0aW9uIGNsb25lVk5vZGUgKHZub2RlKSB7XG4gIHZhciBjbG9uZWQgPSBuZXcgVk5vZGUoXG4gICAgdm5vZGUudGFnLFxuICAgIHZub2RlLmRhdGEsXG4gICAgLy8gIzc5NzVcbiAgICAvLyBjbG9uZSBjaGlsZHJlbiBhcnJheSB0byBhdm9pZCBtdXRhdGluZyBvcmlnaW5hbCBpbiBjYXNlIG9mIGNsb25pbmdcbiAgICAvLyBhIGNoaWxkLlxuICAgIHZub2RlLmNoaWxkcmVuICYmIHZub2RlLmNoaWxkcmVuLnNsaWNlKCksXG4gICAgdm5vZGUudGV4dCxcbiAgICB2bm9kZS5lbG0sXG4gICAgdm5vZGUuY29udGV4dCxcbiAgICB2bm9kZS5jb21wb25lbnRPcHRpb25zLFxuICAgIHZub2RlLmFzeW5jRmFjdG9yeVxuICApO1xuICBjbG9uZWQubnMgPSB2bm9kZS5ucztcbiAgY2xvbmVkLmlzU3RhdGljID0gdm5vZGUuaXNTdGF0aWM7XG4gIGNsb25lZC5rZXkgPSB2bm9kZS5rZXk7XG4gIGNsb25lZC5pc0NvbW1lbnQgPSB2bm9kZS5pc0NvbW1lbnQ7XG4gIGNsb25lZC5mbkNvbnRleHQgPSB2bm9kZS5mbkNvbnRleHQ7XG4gIGNsb25lZC5mbk9wdGlvbnMgPSB2bm9kZS5mbk9wdGlvbnM7XG4gIGNsb25lZC5mblNjb3BlSWQgPSB2bm9kZS5mblNjb3BlSWQ7XG4gIGNsb25lZC5hc3luY01ldGEgPSB2bm9kZS5hc3luY01ldGE7XG4gIGNsb25lZC5pc0Nsb25lZCA9IHRydWU7XG4gIHJldHVybiBjbG9uZWRcbn1cblxuLypcbiAqIG5vdCB0eXBlIGNoZWNraW5nIHRoaXMgZmlsZSBiZWNhdXNlIGZsb3cgZG9lc24ndCBwbGF5IHdlbGwgd2l0aFxuICogZHluYW1pY2FsbHkgYWNjZXNzaW5nIG1ldGhvZHMgb24gQXJyYXkgcHJvdG90eXBlXG4gKi9cblxudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG52YXIgYXJyYXlNZXRob2RzID0gT2JqZWN0LmNyZWF0ZShhcnJheVByb3RvKTtcblxudmFyIG1ldGhvZHNUb1BhdGNoID0gW1xuICAncHVzaCcsXG4gICdwb3AnLFxuICAnc2hpZnQnLFxuICAndW5zaGlmdCcsXG4gICdzcGxpY2UnLFxuICAnc29ydCcsXG4gICdyZXZlcnNlJ1xuXTtcblxuLyoqXG4gKiBJbnRlcmNlcHQgbXV0YXRpbmcgbWV0aG9kcyBhbmQgZW1pdCBldmVudHNcbiAqL1xubWV0aG9kc1RvUGF0Y2guZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gIC8vIGNhY2hlIG9yaWdpbmFsIG1ldGhvZFxuICB2YXIgb3JpZ2luYWwgPSBhcnJheVByb3RvW21ldGhvZF07XG4gIGRlZihhcnJheU1ldGhvZHMsIG1ldGhvZCwgZnVuY3Rpb24gbXV0YXRvciAoKSB7XG4gICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgdmFyIHJlc3VsdCA9IG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIHZhciBvYiA9IHRoaXMuX19vYl9fO1xuICAgIHZhciBpbnNlcnRlZDtcbiAgICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgICAgY2FzZSAncHVzaCc6XG4gICAgICBjYXNlICd1bnNoaWZ0JzpcbiAgICAgICAgaW5zZXJ0ZWQgPSBhcmdzO1xuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnc3BsaWNlJzpcbiAgICAgICAgaW5zZXJ0ZWQgPSBhcmdzLnNsaWNlKDIpO1xuICAgICAgICBicmVha1xuICAgIH1cbiAgICBpZiAoaW5zZXJ0ZWQpIHsgb2Iub2JzZXJ2ZUFycmF5KGluc2VydGVkKTsgfVxuICAgIC8vIG5vdGlmeSBjaGFuZ2VcbiAgICBvYi5kZXAubm90aWZ5KCk7XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KTtcbn0pO1xuXG4vKiAgKi9cblxudmFyIGFycmF5S2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGFycmF5TWV0aG9kcyk7XG5cbi8qKlxuICogSW4gc29tZSBjYXNlcyB3ZSBtYXkgd2FudCB0byBkaXNhYmxlIG9ic2VydmF0aW9uIGluc2lkZSBhIGNvbXBvbmVudCdzXG4gKiB1cGRhdGUgY29tcHV0YXRpb24uXG4gKi9cbnZhciBzaG91bGRPYnNlcnZlID0gdHJ1ZTtcblxuZnVuY3Rpb24gdG9nZ2xlT2JzZXJ2aW5nICh2YWx1ZSkge1xuICBzaG91bGRPYnNlcnZlID0gdmFsdWU7XG59XG5cbi8qKlxuICogT2JzZXJ2ZXIgY2xhc3MgdGhhdCBpcyBhdHRhY2hlZCB0byBlYWNoIG9ic2VydmVkXG4gKiBvYmplY3QuIE9uY2UgYXR0YWNoZWQsIHRoZSBvYnNlcnZlciBjb252ZXJ0cyB0aGUgdGFyZ2V0XG4gKiBvYmplY3QncyBwcm9wZXJ0eSBrZXlzIGludG8gZ2V0dGVyL3NldHRlcnMgdGhhdFxuICogY29sbGVjdCBkZXBlbmRlbmNpZXMgYW5kIGRpc3BhdGNoIHVwZGF0ZXMuXG4gKi9cbnZhciBPYnNlcnZlciA9IGZ1bmN0aW9uIE9ic2VydmVyICh2YWx1ZSkge1xuICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIHRoaXMuZGVwID0gbmV3IERlcCgpO1xuICB0aGlzLnZtQ291bnQgPSAwO1xuICBkZWYodmFsdWUsICdfX29iX18nLCB0aGlzKTtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgaWYgKGhhc1Byb3RvKSB7XG4gICAgICB7Ly8gZml4ZWQgYnkgeHh4eHh4IOW+ruS/oeWwj+eoi+W6j+S9v+eUqCBwbHVnaW5zIOS5i+WQju+8jOaVsOe7hOaWueazleiiq+ebtOaOpeaMgui9veWIsOS6huaVsOe7hOWvueixoeS4iu+8jOmcgOimgeaJp+ihjCBjb3B5QXVnbWVudCDpgLvovpFcbiAgICAgICAgaWYodmFsdWUucHVzaCAhPT0gdmFsdWUuX19wcm90b19fLnB1c2gpe1xuICAgICAgICAgIGNvcHlBdWdtZW50KHZhbHVlLCBhcnJheU1ldGhvZHMsIGFycmF5S2V5cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvdG9BdWdtZW50KHZhbHVlLCBhcnJheU1ldGhvZHMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvcHlBdWdtZW50KHZhbHVlLCBhcnJheU1ldGhvZHMsIGFycmF5S2V5cyk7XG4gICAgfVxuICAgIHRoaXMub2JzZXJ2ZUFycmF5KHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLndhbGsodmFsdWUpO1xuICB9XG59O1xuXG4vKipcbiAqIFdhbGsgdGhyb3VnaCBhbGwgcHJvcGVydGllcyBhbmQgY29udmVydCB0aGVtIGludG9cbiAqIGdldHRlci9zZXR0ZXJzLiBUaGlzIG1ldGhvZCBzaG91bGQgb25seSBiZSBjYWxsZWQgd2hlblxuICogdmFsdWUgdHlwZSBpcyBPYmplY3QuXG4gKi9cbk9ic2VydmVyLnByb3RvdHlwZS53YWxrID0gZnVuY3Rpb24gd2FsayAob2JqKSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgZGVmaW5lUmVhY3RpdmUkJDEob2JqLCBrZXlzW2ldKTtcbiAgfVxufTtcblxuLyoqXG4gKiBPYnNlcnZlIGEgbGlzdCBvZiBBcnJheSBpdGVtcy5cbiAqL1xuT2JzZXJ2ZXIucHJvdG90eXBlLm9ic2VydmVBcnJheSA9IGZ1bmN0aW9uIG9ic2VydmVBcnJheSAoaXRlbXMpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBpdGVtcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBvYnNlcnZlKGl0ZW1zW2ldKTtcbiAgfVxufTtcblxuLy8gaGVscGVyc1xuXG4vKipcbiAqIEF1Z21lbnQgYSB0YXJnZXQgT2JqZWN0IG9yIEFycmF5IGJ5IGludGVyY2VwdGluZ1xuICogdGhlIHByb3RvdHlwZSBjaGFpbiB1c2luZyBfX3Byb3RvX19cbiAqL1xuZnVuY3Rpb24gcHJvdG9BdWdtZW50ICh0YXJnZXQsIHNyYykge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xuICB0YXJnZXQuX19wcm90b19fID0gc3JjO1xuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXByb3RvICovXG59XG5cbi8qKlxuICogQXVnbWVudCBhIHRhcmdldCBPYmplY3Qgb3IgQXJyYXkgYnkgZGVmaW5pbmdcbiAqIGhpZGRlbiBwcm9wZXJ0aWVzLlxuICovXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZnVuY3Rpb24gY29weUF1Z21lbnQgKHRhcmdldCwgc3JjLCBrZXlzKSB7XG4gIGZvciAodmFyIGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBkZWYodGFyZ2V0LCBrZXksIHNyY1trZXldKTtcbiAgfVxufVxuXG4vKipcbiAqIEF0dGVtcHQgdG8gY3JlYXRlIGFuIG9ic2VydmVyIGluc3RhbmNlIGZvciBhIHZhbHVlLFxuICogcmV0dXJucyB0aGUgbmV3IG9ic2VydmVyIGlmIHN1Y2Nlc3NmdWxseSBvYnNlcnZlZCxcbiAqIG9yIHRoZSBleGlzdGluZyBvYnNlcnZlciBpZiB0aGUgdmFsdWUgYWxyZWFkeSBoYXMgb25lLlxuICovXG5mdW5jdGlvbiBvYnNlcnZlICh2YWx1ZSwgYXNSb290RGF0YSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCB2YWx1ZSBpbnN0YW5jZW9mIFZOb2RlKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIG9iO1xuICBpZiAoaGFzT3duKHZhbHVlLCAnX19vYl9fJykgJiYgdmFsdWUuX19vYl9fIGluc3RhbmNlb2YgT2JzZXJ2ZXIpIHtcbiAgICBvYiA9IHZhbHVlLl9fb2JfXztcbiAgfSBlbHNlIGlmIChcbiAgICBzaG91bGRPYnNlcnZlICYmXG4gICAgIWlzU2VydmVyUmVuZGVyaW5nKCkgJiZcbiAgICAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgaXNQbGFpbk9iamVjdCh2YWx1ZSkpICYmXG4gICAgT2JqZWN0LmlzRXh0ZW5zaWJsZSh2YWx1ZSkgJiZcbiAgICAhdmFsdWUuX2lzVnVlXG4gICkge1xuICAgIG9iID0gbmV3IE9ic2VydmVyKHZhbHVlKTtcbiAgfVxuICBpZiAoYXNSb290RGF0YSAmJiBvYikge1xuICAgIG9iLnZtQ291bnQrKztcbiAgfVxuICByZXR1cm4gb2Jcbn1cblxuLyoqXG4gKiBEZWZpbmUgYSByZWFjdGl2ZSBwcm9wZXJ0eSBvbiBhbiBPYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGRlZmluZVJlYWN0aXZlJCQxIChcbiAgb2JqLFxuICBrZXksXG4gIHZhbCxcbiAgY3VzdG9tU2V0dGVyLFxuICBzaGFsbG93XG4pIHtcbiAgdmFyIGRlcCA9IG5ldyBEZXAoKTtcblxuICB2YXIgcHJvcGVydHkgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KTtcbiAgaWYgKHByb3BlcnR5ICYmIHByb3BlcnR5LmNvbmZpZ3VyYWJsZSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIGNhdGVyIGZvciBwcmUtZGVmaW5lZCBnZXR0ZXIvc2V0dGVyc1xuICB2YXIgZ2V0dGVyID0gcHJvcGVydHkgJiYgcHJvcGVydHkuZ2V0O1xuICB2YXIgc2V0dGVyID0gcHJvcGVydHkgJiYgcHJvcGVydHkuc2V0O1xuICBpZiAoKCFnZXR0ZXIgfHwgc2V0dGVyKSAmJiBhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgdmFsID0gb2JqW2tleV07XG4gIH1cblxuICB2YXIgY2hpbGRPYiA9ICFzaGFsbG93ICYmIG9ic2VydmUodmFsKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiByZWFjdGl2ZUdldHRlciAoKSB7XG4gICAgICB2YXIgdmFsdWUgPSBnZXR0ZXIgPyBnZXR0ZXIuY2FsbChvYmopIDogdmFsO1xuICAgICAgaWYgKERlcC5TaGFyZWRPYmplY3QudGFyZ2V0KSB7IC8vIGZpeGVkIGJ5IHh4eHh4eFxuICAgICAgICBkZXAuZGVwZW5kKCk7XG4gICAgICAgIGlmIChjaGlsZE9iKSB7XG4gICAgICAgICAgY2hpbGRPYi5kZXAuZGVwZW5kKCk7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICBkZXBlbmRBcnJheSh2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gcmVhY3RpdmVTZXR0ZXIgKG5ld1ZhbCkge1xuICAgICAgdmFyIHZhbHVlID0gZ2V0dGVyID8gZ2V0dGVyLmNhbGwob2JqKSA6IHZhbDtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSAqL1xuICAgICAgaWYgKG5ld1ZhbCA9PT0gdmFsdWUgfHwgKG5ld1ZhbCAhPT0gbmV3VmFsICYmIHZhbHVlICE9PSB2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXNlbGYtY29tcGFyZSAqL1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgY3VzdG9tU2V0dGVyKSB7XG4gICAgICAgIGN1c3RvbVNldHRlcigpO1xuICAgICAgfVxuICAgICAgLy8gIzc5ODE6IGZvciBhY2Nlc3NvciBwcm9wZXJ0aWVzIHdpdGhvdXQgc2V0dGVyXG4gICAgICBpZiAoZ2V0dGVyICYmICFzZXR0ZXIpIHsgcmV0dXJuIH1cbiAgICAgIGlmIChzZXR0ZXIpIHtcbiAgICAgICAgc2V0dGVyLmNhbGwob2JqLCBuZXdWYWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gbmV3VmFsO1xuICAgICAgfVxuICAgICAgY2hpbGRPYiA9ICFzaGFsbG93ICYmIG9ic2VydmUobmV3VmFsKTtcbiAgICAgIGRlcC5ub3RpZnkoKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIFNldCBhIHByb3BlcnR5IG9uIGFuIG9iamVjdC4gQWRkcyB0aGUgbmV3IHByb3BlcnR5IGFuZFxuICogdHJpZ2dlcnMgY2hhbmdlIG5vdGlmaWNhdGlvbiBpZiB0aGUgcHJvcGVydHkgZG9lc24ndFxuICogYWxyZWFkeSBleGlzdC5cbiAqL1xuZnVuY3Rpb24gc2V0ICh0YXJnZXQsIGtleSwgdmFsKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgKGlzVW5kZWYodGFyZ2V0KSB8fCBpc1ByaW1pdGl2ZSh0YXJnZXQpKVxuICApIHtcbiAgICB3YXJuKChcIkNhbm5vdCBzZXQgcmVhY3RpdmUgcHJvcGVydHkgb24gdW5kZWZpbmVkLCBudWxsLCBvciBwcmltaXRpdmUgdmFsdWU6IFwiICsgKCh0YXJnZXQpKSkpO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KHRhcmdldCkgJiYgaXNWYWxpZEFycmF5SW5kZXgoa2V5KSkge1xuICAgIHRhcmdldC5sZW5ndGggPSBNYXRoLm1heCh0YXJnZXQubGVuZ3RoLCBrZXkpO1xuICAgIHRhcmdldC5zcGxpY2Uoa2V5LCAxLCB2YWwpO1xuICAgIHJldHVybiB2YWxcbiAgfVxuICBpZiAoa2V5IGluIHRhcmdldCAmJiAhKGtleSBpbiBPYmplY3QucHJvdG90eXBlKSkge1xuICAgIHRhcmdldFtrZXldID0gdmFsO1xuICAgIHJldHVybiB2YWxcbiAgfVxuICB2YXIgb2IgPSAodGFyZ2V0KS5fX29iX187XG4gIGlmICh0YXJnZXQuX2lzVnVlIHx8IChvYiAmJiBvYi52bUNvdW50KSkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICdBdm9pZCBhZGRpbmcgcmVhY3RpdmUgcHJvcGVydGllcyB0byBhIFZ1ZSBpbnN0YW5jZSBvciBpdHMgcm9vdCAkZGF0YSAnICtcbiAgICAgICdhdCBydW50aW1lIC0gZGVjbGFyZSBpdCB1cGZyb250IGluIHRoZSBkYXRhIG9wdGlvbi4nXG4gICAgKTtcbiAgICByZXR1cm4gdmFsXG4gIH1cbiAgaWYgKCFvYikge1xuICAgIHRhcmdldFtrZXldID0gdmFsO1xuICAgIHJldHVybiB2YWxcbiAgfVxuICBkZWZpbmVSZWFjdGl2ZSQkMShvYi52YWx1ZSwga2V5LCB2YWwpO1xuICBvYi5kZXAubm90aWZ5KCk7XG4gIHJldHVybiB2YWxcbn1cblxuLyoqXG4gKiBEZWxldGUgYSBwcm9wZXJ0eSBhbmQgdHJpZ2dlciBjaGFuZ2UgaWYgbmVjZXNzYXJ5LlxuICovXG5mdW5jdGlvbiBkZWwgKHRhcmdldCwga2V5KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgKGlzVW5kZWYodGFyZ2V0KSB8fCBpc1ByaW1pdGl2ZSh0YXJnZXQpKVxuICApIHtcbiAgICB3YXJuKChcIkNhbm5vdCBkZWxldGUgcmVhY3RpdmUgcHJvcGVydHkgb24gdW5kZWZpbmVkLCBudWxsLCBvciBwcmltaXRpdmUgdmFsdWU6IFwiICsgKCh0YXJnZXQpKSkpO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KHRhcmdldCkgJiYgaXNWYWxpZEFycmF5SW5kZXgoa2V5KSkge1xuICAgIHRhcmdldC5zcGxpY2Uoa2V5LCAxKTtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgb2IgPSAodGFyZ2V0KS5fX29iX187XG4gIGlmICh0YXJnZXQuX2lzVnVlIHx8IChvYiAmJiBvYi52bUNvdW50KSkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICdBdm9pZCBkZWxldGluZyBwcm9wZXJ0aWVzIG9uIGEgVnVlIGluc3RhbmNlIG9yIGl0cyByb290ICRkYXRhICcgK1xuICAgICAgJy0ganVzdCBzZXQgaXQgdG8gbnVsbC4nXG4gICAgKTtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAoIWhhc093bih0YXJnZXQsIGtleSkpIHtcbiAgICByZXR1cm5cbiAgfVxuICBkZWxldGUgdGFyZ2V0W2tleV07XG4gIGlmICghb2IpIHtcbiAgICByZXR1cm5cbiAgfVxuICBvYi5kZXAubm90aWZ5KCk7XG59XG5cbi8qKlxuICogQ29sbGVjdCBkZXBlbmRlbmNpZXMgb24gYXJyYXkgZWxlbWVudHMgd2hlbiB0aGUgYXJyYXkgaXMgdG91Y2hlZCwgc2luY2VcbiAqIHdlIGNhbm5vdCBpbnRlcmNlcHQgYXJyYXkgZWxlbWVudCBhY2Nlc3MgbGlrZSBwcm9wZXJ0eSBnZXR0ZXJzLlxuICovXG5mdW5jdGlvbiBkZXBlbmRBcnJheSAodmFsdWUpIHtcbiAgZm9yICh2YXIgZSA9ICh2b2lkIDApLCBpID0gMCwgbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGUgPSB2YWx1ZVtpXTtcbiAgICBlICYmIGUuX19vYl9fICYmIGUuX19vYl9fLmRlcC5kZXBlbmQoKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShlKSkge1xuICAgICAgZGVwZW5kQXJyYXkoZSk7XG4gICAgfVxuICB9XG59XG5cbi8qICAqL1xuXG4vKipcbiAqIE9wdGlvbiBvdmVyd3JpdGluZyBzdHJhdGVnaWVzIGFyZSBmdW5jdGlvbnMgdGhhdCBoYW5kbGVcbiAqIGhvdyB0byBtZXJnZSBhIHBhcmVudCBvcHRpb24gdmFsdWUgYW5kIGEgY2hpbGQgb3B0aW9uXG4gKiB2YWx1ZSBpbnRvIHRoZSBmaW5hbCB2YWx1ZS5cbiAqL1xudmFyIHN0cmF0cyA9IGNvbmZpZy5vcHRpb25NZXJnZVN0cmF0ZWdpZXM7XG5cbi8qKlxuICogT3B0aW9ucyB3aXRoIHJlc3RyaWN0aW9uc1xuICovXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBzdHJhdHMuZWwgPSBzdHJhdHMucHJvcHNEYXRhID0gZnVuY3Rpb24gKHBhcmVudCwgY2hpbGQsIHZtLCBrZXkpIHtcbiAgICBpZiAoIXZtKSB7XG4gICAgICB3YXJuKFxuICAgICAgICBcIm9wdGlvbiBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgY2FuIG9ubHkgYmUgdXNlZCBkdXJpbmcgaW5zdGFuY2UgXCIgK1xuICAgICAgICAnY3JlYXRpb24gd2l0aCB0aGUgYG5ld2Aga2V5d29yZC4nXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdFN0cmF0KHBhcmVudCwgY2hpbGQpXG4gIH07XG59XG5cbi8qKlxuICogSGVscGVyIHRoYXQgcmVjdXJzaXZlbHkgbWVyZ2VzIHR3byBkYXRhIG9iamVjdHMgdG9nZXRoZXIuXG4gKi9cbmZ1bmN0aW9uIG1lcmdlRGF0YSAodG8sIGZyb20pIHtcbiAgaWYgKCFmcm9tKSB7IHJldHVybiB0byB9XG4gIHZhciBrZXksIHRvVmFsLCBmcm9tVmFsO1xuXG4gIHZhciBrZXlzID0gaGFzU3ltYm9sXG4gICAgPyBSZWZsZWN0Lm93bktleXMoZnJvbSlcbiAgICA6IE9iamVjdC5rZXlzKGZyb20pO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IGtleXNbaV07XG4gICAgLy8gaW4gY2FzZSB0aGUgb2JqZWN0IGlzIGFscmVhZHkgb2JzZXJ2ZWQuLi5cbiAgICBpZiAoa2V5ID09PSAnX19vYl9fJykgeyBjb250aW51ZSB9XG4gICAgdG9WYWwgPSB0b1trZXldO1xuICAgIGZyb21WYWwgPSBmcm9tW2tleV07XG4gICAgaWYgKCFoYXNPd24odG8sIGtleSkpIHtcbiAgICAgIHNldCh0bywga2V5LCBmcm9tVmFsKTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgdG9WYWwgIT09IGZyb21WYWwgJiZcbiAgICAgIGlzUGxhaW5PYmplY3QodG9WYWwpICYmXG4gICAgICBpc1BsYWluT2JqZWN0KGZyb21WYWwpXG4gICAgKSB7XG4gICAgICBtZXJnZURhdGEodG9WYWwsIGZyb21WYWwpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdG9cbn1cblxuLyoqXG4gKiBEYXRhXG4gKi9cbmZ1bmN0aW9uIG1lcmdlRGF0YU9yRm4gKFxuICBwYXJlbnRWYWwsXG4gIGNoaWxkVmFsLFxuICB2bVxuKSB7XG4gIGlmICghdm0pIHtcbiAgICAvLyBpbiBhIFZ1ZS5leHRlbmQgbWVyZ2UsIGJvdGggc2hvdWxkIGJlIGZ1bmN0aW9uc1xuICAgIGlmICghY2hpbGRWYWwpIHtcbiAgICAgIHJldHVybiBwYXJlbnRWYWxcbiAgICB9XG4gICAgaWYgKCFwYXJlbnRWYWwpIHtcbiAgICAgIHJldHVybiBjaGlsZFZhbFxuICAgIH1cbiAgICAvLyB3aGVuIHBhcmVudFZhbCAmIGNoaWxkVmFsIGFyZSBib3RoIHByZXNlbnQsXG4gICAgLy8gd2UgbmVlZCB0byByZXR1cm4gYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlXG4gICAgLy8gbWVyZ2VkIHJlc3VsdCBvZiBib3RoIGZ1bmN0aW9ucy4uLiBubyBuZWVkIHRvXG4gICAgLy8gY2hlY2sgaWYgcGFyZW50VmFsIGlzIGEgZnVuY3Rpb24gaGVyZSBiZWNhdXNlXG4gICAgLy8gaXQgaGFzIHRvIGJlIGEgZnVuY3Rpb24gdG8gcGFzcyBwcmV2aW91cyBtZXJnZXMuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1lcmdlZERhdGFGbiAoKSB7XG4gICAgICByZXR1cm4gbWVyZ2VEYXRhKFxuICAgICAgICB0eXBlb2YgY2hpbGRWYWwgPT09ICdmdW5jdGlvbicgPyBjaGlsZFZhbC5jYWxsKHRoaXMsIHRoaXMpIDogY2hpbGRWYWwsXG4gICAgICAgIHR5cGVvZiBwYXJlbnRWYWwgPT09ICdmdW5jdGlvbicgPyBwYXJlbnRWYWwuY2FsbCh0aGlzLCB0aGlzKSA6IHBhcmVudFZhbFxuICAgICAgKVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gbWVyZ2VkSW5zdGFuY2VEYXRhRm4gKCkge1xuICAgICAgLy8gaW5zdGFuY2UgbWVyZ2VcbiAgICAgIHZhciBpbnN0YW5jZURhdGEgPSB0eXBlb2YgY2hpbGRWYWwgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBjaGlsZFZhbC5jYWxsKHZtLCB2bSlcbiAgICAgICAgOiBjaGlsZFZhbDtcbiAgICAgIHZhciBkZWZhdWx0RGF0YSA9IHR5cGVvZiBwYXJlbnRWYWwgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwYXJlbnRWYWwuY2FsbCh2bSwgdm0pXG4gICAgICAgIDogcGFyZW50VmFsO1xuICAgICAgaWYgKGluc3RhbmNlRGF0YSkge1xuICAgICAgICByZXR1cm4gbWVyZ2VEYXRhKGluc3RhbmNlRGF0YSwgZGVmYXVsdERhdGEpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZGVmYXVsdERhdGFcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuc3RyYXRzLmRhdGEgPSBmdW5jdGlvbiAoXG4gIHBhcmVudFZhbCxcbiAgY2hpbGRWYWwsXG4gIHZtXG4pIHtcbiAgaWYgKCF2bSkge1xuICAgIGlmIChjaGlsZFZhbCAmJiB0eXBlb2YgY2hpbGRWYWwgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgJ1RoZSBcImRhdGFcIiBvcHRpb24gc2hvdWxkIGJlIGEgZnVuY3Rpb24gJyArXG4gICAgICAgICd0aGF0IHJldHVybnMgYSBwZXItaW5zdGFuY2UgdmFsdWUgaW4gY29tcG9uZW50ICcgK1xuICAgICAgICAnZGVmaW5pdGlvbnMuJyxcbiAgICAgICAgdm1cbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBwYXJlbnRWYWxcbiAgICB9XG4gICAgcmV0dXJuIG1lcmdlRGF0YU9yRm4ocGFyZW50VmFsLCBjaGlsZFZhbClcbiAgfVxuXG4gIHJldHVybiBtZXJnZURhdGFPckZuKHBhcmVudFZhbCwgY2hpbGRWYWwsIHZtKVxufTtcblxuLyoqXG4gKiBIb29rcyBhbmQgcHJvcHMgYXJlIG1lcmdlZCBhcyBhcnJheXMuXG4gKi9cbmZ1bmN0aW9uIG1lcmdlSG9vayAoXG4gIHBhcmVudFZhbCxcbiAgY2hpbGRWYWxcbikge1xuICB2YXIgcmVzID0gY2hpbGRWYWxcbiAgICA/IHBhcmVudFZhbFxuICAgICAgPyBwYXJlbnRWYWwuY29uY2F0KGNoaWxkVmFsKVxuICAgICAgOiBBcnJheS5pc0FycmF5KGNoaWxkVmFsKVxuICAgICAgICA/IGNoaWxkVmFsXG4gICAgICAgIDogW2NoaWxkVmFsXVxuICAgIDogcGFyZW50VmFsO1xuICByZXR1cm4gcmVzXG4gICAgPyBkZWR1cGVIb29rcyhyZXMpXG4gICAgOiByZXNcbn1cblxuZnVuY3Rpb24gZGVkdXBlSG9va3MgKGhvb2tzKSB7XG4gIHZhciByZXMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBob29rcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChyZXMuaW5kZXhPZihob29rc1tpXSkgPT09IC0xKSB7XG4gICAgICByZXMucHVzaChob29rc1tpXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuTElGRUNZQ0xFX0hPT0tTLmZvckVhY2goZnVuY3Rpb24gKGhvb2spIHtcbiAgc3RyYXRzW2hvb2tdID0gbWVyZ2VIb29rO1xufSk7XG5cbi8qKlxuICogQXNzZXRzXG4gKlxuICogV2hlbiBhIHZtIGlzIHByZXNlbnQgKGluc3RhbmNlIGNyZWF0aW9uKSwgd2UgbmVlZCB0byBkb1xuICogYSB0aHJlZS13YXkgbWVyZ2UgYmV0d2VlbiBjb25zdHJ1Y3RvciBvcHRpb25zLCBpbnN0YW5jZVxuICogb3B0aW9ucyBhbmQgcGFyZW50IG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIG1lcmdlQXNzZXRzIChcbiAgcGFyZW50VmFsLFxuICBjaGlsZFZhbCxcbiAgdm0sXG4gIGtleVxuKSB7XG4gIHZhciByZXMgPSBPYmplY3QuY3JlYXRlKHBhcmVudFZhbCB8fCBudWxsKTtcbiAgaWYgKGNoaWxkVmFsKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBhc3NlcnRPYmplY3RUeXBlKGtleSwgY2hpbGRWYWwsIHZtKTtcbiAgICByZXR1cm4gZXh0ZW5kKHJlcywgY2hpbGRWYWwpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJlc1xuICB9XG59XG5cbkFTU0VUX1RZUEVTLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgc3RyYXRzW3R5cGUgKyAncyddID0gbWVyZ2VBc3NldHM7XG59KTtcblxuLyoqXG4gKiBXYXRjaGVycy5cbiAqXG4gKiBXYXRjaGVycyBoYXNoZXMgc2hvdWxkIG5vdCBvdmVyd3JpdGUgb25lXG4gKiBhbm90aGVyLCBzbyB3ZSBtZXJnZSB0aGVtIGFzIGFycmF5cy5cbiAqL1xuc3RyYXRzLndhdGNoID0gZnVuY3Rpb24gKFxuICBwYXJlbnRWYWwsXG4gIGNoaWxkVmFsLFxuICB2bSxcbiAga2V5XG4pIHtcbiAgLy8gd29yayBhcm91bmQgRmlyZWZveCdzIE9iamVjdC5wcm90b3R5cGUud2F0Y2guLi5cbiAgaWYgKHBhcmVudFZhbCA9PT0gbmF0aXZlV2F0Y2gpIHsgcGFyZW50VmFsID0gdW5kZWZpbmVkOyB9XG4gIGlmIChjaGlsZFZhbCA9PT0gbmF0aXZlV2F0Y2gpIHsgY2hpbGRWYWwgPSB1bmRlZmluZWQ7IH1cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICghY2hpbGRWYWwpIHsgcmV0dXJuIE9iamVjdC5jcmVhdGUocGFyZW50VmFsIHx8IG51bGwpIH1cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBhc3NlcnRPYmplY3RUeXBlKGtleSwgY2hpbGRWYWwsIHZtKTtcbiAgfVxuICBpZiAoIXBhcmVudFZhbCkgeyByZXR1cm4gY2hpbGRWYWwgfVxuICB2YXIgcmV0ID0ge307XG4gIGV4dGVuZChyZXQsIHBhcmVudFZhbCk7XG4gIGZvciAodmFyIGtleSQxIGluIGNoaWxkVmFsKSB7XG4gICAgdmFyIHBhcmVudCA9IHJldFtrZXkkMV07XG4gICAgdmFyIGNoaWxkID0gY2hpbGRWYWxba2V5JDFdO1xuICAgIGlmIChwYXJlbnQgJiYgIUFycmF5LmlzQXJyYXkocGFyZW50KSkge1xuICAgICAgcGFyZW50ID0gW3BhcmVudF07XG4gICAgfVxuICAgIHJldFtrZXkkMV0gPSBwYXJlbnRcbiAgICAgID8gcGFyZW50LmNvbmNhdChjaGlsZClcbiAgICAgIDogQXJyYXkuaXNBcnJheShjaGlsZCkgPyBjaGlsZCA6IFtjaGlsZF07XG4gIH1cbiAgcmV0dXJuIHJldFxufTtcblxuLyoqXG4gKiBPdGhlciBvYmplY3QgaGFzaGVzLlxuICovXG5zdHJhdHMucHJvcHMgPVxuc3RyYXRzLm1ldGhvZHMgPVxuc3RyYXRzLmluamVjdCA9XG5zdHJhdHMuY29tcHV0ZWQgPSBmdW5jdGlvbiAoXG4gIHBhcmVudFZhbCxcbiAgY2hpbGRWYWwsXG4gIHZtLFxuICBrZXlcbikge1xuICBpZiAoY2hpbGRWYWwgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGFzc2VydE9iamVjdFR5cGUoa2V5LCBjaGlsZFZhbCwgdm0pO1xuICB9XG4gIGlmICghcGFyZW50VmFsKSB7IHJldHVybiBjaGlsZFZhbCB9XG4gIHZhciByZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBleHRlbmQocmV0LCBwYXJlbnRWYWwpO1xuICBpZiAoY2hpbGRWYWwpIHsgZXh0ZW5kKHJldCwgY2hpbGRWYWwpOyB9XG4gIHJldHVybiByZXRcbn07XG5zdHJhdHMucHJvdmlkZSA9IG1lcmdlRGF0YU9yRm47XG5cbi8qKlxuICogRGVmYXVsdCBzdHJhdGVneS5cbiAqL1xudmFyIGRlZmF1bHRTdHJhdCA9IGZ1bmN0aW9uIChwYXJlbnRWYWwsIGNoaWxkVmFsKSB7XG4gIHJldHVybiBjaGlsZFZhbCA9PT0gdW5kZWZpbmVkXG4gICAgPyBwYXJlbnRWYWxcbiAgICA6IGNoaWxkVmFsXG59O1xuXG4vKipcbiAqIFZhbGlkYXRlIGNvbXBvbmVudCBuYW1lc1xuICovXG5mdW5jdGlvbiBjaGVja0NvbXBvbmVudHMgKG9wdGlvbnMpIHtcbiAgZm9yICh2YXIga2V5IGluIG9wdGlvbnMuY29tcG9uZW50cykge1xuICAgIHZhbGlkYXRlQ29tcG9uZW50TmFtZShrZXkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ29tcG9uZW50TmFtZSAobmFtZSkge1xuICBpZiAoIW5ldyBSZWdFeHAoKFwiXlthLXpBLVpdW1xcXFwtXFxcXC4wLTlfXCIgKyAodW5pY29kZVJlZ0V4cC5zb3VyY2UpICsgXCJdKiRcIikpLnRlc3QobmFtZSkpIHtcbiAgICB3YXJuKFxuICAgICAgJ0ludmFsaWQgY29tcG9uZW50IG5hbWU6IFwiJyArIG5hbWUgKyAnXCIuIENvbXBvbmVudCBuYW1lcyAnICtcbiAgICAgICdzaG91bGQgY29uZm9ybSB0byB2YWxpZCBjdXN0b20gZWxlbWVudCBuYW1lIGluIGh0bWw1IHNwZWNpZmljYXRpb24uJ1xuICAgICk7XG4gIH1cbiAgaWYgKGlzQnVpbHRJblRhZyhuYW1lKSB8fCBjb25maWcuaXNSZXNlcnZlZFRhZyhuYW1lKSkge1xuICAgIHdhcm4oXG4gICAgICAnRG8gbm90IHVzZSBidWlsdC1pbiBvciByZXNlcnZlZCBIVE1MIGVsZW1lbnRzIGFzIGNvbXBvbmVudCAnICtcbiAgICAgICdpZDogJyArIG5hbWVcbiAgICApO1xuICB9XG59XG5cbi8qKlxuICogRW5zdXJlIGFsbCBwcm9wcyBvcHRpb24gc3ludGF4IGFyZSBub3JtYWxpemVkIGludG8gdGhlXG4gKiBPYmplY3QtYmFzZWQgZm9ybWF0LlxuICovXG5mdW5jdGlvbiBub3JtYWxpemVQcm9wcyAob3B0aW9ucywgdm0pIHtcbiAgdmFyIHByb3BzID0gb3B0aW9ucy5wcm9wcztcbiAgaWYgKCFwcm9wcykgeyByZXR1cm4gfVxuICB2YXIgcmVzID0ge307XG4gIHZhciBpLCB2YWwsIG5hbWU7XG4gIGlmIChBcnJheS5pc0FycmF5KHByb3BzKSkge1xuICAgIGkgPSBwcm9wcy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdmFsID0gcHJvcHNbaV07XG4gICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgbmFtZSA9IGNhbWVsaXplKHZhbCk7XG4gICAgICAgIHJlc1tuYW1lXSA9IHsgdHlwZTogbnVsbCB9O1xuICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHdhcm4oJ3Byb3BzIG11c3QgYmUgc3RyaW5ncyB3aGVuIHVzaW5nIGFycmF5IHN5bnRheC4nKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdChwcm9wcykpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgIHZhbCA9IHByb3BzW2tleV07XG4gICAgICBuYW1lID0gY2FtZWxpemUoa2V5KTtcbiAgICAgIHJlc1tuYW1lXSA9IGlzUGxhaW5PYmplY3QodmFsKVxuICAgICAgICA/IHZhbFxuICAgICAgICA6IHsgdHlwZTogdmFsIH07XG4gICAgfVxuICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB3YXJuKFxuICAgICAgXCJJbnZhbGlkIHZhbHVlIGZvciBvcHRpb24gXFxcInByb3BzXFxcIjogZXhwZWN0ZWQgYW4gQXJyYXkgb3IgYW4gT2JqZWN0LCBcIiArXG4gICAgICBcImJ1dCBnb3QgXCIgKyAodG9SYXdUeXBlKHByb3BzKSkgKyBcIi5cIixcbiAgICAgIHZtXG4gICAgKTtcbiAgfVxuICBvcHRpb25zLnByb3BzID0gcmVzO1xufVxuXG4vKipcbiAqIE5vcm1hbGl6ZSBhbGwgaW5qZWN0aW9ucyBpbnRvIE9iamVjdC1iYXNlZCBmb3JtYXRcbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplSW5qZWN0IChvcHRpb25zLCB2bSkge1xuICB2YXIgaW5qZWN0ID0gb3B0aW9ucy5pbmplY3Q7XG4gIGlmICghaW5qZWN0KSB7IHJldHVybiB9XG4gIHZhciBub3JtYWxpemVkID0gb3B0aW9ucy5pbmplY3QgPSB7fTtcbiAgaWYgKEFycmF5LmlzQXJyYXkoaW5qZWN0KSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5qZWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBub3JtYWxpemVkW2luamVjdFtpXV0gPSB7IGZyb206IGluamVjdFtpXSB9O1xuICAgIH1cbiAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KGluamVjdCkpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gaW5qZWN0KSB7XG4gICAgICB2YXIgdmFsID0gaW5qZWN0W2tleV07XG4gICAgICBub3JtYWxpemVkW2tleV0gPSBpc1BsYWluT2JqZWN0KHZhbClcbiAgICAgICAgPyBleHRlbmQoeyBmcm9tOiBrZXkgfSwgdmFsKVxuICAgICAgICA6IHsgZnJvbTogdmFsIH07XG4gICAgfVxuICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB3YXJuKFxuICAgICAgXCJJbnZhbGlkIHZhbHVlIGZvciBvcHRpb24gXFxcImluamVjdFxcXCI6IGV4cGVjdGVkIGFuIEFycmF5IG9yIGFuIE9iamVjdCwgXCIgK1xuICAgICAgXCJidXQgZ290IFwiICsgKHRvUmF3VHlwZShpbmplY3QpKSArIFwiLlwiLFxuICAgICAgdm1cbiAgICApO1xuICB9XG59XG5cbi8qKlxuICogTm9ybWFsaXplIHJhdyBmdW5jdGlvbiBkaXJlY3RpdmVzIGludG8gb2JqZWN0IGZvcm1hdC5cbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplRGlyZWN0aXZlcyAob3B0aW9ucykge1xuICB2YXIgZGlycyA9IG9wdGlvbnMuZGlyZWN0aXZlcztcbiAgaWYgKGRpcnMpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gZGlycykge1xuICAgICAgdmFyIGRlZiQkMSA9IGRpcnNba2V5XTtcbiAgICAgIGlmICh0eXBlb2YgZGVmJCQxID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGRpcnNba2V5XSA9IHsgYmluZDogZGVmJCQxLCB1cGRhdGU6IGRlZiQkMSB9O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnRPYmplY3RUeXBlIChuYW1lLCB2YWx1ZSwgdm0pIHtcbiAgaWYgKCFpc1BsYWluT2JqZWN0KHZhbHVlKSkge1xuICAgIHdhcm4oXG4gICAgICBcIkludmFsaWQgdmFsdWUgZm9yIG9wdGlvbiBcXFwiXCIgKyBuYW1lICsgXCJcXFwiOiBleHBlY3RlZCBhbiBPYmplY3QsIFwiICtcbiAgICAgIFwiYnV0IGdvdCBcIiArICh0b1Jhd1R5cGUodmFsdWUpKSArIFwiLlwiLFxuICAgICAgdm1cbiAgICApO1xuICB9XG59XG5cbi8qKlxuICogTWVyZ2UgdHdvIG9wdGlvbiBvYmplY3RzIGludG8gYSBuZXcgb25lLlxuICogQ29yZSB1dGlsaXR5IHVzZWQgaW4gYm90aCBpbnN0YW50aWF0aW9uIGFuZCBpbmhlcml0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWVyZ2VPcHRpb25zIChcbiAgcGFyZW50LFxuICBjaGlsZCxcbiAgdm1cbikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNoZWNrQ29tcG9uZW50cyhjaGlsZCk7XG4gIH1cblxuICBpZiAodHlwZW9mIGNoaWxkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2hpbGQgPSBjaGlsZC5vcHRpb25zO1xuICB9XG5cbiAgbm9ybWFsaXplUHJvcHMoY2hpbGQsIHZtKTtcbiAgbm9ybWFsaXplSW5qZWN0KGNoaWxkLCB2bSk7XG4gIG5vcm1hbGl6ZURpcmVjdGl2ZXMoY2hpbGQpO1xuXG4gIC8vIEFwcGx5IGV4dGVuZHMgYW5kIG1peGlucyBvbiB0aGUgY2hpbGQgb3B0aW9ucyxcbiAgLy8gYnV0IG9ubHkgaWYgaXQgaXMgYSByYXcgb3B0aW9ucyBvYmplY3QgdGhhdCBpc24ndFxuICAvLyB0aGUgcmVzdWx0IG9mIGFub3RoZXIgbWVyZ2VPcHRpb25zIGNhbGwuXG4gIC8vIE9ubHkgbWVyZ2VkIG9wdGlvbnMgaGFzIHRoZSBfYmFzZSBwcm9wZXJ0eS5cbiAgaWYgKCFjaGlsZC5fYmFzZSkge1xuICAgIGlmIChjaGlsZC5leHRlbmRzKSB7XG4gICAgICBwYXJlbnQgPSBtZXJnZU9wdGlvbnMocGFyZW50LCBjaGlsZC5leHRlbmRzLCB2bSk7XG4gICAgfVxuICAgIGlmIChjaGlsZC5taXhpbnMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gY2hpbGQubWl4aW5zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBwYXJlbnQgPSBtZXJnZU9wdGlvbnMocGFyZW50LCBjaGlsZC5taXhpbnNbaV0sIHZtKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgb3B0aW9ucyA9IHt9O1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBwYXJlbnQpIHtcbiAgICBtZXJnZUZpZWxkKGtleSk7XG4gIH1cbiAgZm9yIChrZXkgaW4gY2hpbGQpIHtcbiAgICBpZiAoIWhhc093bihwYXJlbnQsIGtleSkpIHtcbiAgICAgIG1lcmdlRmllbGQoa2V5KTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gbWVyZ2VGaWVsZCAoa2V5KSB7XG4gICAgdmFyIHN0cmF0ID0gc3RyYXRzW2tleV0gfHwgZGVmYXVsdFN0cmF0O1xuICAgIG9wdGlvbnNba2V5XSA9IHN0cmF0KHBhcmVudFtrZXldLCBjaGlsZFtrZXldLCB2bSwga2V5KTtcbiAgfVxuICByZXR1cm4gb3B0aW9uc1xufVxuXG4vKipcbiAqIFJlc29sdmUgYW4gYXNzZXQuXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgYmVjYXVzZSBjaGlsZCBpbnN0YW5jZXMgbmVlZCBhY2Nlc3NcbiAqIHRvIGFzc2V0cyBkZWZpbmVkIGluIGl0cyBhbmNlc3RvciBjaGFpbi5cbiAqL1xuZnVuY3Rpb24gcmVzb2x2ZUFzc2V0IChcbiAgb3B0aW9ucyxcbiAgdHlwZSxcbiAgaWQsXG4gIHdhcm5NaXNzaW5nXG4pIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICh0eXBlb2YgaWQgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIGFzc2V0cyA9IG9wdGlvbnNbdHlwZV07XG4gIC8vIGNoZWNrIGxvY2FsIHJlZ2lzdHJhdGlvbiB2YXJpYXRpb25zIGZpcnN0XG4gIGlmIChoYXNPd24oYXNzZXRzLCBpZCkpIHsgcmV0dXJuIGFzc2V0c1tpZF0gfVxuICB2YXIgY2FtZWxpemVkSWQgPSBjYW1lbGl6ZShpZCk7XG4gIGlmIChoYXNPd24oYXNzZXRzLCBjYW1lbGl6ZWRJZCkpIHsgcmV0dXJuIGFzc2V0c1tjYW1lbGl6ZWRJZF0gfVxuICB2YXIgUGFzY2FsQ2FzZUlkID0gY2FwaXRhbGl6ZShjYW1lbGl6ZWRJZCk7XG4gIGlmIChoYXNPd24oYXNzZXRzLCBQYXNjYWxDYXNlSWQpKSB7IHJldHVybiBhc3NldHNbUGFzY2FsQ2FzZUlkXSB9XG4gIC8vIGZhbGxiYWNrIHRvIHByb3RvdHlwZSBjaGFpblxuICB2YXIgcmVzID0gYXNzZXRzW2lkXSB8fCBhc3NldHNbY2FtZWxpemVkSWRdIHx8IGFzc2V0c1tQYXNjYWxDYXNlSWRdO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuTWlzc2luZyAmJiAhcmVzKSB7XG4gICAgd2FybihcbiAgICAgICdGYWlsZWQgdG8gcmVzb2x2ZSAnICsgdHlwZS5zbGljZSgwLCAtMSkgKyAnOiAnICsgaWQsXG4gICAgICBvcHRpb25zXG4gICAgKTtcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8qICAqL1xuXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wIChcbiAga2V5LFxuICBwcm9wT3B0aW9ucyxcbiAgcHJvcHNEYXRhLFxuICB2bVxuKSB7XG4gIHZhciBwcm9wID0gcHJvcE9wdGlvbnNba2V5XTtcbiAgdmFyIGFic2VudCA9ICFoYXNPd24ocHJvcHNEYXRhLCBrZXkpO1xuICB2YXIgdmFsdWUgPSBwcm9wc0RhdGFba2V5XTtcbiAgLy8gYm9vbGVhbiBjYXN0aW5nXG4gIHZhciBib29sZWFuSW5kZXggPSBnZXRUeXBlSW5kZXgoQm9vbGVhbiwgcHJvcC50eXBlKTtcbiAgaWYgKGJvb2xlYW5JbmRleCA+IC0xKSB7XG4gICAgaWYgKGFic2VudCAmJiAhaGFzT3duKHByb3AsICdkZWZhdWx0JykpIHtcbiAgICAgIHZhbHVlID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09IGh5cGhlbmF0ZShrZXkpKSB7XG4gICAgICAvLyBvbmx5IGNhc3QgZW1wdHkgc3RyaW5nIC8gc2FtZSBuYW1lIHRvIGJvb2xlYW4gaWZcbiAgICAgIC8vIGJvb2xlYW4gaGFzIGhpZ2hlciBwcmlvcml0eVxuICAgICAgdmFyIHN0cmluZ0luZGV4ID0gZ2V0VHlwZUluZGV4KFN0cmluZywgcHJvcC50eXBlKTtcbiAgICAgIGlmIChzdHJpbmdJbmRleCA8IDAgfHwgYm9vbGVhbkluZGV4IDwgc3RyaW5nSW5kZXgpIHtcbiAgICAgICAgdmFsdWUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBjaGVjayBkZWZhdWx0IHZhbHVlXG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFsdWUgPSBnZXRQcm9wRGVmYXVsdFZhbHVlKHZtLCBwcm9wLCBrZXkpO1xuICAgIC8vIHNpbmNlIHRoZSBkZWZhdWx0IHZhbHVlIGlzIGEgZnJlc2ggY29weSxcbiAgICAvLyBtYWtlIHN1cmUgdG8gb2JzZXJ2ZSBpdC5cbiAgICB2YXIgcHJldlNob3VsZE9ic2VydmUgPSBzaG91bGRPYnNlcnZlO1xuICAgIHRvZ2dsZU9ic2VydmluZyh0cnVlKTtcbiAgICBvYnNlcnZlKHZhbHVlKTtcbiAgICB0b2dnbGVPYnNlcnZpbmcocHJldlNob3VsZE9ic2VydmUpO1xuICB9XG4gIGlmIChcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgLy8gc2tpcCB2YWxpZGF0aW9uIGZvciB3ZWV4IHJlY3ljbGUtbGlzdCBjaGlsZCBjb21wb25lbnQgcHJvcHNcbiAgICAhKGZhbHNlKVxuICApIHtcbiAgICBhc3NlcnRQcm9wKHByb3AsIGtleSwgdmFsdWUsIHZtLCBhYnNlbnQpO1xuICB9XG4gIHJldHVybiB2YWx1ZVxufVxuXG4vKipcbiAqIEdldCB0aGUgZGVmYXVsdCB2YWx1ZSBvZiBhIHByb3AuXG4gKi9cbmZ1bmN0aW9uIGdldFByb3BEZWZhdWx0VmFsdWUgKHZtLCBwcm9wLCBrZXkpIHtcbiAgLy8gbm8gZGVmYXVsdCwgcmV0dXJuIHVuZGVmaW5lZFxuICBpZiAoIWhhc093bihwcm9wLCAnZGVmYXVsdCcpKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG4gIHZhciBkZWYgPSBwcm9wLmRlZmF1bHQ7XG4gIC8vIHdhcm4gYWdhaW5zdCBub24tZmFjdG9yeSBkZWZhdWx0cyBmb3IgT2JqZWN0ICYgQXJyYXlcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgaXNPYmplY3QoZGVmKSkge1xuICAgIHdhcm4oXG4gICAgICAnSW52YWxpZCBkZWZhdWx0IHZhbHVlIGZvciBwcm9wIFwiJyArIGtleSArICdcIjogJyArXG4gICAgICAnUHJvcHMgd2l0aCB0eXBlIE9iamVjdC9BcnJheSBtdXN0IHVzZSBhIGZhY3RvcnkgZnVuY3Rpb24gJyArXG4gICAgICAndG8gcmV0dXJuIHRoZSBkZWZhdWx0IHZhbHVlLicsXG4gICAgICB2bVxuICAgICk7XG4gIH1cbiAgLy8gdGhlIHJhdyBwcm9wIHZhbHVlIHdhcyBhbHNvIHVuZGVmaW5lZCBmcm9tIHByZXZpb3VzIHJlbmRlcixcbiAgLy8gcmV0dXJuIHByZXZpb3VzIGRlZmF1bHQgdmFsdWUgdG8gYXZvaWQgdW5uZWNlc3Nhcnkgd2F0Y2hlciB0cmlnZ2VyXG4gIGlmICh2bSAmJiB2bS4kb3B0aW9ucy5wcm9wc0RhdGEgJiZcbiAgICB2bS4kb3B0aW9ucy5wcm9wc0RhdGFba2V5XSA9PT0gdW5kZWZpbmVkICYmXG4gICAgdm0uX3Byb3BzW2tleV0gIT09IHVuZGVmaW5lZFxuICApIHtcbiAgICByZXR1cm4gdm0uX3Byb3BzW2tleV1cbiAgfVxuICAvLyBjYWxsIGZhY3RvcnkgZnVuY3Rpb24gZm9yIG5vbi1GdW5jdGlvbiB0eXBlc1xuICAvLyBhIHZhbHVlIGlzIEZ1bmN0aW9uIGlmIGl0cyBwcm90b3R5cGUgaXMgZnVuY3Rpb24gZXZlbiBhY3Jvc3MgZGlmZmVyZW50IGV4ZWN1dGlvbiBjb250ZXh0XG4gIHJldHVybiB0eXBlb2YgZGVmID09PSAnZnVuY3Rpb24nICYmIGdldFR5cGUocHJvcC50eXBlKSAhPT0gJ0Z1bmN0aW9uJ1xuICAgID8gZGVmLmNhbGwodm0pXG4gICAgOiBkZWZcbn1cblxuLyoqXG4gKiBBc3NlcnQgd2hldGhlciBhIHByb3AgaXMgdmFsaWQuXG4gKi9cbmZ1bmN0aW9uIGFzc2VydFByb3AgKFxuICBwcm9wLFxuICBuYW1lLFxuICB2YWx1ZSxcbiAgdm0sXG4gIGFic2VudFxuKSB7XG4gIGlmIChwcm9wLnJlcXVpcmVkICYmIGFic2VudCkge1xuICAgIHdhcm4oXG4gICAgICAnTWlzc2luZyByZXF1aXJlZCBwcm9wOiBcIicgKyBuYW1lICsgJ1wiJyxcbiAgICAgIHZtXG4gICAgKTtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAodmFsdWUgPT0gbnVsbCAmJiAhcHJvcC5yZXF1aXJlZCkge1xuICAgIHJldHVyblxuICB9XG4gIHZhciB0eXBlID0gcHJvcC50eXBlO1xuICB2YXIgdmFsaWQgPSAhdHlwZSB8fCB0eXBlID09PSB0cnVlO1xuICB2YXIgZXhwZWN0ZWRUeXBlcyA9IFtdO1xuICBpZiAodHlwZSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgdHlwZSA9IFt0eXBlXTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0eXBlLmxlbmd0aCAmJiAhdmFsaWQ7IGkrKykge1xuICAgICAgdmFyIGFzc2VydGVkVHlwZSA9IGFzc2VydFR5cGUodmFsdWUsIHR5cGVbaV0pO1xuICAgICAgZXhwZWN0ZWRUeXBlcy5wdXNoKGFzc2VydGVkVHlwZS5leHBlY3RlZFR5cGUgfHwgJycpO1xuICAgICAgdmFsaWQgPSBhc3NlcnRlZFR5cGUudmFsaWQ7XG4gICAgfVxuICB9XG5cbiAgaWYgKCF2YWxpZCkge1xuICAgIHdhcm4oXG4gICAgICBnZXRJbnZhbGlkVHlwZU1lc3NhZ2UobmFtZSwgdmFsdWUsIGV4cGVjdGVkVHlwZXMpLFxuICAgICAgdm1cbiAgICApO1xuICAgIHJldHVyblxuICB9XG4gIHZhciB2YWxpZGF0b3IgPSBwcm9wLnZhbGlkYXRvcjtcbiAgaWYgKHZhbGlkYXRvcikge1xuICAgIGlmICghdmFsaWRhdG9yKHZhbHVlKSkge1xuICAgICAgd2FybihcbiAgICAgICAgJ0ludmFsaWQgcHJvcDogY3VzdG9tIHZhbGlkYXRvciBjaGVjayBmYWlsZWQgZm9yIHByb3AgXCInICsgbmFtZSArICdcIi4nLFxuICAgICAgICB2bVxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHNpbXBsZUNoZWNrUkUgPSAvXihTdHJpbmd8TnVtYmVyfEJvb2xlYW58RnVuY3Rpb258U3ltYm9sKSQvO1xuXG5mdW5jdGlvbiBhc3NlcnRUeXBlICh2YWx1ZSwgdHlwZSkge1xuICB2YXIgdmFsaWQ7XG4gIHZhciBleHBlY3RlZFR5cGUgPSBnZXRUeXBlKHR5cGUpO1xuICBpZiAoc2ltcGxlQ2hlY2tSRS50ZXN0KGV4cGVjdGVkVHlwZSkpIHtcbiAgICB2YXIgdCA9IHR5cGVvZiB2YWx1ZTtcbiAgICB2YWxpZCA9IHQgPT09IGV4cGVjdGVkVHlwZS50b0xvd2VyQ2FzZSgpO1xuICAgIC8vIGZvciBwcmltaXRpdmUgd3JhcHBlciBvYmplY3RzXG4gICAgaWYgKCF2YWxpZCAmJiB0ID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFsaWQgPSB2YWx1ZSBpbnN0YW5jZW9mIHR5cGU7XG4gICAgfVxuICB9IGVsc2UgaWYgKGV4cGVjdGVkVHlwZSA9PT0gJ09iamVjdCcpIHtcbiAgICB2YWxpZCA9IGlzUGxhaW5PYmplY3QodmFsdWUpO1xuICB9IGVsc2UgaWYgKGV4cGVjdGVkVHlwZSA9PT0gJ0FycmF5Jykge1xuICAgIHZhbGlkID0gQXJyYXkuaXNBcnJheSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFsaWQgPSB2YWx1ZSBpbnN0YW5jZW9mIHR5cGU7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB2YWxpZDogdmFsaWQsXG4gICAgZXhwZWN0ZWRUeXBlOiBleHBlY3RlZFR5cGVcbiAgfVxufVxuXG4vKipcbiAqIFVzZSBmdW5jdGlvbiBzdHJpbmcgbmFtZSB0byBjaGVjayBidWlsdC1pbiB0eXBlcyxcbiAqIGJlY2F1c2UgYSBzaW1wbGUgZXF1YWxpdHkgY2hlY2sgd2lsbCBmYWlsIHdoZW4gcnVubmluZ1xuICogYWNyb3NzIGRpZmZlcmVudCB2bXMgLyBpZnJhbWVzLlxuICovXG5mdW5jdGlvbiBnZXRUeXBlIChmbikge1xuICB2YXIgbWF0Y2ggPSBmbiAmJiBmbi50b1N0cmluZygpLm1hdGNoKC9eXFxzKmZ1bmN0aW9uIChcXHcrKS8pO1xuICByZXR1cm4gbWF0Y2ggPyBtYXRjaFsxXSA6ICcnXG59XG5cbmZ1bmN0aW9uIGlzU2FtZVR5cGUgKGEsIGIpIHtcbiAgcmV0dXJuIGdldFR5cGUoYSkgPT09IGdldFR5cGUoYilcbn1cblxuZnVuY3Rpb24gZ2V0VHlwZUluZGV4ICh0eXBlLCBleHBlY3RlZFR5cGVzKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShleHBlY3RlZFR5cGVzKSkge1xuICAgIHJldHVybiBpc1NhbWVUeXBlKGV4cGVjdGVkVHlwZXMsIHR5cGUpID8gMCA6IC0xXG4gIH1cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGV4cGVjdGVkVHlwZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoaXNTYW1lVHlwZShleHBlY3RlZFR5cGVzW2ldLCB0eXBlKSkge1xuICAgICAgcmV0dXJuIGlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xXG59XG5cbmZ1bmN0aW9uIGdldEludmFsaWRUeXBlTWVzc2FnZSAobmFtZSwgdmFsdWUsIGV4cGVjdGVkVHlwZXMpIHtcbiAgdmFyIG1lc3NhZ2UgPSBcIkludmFsaWQgcHJvcDogdHlwZSBjaGVjayBmYWlsZWQgZm9yIHByb3AgXFxcIlwiICsgbmFtZSArIFwiXFxcIi5cIiArXG4gICAgXCIgRXhwZWN0ZWQgXCIgKyAoZXhwZWN0ZWRUeXBlcy5tYXAoY2FwaXRhbGl6ZSkuam9pbignLCAnKSk7XG4gIHZhciBleHBlY3RlZFR5cGUgPSBleHBlY3RlZFR5cGVzWzBdO1xuICB2YXIgcmVjZWl2ZWRUeXBlID0gdG9SYXdUeXBlKHZhbHVlKTtcbiAgdmFyIGV4cGVjdGVkVmFsdWUgPSBzdHlsZVZhbHVlKHZhbHVlLCBleHBlY3RlZFR5cGUpO1xuICB2YXIgcmVjZWl2ZWRWYWx1ZSA9IHN0eWxlVmFsdWUodmFsdWUsIHJlY2VpdmVkVHlwZSk7XG4gIC8vIGNoZWNrIGlmIHdlIG5lZWQgdG8gc3BlY2lmeSBleHBlY3RlZCB2YWx1ZVxuICBpZiAoZXhwZWN0ZWRUeXBlcy5sZW5ndGggPT09IDEgJiZcbiAgICAgIGlzRXhwbGljYWJsZShleHBlY3RlZFR5cGUpICYmXG4gICAgICAhaXNCb29sZWFuKGV4cGVjdGVkVHlwZSwgcmVjZWl2ZWRUeXBlKSkge1xuICAgIG1lc3NhZ2UgKz0gXCIgd2l0aCB2YWx1ZSBcIiArIGV4cGVjdGVkVmFsdWU7XG4gIH1cbiAgbWVzc2FnZSArPSBcIiwgZ290IFwiICsgcmVjZWl2ZWRUeXBlICsgXCIgXCI7XG4gIC8vIGNoZWNrIGlmIHdlIG5lZWQgdG8gc3BlY2lmeSByZWNlaXZlZCB2YWx1ZVxuICBpZiAoaXNFeHBsaWNhYmxlKHJlY2VpdmVkVHlwZSkpIHtcbiAgICBtZXNzYWdlICs9IFwid2l0aCB2YWx1ZSBcIiArIHJlY2VpdmVkVmFsdWUgKyBcIi5cIjtcbiAgfVxuICByZXR1cm4gbWVzc2FnZVxufVxuXG5mdW5jdGlvbiBzdHlsZVZhbHVlICh2YWx1ZSwgdHlwZSkge1xuICBpZiAodHlwZSA9PT0gJ1N0cmluZycpIHtcbiAgICByZXR1cm4gKFwiXFxcIlwiICsgdmFsdWUgKyBcIlxcXCJcIilcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnTnVtYmVyJykge1xuICAgIHJldHVybiAoXCJcIiArIChOdW1iZXIodmFsdWUpKSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFwiXCIgKyB2YWx1ZSlcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0V4cGxpY2FibGUgKHZhbHVlKSB7XG4gIHZhciBleHBsaWNpdFR5cGVzID0gWydzdHJpbmcnLCAnbnVtYmVyJywgJ2Jvb2xlYW4nXTtcbiAgcmV0dXJuIGV4cGxpY2l0VHlwZXMuc29tZShmdW5jdGlvbiAoZWxlbSkgeyByZXR1cm4gdmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gZWxlbTsgfSlcbn1cblxuZnVuY3Rpb24gaXNCb29sZWFuICgpIHtcbiAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICByZXR1cm4gYXJncy5zb21lKGZ1bmN0aW9uIChlbGVtKSB7IHJldHVybiBlbGVtLnRvTG93ZXJDYXNlKCkgPT09ICdib29sZWFuJzsgfSlcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGhhbmRsZUVycm9yIChlcnIsIHZtLCBpbmZvKSB7XG4gIC8vIERlYWN0aXZhdGUgZGVwcyB0cmFja2luZyB3aGlsZSBwcm9jZXNzaW5nIGVycm9yIGhhbmRsZXIgdG8gYXZvaWQgcG9zc2libGUgaW5maW5pdGUgcmVuZGVyaW5nLlxuICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy92dWV4L2lzc3Vlcy8xNTA1XG4gIHB1c2hUYXJnZXQoKTtcbiAgdHJ5IHtcbiAgICBpZiAodm0pIHtcbiAgICAgIHZhciBjdXIgPSB2bTtcbiAgICAgIHdoaWxlICgoY3VyID0gY3VyLiRwYXJlbnQpKSB7XG4gICAgICAgIHZhciBob29rcyA9IGN1ci4kb3B0aW9ucy5lcnJvckNhcHR1cmVkO1xuICAgICAgICBpZiAoaG9va3MpIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhvb2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB2YXIgY2FwdHVyZSA9IGhvb2tzW2ldLmNhbGwoY3VyLCBlcnIsIHZtLCBpbmZvKSA9PT0gZmFsc2U7XG4gICAgICAgICAgICAgIGlmIChjYXB0dXJlKSB7IHJldHVybiB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIGdsb2JhbEhhbmRsZUVycm9yKGUsIGN1ciwgJ2Vycm9yQ2FwdHVyZWQgaG9vaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBnbG9iYWxIYW5kbGVFcnJvcihlcnIsIHZtLCBpbmZvKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBwb3BUYXJnZXQoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbnZva2VXaXRoRXJyb3JIYW5kbGluZyAoXG4gIGhhbmRsZXIsXG4gIGNvbnRleHQsXG4gIGFyZ3MsXG4gIHZtLFxuICBpbmZvXG4pIHtcbiAgdmFyIHJlcztcbiAgdHJ5IHtcbiAgICByZXMgPSBhcmdzID8gaGFuZGxlci5hcHBseShjb250ZXh0LCBhcmdzKSA6IGhhbmRsZXIuY2FsbChjb250ZXh0KTtcbiAgICBpZiAocmVzICYmICFyZXMuX2lzVnVlICYmIGlzUHJvbWlzZShyZXMpICYmICFyZXMuX2hhbmRsZWQpIHtcbiAgICAgIHJlcy5jYXRjaChmdW5jdGlvbiAoZSkgeyByZXR1cm4gaGFuZGxlRXJyb3IoZSwgdm0sIGluZm8gKyBcIiAoUHJvbWlzZS9hc3luYylcIik7IH0pO1xuICAgICAgLy8gaXNzdWUgIzk1MTFcbiAgICAgIC8vIGF2b2lkIGNhdGNoIHRyaWdnZXJpbmcgbXVsdGlwbGUgdGltZXMgd2hlbiBuZXN0ZWQgY2FsbHNcbiAgICAgIHJlcy5faGFuZGxlZCA9IHRydWU7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgaGFuZGxlRXJyb3IoZSwgdm0sIGluZm8pO1xuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gZ2xvYmFsSGFuZGxlRXJyb3IgKGVyciwgdm0sIGluZm8pIHtcbiAgaWYgKGNvbmZpZy5lcnJvckhhbmRsZXIpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGNvbmZpZy5lcnJvckhhbmRsZXIuY2FsbChudWxsLCBlcnIsIHZtLCBpbmZvKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIGlmIHRoZSB1c2VyIGludGVudGlvbmFsbHkgdGhyb3dzIHRoZSBvcmlnaW5hbCBlcnJvciBpbiB0aGUgaGFuZGxlcixcbiAgICAgIC8vIGRvIG5vdCBsb2cgaXQgdHdpY2VcbiAgICAgIGlmIChlICE9PSBlcnIpIHtcbiAgICAgICAgbG9nRXJyb3IoZSwgbnVsbCwgJ2NvbmZpZy5lcnJvckhhbmRsZXInKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbG9nRXJyb3IoZXJyLCB2bSwgaW5mbyk7XG59XG5cbmZ1bmN0aW9uIGxvZ0Vycm9yIChlcnIsIHZtLCBpbmZvKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgd2FybigoXCJFcnJvciBpbiBcIiArIGluZm8gKyBcIjogXFxcIlwiICsgKGVyci50b1N0cmluZygpKSArIFwiXFxcIlwiKSwgdm0pO1xuICB9XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmICgoaW5Ccm93c2VyIHx8IGluV2VleCkgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IGVyclxuICB9XG59XG5cbi8qICAqL1xuXG52YXIgY2FsbGJhY2tzID0gW107XG52YXIgcGVuZGluZyA9IGZhbHNlO1xuXG5mdW5jdGlvbiBmbHVzaENhbGxiYWNrcyAoKSB7XG4gIHBlbmRpbmcgPSBmYWxzZTtcbiAgdmFyIGNvcGllcyA9IGNhbGxiYWNrcy5zbGljZSgwKTtcbiAgY2FsbGJhY2tzLmxlbmd0aCA9IDA7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY29waWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29waWVzW2ldKCk7XG4gIH1cbn1cblxuLy8gSGVyZSB3ZSBoYXZlIGFzeW5jIGRlZmVycmluZyB3cmFwcGVycyB1c2luZyBtaWNyb3Rhc2tzLlxuLy8gSW4gMi41IHdlIHVzZWQgKG1hY3JvKSB0YXNrcyAoaW4gY29tYmluYXRpb24gd2l0aCBtaWNyb3Rhc2tzKS5cbi8vIEhvd2V2ZXIsIGl0IGhhcyBzdWJ0bGUgcHJvYmxlbXMgd2hlbiBzdGF0ZSBpcyBjaGFuZ2VkIHJpZ2h0IGJlZm9yZSByZXBhaW50XG4vLyAoZS5nLiAjNjgxMywgb3V0LWluIHRyYW5zaXRpb25zKS5cbi8vIEFsc28sIHVzaW5nIChtYWNybykgdGFza3MgaW4gZXZlbnQgaGFuZGxlciB3b3VsZCBjYXVzZSBzb21lIHdlaXJkIGJlaGF2aW9yc1xuLy8gdGhhdCBjYW5ub3QgYmUgY2lyY3VtdmVudGVkIChlLmcuICM3MTA5LCAjNzE1MywgIzc1NDYsICM3ODM0LCAjODEwOSkuXG4vLyBTbyB3ZSBub3cgdXNlIG1pY3JvdGFza3MgZXZlcnl3aGVyZSwgYWdhaW4uXG4vLyBBIG1ham9yIGRyYXdiYWNrIG9mIHRoaXMgdHJhZGVvZmYgaXMgdGhhdCB0aGVyZSBhcmUgc29tZSBzY2VuYXJpb3Ncbi8vIHdoZXJlIG1pY3JvdGFza3MgaGF2ZSB0b28gaGlnaCBhIHByaW9yaXR5IGFuZCBmaXJlIGluIGJldHdlZW4gc3VwcG9zZWRseVxuLy8gc2VxdWVudGlhbCBldmVudHMgKGUuZy4gIzQ1MjEsICM2NjkwLCB3aGljaCBoYXZlIHdvcmthcm91bmRzKVxuLy8gb3IgZXZlbiBiZXR3ZWVuIGJ1YmJsaW5nIG9mIHRoZSBzYW1lIGV2ZW50ICgjNjU2NikuXG52YXIgdGltZXJGdW5jO1xuXG4vLyBUaGUgbmV4dFRpY2sgYmVoYXZpb3IgbGV2ZXJhZ2VzIHRoZSBtaWNyb3Rhc2sgcXVldWUsIHdoaWNoIGNhbiBiZSBhY2Nlc3NlZFxuLy8gdmlhIGVpdGhlciBuYXRpdmUgUHJvbWlzZS50aGVuIG9yIE11dGF0aW9uT2JzZXJ2ZXIuXG4vLyBNdXRhdGlvbk9ic2VydmVyIGhhcyB3aWRlciBzdXBwb3J0LCBob3dldmVyIGl0IGlzIHNlcmlvdXNseSBidWdnZWQgaW5cbi8vIFVJV2ViVmlldyBpbiBpT1MgPj0gOS4zLjMgd2hlbiB0cmlnZ2VyZWQgaW4gdG91Y2ggZXZlbnQgaGFuZGxlcnMuIEl0XG4vLyBjb21wbGV0ZWx5IHN0b3BzIHdvcmtpbmcgYWZ0ZXIgdHJpZ2dlcmluZyBhIGZldyB0aW1lcy4uLiBzbywgaWYgbmF0aXZlXG4vLyBQcm9taXNlIGlzIGF2YWlsYWJsZSwgd2Ugd2lsbCB1c2UgaXQ6XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCwgJGZsb3ctZGlzYWJsZS1saW5lICovXG5pZiAodHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnICYmIGlzTmF0aXZlKFByb21pc2UpKSB7XG4gIHZhciBwID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIHRpbWVyRnVuYyA9IGZ1bmN0aW9uICgpIHtcbiAgICBwLnRoZW4oZmx1c2hDYWxsYmFja3MpO1xuICAgIC8vIEluIHByb2JsZW1hdGljIFVJV2ViVmlld3MsIFByb21pc2UudGhlbiBkb2Vzbid0IGNvbXBsZXRlbHkgYnJlYWssIGJ1dFxuICAgIC8vIGl0IGNhbiBnZXQgc3R1Y2sgaW4gYSB3ZWlyZCBzdGF0ZSB3aGVyZSBjYWxsYmFja3MgYXJlIHB1c2hlZCBpbnRvIHRoZVxuICAgIC8vIG1pY3JvdGFzayBxdWV1ZSBidXQgdGhlIHF1ZXVlIGlzbid0IGJlaW5nIGZsdXNoZWQsIHVudGlsIHRoZSBicm93c2VyXG4gICAgLy8gbmVlZHMgdG8gZG8gc29tZSBvdGhlciB3b3JrLCBlLmcuIGhhbmRsZSBhIHRpbWVyLiBUaGVyZWZvcmUgd2UgY2FuXG4gICAgLy8gXCJmb3JjZVwiIHRoZSBtaWNyb3Rhc2sgcXVldWUgdG8gYmUgZmx1c2hlZCBieSBhZGRpbmcgYW4gZW1wdHkgdGltZXIuXG4gICAgaWYgKGlzSU9TKSB7IHNldFRpbWVvdXQobm9vcCk7IH1cbiAgfTtcbn0gZWxzZSBpZiAoIWlzSUUgJiYgdHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnICYmIChcbiAgaXNOYXRpdmUoTXV0YXRpb25PYnNlcnZlcikgfHxcbiAgLy8gUGhhbnRvbUpTIGFuZCBpT1MgNy54XG4gIE11dGF0aW9uT2JzZXJ2ZXIudG9TdHJpbmcoKSA9PT0gJ1tvYmplY3QgTXV0YXRpb25PYnNlcnZlckNvbnN0cnVjdG9yXSdcbikpIHtcbiAgLy8gVXNlIE11dGF0aW9uT2JzZXJ2ZXIgd2hlcmUgbmF0aXZlIFByb21pc2UgaXMgbm90IGF2YWlsYWJsZSxcbiAgLy8gZS5nLiBQaGFudG9tSlMsIGlPUzcsIEFuZHJvaWQgNC40XG4gIC8vICgjNjQ2NiBNdXRhdGlvbk9ic2VydmVyIGlzIHVucmVsaWFibGUgaW4gSUUxMSlcbiAgdmFyIGNvdW50ZXIgPSAxO1xuICB2YXIgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmbHVzaENhbGxiYWNrcyk7XG4gIHZhciB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFN0cmluZyhjb3VudGVyKSk7XG4gIG9ic2VydmVyLm9ic2VydmUodGV4dE5vZGUsIHtcbiAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlXG4gIH0pO1xuICB0aW1lckZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgY291bnRlciA9IChjb3VudGVyICsgMSkgJSAyO1xuICAgIHRleHROb2RlLmRhdGEgPSBTdHJpbmcoY291bnRlcik7XG4gIH07XG59IGVsc2UgaWYgKHR5cGVvZiBzZXRJbW1lZGlhdGUgIT09ICd1bmRlZmluZWQnICYmIGlzTmF0aXZlKHNldEltbWVkaWF0ZSkpIHtcbiAgLy8gRmFsbGJhY2sgdG8gc2V0SW1tZWRpYXRlLlxuICAvLyBUZWNobmljYWxseSBpdCBsZXZlcmFnZXMgdGhlIChtYWNybykgdGFzayBxdWV1ZSxcbiAgLy8gYnV0IGl0IGlzIHN0aWxsIGEgYmV0dGVyIGNob2ljZSB0aGFuIHNldFRpbWVvdXQuXG4gIHRpbWVyRnVuYyA9IGZ1bmN0aW9uICgpIHtcbiAgICBzZXRJbW1lZGlhdGUoZmx1c2hDYWxsYmFja3MpO1xuICB9O1xufSBlbHNlIHtcbiAgLy8gRmFsbGJhY2sgdG8gc2V0VGltZW91dC5cbiAgdGltZXJGdW5jID0gZnVuY3Rpb24gKCkge1xuICAgIHNldFRpbWVvdXQoZmx1c2hDYWxsYmFja3MsIDApO1xuICB9O1xufVxuXG5mdW5jdGlvbiBuZXh0VGljayAoY2IsIGN0eCkge1xuICB2YXIgX3Jlc29sdmU7XG4gIGNhbGxiYWNrcy5wdXNoKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY2IpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNiLmNhbGwoY3R4KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaGFuZGxlRXJyb3IoZSwgY3R4LCAnbmV4dFRpY2snKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKF9yZXNvbHZlKSB7XG4gICAgICBfcmVzb2x2ZShjdHgpO1xuICAgIH1cbiAgfSk7XG4gIGlmICghcGVuZGluZykge1xuICAgIHBlbmRpbmcgPSB0cnVlO1xuICAgIHRpbWVyRnVuYygpO1xuICB9XG4gIC8vICRmbG93LWRpc2FibGUtbGluZVxuICBpZiAoIWNiICYmIHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgX3Jlc29sdmUgPSByZXNvbHZlO1xuICAgIH0pXG4gIH1cbn1cblxuLyogICovXG5cbi8qIG5vdCB0eXBlIGNoZWNraW5nIHRoaXMgZmlsZSBiZWNhdXNlIGZsb3cgZG9lc24ndCBwbGF5IHdlbGwgd2l0aCBQcm94eSAqL1xuXG52YXIgaW5pdFByb3h5O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgYWxsb3dlZEdsb2JhbHMgPSBtYWtlTWFwKFxuICAgICdJbmZpbml0eSx1bmRlZmluZWQsTmFOLGlzRmluaXRlLGlzTmFOLCcgK1xuICAgICdwYXJzZUZsb2F0LHBhcnNlSW50LGRlY29kZVVSSSxkZWNvZGVVUklDb21wb25lbnQsZW5jb2RlVVJJLGVuY29kZVVSSUNvbXBvbmVudCwnICtcbiAgICAnTWF0aCxOdW1iZXIsRGF0ZSxBcnJheSxPYmplY3QsQm9vbGVhbixTdHJpbmcsUmVnRXhwLE1hcCxTZXQsSlNPTixJbnRsLCcgK1xuICAgICdyZXF1aXJlJyAvLyBmb3IgV2VicGFjay9Ccm93c2VyaWZ5XG4gICk7XG5cbiAgdmFyIHdhcm5Ob25QcmVzZW50ID0gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7XG4gICAgd2FybihcbiAgICAgIFwiUHJvcGVydHkgb3IgbWV0aG9kIFxcXCJcIiArIGtleSArIFwiXFxcIiBpcyBub3QgZGVmaW5lZCBvbiB0aGUgaW5zdGFuY2UgYnV0IFwiICtcbiAgICAgICdyZWZlcmVuY2VkIGR1cmluZyByZW5kZXIuIE1ha2Ugc3VyZSB0aGF0IHRoaXMgcHJvcGVydHkgaXMgcmVhY3RpdmUsICcgK1xuICAgICAgJ2VpdGhlciBpbiB0aGUgZGF0YSBvcHRpb24sIG9yIGZvciBjbGFzcy1iYXNlZCBjb21wb25lbnRzLCBieSAnICtcbiAgICAgICdpbml0aWFsaXppbmcgdGhlIHByb3BlcnR5LiAnICtcbiAgICAgICdTZWU6IGh0dHBzOi8vdnVlanMub3JnL3YyL2d1aWRlL3JlYWN0aXZpdHkuaHRtbCNEZWNsYXJpbmctUmVhY3RpdmUtUHJvcGVydGllcy4nLFxuICAgICAgdGFyZ2V0XG4gICAgKTtcbiAgfTtcblxuICB2YXIgd2FyblJlc2VydmVkUHJlZml4ID0gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7XG4gICAgd2FybihcbiAgICAgIFwiUHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiIG11c3QgYmUgYWNjZXNzZWQgd2l0aCBcXFwiJGRhdGEuXCIgKyBrZXkgKyBcIlxcXCIgYmVjYXVzZSBcIiArXG4gICAgICAncHJvcGVydGllcyBzdGFydGluZyB3aXRoIFwiJFwiIG9yIFwiX1wiIGFyZSBub3QgcHJveGllZCBpbiB0aGUgVnVlIGluc3RhbmNlIHRvICcgK1xuICAgICAgJ3ByZXZlbnQgY29uZmxpY3RzIHdpdGggVnVlIGludGVybmFscy4gJyArXG4gICAgICAnU2VlOiBodHRwczovL3Z1ZWpzLm9yZy92Mi9hcGkvI2RhdGEnLFxuICAgICAgdGFyZ2V0XG4gICAgKTtcbiAgfTtcblxuICB2YXIgaGFzUHJveHkgPVxuICAgIHR5cGVvZiBQcm94eSAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYXRpdmUoUHJveHkpO1xuXG4gIGlmIChoYXNQcm94eSkge1xuICAgIHZhciBpc0J1aWx0SW5Nb2RpZmllciA9IG1ha2VNYXAoJ3N0b3AscHJldmVudCxzZWxmLGN0cmwsc2hpZnQsYWx0LG1ldGEsZXhhY3QnKTtcbiAgICBjb25maWcua2V5Q29kZXMgPSBuZXcgUHJveHkoY29uZmlnLmtleUNvZGVzLCB7XG4gICAgICBzZXQ6IGZ1bmN0aW9uIHNldCAodGFyZ2V0LCBrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmIChpc0J1aWx0SW5Nb2RpZmllcihrZXkpKSB7XG4gICAgICAgICAgd2FybigoXCJBdm9pZCBvdmVyd3JpdGluZyBidWlsdC1pbiBtb2RpZmllciBpbiBjb25maWcua2V5Q29kZXM6IC5cIiArIGtleSkpO1xuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdmFyIGhhc0hhbmRsZXIgPSB7XG4gICAgaGFzOiBmdW5jdGlvbiBoYXMgKHRhcmdldCwga2V5KSB7XG4gICAgICB2YXIgaGFzID0ga2V5IGluIHRhcmdldDtcbiAgICAgIHZhciBpc0FsbG93ZWQgPSBhbGxvd2VkR2xvYmFscyhrZXkpIHx8XG4gICAgICAgICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJyAmJiBrZXkuY2hhckF0KDApID09PSAnXycgJiYgIShrZXkgaW4gdGFyZ2V0LiRkYXRhKSk7XG4gICAgICBpZiAoIWhhcyAmJiAhaXNBbGxvd2VkKSB7XG4gICAgICAgIGlmIChrZXkgaW4gdGFyZ2V0LiRkYXRhKSB7IHdhcm5SZXNlcnZlZFByZWZpeCh0YXJnZXQsIGtleSk7IH1cbiAgICAgICAgZWxzZSB7IHdhcm5Ob25QcmVzZW50KHRhcmdldCwga2V5KTsgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGhhcyB8fCAhaXNBbGxvd2VkXG4gICAgfVxuICB9O1xuXG4gIHZhciBnZXRIYW5kbGVyID0ge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0ICh0YXJnZXQsIGtleSkge1xuICAgICAgaWYgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnICYmICEoa2V5IGluIHRhcmdldCkpIHtcbiAgICAgICAgaWYgKGtleSBpbiB0YXJnZXQuJGRhdGEpIHsgd2FyblJlc2VydmVkUHJlZml4KHRhcmdldCwga2V5KTsgfVxuICAgICAgICBlbHNlIHsgd2Fybk5vblByZXNlbnQodGFyZ2V0LCBrZXkpOyB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGFyZ2V0W2tleV1cbiAgICB9XG4gIH07XG5cbiAgaW5pdFByb3h5ID0gZnVuY3Rpb24gaW5pdFByb3h5ICh2bSkge1xuICAgIGlmIChoYXNQcm94eSkge1xuICAgICAgLy8gZGV0ZXJtaW5lIHdoaWNoIHByb3h5IGhhbmRsZXIgdG8gdXNlXG4gICAgICB2YXIgb3B0aW9ucyA9IHZtLiRvcHRpb25zO1xuICAgICAgdmFyIGhhbmRsZXJzID0gb3B0aW9ucy5yZW5kZXIgJiYgb3B0aW9ucy5yZW5kZXIuX3dpdGhTdHJpcHBlZFxuICAgICAgICA/IGdldEhhbmRsZXJcbiAgICAgICAgOiBoYXNIYW5kbGVyO1xuICAgICAgdm0uX3JlbmRlclByb3h5ID0gbmV3IFByb3h5KHZtLCBoYW5kbGVycyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZtLl9yZW5kZXJQcm94eSA9IHZtO1xuICAgIH1cbiAgfTtcbn1cblxuLyogICovXG5cbnZhciBzZWVuT2JqZWN0cyA9IG5ldyBfU2V0KCk7XG5cbi8qKlxuICogUmVjdXJzaXZlbHkgdHJhdmVyc2UgYW4gb2JqZWN0IHRvIGV2b2tlIGFsbCBjb252ZXJ0ZWRcbiAqIGdldHRlcnMsIHNvIHRoYXQgZXZlcnkgbmVzdGVkIHByb3BlcnR5IGluc2lkZSB0aGUgb2JqZWN0XG4gKiBpcyBjb2xsZWN0ZWQgYXMgYSBcImRlZXBcIiBkZXBlbmRlbmN5LlxuICovXG5mdW5jdGlvbiB0cmF2ZXJzZSAodmFsKSB7XG4gIF90cmF2ZXJzZSh2YWwsIHNlZW5PYmplY3RzKTtcbiAgc2Vlbk9iamVjdHMuY2xlYXIoKTtcbn1cblxuZnVuY3Rpb24gX3RyYXZlcnNlICh2YWwsIHNlZW4pIHtcbiAgdmFyIGksIGtleXM7XG4gIHZhciBpc0EgPSBBcnJheS5pc0FycmF5KHZhbCk7XG4gIGlmICgoIWlzQSAmJiAhaXNPYmplY3QodmFsKSkgfHwgT2JqZWN0LmlzRnJvemVuKHZhbCkgfHwgdmFsIGluc3RhbmNlb2YgVk5vZGUpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAodmFsLl9fb2JfXykge1xuICAgIHZhciBkZXBJZCA9IHZhbC5fX29iX18uZGVwLmlkO1xuICAgIGlmIChzZWVuLmhhcyhkZXBJZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBzZWVuLmFkZChkZXBJZCk7XG4gIH1cbiAgaWYgKGlzQSkge1xuICAgIGkgPSB2YWwubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHsgX3RyYXZlcnNlKHZhbFtpXSwgc2Vlbik7IH1cbiAgfSBlbHNlIHtcbiAgICBrZXlzID0gT2JqZWN0LmtleXModmFsKTtcbiAgICBpID0ga2V5cy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkgeyBfdHJhdmVyc2UodmFsW2tleXNbaV1dLCBzZWVuKTsgfVxuICB9XG59XG5cbnZhciBtYXJrO1xudmFyIG1lYXN1cmU7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBwZXJmID0gaW5Ccm93c2VyICYmIHdpbmRvdy5wZXJmb3JtYW5jZTtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChcbiAgICBwZXJmICYmXG4gICAgcGVyZi5tYXJrICYmXG4gICAgcGVyZi5tZWFzdXJlICYmXG4gICAgcGVyZi5jbGVhck1hcmtzICYmXG4gICAgcGVyZi5jbGVhck1lYXN1cmVzXG4gICkge1xuICAgIG1hcmsgPSBmdW5jdGlvbiAodGFnKSB7IHJldHVybiBwZXJmLm1hcmsodGFnKTsgfTtcbiAgICBtZWFzdXJlID0gZnVuY3Rpb24gKG5hbWUsIHN0YXJ0VGFnLCBlbmRUYWcpIHtcbiAgICAgIHBlcmYubWVhc3VyZShuYW1lLCBzdGFydFRhZywgZW5kVGFnKTtcbiAgICAgIHBlcmYuY2xlYXJNYXJrcyhzdGFydFRhZyk7XG4gICAgICBwZXJmLmNsZWFyTWFya3MoZW5kVGFnKTtcbiAgICAgIC8vIHBlcmYuY2xlYXJNZWFzdXJlcyhuYW1lKVxuICAgIH07XG4gIH1cbn1cblxuLyogICovXG5cbnZhciBub3JtYWxpemVFdmVudCA9IGNhY2hlZChmdW5jdGlvbiAobmFtZSkge1xuICB2YXIgcGFzc2l2ZSA9IG5hbWUuY2hhckF0KDApID09PSAnJic7XG4gIG5hbWUgPSBwYXNzaXZlID8gbmFtZS5zbGljZSgxKSA6IG5hbWU7XG4gIHZhciBvbmNlJCQxID0gbmFtZS5jaGFyQXQoMCkgPT09ICd+JzsgLy8gUHJlZml4ZWQgbGFzdCwgY2hlY2tlZCBmaXJzdFxuICBuYW1lID0gb25jZSQkMSA/IG5hbWUuc2xpY2UoMSkgOiBuYW1lO1xuICB2YXIgY2FwdHVyZSA9IG5hbWUuY2hhckF0KDApID09PSAnISc7XG4gIG5hbWUgPSBjYXB0dXJlID8gbmFtZS5zbGljZSgxKSA6IG5hbWU7XG4gIHJldHVybiB7XG4gICAgbmFtZTogbmFtZSxcbiAgICBvbmNlOiBvbmNlJCQxLFxuICAgIGNhcHR1cmU6IGNhcHR1cmUsXG4gICAgcGFzc2l2ZTogcGFzc2l2ZVxuICB9XG59KTtcblxuZnVuY3Rpb24gY3JlYXRlRm5JbnZva2VyIChmbnMsIHZtKSB7XG4gIGZ1bmN0aW9uIGludm9rZXIgKCkge1xuICAgIHZhciBhcmd1bWVudHMkMSA9IGFyZ3VtZW50cztcblxuICAgIHZhciBmbnMgPSBpbnZva2VyLmZucztcbiAgICBpZiAoQXJyYXkuaXNBcnJheShmbnMpKSB7XG4gICAgICB2YXIgY2xvbmVkID0gZm5zLnNsaWNlKCk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNsb25lZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpbnZva2VXaXRoRXJyb3JIYW5kbGluZyhjbG9uZWRbaV0sIG51bGwsIGFyZ3VtZW50cyQxLCB2bSwgXCJ2LW9uIGhhbmRsZXJcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHJldHVybiBoYW5kbGVyIHJldHVybiB2YWx1ZSBmb3Igc2luZ2xlIGhhbmRsZXJzXG4gICAgICByZXR1cm4gaW52b2tlV2l0aEVycm9ySGFuZGxpbmcoZm5zLCBudWxsLCBhcmd1bWVudHMsIHZtLCBcInYtb24gaGFuZGxlclwiKVxuICAgIH1cbiAgfVxuICBpbnZva2VyLmZucyA9IGZucztcbiAgcmV0dXJuIGludm9rZXJcbn1cblxuZnVuY3Rpb24gdXBkYXRlTGlzdGVuZXJzIChcbiAgb24sXG4gIG9sZE9uLFxuICBhZGQsXG4gIHJlbW92ZSQkMSxcbiAgY3JlYXRlT25jZUhhbmRsZXIsXG4gIHZtXG4pIHtcbiAgdmFyIG5hbWUsIGRlZiQkMSwgY3VyLCBvbGQsIGV2ZW50O1xuICBmb3IgKG5hbWUgaW4gb24pIHtcbiAgICBkZWYkJDEgPSBjdXIgPSBvbltuYW1lXTtcbiAgICBvbGQgPSBvbGRPbltuYW1lXTtcbiAgICBldmVudCA9IG5vcm1hbGl6ZUV2ZW50KG5hbWUpO1xuICAgIGlmIChpc1VuZGVmKGN1cikpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgXCJJbnZhbGlkIGhhbmRsZXIgZm9yIGV2ZW50IFxcXCJcIiArIChldmVudC5uYW1lKSArIFwiXFxcIjogZ290IFwiICsgU3RyaW5nKGN1ciksXG4gICAgICAgIHZtXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoaXNVbmRlZihvbGQpKSB7XG4gICAgICBpZiAoaXNVbmRlZihjdXIuZm5zKSkge1xuICAgICAgICBjdXIgPSBvbltuYW1lXSA9IGNyZWF0ZUZuSW52b2tlcihjdXIsIHZtKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc1RydWUoZXZlbnQub25jZSkpIHtcbiAgICAgICAgY3VyID0gb25bbmFtZV0gPSBjcmVhdGVPbmNlSGFuZGxlcihldmVudC5uYW1lLCBjdXIsIGV2ZW50LmNhcHR1cmUpO1xuICAgICAgfVxuICAgICAgYWRkKGV2ZW50Lm5hbWUsIGN1ciwgZXZlbnQuY2FwdHVyZSwgZXZlbnQucGFzc2l2ZSwgZXZlbnQucGFyYW1zKTtcbiAgICB9IGVsc2UgaWYgKGN1ciAhPT0gb2xkKSB7XG4gICAgICBvbGQuZm5zID0gY3VyO1xuICAgICAgb25bbmFtZV0gPSBvbGQ7XG4gICAgfVxuICB9XG4gIGZvciAobmFtZSBpbiBvbGRPbikge1xuICAgIGlmIChpc1VuZGVmKG9uW25hbWVdKSkge1xuICAgICAgZXZlbnQgPSBub3JtYWxpemVFdmVudChuYW1lKTtcbiAgICAgIHJlbW92ZSQkMShldmVudC5uYW1lLCBvbGRPbltuYW1lXSwgZXZlbnQuY2FwdHVyZSk7XG4gICAgfVxuICB9XG59XG5cbi8qICAqL1xuXG4vKiAgKi9cblxuLy8gZml4ZWQgYnkgeHh4eHh4IChtcCBwcm9wZXJ0aWVzKVxuZnVuY3Rpb24gZXh0cmFjdFByb3BlcnRpZXNGcm9tVk5vZGVEYXRhKGRhdGEsIEN0b3IsIHJlcywgY29udGV4dCkge1xuICB2YXIgcHJvcE9wdGlvbnMgPSBDdG9yLm9wdGlvbnMubXBPcHRpb25zICYmIEN0b3Iub3B0aW9ucy5tcE9wdGlvbnMucHJvcGVydGllcztcbiAgaWYgKGlzVW5kZWYocHJvcE9wdGlvbnMpKSB7XG4gICAgcmV0dXJuIHJlc1xuICB9XG4gIHZhciBleHRlcm5hbENsYXNzZXMgPSBDdG9yLm9wdGlvbnMubXBPcHRpb25zLmV4dGVybmFsQ2xhc3NlcyB8fCBbXTtcbiAgdmFyIGF0dHJzID0gZGF0YS5hdHRycztcbiAgdmFyIHByb3BzID0gZGF0YS5wcm9wcztcbiAgaWYgKGlzRGVmKGF0dHJzKSB8fCBpc0RlZihwcm9wcykpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcE9wdGlvbnMpIHtcbiAgICAgIHZhciBhbHRLZXkgPSBoeXBoZW5hdGUoa2V5KTtcbiAgICAgIHZhciByZXN1bHQgPSBjaGVja1Byb3AocmVzLCBwcm9wcywga2V5LCBhbHRLZXksIHRydWUpIHx8XG4gICAgICAgICAgY2hlY2tQcm9wKHJlcywgYXR0cnMsIGtleSwgYWx0S2V5LCBmYWxzZSk7XG4gICAgICAvLyBleHRlcm5hbENsYXNzXG4gICAgICBpZiAoXG4gICAgICAgIHJlc3VsdCAmJlxuICAgICAgICByZXNba2V5XSAmJlxuICAgICAgICBleHRlcm5hbENsYXNzZXMuaW5kZXhPZihhbHRLZXkpICE9PSAtMSAmJlxuICAgICAgICBjb250ZXh0W2NhbWVsaXplKHJlc1trZXldKV1cbiAgICAgICkge1xuICAgICAgICAvLyDotYvlgLwgZXh0ZXJuYWxDbGFzcyDnnJ/mraPnmoTlgLwo5qih5p2/6YeMIGV4dGVybmFsQ2xhc3Mg55qE5YC85Y+v6IO95piv5a2X56ym5LiyKVxuICAgICAgICByZXNba2V5XSA9IGNvbnRleHRbY2FtZWxpemUocmVzW2tleV0pXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBleHRyYWN0UHJvcHNGcm9tVk5vZGVEYXRhIChcbiAgZGF0YSxcbiAgQ3RvcixcbiAgdGFnLFxuICBjb250ZXh0Ly8gZml4ZWQgYnkgeHh4eHh4XG4pIHtcbiAgLy8gd2UgYXJlIG9ubHkgZXh0cmFjdGluZyByYXcgdmFsdWVzIGhlcmUuXG4gIC8vIHZhbGlkYXRpb24gYW5kIGRlZmF1bHQgdmFsdWVzIGFyZSBoYW5kbGVkIGluIHRoZSBjaGlsZFxuICAvLyBjb21wb25lbnQgaXRzZWxmLlxuICB2YXIgcHJvcE9wdGlvbnMgPSBDdG9yLm9wdGlvbnMucHJvcHM7XG4gIGlmIChpc1VuZGVmKHByb3BPcHRpb25zKSkge1xuICAgIC8vIGZpeGVkIGJ5IHh4eHh4eFxuICAgIHJldHVybiBleHRyYWN0UHJvcGVydGllc0Zyb21WTm9kZURhdGEoZGF0YSwgQ3Rvciwge30sIGNvbnRleHQpXG4gIH1cbiAgdmFyIHJlcyA9IHt9O1xuICB2YXIgYXR0cnMgPSBkYXRhLmF0dHJzO1xuICB2YXIgcHJvcHMgPSBkYXRhLnByb3BzO1xuICBpZiAoaXNEZWYoYXR0cnMpIHx8IGlzRGVmKHByb3BzKSkge1xuICAgIGZvciAodmFyIGtleSBpbiBwcm9wT3B0aW9ucykge1xuICAgICAgdmFyIGFsdEtleSA9IGh5cGhlbmF0ZShrZXkpO1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdmFyIGtleUluTG93ZXJDYXNlID0ga2V5LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBrZXkgIT09IGtleUluTG93ZXJDYXNlICYmXG4gICAgICAgICAgYXR0cnMgJiYgaGFzT3duKGF0dHJzLCBrZXlJbkxvd2VyQ2FzZSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGlwKFxuICAgICAgICAgICAgXCJQcm9wIFxcXCJcIiArIGtleUluTG93ZXJDYXNlICsgXCJcXFwiIGlzIHBhc3NlZCB0byBjb21wb25lbnQgXCIgK1xuICAgICAgICAgICAgKGZvcm1hdENvbXBvbmVudE5hbWUodGFnIHx8IEN0b3IpKSArIFwiLCBidXQgdGhlIGRlY2xhcmVkIHByb3AgbmFtZSBpc1wiICtcbiAgICAgICAgICAgIFwiIFxcXCJcIiArIGtleSArIFwiXFxcIi4gXCIgK1xuICAgICAgICAgICAgXCJOb3RlIHRoYXQgSFRNTCBhdHRyaWJ1dGVzIGFyZSBjYXNlLWluc2Vuc2l0aXZlIGFuZCBjYW1lbENhc2VkIFwiICtcbiAgICAgICAgICAgIFwicHJvcHMgbmVlZCB0byB1c2UgdGhlaXIga2ViYWItY2FzZSBlcXVpdmFsZW50cyB3aGVuIHVzaW5nIGluLURPTSBcIiArXG4gICAgICAgICAgICBcInRlbXBsYXRlcy4gWW91IHNob3VsZCBwcm9iYWJseSB1c2UgXFxcIlwiICsgYWx0S2V5ICsgXCJcXFwiIGluc3RlYWQgb2YgXFxcIlwiICsga2V5ICsgXCJcXFwiLlwiXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2hlY2tQcm9wKHJlcywgcHJvcHMsIGtleSwgYWx0S2V5LCB0cnVlKSB8fFxuICAgICAgY2hlY2tQcm9wKHJlcywgYXR0cnMsIGtleSwgYWx0S2V5LCBmYWxzZSk7XG4gICAgfVxuICB9XG4gIC8vIGZpeGVkIGJ5IHh4eHh4eFxuICByZXR1cm4gZXh0cmFjdFByb3BlcnRpZXNGcm9tVk5vZGVEYXRhKGRhdGEsIEN0b3IsIHJlcywgY29udGV4dClcbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wIChcbiAgcmVzLFxuICBoYXNoLFxuICBrZXksXG4gIGFsdEtleSxcbiAgcHJlc2VydmVcbikge1xuICBpZiAoaXNEZWYoaGFzaCkpIHtcbiAgICBpZiAoaGFzT3duKGhhc2gsIGtleSkpIHtcbiAgICAgIHJlc1trZXldID0gaGFzaFtrZXldO1xuICAgICAgaWYgKCFwcmVzZXJ2ZSkge1xuICAgICAgICBkZWxldGUgaGFzaFtrZXldO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGVsc2UgaWYgKGhhc093bihoYXNoLCBhbHRLZXkpKSB7XG4gICAgICByZXNba2V5XSA9IGhhc2hbYWx0S2V5XTtcbiAgICAgIGlmICghcHJlc2VydmUpIHtcbiAgICAgICAgZGVsZXRlIGhhc2hbYWx0S2V5XTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG4vKiAgKi9cblxuLy8gVGhlIHRlbXBsYXRlIGNvbXBpbGVyIGF0dGVtcHRzIHRvIG1pbmltaXplIHRoZSBuZWVkIGZvciBub3JtYWxpemF0aW9uIGJ5XG4vLyBzdGF0aWNhbGx5IGFuYWx5emluZyB0aGUgdGVtcGxhdGUgYXQgY29tcGlsZSB0aW1lLlxuLy9cbi8vIEZvciBwbGFpbiBIVE1MIG1hcmt1cCwgbm9ybWFsaXphdGlvbiBjYW4gYmUgY29tcGxldGVseSBza2lwcGVkIGJlY2F1c2UgdGhlXG4vLyBnZW5lcmF0ZWQgcmVuZGVyIGZ1bmN0aW9uIGlzIGd1YXJhbnRlZWQgdG8gcmV0dXJuIEFycmF5PFZOb2RlPi4gVGhlcmUgYXJlXG4vLyB0d28gY2FzZXMgd2hlcmUgZXh0cmEgbm9ybWFsaXphdGlvbiBpcyBuZWVkZWQ6XG5cbi8vIDEuIFdoZW4gdGhlIGNoaWxkcmVuIGNvbnRhaW5zIGNvbXBvbmVudHMgLSBiZWNhdXNlIGEgZnVuY3Rpb25hbCBjb21wb25lbnRcbi8vIG1heSByZXR1cm4gYW4gQXJyYXkgaW5zdGVhZCBvZiBhIHNpbmdsZSByb290LiBJbiB0aGlzIGNhc2UsIGp1c3QgYSBzaW1wbGVcbi8vIG5vcm1hbGl6YXRpb24gaXMgbmVlZGVkIC0gaWYgYW55IGNoaWxkIGlzIGFuIEFycmF5LCB3ZSBmbGF0dGVuIHRoZSB3aG9sZVxuLy8gdGhpbmcgd2l0aCBBcnJheS5wcm90b3R5cGUuY29uY2F0LiBJdCBpcyBndWFyYW50ZWVkIHRvIGJlIG9ubHkgMS1sZXZlbCBkZWVwXG4vLyBiZWNhdXNlIGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhbHJlYWR5IG5vcm1hbGl6ZSB0aGVpciBvd24gY2hpbGRyZW4uXG5mdW5jdGlvbiBzaW1wbGVOb3JtYWxpemVDaGlsZHJlbiAoY2hpbGRyZW4pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuW2ldKSkge1xuICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIGNoaWxkcmVuKVxuICAgIH1cbiAgfVxuICByZXR1cm4gY2hpbGRyZW5cbn1cblxuLy8gMi4gV2hlbiB0aGUgY2hpbGRyZW4gY29udGFpbnMgY29uc3RydWN0cyB0aGF0IGFsd2F5cyBnZW5lcmF0ZWQgbmVzdGVkIEFycmF5cyxcbi8vIGUuZy4gPHRlbXBsYXRlPiwgPHNsb3Q+LCB2LWZvciwgb3Igd2hlbiB0aGUgY2hpbGRyZW4gaXMgcHJvdmlkZWQgYnkgdXNlclxuLy8gd2l0aCBoYW5kLXdyaXR0ZW4gcmVuZGVyIGZ1bmN0aW9ucyAvIEpTWC4gSW4gc3VjaCBjYXNlcyBhIGZ1bGwgbm9ybWFsaXphdGlvblxuLy8gaXMgbmVlZGVkIHRvIGNhdGVyIHRvIGFsbCBwb3NzaWJsZSB0eXBlcyBvZiBjaGlsZHJlbiB2YWx1ZXMuXG5mdW5jdGlvbiBub3JtYWxpemVDaGlsZHJlbiAoY2hpbGRyZW4pIHtcbiAgcmV0dXJuIGlzUHJpbWl0aXZlKGNoaWxkcmVuKVxuICAgID8gW2NyZWF0ZVRleHRWTm9kZShjaGlsZHJlbildXG4gICAgOiBBcnJheS5pc0FycmF5KGNoaWxkcmVuKVxuICAgICAgPyBub3JtYWxpemVBcnJheUNoaWxkcmVuKGNoaWxkcmVuKVxuICAgICAgOiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gaXNUZXh0Tm9kZSAobm9kZSkge1xuICByZXR1cm4gaXNEZWYobm9kZSkgJiYgaXNEZWYobm9kZS50ZXh0KSAmJiBpc0ZhbHNlKG5vZGUuaXNDb21tZW50KVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVBcnJheUNoaWxkcmVuIChjaGlsZHJlbiwgbmVzdGVkSW5kZXgpIHtcbiAgdmFyIHJlcyA9IFtdO1xuICB2YXIgaSwgYywgbGFzdEluZGV4LCBsYXN0O1xuICBmb3IgKGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBjID0gY2hpbGRyZW5baV07XG4gICAgaWYgKGlzVW5kZWYoYykgfHwgdHlwZW9mIGMgPT09ICdib29sZWFuJykgeyBjb250aW51ZSB9XG4gICAgbGFzdEluZGV4ID0gcmVzLmxlbmd0aCAtIDE7XG4gICAgbGFzdCA9IHJlc1tsYXN0SW5kZXhdO1xuICAgIC8vICBuZXN0ZWRcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjKSkge1xuICAgICAgaWYgKGMubGVuZ3RoID4gMCkge1xuICAgICAgICBjID0gbm9ybWFsaXplQXJyYXlDaGlsZHJlbihjLCAoKG5lc3RlZEluZGV4IHx8ICcnKSArIFwiX1wiICsgaSkpO1xuICAgICAgICAvLyBtZXJnZSBhZGphY2VudCB0ZXh0IG5vZGVzXG4gICAgICAgIGlmIChpc1RleHROb2RlKGNbMF0pICYmIGlzVGV4dE5vZGUobGFzdCkpIHtcbiAgICAgICAgICByZXNbbGFzdEluZGV4XSA9IGNyZWF0ZVRleHRWTm9kZShsYXN0LnRleHQgKyAoY1swXSkudGV4dCk7XG4gICAgICAgICAgYy5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgICAgIHJlcy5wdXNoLmFwcGx5KHJlcywgYyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1ByaW1pdGl2ZShjKSkge1xuICAgICAgaWYgKGlzVGV4dE5vZGUobGFzdCkpIHtcbiAgICAgICAgLy8gbWVyZ2UgYWRqYWNlbnQgdGV4dCBub2Rlc1xuICAgICAgICAvLyB0aGlzIGlzIG5lY2Vzc2FyeSBmb3IgU1NSIGh5ZHJhdGlvbiBiZWNhdXNlIHRleHQgbm9kZXMgYXJlXG4gICAgICAgIC8vIGVzc2VudGlhbGx5IG1lcmdlZCB3aGVuIHJlbmRlcmVkIHRvIEhUTUwgc3RyaW5nc1xuICAgICAgICByZXNbbGFzdEluZGV4XSA9IGNyZWF0ZVRleHRWTm9kZShsYXN0LnRleHQgKyBjKTtcbiAgICAgIH0gZWxzZSBpZiAoYyAhPT0gJycpIHtcbiAgICAgICAgLy8gY29udmVydCBwcmltaXRpdmUgdG8gdm5vZGVcbiAgICAgICAgcmVzLnB1c2goY3JlYXRlVGV4dFZOb2RlKGMpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGlzVGV4dE5vZGUoYykgJiYgaXNUZXh0Tm9kZShsYXN0KSkge1xuICAgICAgICAvLyBtZXJnZSBhZGphY2VudCB0ZXh0IG5vZGVzXG4gICAgICAgIHJlc1tsYXN0SW5kZXhdID0gY3JlYXRlVGV4dFZOb2RlKGxhc3QudGV4dCArIGMudGV4dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBkZWZhdWx0IGtleSBmb3IgbmVzdGVkIGFycmF5IGNoaWxkcmVuIChsaWtlbHkgZ2VuZXJhdGVkIGJ5IHYtZm9yKVxuICAgICAgICBpZiAoaXNUcnVlKGNoaWxkcmVuLl9pc1ZMaXN0KSAmJlxuICAgICAgICAgIGlzRGVmKGMudGFnKSAmJlxuICAgICAgICAgIGlzVW5kZWYoYy5rZXkpICYmXG4gICAgICAgICAgaXNEZWYobmVzdGVkSW5kZXgpKSB7XG4gICAgICAgICAgYy5rZXkgPSBcIl9fdmxpc3RcIiArIG5lc3RlZEluZGV4ICsgXCJfXCIgKyBpICsgXCJfX1wiO1xuICAgICAgICB9XG4gICAgICAgIHJlcy5wdXNoKGMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0UHJvdmlkZSAodm0pIHtcbiAgdmFyIHByb3ZpZGUgPSB2bS4kb3B0aW9ucy5wcm92aWRlO1xuICBpZiAocHJvdmlkZSkge1xuICAgIHZtLl9wcm92aWRlZCA9IHR5cGVvZiBwcm92aWRlID09PSAnZnVuY3Rpb24nXG4gICAgICA/IHByb3ZpZGUuY2FsbCh2bSlcbiAgICAgIDogcHJvdmlkZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0SW5qZWN0aW9ucyAodm0pIHtcbiAgdmFyIHJlc3VsdCA9IHJlc29sdmVJbmplY3Qodm0uJG9wdGlvbnMuaW5qZWN0LCB2bSk7XG4gIGlmIChyZXN1bHQpIHtcbiAgICB0b2dnbGVPYnNlcnZpbmcoZmFsc2UpO1xuICAgIE9iamVjdC5rZXlzKHJlc3VsdCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgZGVmaW5lUmVhY3RpdmUkJDEodm0sIGtleSwgcmVzdWx0W2tleV0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgXCJBdm9pZCBtdXRhdGluZyBhbiBpbmplY3RlZCB2YWx1ZSBkaXJlY3RseSBzaW5jZSB0aGUgY2hhbmdlcyB3aWxsIGJlIFwiICtcbiAgICAgICAgICAgIFwib3ZlcndyaXR0ZW4gd2hlbmV2ZXIgdGhlIHByb3ZpZGVkIGNvbXBvbmVudCByZS1yZW5kZXJzLiBcIiArXG4gICAgICAgICAgICBcImluamVjdGlvbiBiZWluZyBtdXRhdGVkOiBcXFwiXCIgKyBrZXkgKyBcIlxcXCJcIixcbiAgICAgICAgICAgIHZtXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWZpbmVSZWFjdGl2ZSQkMSh2bSwga2V5LCByZXN1bHRba2V5XSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdG9nZ2xlT2JzZXJ2aW5nKHRydWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVJbmplY3QgKGluamVjdCwgdm0pIHtcbiAgaWYgKGluamVjdCkge1xuICAgIC8vIGluamVjdCBpcyA6YW55IGJlY2F1c2UgZmxvdyBpcyBub3Qgc21hcnQgZW5vdWdoIHRvIGZpZ3VyZSBvdXQgY2FjaGVkXG4gICAgdmFyIHJlc3VsdCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdmFyIGtleXMgPSBoYXNTeW1ib2xcbiAgICAgID8gUmVmbGVjdC5vd25LZXlzKGluamVjdClcbiAgICAgIDogT2JqZWN0LmtleXMoaW5qZWN0KTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAvLyAjNjU3NCBpbiBjYXNlIHRoZSBpbmplY3Qgb2JqZWN0IGlzIG9ic2VydmVkLi4uXG4gICAgICBpZiAoa2V5ID09PSAnX19vYl9fJykgeyBjb250aW51ZSB9XG4gICAgICB2YXIgcHJvdmlkZUtleSA9IGluamVjdFtrZXldLmZyb207XG4gICAgICB2YXIgc291cmNlID0gdm07XG4gICAgICB3aGlsZSAoc291cmNlKSB7XG4gICAgICAgIGlmIChzb3VyY2UuX3Byb3ZpZGVkICYmIGhhc093bihzb3VyY2UuX3Byb3ZpZGVkLCBwcm92aWRlS2V5KSkge1xuICAgICAgICAgIHJlc3VsdFtrZXldID0gc291cmNlLl9wcm92aWRlZFtwcm92aWRlS2V5XTtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIHNvdXJjZSA9IHNvdXJjZS4kcGFyZW50O1xuICAgICAgfVxuICAgICAgaWYgKCFzb3VyY2UpIHtcbiAgICAgICAgaWYgKCdkZWZhdWx0JyBpbiBpbmplY3Rba2V5XSkge1xuICAgICAgICAgIHZhciBwcm92aWRlRGVmYXVsdCA9IGluamVjdFtrZXldLmRlZmF1bHQ7XG4gICAgICAgICAgcmVzdWx0W2tleV0gPSB0eXBlb2YgcHJvdmlkZURlZmF1bHQgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgID8gcHJvdmlkZURlZmF1bHQuY2FsbCh2bSlcbiAgICAgICAgICAgIDogcHJvdmlkZURlZmF1bHQ7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHdhcm4oKFwiSW5qZWN0aW9uIFxcXCJcIiArIGtleSArIFwiXFxcIiBub3QgZm91bmRcIiksIHZtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuLyogICovXG5cblxuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciByZXNvbHZpbmcgcmF3IGNoaWxkcmVuIFZOb2RlcyBpbnRvIGEgc2xvdCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIHJlc29sdmVTbG90cyAoXG4gIGNoaWxkcmVuLFxuICBjb250ZXh0XG4pIHtcbiAgaWYgKCFjaGlsZHJlbiB8fCAhY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHt9XG4gIH1cbiAgdmFyIHNsb3RzID0ge307XG4gIGZvciAodmFyIGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgdmFyIGRhdGEgPSBjaGlsZC5kYXRhO1xuICAgIC8vIHJlbW92ZSBzbG90IGF0dHJpYnV0ZSBpZiB0aGUgbm9kZSBpcyByZXNvbHZlZCBhcyBhIFZ1ZSBzbG90IG5vZGVcbiAgICBpZiAoZGF0YSAmJiBkYXRhLmF0dHJzICYmIGRhdGEuYXR0cnMuc2xvdCkge1xuICAgICAgZGVsZXRlIGRhdGEuYXR0cnMuc2xvdDtcbiAgICB9XG4gICAgLy8gbmFtZWQgc2xvdHMgc2hvdWxkIG9ubHkgYmUgcmVzcGVjdGVkIGlmIHRoZSB2bm9kZSB3YXMgcmVuZGVyZWQgaW4gdGhlXG4gICAgLy8gc2FtZSBjb250ZXh0LlxuICAgIGlmICgoY2hpbGQuY29udGV4dCA9PT0gY29udGV4dCB8fCBjaGlsZC5mbkNvbnRleHQgPT09IGNvbnRleHQpICYmXG4gICAgICBkYXRhICYmIGRhdGEuc2xvdCAhPSBudWxsXG4gICAgKSB7XG4gICAgICB2YXIgbmFtZSA9IGRhdGEuc2xvdDtcbiAgICAgIHZhciBzbG90ID0gKHNsb3RzW25hbWVdIHx8IChzbG90c1tuYW1lXSA9IFtdKSk7XG4gICAgICBpZiAoY2hpbGQudGFnID09PSAndGVtcGxhdGUnKSB7XG4gICAgICAgIHNsb3QucHVzaC5hcHBseShzbG90LCBjaGlsZC5jaGlsZHJlbiB8fCBbXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzbG90LnB1c2goY2hpbGQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBmaXhlZCBieSB4eHh4eHgg5Li05pe2IGhhY2sg5o6JIHVuaS1hcHAg5Lit55qE5byC5q2lIG5hbWUgc2xvdCBwYWdlXG4gICAgICBpZihjaGlsZC5hc3luY01ldGEgJiYgY2hpbGQuYXN5bmNNZXRhLmRhdGEgJiYgY2hpbGQuYXN5bmNNZXRhLmRhdGEuc2xvdCA9PT0gJ3BhZ2UnKXtcbiAgICAgICAgKHNsb3RzWydwYWdlJ10gfHwgKHNsb3RzWydwYWdlJ10gPSBbXSkpLnB1c2goY2hpbGQpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIChzbG90cy5kZWZhdWx0IHx8IChzbG90cy5kZWZhdWx0ID0gW10pKS5wdXNoKGNoaWxkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gaWdub3JlIHNsb3RzIHRoYXQgY29udGFpbnMgb25seSB3aGl0ZXNwYWNlXG4gIGZvciAodmFyIG5hbWUkMSBpbiBzbG90cykge1xuICAgIGlmIChzbG90c1tuYW1lJDFdLmV2ZXJ5KGlzV2hpdGVzcGFjZSkpIHtcbiAgICAgIGRlbGV0ZSBzbG90c1tuYW1lJDFdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc2xvdHNcbn1cblxuZnVuY3Rpb24gaXNXaGl0ZXNwYWNlIChub2RlKSB7XG4gIHJldHVybiAobm9kZS5pc0NvbW1lbnQgJiYgIW5vZGUuYXN5bmNGYWN0b3J5KSB8fCBub2RlLnRleHQgPT09ICcgJ1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gbm9ybWFsaXplU2NvcGVkU2xvdHMgKFxuICBzbG90cyxcbiAgbm9ybWFsU2xvdHMsXG4gIHByZXZTbG90c1xuKSB7XG4gIHZhciByZXM7XG4gIHZhciBoYXNOb3JtYWxTbG90cyA9IE9iamVjdC5rZXlzKG5vcm1hbFNsb3RzKS5sZW5ndGggPiAwO1xuICB2YXIgaXNTdGFibGUgPSBzbG90cyA/ICEhc2xvdHMuJHN0YWJsZSA6ICFoYXNOb3JtYWxTbG90cztcbiAgdmFyIGtleSA9IHNsb3RzICYmIHNsb3RzLiRrZXk7XG4gIGlmICghc2xvdHMpIHtcbiAgICByZXMgPSB7fTtcbiAgfSBlbHNlIGlmIChzbG90cy5fbm9ybWFsaXplZCkge1xuICAgIC8vIGZhc3QgcGF0aCAxOiBjaGlsZCBjb21wb25lbnQgcmUtcmVuZGVyIG9ubHksIHBhcmVudCBkaWQgbm90IGNoYW5nZVxuICAgIHJldHVybiBzbG90cy5fbm9ybWFsaXplZFxuICB9IGVsc2UgaWYgKFxuICAgIGlzU3RhYmxlICYmXG4gICAgcHJldlNsb3RzICYmXG4gICAgcHJldlNsb3RzICE9PSBlbXB0eU9iamVjdCAmJlxuICAgIGtleSA9PT0gcHJldlNsb3RzLiRrZXkgJiZcbiAgICAhaGFzTm9ybWFsU2xvdHMgJiZcbiAgICAhcHJldlNsb3RzLiRoYXNOb3JtYWxcbiAgKSB7XG4gICAgLy8gZmFzdCBwYXRoIDI6IHN0YWJsZSBzY29wZWQgc2xvdHMgdy8gbm8gbm9ybWFsIHNsb3RzIHRvIHByb3h5LFxuICAgIC8vIG9ubHkgbmVlZCB0byBub3JtYWxpemUgb25jZVxuICAgIHJldHVybiBwcmV2U2xvdHNcbiAgfSBlbHNlIHtcbiAgICByZXMgPSB7fTtcbiAgICBmb3IgKHZhciBrZXkkMSBpbiBzbG90cykge1xuICAgICAgaWYgKHNsb3RzW2tleSQxXSAmJiBrZXkkMVswXSAhPT0gJyQnKSB7XG4gICAgICAgIHJlc1trZXkkMV0gPSBub3JtYWxpemVTY29wZWRTbG90KG5vcm1hbFNsb3RzLCBrZXkkMSwgc2xvdHNba2V5JDFdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gZXhwb3NlIG5vcm1hbCBzbG90cyBvbiBzY29wZWRTbG90c1xuICBmb3IgKHZhciBrZXkkMiBpbiBub3JtYWxTbG90cykge1xuICAgIGlmICghKGtleSQyIGluIHJlcykpIHtcbiAgICAgIHJlc1trZXkkMl0gPSBwcm94eU5vcm1hbFNsb3Qobm9ybWFsU2xvdHMsIGtleSQyKTtcbiAgICB9XG4gIH1cbiAgLy8gYXZvcmlheiBzZWVtcyB0byBtb2NrIGEgbm9uLWV4dGVuc2libGUgJHNjb3BlZFNsb3RzIG9iamVjdFxuICAvLyBhbmQgd2hlbiB0aGF0IGlzIHBhc3NlZCBkb3duIHRoaXMgd291bGQgY2F1c2UgYW4gZXJyb3JcbiAgaWYgKHNsb3RzICYmIE9iamVjdC5pc0V4dGVuc2libGUoc2xvdHMpKSB7XG4gICAgKHNsb3RzKS5fbm9ybWFsaXplZCA9IHJlcztcbiAgfVxuICBkZWYocmVzLCAnJHN0YWJsZScsIGlzU3RhYmxlKTtcbiAgZGVmKHJlcywgJyRrZXknLCBrZXkpO1xuICBkZWYocmVzLCAnJGhhc05vcm1hbCcsIGhhc05vcm1hbFNsb3RzKTtcbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVTY29wZWRTbG90KG5vcm1hbFNsb3RzLCBrZXksIGZuKSB7XG4gIHZhciBub3JtYWxpemVkID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXMgPSBhcmd1bWVudHMubGVuZ3RoID8gZm4uYXBwbHkobnVsbCwgYXJndW1lbnRzKSA6IGZuKHt9KTtcbiAgICByZXMgPSByZXMgJiYgdHlwZW9mIHJlcyA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkocmVzKVxuICAgICAgPyBbcmVzXSAvLyBzaW5nbGUgdm5vZGVcbiAgICAgIDogbm9ybWFsaXplQ2hpbGRyZW4ocmVzKTtcbiAgICByZXR1cm4gcmVzICYmIChcbiAgICAgIHJlcy5sZW5ndGggPT09IDAgfHxcbiAgICAgIChyZXMubGVuZ3RoID09PSAxICYmIHJlc1swXS5pc0NvbW1lbnQpIC8vICM5NjU4XG4gICAgKSA/IHVuZGVmaW5lZFxuICAgICAgOiByZXNcbiAgfTtcbiAgLy8gdGhpcyBpcyBhIHNsb3QgdXNpbmcgdGhlIG5ldyB2LXNsb3Qgc3ludGF4IHdpdGhvdXQgc2NvcGUuIGFsdGhvdWdoIGl0IGlzXG4gIC8vIGNvbXBpbGVkIGFzIGEgc2NvcGVkIHNsb3QsIHJlbmRlciBmbiB1c2VycyB3b3VsZCBleHBlY3QgaXQgdG8gYmUgcHJlc2VudFxuICAvLyBvbiB0aGlzLiRzbG90cyBiZWNhdXNlIHRoZSB1c2FnZSBpcyBzZW1hbnRpY2FsbHkgYSBub3JtYWwgc2xvdC5cbiAgaWYgKGZuLnByb3h5KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5vcm1hbFNsb3RzLCBrZXksIHtcbiAgICAgIGdldDogbm9ybWFsaXplZCxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gbm9ybWFsaXplZFxufVxuXG5mdW5jdGlvbiBwcm94eU5vcm1hbFNsb3Qoc2xvdHMsIGtleSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gc2xvdHNba2V5XTsgfVxufVxuXG4vKiAgKi9cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3IgcmVuZGVyaW5nIHYtZm9yIGxpc3RzLlxuICovXG5mdW5jdGlvbiByZW5kZXJMaXN0IChcbiAgdmFsLFxuICByZW5kZXJcbikge1xuICB2YXIgcmV0LCBpLCBsLCBrZXlzLCBrZXk7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbCkgfHwgdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXQgPSBuZXcgQXJyYXkodmFsLmxlbmd0aCk7XG4gICAgZm9yIChpID0gMCwgbCA9IHZhbC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHJldFtpXSA9IHJlbmRlcih2YWxbaV0sIGksIGksIGkpOyAvLyBmaXhlZCBieSB4eHh4eHhcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICByZXQgPSBuZXcgQXJyYXkodmFsKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgdmFsOyBpKyspIHtcbiAgICAgIHJldFtpXSA9IHJlbmRlcihpICsgMSwgaSwgaSwgaSk7IC8vIGZpeGVkIGJ5IHh4eHh4eFxuICAgIH1cbiAgfSBlbHNlIGlmIChpc09iamVjdCh2YWwpKSB7XG4gICAgaWYgKGhhc1N5bWJvbCAmJiB2YWxbU3ltYm9sLml0ZXJhdG9yXSkge1xuICAgICAgcmV0ID0gW107XG4gICAgICB2YXIgaXRlcmF0b3IgPSB2YWxbU3ltYm9sLml0ZXJhdG9yXSgpO1xuICAgICAgdmFyIHJlc3VsdCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgIHdoaWxlICghcmVzdWx0LmRvbmUpIHtcbiAgICAgICAgcmV0LnB1c2gocmVuZGVyKHJlc3VsdC52YWx1ZSwgcmV0Lmxlbmd0aCwgaSwgaSsrKSk7IC8vIGZpeGVkIGJ5IHh4eHh4eFxuICAgICAgICByZXN1bHQgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGtleXMgPSBPYmplY3Qua2V5cyh2YWwpO1xuICAgICAgcmV0ID0gbmV3IEFycmF5KGtleXMubGVuZ3RoKTtcbiAgICAgIGZvciAoaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICByZXRbaV0gPSByZW5kZXIodmFsW2tleV0sIGtleSwgaSwgaSk7IC8vIGZpeGVkIGJ5IHh4eHh4eFxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoIWlzRGVmKHJldCkpIHtcbiAgICByZXQgPSBbXTtcbiAgfVxuICAocmV0KS5faXNWTGlzdCA9IHRydWU7XG4gIHJldHVybiByZXRcbn1cblxuLyogICovXG5cbi8qKlxuICogUnVudGltZSBoZWxwZXIgZm9yIHJlbmRlcmluZyA8c2xvdD5cbiAqL1xuZnVuY3Rpb24gcmVuZGVyU2xvdCAoXG4gIG5hbWUsXG4gIGZhbGxiYWNrLFxuICBwcm9wcyxcbiAgYmluZE9iamVjdFxuKSB7XG4gIHZhciBzY29wZWRTbG90Rm4gPSB0aGlzLiRzY29wZWRTbG90c1tuYW1lXTtcbiAgdmFyIG5vZGVzO1xuICBpZiAoc2NvcGVkU2xvdEZuKSB7IC8vIHNjb3BlZCBzbG90XG4gICAgcHJvcHMgPSBwcm9wcyB8fCB7fTtcbiAgICBpZiAoYmluZE9iamVjdCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIWlzT2JqZWN0KGJpbmRPYmplY3QpKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgJ3Nsb3Qgdi1iaW5kIHdpdGhvdXQgYXJndW1lbnQgZXhwZWN0cyBhbiBPYmplY3QnLFxuICAgICAgICAgIHRoaXNcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHByb3BzID0gZXh0ZW5kKGV4dGVuZCh7fSwgYmluZE9iamVjdCksIHByb3BzKTtcbiAgICB9XG4gICAgLy8gZml4ZWQgYnkgeHh4eHh4IGFwcC1wbHVzIHNjb3BlZFNsb3RcbiAgICBub2RlcyA9IHNjb3BlZFNsb3RGbihwcm9wcywgdGhpcywgcHJvcHMuX2kpIHx8IGZhbGxiYWNrO1xuICB9IGVsc2Uge1xuICAgIG5vZGVzID0gdGhpcy4kc2xvdHNbbmFtZV0gfHwgZmFsbGJhY2s7XG4gIH1cblxuICB2YXIgdGFyZ2V0ID0gcHJvcHMgJiYgcHJvcHMuc2xvdDtcbiAgaWYgKHRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScsIHsgc2xvdDogdGFyZ2V0IH0sIG5vZGVzKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBub2Rlc1xuICB9XG59XG5cbi8qICAqL1xuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciByZXNvbHZpbmcgZmlsdGVyc1xuICovXG5mdW5jdGlvbiByZXNvbHZlRmlsdGVyIChpZCkge1xuICByZXR1cm4gcmVzb2x2ZUFzc2V0KHRoaXMuJG9wdGlvbnMsICdmaWx0ZXJzJywgaWQsIHRydWUpIHx8IGlkZW50aXR5XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpc0tleU5vdE1hdGNoIChleHBlY3QsIGFjdHVhbCkge1xuICBpZiAoQXJyYXkuaXNBcnJheShleHBlY3QpKSB7XG4gICAgcmV0dXJuIGV4cGVjdC5pbmRleE9mKGFjdHVhbCkgPT09IC0xXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGV4cGVjdCAhPT0gYWN0dWFsXG4gIH1cbn1cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3IgY2hlY2tpbmcga2V5Q29kZXMgZnJvbSBjb25maWcuXG4gKiBleHBvc2VkIGFzIFZ1ZS5wcm90b3R5cGUuX2tcbiAqIHBhc3NpbmcgaW4gZXZlbnRLZXlOYW1lIGFzIGxhc3QgYXJndW1lbnQgc2VwYXJhdGVseSBmb3IgYmFja3dhcmRzIGNvbXBhdFxuICovXG5mdW5jdGlvbiBjaGVja0tleUNvZGVzIChcbiAgZXZlbnRLZXlDb2RlLFxuICBrZXksXG4gIGJ1aWx0SW5LZXlDb2RlLFxuICBldmVudEtleU5hbWUsXG4gIGJ1aWx0SW5LZXlOYW1lXG4pIHtcbiAgdmFyIG1hcHBlZEtleUNvZGUgPSBjb25maWcua2V5Q29kZXNba2V5XSB8fCBidWlsdEluS2V5Q29kZTtcbiAgaWYgKGJ1aWx0SW5LZXlOYW1lICYmIGV2ZW50S2V5TmFtZSAmJiAhY29uZmlnLmtleUNvZGVzW2tleV0pIHtcbiAgICByZXR1cm4gaXNLZXlOb3RNYXRjaChidWlsdEluS2V5TmFtZSwgZXZlbnRLZXlOYW1lKVxuICB9IGVsc2UgaWYgKG1hcHBlZEtleUNvZGUpIHtcbiAgICByZXR1cm4gaXNLZXlOb3RNYXRjaChtYXBwZWRLZXlDb2RlLCBldmVudEtleUNvZGUpXG4gIH0gZWxzZSBpZiAoZXZlbnRLZXlOYW1lKSB7XG4gICAgcmV0dXJuIGh5cGhlbmF0ZShldmVudEtleU5hbWUpICE9PSBrZXlcbiAgfVxufVxuXG4vKiAgKi9cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3IgbWVyZ2luZyB2LWJpbmQ9XCJvYmplY3RcIiBpbnRvIGEgVk5vZGUncyBkYXRhLlxuICovXG5mdW5jdGlvbiBiaW5kT2JqZWN0UHJvcHMgKFxuICBkYXRhLFxuICB0YWcsXG4gIHZhbHVlLFxuICBhc1Byb3AsXG4gIGlzU3luY1xuKSB7XG4gIGlmICh2YWx1ZSkge1xuICAgIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgICd2LWJpbmQgd2l0aG91dCBhcmd1bWVudCBleHBlY3RzIGFuIE9iamVjdCBvciBBcnJheSB2YWx1ZScsXG4gICAgICAgIHRoaXNcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9IHRvT2JqZWN0KHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHZhciBoYXNoO1xuICAgICAgdmFyIGxvb3AgPSBmdW5jdGlvbiAoIGtleSApIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGtleSA9PT0gJ2NsYXNzJyB8fFxuICAgICAgICAgIGtleSA9PT0gJ3N0eWxlJyB8fFxuICAgICAgICAgIGlzUmVzZXJ2ZWRBdHRyaWJ1dGUoa2V5KVxuICAgICAgICApIHtcbiAgICAgICAgICBoYXNoID0gZGF0YTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgdHlwZSA9IGRhdGEuYXR0cnMgJiYgZGF0YS5hdHRycy50eXBlO1xuICAgICAgICAgIGhhc2ggPSBhc1Byb3AgfHwgY29uZmlnLm11c3RVc2VQcm9wKHRhZywgdHlwZSwga2V5KVxuICAgICAgICAgICAgPyBkYXRhLmRvbVByb3BzIHx8IChkYXRhLmRvbVByb3BzID0ge30pXG4gICAgICAgICAgICA6IGRhdGEuYXR0cnMgfHwgKGRhdGEuYXR0cnMgPSB7fSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNhbWVsaXplZEtleSA9IGNhbWVsaXplKGtleSk7XG4gICAgICAgIHZhciBoeXBoZW5hdGVkS2V5ID0gaHlwaGVuYXRlKGtleSk7XG4gICAgICAgIGlmICghKGNhbWVsaXplZEtleSBpbiBoYXNoKSAmJiAhKGh5cGhlbmF0ZWRLZXkgaW4gaGFzaCkpIHtcbiAgICAgICAgICBoYXNoW2tleV0gPSB2YWx1ZVtrZXldO1xuXG4gICAgICAgICAgaWYgKGlzU3luYykge1xuICAgICAgICAgICAgdmFyIG9uID0gZGF0YS5vbiB8fCAoZGF0YS5vbiA9IHt9KTtcbiAgICAgICAgICAgIG9uWyhcInVwZGF0ZTpcIiArIGtleSldID0gZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICB2YWx1ZVtrZXldID0gJGV2ZW50O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZSkgbG9vcCgga2V5ICk7XG4gICAgfVxuICB9XG4gIHJldHVybiBkYXRhXG59XG5cbi8qICAqL1xuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciByZW5kZXJpbmcgc3RhdGljIHRyZWVzLlxuICovXG5mdW5jdGlvbiByZW5kZXJTdGF0aWMgKFxuICBpbmRleCxcbiAgaXNJbkZvclxuKSB7XG4gIHZhciBjYWNoZWQgPSB0aGlzLl9zdGF0aWNUcmVlcyB8fCAodGhpcy5fc3RhdGljVHJlZXMgPSBbXSk7XG4gIHZhciB0cmVlID0gY2FjaGVkW2luZGV4XTtcbiAgLy8gaWYgaGFzIGFscmVhZHktcmVuZGVyZWQgc3RhdGljIHRyZWUgYW5kIG5vdCBpbnNpZGUgdi1mb3IsXG4gIC8vIHdlIGNhbiByZXVzZSB0aGUgc2FtZSB0cmVlLlxuICBpZiAodHJlZSAmJiAhaXNJbkZvcikge1xuICAgIHJldHVybiB0cmVlXG4gIH1cbiAgLy8gb3RoZXJ3aXNlLCByZW5kZXIgYSBmcmVzaCB0cmVlLlxuICB0cmVlID0gY2FjaGVkW2luZGV4XSA9IHRoaXMuJG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zW2luZGV4XS5jYWxsKFxuICAgIHRoaXMuX3JlbmRlclByb3h5LFxuICAgIG51bGwsXG4gICAgdGhpcyAvLyBmb3IgcmVuZGVyIGZucyBnZW5lcmF0ZWQgZm9yIGZ1bmN0aW9uYWwgY29tcG9uZW50IHRlbXBsYXRlc1xuICApO1xuICBtYXJrU3RhdGljKHRyZWUsIChcIl9fc3RhdGljX19cIiArIGluZGV4KSwgZmFsc2UpO1xuICByZXR1cm4gdHJlZVxufVxuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciB2LW9uY2UuXG4gKiBFZmZlY3RpdmVseSBpdCBtZWFucyBtYXJraW5nIHRoZSBub2RlIGFzIHN0YXRpYyB3aXRoIGEgdW5pcXVlIGtleS5cbiAqL1xuZnVuY3Rpb24gbWFya09uY2UgKFxuICB0cmVlLFxuICBpbmRleCxcbiAga2V5XG4pIHtcbiAgbWFya1N0YXRpYyh0cmVlLCAoXCJfX29uY2VfX1wiICsgaW5kZXggKyAoa2V5ID8gKFwiX1wiICsga2V5KSA6IFwiXCIpKSwgdHJ1ZSk7XG4gIHJldHVybiB0cmVlXG59XG5cbmZ1bmN0aW9uIG1hcmtTdGF0aWMgKFxuICB0cmVlLFxuICBrZXksXG4gIGlzT25jZVxuKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHRyZWUpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0cmVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodHJlZVtpXSAmJiB0eXBlb2YgdHJlZVtpXSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgbWFya1N0YXRpY05vZGUodHJlZVtpXSwgKGtleSArIFwiX1wiICsgaSksIGlzT25jZSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG1hcmtTdGF0aWNOb2RlKHRyZWUsIGtleSwgaXNPbmNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXJrU3RhdGljTm9kZSAobm9kZSwga2V5LCBpc09uY2UpIHtcbiAgbm9kZS5pc1N0YXRpYyA9IHRydWU7XG4gIG5vZGUua2V5ID0ga2V5O1xuICBub2RlLmlzT25jZSA9IGlzT25jZTtcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGJpbmRPYmplY3RMaXN0ZW5lcnMgKGRhdGEsIHZhbHVlKSB7XG4gIGlmICh2YWx1ZSkge1xuICAgIGlmICghaXNQbGFpbk9iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgJ3Ytb24gd2l0aG91dCBhcmd1bWVudCBleHBlY3RzIGFuIE9iamVjdCB2YWx1ZScsXG4gICAgICAgIHRoaXNcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBvbiA9IGRhdGEub24gPSBkYXRhLm9uID8gZXh0ZW5kKHt9LCBkYXRhLm9uKSA6IHt9O1xuICAgICAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgICAgIHZhciBleGlzdGluZyA9IG9uW2tleV07XG4gICAgICAgIHZhciBvdXJzID0gdmFsdWVba2V5XTtcbiAgICAgICAgb25ba2V5XSA9IGV4aXN0aW5nID8gW10uY29uY2F0KGV4aXN0aW5nLCBvdXJzKSA6IG91cnM7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBkYXRhXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiByZXNvbHZlU2NvcGVkU2xvdHMgKFxuICBmbnMsIC8vIHNlZSBmbG93L3Zub2RlXG4gIHJlcyxcbiAgLy8gdGhlIGZvbGxvd2luZyBhcmUgYWRkZWQgaW4gMi42XG4gIGhhc0R5bmFtaWNLZXlzLFxuICBjb250ZW50SGFzaEtleVxuKSB7XG4gIHJlcyA9IHJlcyB8fCB7ICRzdGFibGU6ICFoYXNEeW5hbWljS2V5cyB9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGZucy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzbG90ID0gZm5zW2ldO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHNsb3QpKSB7XG4gICAgICByZXNvbHZlU2NvcGVkU2xvdHMoc2xvdCwgcmVzLCBoYXNEeW5hbWljS2V5cyk7XG4gICAgfSBlbHNlIGlmIChzbG90KSB7XG4gICAgICAvLyBtYXJrZXIgZm9yIHJldmVyc2UgcHJveHlpbmcgdi1zbG90IHdpdGhvdXQgc2NvcGUgb24gdGhpcy4kc2xvdHNcbiAgICAgIGlmIChzbG90LnByb3h5KSB7XG4gICAgICAgIHNsb3QuZm4ucHJveHkgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmVzW3Nsb3Qua2V5XSA9IHNsb3QuZm47XG4gICAgfVxuICB9XG4gIGlmIChjb250ZW50SGFzaEtleSkge1xuICAgIChyZXMpLiRrZXkgPSBjb250ZW50SGFzaEtleTtcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBiaW5kRHluYW1pY0tleXMgKGJhc2VPYmosIHZhbHVlcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkgKz0gMikge1xuICAgIHZhciBrZXkgPSB2YWx1ZXNbaV07XG4gICAgaWYgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnICYmIGtleSkge1xuICAgICAgYmFzZU9ialt2YWx1ZXNbaV1dID0gdmFsdWVzW2kgKyAxXTtcbiAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYga2V5ICE9PSAnJyAmJiBrZXkgIT09IG51bGwpIHtcbiAgICAgIC8vIG51bGwgaXMgYSBzcGVjaWFsIHZhbHVlIGZvciBleHBsaWNpdGx5IHJlbW92aW5nIGEgYmluZGluZ1xuICAgICAgd2FybihcbiAgICAgICAgKFwiSW52YWxpZCB2YWx1ZSBmb3IgZHluYW1pYyBkaXJlY3RpdmUgYXJndW1lbnQgKGV4cGVjdGVkIHN0cmluZyBvciBudWxsKTogXCIgKyBrZXkpLFxuICAgICAgICB0aGlzXG4gICAgICApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYmFzZU9ialxufVxuXG4vLyBoZWxwZXIgdG8gZHluYW1pY2FsbHkgYXBwZW5kIG1vZGlmaWVyIHJ1bnRpbWUgbWFya2VycyB0byBldmVudCBuYW1lcy5cbi8vIGVuc3VyZSBvbmx5IGFwcGVuZCB3aGVuIHZhbHVlIGlzIGFscmVhZHkgc3RyaW5nLCBvdGhlcndpc2UgaXQgd2lsbCBiZSBjYXN0XG4vLyB0byBzdHJpbmcgYW5kIGNhdXNlIHRoZSB0eXBlIGNoZWNrIHRvIG1pc3MuXG5mdW5jdGlvbiBwcmVwZW5kTW9kaWZpZXIgKHZhbHVlLCBzeW1ib2wpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyBzeW1ib2wgKyB2YWx1ZSA6IHZhbHVlXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbnN0YWxsUmVuZGVySGVscGVycyAodGFyZ2V0KSB7XG4gIHRhcmdldC5fbyA9IG1hcmtPbmNlO1xuICB0YXJnZXQuX24gPSB0b051bWJlcjtcbiAgdGFyZ2V0Ll9zID0gdG9TdHJpbmc7XG4gIHRhcmdldC5fbCA9IHJlbmRlckxpc3Q7XG4gIHRhcmdldC5fdCA9IHJlbmRlclNsb3Q7XG4gIHRhcmdldC5fcSA9IGxvb3NlRXF1YWw7XG4gIHRhcmdldC5faSA9IGxvb3NlSW5kZXhPZjtcbiAgdGFyZ2V0Ll9tID0gcmVuZGVyU3RhdGljO1xuICB0YXJnZXQuX2YgPSByZXNvbHZlRmlsdGVyO1xuICB0YXJnZXQuX2sgPSBjaGVja0tleUNvZGVzO1xuICB0YXJnZXQuX2IgPSBiaW5kT2JqZWN0UHJvcHM7XG4gIHRhcmdldC5fdiA9IGNyZWF0ZVRleHRWTm9kZTtcbiAgdGFyZ2V0Ll9lID0gY3JlYXRlRW1wdHlWTm9kZTtcbiAgdGFyZ2V0Ll91ID0gcmVzb2x2ZVNjb3BlZFNsb3RzO1xuICB0YXJnZXQuX2cgPSBiaW5kT2JqZWN0TGlzdGVuZXJzO1xuICB0YXJnZXQuX2QgPSBiaW5kRHluYW1pY0tleXM7XG4gIHRhcmdldC5fcCA9IHByZXBlbmRNb2RpZmllcjtcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIEZ1bmN0aW9uYWxSZW5kZXJDb250ZXh0IChcbiAgZGF0YSxcbiAgcHJvcHMsXG4gIGNoaWxkcmVuLFxuICBwYXJlbnQsXG4gIEN0b3Jcbikge1xuICB2YXIgdGhpcyQxID0gdGhpcztcblxuICB2YXIgb3B0aW9ucyA9IEN0b3Iub3B0aW9ucztcbiAgLy8gZW5zdXJlIHRoZSBjcmVhdGVFbGVtZW50IGZ1bmN0aW9uIGluIGZ1bmN0aW9uYWwgY29tcG9uZW50c1xuICAvLyBnZXRzIGEgdW5pcXVlIGNvbnRleHQgLSB0aGlzIGlzIG5lY2Vzc2FyeSBmb3IgY29ycmVjdCBuYW1lZCBzbG90IGNoZWNrXG4gIHZhciBjb250ZXh0Vm07XG4gIGlmIChoYXNPd24ocGFyZW50LCAnX3VpZCcpKSB7XG4gICAgY29udGV4dFZtID0gT2JqZWN0LmNyZWF0ZShwYXJlbnQpO1xuICAgIC8vICRmbG93LWRpc2FibGUtbGluZVxuICAgIGNvbnRleHRWbS5fb3JpZ2luYWwgPSBwYXJlbnQ7XG4gIH0gZWxzZSB7XG4gICAgLy8gdGhlIGNvbnRleHQgdm0gcGFzc2VkIGluIGlzIGEgZnVuY3Rpb25hbCBjb250ZXh0IGFzIHdlbGwuXG4gICAgLy8gaW4gdGhpcyBjYXNlIHdlIHdhbnQgdG8gbWFrZSBzdXJlIHdlIGFyZSBhYmxlIHRvIGdldCBhIGhvbGQgdG8gdGhlXG4gICAgLy8gcmVhbCBjb250ZXh0IGluc3RhbmNlLlxuICAgIGNvbnRleHRWbSA9IHBhcmVudDtcbiAgICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgICBwYXJlbnQgPSBwYXJlbnQuX29yaWdpbmFsO1xuICB9XG4gIHZhciBpc0NvbXBpbGVkID0gaXNUcnVlKG9wdGlvbnMuX2NvbXBpbGVkKTtcbiAgdmFyIG5lZWROb3JtYWxpemF0aW9uID0gIWlzQ29tcGlsZWQ7XG5cbiAgdGhpcy5kYXRhID0gZGF0YTtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICB0aGlzLmxpc3RlbmVycyA9IGRhdGEub24gfHwgZW1wdHlPYmplY3Q7XG4gIHRoaXMuaW5qZWN0aW9ucyA9IHJlc29sdmVJbmplY3Qob3B0aW9ucy5pbmplY3QsIHBhcmVudCk7XG4gIHRoaXMuc2xvdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzJDEuJHNsb3RzKSB7XG4gICAgICBub3JtYWxpemVTY29wZWRTbG90cyhcbiAgICAgICAgZGF0YS5zY29wZWRTbG90cyxcbiAgICAgICAgdGhpcyQxLiRzbG90cyA9IHJlc29sdmVTbG90cyhjaGlsZHJlbiwgcGFyZW50KVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMkMS4kc2xvdHNcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3Njb3BlZFNsb3RzJywgKHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0ICgpIHtcbiAgICAgIHJldHVybiBub3JtYWxpemVTY29wZWRTbG90cyhkYXRhLnNjb3BlZFNsb3RzLCB0aGlzLnNsb3RzKCkpXG4gICAgfVxuICB9KSk7XG5cbiAgLy8gc3VwcG9ydCBmb3IgY29tcGlsZWQgZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoaXNDb21waWxlZCkge1xuICAgIC8vIGV4cG9zaW5nICRvcHRpb25zIGZvciByZW5kZXJTdGF0aWMoKVxuICAgIHRoaXMuJG9wdGlvbnMgPSBvcHRpb25zO1xuICAgIC8vIHByZS1yZXNvbHZlIHNsb3RzIGZvciByZW5kZXJTbG90KClcbiAgICB0aGlzLiRzbG90cyA9IHRoaXMuc2xvdHMoKTtcbiAgICB0aGlzLiRzY29wZWRTbG90cyA9IG5vcm1hbGl6ZVNjb3BlZFNsb3RzKGRhdGEuc2NvcGVkU2xvdHMsIHRoaXMuJHNsb3RzKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLl9zY29wZUlkKSB7XG4gICAgdGhpcy5fYyA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7XG4gICAgICB2YXIgdm5vZGUgPSBjcmVhdGVFbGVtZW50KGNvbnRleHRWbSwgYSwgYiwgYywgZCwgbmVlZE5vcm1hbGl6YXRpb24pO1xuICAgICAgaWYgKHZub2RlICYmICFBcnJheS5pc0FycmF5KHZub2RlKSkge1xuICAgICAgICB2bm9kZS5mblNjb3BlSWQgPSBvcHRpb25zLl9zY29wZUlkO1xuICAgICAgICB2bm9kZS5mbkNvbnRleHQgPSBwYXJlbnQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gdm5vZGVcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHRoaXMuX2MgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCkgeyByZXR1cm4gY3JlYXRlRWxlbWVudChjb250ZXh0Vm0sIGEsIGIsIGMsIGQsIG5lZWROb3JtYWxpemF0aW9uKTsgfTtcbiAgfVxufVxuXG5pbnN0YWxsUmVuZGVySGVscGVycyhGdW5jdGlvbmFsUmVuZGVyQ29udGV4dC5wcm90b3R5cGUpO1xuXG5mdW5jdGlvbiBjcmVhdGVGdW5jdGlvbmFsQ29tcG9uZW50IChcbiAgQ3RvcixcbiAgcHJvcHNEYXRhLFxuICBkYXRhLFxuICBjb250ZXh0Vm0sXG4gIGNoaWxkcmVuXG4pIHtcbiAgdmFyIG9wdGlvbnMgPSBDdG9yLm9wdGlvbnM7XG4gIHZhciBwcm9wcyA9IHt9O1xuICB2YXIgcHJvcE9wdGlvbnMgPSBvcHRpb25zLnByb3BzO1xuICBpZiAoaXNEZWYocHJvcE9wdGlvbnMpKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHByb3BPcHRpb25zKSB7XG4gICAgICBwcm9wc1trZXldID0gdmFsaWRhdGVQcm9wKGtleSwgcHJvcE9wdGlvbnMsIHByb3BzRGF0YSB8fCBlbXB0eU9iamVjdCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChpc0RlZihkYXRhLmF0dHJzKSkgeyBtZXJnZVByb3BzKHByb3BzLCBkYXRhLmF0dHJzKTsgfVxuICAgIGlmIChpc0RlZihkYXRhLnByb3BzKSkgeyBtZXJnZVByb3BzKHByb3BzLCBkYXRhLnByb3BzKTsgfVxuICB9XG5cbiAgdmFyIHJlbmRlckNvbnRleHQgPSBuZXcgRnVuY3Rpb25hbFJlbmRlckNvbnRleHQoXG4gICAgZGF0YSxcbiAgICBwcm9wcyxcbiAgICBjaGlsZHJlbixcbiAgICBjb250ZXh0Vm0sXG4gICAgQ3RvclxuICApO1xuXG4gIHZhciB2bm9kZSA9IG9wdGlvbnMucmVuZGVyLmNhbGwobnVsbCwgcmVuZGVyQ29udGV4dC5fYywgcmVuZGVyQ29udGV4dCk7XG5cbiAgaWYgKHZub2RlIGluc3RhbmNlb2YgVk5vZGUpIHtcbiAgICByZXR1cm4gY2xvbmVBbmRNYXJrRnVuY3Rpb25hbFJlc3VsdCh2bm9kZSwgZGF0YSwgcmVuZGVyQ29udGV4dC5wYXJlbnQsIG9wdGlvbnMsIHJlbmRlckNvbnRleHQpXG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2bm9kZSkpIHtcbiAgICB2YXIgdm5vZGVzID0gbm9ybWFsaXplQ2hpbGRyZW4odm5vZGUpIHx8IFtdO1xuICAgIHZhciByZXMgPSBuZXcgQXJyYXkodm5vZGVzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2bm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc1tpXSA9IGNsb25lQW5kTWFya0Z1bmN0aW9uYWxSZXN1bHQodm5vZGVzW2ldLCBkYXRhLCByZW5kZXJDb250ZXh0LnBhcmVudCwgb3B0aW9ucywgcmVuZGVyQ29udGV4dCk7XG4gICAgfVxuICAgIHJldHVybiByZXNcbiAgfVxufVxuXG5mdW5jdGlvbiBjbG9uZUFuZE1hcmtGdW5jdGlvbmFsUmVzdWx0ICh2bm9kZSwgZGF0YSwgY29udGV4dFZtLCBvcHRpb25zLCByZW5kZXJDb250ZXh0KSB7XG4gIC8vICM3ODE3IGNsb25lIG5vZGUgYmVmb3JlIHNldHRpbmcgZm5Db250ZXh0LCBvdGhlcndpc2UgaWYgdGhlIG5vZGUgaXMgcmV1c2VkXG4gIC8vIChlLmcuIGl0IHdhcyBmcm9tIGEgY2FjaGVkIG5vcm1hbCBzbG90KSB0aGUgZm5Db250ZXh0IGNhdXNlcyBuYW1lZCBzbG90c1xuICAvLyB0aGF0IHNob3VsZCBub3QgYmUgbWF0Y2hlZCB0byBtYXRjaC5cbiAgdmFyIGNsb25lID0gY2xvbmVWTm9kZSh2bm9kZSk7XG4gIGNsb25lLmZuQ29udGV4dCA9IGNvbnRleHRWbTtcbiAgY2xvbmUuZm5PcHRpb25zID0gb3B0aW9ucztcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAoY2xvbmUuZGV2dG9vbHNNZXRhID0gY2xvbmUuZGV2dG9vbHNNZXRhIHx8IHt9KS5yZW5kZXJDb250ZXh0ID0gcmVuZGVyQ29udGV4dDtcbiAgfVxuICBpZiAoZGF0YS5zbG90KSB7XG4gICAgKGNsb25lLmRhdGEgfHwgKGNsb25lLmRhdGEgPSB7fSkpLnNsb3QgPSBkYXRhLnNsb3Q7XG4gIH1cbiAgcmV0dXJuIGNsb25lXG59XG5cbmZ1bmN0aW9uIG1lcmdlUHJvcHMgKHRvLCBmcm9tKSB7XG4gIGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG4gICAgdG9bY2FtZWxpemUoa2V5KV0gPSBmcm9tW2tleV07XG4gIH1cbn1cblxuLyogICovXG5cbi8qICAqL1xuXG4vKiAgKi9cblxuLyogICovXG5cbi8vIGlubGluZSBob29rcyB0byBiZSBpbnZva2VkIG9uIGNvbXBvbmVudCBWTm9kZXMgZHVyaW5nIHBhdGNoXG52YXIgY29tcG9uZW50Vk5vZGVIb29rcyA9IHtcbiAgaW5pdDogZnVuY3Rpb24gaW5pdCAodm5vZGUsIGh5ZHJhdGluZykge1xuICAgIGlmIChcbiAgICAgIHZub2RlLmNvbXBvbmVudEluc3RhbmNlICYmXG4gICAgICAhdm5vZGUuY29tcG9uZW50SW5zdGFuY2UuX2lzRGVzdHJveWVkICYmXG4gICAgICB2bm9kZS5kYXRhLmtlZXBBbGl2ZVxuICAgICkge1xuICAgICAgLy8ga2VwdC1hbGl2ZSBjb21wb25lbnRzLCB0cmVhdCBhcyBhIHBhdGNoXG4gICAgICB2YXIgbW91bnRlZE5vZGUgPSB2bm9kZTsgLy8gd29yayBhcm91bmQgZmxvd1xuICAgICAgY29tcG9uZW50Vk5vZGVIb29rcy5wcmVwYXRjaChtb3VudGVkTm9kZSwgbW91bnRlZE5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgY2hpbGQgPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZSA9IGNyZWF0ZUNvbXBvbmVudEluc3RhbmNlRm9yVm5vZGUoXG4gICAgICAgIHZub2RlLFxuICAgICAgICBhY3RpdmVJbnN0YW5jZVxuICAgICAgKTtcbiAgICAgIGNoaWxkLiRtb3VudChoeWRyYXRpbmcgPyB2bm9kZS5lbG0gOiB1bmRlZmluZWQsIGh5ZHJhdGluZyk7XG4gICAgfVxuICB9LFxuXG4gIHByZXBhdGNoOiBmdW5jdGlvbiBwcmVwYXRjaCAob2xkVm5vZGUsIHZub2RlKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB2bm9kZS5jb21wb25lbnRPcHRpb25zO1xuICAgIHZhciBjaGlsZCA9IHZub2RlLmNvbXBvbmVudEluc3RhbmNlID0gb2xkVm5vZGUuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgdXBkYXRlQ2hpbGRDb21wb25lbnQoXG4gICAgICBjaGlsZCxcbiAgICAgIG9wdGlvbnMucHJvcHNEYXRhLCAvLyB1cGRhdGVkIHByb3BzXG4gICAgICBvcHRpb25zLmxpc3RlbmVycywgLy8gdXBkYXRlZCBsaXN0ZW5lcnNcbiAgICAgIHZub2RlLCAvLyBuZXcgcGFyZW50IHZub2RlXG4gICAgICBvcHRpb25zLmNoaWxkcmVuIC8vIG5ldyBjaGlsZHJlblxuICAgICk7XG4gIH0sXG5cbiAgaW5zZXJ0OiBmdW5jdGlvbiBpbnNlcnQgKHZub2RlKSB7XG4gICAgdmFyIGNvbnRleHQgPSB2bm9kZS5jb250ZXh0O1xuICAgIHZhciBjb21wb25lbnRJbnN0YW5jZSA9IHZub2RlLmNvbXBvbmVudEluc3RhbmNlO1xuICAgIGlmICghY29tcG9uZW50SW5zdGFuY2UuX2lzTW91bnRlZCkge1xuICAgICAgY2FsbEhvb2soY29tcG9uZW50SW5zdGFuY2UsICdvblNlcnZpY2VDcmVhdGVkJyk7XG4gICAgICBjYWxsSG9vayhjb21wb25lbnRJbnN0YW5jZSwgJ29uU2VydmljZUF0dGFjaGVkJyk7XG4gICAgICBjb21wb25lbnRJbnN0YW5jZS5faXNNb3VudGVkID0gdHJ1ZTtcbiAgICAgIGNhbGxIb29rKGNvbXBvbmVudEluc3RhbmNlLCAnbW91bnRlZCcpO1xuICAgIH1cbiAgICBpZiAodm5vZGUuZGF0YS5rZWVwQWxpdmUpIHtcbiAgICAgIGlmIChjb250ZXh0Ll9pc01vdW50ZWQpIHtcbiAgICAgICAgLy8gdnVlLXJvdXRlciMxMjEyXG4gICAgICAgIC8vIER1cmluZyB1cGRhdGVzLCBhIGtlcHQtYWxpdmUgY29tcG9uZW50J3MgY2hpbGQgY29tcG9uZW50cyBtYXlcbiAgICAgICAgLy8gY2hhbmdlLCBzbyBkaXJlY3RseSB3YWxraW5nIHRoZSB0cmVlIGhlcmUgbWF5IGNhbGwgYWN0aXZhdGVkIGhvb2tzXG4gICAgICAgIC8vIG9uIGluY29ycmVjdCBjaGlsZHJlbi4gSW5zdGVhZCB3ZSBwdXNoIHRoZW0gaW50byBhIHF1ZXVlIHdoaWNoIHdpbGxcbiAgICAgICAgLy8gYmUgcHJvY2Vzc2VkIGFmdGVyIHRoZSB3aG9sZSBwYXRjaCBwcm9jZXNzIGVuZGVkLlxuICAgICAgICBxdWV1ZUFjdGl2YXRlZENvbXBvbmVudChjb21wb25lbnRJbnN0YW5jZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY3RpdmF0ZUNoaWxkQ29tcG9uZW50KGNvbXBvbmVudEluc3RhbmNlLCB0cnVlIC8qIGRpcmVjdCAqLyk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3kgKHZub2RlKSB7XG4gICAgdmFyIGNvbXBvbmVudEluc3RhbmNlID0gdm5vZGUuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgaWYgKCFjb21wb25lbnRJbnN0YW5jZS5faXNEZXN0cm95ZWQpIHtcbiAgICAgIGlmICghdm5vZGUuZGF0YS5rZWVwQWxpdmUpIHtcbiAgICAgICAgY29tcG9uZW50SW5zdGFuY2UuJGRlc3Ryb3koKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlYWN0aXZhdGVDaGlsZENvbXBvbmVudChjb21wb25lbnRJbnN0YW5jZSwgdHJ1ZSAvKiBkaXJlY3QgKi8pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxudmFyIGhvb2tzVG9NZXJnZSA9IE9iamVjdC5rZXlzKGNvbXBvbmVudFZOb2RlSG9va3MpO1xuXG5mdW5jdGlvbiBjcmVhdGVDb21wb25lbnQgKFxuICBDdG9yLFxuICBkYXRhLFxuICBjb250ZXh0LFxuICBjaGlsZHJlbixcbiAgdGFnXG4pIHtcbiAgaWYgKGlzVW5kZWYoQ3RvcikpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciBiYXNlQ3RvciA9IGNvbnRleHQuJG9wdGlvbnMuX2Jhc2U7XG5cbiAgLy8gcGxhaW4gb3B0aW9ucyBvYmplY3Q6IHR1cm4gaXQgaW50byBhIGNvbnN0cnVjdG9yXG4gIGlmIChpc09iamVjdChDdG9yKSkge1xuICAgIEN0b3IgPSBiYXNlQ3Rvci5leHRlbmQoQ3Rvcik7XG4gIH1cblxuICAvLyBpZiBhdCB0aGlzIHN0YWdlIGl0J3Mgbm90IGEgY29uc3RydWN0b3Igb3IgYW4gYXN5bmMgY29tcG9uZW50IGZhY3RvcnksXG4gIC8vIHJlamVjdC5cbiAgaWYgKHR5cGVvZiBDdG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHdhcm4oKFwiSW52YWxpZCBDb21wb25lbnQgZGVmaW5pdGlvbjogXCIgKyAoU3RyaW5nKEN0b3IpKSksIGNvbnRleHQpO1xuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIGFzeW5jIGNvbXBvbmVudFxuICB2YXIgYXN5bmNGYWN0b3J5O1xuICBpZiAoaXNVbmRlZihDdG9yLmNpZCkpIHtcbiAgICBhc3luY0ZhY3RvcnkgPSBDdG9yO1xuICAgIEN0b3IgPSByZXNvbHZlQXN5bmNDb21wb25lbnQoYXN5bmNGYWN0b3J5LCBiYXNlQ3Rvcik7XG4gICAgaWYgKEN0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gcmV0dXJuIGEgcGxhY2Vob2xkZXIgbm9kZSBmb3IgYXN5bmMgY29tcG9uZW50LCB3aGljaCBpcyByZW5kZXJlZFxuICAgICAgLy8gYXMgYSBjb21tZW50IG5vZGUgYnV0IHByZXNlcnZlcyBhbGwgdGhlIHJhdyBpbmZvcm1hdGlvbiBmb3IgdGhlIG5vZGUuXG4gICAgICAvLyB0aGUgaW5mb3JtYXRpb24gd2lsbCBiZSB1c2VkIGZvciBhc3luYyBzZXJ2ZXItcmVuZGVyaW5nIGFuZCBoeWRyYXRpb24uXG4gICAgICByZXR1cm4gY3JlYXRlQXN5bmNQbGFjZWhvbGRlcihcbiAgICAgICAgYXN5bmNGYWN0b3J5LFxuICAgICAgICBkYXRhLFxuICAgICAgICBjb250ZXh0LFxuICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgdGFnXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgZGF0YSA9IGRhdGEgfHwge307XG5cbiAgLy8gcmVzb2x2ZSBjb25zdHJ1Y3RvciBvcHRpb25zIGluIGNhc2UgZ2xvYmFsIG1peGlucyBhcmUgYXBwbGllZCBhZnRlclxuICAvLyBjb21wb25lbnQgY29uc3RydWN0b3IgY3JlYXRpb25cbiAgcmVzb2x2ZUNvbnN0cnVjdG9yT3B0aW9ucyhDdG9yKTtcblxuICAvLyB0cmFuc2Zvcm0gY29tcG9uZW50IHYtbW9kZWwgZGF0YSBpbnRvIHByb3BzICYgZXZlbnRzXG4gIGlmIChpc0RlZihkYXRhLm1vZGVsKSkge1xuICAgIHRyYW5zZm9ybU1vZGVsKEN0b3Iub3B0aW9ucywgZGF0YSk7XG4gIH1cblxuICAvLyBleHRyYWN0IHByb3BzXG4gIHZhciBwcm9wc0RhdGEgPSBleHRyYWN0UHJvcHNGcm9tVk5vZGVEYXRhKGRhdGEsIEN0b3IsIHRhZywgY29udGV4dCk7IC8vIGZpeGVkIGJ5IHh4eHh4eFxuXG4gIC8vIGZ1bmN0aW9uYWwgY29tcG9uZW50XG4gIGlmIChpc1RydWUoQ3Rvci5vcHRpb25zLmZ1bmN0aW9uYWwpKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUZ1bmN0aW9uYWxDb21wb25lbnQoQ3RvciwgcHJvcHNEYXRhLCBkYXRhLCBjb250ZXh0LCBjaGlsZHJlbilcbiAgfVxuXG4gIC8vIGV4dHJhY3QgbGlzdGVuZXJzLCBzaW5jZSB0aGVzZSBuZWVkcyB0byBiZSB0cmVhdGVkIGFzXG4gIC8vIGNoaWxkIGNvbXBvbmVudCBsaXN0ZW5lcnMgaW5zdGVhZCBvZiBET00gbGlzdGVuZXJzXG4gIHZhciBsaXN0ZW5lcnMgPSBkYXRhLm9uO1xuICAvLyByZXBsYWNlIHdpdGggbGlzdGVuZXJzIHdpdGggLm5hdGl2ZSBtb2RpZmllclxuICAvLyBzbyBpdCBnZXRzIHByb2Nlc3NlZCBkdXJpbmcgcGFyZW50IGNvbXBvbmVudCBwYXRjaC5cbiAgZGF0YS5vbiA9IGRhdGEubmF0aXZlT247XG5cbiAgaWYgKGlzVHJ1ZShDdG9yLm9wdGlvbnMuYWJzdHJhY3QpKSB7XG4gICAgLy8gYWJzdHJhY3QgY29tcG9uZW50cyBkbyBub3Qga2VlcCBhbnl0aGluZ1xuICAgIC8vIG90aGVyIHRoYW4gcHJvcHMgJiBsaXN0ZW5lcnMgJiBzbG90XG5cbiAgICAvLyB3b3JrIGFyb3VuZCBmbG93XG4gICAgdmFyIHNsb3QgPSBkYXRhLnNsb3Q7XG4gICAgZGF0YSA9IHt9O1xuICAgIGlmIChzbG90KSB7XG4gICAgICBkYXRhLnNsb3QgPSBzbG90O1xuICAgIH1cbiAgfVxuXG4gIC8vIGluc3RhbGwgY29tcG9uZW50IG1hbmFnZW1lbnQgaG9va3Mgb250byB0aGUgcGxhY2Vob2xkZXIgbm9kZVxuICBpbnN0YWxsQ29tcG9uZW50SG9va3MoZGF0YSk7XG5cbiAgLy8gcmV0dXJuIGEgcGxhY2Vob2xkZXIgdm5vZGVcbiAgdmFyIG5hbWUgPSBDdG9yLm9wdGlvbnMubmFtZSB8fCB0YWc7XG4gIHZhciB2bm9kZSA9IG5ldyBWTm9kZShcbiAgICAoXCJ2dWUtY29tcG9uZW50LVwiICsgKEN0b3IuY2lkKSArIChuYW1lID8gKFwiLVwiICsgbmFtZSkgOiAnJykpLFxuICAgIGRhdGEsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGNvbnRleHQsXG4gICAgeyBDdG9yOiBDdG9yLCBwcm9wc0RhdGE6IHByb3BzRGF0YSwgbGlzdGVuZXJzOiBsaXN0ZW5lcnMsIHRhZzogdGFnLCBjaGlsZHJlbjogY2hpbGRyZW4gfSxcbiAgICBhc3luY0ZhY3RvcnlcbiAgKTtcblxuICByZXR1cm4gdm5vZGVcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50SW5zdGFuY2VGb3JWbm9kZSAoXG4gIHZub2RlLCAvLyB3ZSBrbm93IGl0J3MgTW91bnRlZENvbXBvbmVudFZOb2RlIGJ1dCBmbG93IGRvZXNuJ3RcbiAgcGFyZW50IC8vIGFjdGl2ZUluc3RhbmNlIGluIGxpZmVjeWNsZSBzdGF0ZVxuKSB7XG4gIHZhciBvcHRpb25zID0ge1xuICAgIF9pc0NvbXBvbmVudDogdHJ1ZSxcbiAgICBfcGFyZW50Vm5vZGU6IHZub2RlLFxuICAgIHBhcmVudDogcGFyZW50XG4gIH07XG4gIC8vIGNoZWNrIGlubGluZS10ZW1wbGF0ZSByZW5kZXIgZnVuY3Rpb25zXG4gIHZhciBpbmxpbmVUZW1wbGF0ZSA9IHZub2RlLmRhdGEuaW5saW5lVGVtcGxhdGU7XG4gIGlmIChpc0RlZihpbmxpbmVUZW1wbGF0ZSkpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IGlubGluZVRlbXBsYXRlLnJlbmRlcjtcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGlubGluZVRlbXBsYXRlLnN0YXRpY1JlbmRlckZucztcbiAgfVxuICByZXR1cm4gbmV3IHZub2RlLmNvbXBvbmVudE9wdGlvbnMuQ3RvcihvcHRpb25zKVxufVxuXG5mdW5jdGlvbiBpbnN0YWxsQ29tcG9uZW50SG9va3MgKGRhdGEpIHtcbiAgdmFyIGhvb2tzID0gZGF0YS5ob29rIHx8IChkYXRhLmhvb2sgPSB7fSk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaG9va3NUb01lcmdlLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGhvb2tzVG9NZXJnZVtpXTtcbiAgICB2YXIgZXhpc3RpbmcgPSBob29rc1trZXldO1xuICAgIHZhciB0b01lcmdlID0gY29tcG9uZW50Vk5vZGVIb29rc1trZXldO1xuICAgIGlmIChleGlzdGluZyAhPT0gdG9NZXJnZSAmJiAhKGV4aXN0aW5nICYmIGV4aXN0aW5nLl9tZXJnZWQpKSB7XG4gICAgICBob29rc1trZXldID0gZXhpc3RpbmcgPyBtZXJnZUhvb2skMSh0b01lcmdlLCBleGlzdGluZykgOiB0b01lcmdlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBtZXJnZUhvb2skMSAoZjEsIGYyKSB7XG4gIHZhciBtZXJnZWQgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIC8vIGZsb3cgY29tcGxhaW5zIGFib3V0IGV4dHJhIGFyZ3Mgd2hpY2ggaXMgd2h5IHdlIHVzZSBhbnlcbiAgICBmMShhLCBiKTtcbiAgICBmMihhLCBiKTtcbiAgfTtcbiAgbWVyZ2VkLl9tZXJnZWQgPSB0cnVlO1xuICByZXR1cm4gbWVyZ2VkXG59XG5cbi8vIHRyYW5zZm9ybSBjb21wb25lbnQgdi1tb2RlbCBpbmZvICh2YWx1ZSBhbmQgY2FsbGJhY2spIGludG9cbi8vIHByb3AgYW5kIGV2ZW50IGhhbmRsZXIgcmVzcGVjdGl2ZWx5LlxuZnVuY3Rpb24gdHJhbnNmb3JtTW9kZWwgKG9wdGlvbnMsIGRhdGEpIHtcbiAgdmFyIHByb3AgPSAob3B0aW9ucy5tb2RlbCAmJiBvcHRpb25zLm1vZGVsLnByb3ApIHx8ICd2YWx1ZSc7XG4gIHZhciBldmVudCA9IChvcHRpb25zLm1vZGVsICYmIG9wdGlvbnMubW9kZWwuZXZlbnQpIHx8ICdpbnB1dCdcbiAgOyhkYXRhLmF0dHJzIHx8IChkYXRhLmF0dHJzID0ge30pKVtwcm9wXSA9IGRhdGEubW9kZWwudmFsdWU7XG4gIHZhciBvbiA9IGRhdGEub24gfHwgKGRhdGEub24gPSB7fSk7XG4gIHZhciBleGlzdGluZyA9IG9uW2V2ZW50XTtcbiAgdmFyIGNhbGxiYWNrID0gZGF0YS5tb2RlbC5jYWxsYmFjaztcbiAgaWYgKGlzRGVmKGV4aXN0aW5nKSkge1xuICAgIGlmIChcbiAgICAgIEFycmF5LmlzQXJyYXkoZXhpc3RpbmcpXG4gICAgICAgID8gZXhpc3RpbmcuaW5kZXhPZihjYWxsYmFjaykgPT09IC0xXG4gICAgICAgIDogZXhpc3RpbmcgIT09IGNhbGxiYWNrXG4gICAgKSB7XG4gICAgICBvbltldmVudF0gPSBbY2FsbGJhY2tdLmNvbmNhdChleGlzdGluZyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG9uW2V2ZW50XSA9IGNhbGxiYWNrO1xuICB9XG59XG5cbi8qICAqL1xuXG52YXIgU0lNUExFX05PUk1BTElaRSA9IDE7XG52YXIgQUxXQVlTX05PUk1BTElaRSA9IDI7XG5cbi8vIHdyYXBwZXIgZnVuY3Rpb24gZm9yIHByb3ZpZGluZyBhIG1vcmUgZmxleGlibGUgaW50ZXJmYWNlXG4vLyB3aXRob3V0IGdldHRpbmcgeWVsbGVkIGF0IGJ5IGZsb3dcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQgKFxuICBjb250ZXh0LFxuICB0YWcsXG4gIGRhdGEsXG4gIGNoaWxkcmVuLFxuICBub3JtYWxpemF0aW9uVHlwZSxcbiAgYWx3YXlzTm9ybWFsaXplXG4pIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkgfHwgaXNQcmltaXRpdmUoZGF0YSkpIHtcbiAgICBub3JtYWxpemF0aW9uVHlwZSA9IGNoaWxkcmVuO1xuICAgIGNoaWxkcmVuID0gZGF0YTtcbiAgICBkYXRhID0gdW5kZWZpbmVkO1xuICB9XG4gIGlmIChpc1RydWUoYWx3YXlzTm9ybWFsaXplKSkge1xuICAgIG5vcm1hbGl6YXRpb25UeXBlID0gQUxXQVlTX05PUk1BTElaRTtcbiAgfVxuICByZXR1cm4gX2NyZWF0ZUVsZW1lbnQoY29udGV4dCwgdGFnLCBkYXRhLCBjaGlsZHJlbiwgbm9ybWFsaXphdGlvblR5cGUpXG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVFbGVtZW50IChcbiAgY29udGV4dCxcbiAgdGFnLFxuICBkYXRhLFxuICBjaGlsZHJlbixcbiAgbm9ybWFsaXphdGlvblR5cGVcbikge1xuICBpZiAoaXNEZWYoZGF0YSkgJiYgaXNEZWYoKGRhdGEpLl9fb2JfXykpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICBcIkF2b2lkIHVzaW5nIG9ic2VydmVkIGRhdGEgb2JqZWN0IGFzIHZub2RlIGRhdGE6IFwiICsgKEpTT04uc3RyaW5naWZ5KGRhdGEpKSArIFwiXFxuXCIgK1xuICAgICAgJ0Fsd2F5cyBjcmVhdGUgZnJlc2ggdm5vZGUgZGF0YSBvYmplY3RzIGluIGVhY2ggcmVuZGVyIScsXG4gICAgICBjb250ZXh0XG4gICAgKTtcbiAgICByZXR1cm4gY3JlYXRlRW1wdHlWTm9kZSgpXG4gIH1cbiAgLy8gb2JqZWN0IHN5bnRheCBpbiB2LWJpbmRcbiAgaWYgKGlzRGVmKGRhdGEpICYmIGlzRGVmKGRhdGEuaXMpKSB7XG4gICAgdGFnID0gZGF0YS5pcztcbiAgfVxuICBpZiAoIXRhZykge1xuICAgIC8vIGluIGNhc2Ugb2YgY29tcG9uZW50IDppcyBzZXQgdG8gZmFsc3kgdmFsdWVcbiAgICByZXR1cm4gY3JlYXRlRW1wdHlWTm9kZSgpXG4gIH1cbiAgLy8gd2FybiBhZ2FpbnN0IG5vbi1wcmltaXRpdmUga2V5XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgaXNEZWYoZGF0YSkgJiYgaXNEZWYoZGF0YS5rZXkpICYmICFpc1ByaW1pdGl2ZShkYXRhLmtleSlcbiAgKSB7XG4gICAge1xuICAgICAgd2FybihcbiAgICAgICAgJ0F2b2lkIHVzaW5nIG5vbi1wcmltaXRpdmUgdmFsdWUgYXMga2V5LCAnICtcbiAgICAgICAgJ3VzZSBzdHJpbmcvbnVtYmVyIHZhbHVlIGluc3RlYWQuJyxcbiAgICAgICAgY29udGV4dFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgLy8gc3VwcG9ydCBzaW5nbGUgZnVuY3Rpb24gY2hpbGRyZW4gYXMgZGVmYXVsdCBzY29wZWQgc2xvdFxuICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikgJiZcbiAgICB0eXBlb2YgY2hpbGRyZW5bMF0gPT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgZGF0YSA9IGRhdGEgfHwge307XG4gICAgZGF0YS5zY29wZWRTbG90cyA9IHsgZGVmYXVsdDogY2hpbGRyZW5bMF0gfTtcbiAgICBjaGlsZHJlbi5sZW5ndGggPSAwO1xuICB9XG4gIGlmIChub3JtYWxpemF0aW9uVHlwZSA9PT0gQUxXQVlTX05PUk1BTElaRSkge1xuICAgIGNoaWxkcmVuID0gbm9ybWFsaXplQ2hpbGRyZW4oY2hpbGRyZW4pO1xuICB9IGVsc2UgaWYgKG5vcm1hbGl6YXRpb25UeXBlID09PSBTSU1QTEVfTk9STUFMSVpFKSB7XG4gICAgY2hpbGRyZW4gPSBzaW1wbGVOb3JtYWxpemVDaGlsZHJlbihjaGlsZHJlbik7XG4gIH1cbiAgdmFyIHZub2RlLCBucztcbiAgaWYgKHR5cGVvZiB0YWcgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIEN0b3I7XG4gICAgbnMgPSAoY29udGV4dC4kdm5vZGUgJiYgY29udGV4dC4kdm5vZGUubnMpIHx8IGNvbmZpZy5nZXRUYWdOYW1lc3BhY2UodGFnKTtcbiAgICBpZiAoY29uZmlnLmlzUmVzZXJ2ZWRUYWcodGFnKSkge1xuICAgICAgLy8gcGxhdGZvcm0gYnVpbHQtaW4gZWxlbWVudHNcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGlzRGVmKGRhdGEpICYmIGlzRGVmKGRhdGEubmF0aXZlT24pKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgKFwiVGhlIC5uYXRpdmUgbW9kaWZpZXIgZm9yIHYtb24gaXMgb25seSB2YWxpZCBvbiBjb21wb25lbnRzIGJ1dCBpdCB3YXMgdXNlZCBvbiA8XCIgKyB0YWcgKyBcIj4uXCIpLFxuICAgICAgICAgIGNvbnRleHRcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHZub2RlID0gbmV3IFZOb2RlKFxuICAgICAgICBjb25maWcucGFyc2VQbGF0Zm9ybVRhZ05hbWUodGFnKSwgZGF0YSwgY2hpbGRyZW4sXG4gICAgICAgIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBjb250ZXh0XG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoKCFkYXRhIHx8ICFkYXRhLnByZSkgJiYgaXNEZWYoQ3RvciA9IHJlc29sdmVBc3NldChjb250ZXh0LiRvcHRpb25zLCAnY29tcG9uZW50cycsIHRhZykpKSB7XG4gICAgICAvLyBjb21wb25lbnRcbiAgICAgIHZub2RlID0gY3JlYXRlQ29tcG9uZW50KEN0b3IsIGRhdGEsIGNvbnRleHQsIGNoaWxkcmVuLCB0YWcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB1bmtub3duIG9yIHVubGlzdGVkIG5hbWVzcGFjZWQgZWxlbWVudHNcbiAgICAgIC8vIGNoZWNrIGF0IHJ1bnRpbWUgYmVjYXVzZSBpdCBtYXkgZ2V0IGFzc2lnbmVkIGEgbmFtZXNwYWNlIHdoZW4gaXRzXG4gICAgICAvLyBwYXJlbnQgbm9ybWFsaXplcyBjaGlsZHJlblxuICAgICAgdm5vZGUgPSBuZXcgVk5vZGUoXG4gICAgICAgIHRhZywgZGF0YSwgY2hpbGRyZW4sXG4gICAgICAgIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBjb250ZXh0XG4gICAgICApO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBkaXJlY3QgY29tcG9uZW50IG9wdGlvbnMgLyBjb25zdHJ1Y3RvclxuICAgIHZub2RlID0gY3JlYXRlQ29tcG9uZW50KHRhZywgZGF0YSwgY29udGV4dCwgY2hpbGRyZW4pO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KHZub2RlKSkge1xuICAgIHJldHVybiB2bm9kZVxuICB9IGVsc2UgaWYgKGlzRGVmKHZub2RlKSkge1xuICAgIGlmIChpc0RlZihucykpIHsgYXBwbHlOUyh2bm9kZSwgbnMpOyB9XG4gICAgaWYgKGlzRGVmKGRhdGEpKSB7IHJlZ2lzdGVyRGVlcEJpbmRpbmdzKGRhdGEpOyB9XG4gICAgcmV0dXJuIHZub2RlXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVtcHR5Vk5vZGUoKVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5TlMgKHZub2RlLCBucywgZm9yY2UpIHtcbiAgdm5vZGUubnMgPSBucztcbiAgaWYgKHZub2RlLnRhZyA9PT0gJ2ZvcmVpZ25PYmplY3QnKSB7XG4gICAgLy8gdXNlIGRlZmF1bHQgbmFtZXNwYWNlIGluc2lkZSBmb3JlaWduT2JqZWN0XG4gICAgbnMgPSB1bmRlZmluZWQ7XG4gICAgZm9yY2UgPSB0cnVlO1xuICB9XG4gIGlmIChpc0RlZih2bm9kZS5jaGlsZHJlbikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IHZub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdmFyIGNoaWxkID0gdm5vZGUuY2hpbGRyZW5baV07XG4gICAgICBpZiAoaXNEZWYoY2hpbGQudGFnKSAmJiAoXG4gICAgICAgIGlzVW5kZWYoY2hpbGQubnMpIHx8IChpc1RydWUoZm9yY2UpICYmIGNoaWxkLnRhZyAhPT0gJ3N2ZycpKSkge1xuICAgICAgICBhcHBseU5TKGNoaWxkLCBucywgZm9yY2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyByZWYgIzUzMThcbi8vIG5lY2Vzc2FyeSB0byBlbnN1cmUgcGFyZW50IHJlLXJlbmRlciB3aGVuIGRlZXAgYmluZGluZ3MgbGlrZSA6c3R5bGUgYW5kXG4vLyA6Y2xhc3MgYXJlIHVzZWQgb24gc2xvdCBub2Rlc1xuZnVuY3Rpb24gcmVnaXN0ZXJEZWVwQmluZGluZ3MgKGRhdGEpIHtcbiAgaWYgKGlzT2JqZWN0KGRhdGEuc3R5bGUpKSB7XG4gICAgdHJhdmVyc2UoZGF0YS5zdHlsZSk7XG4gIH1cbiAgaWYgKGlzT2JqZWN0KGRhdGEuY2xhc3MpKSB7XG4gICAgdHJhdmVyc2UoZGF0YS5jbGFzcyk7XG4gIH1cbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGluaXRSZW5kZXIgKHZtKSB7XG4gIHZtLl92bm9kZSA9IG51bGw7IC8vIHRoZSByb290IG9mIHRoZSBjaGlsZCB0cmVlXG4gIHZtLl9zdGF0aWNUcmVlcyA9IG51bGw7IC8vIHYtb25jZSBjYWNoZWQgdHJlZXNcbiAgdmFyIG9wdGlvbnMgPSB2bS4kb3B0aW9ucztcbiAgdmFyIHBhcmVudFZub2RlID0gdm0uJHZub2RlID0gb3B0aW9ucy5fcGFyZW50Vm5vZGU7IC8vIHRoZSBwbGFjZWhvbGRlciBub2RlIGluIHBhcmVudCB0cmVlXG4gIHZhciByZW5kZXJDb250ZXh0ID0gcGFyZW50Vm5vZGUgJiYgcGFyZW50Vm5vZGUuY29udGV4dDtcbiAgdm0uJHNsb3RzID0gcmVzb2x2ZVNsb3RzKG9wdGlvbnMuX3JlbmRlckNoaWxkcmVuLCByZW5kZXJDb250ZXh0KTtcbiAgdm0uJHNjb3BlZFNsb3RzID0gZW1wdHlPYmplY3Q7XG4gIC8vIGJpbmQgdGhlIGNyZWF0ZUVsZW1lbnQgZm4gdG8gdGhpcyBpbnN0YW5jZVxuICAvLyBzbyB0aGF0IHdlIGdldCBwcm9wZXIgcmVuZGVyIGNvbnRleHQgaW5zaWRlIGl0LlxuICAvLyBhcmdzIG9yZGVyOiB0YWcsIGRhdGEsIGNoaWxkcmVuLCBub3JtYWxpemF0aW9uVHlwZSwgYWx3YXlzTm9ybWFsaXplXG4gIC8vIGludGVybmFsIHZlcnNpb24gaXMgdXNlZCBieSByZW5kZXIgZnVuY3Rpb25zIGNvbXBpbGVkIGZyb20gdGVtcGxhdGVzXG4gIHZtLl9jID0gZnVuY3Rpb24gKGEsIGIsIGMsIGQpIHsgcmV0dXJuIGNyZWF0ZUVsZW1lbnQodm0sIGEsIGIsIGMsIGQsIGZhbHNlKTsgfTtcbiAgLy8gbm9ybWFsaXphdGlvbiBpcyBhbHdheXMgYXBwbGllZCBmb3IgdGhlIHB1YmxpYyB2ZXJzaW9uLCB1c2VkIGluXG4gIC8vIHVzZXItd3JpdHRlbiByZW5kZXIgZnVuY3Rpb25zLlxuICB2bS4kY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7IHJldHVybiBjcmVhdGVFbGVtZW50KHZtLCBhLCBiLCBjLCBkLCB0cnVlKTsgfTtcblxuICAvLyAkYXR0cnMgJiAkbGlzdGVuZXJzIGFyZSBleHBvc2VkIGZvciBlYXNpZXIgSE9DIGNyZWF0aW9uLlxuICAvLyB0aGV5IG5lZWQgdG8gYmUgcmVhY3RpdmUgc28gdGhhdCBIT0NzIHVzaW5nIHRoZW0gYXJlIGFsd2F5cyB1cGRhdGVkXG4gIHZhciBwYXJlbnREYXRhID0gcGFyZW50Vm5vZGUgJiYgcGFyZW50Vm5vZGUuZGF0YTtcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGRlZmluZVJlYWN0aXZlJCQxKHZtLCAnJGF0dHJzJywgcGFyZW50RGF0YSAmJiBwYXJlbnREYXRhLmF0dHJzIHx8IGVtcHR5T2JqZWN0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAhaXNVcGRhdGluZ0NoaWxkQ29tcG9uZW50ICYmIHdhcm4oXCIkYXR0cnMgaXMgcmVhZG9ubHkuXCIsIHZtKTtcbiAgICB9LCB0cnVlKTtcbiAgICBkZWZpbmVSZWFjdGl2ZSQkMSh2bSwgJyRsaXN0ZW5lcnMnLCBvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnMgfHwgZW1wdHlPYmplY3QsIGZ1bmN0aW9uICgpIHtcbiAgICAgICFpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQgJiYgd2FybihcIiRsaXN0ZW5lcnMgaXMgcmVhZG9ubHkuXCIsIHZtKTtcbiAgICB9LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBkZWZpbmVSZWFjdGl2ZSQkMSh2bSwgJyRhdHRycycsIHBhcmVudERhdGEgJiYgcGFyZW50RGF0YS5hdHRycyB8fCBlbXB0eU9iamVjdCwgbnVsbCwgdHJ1ZSk7XG4gICAgZGVmaW5lUmVhY3RpdmUkJDEodm0sICckbGlzdGVuZXJzJywgb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzIHx8IGVtcHR5T2JqZWN0LCBudWxsLCB0cnVlKTtcbiAgfVxufVxuXG52YXIgY3VycmVudFJlbmRlcmluZ0luc3RhbmNlID0gbnVsbDtcblxuZnVuY3Rpb24gcmVuZGVyTWl4aW4gKFZ1ZSkge1xuICAvLyBpbnN0YWxsIHJ1bnRpbWUgY29udmVuaWVuY2UgaGVscGVyc1xuICBpbnN0YWxsUmVuZGVySGVscGVycyhWdWUucHJvdG90eXBlKTtcblxuICBWdWUucHJvdG90eXBlLiRuZXh0VGljayA9IGZ1bmN0aW9uIChmbikge1xuICAgIHJldHVybiBuZXh0VGljayhmbiwgdGhpcylcbiAgfTtcblxuICBWdWUucHJvdG90eXBlLl9yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICB2YXIgcmVmID0gdm0uJG9wdGlvbnM7XG4gICAgdmFyIHJlbmRlciA9IHJlZi5yZW5kZXI7XG4gICAgdmFyIF9wYXJlbnRWbm9kZSA9IHJlZi5fcGFyZW50Vm5vZGU7XG5cbiAgICBpZiAoX3BhcmVudFZub2RlKSB7XG4gICAgICB2bS4kc2NvcGVkU2xvdHMgPSBub3JtYWxpemVTY29wZWRTbG90cyhcbiAgICAgICAgX3BhcmVudFZub2RlLmRhdGEuc2NvcGVkU2xvdHMsXG4gICAgICAgIHZtLiRzbG90cyxcbiAgICAgICAgdm0uJHNjb3BlZFNsb3RzXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIHNldCBwYXJlbnQgdm5vZGUuIHRoaXMgYWxsb3dzIHJlbmRlciBmdW5jdGlvbnMgdG8gaGF2ZSBhY2Nlc3NcbiAgICAvLyB0byB0aGUgZGF0YSBvbiB0aGUgcGxhY2Vob2xkZXIgbm9kZS5cbiAgICB2bS4kdm5vZGUgPSBfcGFyZW50Vm5vZGU7XG4gICAgLy8gcmVuZGVyIHNlbGZcbiAgICB2YXIgdm5vZGU7XG4gICAgdHJ5IHtcbiAgICAgIC8vIFRoZXJlJ3Mgbm8gbmVlZCB0byBtYWludGFpbiBhIHN0YWNrIGJlY2F1c2UgYWxsIHJlbmRlciBmbnMgYXJlIGNhbGxlZFxuICAgICAgLy8gc2VwYXJhdGVseSBmcm9tIG9uZSBhbm90aGVyLiBOZXN0ZWQgY29tcG9uZW50J3MgcmVuZGVyIGZucyBhcmUgY2FsbGVkXG4gICAgICAvLyB3aGVuIHBhcmVudCBjb21wb25lbnQgaXMgcGF0Y2hlZC5cbiAgICAgIGN1cnJlbnRSZW5kZXJpbmdJbnN0YW5jZSA9IHZtO1xuICAgICAgdm5vZGUgPSByZW5kZXIuY2FsbCh2bS5fcmVuZGVyUHJveHksIHZtLiRjcmVhdGVFbGVtZW50KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBoYW5kbGVFcnJvcihlLCB2bSwgXCJyZW5kZXJcIik7XG4gICAgICAvLyByZXR1cm4gZXJyb3IgcmVuZGVyIHJlc3VsdCxcbiAgICAgIC8vIG9yIHByZXZpb3VzIHZub2RlIHRvIHByZXZlbnQgcmVuZGVyIGVycm9yIGNhdXNpbmcgYmxhbmsgY29tcG9uZW50XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdm0uJG9wdGlvbnMucmVuZGVyRXJyb3IpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2bm9kZSA9IHZtLiRvcHRpb25zLnJlbmRlckVycm9yLmNhbGwodm0uX3JlbmRlclByb3h5LCB2bS4kY3JlYXRlRWxlbWVudCwgZSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBoYW5kbGVFcnJvcihlLCB2bSwgXCJyZW5kZXJFcnJvclwiKTtcbiAgICAgICAgICB2bm9kZSA9IHZtLl92bm9kZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdm5vZGUgPSB2bS5fdm5vZGU7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGN1cnJlbnRSZW5kZXJpbmdJbnN0YW5jZSA9IG51bGw7XG4gICAgfVxuICAgIC8vIGlmIHRoZSByZXR1cm5lZCBhcnJheSBjb250YWlucyBvbmx5IGEgc2luZ2xlIG5vZGUsIGFsbG93IGl0XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodm5vZGUpICYmIHZub2RlLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdm5vZGUgPSB2bm9kZVswXTtcbiAgICB9XG4gICAgLy8gcmV0dXJuIGVtcHR5IHZub2RlIGluIGNhc2UgdGhlIHJlbmRlciBmdW5jdGlvbiBlcnJvcmVkIG91dFxuICAgIGlmICghKHZub2RlIGluc3RhbmNlb2YgVk5vZGUpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBBcnJheS5pc0FycmF5KHZub2RlKSkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgICdNdWx0aXBsZSByb290IG5vZGVzIHJldHVybmVkIGZyb20gcmVuZGVyIGZ1bmN0aW9uLiBSZW5kZXIgZnVuY3Rpb24gJyArXG4gICAgICAgICAgJ3Nob3VsZCByZXR1cm4gYSBzaW5nbGUgcm9vdCBub2RlLicsXG4gICAgICAgICAgdm1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHZub2RlID0gY3JlYXRlRW1wdHlWTm9kZSgpO1xuICAgIH1cbiAgICAvLyBzZXQgcGFyZW50XG4gICAgdm5vZGUucGFyZW50ID0gX3BhcmVudFZub2RlO1xuICAgIHJldHVybiB2bm9kZVxuICB9O1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gZW5zdXJlQ3RvciAoY29tcCwgYmFzZSkge1xuICBpZiAoXG4gICAgY29tcC5fX2VzTW9kdWxlIHx8XG4gICAgKGhhc1N5bWJvbCAmJiBjb21wW1N5bWJvbC50b1N0cmluZ1RhZ10gPT09ICdNb2R1bGUnKVxuICApIHtcbiAgICBjb21wID0gY29tcC5kZWZhdWx0O1xuICB9XG4gIHJldHVybiBpc09iamVjdChjb21wKVxuICAgID8gYmFzZS5leHRlbmQoY29tcClcbiAgICA6IGNvbXBcbn1cblxuZnVuY3Rpb24gY3JlYXRlQXN5bmNQbGFjZWhvbGRlciAoXG4gIGZhY3RvcnksXG4gIGRhdGEsXG4gIGNvbnRleHQsXG4gIGNoaWxkcmVuLFxuICB0YWdcbikge1xuICB2YXIgbm9kZSA9IGNyZWF0ZUVtcHR5Vk5vZGUoKTtcbiAgbm9kZS5hc3luY0ZhY3RvcnkgPSBmYWN0b3J5O1xuICBub2RlLmFzeW5jTWV0YSA9IHsgZGF0YTogZGF0YSwgY29udGV4dDogY29udGV4dCwgY2hpbGRyZW46IGNoaWxkcmVuLCB0YWc6IHRhZyB9O1xuICByZXR1cm4gbm9kZVxufVxuXG5mdW5jdGlvbiByZXNvbHZlQXN5bmNDb21wb25lbnQgKFxuICBmYWN0b3J5LFxuICBiYXNlQ3RvclxuKSB7XG4gIGlmIChpc1RydWUoZmFjdG9yeS5lcnJvcikgJiYgaXNEZWYoZmFjdG9yeS5lcnJvckNvbXApKSB7XG4gICAgcmV0dXJuIGZhY3RvcnkuZXJyb3JDb21wXG4gIH1cblxuICBpZiAoaXNEZWYoZmFjdG9yeS5yZXNvbHZlZCkpIHtcbiAgICByZXR1cm4gZmFjdG9yeS5yZXNvbHZlZFxuICB9XG5cbiAgdmFyIG93bmVyID0gY3VycmVudFJlbmRlcmluZ0luc3RhbmNlO1xuICBpZiAob3duZXIgJiYgaXNEZWYoZmFjdG9yeS5vd25lcnMpICYmIGZhY3Rvcnkub3duZXJzLmluZGV4T2Yob3duZXIpID09PSAtMSkge1xuICAgIC8vIGFscmVhZHkgcGVuZGluZ1xuICAgIGZhY3Rvcnkub3duZXJzLnB1c2gob3duZXIpO1xuICB9XG5cbiAgaWYgKGlzVHJ1ZShmYWN0b3J5LmxvYWRpbmcpICYmIGlzRGVmKGZhY3RvcnkubG9hZGluZ0NvbXApKSB7XG4gICAgcmV0dXJuIGZhY3RvcnkubG9hZGluZ0NvbXBcbiAgfVxuXG4gIGlmIChvd25lciAmJiAhaXNEZWYoZmFjdG9yeS5vd25lcnMpKSB7XG4gICAgdmFyIG93bmVycyA9IGZhY3Rvcnkub3duZXJzID0gW293bmVyXTtcbiAgICB2YXIgc3luYyA9IHRydWU7XG4gICAgdmFyIHRpbWVyTG9hZGluZyA9IG51bGw7XG4gICAgdmFyIHRpbWVyVGltZW91dCA9IG51bGxcblxuICAgIDsob3duZXIpLiRvbignaG9vazpkZXN0cm95ZWQnLCBmdW5jdGlvbiAoKSB7IHJldHVybiByZW1vdmUob3duZXJzLCBvd25lcik7IH0pO1xuXG4gICAgdmFyIGZvcmNlUmVuZGVyID0gZnVuY3Rpb24gKHJlbmRlckNvbXBsZXRlZCkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvd25lcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIChvd25lcnNbaV0pLiRmb3JjZVVwZGF0ZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVuZGVyQ29tcGxldGVkKSB7XG4gICAgICAgIG93bmVycy5sZW5ndGggPSAwO1xuICAgICAgICBpZiAodGltZXJMb2FkaW5nICE9PSBudWxsKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyTG9hZGluZyk7XG4gICAgICAgICAgdGltZXJMb2FkaW5nID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGltZXJUaW1lb3V0ICE9PSBudWxsKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyVGltZW91dCk7XG4gICAgICAgICAgdGltZXJUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgcmVzb2x2ZSA9IG9uY2UoZnVuY3Rpb24gKHJlcykge1xuICAgICAgLy8gY2FjaGUgcmVzb2x2ZWRcbiAgICAgIGZhY3RvcnkucmVzb2x2ZWQgPSBlbnN1cmVDdG9yKHJlcywgYmFzZUN0b3IpO1xuICAgICAgLy8gaW52b2tlIGNhbGxiYWNrcyBvbmx5IGlmIHRoaXMgaXMgbm90IGEgc3luY2hyb25vdXMgcmVzb2x2ZVxuICAgICAgLy8gKGFzeW5jIHJlc29sdmVzIGFyZSBzaGltbWVkIGFzIHN5bmNocm9ub3VzIGR1cmluZyBTU1IpXG4gICAgICBpZiAoIXN5bmMpIHtcbiAgICAgICAgZm9yY2VSZW5kZXIodHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvd25lcnMubGVuZ3RoID0gMDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciByZWplY3QgPSBvbmNlKGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgXCJGYWlsZWQgdG8gcmVzb2x2ZSBhc3luYyBjb21wb25lbnQ6IFwiICsgKFN0cmluZyhmYWN0b3J5KSkgK1xuICAgICAgICAocmVhc29uID8gKFwiXFxuUmVhc29uOiBcIiArIHJlYXNvbikgOiAnJylcbiAgICAgICk7XG4gICAgICBpZiAoaXNEZWYoZmFjdG9yeS5lcnJvckNvbXApKSB7XG4gICAgICAgIGZhY3RvcnkuZXJyb3IgPSB0cnVlO1xuICAgICAgICBmb3JjZVJlbmRlcih0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciByZXMgPSBmYWN0b3J5KHJlc29sdmUsIHJlamVjdCk7XG5cbiAgICBpZiAoaXNPYmplY3QocmVzKSkge1xuICAgICAgaWYgKGlzUHJvbWlzZShyZXMpKSB7XG4gICAgICAgIC8vICgpID0+IFByb21pc2VcbiAgICAgICAgaWYgKGlzVW5kZWYoZmFjdG9yeS5yZXNvbHZlZCkpIHtcbiAgICAgICAgICByZXMudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlzUHJvbWlzZShyZXMuY29tcG9uZW50KSkge1xuICAgICAgICByZXMuY29tcG9uZW50LnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcblxuICAgICAgICBpZiAoaXNEZWYocmVzLmVycm9yKSkge1xuICAgICAgICAgIGZhY3RvcnkuZXJyb3JDb21wID0gZW5zdXJlQ3RvcihyZXMuZXJyb3IsIGJhc2VDdG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0RlZihyZXMubG9hZGluZykpIHtcbiAgICAgICAgICBmYWN0b3J5LmxvYWRpbmdDb21wID0gZW5zdXJlQ3RvcihyZXMubG9hZGluZywgYmFzZUN0b3IpO1xuICAgICAgICAgIGlmIChyZXMuZGVsYXkgPT09IDApIHtcbiAgICAgICAgICAgIGZhY3RvcnkubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRpbWVyTG9hZGluZyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICB0aW1lckxvYWRpbmcgPSBudWxsO1xuICAgICAgICAgICAgICBpZiAoaXNVbmRlZihmYWN0b3J5LnJlc29sdmVkKSAmJiBpc1VuZGVmKGZhY3RvcnkuZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgZmFjdG9yeS5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBmb3JjZVJlbmRlcihmYWxzZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHJlcy5kZWxheSB8fCAyMDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0RlZihyZXMudGltZW91dCkpIHtcbiAgICAgICAgICB0aW1lclRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRpbWVyVGltZW91dCA9IG51bGw7XG4gICAgICAgICAgICBpZiAoaXNVbmRlZihmYWN0b3J5LnJlc29sdmVkKSkge1xuICAgICAgICAgICAgICByZWplY3QoXG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJ1xuICAgICAgICAgICAgICAgICAgPyAoXCJ0aW1lb3V0IChcIiArIChyZXMudGltZW91dCkgKyBcIm1zKVwiKVxuICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgcmVzLnRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3luYyA9IGZhbHNlO1xuICAgIC8vIHJldHVybiBpbiBjYXNlIHJlc29sdmVkIHN5bmNocm9ub3VzbHlcbiAgICByZXR1cm4gZmFjdG9yeS5sb2FkaW5nXG4gICAgICA/IGZhY3RvcnkubG9hZGluZ0NvbXBcbiAgICAgIDogZmFjdG9yeS5yZXNvbHZlZFxuICB9XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpc0FzeW5jUGxhY2Vob2xkZXIgKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUuaXNDb21tZW50ICYmIG5vZGUuYXN5bmNGYWN0b3J5XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBnZXRGaXJzdENvbXBvbmVudENoaWxkIChjaGlsZHJlbikge1xuICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgYyA9IGNoaWxkcmVuW2ldO1xuICAgICAgaWYgKGlzRGVmKGMpICYmIChpc0RlZihjLmNvbXBvbmVudE9wdGlvbnMpIHx8IGlzQXN5bmNQbGFjZWhvbGRlcihjKSkpIHtcbiAgICAgICAgcmV0dXJuIGNcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyogICovXG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0RXZlbnRzICh2bSkge1xuICB2bS5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdm0uX2hhc0hvb2tFdmVudCA9IGZhbHNlO1xuICAvLyBpbml0IHBhcmVudCBhdHRhY2hlZCBldmVudHNcbiAgdmFyIGxpc3RlbmVycyA9IHZtLiRvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnM7XG4gIGlmIChsaXN0ZW5lcnMpIHtcbiAgICB1cGRhdGVDb21wb25lbnRMaXN0ZW5lcnModm0sIGxpc3RlbmVycyk7XG4gIH1cbn1cblxudmFyIHRhcmdldDtcblxuZnVuY3Rpb24gYWRkIChldmVudCwgZm4pIHtcbiAgdGFyZ2V0LiRvbihldmVudCwgZm4pO1xufVxuXG5mdW5jdGlvbiByZW1vdmUkMSAoZXZlbnQsIGZuKSB7XG4gIHRhcmdldC4kb2ZmKGV2ZW50LCBmbik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU9uY2VIYW5kbGVyIChldmVudCwgZm4pIHtcbiAgdmFyIF90YXJnZXQgPSB0YXJnZXQ7XG4gIHJldHVybiBmdW5jdGlvbiBvbmNlSGFuZGxlciAoKSB7XG4gICAgdmFyIHJlcyA9IGZuLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHJlcyAhPT0gbnVsbCkge1xuICAgICAgX3RhcmdldC4kb2ZmKGV2ZW50LCBvbmNlSGFuZGxlcik7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNvbXBvbmVudExpc3RlbmVycyAoXG4gIHZtLFxuICBsaXN0ZW5lcnMsXG4gIG9sZExpc3RlbmVyc1xuKSB7XG4gIHRhcmdldCA9IHZtO1xuICB1cGRhdGVMaXN0ZW5lcnMobGlzdGVuZXJzLCBvbGRMaXN0ZW5lcnMgfHwge30sIGFkZCwgcmVtb3ZlJDEsIGNyZWF0ZU9uY2VIYW5kbGVyLCB2bSk7XG4gIHRhcmdldCA9IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZXZlbnRzTWl4aW4gKFZ1ZSkge1xuICB2YXIgaG9va1JFID0gL15ob29rOi87XG4gIFZ1ZS5wcm90b3R5cGUuJG9uID0gZnVuY3Rpb24gKGV2ZW50LCBmbikge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZXZlbnQpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGV2ZW50Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICB2bS4kb24oZXZlbnRbaV0sIGZuKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgKHZtLl9ldmVudHNbZXZlbnRdIHx8ICh2bS5fZXZlbnRzW2V2ZW50XSA9IFtdKSkucHVzaChmbik7XG4gICAgICAvLyBvcHRpbWl6ZSBob29rOmV2ZW50IGNvc3QgYnkgdXNpbmcgYSBib29sZWFuIGZsYWcgbWFya2VkIGF0IHJlZ2lzdHJhdGlvblxuICAgICAgLy8gaW5zdGVhZCBvZiBhIGhhc2ggbG9va3VwXG4gICAgICBpZiAoaG9va1JFLnRlc3QoZXZlbnQpKSB7XG4gICAgICAgIHZtLl9oYXNIb29rRXZlbnQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdm1cbiAgfTtcblxuICBWdWUucHJvdG90eXBlLiRvbmNlID0gZnVuY3Rpb24gKGV2ZW50LCBmbikge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgZnVuY3Rpb24gb24gKCkge1xuICAgICAgdm0uJG9mZihldmVudCwgb24pO1xuICAgICAgZm4uYXBwbHkodm0sIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIG9uLmZuID0gZm47XG4gICAgdm0uJG9uKGV2ZW50LCBvbik7XG4gICAgcmV0dXJuIHZtXG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS4kb2ZmID0gZnVuY3Rpb24gKGV2ZW50LCBmbikge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgLy8gYWxsXG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICB2bS5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIHJldHVybiB2bVxuICAgIH1cbiAgICAvLyBhcnJheSBvZiBldmVudHNcbiAgICBpZiAoQXJyYXkuaXNBcnJheShldmVudCkpIHtcbiAgICAgIGZvciAodmFyIGkkMSA9IDAsIGwgPSBldmVudC5sZW5ndGg7IGkkMSA8IGw7IGkkMSsrKSB7XG4gICAgICAgIHZtLiRvZmYoZXZlbnRbaSQxXSwgZm4pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZtXG4gICAgfVxuICAgIC8vIHNwZWNpZmljIGV2ZW50XG4gICAgdmFyIGNicyA9IHZtLl9ldmVudHNbZXZlbnRdO1xuICAgIGlmICghY2JzKSB7XG4gICAgICByZXR1cm4gdm1cbiAgICB9XG4gICAgaWYgKCFmbikge1xuICAgICAgdm0uX2V2ZW50c1tldmVudF0gPSBudWxsO1xuICAgICAgcmV0dXJuIHZtXG4gICAgfVxuICAgIC8vIHNwZWNpZmljIGhhbmRsZXJcbiAgICB2YXIgY2I7XG4gICAgdmFyIGkgPSBjYnMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGNiID0gY2JzW2ldO1xuICAgICAgaWYgKGNiID09PSBmbiB8fCBjYi5mbiA9PT0gZm4pIHtcbiAgICAgICAgY2JzLnNwbGljZShpLCAxKTtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZtXG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS4kZW1pdCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBsb3dlckNhc2VFdmVudCA9IGV2ZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAobG93ZXJDYXNlRXZlbnQgIT09IGV2ZW50ICYmIHZtLl9ldmVudHNbbG93ZXJDYXNlRXZlbnRdKSB7XG4gICAgICAgIHRpcChcbiAgICAgICAgICBcIkV2ZW50IFxcXCJcIiArIGxvd2VyQ2FzZUV2ZW50ICsgXCJcXFwiIGlzIGVtaXR0ZWQgaW4gY29tcG9uZW50IFwiICtcbiAgICAgICAgICAoZm9ybWF0Q29tcG9uZW50TmFtZSh2bSkpICsgXCIgYnV0IHRoZSBoYW5kbGVyIGlzIHJlZ2lzdGVyZWQgZm9yIFxcXCJcIiArIGV2ZW50ICsgXCJcXFwiLiBcIiArXG4gICAgICAgICAgXCJOb3RlIHRoYXQgSFRNTCBhdHRyaWJ1dGVzIGFyZSBjYXNlLWluc2Vuc2l0aXZlIGFuZCB5b3UgY2Fubm90IHVzZSBcIiArXG4gICAgICAgICAgXCJ2LW9uIHRvIGxpc3RlbiB0byBjYW1lbENhc2UgZXZlbnRzIHdoZW4gdXNpbmcgaW4tRE9NIHRlbXBsYXRlcy4gXCIgK1xuICAgICAgICAgIFwiWW91IHNob3VsZCBwcm9iYWJseSB1c2UgXFxcIlwiICsgKGh5cGhlbmF0ZShldmVudCkpICsgXCJcXFwiIGluc3RlYWQgb2YgXFxcIlwiICsgZXZlbnQgKyBcIlxcXCIuXCJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIGNicyA9IHZtLl9ldmVudHNbZXZlbnRdO1xuICAgIGlmIChjYnMpIHtcbiAgICAgIGNicyA9IGNicy5sZW5ndGggPiAxID8gdG9BcnJheShjYnMpIDogY2JzO1xuICAgICAgdmFyIGFyZ3MgPSB0b0FycmF5KGFyZ3VtZW50cywgMSk7XG4gICAgICB2YXIgaW5mbyA9IFwiZXZlbnQgaGFuZGxlciBmb3IgXFxcIlwiICsgZXZlbnQgKyBcIlxcXCJcIjtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gY2JzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpbnZva2VXaXRoRXJyb3JIYW5kbGluZyhjYnNbaV0sIHZtLCBhcmdzLCB2bSwgaW5mbyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2bVxuICB9O1xufVxuXG4vKiAgKi9cblxudmFyIGFjdGl2ZUluc3RhbmNlID0gbnVsbDtcbnZhciBpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQgPSBmYWxzZTtcblxuZnVuY3Rpb24gc2V0QWN0aXZlSW5zdGFuY2Uodm0pIHtcbiAgdmFyIHByZXZBY3RpdmVJbnN0YW5jZSA9IGFjdGl2ZUluc3RhbmNlO1xuICBhY3RpdmVJbnN0YW5jZSA9IHZtO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGFjdGl2ZUluc3RhbmNlID0gcHJldkFjdGl2ZUluc3RhbmNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRMaWZlY3ljbGUgKHZtKSB7XG4gIHZhciBvcHRpb25zID0gdm0uJG9wdGlvbnM7XG5cbiAgLy8gbG9jYXRlIGZpcnN0IG5vbi1hYnN0cmFjdCBwYXJlbnRcbiAgdmFyIHBhcmVudCA9IG9wdGlvbnMucGFyZW50O1xuICBpZiAocGFyZW50ICYmICFvcHRpb25zLmFic3RyYWN0KSB7XG4gICAgd2hpbGUgKHBhcmVudC4kb3B0aW9ucy5hYnN0cmFjdCAmJiBwYXJlbnQuJHBhcmVudCkge1xuICAgICAgcGFyZW50ID0gcGFyZW50LiRwYXJlbnQ7XG4gICAgfVxuICAgIHBhcmVudC4kY2hpbGRyZW4ucHVzaCh2bSk7XG4gIH1cblxuICB2bS4kcGFyZW50ID0gcGFyZW50O1xuICB2bS4kcm9vdCA9IHBhcmVudCA/IHBhcmVudC4kcm9vdCA6IHZtO1xuXG4gIHZtLiRjaGlsZHJlbiA9IFtdO1xuICB2bS4kcmVmcyA9IHt9O1xuXG4gIHZtLl93YXRjaGVyID0gbnVsbDtcbiAgdm0uX2luYWN0aXZlID0gbnVsbDtcbiAgdm0uX2RpcmVjdEluYWN0aXZlID0gZmFsc2U7XG4gIHZtLl9pc01vdW50ZWQgPSBmYWxzZTtcbiAgdm0uX2lzRGVzdHJveWVkID0gZmFsc2U7XG4gIHZtLl9pc0JlaW5nRGVzdHJveWVkID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGxpZmVjeWNsZU1peGluIChWdWUpIHtcbiAgVnVlLnByb3RvdHlwZS5fdXBkYXRlID0gZnVuY3Rpb24gKHZub2RlLCBoeWRyYXRpbmcpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIHZhciBwcmV2RWwgPSB2bS4kZWw7XG4gICAgdmFyIHByZXZWbm9kZSA9IHZtLl92bm9kZTtcbiAgICB2YXIgcmVzdG9yZUFjdGl2ZUluc3RhbmNlID0gc2V0QWN0aXZlSW5zdGFuY2Uodm0pO1xuICAgIHZtLl92bm9kZSA9IHZub2RlO1xuICAgIC8vIFZ1ZS5wcm90b3R5cGUuX19wYXRjaF9fIGlzIGluamVjdGVkIGluIGVudHJ5IHBvaW50c1xuICAgIC8vIGJhc2VkIG9uIHRoZSByZW5kZXJpbmcgYmFja2VuZCB1c2VkLlxuICAgIGlmICghcHJldlZub2RlKSB7XG4gICAgICAvLyBpbml0aWFsIHJlbmRlclxuICAgICAgdm0uJGVsID0gdm0uX19wYXRjaF9fKHZtLiRlbCwgdm5vZGUsIGh5ZHJhdGluZywgZmFsc2UgLyogcmVtb3ZlT25seSAqLyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHVwZGF0ZXNcbiAgICAgIHZtLiRlbCA9IHZtLl9fcGF0Y2hfXyhwcmV2Vm5vZGUsIHZub2RlKTtcbiAgICB9XG4gICAgcmVzdG9yZUFjdGl2ZUluc3RhbmNlKCk7XG4gICAgLy8gdXBkYXRlIF9fdnVlX18gcmVmZXJlbmNlXG4gICAgaWYgKHByZXZFbCkge1xuICAgICAgcHJldkVsLl9fdnVlX18gPSBudWxsO1xuICAgIH1cbiAgICBpZiAodm0uJGVsKSB7XG4gICAgICB2bS4kZWwuX192dWVfXyA9IHZtO1xuICAgIH1cbiAgICAvLyBpZiBwYXJlbnQgaXMgYW4gSE9DLCB1cGRhdGUgaXRzICRlbCBhcyB3ZWxsXG4gICAgaWYgKHZtLiR2bm9kZSAmJiB2bS4kcGFyZW50ICYmIHZtLiR2bm9kZSA9PT0gdm0uJHBhcmVudC5fdm5vZGUpIHtcbiAgICAgIHZtLiRwYXJlbnQuJGVsID0gdm0uJGVsO1xuICAgIH1cbiAgICAvLyB1cGRhdGVkIGhvb2sgaXMgY2FsbGVkIGJ5IHRoZSBzY2hlZHVsZXIgdG8gZW5zdXJlIHRoYXQgY2hpbGRyZW4gYXJlXG4gICAgLy8gdXBkYXRlZCBpbiBhIHBhcmVudCdzIHVwZGF0ZWQgaG9vay5cbiAgfTtcblxuICBWdWUucHJvdG90eXBlLiRmb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIGlmICh2bS5fd2F0Y2hlcikge1xuICAgICAgdm0uX3dhdGNoZXIudXBkYXRlKCk7XG4gICAgfVxuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuJGRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICBpZiAodm0uX2lzQmVpbmdEZXN0cm95ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjYWxsSG9vayh2bSwgJ2JlZm9yZURlc3Ryb3knKTtcbiAgICB2bS5faXNCZWluZ0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgLy8gcmVtb3ZlIHNlbGYgZnJvbSBwYXJlbnRcbiAgICB2YXIgcGFyZW50ID0gdm0uJHBhcmVudDtcbiAgICBpZiAocGFyZW50ICYmICFwYXJlbnQuX2lzQmVpbmdEZXN0cm95ZWQgJiYgIXZtLiRvcHRpb25zLmFic3RyYWN0KSB7XG4gICAgICByZW1vdmUocGFyZW50LiRjaGlsZHJlbiwgdm0pO1xuICAgIH1cbiAgICAvLyB0ZWFyZG93biB3YXRjaGVyc1xuICAgIGlmICh2bS5fd2F0Y2hlcikge1xuICAgICAgdm0uX3dhdGNoZXIudGVhcmRvd24oKTtcbiAgICB9XG4gICAgdmFyIGkgPSB2bS5fd2F0Y2hlcnMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHZtLl93YXRjaGVyc1tpXS50ZWFyZG93bigpO1xuICAgIH1cbiAgICAvLyByZW1vdmUgcmVmZXJlbmNlIGZyb20gZGF0YSBvYlxuICAgIC8vIGZyb3plbiBvYmplY3QgbWF5IG5vdCBoYXZlIG9ic2VydmVyLlxuICAgIGlmICh2bS5fZGF0YS5fX29iX18pIHtcbiAgICAgIHZtLl9kYXRhLl9fb2JfXy52bUNvdW50LS07XG4gICAgfVxuICAgIC8vIGNhbGwgdGhlIGxhc3QgaG9vay4uLlxuICAgIHZtLl9pc0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgLy8gaW52b2tlIGRlc3Ryb3kgaG9va3Mgb24gY3VycmVudCByZW5kZXJlZCB0cmVlXG4gICAgdm0uX19wYXRjaF9fKHZtLl92bm9kZSwgbnVsbCk7XG4gICAgLy8gZmlyZSBkZXN0cm95ZWQgaG9va1xuICAgIGNhbGxIb29rKHZtLCAnZGVzdHJveWVkJyk7XG4gICAgLy8gdHVybiBvZmYgYWxsIGluc3RhbmNlIGxpc3RlbmVycy5cbiAgICB2bS4kb2ZmKCk7XG4gICAgLy8gcmVtb3ZlIF9fdnVlX18gcmVmZXJlbmNlXG4gICAgaWYgKHZtLiRlbCkge1xuICAgICAgdm0uJGVsLl9fdnVlX18gPSBudWxsO1xuICAgIH1cbiAgICAvLyByZWxlYXNlIGNpcmN1bGFyIHJlZmVyZW5jZSAoIzY3NTkpXG4gICAgaWYgKHZtLiR2bm9kZSkge1xuICAgICAgdm0uJHZub2RlLnBhcmVudCA9IG51bGw7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDaGlsZENvbXBvbmVudCAoXG4gIHZtLFxuICBwcm9wc0RhdGEsXG4gIGxpc3RlbmVycyxcbiAgcGFyZW50Vm5vZGUsXG4gIHJlbmRlckNoaWxkcmVuXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQgPSB0cnVlO1xuICB9XG5cbiAgLy8gZGV0ZXJtaW5lIHdoZXRoZXIgY29tcG9uZW50IGhhcyBzbG90IGNoaWxkcmVuXG4gIC8vIHdlIG5lZWQgdG8gZG8gdGhpcyBiZWZvcmUgb3ZlcndyaXRpbmcgJG9wdGlvbnMuX3JlbmRlckNoaWxkcmVuLlxuXG4gIC8vIGNoZWNrIGlmIHRoZXJlIGFyZSBkeW5hbWljIHNjb3BlZFNsb3RzIChoYW5kLXdyaXR0ZW4gb3IgY29tcGlsZWQgYnV0IHdpdGhcbiAgLy8gZHluYW1pYyBzbG90IG5hbWVzKS4gU3RhdGljIHNjb3BlZCBzbG90cyBjb21waWxlZCBmcm9tIHRlbXBsYXRlIGhhcyB0aGVcbiAgLy8gXCIkc3RhYmxlXCIgbWFya2VyLlxuICB2YXIgbmV3U2NvcGVkU2xvdHMgPSBwYXJlbnRWbm9kZS5kYXRhLnNjb3BlZFNsb3RzO1xuICB2YXIgb2xkU2NvcGVkU2xvdHMgPSB2bS4kc2NvcGVkU2xvdHM7XG4gIHZhciBoYXNEeW5hbWljU2NvcGVkU2xvdCA9ICEhKFxuICAgIChuZXdTY29wZWRTbG90cyAmJiAhbmV3U2NvcGVkU2xvdHMuJHN0YWJsZSkgfHxcbiAgICAob2xkU2NvcGVkU2xvdHMgIT09IGVtcHR5T2JqZWN0ICYmICFvbGRTY29wZWRTbG90cy4kc3RhYmxlKSB8fFxuICAgIChuZXdTY29wZWRTbG90cyAmJiB2bS4kc2NvcGVkU2xvdHMuJGtleSAhPT0gbmV3U2NvcGVkU2xvdHMuJGtleSlcbiAgKTtcblxuICAvLyBBbnkgc3RhdGljIHNsb3QgY2hpbGRyZW4gZnJvbSB0aGUgcGFyZW50IG1heSBoYXZlIGNoYW5nZWQgZHVyaW5nIHBhcmVudCdzXG4gIC8vIHVwZGF0ZS4gRHluYW1pYyBzY29wZWQgc2xvdHMgbWF5IGFsc28gaGF2ZSBjaGFuZ2VkLiBJbiBzdWNoIGNhc2VzLCBhIGZvcmNlZFxuICAvLyB1cGRhdGUgaXMgbmVjZXNzYXJ5IHRvIGVuc3VyZSBjb3JyZWN0bmVzcy5cbiAgdmFyIG5lZWRzRm9yY2VVcGRhdGUgPSAhIShcbiAgICByZW5kZXJDaGlsZHJlbiB8fCAgICAgICAgICAgICAgIC8vIGhhcyBuZXcgc3RhdGljIHNsb3RzXG4gICAgdm0uJG9wdGlvbnMuX3JlbmRlckNoaWxkcmVuIHx8ICAvLyBoYXMgb2xkIHN0YXRpYyBzbG90c1xuICAgIGhhc0R5bmFtaWNTY29wZWRTbG90XG4gICk7XG5cbiAgdm0uJG9wdGlvbnMuX3BhcmVudFZub2RlID0gcGFyZW50Vm5vZGU7XG4gIHZtLiR2bm9kZSA9IHBhcmVudFZub2RlOyAvLyB1cGRhdGUgdm0ncyBwbGFjZWhvbGRlciBub2RlIHdpdGhvdXQgcmUtcmVuZGVyXG5cbiAgaWYgKHZtLl92bm9kZSkgeyAvLyB1cGRhdGUgY2hpbGQgdHJlZSdzIHBhcmVudFxuICAgIHZtLl92bm9kZS5wYXJlbnQgPSBwYXJlbnRWbm9kZTtcbiAgfVxuICB2bS4kb3B0aW9ucy5fcmVuZGVyQ2hpbGRyZW4gPSByZW5kZXJDaGlsZHJlbjtcblxuICAvLyB1cGRhdGUgJGF0dHJzIGFuZCAkbGlzdGVuZXJzIGhhc2hcbiAgLy8gdGhlc2UgYXJlIGFsc28gcmVhY3RpdmUgc28gdGhleSBtYXkgdHJpZ2dlciBjaGlsZCB1cGRhdGUgaWYgdGhlIGNoaWxkXG4gIC8vIHVzZWQgdGhlbSBkdXJpbmcgcmVuZGVyXG4gIHZtLiRhdHRycyA9IHBhcmVudFZub2RlLmRhdGEuYXR0cnMgfHwgZW1wdHlPYmplY3Q7XG4gIHZtLiRsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMgfHwgZW1wdHlPYmplY3Q7XG5cbiAgLy8gdXBkYXRlIHByb3BzXG4gIGlmIChwcm9wc0RhdGEgJiYgdm0uJG9wdGlvbnMucHJvcHMpIHtcbiAgICB0b2dnbGVPYnNlcnZpbmcoZmFsc2UpO1xuICAgIHZhciBwcm9wcyA9IHZtLl9wcm9wcztcbiAgICB2YXIgcHJvcEtleXMgPSB2bS4kb3B0aW9ucy5fcHJvcEtleXMgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IHByb3BLZXlzW2ldO1xuICAgICAgdmFyIHByb3BPcHRpb25zID0gdm0uJG9wdGlvbnMucHJvcHM7IC8vIHd0ZiBmbG93P1xuICAgICAgcHJvcHNba2V5XSA9IHZhbGlkYXRlUHJvcChrZXksIHByb3BPcHRpb25zLCBwcm9wc0RhdGEsIHZtKTtcbiAgICB9XG4gICAgdG9nZ2xlT2JzZXJ2aW5nKHRydWUpO1xuICAgIC8vIGtlZXAgYSBjb3B5IG9mIHJhdyBwcm9wc0RhdGFcbiAgICB2bS4kb3B0aW9ucy5wcm9wc0RhdGEgPSBwcm9wc0RhdGE7XG4gIH1cbiAgXG4gIC8vIGZpeGVkIGJ5IHh4eHh4eCB1cGRhdGUgcHJvcGVydGllcyhtcCBydW50aW1lKVxuICB2bS5fJHVwZGF0ZVByb3BlcnRpZXMgJiYgdm0uXyR1cGRhdGVQcm9wZXJ0aWVzKHZtKTtcbiAgXG4gIC8vIHVwZGF0ZSBsaXN0ZW5lcnNcbiAgbGlzdGVuZXJzID0gbGlzdGVuZXJzIHx8IGVtcHR5T2JqZWN0O1xuICB2YXIgb2xkTGlzdGVuZXJzID0gdm0uJG9wdGlvbnMuX3BhcmVudExpc3RlbmVycztcbiAgdm0uJG9wdGlvbnMuX3BhcmVudExpc3RlbmVycyA9IGxpc3RlbmVycztcbiAgdXBkYXRlQ29tcG9uZW50TGlzdGVuZXJzKHZtLCBsaXN0ZW5lcnMsIG9sZExpc3RlbmVycyk7XG5cbiAgLy8gcmVzb2x2ZSBzbG90cyArIGZvcmNlIHVwZGF0ZSBpZiBoYXMgY2hpbGRyZW5cbiAgaWYgKG5lZWRzRm9yY2VVcGRhdGUpIHtcbiAgICB2bS4kc2xvdHMgPSByZXNvbHZlU2xvdHMocmVuZGVyQ2hpbGRyZW4sIHBhcmVudFZub2RlLmNvbnRleHQpO1xuICAgIHZtLiRmb3JjZVVwZGF0ZSgpO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQgPSBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0luSW5hY3RpdmVUcmVlICh2bSkge1xuICB3aGlsZSAodm0gJiYgKHZtID0gdm0uJHBhcmVudCkpIHtcbiAgICBpZiAodm0uX2luYWN0aXZlKSB7IHJldHVybiB0cnVlIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gYWN0aXZhdGVDaGlsZENvbXBvbmVudCAodm0sIGRpcmVjdCkge1xuICBpZiAoZGlyZWN0KSB7XG4gICAgdm0uX2RpcmVjdEluYWN0aXZlID0gZmFsc2U7XG4gICAgaWYgKGlzSW5JbmFjdGl2ZVRyZWUodm0pKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gIH0gZWxzZSBpZiAodm0uX2RpcmVjdEluYWN0aXZlKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKHZtLl9pbmFjdGl2ZSB8fCB2bS5faW5hY3RpdmUgPT09IG51bGwpIHtcbiAgICB2bS5faW5hY3RpdmUgPSBmYWxzZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZtLiRjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgYWN0aXZhdGVDaGlsZENvbXBvbmVudCh2bS4kY2hpbGRyZW5baV0pO1xuICAgIH1cbiAgICBjYWxsSG9vayh2bSwgJ2FjdGl2YXRlZCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlYWN0aXZhdGVDaGlsZENvbXBvbmVudCAodm0sIGRpcmVjdCkge1xuICBpZiAoZGlyZWN0KSB7XG4gICAgdm0uX2RpcmVjdEluYWN0aXZlID0gdHJ1ZTtcbiAgICBpZiAoaXNJbkluYWN0aXZlVHJlZSh2bSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfVxuICBpZiAoIXZtLl9pbmFjdGl2ZSkge1xuICAgIHZtLl9pbmFjdGl2ZSA9IHRydWU7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2bS4kY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRlYWN0aXZhdGVDaGlsZENvbXBvbmVudCh2bS4kY2hpbGRyZW5baV0pO1xuICAgIH1cbiAgICBjYWxsSG9vayh2bSwgJ2RlYWN0aXZhdGVkJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FsbEhvb2sgKHZtLCBob29rKSB7XG4gIC8vICM3NTczIGRpc2FibGUgZGVwIGNvbGxlY3Rpb24gd2hlbiBpbnZva2luZyBsaWZlY3ljbGUgaG9va3NcbiAgcHVzaFRhcmdldCgpO1xuICB2YXIgaGFuZGxlcnMgPSB2bS4kb3B0aW9uc1tob29rXTtcbiAgdmFyIGluZm8gPSBob29rICsgXCIgaG9va1wiO1xuICBpZiAoaGFuZGxlcnMpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgaiA9IGhhbmRsZXJzLmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgaW52b2tlV2l0aEVycm9ySGFuZGxpbmcoaGFuZGxlcnNbaV0sIHZtLCBudWxsLCB2bSwgaW5mbyk7XG4gICAgfVxuICB9XG4gIGlmICh2bS5faGFzSG9va0V2ZW50KSB7XG4gICAgdm0uJGVtaXQoJ2hvb2s6JyArIGhvb2spO1xuICB9XG4gIHBvcFRhcmdldCgpO1xufVxuXG4vKiAgKi9cblxudmFyIE1BWF9VUERBVEVfQ09VTlQgPSAxMDA7XG5cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGFjdGl2YXRlZENoaWxkcmVuID0gW107XG52YXIgaGFzID0ge307XG52YXIgY2lyY3VsYXIgPSB7fTtcbnZhciB3YWl0aW5nID0gZmFsc2U7XG52YXIgZmx1c2hpbmcgPSBmYWxzZTtcbnZhciBpbmRleCA9IDA7XG5cbi8qKlxuICogUmVzZXQgdGhlIHNjaGVkdWxlcidzIHN0YXRlLlxuICovXG5mdW5jdGlvbiByZXNldFNjaGVkdWxlclN0YXRlICgpIHtcbiAgaW5kZXggPSBxdWV1ZS5sZW5ndGggPSBhY3RpdmF0ZWRDaGlsZHJlbi5sZW5ndGggPSAwO1xuICBoYXMgPSB7fTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjaXJjdWxhciA9IHt9O1xuICB9XG4gIHdhaXRpbmcgPSBmbHVzaGluZyA9IGZhbHNlO1xufVxuXG4vLyBBc3luYyBlZGdlIGNhc2UgIzY1NjYgcmVxdWlyZXMgc2F2aW5nIHRoZSB0aW1lc3RhbXAgd2hlbiBldmVudCBsaXN0ZW5lcnMgYXJlXG4vLyBhdHRhY2hlZC4gSG93ZXZlciwgY2FsbGluZyBwZXJmb3JtYW5jZS5ub3coKSBoYXMgYSBwZXJmIG92ZXJoZWFkIGVzcGVjaWFsbHlcbi8vIGlmIHRoZSBwYWdlIGhhcyB0aG91c2FuZHMgb2YgZXZlbnQgbGlzdGVuZXJzLiBJbnN0ZWFkLCB3ZSB0YWtlIGEgdGltZXN0YW1wXG4vLyBldmVyeSB0aW1lIHRoZSBzY2hlZHVsZXIgZmx1c2hlcyBhbmQgdXNlIHRoYXQgZm9yIGFsbCBldmVudCBsaXN0ZW5lcnNcbi8vIGF0dGFjaGVkIGR1cmluZyB0aGF0IGZsdXNoLlxudmFyIGN1cnJlbnRGbHVzaFRpbWVzdGFtcCA9IDA7XG5cbi8vIEFzeW5jIGVkZ2UgY2FzZSBmaXggcmVxdWlyZXMgc3RvcmluZyBhbiBldmVudCBsaXN0ZW5lcidzIGF0dGFjaCB0aW1lc3RhbXAuXG52YXIgZ2V0Tm93ID0gRGF0ZS5ub3c7XG5cbi8vIERldGVybWluZSB3aGF0IGV2ZW50IHRpbWVzdGFtcCB0aGUgYnJvd3NlciBpcyB1c2luZy4gQW5ub3lpbmdseSwgdGhlXG4vLyB0aW1lc3RhbXAgY2FuIGVpdGhlciBiZSBoaS1yZXMgKHJlbGF0aXZlIHRvIHBhZ2UgbG9hZCkgb3IgbG93LXJlc1xuLy8gKHJlbGF0aXZlIHRvIFVOSVggZXBvY2gpLCBzbyBpbiBvcmRlciB0byBjb21wYXJlIHRpbWUgd2UgaGF2ZSB0byB1c2UgdGhlXG4vLyBzYW1lIHRpbWVzdGFtcCB0eXBlIHdoZW4gc2F2aW5nIHRoZSBmbHVzaCB0aW1lc3RhbXAuXG4vLyBBbGwgSUUgdmVyc2lvbnMgdXNlIGxvdy1yZXMgZXZlbnQgdGltZXN0YW1wcywgYW5kIGhhdmUgcHJvYmxlbWF0aWMgY2xvY2tcbi8vIGltcGxlbWVudGF0aW9ucyAoIzk2MzIpXG5pZiAoaW5Ccm93c2VyICYmICFpc0lFKSB7XG4gIHZhciBwZXJmb3JtYW5jZSA9IHdpbmRvdy5wZXJmb3JtYW5jZTtcbiAgaWYgKFxuICAgIHBlcmZvcm1hbmNlICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm5vdyA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIGdldE5vdygpID4gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50JykudGltZVN0YW1wXG4gICkge1xuICAgIC8vIGlmIHRoZSBldmVudCB0aW1lc3RhbXAsIGFsdGhvdWdoIGV2YWx1YXRlZCBBRlRFUiB0aGUgRGF0ZS5ub3coKSwgaXNcbiAgICAvLyBzbWFsbGVyIHRoYW4gaXQsIGl0IG1lYW5zIHRoZSBldmVudCBpcyB1c2luZyBhIGhpLXJlcyB0aW1lc3RhbXAsXG4gICAgLy8gYW5kIHdlIG5lZWQgdG8gdXNlIHRoZSBoaS1yZXMgdmVyc2lvbiBmb3IgZXZlbnQgbGlzdGVuZXIgdGltZXN0YW1wcyBhc1xuICAgIC8vIHdlbGwuXG4gICAgZ2V0Tm93ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gcGVyZm9ybWFuY2Uubm93KCk7IH07XG4gIH1cbn1cblxuLyoqXG4gKiBGbHVzaCBib3RoIHF1ZXVlcyBhbmQgcnVuIHRoZSB3YXRjaGVycy5cbiAqL1xuZnVuY3Rpb24gZmx1c2hTY2hlZHVsZXJRdWV1ZSAoKSB7XG4gIGN1cnJlbnRGbHVzaFRpbWVzdGFtcCA9IGdldE5vdygpO1xuICBmbHVzaGluZyA9IHRydWU7XG4gIHZhciB3YXRjaGVyLCBpZDtcblxuICAvLyBTb3J0IHF1ZXVlIGJlZm9yZSBmbHVzaC5cbiAgLy8gVGhpcyBlbnN1cmVzIHRoYXQ6XG4gIC8vIDEuIENvbXBvbmVudHMgYXJlIHVwZGF0ZWQgZnJvbSBwYXJlbnQgdG8gY2hpbGQuIChiZWNhdXNlIHBhcmVudCBpcyBhbHdheXNcbiAgLy8gICAgY3JlYXRlZCBiZWZvcmUgdGhlIGNoaWxkKVxuICAvLyAyLiBBIGNvbXBvbmVudCdzIHVzZXIgd2F0Y2hlcnMgYXJlIHJ1biBiZWZvcmUgaXRzIHJlbmRlciB3YXRjaGVyIChiZWNhdXNlXG4gIC8vICAgIHVzZXIgd2F0Y2hlcnMgYXJlIGNyZWF0ZWQgYmVmb3JlIHRoZSByZW5kZXIgd2F0Y2hlcilcbiAgLy8gMy4gSWYgYSBjb21wb25lbnQgaXMgZGVzdHJveWVkIGR1cmluZyBhIHBhcmVudCBjb21wb25lbnQncyB3YXRjaGVyIHJ1bixcbiAgLy8gICAgaXRzIHdhdGNoZXJzIGNhbiBiZSBza2lwcGVkLlxuICBxdWV1ZS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhLmlkIC0gYi5pZDsgfSk7XG5cbiAgLy8gZG8gbm90IGNhY2hlIGxlbmd0aCBiZWNhdXNlIG1vcmUgd2F0Y2hlcnMgbWlnaHQgYmUgcHVzaGVkXG4gIC8vIGFzIHdlIHJ1biBleGlzdGluZyB3YXRjaGVyc1xuICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBxdWV1ZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICB3YXRjaGVyID0gcXVldWVbaW5kZXhdO1xuICAgIGlmICh3YXRjaGVyLmJlZm9yZSkge1xuICAgICAgd2F0Y2hlci5iZWZvcmUoKTtcbiAgICB9XG4gICAgaWQgPSB3YXRjaGVyLmlkO1xuICAgIGhhc1tpZF0gPSBudWxsO1xuICAgIHdhdGNoZXIucnVuKCk7XG4gICAgLy8gaW4gZGV2IGJ1aWxkLCBjaGVjayBhbmQgc3RvcCBjaXJjdWxhciB1cGRhdGVzLlxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGhhc1tpZF0gIT0gbnVsbCkge1xuICAgICAgY2lyY3VsYXJbaWRdID0gKGNpcmN1bGFyW2lkXSB8fCAwKSArIDE7XG4gICAgICBpZiAoY2lyY3VsYXJbaWRdID4gTUFYX1VQREFURV9DT1VOVCkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgICdZb3UgbWF5IGhhdmUgYW4gaW5maW5pdGUgdXBkYXRlIGxvb3AgJyArIChcbiAgICAgICAgICAgIHdhdGNoZXIudXNlclxuICAgICAgICAgICAgICA/IChcImluIHdhdGNoZXIgd2l0aCBleHByZXNzaW9uIFxcXCJcIiArICh3YXRjaGVyLmV4cHJlc3Npb24pICsgXCJcXFwiXCIpXG4gICAgICAgICAgICAgIDogXCJpbiBhIGNvbXBvbmVudCByZW5kZXIgZnVuY3Rpb24uXCJcbiAgICAgICAgICApLFxuICAgICAgICAgIHdhdGNoZXIudm1cbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBrZWVwIGNvcGllcyBvZiBwb3N0IHF1ZXVlcyBiZWZvcmUgcmVzZXR0aW5nIHN0YXRlXG4gIHZhciBhY3RpdmF0ZWRRdWV1ZSA9IGFjdGl2YXRlZENoaWxkcmVuLnNsaWNlKCk7XG4gIHZhciB1cGRhdGVkUXVldWUgPSBxdWV1ZS5zbGljZSgpO1xuXG4gIHJlc2V0U2NoZWR1bGVyU3RhdGUoKTtcblxuICAvLyBjYWxsIGNvbXBvbmVudCB1cGRhdGVkIGFuZCBhY3RpdmF0ZWQgaG9va3NcbiAgY2FsbEFjdGl2YXRlZEhvb2tzKGFjdGl2YXRlZFF1ZXVlKTtcbiAgY2FsbFVwZGF0ZWRIb29rcyh1cGRhdGVkUXVldWUpO1xuXG4gIC8vIGRldnRvb2wgaG9va1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKGRldnRvb2xzICYmIGNvbmZpZy5kZXZ0b29scykge1xuICAgIGRldnRvb2xzLmVtaXQoJ2ZsdXNoJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FsbFVwZGF0ZWRIb29rcyAocXVldWUpIHtcbiAgdmFyIGkgPSBxdWV1ZS5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICB2YXIgd2F0Y2hlciA9IHF1ZXVlW2ldO1xuICAgIHZhciB2bSA9IHdhdGNoZXIudm07XG4gICAgaWYgKHZtLl93YXRjaGVyID09PSB3YXRjaGVyICYmIHZtLl9pc01vdW50ZWQgJiYgIXZtLl9pc0Rlc3Ryb3llZCkge1xuICAgICAgY2FsbEhvb2sodm0sICd1cGRhdGVkJyk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUXVldWUgYSBrZXB0LWFsaXZlIGNvbXBvbmVudCB0aGF0IHdhcyBhY3RpdmF0ZWQgZHVyaW5nIHBhdGNoLlxuICogVGhlIHF1ZXVlIHdpbGwgYmUgcHJvY2Vzc2VkIGFmdGVyIHRoZSBlbnRpcmUgdHJlZSBoYXMgYmVlbiBwYXRjaGVkLlxuICovXG5mdW5jdGlvbiBxdWV1ZUFjdGl2YXRlZENvbXBvbmVudCAodm0pIHtcbiAgLy8gc2V0dGluZyBfaW5hY3RpdmUgdG8gZmFsc2UgaGVyZSBzbyB0aGF0IGEgcmVuZGVyIGZ1bmN0aW9uIGNhblxuICAvLyByZWx5IG9uIGNoZWNraW5nIHdoZXRoZXIgaXQncyBpbiBhbiBpbmFjdGl2ZSB0cmVlIChlLmcuIHJvdXRlci12aWV3KVxuICB2bS5faW5hY3RpdmUgPSBmYWxzZTtcbiAgYWN0aXZhdGVkQ2hpbGRyZW4ucHVzaCh2bSk7XG59XG5cbmZ1bmN0aW9uIGNhbGxBY3RpdmF0ZWRIb29rcyAocXVldWUpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgIHF1ZXVlW2ldLl9pbmFjdGl2ZSA9IHRydWU7XG4gICAgYWN0aXZhdGVDaGlsZENvbXBvbmVudChxdWV1ZVtpXSwgdHJ1ZSAvKiB0cnVlICovKTtcbiAgfVxufVxuXG4vKipcbiAqIFB1c2ggYSB3YXRjaGVyIGludG8gdGhlIHdhdGNoZXIgcXVldWUuXG4gKiBKb2JzIHdpdGggZHVwbGljYXRlIElEcyB3aWxsIGJlIHNraXBwZWQgdW5sZXNzIGl0J3NcbiAqIHB1c2hlZCB3aGVuIHRoZSBxdWV1ZSBpcyBiZWluZyBmbHVzaGVkLlxuICovXG5mdW5jdGlvbiBxdWV1ZVdhdGNoZXIgKHdhdGNoZXIpIHtcbiAgdmFyIGlkID0gd2F0Y2hlci5pZDtcbiAgaWYgKGhhc1tpZF0gPT0gbnVsbCkge1xuICAgIGhhc1tpZF0gPSB0cnVlO1xuICAgIGlmICghZmx1c2hpbmcpIHtcbiAgICAgIHF1ZXVlLnB1c2god2F0Y2hlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGlmIGFscmVhZHkgZmx1c2hpbmcsIHNwbGljZSB0aGUgd2F0Y2hlciBiYXNlZCBvbiBpdHMgaWRcbiAgICAgIC8vIGlmIGFscmVhZHkgcGFzdCBpdHMgaWQsIGl0IHdpbGwgYmUgcnVuIG5leHQgaW1tZWRpYXRlbHkuXG4gICAgICB2YXIgaSA9IHF1ZXVlLmxlbmd0aCAtIDE7XG4gICAgICB3aGlsZSAoaSA+IGluZGV4ICYmIHF1ZXVlW2ldLmlkID4gd2F0Y2hlci5pZCkge1xuICAgICAgICBpLS07XG4gICAgICB9XG4gICAgICBxdWV1ZS5zcGxpY2UoaSArIDEsIDAsIHdhdGNoZXIpO1xuICAgIH1cbiAgICAvLyBxdWV1ZSB0aGUgZmx1c2hcbiAgICBpZiAoIXdhaXRpbmcpIHtcbiAgICAgIHdhaXRpbmcgPSB0cnVlO1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhY29uZmlnLmFzeW5jKSB7XG4gICAgICAgIGZsdXNoU2NoZWR1bGVyUXVldWUoKTtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBuZXh0VGljayhmbHVzaFNjaGVkdWxlclF1ZXVlKTtcbiAgICB9XG4gIH1cbn1cblxuLyogICovXG5cblxuXG52YXIgdWlkJDIgPSAwO1xuXG4vKipcbiAqIEEgd2F0Y2hlciBwYXJzZXMgYW4gZXhwcmVzc2lvbiwgY29sbGVjdHMgZGVwZW5kZW5jaWVzLFxuICogYW5kIGZpcmVzIGNhbGxiYWNrIHdoZW4gdGhlIGV4cHJlc3Npb24gdmFsdWUgY2hhbmdlcy5cbiAqIFRoaXMgaXMgdXNlZCBmb3IgYm90aCB0aGUgJHdhdGNoKCkgYXBpIGFuZCBkaXJlY3RpdmVzLlxuICovXG52YXIgV2F0Y2hlciA9IGZ1bmN0aW9uIFdhdGNoZXIgKFxuICB2bSxcbiAgZXhwT3JGbixcbiAgY2IsXG4gIG9wdGlvbnMsXG4gIGlzUmVuZGVyV2F0Y2hlclxuKSB7XG4gIHRoaXMudm0gPSB2bTtcbiAgaWYgKGlzUmVuZGVyV2F0Y2hlcikge1xuICAgIHZtLl93YXRjaGVyID0gdGhpcztcbiAgfVxuICB2bS5fd2F0Y2hlcnMucHVzaCh0aGlzKTtcbiAgLy8gb3B0aW9uc1xuICBpZiAob3B0aW9ucykge1xuICAgIHRoaXMuZGVlcCA9ICEhb3B0aW9ucy5kZWVwO1xuICAgIHRoaXMudXNlciA9ICEhb3B0aW9ucy51c2VyO1xuICAgIHRoaXMubGF6eSA9ICEhb3B0aW9ucy5sYXp5O1xuICAgIHRoaXMuc3luYyA9ICEhb3B0aW9ucy5zeW5jO1xuICAgIHRoaXMuYmVmb3JlID0gb3B0aW9ucy5iZWZvcmU7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5kZWVwID0gdGhpcy51c2VyID0gdGhpcy5sYXp5ID0gdGhpcy5zeW5jID0gZmFsc2U7XG4gIH1cbiAgdGhpcy5jYiA9IGNiO1xuICB0aGlzLmlkID0gKyt1aWQkMjsgLy8gdWlkIGZvciBiYXRjaGluZ1xuICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gIHRoaXMuZGlydHkgPSB0aGlzLmxhenk7IC8vIGZvciBsYXp5IHdhdGNoZXJzXG4gIHRoaXMuZGVwcyA9IFtdO1xuICB0aGlzLm5ld0RlcHMgPSBbXTtcbiAgdGhpcy5kZXBJZHMgPSBuZXcgX1NldCgpO1xuICB0aGlzLm5ld0RlcElkcyA9IG5ldyBfU2V0KCk7XG4gIHRoaXMuZXhwcmVzc2lvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbidcbiAgICA/IGV4cE9yRm4udG9TdHJpbmcoKVxuICAgIDogJyc7XG4gIC8vIHBhcnNlIGV4cHJlc3Npb24gZm9yIGdldHRlclxuICBpZiAodHlwZW9mIGV4cE9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICB0aGlzLmdldHRlciA9IGV4cE9yRm47XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5nZXR0ZXIgPSBwYXJzZVBhdGgoZXhwT3JGbik7XG4gICAgaWYgKCF0aGlzLmdldHRlcikge1xuICAgICAgdGhpcy5nZXR0ZXIgPSBub29wO1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgICBcIkZhaWxlZCB3YXRjaGluZyBwYXRoOiBcXFwiXCIgKyBleHBPckZuICsgXCJcXFwiIFwiICtcbiAgICAgICAgJ1dhdGNoZXIgb25seSBhY2NlcHRzIHNpbXBsZSBkb3QtZGVsaW1pdGVkIHBhdGhzLiAnICtcbiAgICAgICAgJ0ZvciBmdWxsIGNvbnRyb2wsIHVzZSBhIGZ1bmN0aW9uIGluc3RlYWQuJyxcbiAgICAgICAgdm1cbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHRoaXMudmFsdWUgPSB0aGlzLmxhenlcbiAgICA/IHVuZGVmaW5lZFxuICAgIDogdGhpcy5nZXQoKTtcbn07XG5cbi8qKlxuICogRXZhbHVhdGUgdGhlIGdldHRlciwgYW5kIHJlLWNvbGxlY3QgZGVwZW5kZW5jaWVzLlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQgKCkge1xuICBwdXNoVGFyZ2V0KHRoaXMpO1xuICB2YXIgdmFsdWU7XG4gIHZhciB2bSA9IHRoaXMudm07XG4gIHRyeSB7XG4gICAgdmFsdWUgPSB0aGlzLmdldHRlci5jYWxsKHZtLCB2bSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAodGhpcy51c2VyKSB7XG4gICAgICBoYW5kbGVFcnJvcihlLCB2bSwgKFwiZ2V0dGVyIGZvciB3YXRjaGVyIFxcXCJcIiArICh0aGlzLmV4cHJlc3Npb24pICsgXCJcXFwiXCIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgZVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICAvLyBcInRvdWNoXCIgZXZlcnkgcHJvcGVydHkgc28gdGhleSBhcmUgYWxsIHRyYWNrZWQgYXNcbiAgICAvLyBkZXBlbmRlbmNpZXMgZm9yIGRlZXAgd2F0Y2hpbmdcbiAgICBpZiAodGhpcy5kZWVwKSB7XG4gICAgICB0cmF2ZXJzZSh2YWx1ZSk7XG4gICAgfVxuICAgIHBvcFRhcmdldCgpO1xuICAgIHRoaXMuY2xlYW51cERlcHMoKTtcbiAgfVxuICByZXR1cm4gdmFsdWVcbn07XG5cbi8qKlxuICogQWRkIGEgZGVwZW5kZW5jeSB0byB0aGlzIGRpcmVjdGl2ZS5cbiAqL1xuV2F0Y2hlci5wcm90b3R5cGUuYWRkRGVwID0gZnVuY3Rpb24gYWRkRGVwIChkZXApIHtcbiAgdmFyIGlkID0gZGVwLmlkO1xuICBpZiAoIXRoaXMubmV3RGVwSWRzLmhhcyhpZCkpIHtcbiAgICB0aGlzLm5ld0RlcElkcy5hZGQoaWQpO1xuICAgIHRoaXMubmV3RGVwcy5wdXNoKGRlcCk7XG4gICAgaWYgKCF0aGlzLmRlcElkcy5oYXMoaWQpKSB7XG4gICAgICBkZXAuYWRkU3ViKHRoaXMpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBDbGVhbiB1cCBmb3IgZGVwZW5kZW5jeSBjb2xsZWN0aW9uLlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS5jbGVhbnVwRGVwcyA9IGZ1bmN0aW9uIGNsZWFudXBEZXBzICgpIHtcbiAgdmFyIGkgPSB0aGlzLmRlcHMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgdmFyIGRlcCA9IHRoaXMuZGVwc1tpXTtcbiAgICBpZiAoIXRoaXMubmV3RGVwSWRzLmhhcyhkZXAuaWQpKSB7XG4gICAgICBkZXAucmVtb3ZlU3ViKHRoaXMpO1xuICAgIH1cbiAgfVxuICB2YXIgdG1wID0gdGhpcy5kZXBJZHM7XG4gIHRoaXMuZGVwSWRzID0gdGhpcy5uZXdEZXBJZHM7XG4gIHRoaXMubmV3RGVwSWRzID0gdG1wO1xuICB0aGlzLm5ld0RlcElkcy5jbGVhcigpO1xuICB0bXAgPSB0aGlzLmRlcHM7XG4gIHRoaXMuZGVwcyA9IHRoaXMubmV3RGVwcztcbiAgdGhpcy5uZXdEZXBzID0gdG1wO1xuICB0aGlzLm5ld0RlcHMubGVuZ3RoID0gMDtcbn07XG5cbi8qKlxuICogU3Vic2NyaWJlciBpbnRlcmZhY2UuXG4gKiBXaWxsIGJlIGNhbGxlZCB3aGVuIGEgZGVwZW5kZW5jeSBjaGFuZ2VzLlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUgKCkge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAodGhpcy5sYXp5KSB7XG4gICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gIH0gZWxzZSBpZiAodGhpcy5zeW5jKSB7XG4gICAgdGhpcy5ydW4oKTtcbiAgfSBlbHNlIHtcbiAgICBxdWV1ZVdhdGNoZXIodGhpcyk7XG4gIH1cbn07XG5cbi8qKlxuICogU2NoZWR1bGVyIGpvYiBpbnRlcmZhY2UuXG4gKiBXaWxsIGJlIGNhbGxlZCBieSB0aGUgc2NoZWR1bGVyLlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiBydW4gKCkge1xuICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICB2YXIgdmFsdWUgPSB0aGlzLmdldCgpO1xuICAgIGlmIChcbiAgICAgIHZhbHVlICE9PSB0aGlzLnZhbHVlIHx8XG4gICAgICAvLyBEZWVwIHdhdGNoZXJzIGFuZCB3YXRjaGVycyBvbiBPYmplY3QvQXJyYXlzIHNob3VsZCBmaXJlIGV2ZW5cbiAgICAgIC8vIHdoZW4gdGhlIHZhbHVlIGlzIHRoZSBzYW1lLCBiZWNhdXNlIHRoZSB2YWx1ZSBtYXlcbiAgICAgIC8vIGhhdmUgbXV0YXRlZC5cbiAgICAgIGlzT2JqZWN0KHZhbHVlKSB8fFxuICAgICAgdGhpcy5kZWVwXG4gICAgKSB7XG4gICAgICAvLyBzZXQgbmV3IHZhbHVlXG4gICAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgaWYgKHRoaXMudXNlcikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoaXMuY2IuY2FsbCh0aGlzLnZtLCB2YWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgaGFuZGxlRXJyb3IoZSwgdGhpcy52bSwgKFwiY2FsbGJhY2sgZm9yIHdhdGNoZXIgXFxcIlwiICsgKHRoaXMuZXhwcmVzc2lvbikgKyBcIlxcXCJcIikpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNiLmNhbGwodGhpcy52bSwgdmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogRXZhbHVhdGUgdGhlIHZhbHVlIG9mIHRoZSB3YXRjaGVyLlxuICogVGhpcyBvbmx5IGdldHMgY2FsbGVkIGZvciBsYXp5IHdhdGNoZXJzLlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS5ldmFsdWF0ZSA9IGZ1bmN0aW9uIGV2YWx1YXRlICgpIHtcbiAgdGhpcy52YWx1ZSA9IHRoaXMuZ2V0KCk7XG4gIHRoaXMuZGlydHkgPSBmYWxzZTtcbn07XG5cbi8qKlxuICogRGVwZW5kIG9uIGFsbCBkZXBzIGNvbGxlY3RlZCBieSB0aGlzIHdhdGNoZXIuXG4gKi9cbldhdGNoZXIucHJvdG90eXBlLmRlcGVuZCA9IGZ1bmN0aW9uIGRlcGVuZCAoKSB7XG4gIHZhciBpID0gdGhpcy5kZXBzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIHRoaXMuZGVwc1tpXS5kZXBlbmQoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZW1vdmUgc2VsZiBmcm9tIGFsbCBkZXBlbmRlbmNpZXMnIHN1YnNjcmliZXIgbGlzdC5cbiAqL1xuV2F0Y2hlci5wcm90b3R5cGUudGVhcmRvd24gPSBmdW5jdGlvbiB0ZWFyZG93biAoKSB7XG4gIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgIC8vIHJlbW92ZSBzZWxmIGZyb20gdm0ncyB3YXRjaGVyIGxpc3RcbiAgICAvLyB0aGlzIGlzIGEgc29tZXdoYXQgZXhwZW5zaXZlIG9wZXJhdGlvbiBzbyB3ZSBza2lwIGl0XG4gICAgLy8gaWYgdGhlIHZtIGlzIGJlaW5nIGRlc3Ryb3llZC5cbiAgICBpZiAoIXRoaXMudm0uX2lzQmVpbmdEZXN0cm95ZWQpIHtcbiAgICAgIHJlbW92ZSh0aGlzLnZtLl93YXRjaGVycywgdGhpcyk7XG4gICAgfVxuICAgIHZhciBpID0gdGhpcy5kZXBzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB0aGlzLmRlcHNbaV0ucmVtb3ZlU3ViKHRoaXMpO1xuICAgIH1cbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICB9XG59O1xuXG4vKiAgKi9cblxudmFyIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbiA9IHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgY29uZmlndXJhYmxlOiB0cnVlLFxuICBnZXQ6IG5vb3AsXG4gIHNldDogbm9vcFxufTtcblxuZnVuY3Rpb24gcHJveHkgKHRhcmdldCwgc291cmNlS2V5LCBrZXkpIHtcbiAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLmdldCA9IGZ1bmN0aW9uIHByb3h5R2V0dGVyICgpIHtcbiAgICByZXR1cm4gdGhpc1tzb3VyY2VLZXldW2tleV1cbiAgfTtcbiAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLnNldCA9IGZ1bmN0aW9uIHByb3h5U2V0dGVyICh2YWwpIHtcbiAgICB0aGlzW3NvdXJjZUtleV1ba2V5XSA9IHZhbDtcbiAgfTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24pO1xufVxuXG5mdW5jdGlvbiBpbml0U3RhdGUgKHZtKSB7XG4gIHZtLl93YXRjaGVycyA9IFtdO1xuICB2YXIgb3B0cyA9IHZtLiRvcHRpb25zO1xuICBpZiAob3B0cy5wcm9wcykgeyBpbml0UHJvcHModm0sIG9wdHMucHJvcHMpOyB9XG4gIGlmIChvcHRzLm1ldGhvZHMpIHsgaW5pdE1ldGhvZHModm0sIG9wdHMubWV0aG9kcyk7IH1cbiAgaWYgKG9wdHMuZGF0YSkge1xuICAgIGluaXREYXRhKHZtKTtcbiAgfSBlbHNlIHtcbiAgICBvYnNlcnZlKHZtLl9kYXRhID0ge30sIHRydWUgLyogYXNSb290RGF0YSAqLyk7XG4gIH1cbiAgaWYgKG9wdHMuY29tcHV0ZWQpIHsgaW5pdENvbXB1dGVkKHZtLCBvcHRzLmNvbXB1dGVkKTsgfVxuICBpZiAob3B0cy53YXRjaCAmJiBvcHRzLndhdGNoICE9PSBuYXRpdmVXYXRjaCkge1xuICAgIGluaXRXYXRjaCh2bSwgb3B0cy53YXRjaCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdFByb3BzICh2bSwgcHJvcHNPcHRpb25zKSB7XG4gIHZhciBwcm9wc0RhdGEgPSB2bS4kb3B0aW9ucy5wcm9wc0RhdGEgfHwge307XG4gIHZhciBwcm9wcyA9IHZtLl9wcm9wcyA9IHt9O1xuICAvLyBjYWNoZSBwcm9wIGtleXMgc28gdGhhdCBmdXR1cmUgcHJvcHMgdXBkYXRlcyBjYW4gaXRlcmF0ZSB1c2luZyBBcnJheVxuICAvLyBpbnN0ZWFkIG9mIGR5bmFtaWMgb2JqZWN0IGtleSBlbnVtZXJhdGlvbi5cbiAgdmFyIGtleXMgPSB2bS4kb3B0aW9ucy5fcHJvcEtleXMgPSBbXTtcbiAgdmFyIGlzUm9vdCA9ICF2bS4kcGFyZW50O1xuICAvLyByb290IGluc3RhbmNlIHByb3BzIHNob3VsZCBiZSBjb252ZXJ0ZWRcbiAgaWYgKCFpc1Jvb3QpIHtcbiAgICB0b2dnbGVPYnNlcnZpbmcoZmFsc2UpO1xuICB9XG4gIHZhciBsb29wID0gZnVuY3Rpb24gKCBrZXkgKSB7XG4gICAga2V5cy5wdXNoKGtleSk7XG4gICAgdmFyIHZhbHVlID0gdmFsaWRhdGVQcm9wKGtleSwgcHJvcHNPcHRpb25zLCBwcm9wc0RhdGEsIHZtKTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgaHlwaGVuYXRlZEtleSA9IGh5cGhlbmF0ZShrZXkpO1xuICAgICAgaWYgKGlzUmVzZXJ2ZWRBdHRyaWJ1dGUoaHlwaGVuYXRlZEtleSkgfHxcbiAgICAgICAgICBjb25maWcuaXNSZXNlcnZlZEF0dHIoaHlwaGVuYXRlZEtleSkpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAoXCJcXFwiXCIgKyBoeXBoZW5hdGVkS2V5ICsgXCJcXFwiIGlzIGEgcmVzZXJ2ZWQgYXR0cmlidXRlIGFuZCBjYW5ub3QgYmUgdXNlZCBhcyBjb21wb25lbnQgcHJvcC5cIiksXG4gICAgICAgICAgdm1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGRlZmluZVJlYWN0aXZlJCQxKHByb3BzLCBrZXksIHZhbHVlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNSb290ICYmICFpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQpIHtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZih2bS5tcEhvc3QgPT09ICdtcC1iYWlkdScpey8v55m+5bqmIG9ic2VydmVyIOWcqCBzZXREYXRhIGNhbGxiYWNrIOS5i+WQjuinpuWPke+8jOebtOaOpeW/veeVpeivpSB3YXJuXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2ZpeGVkIGJ5IHh4eHh4eCBfX25leHRfdGlja19wZW5kaW5nLHVuaTovL2Zvcm0tZmllbGQg5pe25LiN5ZGK6K2mXG4gICAgICAgICAgICBpZihcbiAgICAgICAgICAgICAgICBrZXkgPT09ICd2YWx1ZScgJiYgXG4gICAgICAgICAgICAgICAgQXJyYXkuaXNBcnJheSh2bS4kb3B0aW9ucy5iZWhhdmlvcnMpICYmXG4gICAgICAgICAgICAgICAgdm0uJG9wdGlvbnMuYmVoYXZpb3JzLmluZGV4T2YoJ3VuaTovL2Zvcm0tZmllbGQnKSAhPT0gLTFcbiAgICAgICAgICAgICAgKXtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih2bS5fZ2V0Rm9ybURhdGEpe1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciAkcGFyZW50ID0gdm0uJHBhcmVudDtcbiAgICAgICAgICAgIHdoaWxlKCRwYXJlbnQpe1xuICAgICAgICAgICAgICBpZigkcGFyZW50Ll9fbmV4dF90aWNrX3BlbmRpbmcpe1xuICAgICAgICAgICAgICAgIHJldHVybiAgXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgJHBhcmVudCA9ICRwYXJlbnQuJHBhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIFwiQXZvaWQgbXV0YXRpbmcgYSBwcm9wIGRpcmVjdGx5IHNpbmNlIHRoZSB2YWx1ZSB3aWxsIGJlIFwiICtcbiAgICAgICAgICAgIFwib3ZlcndyaXR0ZW4gd2hlbmV2ZXIgdGhlIHBhcmVudCBjb21wb25lbnQgcmUtcmVuZGVycy4gXCIgK1xuICAgICAgICAgICAgXCJJbnN0ZWFkLCB1c2UgYSBkYXRhIG9yIGNvbXB1dGVkIHByb3BlcnR5IGJhc2VkIG9uIHRoZSBwcm9wJ3MgXCIgK1xuICAgICAgICAgICAgXCJ2YWx1ZS4gUHJvcCBiZWluZyBtdXRhdGVkOiBcXFwiXCIgKyBrZXkgKyBcIlxcXCJcIixcbiAgICAgICAgICAgIHZtXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlZmluZVJlYWN0aXZlJCQxKHByb3BzLCBrZXksIHZhbHVlKTtcbiAgICB9XG4gICAgLy8gc3RhdGljIHByb3BzIGFyZSBhbHJlYWR5IHByb3hpZWQgb24gdGhlIGNvbXBvbmVudCdzIHByb3RvdHlwZVxuICAgIC8vIGR1cmluZyBWdWUuZXh0ZW5kKCkuIFdlIG9ubHkgbmVlZCB0byBwcm94eSBwcm9wcyBkZWZpbmVkIGF0XG4gICAgLy8gaW5zdGFudGlhdGlvbiBoZXJlLlxuICAgIGlmICghKGtleSBpbiB2bSkpIHtcbiAgICAgIHByb3h5KHZtLCBcIl9wcm9wc1wiLCBrZXkpO1xuICAgIH1cbiAgfTtcblxuICBmb3IgKHZhciBrZXkgaW4gcHJvcHNPcHRpb25zKSBsb29wKCBrZXkgKTtcbiAgdG9nZ2xlT2JzZXJ2aW5nKHRydWUpO1xufVxuXG5mdW5jdGlvbiBpbml0RGF0YSAodm0pIHtcbiAgdmFyIGRhdGEgPSB2bS4kb3B0aW9ucy5kYXRhO1xuICBkYXRhID0gdm0uX2RhdGEgPSB0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gZ2V0RGF0YShkYXRhLCB2bSlcbiAgICA6IGRhdGEgfHwge307XG4gIGlmICghaXNQbGFpbk9iamVjdChkYXRhKSkge1xuICAgIGRhdGEgPSB7fTtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAnZGF0YSBmdW5jdGlvbnMgc2hvdWxkIHJldHVybiBhbiBvYmplY3Q6XFxuJyArXG4gICAgICAnaHR0cHM6Ly92dWVqcy5vcmcvdjIvZ3VpZGUvY29tcG9uZW50cy5odG1sI2RhdGEtTXVzdC1CZS1hLUZ1bmN0aW9uJyxcbiAgICAgIHZtXG4gICAgKTtcbiAgfVxuICAvLyBwcm94eSBkYXRhIG9uIGluc3RhbmNlXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZGF0YSk7XG4gIHZhciBwcm9wcyA9IHZtLiRvcHRpb25zLnByb3BzO1xuICB2YXIgbWV0aG9kcyA9IHZtLiRvcHRpb25zLm1ldGhvZHM7XG4gIHZhciBpID0ga2V5cy5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKG1ldGhvZHMgJiYgaGFzT3duKG1ldGhvZHMsIGtleSkpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAoXCJNZXRob2QgXFxcIlwiICsga2V5ICsgXCJcXFwiIGhhcyBhbHJlYWR5IGJlZW4gZGVmaW5lZCBhcyBhIGRhdGEgcHJvcGVydHkuXCIpLFxuICAgICAgICAgIHZtXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChwcm9wcyAmJiBoYXNPd24ocHJvcHMsIGtleSkpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgXCJUaGUgZGF0YSBwcm9wZXJ0eSBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaXMgYWxyZWFkeSBkZWNsYXJlZCBhcyBhIHByb3AuIFwiICtcbiAgICAgICAgXCJVc2UgcHJvcCBkZWZhdWx0IHZhbHVlIGluc3RlYWQuXCIsXG4gICAgICAgIHZtXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoIWlzUmVzZXJ2ZWQoa2V5KSkge1xuICAgICAgcHJveHkodm0sIFwiX2RhdGFcIiwga2V5KTtcbiAgICB9XG4gIH1cbiAgLy8gb2JzZXJ2ZSBkYXRhXG4gIG9ic2VydmUoZGF0YSwgdHJ1ZSAvKiBhc1Jvb3REYXRhICovKTtcbn1cblxuZnVuY3Rpb24gZ2V0RGF0YSAoZGF0YSwgdm0pIHtcbiAgLy8gIzc1NzMgZGlzYWJsZSBkZXAgY29sbGVjdGlvbiB3aGVuIGludm9raW5nIGRhdGEgZ2V0dGVyc1xuICBwdXNoVGFyZ2V0KCk7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRhdGEuY2FsbCh2bSwgdm0pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBoYW5kbGVFcnJvcihlLCB2bSwgXCJkYXRhKClcIik7XG4gICAgcmV0dXJuIHt9XG4gIH0gZmluYWxseSB7XG4gICAgcG9wVGFyZ2V0KCk7XG4gIH1cbn1cblxudmFyIGNvbXB1dGVkV2F0Y2hlck9wdGlvbnMgPSB7IGxhenk6IHRydWUgfTtcblxuZnVuY3Rpb24gaW5pdENvbXB1dGVkICh2bSwgY29tcHV0ZWQpIHtcbiAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gIHZhciB3YXRjaGVycyA9IHZtLl9jb21wdXRlZFdhdGNoZXJzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgLy8gY29tcHV0ZWQgcHJvcGVydGllcyBhcmUganVzdCBnZXR0ZXJzIGR1cmluZyBTU1JcbiAgdmFyIGlzU1NSID0gaXNTZXJ2ZXJSZW5kZXJpbmcoKTtcblxuICBmb3IgKHZhciBrZXkgaW4gY29tcHV0ZWQpIHtcbiAgICB2YXIgdXNlckRlZiA9IGNvbXB1dGVkW2tleV07XG4gICAgdmFyIGdldHRlciA9IHR5cGVvZiB1c2VyRGVmID09PSAnZnVuY3Rpb24nID8gdXNlckRlZiA6IHVzZXJEZWYuZ2V0O1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGdldHRlciA9PSBudWxsKSB7XG4gICAgICB3YXJuKFxuICAgICAgICAoXCJHZXR0ZXIgaXMgbWlzc2luZyBmb3IgY29tcHV0ZWQgcHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiLlwiKSxcbiAgICAgICAgdm1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKCFpc1NTUikge1xuICAgICAgLy8gY3JlYXRlIGludGVybmFsIHdhdGNoZXIgZm9yIHRoZSBjb21wdXRlZCBwcm9wZXJ0eS5cbiAgICAgIHdhdGNoZXJzW2tleV0gPSBuZXcgV2F0Y2hlcihcbiAgICAgICAgdm0sXG4gICAgICAgIGdldHRlciB8fCBub29wLFxuICAgICAgICBub29wLFxuICAgICAgICBjb21wdXRlZFdhdGNoZXJPcHRpb25zXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIGNvbXBvbmVudC1kZWZpbmVkIGNvbXB1dGVkIHByb3BlcnRpZXMgYXJlIGFscmVhZHkgZGVmaW5lZCBvbiB0aGVcbiAgICAvLyBjb21wb25lbnQgcHJvdG90eXBlLiBXZSBvbmx5IG5lZWQgdG8gZGVmaW5lIGNvbXB1dGVkIHByb3BlcnRpZXMgZGVmaW5lZFxuICAgIC8vIGF0IGluc3RhbnRpYXRpb24gaGVyZS5cbiAgICBpZiAoIShrZXkgaW4gdm0pKSB7XG4gICAgICBkZWZpbmVDb21wdXRlZCh2bSwga2V5LCB1c2VyRGVmKTtcbiAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChrZXkgaW4gdm0uJGRhdGEpIHtcbiAgICAgICAgd2FybigoXCJUaGUgY29tcHV0ZWQgcHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiIGlzIGFscmVhZHkgZGVmaW5lZCBpbiBkYXRhLlwiKSwgdm0pO1xuICAgICAgfSBlbHNlIGlmICh2bS4kb3B0aW9ucy5wcm9wcyAmJiBrZXkgaW4gdm0uJG9wdGlvbnMucHJvcHMpIHtcbiAgICAgICAgd2FybigoXCJUaGUgY29tcHV0ZWQgcHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiIGlzIGFscmVhZHkgZGVmaW5lZCBhcyBhIHByb3AuXCIpLCB2bSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZUNvbXB1dGVkIChcbiAgdGFyZ2V0LFxuICBrZXksXG4gIHVzZXJEZWZcbikge1xuICB2YXIgc2hvdWxkQ2FjaGUgPSAhaXNTZXJ2ZXJSZW5kZXJpbmcoKTtcbiAgaWYgKHR5cGVvZiB1c2VyRGVmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLmdldCA9IHNob3VsZENhY2hlXG4gICAgICA/IGNyZWF0ZUNvbXB1dGVkR2V0dGVyKGtleSlcbiAgICAgIDogY3JlYXRlR2V0dGVySW52b2tlcih1c2VyRGVmKTtcbiAgICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uc2V0ID0gbm9vcDtcbiAgfSBlbHNlIHtcbiAgICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uZ2V0ID0gdXNlckRlZi5nZXRcbiAgICAgID8gc2hvdWxkQ2FjaGUgJiYgdXNlckRlZi5jYWNoZSAhPT0gZmFsc2VcbiAgICAgICAgPyBjcmVhdGVDb21wdXRlZEdldHRlcihrZXkpXG4gICAgICAgIDogY3JlYXRlR2V0dGVySW52b2tlcih1c2VyRGVmLmdldClcbiAgICAgIDogbm9vcDtcbiAgICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uc2V0ID0gdXNlckRlZi5zZXQgfHwgbm9vcDtcbiAgfVxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLnNldCA9PT0gbm9vcCkge1xuICAgIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5zZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB3YXJuKFxuICAgICAgICAoXCJDb21wdXRlZCBwcm9wZXJ0eSBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgd2FzIGFzc2lnbmVkIHRvIGJ1dCBpdCBoYXMgbm8gc2V0dGVyLlwiKSxcbiAgICAgICAgdGhpc1xuICAgICAgKTtcbiAgICB9O1xuICB9XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29tcHV0ZWRHZXR0ZXIgKGtleSkge1xuICByZXR1cm4gZnVuY3Rpb24gY29tcHV0ZWRHZXR0ZXIgKCkge1xuICAgIHZhciB3YXRjaGVyID0gdGhpcy5fY29tcHV0ZWRXYXRjaGVycyAmJiB0aGlzLl9jb21wdXRlZFdhdGNoZXJzW2tleV07XG4gICAgaWYgKHdhdGNoZXIpIHtcbiAgICAgIGlmICh3YXRjaGVyLmRpcnR5KSB7XG4gICAgICAgIHdhdGNoZXIuZXZhbHVhdGUoKTtcbiAgICAgIH1cbiAgICAgIGlmIChEZXAuU2hhcmVkT2JqZWN0LnRhcmdldCkgey8vIGZpeGVkIGJ5IHh4eHh4eFxuICAgICAgICB3YXRjaGVyLmRlcGVuZCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHdhdGNoZXIudmFsdWVcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlR2V0dGVySW52b2tlcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gY29tcHV0ZWRHZXR0ZXIgKCkge1xuICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIHRoaXMpXG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdE1ldGhvZHMgKHZtLCBtZXRob2RzKSB7XG4gIHZhciBwcm9wcyA9IHZtLiRvcHRpb25zLnByb3BzO1xuICBmb3IgKHZhciBrZXkgaW4gbWV0aG9kcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIG1ldGhvZHNba2V5XSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgIFwiTWV0aG9kIFxcXCJcIiArIGtleSArIFwiXFxcIiBoYXMgdHlwZSBcXFwiXCIgKyAodHlwZW9mIG1ldGhvZHNba2V5XSkgKyBcIlxcXCIgaW4gdGhlIGNvbXBvbmVudCBkZWZpbml0aW9uLiBcIiArXG4gICAgICAgICAgXCJEaWQgeW91IHJlZmVyZW5jZSB0aGUgZnVuY3Rpb24gY29ycmVjdGx5P1wiLFxuICAgICAgICAgIHZtXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAocHJvcHMgJiYgaGFzT3duKHByb3BzLCBrZXkpKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgKFwiTWV0aG9kIFxcXCJcIiArIGtleSArIFwiXFxcIiBoYXMgYWxyZWFkeSBiZWVuIGRlZmluZWQgYXMgYSBwcm9wLlwiKSxcbiAgICAgICAgICB2bVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKChrZXkgaW4gdm0pICYmIGlzUmVzZXJ2ZWQoa2V5KSkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgIFwiTWV0aG9kIFxcXCJcIiArIGtleSArIFwiXFxcIiBjb25mbGljdHMgd2l0aCBhbiBleGlzdGluZyBWdWUgaW5zdGFuY2UgbWV0aG9kLiBcIiArXG4gICAgICAgICAgXCJBdm9pZCBkZWZpbmluZyBjb21wb25lbnQgbWV0aG9kcyB0aGF0IHN0YXJ0IHdpdGggXyBvciAkLlwiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHZtW2tleV0gPSB0eXBlb2YgbWV0aG9kc1trZXldICE9PSAnZnVuY3Rpb24nID8gbm9vcCA6IGJpbmQobWV0aG9kc1trZXldLCB2bSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdFdhdGNoICh2bSwgd2F0Y2gpIHtcbiAgZm9yICh2YXIga2V5IGluIHdhdGNoKSB7XG4gICAgdmFyIGhhbmRsZXIgPSB3YXRjaFtrZXldO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGhhbmRsZXIpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhhbmRsZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY3JlYXRlV2F0Y2hlcih2bSwga2V5LCBoYW5kbGVyW2ldKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY3JlYXRlV2F0Y2hlcih2bSwga2V5LCBoYW5kbGVyKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlV2F0Y2hlciAoXG4gIHZtLFxuICBleHBPckZuLFxuICBoYW5kbGVyLFxuICBvcHRpb25zXG4pIHtcbiAgaWYgKGlzUGxhaW5PYmplY3QoaGFuZGxlcikpIHtcbiAgICBvcHRpb25zID0gaGFuZGxlcjtcbiAgICBoYW5kbGVyID0gaGFuZGxlci5oYW5kbGVyO1xuICB9XG4gIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ3N0cmluZycpIHtcbiAgICBoYW5kbGVyID0gdm1baGFuZGxlcl07XG4gIH1cbiAgcmV0dXJuIHZtLiR3YXRjaChleHBPckZuLCBoYW5kbGVyLCBvcHRpb25zKVxufVxuXG5mdW5jdGlvbiBzdGF0ZU1peGluIChWdWUpIHtcbiAgLy8gZmxvdyBzb21laG93IGhhcyBwcm9ibGVtcyB3aXRoIGRpcmVjdGx5IGRlY2xhcmVkIGRlZmluaXRpb24gb2JqZWN0XG4gIC8vIHdoZW4gdXNpbmcgT2JqZWN0LmRlZmluZVByb3BlcnR5LCBzbyB3ZSBoYXZlIHRvIHByb2NlZHVyYWxseSBidWlsZCB1cFxuICAvLyB0aGUgb2JqZWN0IGhlcmUuXG4gIHZhciBkYXRhRGVmID0ge307XG4gIGRhdGFEZWYuZ2V0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fZGF0YSB9O1xuICB2YXIgcHJvcHNEZWYgPSB7fTtcbiAgcHJvcHNEZWYuZ2V0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fcHJvcHMgfTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBkYXRhRGVmLnNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgICdBdm9pZCByZXBsYWNpbmcgaW5zdGFuY2Ugcm9vdCAkZGF0YS4gJyArXG4gICAgICAgICdVc2UgbmVzdGVkIGRhdGEgcHJvcGVydGllcyBpbnN0ZWFkLicsXG4gICAgICAgIHRoaXNcbiAgICAgICk7XG4gICAgfTtcbiAgICBwcm9wc0RlZi5zZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB3YXJuKFwiJHByb3BzIGlzIHJlYWRvbmx5LlwiLCB0aGlzKTtcbiAgICB9O1xuICB9XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUucHJvdG90eXBlLCAnJGRhdGEnLCBkYXRhRGVmKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZ1ZS5wcm90b3R5cGUsICckcHJvcHMnLCBwcm9wc0RlZik7XG5cbiAgVnVlLnByb3RvdHlwZS4kc2V0ID0gc2V0O1xuICBWdWUucHJvdG90eXBlLiRkZWxldGUgPSBkZWw7XG5cbiAgVnVlLnByb3RvdHlwZS4kd2F0Y2ggPSBmdW5jdGlvbiAoXG4gICAgZXhwT3JGbixcbiAgICBjYixcbiAgICBvcHRpb25zXG4gICkge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgaWYgKGlzUGxhaW5PYmplY3QoY2IpKSB7XG4gICAgICByZXR1cm4gY3JlYXRlV2F0Y2hlcih2bSwgZXhwT3JGbiwgY2IsIG9wdGlvbnMpXG4gICAgfVxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG9wdGlvbnMudXNlciA9IHRydWU7XG4gICAgdmFyIHdhdGNoZXIgPSBuZXcgV2F0Y2hlcih2bSwgZXhwT3JGbiwgY2IsIG9wdGlvbnMpO1xuICAgIGlmIChvcHRpb25zLmltbWVkaWF0ZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY2IuY2FsbCh2bSwgd2F0Y2hlci52YWx1ZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBoYW5kbGVFcnJvcihlcnJvciwgdm0sIChcImNhbGxiYWNrIGZvciBpbW1lZGlhdGUgd2F0Y2hlciBcXFwiXCIgKyAod2F0Y2hlci5leHByZXNzaW9uKSArIFwiXFxcIlwiKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiB1bndhdGNoRm4gKCkge1xuICAgICAgd2F0Y2hlci50ZWFyZG93bigpO1xuICAgIH1cbiAgfTtcbn1cblxuLyogICovXG5cbnZhciB1aWQkMyA9IDA7XG5cbmZ1bmN0aW9uIGluaXRNaXhpbiAoVnVlKSB7XG4gIFZ1ZS5wcm90b3R5cGUuX2luaXQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgLy8gYSB1aWRcbiAgICB2bS5fdWlkID0gdWlkJDMrKztcblxuICAgIHZhciBzdGFydFRhZywgZW5kVGFnO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGNvbmZpZy5wZXJmb3JtYW5jZSAmJiBtYXJrKSB7XG4gICAgICBzdGFydFRhZyA9IFwidnVlLXBlcmYtc3RhcnQ6XCIgKyAodm0uX3VpZCk7XG4gICAgICBlbmRUYWcgPSBcInZ1ZS1wZXJmLWVuZDpcIiArICh2bS5fdWlkKTtcbiAgICAgIG1hcmsoc3RhcnRUYWcpO1xuICAgIH1cblxuICAgIC8vIGEgZmxhZyB0byBhdm9pZCB0aGlzIGJlaW5nIG9ic2VydmVkXG4gICAgdm0uX2lzVnVlID0gdHJ1ZTtcbiAgICAvLyBtZXJnZSBvcHRpb25zXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5faXNDb21wb25lbnQpIHtcbiAgICAgIC8vIG9wdGltaXplIGludGVybmFsIGNvbXBvbmVudCBpbnN0YW50aWF0aW9uXG4gICAgICAvLyBzaW5jZSBkeW5hbWljIG9wdGlvbnMgbWVyZ2luZyBpcyBwcmV0dHkgc2xvdywgYW5kIG5vbmUgb2YgdGhlXG4gICAgICAvLyBpbnRlcm5hbCBjb21wb25lbnQgb3B0aW9ucyBuZWVkcyBzcGVjaWFsIHRyZWF0bWVudC5cbiAgICAgIGluaXRJbnRlcm5hbENvbXBvbmVudCh2bSwgb3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZtLiRvcHRpb25zID0gbWVyZ2VPcHRpb25zKFxuICAgICAgICByZXNvbHZlQ29uc3RydWN0b3JPcHRpb25zKHZtLmNvbnN0cnVjdG9yKSxcbiAgICAgICAgb3B0aW9ucyB8fCB7fSxcbiAgICAgICAgdm1cbiAgICAgICk7XG4gICAgfVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGluaXRQcm94eSh2bSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZtLl9yZW5kZXJQcm94eSA9IHZtO1xuICAgIH1cbiAgICAvLyBleHBvc2UgcmVhbCBzZWxmXG4gICAgdm0uX3NlbGYgPSB2bTtcbiAgICBpbml0TGlmZWN5Y2xlKHZtKTtcbiAgICBpbml0RXZlbnRzKHZtKTtcbiAgICBpbml0UmVuZGVyKHZtKTtcbiAgICBjYWxsSG9vayh2bSwgJ2JlZm9yZUNyZWF0ZScpO1xuICAgICF2bS5fJGZhbGxiYWNrICYmIGluaXRJbmplY3Rpb25zKHZtKTsgLy8gcmVzb2x2ZSBpbmplY3Rpb25zIGJlZm9yZSBkYXRhL3Byb3BzICBcbiAgICBpbml0U3RhdGUodm0pO1xuICAgICF2bS5fJGZhbGxiYWNrICYmIGluaXRQcm92aWRlKHZtKTsgLy8gcmVzb2x2ZSBwcm92aWRlIGFmdGVyIGRhdGEvcHJvcHNcbiAgICAhdm0uXyRmYWxsYmFjayAmJiBjYWxsSG9vayh2bSwgJ2NyZWF0ZWQnKTsgICAgICBcblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGNvbmZpZy5wZXJmb3JtYW5jZSAmJiBtYXJrKSB7XG4gICAgICB2bS5fbmFtZSA9IGZvcm1hdENvbXBvbmVudE5hbWUodm0sIGZhbHNlKTtcbiAgICAgIG1hcmsoZW5kVGFnKTtcbiAgICAgIG1lYXN1cmUoKFwidnVlIFwiICsgKHZtLl9uYW1lKSArIFwiIGluaXRcIiksIHN0YXJ0VGFnLCBlbmRUYWcpO1xuICAgIH1cblxuICAgIGlmICh2bS4kb3B0aW9ucy5lbCkge1xuICAgICAgdm0uJG1vdW50KHZtLiRvcHRpb25zLmVsKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGluaXRJbnRlcm5hbENvbXBvbmVudCAodm0sIG9wdGlvbnMpIHtcbiAgdmFyIG9wdHMgPSB2bS4kb3B0aW9ucyA9IE9iamVjdC5jcmVhdGUodm0uY29uc3RydWN0b3Iub3B0aW9ucyk7XG4gIC8vIGRvaW5nIHRoaXMgYmVjYXVzZSBpdCdzIGZhc3RlciB0aGFuIGR5bmFtaWMgZW51bWVyYXRpb24uXG4gIHZhciBwYXJlbnRWbm9kZSA9IG9wdGlvbnMuX3BhcmVudFZub2RlO1xuICBvcHRzLnBhcmVudCA9IG9wdGlvbnMucGFyZW50O1xuICBvcHRzLl9wYXJlbnRWbm9kZSA9IHBhcmVudFZub2RlO1xuXG4gIHZhciB2bm9kZUNvbXBvbmVudE9wdGlvbnMgPSBwYXJlbnRWbm9kZS5jb21wb25lbnRPcHRpb25zO1xuICBvcHRzLnByb3BzRGF0YSA9IHZub2RlQ29tcG9uZW50T3B0aW9ucy5wcm9wc0RhdGE7XG4gIG9wdHMuX3BhcmVudExpc3RlbmVycyA9IHZub2RlQ29tcG9uZW50T3B0aW9ucy5saXN0ZW5lcnM7XG4gIG9wdHMuX3JlbmRlckNoaWxkcmVuID0gdm5vZGVDb21wb25lbnRPcHRpb25zLmNoaWxkcmVuO1xuICBvcHRzLl9jb21wb25lbnRUYWcgPSB2bm9kZUNvbXBvbmVudE9wdGlvbnMudGFnO1xuXG4gIGlmIChvcHRpb25zLnJlbmRlcikge1xuICAgIG9wdHMucmVuZGVyID0gb3B0aW9ucy5yZW5kZXI7XG4gICAgb3B0cy5zdGF0aWNSZW5kZXJGbnMgPSBvcHRpb25zLnN0YXRpY1JlbmRlckZucztcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlQ29uc3RydWN0b3JPcHRpb25zIChDdG9yKSB7XG4gIHZhciBvcHRpb25zID0gQ3Rvci5vcHRpb25zO1xuICBpZiAoQ3Rvci5zdXBlcikge1xuICAgIHZhciBzdXBlck9wdGlvbnMgPSByZXNvbHZlQ29uc3RydWN0b3JPcHRpb25zKEN0b3Iuc3VwZXIpO1xuICAgIHZhciBjYWNoZWRTdXBlck9wdGlvbnMgPSBDdG9yLnN1cGVyT3B0aW9ucztcbiAgICBpZiAoc3VwZXJPcHRpb25zICE9PSBjYWNoZWRTdXBlck9wdGlvbnMpIHtcbiAgICAgIC8vIHN1cGVyIG9wdGlvbiBjaGFuZ2VkLFxuICAgICAgLy8gbmVlZCB0byByZXNvbHZlIG5ldyBvcHRpb25zLlxuICAgICAgQ3Rvci5zdXBlck9wdGlvbnMgPSBzdXBlck9wdGlvbnM7XG4gICAgICAvLyBjaGVjayBpZiB0aGVyZSBhcmUgYW55IGxhdGUtbW9kaWZpZWQvYXR0YWNoZWQgb3B0aW9ucyAoIzQ5NzYpXG4gICAgICB2YXIgbW9kaWZpZWRPcHRpb25zID0gcmVzb2x2ZU1vZGlmaWVkT3B0aW9ucyhDdG9yKTtcbiAgICAgIC8vIHVwZGF0ZSBiYXNlIGV4dGVuZCBvcHRpb25zXG4gICAgICBpZiAobW9kaWZpZWRPcHRpb25zKSB7XG4gICAgICAgIGV4dGVuZChDdG9yLmV4dGVuZE9wdGlvbnMsIG1vZGlmaWVkT3B0aW9ucyk7XG4gICAgICB9XG4gICAgICBvcHRpb25zID0gQ3Rvci5vcHRpb25zID0gbWVyZ2VPcHRpb25zKHN1cGVyT3B0aW9ucywgQ3Rvci5leHRlbmRPcHRpb25zKTtcbiAgICAgIGlmIChvcHRpb25zLm5hbWUpIHtcbiAgICAgICAgb3B0aW9ucy5jb21wb25lbnRzW29wdGlvbnMubmFtZV0gPSBDdG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gb3B0aW9uc1xufVxuXG5mdW5jdGlvbiByZXNvbHZlTW9kaWZpZWRPcHRpb25zIChDdG9yKSB7XG4gIHZhciBtb2RpZmllZDtcbiAgdmFyIGxhdGVzdCA9IEN0b3Iub3B0aW9ucztcbiAgdmFyIHNlYWxlZCA9IEN0b3Iuc2VhbGVkT3B0aW9ucztcbiAgZm9yICh2YXIga2V5IGluIGxhdGVzdCkge1xuICAgIGlmIChsYXRlc3Rba2V5XSAhPT0gc2VhbGVkW2tleV0pIHtcbiAgICAgIGlmICghbW9kaWZpZWQpIHsgbW9kaWZpZWQgPSB7fTsgfVxuICAgICAgbW9kaWZpZWRba2V5XSA9IGxhdGVzdFtrZXldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbW9kaWZpZWRcbn1cblxuZnVuY3Rpb24gVnVlIChvcHRpb25zKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgISh0aGlzIGluc3RhbmNlb2YgVnVlKVxuICApIHtcbiAgICB3YXJuKCdWdWUgaXMgYSBjb25zdHJ1Y3RvciBhbmQgc2hvdWxkIGJlIGNhbGxlZCB3aXRoIHRoZSBgbmV3YCBrZXl3b3JkJyk7XG4gIH1cbiAgdGhpcy5faW5pdChvcHRpb25zKTtcbn1cblxuaW5pdE1peGluKFZ1ZSk7XG5zdGF0ZU1peGluKFZ1ZSk7XG5ldmVudHNNaXhpbihWdWUpO1xubGlmZWN5Y2xlTWl4aW4oVnVlKTtcbnJlbmRlck1peGluKFZ1ZSk7XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0VXNlIChWdWUpIHtcbiAgVnVlLnVzZSA9IGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICB2YXIgaW5zdGFsbGVkUGx1Z2lucyA9ICh0aGlzLl9pbnN0YWxsZWRQbHVnaW5zIHx8ICh0aGlzLl9pbnN0YWxsZWRQbHVnaW5zID0gW10pKTtcbiAgICBpZiAoaW5zdGFsbGVkUGx1Z2lucy5pbmRleE9mKHBsdWdpbikgPiAtMSkge1xuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICAvLyBhZGRpdGlvbmFsIHBhcmFtZXRlcnNcbiAgICB2YXIgYXJncyA9IHRvQXJyYXkoYXJndW1lbnRzLCAxKTtcbiAgICBhcmdzLnVuc2hpZnQodGhpcyk7XG4gICAgaWYgKHR5cGVvZiBwbHVnaW4uaW5zdGFsbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcGx1Z2luLmluc3RhbGwuYXBwbHkocGx1Z2luLCBhcmdzKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBwbHVnaW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHBsdWdpbi5hcHBseShudWxsLCBhcmdzKTtcbiAgICB9XG4gICAgaW5zdGFsbGVkUGx1Z2lucy5wdXNoKHBsdWdpbik7XG4gICAgcmV0dXJuIHRoaXNcbiAgfTtcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGluaXRNaXhpbiQxIChWdWUpIHtcbiAgVnVlLm1peGluID0gZnVuY3Rpb24gKG1peGluKSB7XG4gICAgdGhpcy5vcHRpb25zID0gbWVyZ2VPcHRpb25zKHRoaXMub3B0aW9ucywgbWl4aW4pO1xuICAgIHJldHVybiB0aGlzXG4gIH07XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0RXh0ZW5kIChWdWUpIHtcbiAgLyoqXG4gICAqIEVhY2ggaW5zdGFuY2UgY29uc3RydWN0b3IsIGluY2x1ZGluZyBWdWUsIGhhcyBhIHVuaXF1ZVxuICAgKiBjaWQuIFRoaXMgZW5hYmxlcyB1cyB0byBjcmVhdGUgd3JhcHBlZCBcImNoaWxkXG4gICAqIGNvbnN0cnVjdG9yc1wiIGZvciBwcm90b3R5cGFsIGluaGVyaXRhbmNlIGFuZCBjYWNoZSB0aGVtLlxuICAgKi9cbiAgVnVlLmNpZCA9IDA7XG4gIHZhciBjaWQgPSAxO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBpbmhlcml0YW5jZVxuICAgKi9cbiAgVnVlLmV4dGVuZCA9IGZ1bmN0aW9uIChleHRlbmRPcHRpb25zKSB7XG4gICAgZXh0ZW5kT3B0aW9ucyA9IGV4dGVuZE9wdGlvbnMgfHwge307XG4gICAgdmFyIFN1cGVyID0gdGhpcztcbiAgICB2YXIgU3VwZXJJZCA9IFN1cGVyLmNpZDtcbiAgICB2YXIgY2FjaGVkQ3RvcnMgPSBleHRlbmRPcHRpb25zLl9DdG9yIHx8IChleHRlbmRPcHRpb25zLl9DdG9yID0ge30pO1xuICAgIGlmIChjYWNoZWRDdG9yc1tTdXBlcklkXSkge1xuICAgICAgcmV0dXJuIGNhY2hlZEN0b3JzW1N1cGVySWRdXG4gICAgfVxuXG4gICAgdmFyIG5hbWUgPSBleHRlbmRPcHRpb25zLm5hbWUgfHwgU3VwZXIub3B0aW9ucy5uYW1lO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIG5hbWUpIHtcbiAgICAgIHZhbGlkYXRlQ29tcG9uZW50TmFtZShuYW1lKTtcbiAgICB9XG5cbiAgICB2YXIgU3ViID0gZnVuY3Rpb24gVnVlQ29tcG9uZW50IChvcHRpb25zKSB7XG4gICAgICB0aGlzLl9pbml0KG9wdGlvbnMpO1xuICAgIH07XG4gICAgU3ViLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoU3VwZXIucHJvdG90eXBlKTtcbiAgICBTdWIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3ViO1xuICAgIFN1Yi5jaWQgPSBjaWQrKztcbiAgICBTdWIub3B0aW9ucyA9IG1lcmdlT3B0aW9ucyhcbiAgICAgIFN1cGVyLm9wdGlvbnMsXG4gICAgICBleHRlbmRPcHRpb25zXG4gICAgKTtcbiAgICBTdWJbJ3N1cGVyJ10gPSBTdXBlcjtcblxuICAgIC8vIEZvciBwcm9wcyBhbmQgY29tcHV0ZWQgcHJvcGVydGllcywgd2UgZGVmaW5lIHRoZSBwcm94eSBnZXR0ZXJzIG9uXG4gICAgLy8gdGhlIFZ1ZSBpbnN0YW5jZXMgYXQgZXh0ZW5zaW9uIHRpbWUsIG9uIHRoZSBleHRlbmRlZCBwcm90b3R5cGUuIFRoaXNcbiAgICAvLyBhdm9pZHMgT2JqZWN0LmRlZmluZVByb3BlcnR5IGNhbGxzIGZvciBlYWNoIGluc3RhbmNlIGNyZWF0ZWQuXG4gICAgaWYgKFN1Yi5vcHRpb25zLnByb3BzKSB7XG4gICAgICBpbml0UHJvcHMkMShTdWIpO1xuICAgIH1cbiAgICBpZiAoU3ViLm9wdGlvbnMuY29tcHV0ZWQpIHtcbiAgICAgIGluaXRDb21wdXRlZCQxKFN1Yik7XG4gICAgfVxuXG4gICAgLy8gYWxsb3cgZnVydGhlciBleHRlbnNpb24vbWl4aW4vcGx1Z2luIHVzYWdlXG4gICAgU3ViLmV4dGVuZCA9IFN1cGVyLmV4dGVuZDtcbiAgICBTdWIubWl4aW4gPSBTdXBlci5taXhpbjtcbiAgICBTdWIudXNlID0gU3VwZXIudXNlO1xuXG4gICAgLy8gY3JlYXRlIGFzc2V0IHJlZ2lzdGVycywgc28gZXh0ZW5kZWQgY2xhc3Nlc1xuICAgIC8vIGNhbiBoYXZlIHRoZWlyIHByaXZhdGUgYXNzZXRzIHRvby5cbiAgICBBU1NFVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICBTdWJbdHlwZV0gPSBTdXBlclt0eXBlXTtcbiAgICB9KTtcbiAgICAvLyBlbmFibGUgcmVjdXJzaXZlIHNlbGYtbG9va3VwXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIFN1Yi5vcHRpb25zLmNvbXBvbmVudHNbbmFtZV0gPSBTdWI7XG4gICAgfVxuXG4gICAgLy8ga2VlcCBhIHJlZmVyZW5jZSB0byB0aGUgc3VwZXIgb3B0aW9ucyBhdCBleHRlbnNpb24gdGltZS5cbiAgICAvLyBsYXRlciBhdCBpbnN0YW50aWF0aW9uIHdlIGNhbiBjaGVjayBpZiBTdXBlcidzIG9wdGlvbnMgaGF2ZVxuICAgIC8vIGJlZW4gdXBkYXRlZC5cbiAgICBTdWIuc3VwZXJPcHRpb25zID0gU3VwZXIub3B0aW9ucztcbiAgICBTdWIuZXh0ZW5kT3B0aW9ucyA9IGV4dGVuZE9wdGlvbnM7XG4gICAgU3ViLnNlYWxlZE9wdGlvbnMgPSBleHRlbmQoe30sIFN1Yi5vcHRpb25zKTtcblxuICAgIC8vIGNhY2hlIGNvbnN0cnVjdG9yXG4gICAgY2FjaGVkQ3RvcnNbU3VwZXJJZF0gPSBTdWI7XG4gICAgcmV0dXJuIFN1YlxuICB9O1xufVxuXG5mdW5jdGlvbiBpbml0UHJvcHMkMSAoQ29tcCkge1xuICB2YXIgcHJvcHMgPSBDb21wLm9wdGlvbnMucHJvcHM7XG4gIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgIHByb3h5KENvbXAucHJvdG90eXBlLCBcIl9wcm9wc1wiLCBrZXkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRDb21wdXRlZCQxIChDb21wKSB7XG4gIHZhciBjb21wdXRlZCA9IENvbXAub3B0aW9ucy5jb21wdXRlZDtcbiAgZm9yICh2YXIga2V5IGluIGNvbXB1dGVkKSB7XG4gICAgZGVmaW5lQ29tcHV0ZWQoQ29tcC5wcm90b3R5cGUsIGtleSwgY29tcHV0ZWRba2V5XSk7XG4gIH1cbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGluaXRBc3NldFJlZ2lzdGVycyAoVnVlKSB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYXNzZXQgcmVnaXN0cmF0aW9uIG1ldGhvZHMuXG4gICAqL1xuICBBU1NFVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgVnVlW3R5cGVdID0gZnVuY3Rpb24gKFxuICAgICAgaWQsXG4gICAgICBkZWZpbml0aW9uXG4gICAgKSB7XG4gICAgICBpZiAoIWRlZmluaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uc1t0eXBlICsgJ3MnXVtpZF1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlID09PSAnY29tcG9uZW50Jykge1xuICAgICAgICAgIHZhbGlkYXRlQ29tcG9uZW50TmFtZShpZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT09ICdjb21wb25lbnQnICYmIGlzUGxhaW5PYmplY3QoZGVmaW5pdGlvbikpIHtcbiAgICAgICAgICBkZWZpbml0aW9uLm5hbWUgPSBkZWZpbml0aW9uLm5hbWUgfHwgaWQ7XG4gICAgICAgICAgZGVmaW5pdGlvbiA9IHRoaXMub3B0aW9ucy5fYmFzZS5leHRlbmQoZGVmaW5pdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT09ICdkaXJlY3RpdmUnICYmIHR5cGVvZiBkZWZpbml0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgZGVmaW5pdGlvbiA9IHsgYmluZDogZGVmaW5pdGlvbiwgdXBkYXRlOiBkZWZpbml0aW9uIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcHRpb25zW3R5cGUgKyAncyddW2lkXSA9IGRlZmluaXRpb247XG4gICAgICAgIHJldHVybiBkZWZpbml0aW9uXG4gICAgICB9XG4gICAgfTtcbiAgfSk7XG59XG5cbi8qICAqL1xuXG5cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSAob3B0cykge1xuICByZXR1cm4gb3B0cyAmJiAob3B0cy5DdG9yLm9wdGlvbnMubmFtZSB8fCBvcHRzLnRhZylcbn1cblxuZnVuY3Rpb24gbWF0Y2hlcyAocGF0dGVybiwgbmFtZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheShwYXR0ZXJuKSkge1xuICAgIHJldHVybiBwYXR0ZXJuLmluZGV4T2YobmFtZSkgPiAtMVxuICB9IGVsc2UgaWYgKHR5cGVvZiBwYXR0ZXJuID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBwYXR0ZXJuLnNwbGl0KCcsJykuaW5kZXhPZihuYW1lKSA+IC0xXG4gIH0gZWxzZSBpZiAoaXNSZWdFeHAocGF0dGVybikpIHtcbiAgICByZXR1cm4gcGF0dGVybi50ZXN0KG5hbWUpXG4gIH1cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIHBydW5lQ2FjaGUgKGtlZXBBbGl2ZUluc3RhbmNlLCBmaWx0ZXIpIHtcbiAgdmFyIGNhY2hlID0ga2VlcEFsaXZlSW5zdGFuY2UuY2FjaGU7XG4gIHZhciBrZXlzID0ga2VlcEFsaXZlSW5zdGFuY2Uua2V5cztcbiAgdmFyIF92bm9kZSA9IGtlZXBBbGl2ZUluc3RhbmNlLl92bm9kZTtcbiAgZm9yICh2YXIga2V5IGluIGNhY2hlKSB7XG4gICAgdmFyIGNhY2hlZE5vZGUgPSBjYWNoZVtrZXldO1xuICAgIGlmIChjYWNoZWROb2RlKSB7XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoY2FjaGVkTm9kZS5jb21wb25lbnRPcHRpb25zKTtcbiAgICAgIGlmIChuYW1lICYmICFmaWx0ZXIobmFtZSkpIHtcbiAgICAgICAgcHJ1bmVDYWNoZUVudHJ5KGNhY2hlLCBrZXksIGtleXMsIF92bm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHBydW5lQ2FjaGVFbnRyeSAoXG4gIGNhY2hlLFxuICBrZXksXG4gIGtleXMsXG4gIGN1cnJlbnRcbikge1xuICB2YXIgY2FjaGVkJCQxID0gY2FjaGVba2V5XTtcbiAgaWYgKGNhY2hlZCQkMSAmJiAoIWN1cnJlbnQgfHwgY2FjaGVkJCQxLnRhZyAhPT0gY3VycmVudC50YWcpKSB7XG4gICAgY2FjaGVkJCQxLmNvbXBvbmVudEluc3RhbmNlLiRkZXN0cm95KCk7XG4gIH1cbiAgY2FjaGVba2V5XSA9IG51bGw7XG4gIHJlbW92ZShrZXlzLCBrZXkpO1xufVxuXG52YXIgcGF0dGVyblR5cGVzID0gW1N0cmluZywgUmVnRXhwLCBBcnJheV07XG5cbnZhciBLZWVwQWxpdmUgPSB7XG4gIG5hbWU6ICdrZWVwLWFsaXZlJyxcbiAgYWJzdHJhY3Q6IHRydWUsXG5cbiAgcHJvcHM6IHtcbiAgICBpbmNsdWRlOiBwYXR0ZXJuVHlwZXMsXG4gICAgZXhjbHVkZTogcGF0dGVyblR5cGVzLFxuICAgIG1heDogW1N0cmluZywgTnVtYmVyXVxuICB9LFxuXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uIGNyZWF0ZWQgKCkge1xuICAgIHRoaXMuY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRoaXMua2V5cyA9IFtdO1xuICB9LFxuXG4gIGRlc3Ryb3llZDogZnVuY3Rpb24gZGVzdHJveWVkICgpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5jYWNoZSkge1xuICAgICAgcHJ1bmVDYWNoZUVudHJ5KHRoaXMuY2FjaGUsIGtleSwgdGhpcy5rZXlzKTtcbiAgICB9XG4gIH0sXG5cbiAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCAoKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB0aGlzLiR3YXRjaCgnaW5jbHVkZScsIGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgIHBydW5lQ2FjaGUodGhpcyQxLCBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gbWF0Y2hlcyh2YWwsIG5hbWUpOyB9KTtcbiAgICB9KTtcbiAgICB0aGlzLiR3YXRjaCgnZXhjbHVkZScsIGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgIHBydW5lQ2FjaGUodGhpcyQxLCBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gIW1hdGNoZXModmFsLCBuYW1lKTsgfSk7XG4gICAgfSk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIgKCkge1xuICAgIHZhciBzbG90ID0gdGhpcy4kc2xvdHMuZGVmYXVsdDtcbiAgICB2YXIgdm5vZGUgPSBnZXRGaXJzdENvbXBvbmVudENoaWxkKHNsb3QpO1xuICAgIHZhciBjb21wb25lbnRPcHRpb25zID0gdm5vZGUgJiYgdm5vZGUuY29tcG9uZW50T3B0aW9ucztcbiAgICBpZiAoY29tcG9uZW50T3B0aW9ucykge1xuICAgICAgLy8gY2hlY2sgcGF0dGVyblxuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKGNvbXBvbmVudE9wdGlvbnMpO1xuICAgICAgdmFyIHJlZiA9IHRoaXM7XG4gICAgICB2YXIgaW5jbHVkZSA9IHJlZi5pbmNsdWRlO1xuICAgICAgdmFyIGV4Y2x1ZGUgPSByZWYuZXhjbHVkZTtcbiAgICAgIGlmIChcbiAgICAgICAgLy8gbm90IGluY2x1ZGVkXG4gICAgICAgIChpbmNsdWRlICYmICghbmFtZSB8fCAhbWF0Y2hlcyhpbmNsdWRlLCBuYW1lKSkpIHx8XG4gICAgICAgIC8vIGV4Y2x1ZGVkXG4gICAgICAgIChleGNsdWRlICYmIG5hbWUgJiYgbWF0Y2hlcyhleGNsdWRlLCBuYW1lKSlcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gdm5vZGVcbiAgICAgIH1cblxuICAgICAgdmFyIHJlZiQxID0gdGhpcztcbiAgICAgIHZhciBjYWNoZSA9IHJlZiQxLmNhY2hlO1xuICAgICAgdmFyIGtleXMgPSByZWYkMS5rZXlzO1xuICAgICAgdmFyIGtleSA9IHZub2RlLmtleSA9PSBudWxsXG4gICAgICAgIC8vIHNhbWUgY29uc3RydWN0b3IgbWF5IGdldCByZWdpc3RlcmVkIGFzIGRpZmZlcmVudCBsb2NhbCBjb21wb25lbnRzXG4gICAgICAgIC8vIHNvIGNpZCBhbG9uZSBpcyBub3QgZW5vdWdoICgjMzI2OSlcbiAgICAgICAgPyBjb21wb25lbnRPcHRpb25zLkN0b3IuY2lkICsgKGNvbXBvbmVudE9wdGlvbnMudGFnID8gKFwiOjpcIiArIChjb21wb25lbnRPcHRpb25zLnRhZykpIDogJycpXG4gICAgICAgIDogdm5vZGUua2V5O1xuICAgICAgaWYgKGNhY2hlW2tleV0pIHtcbiAgICAgICAgdm5vZGUuY29tcG9uZW50SW5zdGFuY2UgPSBjYWNoZVtrZXldLmNvbXBvbmVudEluc3RhbmNlO1xuICAgICAgICAvLyBtYWtlIGN1cnJlbnQga2V5IGZyZXNoZXN0XG4gICAgICAgIHJlbW92ZShrZXlzLCBrZXkpO1xuICAgICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhY2hlW2tleV0gPSB2bm9kZTtcbiAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICAgIC8vIHBydW5lIG9sZGVzdCBlbnRyeVxuICAgICAgICBpZiAodGhpcy5tYXggJiYga2V5cy5sZW5ndGggPiBwYXJzZUludCh0aGlzLm1heCkpIHtcbiAgICAgICAgICBwcnVuZUNhY2hlRW50cnkoY2FjaGUsIGtleXNbMF0sIGtleXMsIHRoaXMuX3Zub2RlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2bm9kZS5kYXRhLmtlZXBBbGl2ZSA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB2bm9kZSB8fCAoc2xvdCAmJiBzbG90WzBdKVxuICB9XG59O1xuXG52YXIgYnVpbHRJbkNvbXBvbmVudHMgPSB7XG4gIEtlZXBBbGl2ZTogS2VlcEFsaXZlXG59O1xuXG4vKiAgKi9cblxuZnVuY3Rpb24gaW5pdEdsb2JhbEFQSSAoVnVlKSB7XG4gIC8vIGNvbmZpZ1xuICB2YXIgY29uZmlnRGVmID0ge307XG4gIGNvbmZpZ0RlZi5nZXQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBjb25maWc7IH07XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uZmlnRGVmLnNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgICdEbyBub3QgcmVwbGFjZSB0aGUgVnVlLmNvbmZpZyBvYmplY3QsIHNldCBpbmRpdmlkdWFsIGZpZWxkcyBpbnN0ZWFkLidcbiAgICAgICk7XG4gICAgfTtcbiAgfVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLCAnY29uZmlnJywgY29uZmlnRGVmKTtcblxuICAvLyBleHBvc2VkIHV0aWwgbWV0aG9kcy5cbiAgLy8gTk9URTogdGhlc2UgYXJlIG5vdCBjb25zaWRlcmVkIHBhcnQgb2YgdGhlIHB1YmxpYyBBUEkgLSBhdm9pZCByZWx5aW5nIG9uXG4gIC8vIHRoZW0gdW5sZXNzIHlvdSBhcmUgYXdhcmUgb2YgdGhlIHJpc2suXG4gIFZ1ZS51dGlsID0ge1xuICAgIHdhcm46IHdhcm4sXG4gICAgZXh0ZW5kOiBleHRlbmQsXG4gICAgbWVyZ2VPcHRpb25zOiBtZXJnZU9wdGlvbnMsXG4gICAgZGVmaW5lUmVhY3RpdmU6IGRlZmluZVJlYWN0aXZlJCQxXG4gIH07XG5cbiAgVnVlLnNldCA9IHNldDtcbiAgVnVlLmRlbGV0ZSA9IGRlbDtcbiAgVnVlLm5leHRUaWNrID0gbmV4dFRpY2s7XG5cbiAgLy8gMi42IGV4cGxpY2l0IG9ic2VydmFibGUgQVBJXG4gIFZ1ZS5vYnNlcnZhYmxlID0gZnVuY3Rpb24gKG9iaikge1xuICAgIG9ic2VydmUob2JqKTtcbiAgICByZXR1cm4gb2JqXG4gIH07XG5cbiAgVnVlLm9wdGlvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBBU1NFVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgVnVlLm9wdGlvbnNbdHlwZSArICdzJ10gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB9KTtcblxuICAvLyB0aGlzIGlzIHVzZWQgdG8gaWRlbnRpZnkgdGhlIFwiYmFzZVwiIGNvbnN0cnVjdG9yIHRvIGV4dGVuZCBhbGwgcGxhaW4tb2JqZWN0XG4gIC8vIGNvbXBvbmVudHMgd2l0aCBpbiBXZWV4J3MgbXVsdGktaW5zdGFuY2Ugc2NlbmFyaW9zLlxuICBWdWUub3B0aW9ucy5fYmFzZSA9IFZ1ZTtcblxuICBleHRlbmQoVnVlLm9wdGlvbnMuY29tcG9uZW50cywgYnVpbHRJbkNvbXBvbmVudHMpO1xuXG4gIGluaXRVc2UoVnVlKTtcbiAgaW5pdE1peGluJDEoVnVlKTtcbiAgaW5pdEV4dGVuZChWdWUpO1xuICBpbml0QXNzZXRSZWdpc3RlcnMoVnVlKTtcbn1cblxuaW5pdEdsb2JhbEFQSShWdWUpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLnByb3RvdHlwZSwgJyRpc1NlcnZlcicsIHtcbiAgZ2V0OiBpc1NlcnZlclJlbmRlcmluZ1xufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUucHJvdG90eXBlLCAnJHNzckNvbnRleHQnLCB7XG4gIGdldDogZnVuY3Rpb24gZ2V0ICgpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIHJldHVybiB0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0XG4gIH1cbn0pO1xuXG4vLyBleHBvc2UgRnVuY3Rpb25hbFJlbmRlckNvbnRleHQgZm9yIHNzciBydW50aW1lIGhlbHBlciBpbnN0YWxsYXRpb25cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUsICdGdW5jdGlvbmFsUmVuZGVyQ29udGV4dCcsIHtcbiAgdmFsdWU6IEZ1bmN0aW9uYWxSZW5kZXJDb250ZXh0XG59KTtcblxuVnVlLnZlcnNpb24gPSAnMi42LjExJztcblxuLyoqXG4gKiBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vVGVuY2VudC93ZXN0b3JlL21hc3Rlci9wYWNrYWdlcy93ZXN0b3JlL3V0aWxzL2RpZmYuanNcbiAqL1xudmFyIEFSUkFZVFlQRSA9ICdbb2JqZWN0IEFycmF5XSc7XG52YXIgT0JKRUNUVFlQRSA9ICdbb2JqZWN0IE9iamVjdF0nO1xuLy8gY29uc3QgRlVOQ1RJT05UWVBFID0gJ1tvYmplY3QgRnVuY3Rpb25dJ1xuXG5mdW5jdGlvbiBkaWZmKGN1cnJlbnQsIHByZSkge1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBzeW5jS2V5cyhjdXJyZW50LCBwcmUpO1xuICAgIF9kaWZmKGN1cnJlbnQsIHByZSwgJycsIHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdFxufVxuXG5mdW5jdGlvbiBzeW5jS2V5cyhjdXJyZW50LCBwcmUpIHtcbiAgICBpZiAoY3VycmVudCA9PT0gcHJlKSB7IHJldHVybiB9XG4gICAgdmFyIHJvb3RDdXJyZW50VHlwZSA9IHR5cGUoY3VycmVudCk7XG4gICAgdmFyIHJvb3RQcmVUeXBlID0gdHlwZShwcmUpO1xuICAgIGlmIChyb290Q3VycmVudFR5cGUgPT0gT0JKRUNUVFlQRSAmJiByb290UHJlVHlwZSA9PSBPQkpFQ1RUWVBFKSB7XG4gICAgICAgIGlmKE9iamVjdC5rZXlzKGN1cnJlbnQpLmxlbmd0aCA+PSBPYmplY3Qua2V5cyhwcmUpLmxlbmd0aCl7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gcHJlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRWYWx1ZSA9IGN1cnJlbnRba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFtrZXldID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzeW5jS2V5cyhjdXJyZW50VmFsdWUsIHByZVtrZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHJvb3RDdXJyZW50VHlwZSA9PSBBUlJBWVRZUEUgJiYgcm9vdFByZVR5cGUgPT0gQVJSQVlUWVBFKSB7XG4gICAgICAgIGlmIChjdXJyZW50Lmxlbmd0aCA+PSBwcmUubGVuZ3RoKSB7XG4gICAgICAgICAgICBwcmUuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBzeW5jS2V5cyhjdXJyZW50W2luZGV4XSwgaXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gX2RpZmYoY3VycmVudCwgcHJlLCBwYXRoLCByZXN1bHQpIHtcbiAgICBpZiAoY3VycmVudCA9PT0gcHJlKSB7IHJldHVybiB9XG4gICAgdmFyIHJvb3RDdXJyZW50VHlwZSA9IHR5cGUoY3VycmVudCk7XG4gICAgdmFyIHJvb3RQcmVUeXBlID0gdHlwZShwcmUpO1xuICAgIGlmIChyb290Q3VycmVudFR5cGUgPT0gT0JKRUNUVFlQRSkge1xuICAgICAgICBpZiAocm9vdFByZVR5cGUgIT0gT0JKRUNUVFlQRSB8fCBPYmplY3Qua2V5cyhjdXJyZW50KS5sZW5ndGggPCBPYmplY3Qua2V5cyhwcmUpLmxlbmd0aCkge1xuICAgICAgICAgICAgc2V0UmVzdWx0KHJlc3VsdCwgcGF0aCwgY3VycmVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgbG9vcCA9IGZ1bmN0aW9uICgga2V5ICkge1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50VmFsdWUgPSBjdXJyZW50W2tleV07XG4gICAgICAgICAgICAgICAgdmFyIHByZVZhbHVlID0gcHJlW2tleV07XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRUeXBlID0gdHlwZShjdXJyZW50VmFsdWUpO1xuICAgICAgICAgICAgICAgIHZhciBwcmVUeXBlID0gdHlwZShwcmVWYWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRUeXBlICE9IEFSUkFZVFlQRSAmJiBjdXJyZW50VHlwZSAhPSBPQkpFQ1RUWVBFKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VmFsdWUgIT0gcHJlW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFJlc3VsdChyZXN1bHQsIChwYXRoID09ICcnID8gJycgOiBwYXRoICsgXCIuXCIpICsga2V5LCBjdXJyZW50VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50VHlwZSA9PSBBUlJBWVRZUEUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZVR5cGUgIT0gQVJSQVlUWVBFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRSZXN1bHQocmVzdWx0LCAocGF0aCA9PSAnJyA/ICcnIDogcGF0aCArIFwiLlwiKSArIGtleSwgY3VycmVudFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VmFsdWUubGVuZ3RoIDwgcHJlVmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmVzdWx0KHJlc3VsdCwgKHBhdGggPT0gJycgPyAnJyA6IHBhdGggKyBcIi5cIikgKyBrZXksIGN1cnJlbnRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfZGlmZihpdGVtLCBwcmVWYWx1ZVtpbmRleF0sIChwYXRoID09ICcnID8gJycgOiBwYXRoICsgXCIuXCIpICsga2V5ICsgJ1snICsgaW5kZXggKyAnXScsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRUeXBlID09IE9CSkVDVFRZUEUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZVR5cGUgIT0gT0JKRUNUVFlQRSB8fCBPYmplY3Qua2V5cyhjdXJyZW50VmFsdWUpLmxlbmd0aCA8IE9iamVjdC5rZXlzKHByZVZhbHVlKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFJlc3VsdChyZXN1bHQsIChwYXRoID09ICcnID8gJycgOiBwYXRoICsgXCIuXCIpICsga2V5LCBjdXJyZW50VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgc3ViS2V5IGluIGN1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9kaWZmKGN1cnJlbnRWYWx1ZVtzdWJLZXldLCBwcmVWYWx1ZVtzdWJLZXldLCAocGF0aCA9PSAnJyA/ICcnIDogcGF0aCArIFwiLlwiKSArIGtleSArICcuJyArIHN1YktleSwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBjdXJyZW50KSBsb29wKCBrZXkgKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAocm9vdEN1cnJlbnRUeXBlID09IEFSUkFZVFlQRSkge1xuICAgICAgICBpZiAocm9vdFByZVR5cGUgIT0gQVJSQVlUWVBFKSB7XG4gICAgICAgICAgICBzZXRSZXN1bHQocmVzdWx0LCBwYXRoLCBjdXJyZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50Lmxlbmd0aCA8IHByZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzZXRSZXN1bHQocmVzdWx0LCBwYXRoLCBjdXJyZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY3VycmVudC5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBfZGlmZihpdGVtLCBwcmVbaW5kZXhdLCBwYXRoICsgJ1snICsgaW5kZXggKyAnXScsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBzZXRSZXN1bHQocmVzdWx0LCBwYXRoLCBjdXJyZW50KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNldFJlc3VsdChyZXN1bHQsIGssIHYpIHtcbiAgICAvLyBpZiAodHlwZSh2KSAhPSBGVU5DVElPTlRZUEUpIHtcbiAgICAgICAgcmVzdWx0W2tdID0gdjtcbiAgICAvLyB9XG59XG5cbmZ1bmN0aW9uIHR5cGUob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBmbHVzaENhbGxiYWNrcyQxKHZtKSB7XG4gICAgaWYgKHZtLl9fbmV4dF90aWNrX2NhbGxiYWNrcyAmJiB2bS5fX25leHRfdGlja19jYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5WVUVfQVBQX0RFQlVHKSB7XG4gICAgICAgICAgICB2YXIgbXBJbnN0YW5jZSA9IHZtLiRzY29wZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbJyArICgrbmV3IERhdGUpICsgJ11bJyArIChtcEluc3RhbmNlLmlzIHx8IG1wSW5zdGFuY2Uucm91dGUpICsgJ11bJyArIHZtLl91aWQgK1xuICAgICAgICAgICAgICAgICddOmZsdXNoQ2FsbGJhY2tzWycgKyB2bS5fX25leHRfdGlja19jYWxsYmFja3MubGVuZ3RoICsgJ10nKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY29waWVzID0gdm0uX19uZXh0X3RpY2tfY2FsbGJhY2tzLnNsaWNlKDApO1xuICAgICAgICB2bS5fX25leHRfdGlja19jYWxsYmFja3MubGVuZ3RoID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3BpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvcGllc1tpXSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBoYXNSZW5kZXJXYXRjaGVyKHZtKSB7XG4gICAgcmV0dXJuIHF1ZXVlLmZpbmQoZnVuY3Rpb24gKHdhdGNoZXIpIHsgcmV0dXJuIHZtLl93YXRjaGVyID09PSB3YXRjaGVyOyB9KVxufVxuXG5mdW5jdGlvbiBuZXh0VGljayQxKHZtLCBjYikge1xuICAgIC8vMS5uZXh0VGljayDkuYvliY0g5beyIHNldERhdGEg5LiUIHNldERhdGEg6L+Y5pyq5Zue6LCD5a6M5oiQXG4gICAgLy8yLm5leHRUaWNrIOS5i+WJjeWtmOWcqCByZW5kZXIgd2F0Y2hlclxuICAgIGlmICghdm0uX19uZXh0X3RpY2tfcGVuZGluZyAmJiAhaGFzUmVuZGVyV2F0Y2hlcih2bSkpIHtcbiAgICAgICAgaWYocHJvY2Vzcy5lbnYuVlVFX0FQUF9ERUJVRyl7XG4gICAgICAgICAgICB2YXIgbXBJbnN0YW5jZSA9IHZtLiRzY29wZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbJyArICgrbmV3IERhdGUpICsgJ11bJyArIChtcEluc3RhbmNlLmlzIHx8IG1wSW5zdGFuY2Uucm91dGUpICsgJ11bJyArIHZtLl91aWQgK1xuICAgICAgICAgICAgICAgICddOm5leHRWdWVUaWNrJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5leHRUaWNrKGNiLCB2bSlcbiAgICB9ZWxzZXtcbiAgICAgICAgaWYocHJvY2Vzcy5lbnYuVlVFX0FQUF9ERUJVRyl7XG4gICAgICAgICAgICB2YXIgbXBJbnN0YW5jZSQxID0gdm0uJHNjb3BlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1snICsgKCtuZXcgRGF0ZSkgKyAnXVsnICsgKG1wSW5zdGFuY2UkMS5pcyB8fCBtcEluc3RhbmNlJDEucm91dGUpICsgJ11bJyArIHZtLl91aWQgK1xuICAgICAgICAgICAgICAgICddOm5leHRNUFRpY2snKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgX3Jlc29sdmU7XG4gICAgaWYgKCF2bS5fX25leHRfdGlja19jYWxsYmFja3MpIHtcbiAgICAgICAgdm0uX19uZXh0X3RpY2tfY2FsbGJhY2tzID0gW107XG4gICAgfVxuICAgIHZtLl9fbmV4dF90aWNrX2NhbGxiYWNrcy5wdXNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGNiKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNiLmNhbGwodm0pO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZUVycm9yKGUsIHZtLCAnbmV4dFRpY2snKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChfcmVzb2x2ZSkge1xuICAgICAgICAgICAgX3Jlc29sdmUodm0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gICAgaWYgKCFjYiAmJiB0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICBfcmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gY2xvbmVXaXRoRGF0YSh2bSkge1xuICAvLyDnoa7kv53lvZPliY0gdm0g5omA5pyJ5pWw5o2u6KKr5ZCM5q2lXG4gIHZhciByZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB2YXIgZGF0YUtleXMgPSBbXS5jb25jYXQoXG4gICAgT2JqZWN0LmtleXModm0uX2RhdGEgfHwge30pLFxuICAgIE9iamVjdC5rZXlzKHZtLl9jb21wdXRlZFdhdGNoZXJzIHx8IHt9KSk7XG5cbiAgZGF0YUtleXMucmVkdWNlKGZ1bmN0aW9uKHJldCwga2V5KSB7XG4gICAgcmV0W2tleV0gPSB2bVtrZXldO1xuICAgIHJldHVybiByZXRcbiAgfSwgcmV0KTtcblxuICAvLyB2dWUtY29tcG9zaXRpb24tYXBpXG4gIHZhciBjb21wb3NpdGlvbkFwaVN0YXRlID0gdm0uX19jb21wb3NpdGlvbl9hcGlfc3RhdGVfXyB8fCB2bS5fX3NlY3JldF92ZmFfc3RhdGVfXztcbiAgdmFyIHJhd0JpbmRpbmdzID0gY29tcG9zaXRpb25BcGlTdGF0ZSAmJiBjb21wb3NpdGlvbkFwaVN0YXRlLnJhd0JpbmRpbmdzO1xuICBpZiAocmF3QmluZGluZ3MpIHtcbiAgICBPYmplY3Qua2V5cyhyYXdCaW5kaW5ncykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXRba2V5XSA9IHZtW2tleV07XG4gICAgfSk7XG4gIH1cblxuICAvL1RPRE8g6ZyA6KaB5oqK5peg55So5pWw5o2u5aSE55CG5o6J77yM5q+U5aaCIGxpc3Q9PmwwIOWImSBsaXN0IOmcgOimgeenu+mZpO+8jOWQpuWImeWkmuS8oOi+k+S4gOS7veaVsOaNrlxuICBPYmplY3QuYXNzaWduKHJldCwgdm0uJG1wLmRhdGEgfHwge30pO1xuICBpZiAoXG4gICAgQXJyYXkuaXNBcnJheSh2bS4kb3B0aW9ucy5iZWhhdmlvcnMpICYmXG4gICAgdm0uJG9wdGlvbnMuYmVoYXZpb3JzLmluZGV4T2YoJ3VuaTovL2Zvcm0tZmllbGQnKSAhPT0gLTFcbiAgKSB7IC8vZm9ybS1maWVsZFxuICAgIHJldFsnbmFtZSddID0gdm0ubmFtZTtcbiAgICByZXRbJ3ZhbHVlJ10gPSB2bS52YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHJldCkpXG59XG5cbnZhciBwYXRjaCA9IGZ1bmN0aW9uKG9sZFZub2RlLCB2bm9kZSkge1xuICB2YXIgdGhpcyQxID0gdGhpcztcblxuICBpZiAodm5vZGUgPT09IG51bGwpIHsgLy9kZXN0cm95XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKHRoaXMubXBUeXBlID09PSAncGFnZScgfHwgdGhpcy5tcFR5cGUgPT09ICdjb21wb25lbnQnKSB7XG4gICAgdmFyIG1wSW5zdGFuY2UgPSB0aGlzLiRzY29wZTtcbiAgICB2YXIgZGF0YSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdHJ5IHtcbiAgICAgIGRhdGEgPSBjbG9uZVdpdGhEYXRhKHRoaXMpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH1cbiAgICBkYXRhLl9fd2Vidmlld0lkX18gPSBtcEluc3RhbmNlLmRhdGEuX193ZWJ2aWV3SWRfXztcbiAgICB2YXIgbXBEYXRhID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgLy/ku4XlkIzmraUgZGF0YSDkuK3mnInnmoTmlbDmja5cbiAgICAgIG1wRGF0YVtrZXldID0gbXBJbnN0YW5jZS5kYXRhW2tleV07XG4gICAgfSk7XG4gICAgdmFyIGRpZmZEYXRhID0gdGhpcy4kc2hvdWxkRGlmZkRhdGEgPT09IGZhbHNlID8gZGF0YSA6IGRpZmYoZGF0YSwgbXBEYXRhKTtcbiAgICBpZiAoT2JqZWN0LmtleXMoZGlmZkRhdGEpLmxlbmd0aCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52LlZVRV9BUFBfREVCVUcpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1snICsgKCtuZXcgRGF0ZSkgKyAnXVsnICsgKG1wSW5zdGFuY2UuaXMgfHwgbXBJbnN0YW5jZS5yb3V0ZSkgKyAnXVsnICsgdGhpcy5fdWlkICtcbiAgICAgICAgICAnXeW3rumHj+abtOaWsCcsXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkoZGlmZkRhdGEpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX19uZXh0X3RpY2tfcGVuZGluZyA9IHRydWU7XG4gICAgICBtcEluc3RhbmNlLnNldERhdGEoZGlmZkRhdGEsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcyQxLl9fbmV4dF90aWNrX3BlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgZmx1c2hDYWxsYmFja3MkMSh0aGlzJDEpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZsdXNoQ2FsbGJhY2tzJDEodGhpcyk7XG4gICAgfVxuICB9XG59O1xuXG4vKiAgKi9cblxuZnVuY3Rpb24gY3JlYXRlRW1wdHlSZW5kZXIoKSB7XG5cbn1cblxuZnVuY3Rpb24gbW91bnRDb21wb25lbnQkMShcbiAgdm0sXG4gIGVsLFxuICBoeWRyYXRpbmdcbikge1xuICBpZiAoIXZtLm1wVHlwZSkgey8vbWFpbi5qcyDkuK3nmoQgbmV3IFZ1ZVxuICAgIHJldHVybiB2bVxuICB9XG4gIGlmICh2bS5tcFR5cGUgPT09ICdhcHAnKSB7XG4gICAgdm0uJG9wdGlvbnMucmVuZGVyID0gY3JlYXRlRW1wdHlSZW5kZXI7XG4gIH1cbiAgaWYgKCF2bS4kb3B0aW9ucy5yZW5kZXIpIHtcbiAgICB2bS4kb3B0aW9ucy5yZW5kZXIgPSBjcmVhdGVFbXB0eVJlbmRlcjtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoKHZtLiRvcHRpb25zLnRlbXBsYXRlICYmIHZtLiRvcHRpb25zLnRlbXBsYXRlLmNoYXJBdCgwKSAhPT0gJyMnKSB8fFxuICAgICAgICB2bS4kb3B0aW9ucy5lbCB8fCBlbCkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgICdZb3UgYXJlIHVzaW5nIHRoZSBydW50aW1lLW9ubHkgYnVpbGQgb2YgVnVlIHdoZXJlIHRoZSB0ZW1wbGF0ZSAnICtcbiAgICAgICAgICAnY29tcGlsZXIgaXMgbm90IGF2YWlsYWJsZS4gRWl0aGVyIHByZS1jb21waWxlIHRoZSB0ZW1wbGF0ZXMgaW50byAnICtcbiAgICAgICAgICAncmVuZGVyIGZ1bmN0aW9ucywgb3IgdXNlIHRoZSBjb21waWxlci1pbmNsdWRlZCBidWlsZC4nLFxuICAgICAgICAgIHZtXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgICdGYWlsZWQgdG8gbW91bnQgY29tcG9uZW50OiB0ZW1wbGF0ZSBvciByZW5kZXIgZnVuY3Rpb24gbm90IGRlZmluZWQuJyxcbiAgICAgICAgICB2bVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgIXZtLl8kZmFsbGJhY2sgJiYgY2FsbEhvb2sodm0sICdiZWZvcmVNb3VudCcpO1xuXG4gIHZhciB1cGRhdGVDb21wb25lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdm0uX3VwZGF0ZSh2bS5fcmVuZGVyKCksIGh5ZHJhdGluZyk7XG4gIH07XG5cbiAgLy8gd2Ugc2V0IHRoaXMgdG8gdm0uX3dhdGNoZXIgaW5zaWRlIHRoZSB3YXRjaGVyJ3MgY29uc3RydWN0b3JcbiAgLy8gc2luY2UgdGhlIHdhdGNoZXIncyBpbml0aWFsIHBhdGNoIG1heSBjYWxsICRmb3JjZVVwZGF0ZSAoZS5nLiBpbnNpZGUgY2hpbGRcbiAgLy8gY29tcG9uZW50J3MgbW91bnRlZCBob29rKSwgd2hpY2ggcmVsaWVzIG9uIHZtLl93YXRjaGVyIGJlaW5nIGFscmVhZHkgZGVmaW5lZFxuICBuZXcgV2F0Y2hlcih2bSwgdXBkYXRlQ29tcG9uZW50LCBub29wLCB7XG4gICAgYmVmb3JlOiBmdW5jdGlvbiBiZWZvcmUoKSB7XG4gICAgICBpZiAodm0uX2lzTW91bnRlZCAmJiAhdm0uX2lzRGVzdHJveWVkKSB7XG4gICAgICAgIGNhbGxIb29rKHZtLCAnYmVmb3JlVXBkYXRlJyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB0cnVlIC8qIGlzUmVuZGVyV2F0Y2hlciAqLyk7XG4gIGh5ZHJhdGluZyA9IGZhbHNlO1xuICByZXR1cm4gdm1cbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIHJlbmRlckNsYXNzIChcbiAgc3RhdGljQ2xhc3MsXG4gIGR5bmFtaWNDbGFzc1xuKSB7XG4gIGlmIChpc0RlZihzdGF0aWNDbGFzcykgfHwgaXNEZWYoZHluYW1pY0NsYXNzKSkge1xuICAgIHJldHVybiBjb25jYXQoc3RhdGljQ2xhc3MsIHN0cmluZ2lmeUNsYXNzKGR5bmFtaWNDbGFzcykpXG4gIH1cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgcmV0dXJuICcnXG59XG5cbmZ1bmN0aW9uIGNvbmNhdCAoYSwgYikge1xuICByZXR1cm4gYSA/IGIgPyAoYSArICcgJyArIGIpIDogYSA6IChiIHx8ICcnKVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlDbGFzcyAodmFsdWUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHN0cmluZ2lmeUFycmF5KHZhbHVlKVxuICB9XG4gIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gc3RyaW5naWZ5T2JqZWN0KHZhbHVlKVxuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgcmV0dXJuICcnXG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeUFycmF5ICh2YWx1ZSkge1xuICB2YXIgcmVzID0gJyc7XG4gIHZhciBzdHJpbmdpZmllZDtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSB2YWx1ZS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAoaXNEZWYoc3RyaW5naWZpZWQgPSBzdHJpbmdpZnlDbGFzcyh2YWx1ZVtpXSkpICYmIHN0cmluZ2lmaWVkICE9PSAnJykge1xuICAgICAgaWYgKHJlcykgeyByZXMgKz0gJyAnOyB9XG4gICAgICByZXMgKz0gc3RyaW5naWZpZWQ7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5T2JqZWN0ICh2YWx1ZSkge1xuICB2YXIgcmVzID0gJyc7XG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZVtrZXldKSB7XG4gICAgICBpZiAocmVzKSB7IHJlcyArPSAnICc7IH1cbiAgICAgIHJlcyArPSBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuLyogICovXG5cbnZhciBwYXJzZVN0eWxlVGV4dCA9IGNhY2hlZChmdW5jdGlvbiAoY3NzVGV4dCkge1xuICB2YXIgcmVzID0ge307XG4gIHZhciBsaXN0RGVsaW1pdGVyID0gLzsoPyFbXihdKlxcKSkvZztcbiAgdmFyIHByb3BlcnR5RGVsaW1pdGVyID0gLzooLispLztcbiAgY3NzVGV4dC5zcGxpdChsaXN0RGVsaW1pdGVyKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIHZhciB0bXAgPSBpdGVtLnNwbGl0KHByb3BlcnR5RGVsaW1pdGVyKTtcbiAgICAgIHRtcC5sZW5ndGggPiAxICYmIChyZXNbdG1wWzBdLnRyaW0oKV0gPSB0bXBbMV0udHJpbSgpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzXG59KTtcblxuLy8gbm9ybWFsaXplIHBvc3NpYmxlIGFycmF5IC8gc3RyaW5nIHZhbHVlcyBpbnRvIE9iamVjdFxuZnVuY3Rpb24gbm9ybWFsaXplU3R5bGVCaW5kaW5nIChiaW5kaW5nU3R5bGUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYmluZGluZ1N0eWxlKSkge1xuICAgIHJldHVybiB0b09iamVjdChiaW5kaW5nU3R5bGUpXG4gIH1cbiAgaWYgKHR5cGVvZiBiaW5kaW5nU3R5bGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHBhcnNlU3R5bGVUZXh0KGJpbmRpbmdTdHlsZSlcbiAgfVxuICByZXR1cm4gYmluZGluZ1N0eWxlXG59XG5cbi8qICAqL1xuXG52YXIgTVBfTUVUSE9EUyA9IFsnY3JlYXRlU2VsZWN0b3JRdWVyeScsICdjcmVhdGVJbnRlcnNlY3Rpb25PYnNlcnZlcicsICdzZWxlY3RBbGxDb21wb25lbnRzJywgJ3NlbGVjdENvbXBvbmVudCddO1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQob2JqLCBwYXRoKSB7XG4gIHZhciBwYXJ0cyA9IHBhdGguc3BsaXQoJy4nKTtcbiAgdmFyIGtleSA9IHBhcnRzWzBdO1xuICBpZiAoa2V5LmluZGV4T2YoJ19fJG4nKSA9PT0gMCkgeyAvL251bWJlciBpbmRleFxuICAgIGtleSA9IHBhcnNlSW50KGtleS5yZXBsYWNlKCdfXyRuJywgJycpKTtcbiAgfVxuICBpZiAocGFydHMubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIG9ialtrZXldXG4gIH1cbiAgcmV0dXJuIGdldFRhcmdldChvYmpba2V5XSwgcGFydHMuc2xpY2UoMSkuam9pbignLicpKVxufVxuXG5mdW5jdGlvbiBpbnRlcm5hbE1peGluKFZ1ZSkge1xuXG4gIFZ1ZS5jb25maWcuZXJyb3JIYW5kbGVyID0gZnVuY3Rpb24oZXJyLCB2bSwgaW5mbykge1xuICAgIFZ1ZS51dGlsLndhcm4oKFwiRXJyb3IgaW4gXCIgKyBpbmZvICsgXCI6IFxcXCJcIiArIChlcnIudG9TdHJpbmcoKSkgKyBcIlxcXCJcIiksIHZtKTtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbiAgICB2YXIgYXBwID0gdHlwZW9mIGdldEFwcCA9PT0gJ2Z1bmN0aW9uJyAmJiBnZXRBcHAoKTtcbiAgICBpZiAoYXBwICYmIGFwcC5vbkVycm9yKSB7XG4gICAgICBhcHAub25FcnJvcihlcnIpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgb2xkRW1pdCA9IFZ1ZS5wcm90b3R5cGUuJGVtaXQ7XG5cbiAgVnVlLnByb3RvdHlwZS4kZW1pdCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuJHNjb3BlICYmIGV2ZW50KSB7XG4gICAgICB0aGlzLiRzY29wZVsndHJpZ2dlckV2ZW50J10oZXZlbnQsIHtcbiAgICAgICAgX19hcmdzX186IHRvQXJyYXkoYXJndW1lbnRzLCAxKVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBvbGRFbWl0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgfTtcblxuICBWdWUucHJvdG90eXBlLiRuZXh0VGljayA9IGZ1bmN0aW9uKGZuKSB7XG4gICAgcmV0dXJuIG5leHRUaWNrJDEodGhpcywgZm4pXG4gIH07XG5cbiAgTVBfTUVUSE9EUy5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICBWdWUucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmdzKSB7XG4gICAgICBpZiAodGhpcy4kc2NvcGUgJiYgdGhpcy4kc2NvcGVbbWV0aG9kXSkge1xuICAgICAgICByZXR1cm4gdGhpcy4kc2NvcGVbbWV0aG9kXShhcmdzKVxuICAgICAgfVxuICAgICAgLy8gbXAtYWxpcGF5XG4gICAgICBpZiAodHlwZW9mIG15ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmIChtZXRob2QgPT09ICdjcmVhdGVTZWxlY3RvclF1ZXJ5Jykge1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuICAgICAgICByZXR1cm4gbXkuY3JlYXRlU2VsZWN0b3JRdWVyeShhcmdzKVxuICAgICAgfSBlbHNlIGlmIChtZXRob2QgPT09ICdjcmVhdGVJbnRlcnNlY3Rpb25PYnNlcnZlcicpIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbiAgICAgICAgcmV0dXJuIG15LmNyZWF0ZUludGVyc2VjdGlvbk9ic2VydmVyKGFyZ3MpXG4gICAgICB9XG4gICAgICAvLyBUT0RPIG1wLWFsaXBheSDmmoLkuI3mlK/mjIEgc2VsZWN0QWxsQ29tcG9uZW50cyxzZWxlY3RDb21wb25lbnRcbiAgICB9O1xuICB9KTtcblxuICBWdWUucHJvdG90eXBlLl9faW5pdF9wcm92aWRlID0gaW5pdFByb3ZpZGU7XG5cbiAgVnVlLnByb3RvdHlwZS5fX2luaXRfaW5qZWN0aW9ucyA9IGluaXRJbmplY3Rpb25zO1xuXG4gIFZ1ZS5wcm90b3R5cGUuX19jYWxsX2hvb2sgPSBmdW5jdGlvbihob29rLCBhcmdzKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICAvLyAjNzU3MyBkaXNhYmxlIGRlcCBjb2xsZWN0aW9uIHdoZW4gaW52b2tpbmcgbGlmZWN5Y2xlIGhvb2tzXG4gICAgcHVzaFRhcmdldCgpO1xuICAgIHZhciBoYW5kbGVycyA9IHZtLiRvcHRpb25zW2hvb2tdO1xuICAgIHZhciBpbmZvID0gaG9vayArIFwiIGhvb2tcIjtcbiAgICB2YXIgcmV0O1xuICAgIGlmIChoYW5kbGVycykge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGogPSBoYW5kbGVycy5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgICAgcmV0ID0gaW52b2tlV2l0aEVycm9ySGFuZGxpbmcoaGFuZGxlcnNbaV0sIHZtLCBhcmdzID8gW2FyZ3NdIDogbnVsbCwgdm0sIGluZm8pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodm0uX2hhc0hvb2tFdmVudCkge1xuICAgICAgdm0uJGVtaXQoJ2hvb2s6JyArIGhvb2ssIGFyZ3MpO1xuICAgIH1cbiAgICBwb3BUYXJnZXQoKTtcbiAgICByZXR1cm4gcmV0XG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS5fX3NldF9tb2RlbCA9IGZ1bmN0aW9uKHRhcmdldCwga2V5LCB2YWx1ZSwgbW9kaWZpZXJzKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkobW9kaWZpZXJzKSkge1xuICAgICAgaWYgKG1vZGlmaWVycy5pbmRleE9mKCd0cmltJykgIT09IC0xKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUudHJpbSgpO1xuICAgICAgfVxuICAgICAgaWYgKG1vZGlmaWVycy5pbmRleE9mKCdudW1iZXInKSAhPT0gLTEpIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLl9uKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRhcmdldCA9IHRoaXM7XG4gICAgfVxuICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS5fX3NldF9zeW5jID0gZnVuY3Rpb24odGFyZ2V0LCBrZXksIHZhbHVlKSB7XG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRhcmdldCA9IHRoaXM7XG4gICAgfVxuICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS5fX2dldF9vcmlnID0gZnVuY3Rpb24oaXRlbSkge1xuICAgIGlmIChpc1BsYWluT2JqZWN0KGl0ZW0pKSB7XG4gICAgICByZXR1cm4gaXRlbVsnJG9yaWcnXSB8fCBpdGVtXG4gICAgfVxuICAgIHJldHVybiBpdGVtXG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS5fX2dldF92YWx1ZSA9IGZ1bmN0aW9uKGRhdGFQYXRoLCB0YXJnZXQpIHtcbiAgICByZXR1cm4gZ2V0VGFyZ2V0KHRhcmdldCB8fCB0aGlzLCBkYXRhUGF0aClcbiAgfTtcblxuXG4gIFZ1ZS5wcm90b3R5cGUuX19nZXRfY2xhc3MgPSBmdW5jdGlvbihkeW5hbWljQ2xhc3MsIHN0YXRpY0NsYXNzKSB7XG4gICAgcmV0dXJuIHJlbmRlckNsYXNzKHN0YXRpY0NsYXNzLCBkeW5hbWljQ2xhc3MpXG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS5fX2dldF9zdHlsZSA9IGZ1bmN0aW9uKGR5bmFtaWNTdHlsZSwgc3RhdGljU3R5bGUpIHtcbiAgICBpZiAoIWR5bmFtaWNTdHlsZSAmJiAhc3RhdGljU3R5bGUpIHtcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cbiAgICB2YXIgZHluYW1pY1N0eWxlT2JqID0gbm9ybWFsaXplU3R5bGVCaW5kaW5nKGR5bmFtaWNTdHlsZSk7XG4gICAgdmFyIHN0eWxlT2JqID0gc3RhdGljU3R5bGUgPyBleHRlbmQoc3RhdGljU3R5bGUsIGR5bmFtaWNTdHlsZU9iaikgOiBkeW5hbWljU3R5bGVPYmo7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHN0eWxlT2JqKS5tYXAoZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuICgoaHlwaGVuYXRlKG5hbWUpKSArIFwiOlwiICsgKHN0eWxlT2JqW25hbWVdKSk7IH0pLmpvaW4oJzsnKVxuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuX19tYXAgPSBmdW5jdGlvbih2YWwsIGl0ZXJhdGVlKSB7XG4gICAgLy9UT0RPIOaaguS4jeiAg+iZkSBzdHJpbmdcbiAgICB2YXIgcmV0LCBpLCBsLCBrZXlzLCBrZXk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgcmV0ID0gbmV3IEFycmF5KHZhbC5sZW5ndGgpO1xuICAgICAgZm9yIChpID0gMCwgbCA9IHZhbC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgcmV0W2ldID0gaXRlcmF0ZWUodmFsW2ldLCBpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXRcbiAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KHZhbCkpIHtcbiAgICAgIGtleXMgPSBPYmplY3Qua2V5cyh2YWwpO1xuICAgICAgcmV0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIGZvciAoaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICByZXRba2V5XSA9IGl0ZXJhdGVlKHZhbFtrZXldLCBrZXksIGkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJldFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJldCA9IG5ldyBBcnJheSh2YWwpO1xuICAgICAgZm9yIChpID0gMCwgbCA9IHZhbDsgaSA8IGw7IGkrKykge1xuICAgICAgICAvLyDnrKzkuIDkuKrlj4LmlbDmmoLml7bku43lkozlsI/nqIvluo/kuIDoh7RcbiAgICAgICAgcmV0W2ldID0gaXRlcmF0ZWUoaSwgaSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0XG4gICAgfVxuICAgIHJldHVybiBbXVxuICB9O1xuXG59XG5cbi8qICAqL1xuXG52YXIgTElGRUNZQ0xFX0hPT0tTJDEgPSBbXG4gICAgLy9BcHBcbiAgICAnb25MYXVuY2gnLFxuICAgICdvblNob3cnLFxuICAgICdvbkhpZGUnLFxuICAgICdvblVuaU5WaWV3TWVzc2FnZScsXG4gICAgJ29uUGFnZU5vdEZvdW5kJyxcbiAgICAnb25UaGVtZUNoYW5nZScsXG4gICAgJ29uRXJyb3InLFxuICAgICdvblVuaGFuZGxlZFJlamVjdGlvbicsXG4gICAgLy9QYWdlXG4gICAgJ29uSW5pdCcsXG4gICAgJ29uTG9hZCcsXG4gICAgLy8gJ29uU2hvdycsXG4gICAgJ29uUmVhZHknLFxuICAgIC8vICdvbkhpZGUnLFxuICAgICdvblVubG9hZCcsXG4gICAgJ29uUHVsbERvd25SZWZyZXNoJyxcbiAgICAnb25SZWFjaEJvdHRvbScsXG4gICAgJ29uVGFiSXRlbVRhcCcsXG4gICAgJ29uQWRkVG9GYXZvcml0ZXMnLFxuICAgICdvblNoYXJlVGltZWxpbmUnLFxuICAgICdvblNoYXJlQXBwTWVzc2FnZScsXG4gICAgJ29uUmVzaXplJyxcbiAgICAnb25QYWdlU2Nyb2xsJyxcbiAgICAnb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwJyxcbiAgICAnb25CYWNrUHJlc3MnLFxuICAgICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQnLFxuICAgICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZCcsXG4gICAgJ29uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZCcsXG4gICAgLy9Db21wb25lbnRcbiAgICAvLyAnb25SZWFkeScsIC8vIOWFvOWuueaXp+eJiOacrO+8jOW6lOivpeenu+mZpOivpeS6i+S7tlxuICAgICdvblBhZ2VTaG93JyxcbiAgICAnb25QYWdlSGlkZScsXG4gICAgJ29uUGFnZVJlc2l6ZSdcbl07XG5mdW5jdGlvbiBsaWZlY3ljbGVNaXhpbiQxKFZ1ZSkge1xuXG4gICAgLy9maXhlZCB2dWUtY2xhc3MtY29tcG9uZW50XG4gICAgdmFyIG9sZEV4dGVuZCA9IFZ1ZS5leHRlbmQ7XG4gICAgVnVlLmV4dGVuZCA9IGZ1bmN0aW9uKGV4dGVuZE9wdGlvbnMpIHtcbiAgICAgICAgZXh0ZW5kT3B0aW9ucyA9IGV4dGVuZE9wdGlvbnMgfHwge307XG5cbiAgICAgICAgdmFyIG1ldGhvZHMgPSBleHRlbmRPcHRpb25zLm1ldGhvZHM7XG4gICAgICAgIGlmIChtZXRob2RzKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhtZXRob2RzKS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2ROYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKExJRkVDWUNMRV9IT09LUyQxLmluZGV4T2YobWV0aG9kTmFtZSkhPT0tMSkge1xuICAgICAgICAgICAgICAgICAgICBleHRlbmRPcHRpb25zW21ldGhvZE5hbWVdID0gbWV0aG9kc1ttZXRob2ROYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG1ldGhvZHNbbWV0aG9kTmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb2xkRXh0ZW5kLmNhbGwodGhpcywgZXh0ZW5kT3B0aW9ucylcbiAgICB9O1xuXG4gICAgdmFyIHN0cmF0ZWdpZXMgPSBWdWUuY29uZmlnLm9wdGlvbk1lcmdlU3RyYXRlZ2llcztcbiAgICB2YXIgbWVyZ2VIb29rID0gc3RyYXRlZ2llcy5jcmVhdGVkO1xuICAgIExJRkVDWUNMRV9IT09LUyQxLmZvckVhY2goZnVuY3Rpb24gKGhvb2spIHtcbiAgICAgICAgc3RyYXRlZ2llc1tob29rXSA9IG1lcmdlSG9vaztcbiAgICB9KTtcblxuICAgIFZ1ZS5wcm90b3R5cGUuX19saWZlY3ljbGVfaG9va3NfXyA9IExJRkVDWUNMRV9IT09LUyQxO1xufVxuXG4vKiAgKi9cblxuLy8gaW5zdGFsbCBwbGF0Zm9ybSBwYXRjaCBmdW5jdGlvblxuVnVlLnByb3RvdHlwZS5fX3BhdGNoX18gPSBwYXRjaDtcblxuLy8gcHVibGljIG1vdW50IG1ldGhvZFxuVnVlLnByb3RvdHlwZS4kbW91bnQgPSBmdW5jdGlvbihcbiAgICBlbCAsXG4gICAgaHlkcmF0aW5nIFxuKSB7XG4gICAgcmV0dXJuIG1vdW50Q29tcG9uZW50JDEodGhpcywgZWwsIGh5ZHJhdGluZylcbn07XG5cbmxpZmVjeWNsZU1peGluJDEoVnVlKTtcbmludGVybmFsTWl4aW4oVnVlKTtcblxuLyogICovXG5cbmV4cG9ydCBkZWZhdWx0IFZ1ZTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlLCAvKiB2dWUtY2xpIG9ubHkgKi9cbiAgY29tcG9uZW50cywgLy8gZml4ZWQgYnkgeHh4eHh4IGF1dG8gY29tcG9uZW50c1xuICByZW5kZXJqcyAvLyBmaXhlZCBieSB4eHh4eHggcmVuZGVyanNcbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIGZpeGVkIGJ5IHh4eHh4eCBhdXRvIGNvbXBvbmVudHNcbiAgaWYgKGNvbXBvbmVudHMpIHtcbiAgICBpZiAoIW9wdGlvbnMuY29tcG9uZW50cykge1xuICAgICAgb3B0aW9ucy5jb21wb25lbnRzID0ge31cbiAgICB9XG4gICAgdmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHlcbiAgICBmb3IgKHZhciBuYW1lIGluIGNvbXBvbmVudHMpIHtcbiAgICAgIGlmIChoYXNPd24uY2FsbChjb21wb25lbnRzLCBuYW1lKSAmJiAhaGFzT3duLmNhbGwob3B0aW9ucy5jb21wb25lbnRzLCBuYW1lKSkge1xuICAgICAgICBvcHRpb25zLmNvbXBvbmVudHNbbmFtZV0gPSBjb21wb25lbnRzW25hbWVdXG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIGZpeGVkIGJ5IHh4eHh4eCByZW5kZXJqc1xuICBpZiAocmVuZGVyanMpIHtcbiAgICAocmVuZGVyanMuYmVmb3JlQ3JlYXRlIHx8IChyZW5kZXJqcy5iZWZvcmVDcmVhdGUgPSBbXSkpLnVuc2hpZnQoZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzW3JlbmRlcmpzLl9fbW9kdWxlXSA9IHRoaXNcbiAgICB9KTtcbiAgICAob3B0aW9ucy5taXhpbnMgfHwgKG9wdGlvbnMubWl4aW5zID0gW10pKS5wdXNoKHJlbmRlcmpzKVxuICB9XG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHsgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgdGhpcy4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290KSB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iLCIvLyDlvJXlhaXlhajlsYBtaXhpblxyXG5pbXBvcnQgbWl4aW4gZnJvbSAnLi9saWJzL21peGluL21peGluLmpzJ1xyXG4vLyDlvJXlhaXlhbPkuo7mmK/lkKZtaXhpbumbhuaIkOWwj+eoi+W6j+WIhuS6q+eahOmFjee9rlxyXG4vLyBpbXBvcnQgd3hzaGFyZSBmcm9tICcuL2xpYnMvbWl4aW4vbXBTaGFyZS5qcydcclxuLy8g5YWo5bGA5oyC6L295byV5YWlaHR0cOebuOWFs+ivt+axguaLpuaIquaPkuS7tlxyXG5pbXBvcnQgaHR0cCBmcm9tICcuL2xpYnMvcmVxdWVzdCdcclxuXHJcbmZ1bmN0aW9uIHdyYW5uaW5nKHN0cikge1xyXG5cdC8vIOW8gOWPkeeOr+Wig+i/m+ihjOS/oeaBr+i+k+WHuizkuLvopoHmmK/kuIDkupvmiqXplJnkv6Hmga9cclxuXHQvLyDov5nkuKrnjq/looPnmoTmnaXnlLHmmK/lnKjnqIvluo/nvJblhpnml7blgJks54K55Ye7aHjnvJbovpHlmajov5DooYzosIPor5Xku6PnoIHnmoTml7blgJks6K+m6KeBOlxyXG5cdC8vIFx0aHR0cHM6Ly91bmlhcHAuZGNsb3VkLmlvL2ZyYW1lP2lkPSVlNSViYyU4MCVlNSU4ZiU5MSVlNyU4ZSVhZiVlNSVhMiU4MyVlNSU5MiU4YyVlNyU5NCU5ZiVlNCViYSVhNyVlNyU4ZSVhZiVlNSVhMiU4M1xyXG5cdGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG5cdFx0Y29uc29sZS53YXJuKHN0cilcclxuXHR9XHJcbn1cclxuXHJcbi8vIOWwneivleWIpOaWreWcqOagueebruW9leeahC9zdG9yZeS4reaYr+WQpuaciSR1Lm1peGluLmpz77yM5q2k5paH5Lu2dVZpZXfpu5jorqTkuLrpnIDopoHmjILlnKjliLDlhajlsYDnmoR2dWV455qEc3RhdGXlj5jph49cclxuLy8gSFgyLjYuMTHniYjmnKws5pS+5YiwdHJ55LitLOaOp+WItuWPsOS+neeEtuS8muitpuWRiizmmoLml7bkuI3nlKjmraTmlrnlvI/vvIxcclxuLy8gbGV0IHZ1ZXhTdG9yZSA9IHt9O1xyXG4vLyB0cnkge1xyXG4vLyBcdHZ1ZXhTdG9yZSA9IHJlcXVpcmUoXCJAL3N0b3JlLyR1Lm1peGluLmpzXCIpO1xyXG4vLyB9IGNhdGNoIChlKSB7XHJcbi8vIFx0Ly9UT0RPIGhhbmRsZSB0aGUgZXhjZXB0aW9uXHJcbi8vIH1cclxuXHJcbi8vIHBvc3Tnsbvlnovlr7nosaHlj4LmlbDovazkuLpnZXTnsbvlnot1cmzlj4LmlbBcclxuaW1wb3J0IHF1ZXJ5UGFyYW1zIGZyb20gJy4vbGlicy9mdW5jdGlvbi9xdWVyeVBhcmFtcy5qcydcclxuLy8g6Lev55Sx5bCB6KOFXHJcbmltcG9ydCByb3V0ZSBmcm9tICcuL2xpYnMvZnVuY3Rpb24vcm91dGUuanMnXHJcbi8vIOaXtumXtOagvOW8j+WMllxyXG5pbXBvcnQgdGltZUZvcm1hdCBmcm9tICcuL2xpYnMvZnVuY3Rpb24vdGltZUZvcm1hdC5qcydcclxuLy8g5pe26Ze05oiz5qC85byP5YyWLOi/lOWbnuWkmuS5heS5i+WJjVxyXG5pbXBvcnQgdGltZUZyb20gZnJvbSAnLi9saWJzL2Z1bmN0aW9uL3RpbWVGcm9tLmpzJ1xyXG4vLyDpopzoibLmuJDlj5jnm7jlhbMsY29sb3JHcmFkaWVudC3popzoibLmuJDlj5gsaGV4VG9SZ2It5Y2B5YWt6L+b5Yi26aKc6Imy6L2scmdi6aKc6ImyLHJnYlRvSGV4LXJnYui9rOWNgeWFrei/m+WItlxyXG5pbXBvcnQgY29sb3JHcmFkaWVudCBmcm9tICcuL2xpYnMvZnVuY3Rpb24vY29sb3JHcmFkaWVudC5qcydcclxuLy8g55Sf5oiQ5YWo5bGA5ZSv5LiAZ3VpZOWtl+espuS4slxyXG5pbXBvcnQgZ3VpZCBmcm9tICcuL2xpYnMvZnVuY3Rpb24vZ3VpZC5qcydcclxuLy8g5Li76aKY55u45YWz6aKc6ImyLGluZm98c3VjY2Vzc3x3YXJuaW5nfHByaW1hcnl8ZGVmYXVsdHxlcnJvcizmraTpopzoibLlt7LlnKh1dmlldy5zY3Nz5Lit5a6a5LmJLOS9huaYr+S4umpz5Lit5Lmf6IO95L2/55SoLOaVheS5n+WumuS5ieS4gOS7vVxyXG5pbXBvcnQgY29sb3IgZnJvbSAnLi9saWJzL2Z1bmN0aW9uL2NvbG9yLmpzJ1xyXG4vLyDmoLnmja50eXBl6I635Y+W5Zu+5qCH5ZCN56ewXHJcbmltcG9ydCB0eXBlMmljb24gZnJvbSAnLi9saWJzL2Z1bmN0aW9uL3R5cGUyaWNvbi5qcydcclxuLy8g5omT5Lmx5pWw57uE55qE6aG65bqPXHJcbmltcG9ydCByYW5kb21BcnJheSBmcm9tICcuL2xpYnMvZnVuY3Rpb24vcmFuZG9tQXJyYXkuanMnXHJcbi8vIOWvueixoeWSjOaVsOe7hOeahOa3seW6puWFi+mahlxyXG5pbXBvcnQgZGVlcENsb25lIGZyb20gJy4vbGlicy9mdW5jdGlvbi9kZWVwQ2xvbmUuanMnXHJcbi8vIOWvueixoea3seW6puaLt+i0nVxyXG5pbXBvcnQgZGVlcE1lcmdlIGZyb20gJy4vbGlicy9mdW5jdGlvbi9kZWVwTWVyZ2UuanMnXHJcbi8vIOa3u+WKoOWNleS9jVxyXG5pbXBvcnQgYWRkVW5pdCBmcm9tICcuL2xpYnMvZnVuY3Rpb24vYWRkVW5pdC5qcydcclxuXHJcbi8vIOinhOWImeajgOmqjFxyXG5pbXBvcnQgdGVzdCBmcm9tICcuL2xpYnMvZnVuY3Rpb24vdGVzdC5qcydcclxuLy8g6ZqP5py65pWwXHJcbmltcG9ydCByYW5kb20gZnJvbSAnLi9saWJzL2Z1bmN0aW9uL3JhbmRvbS5qcydcclxuLy8g5Y676Zmk56m65qC8XHJcbmltcG9ydCB0cmltIGZyb20gJy4vbGlicy9mdW5jdGlvbi90cmltLmpzJ1xyXG4vLyB0b2FzdOaPkOekuu+8jOWvuXVuaS5zaG93VG9hc3TnmoTlsIHoo4VcclxuaW1wb3J0IHRvYXN0IGZyb20gJy4vbGlicy9mdW5jdGlvbi90b2FzdC5qcydcclxuLy8g6I635Y+W54i257uE5Lu25Y+C5pWwXHJcbmltcG9ydCBnZXRQYXJlbnQgZnJvbSAnLi9saWJzL2Z1bmN0aW9uL2dldFBhcmVudC5qcydcclxuLy8g6I635Y+W5pW05Liq54i257uE5Lu2XHJcbmltcG9ydCAkcGFyZW50IGZyb20gJy4vbGlicy9mdW5jdGlvbi8kcGFyZW50LmpzJ1xyXG4vLyDojrflj5ZzeXMoKeWSjG9zKCnlt6Xlhbfmlrnms5VcclxuLy8g6I635Y+W6K6+5aSH5L+h5oGv77yM5oyC6L295YiwJHXnmoRzeXMoKShzeXN0ZW3nmoTnvKnlhpkp5bGe5oCn5Lit77yMXHJcbi8vIOWQjOaXtuaKiuWuieWNk+WSjGlvc+W5s+WPsOeahOWQjeensFwiaW9zXCLlkoxcImFuZHJvaWRcIuaMguWIsCR1Lm9zKCnkuK3vvIzmlrnkvr/lj5bnlKhcclxuaW1wb3J0IHtzeXMsIG9zfSBmcm9tICcuL2xpYnMvZnVuY3Rpb24vc3lzLmpzJ1xyXG4vLyDpmLLmipbmlrnms5VcclxuaW1wb3J0IGRlYm91bmNlIGZyb20gJy4vbGlicy9mdW5jdGlvbi9kZWJvdW5jZS5qcydcclxuLy8g6IqC5rWB5pa55rOVXHJcbmltcG9ydCB0aHJvdHRsZSBmcm9tICcuL2xpYnMvZnVuY3Rpb24vdGhyb3R0bGUuanMnXHJcblxyXG5cclxuLy8g6YWN572u5L+h5oGvXHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi9saWJzL2NvbmZpZy9jb25maWcuanMnXHJcbi8vIOWQhOS4qumcgOimgWZpeGVk55qE5Zyw5pa555qEei1pbmRleOmFjee9ruaWh+S7tlxyXG5pbXBvcnQgekluZGV4IGZyb20gJy4vbGlicy9jb25maWcvekluZGV4LmpzJ1xyXG5cclxuY29uc3QgJHUgPSB7XHJcblx0cXVlcnlQYXJhbXM6IHF1ZXJ5UGFyYW1zLFxyXG5cdHJvdXRlOiByb3V0ZSxcclxuXHR0aW1lRm9ybWF0OiB0aW1lRm9ybWF0LFxyXG5cdGRhdGU6IHRpbWVGb3JtYXQsIC8vIOWPpuWQjWRhdGVcclxuXHR0aW1lRnJvbSxcclxuXHRjb2xvckdyYWRpZW50OiBjb2xvckdyYWRpZW50LmNvbG9yR3JhZGllbnQsXHJcblx0Y29sb3JUb1JnYmE6IGNvbG9yR3JhZGllbnQuY29sb3JUb1JnYmEsXHJcblx0Z3VpZCxcclxuXHRjb2xvcixcclxuXHRzeXMsXHJcblx0b3MsXHJcblx0dHlwZTJpY29uLFxyXG5cdHJhbmRvbUFycmF5LFxyXG5cdHdyYW5uaW5nLFxyXG5cdGdldDogaHR0cC5nZXQsXHJcblx0cG9zdDogaHR0cC5wb3N0LFxyXG5cdHB1dDogaHR0cC5wdXQsXHJcblx0J2RlbGV0ZSc6IGh0dHAuZGVsZXRlLFxyXG5cdGhleFRvUmdiOiBjb2xvckdyYWRpZW50LmhleFRvUmdiLFxyXG5cdHJnYlRvSGV4OiBjb2xvckdyYWRpZW50LnJnYlRvSGV4LFxyXG5cdHRlc3QsXHJcblx0cmFuZG9tLFxyXG5cdGRlZXBDbG9uZSxcclxuXHRkZWVwTWVyZ2UsXHJcblx0Z2V0UGFyZW50LFxyXG5cdCRwYXJlbnQsXHJcblx0YWRkVW5pdCxcclxuXHR0cmltLFxyXG5cdHR5cGU6IFsncHJpbWFyeScsICdzdWNjZXNzJywgJ2Vycm9yJywgJ3dhcm5pbmcnLCAnaW5mbyddLFxyXG5cdGh0dHAsXHJcblx0dG9hc3QsXHJcblx0Y29uZmlnLCAvLyB1Vmlld+mFjee9ruS/oeaBr+ebuOWFs++8jOavlOWmgueJiOacrOWPt1xyXG5cdHpJbmRleCxcclxuXHRkZWJvdW5jZSxcclxuXHR0aHJvdHRsZSxcclxufVxyXG5cclxuLy8gJHXmjILovb3liLB1bmnlr7nosaHkuIpcclxudW5pLiR1ID0gJHVcclxuXHJcbmNvbnN0IGluc3RhbGwgPSBWdWUgPT4ge1xyXG5cdFZ1ZS5taXhpbihtaXhpbikgXHJcblx0aWYgKFZ1ZS5wcm90b3R5cGUub3BlblNoYXJlKSB7XHJcblx0XHRWdWUubWl4aW4obXBTaGFyZSk7XHJcblx0fVxyXG5cdC8vIFZ1ZS5taXhpbih2dWV4U3RvcmUpO1xyXG5cdC8vIOaXtumXtOagvOW8j+WMlu+8jOWQjOaXtuS4pOS4quWQjeensO+8jGRhdGXlkox0aW1lRm9ybWF0XHJcblx0VnVlLmZpbHRlcigndGltZUZvcm1hdCcsICh0aW1lc3RhbXAsIGZvcm1hdCkgPT4ge1xyXG5cdFx0cmV0dXJuIHRpbWVGb3JtYXQodGltZXN0YW1wLCBmb3JtYXQpXHJcblx0fSlcclxuXHRWdWUuZmlsdGVyKCdkYXRlJywgKHRpbWVzdGFtcCwgZm9ybWF0KSA9PiB7XHJcblx0XHRyZXR1cm4gdGltZUZvcm1hdCh0aW1lc3RhbXAsIGZvcm1hdClcclxuXHR9KVxyXG5cdC8vIOWwhuWkmuS5heS7peWJjeeahOaWueazle+8jOazqOWFpeWIsOWFqOWxgOi/h+a7pOWZqFxyXG5cdFZ1ZS5maWx0ZXIoJ3RpbWVGcm9tJywgKHRpbWVzdGFtcCwgZm9ybWF0KSA9PiB7XHJcblx0XHRyZXR1cm4gdGltZUZyb20odGltZXN0YW1wLCBmb3JtYXQpXHJcblx0fSlcclxuXHRWdWUucHJvdG90eXBlLiR1ID0gJHVcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGluc3RhbGxcclxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGRhdGEoKSB7XHJcblx0XHRyZXR1cm4ge31cclxuXHR9LFxyXG5cdG9uTG9hZCgpIHtcclxuXHRcdC8vIGdldFJlY3TmjILovb3liLAkdeS4iu+8jOWboOS4uui/meaWueazlemcgOimgeS9v+eUqGluKHRoaXMp77yM5omA5Lul5peg5rOV5oqK5a6D54us56uL5oiQ5LiA5Liq5Y2V54us55qE5paH5Lu25a+85Ye6XHJcblx0XHR0aGlzLiR1LmdldFJlY3QgPSB0aGlzLiR1R2V0UmVjdFxyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0Ly8g5p+l6K+i6IqC54K55L+h5oGvXHJcblx0XHQvLyDnm67liY3mraTmlrnms5XlnKjmlK/ku5jlrp3lsI/nqIvluo/kuK3ml6Dms5Xojrflj5bnu4Tku7bot5/mjqXngrnnmoTlsLrlr7jvvIzkuLrmlK/ku5jlrp3nmoRidWcoMjAyMC0wNy0yMSlcclxuXHRcdC8vIOino+WGs+WKnuazleS4uuWcqOe7hOS7tuaguemDqOWGjeWll+S4gOS4quayoeacieS7u+S9leS9nOeUqOeahHZpZXflhYPntKBcclxuXHRcdCR1R2V0UmVjdChzZWxlY3RvciwgYWxsKSB7XHJcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuXHRcdFx0XHR1bmkuY3JlYXRlU2VsZWN0b3JRdWVyeSgpLlxyXG5cdFx0XHRcdGluKHRoaXMpW2FsbCA/ICdzZWxlY3RBbGwnIDogJ3NlbGVjdCddKHNlbGVjdG9yKVxyXG5cdFx0XHRcdFx0LmJvdW5kaW5nQ2xpZW50UmVjdChyZWN0ID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKGFsbCAmJiBBcnJheS5pc0FycmF5KHJlY3QpICYmIHJlY3QubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZShyZWN0KVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGlmICghYWxsICYmIHJlY3QpIHtcclxuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKHJlY3QpXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQuZXhlYygpXHJcblx0XHRcdH0pXHJcblx0XHR9LFxyXG5cdFx0Z2V0UGFyZW50RGF0YShwYXJlbnROYW1lID0gJycpIHtcclxuXHRcdFx0Ly8g6YG/5YWN5ZyoY3JlYXRlZOS4reWOu+WumuS5iXBhcmVudOWPmOmHj1xyXG5cdFx0XHRpZighdGhpcy5wYXJlbnQpIHRoaXMucGFyZW50ID0gZmFsc2U7XHJcblx0XHRcdC8vIOi/memHjOeahOacrOi0qOWOn+eQhuaYr++8jOmAmui/h+iOt+WPlueItue7hOS7tuWunuS+iyjkuZ/ljbN1LXJhZGlvLWdyb3Vw55qEdGhpcylcclxuXHRcdFx0Ly8g5bCG54i257uE5Lu2dGhpc+S4reWvueW6lOeahOWPguaVsO+8jOi1i+WAvOe7meacrOe7hOS7tih1LXJhZGlv55qEdGhpcynnmoRwYXJlbnREYXRh5a+56LGh5Lit5a+55bqU55qE5bGe5oCnXHJcblx0XHRcdC8vIOS5i+aJgOS7pemcgOimgei/meS5iOWBmu+8jOaYr+WboOS4uuaJgOacieerr+S4re+8jOWktOadoeWwj+eoi+W6j+S4jeaUr+aMgemAmui/h3RoaXMucGFyZW50Lnh4eOWOu+ebkeWQrOeItue7hOS7tuWPguaVsOeahOWPmOWMllxyXG5cdFx0XHR0aGlzLnBhcmVudCA9IHRoaXMuJHUuJHBhcmVudC5jYWxsKHRoaXMsIHBhcmVudE5hbWUpO1xyXG5cdFx0XHRpZih0aGlzLnBhcmVudCkge1xyXG5cdFx0XHRcdC8vIOWOhumBjXBhcmVudERhdGHkuK3nmoTlsZ7mgKfvvIzlsIZwYXJlbnTkuK3nmoTlkIzlkI3lsZ7mgKfotYvlgLznu5lwYXJlbnREYXRhXHJcblx0XHRcdFx0T2JqZWN0LmtleXModGhpcy5wYXJlbnREYXRhKS5tYXAoa2V5ID0+IHtcclxuXHRcdFx0XHRcdHRoaXMucGFyZW50RGF0YVtrZXldID0gdGhpcy5wYXJlbnRba2V5XTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdC8vIOmYu+atouS6i+S7tuWGkuazoVxyXG5cdFx0cHJldmVudEV2ZW50KGUpIHtcclxuXHRcdFx0ZSAmJiBlLnN0b3BQcm9wYWdhdGlvbiAmJiBlLnN0b3BQcm9wYWdhdGlvbigpXHJcblx0XHR9XHJcblx0fSxcclxuXHRvblJlYWNoQm90dG9tKCkge1xyXG5cdFx0dW5pLiRlbWl0KCd1T25SZWFjaEJvdHRvbScpXHJcblx0fSxcclxuXHRiZWZvcmVEZXN0cm95KCkge1xyXG5cdFx0Ly8g5Yik5pat5b2T5YmN6aG16Z2i5piv5ZCm5a2Y5ZyocGFyZW505ZKMY2hsZHJlbu+8jOS4gOiIrOWcqGNoZWNrYm945ZKMY2hlY2tib3gtZ3JvdXDniLblrZDogZTliqjnmoTlnLrmma/kvJrmnInmraTmg4XlhrVcclxuXHRcdC8vIOe7hOS7tumUgOavgeaXtu+8jOenu+mZpOWtkOe7hOS7tuWcqOeItue7hOS7tmNoaWxkcmVu5pWw57uE5Lit55qE5a6e5L6L77yM6YeK5pS+6LWE5rqQ77yM6YG/5YWN5pWw5o2u5re35LmxXHJcblx0XHRpZih0aGlzLnBhcmVudCAmJiB1bmkuJHUudGVzdC5hcnJheSh0aGlzLnBhcmVudC5jaGlsZHJlbikpIHtcclxuXHRcdFx0Ly8g57uE5Lu26ZSA5q+B5pe277yM56e76Zmk54i257uE5Lu25Lit55qEY2hpbGRyZW7mlbDnu4TkuK3lr7nlupTnmoTlrp7kvotcclxuXHRcdFx0Y29uc3QgY2hpbGRyZW5MaXN0ID0gdGhpcy5wYXJlbnQuY2hpbGRyZW5cclxuXHRcdFx0Y2hpbGRyZW5MaXN0Lm1hcCgoY2hpbGQsIGluZGV4KSA9PiB7XHJcblx0XHRcdFx0Ly8g5aaC5p6c55u4562J77yM5YiZ56e76ZmkXHJcblx0XHRcdFx0aWYoY2hpbGQgPT09IHRoaXMpIHtcclxuXHRcdFx0XHRcdGNoaWxkcmVuTGlzdC5zcGxpY2UoaW5kZXgsIDEpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgZGVlcE1lcmdlIGZyb20gXCIuLi9mdW5jdGlvbi9kZWVwTWVyZ2VcIjtcclxuaW1wb3J0IHZhbGlkYXRlIGZyb20gXCIuLi9mdW5jdGlvbi90ZXN0XCI7XHJcbmNsYXNzIFJlcXVlc3Qge1xyXG5cdC8vIOiuvue9ruWFqOWxgOm7mOiupOmFjee9rlxyXG5cdHNldENvbmZpZyhjdXN0b21Db25maWcpIHtcclxuXHRcdC8vIOa3seW6puWQiOW5tuWvueixoe+8jOWQpuWImeS8mumAoOaIkOWvueixoea3seWxguWxnuaAp+S4ouWksVxyXG5cdFx0dGhpcy5jb25maWcgPSBkZWVwTWVyZ2UodGhpcy5jb25maWcsIGN1c3RvbUNvbmZpZyk7XHJcblx0fVxyXG5cclxuXHQvLyDkuLvopoHor7fmsYLpg6jliIZcclxuXHRyZXF1ZXN0KG9wdGlvbnMgPSB7fSkge1xyXG5cdFx0Ly8g5qOA5p+l6K+35rGC5oum5oiqXHJcblx0XHRpZiAodGhpcy5pbnRlcmNlcHRvci5yZXF1ZXN0ICYmIHR5cGVvZiB0aGlzLmludGVyY2VwdG9yLnJlcXVlc3QgPT09ICdmdW5jdGlvbicpIHtcclxuXHRcdFx0bGV0IHRtcENvbmZpZyA9IHt9O1xyXG5cdFx0XHRsZXQgaW50ZXJjZXB0b3JSZXF1ZXN0ID0gdGhpcy5pbnRlcmNlcHRvci5yZXF1ZXN0KG9wdGlvbnMpO1xyXG5cdFx0XHRpZiAoaW50ZXJjZXB0b3JSZXF1ZXN0ID09PSBmYWxzZSkge1xyXG5cdFx0XHRcdC8vIOi/lOWbnuS4gOS4quWkhOS6jnBlbmRpbmfnirbmgIHkuK3nmoRQcm9taXNl77yM5p2l5Y+W5raI5Y6fcHJvbWlzZe+8jOmBv+WFjei/m+WFpXRoZW4oKeWbnuiwg1xyXG5cdFx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgoKT0+e30pO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMub3B0aW9ucyA9IGludGVyY2VwdG9yUmVxdWVzdDtcclxuXHRcdH1cclxuXHRcdG9wdGlvbnMuZGF0YVR5cGUgPSBvcHRpb25zLmRhdGFUeXBlIHx8IHRoaXMuY29uZmlnLmRhdGFUeXBlO1xyXG5cdFx0b3B0aW9ucy5yZXNwb25zZVR5cGUgPSBvcHRpb25zLnJlc3BvbnNlVHlwZSB8fCB0aGlzLmNvbmZpZy5yZXNwb25zZVR5cGU7XHJcblx0XHRvcHRpb25zLnVybCA9IG9wdGlvbnMudXJsIHx8ICcnO1xyXG5cdFx0b3B0aW9ucy5wYXJhbXMgPSBvcHRpb25zLnBhcmFtcyB8fCB7fTtcclxuXHRcdG9wdGlvbnMuaGVhZGVyID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5jb25maWcuaGVhZGVyLCBvcHRpb25zLmhlYWRlcik7XHJcblx0XHRvcHRpb25zLm1ldGhvZCA9IG9wdGlvbnMubWV0aG9kIHx8IHRoaXMuY29uZmlnLm1ldGhvZDtcclxuXHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRvcHRpb25zLmNvbXBsZXRlID0gKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0Ly8g6K+35rGC6L+U5Zue5ZCO77yM6ZqQ6JePbG9hZGluZyjlpoLmnpzor7fmsYLov5Tlm57lv6vnmoTor53vvIzlj6/og73kvJrmsqHmnIlsb2FkaW5nKVxyXG5cdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpO1xyXG5cdFx0XHRcdC8vIOa4hemZpOWumuaXtuWZqO+8jOWmguaenOivt+axguWbnuadpeS6hu+8jOWwseaXoOmcgGxvYWRpbmdcclxuXHRcdFx0XHRjbGVhclRpbWVvdXQodGhpcy5jb25maWcudGltZXIpO1xyXG5cdFx0XHRcdHRoaXMuY29uZmlnLnRpbWVyID0gbnVsbDtcclxuXHRcdFx0XHQvLyDliKTmlq3nlKjmiLflr7nmi6bmiKrov5Tlm57mlbDmja7nmoTopoHmsYLvvIzlpoLmnpxvcmlnaW5hbERhdGHkuLp0cnVl77yM6L+U5Zue5omA5pyJ55qE5pWw5o2uKHJlc3BvbnNlKeWIsOaLpuaIquWZqO+8jOWQpuWImeWPqui/lOWbnnJlc3BvbnNlLmRhdGFcclxuXHRcdFx0XHRpZih0aGlzLmNvbmZpZy5vcmlnaW5hbERhdGEpIHtcclxuXHRcdFx0XHRcdC8vIOWIpOaWreaYr+WQpuWtmOWcqOaLpuaIquWZqFxyXG5cdFx0XHRcdFx0aWYgKHRoaXMuaW50ZXJjZXB0b3IucmVzcG9uc2UgJiYgdHlwZW9mIHRoaXMuaW50ZXJjZXB0b3IucmVzcG9uc2UgPT09ICdmdW5jdGlvbicpIHtcclxuXHRcdFx0XHRcdFx0bGV0IHJlc0ludGVyY2VwdG9ycyA9IHRoaXMuaW50ZXJjZXB0b3IucmVzcG9uc2UocmVzcG9uc2UpO1xyXG5cdFx0XHRcdFx0XHQvLyDlpoLmnpzmi6bmiKrlmajkuI3ov5Tlm55mYWxzZe+8jOWwseWwhuaLpuaIquWZqOi/lOWbnueahOWGheWuuee7mXRoaXMuJHUucG9zdOeahHRoZW7lm57osINcclxuXHRcdFx0XHRcdFx0aWYgKHJlc0ludGVyY2VwdG9ycyAhPT0gZmFsc2UpIHtcclxuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKHJlc0ludGVyY2VwdG9ycyk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0Ly8g5aaC5p6c5oum5oiq5Zmo6L+U5ZueZmFsc2XvvIzmhI/lkbPnnYDmi6bmiKrlmajlrprkuYnogIXorqTkuLrov5Tlm57mnInpl67popjvvIznm7TmjqXmjqXlhaVjYXRjaOWbnuiwg1xyXG5cdFx0XHRcdFx0XHRcdHJlamVjdChyZXNwb25zZSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdC8vIOWmguaenOimgeaxgui/lOWbnuWOn+Wni+aVsOaNru+8jOWwseeul+ayoeacieaLpuaIquWZqO+8jOS5n+i/lOWbnuacgOWOn+Wni+eahOaVsOaNrlxyXG5cdFx0XHRcdFx0XHRyZXNvbHZlKHJlc3BvbnNlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0aWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgPT0gMjAwKSB7XHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLmludGVyY2VwdG9yLnJlc3BvbnNlICYmIHR5cGVvZiB0aGlzLmludGVyY2VwdG9yLnJlc3BvbnNlID09PSAnZnVuY3Rpb24nKSB7XHJcblx0XHRcdFx0XHRcdFx0bGV0IHJlc0ludGVyY2VwdG9ycyA9IHRoaXMuaW50ZXJjZXB0b3IucmVzcG9uc2UocmVzcG9uc2UuZGF0YSk7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHJlc0ludGVyY2VwdG9ycyAhPT0gZmFsc2UpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJlc29sdmUocmVzSW50ZXJjZXB0b3JzKTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVqZWN0KHJlc3BvbnNlLmRhdGEpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHQvLyDlpoLmnpzkuI3mmK/ov5Tlm57ljp/lp4vmlbDmja4ob3JpZ2luYWxEYXRhPWZhbHNlKe+8jOS4lOayoeacieaLpuaIquWZqOeahOaDheWGteS4i++8jOi/lOWbnue6r+aVsOaNrue7mXRoZW7lm57osINcclxuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHQvLyDkuI3ov5Tlm57ljp/lp4vmlbDmja7nmoTmg4XlhrXkuIvvvIzmnI3liqHlmajnirbmgIHnoIHkuI3kuLoyMDDvvIxtb2RhbOW8ueahhuaPkOekulxyXG5cdFx0XHRcdFx0XHQvLyBpZihyZXNwb25zZS5lcnJNc2cpIHtcclxuXHRcdFx0XHRcdFx0Ly8gXHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0XHRcdFx0Ly8gXHRcdHRpdGxlOiByZXNwb25zZS5lcnJNc2dcclxuXHRcdFx0XHRcdFx0Ly8gXHR9KTtcclxuXHRcdFx0XHRcdFx0Ly8gfVxyXG5cdFx0XHRcdFx0XHRyZWplY3QocmVzcG9uc2UpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyDliKTmlq3nlKjmiLfkvKDpgJLnmoRVUkzmmK/lkKYv5byA5aS0LOWmguaenOS4jeaYryzliqDkuIov77yM6L+Z6YeM5L2/55So5LqGdVZpZXfnmoR0ZXN0Lmpz6aqM6K+B5bqT55qEdXJsKCnmlrnms5VcclxuXHRcdFx0b3B0aW9ucy51cmwgPSB2YWxpZGF0ZS51cmwob3B0aW9ucy51cmwpID8gb3B0aW9ucy51cmwgOiAodGhpcy5jb25maWcuYmFzZVVybCArIChvcHRpb25zLnVybC5pbmRleE9mKCcvJykgPT0gMCA/XHJcblx0XHRcdFx0b3B0aW9ucy51cmwgOiAnLycgKyBvcHRpb25zLnVybCkpO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8g5piv5ZCm5pi+56S6bG9hZGluZ1xyXG5cdFx0XHQvLyDliqDkuIDkuKrmmK/lkKblt7LmnIl0aW1lcuWumuaXtuWZqOeahOWIpOaWre+8jOWQpuWImeacieS4pOS4quWQjOaXtuivt+axgueahOaXtuWAme+8jOWQjuiAheS8mua4hemZpOWJjeiAheeahOWumuaXtuWZqGlkXHJcblx0XHRcdC8vIOiAjOayoeaciea4hemZpOWJjeiAheeahOWumuaXtuWZqO+8jOWvvOiHtOWJjeiAhei2heaXtu+8jOS4gOebtOaYvuekumxvYWRpbmdcclxuXHRcdFx0aWYodGhpcy5jb25maWcuc2hvd0xvYWRpbmcgJiYgIXRoaXMuY29uZmlnLnRpbWVyKSB7XHJcblx0XHRcdFx0dGhpcy5jb25maWcudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdHVuaS5zaG93TG9hZGluZyh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiB0aGlzLmNvbmZpZy5sb2FkaW5nVGV4dCxcclxuXHRcdFx0XHRcdFx0bWFzazogdGhpcy5jb25maWcubG9hZGluZ01hc2tcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR0aGlzLmNvbmZpZy50aW1lciA9IG51bGw7XHJcblx0XHRcdFx0fSwgdGhpcy5jb25maWcubG9hZGluZ1RpbWUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHVuaS5yZXF1ZXN0KG9wdGlvbnMpO1xyXG5cdFx0fSlcclxuXHRcdC8vIC5jYXRjaChyZXMgPT4ge1xyXG5cdFx0Ly8gXHQvLyDlpoLmnpzov5Tlm55yZWplY3QoKe+8jOS4jeiuqeWFtui/m+WFpXRoaXMuJHUucG9zdCgpLnRoZW4oKS5jYXRjaCgp5ZCO6Z2i55qEY2F0Y3QoKVxyXG5cdFx0Ly8gXHQvLyDlm6DkuLrlvojlpJrkurrpg73kvJrlv5jkuoblhpnlkI7pnaLnmoRjYXRjaCgp77yM5a+86Ie05oql6ZSZ5o2V6I635LiN5YiwY2F0Y2hcclxuXHRcdC8vIFx0cmV0dXJuIG5ldyBQcm9taXNlKCgpPT57fSk7XHJcblx0XHQvLyB9KVxyXG5cdH1cclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmNvbmZpZyA9IHtcclxuXHRcdFx0YmFzZVVybDogJycsIC8vIOivt+axgueahOagueWfn+WQjVxyXG5cdFx0XHQvLyDpu5jorqTnmoTor7fmsYLlpLRcclxuXHRcdFx0aGVhZGVyOiB7fSxcclxuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdC8vIOiuvue9ruS4umpzb27vvIzov5Tlm57lkI51bmkucmVxdWVzdOS8muWvueaVsOaNrui/m+ihjOS4gOasoUpTT04ucGFyc2VcclxuXHRcdFx0ZGF0YVR5cGU6ICdqc29uJyxcclxuXHRcdFx0Ly8g5q2k5Y+C5pWw5peg6ZyA5aSE55CG77yM5Zug5Li6NSvlkozmlK/ku5jlrp3lsI/nqIvluo/kuI3mlK/mjIHvvIzpu5jorqTkuLp0ZXh05Y2z5Y+vXHJcblx0XHRcdHJlc3BvbnNlVHlwZTogJ3RleHQnLFxyXG5cdFx0XHRzaG93TG9hZGluZzogdHJ1ZSwgLy8g5piv5ZCm5pi+56S66K+35rGC5Lit55qEbG9hZGluZ1xyXG5cdFx0XHRsb2FkaW5nVGV4dDogJ+ivt+axguS4rS4uLicsXHJcblx0XHRcdGxvYWRpbmdUaW1lOiA4MDAsIC8vIOWcqOatpOaXtumXtOWGhe+8jOivt+axgui/mOayoeWbnuadpeeahOivne+8jOWwseaYvuekuuWKoOi9veS4reWKqOeUu++8jOWNleS9jW1zXHJcblx0XHRcdHRpbWVyOiBudWxsLCAvLyDlrprml7blmahcclxuXHRcdFx0b3JpZ2luYWxEYXRhOiBmYWxzZSwgLy8g5piv5ZCm5Zyo5oum5oiq5Zmo5Lit6L+U5Zue5pyN5Yqh56uv55qE5Y6f5aeL5pWw5o2u77yM6KeB5paH5qGj6K+05piOXHJcblx0XHRcdGxvYWRpbmdNYXNrOiB0cnVlLCAvLyDlsZXnpLpsb2FkaW5n55qE5pe25YCZ77yM5piv5ZCm57uZ5LiA5Liq6YCP5piO55qE6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPXHJcblx0XHR9XHJcblx0XHJcblx0XHQvLyDmi6bmiKrlmahcclxuXHRcdHRoaXMuaW50ZXJjZXB0b3IgPSB7XHJcblx0XHRcdC8vIOivt+axguWJjeeahOaLpuaIqlxyXG5cdFx0XHRyZXF1ZXN0OiBudWxsLFxyXG5cdFx0XHQvLyDor7fmsYLlkI7nmoTmi6bmiKpcclxuXHRcdFx0cmVzcG9uc2U6IG51bGxcclxuXHRcdH1cclxuXHJcblx0XHQvLyBnZXTor7fmsYJcclxuXHRcdHRoaXMuZ2V0ID0gKHVybCwgZGF0YSA9IHt9LCBoZWFkZXIgPSB7fSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5yZXF1ZXN0KHtcclxuXHRcdFx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdFx0XHRcdHVybCxcclxuXHRcdFx0XHRoZWFkZXIsXHJcblx0XHRcdFx0ZGF0YVxyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHBvc3Tor7fmsYJcclxuXHRcdHRoaXMucG9zdCA9ICh1cmwsIGRhdGEgPSB7fSwgaGVhZGVyID0ge30pID0+IHtcclxuXHRcdFx0cmV0dXJuIHRoaXMucmVxdWVzdCh7XHJcblx0XHRcdFx0dXJsLFxyXG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdGhlYWRlcixcclxuXHRcdFx0XHRkYXRhXHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8vIHB1dOivt+axgu+8jOS4jeaUr+aMgeaUr+S7mOWuneWwj+eoi+W6jyhIWDIuNi4xNSlcclxuXHRcdHRoaXMucHV0ID0gKHVybCwgZGF0YSA9IHt9LCBoZWFkZXIgPSB7fSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5yZXF1ZXN0KHtcclxuXHRcdFx0XHR1cmwsXHJcblx0XHRcdFx0bWV0aG9kOiAnUFVUJyxcclxuXHRcdFx0XHRoZWFkZXIsXHJcblx0XHRcdFx0ZGF0YVxyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvLyBkZWxldGXor7fmsYLvvIzkuI3mlK/mjIHmlK/ku5jlrp3lkozlpLTmnaHlsI/nqIvluo8oSFgyLjYuMTUpXHJcblx0XHR0aGlzLmRlbGV0ZSA9ICh1cmwsIGRhdGEgPSB7fSwgaGVhZGVyID0ge30pID0+IHtcclxuXHRcdFx0cmV0dXJuIHRoaXMucmVxdWVzdCh7XHJcblx0XHRcdFx0dXJsLFxyXG5cdFx0XHRcdG1ldGhvZDogJ0RFTEVURScsXHJcblx0XHRcdFx0aGVhZGVyLFxyXG5cdFx0XHRcdGRhdGFcclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFJlcXVlc3RcclxuIiwiaW1wb3J0IGRlZXBDbG9uZSBmcm9tIFwiLi9kZWVwQ2xvbmVcIjtcclxuXHJcbi8vIEpT5a+56LGh5rex5bqm5ZCI5bm2XHJcbmZ1bmN0aW9uIGRlZXBNZXJnZSh0YXJnZXQgPSB7fSwgc291cmNlID0ge30pIHtcclxuXHR0YXJnZXQgPSBkZWVwQ2xvbmUodGFyZ2V0KTtcclxuXHRpZiAodHlwZW9mIHRhcmdldCAhPT0gJ29iamVjdCcgfHwgdHlwZW9mIHNvdXJjZSAhPT0gJ29iamVjdCcpIHJldHVybiBmYWxzZTtcclxuXHRmb3IgKHZhciBwcm9wIGluIHNvdXJjZSkge1xyXG5cdFx0aWYgKCFzb3VyY2UuaGFzT3duUHJvcGVydHkocHJvcCkpIGNvbnRpbnVlO1xyXG5cdFx0aWYgKHByb3AgaW4gdGFyZ2V0KSB7XHJcblx0XHRcdGlmICh0eXBlb2YgdGFyZ2V0W3Byb3BdICE9PSAnb2JqZWN0Jykge1xyXG5cdFx0XHRcdHRhcmdldFtwcm9wXSA9IHNvdXJjZVtwcm9wXTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiAodHlwZW9mIHNvdXJjZVtwcm9wXSAhPT0gJ29iamVjdCcpIHtcclxuXHRcdFx0XHRcdHRhcmdldFtwcm9wXSA9IHNvdXJjZVtwcm9wXTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0aWYgKHRhcmdldFtwcm9wXS5jb25jYXQgJiYgc291cmNlW3Byb3BdLmNvbmNhdCkge1xyXG5cdFx0XHRcdFx0XHR0YXJnZXRbcHJvcF0gPSB0YXJnZXRbcHJvcF0uY29uY2F0KHNvdXJjZVtwcm9wXSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0YXJnZXRbcHJvcF0gPSBkZWVwTWVyZ2UodGFyZ2V0W3Byb3BdLCBzb3VyY2VbcHJvcF0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGFyZ2V0W3Byb3BdID0gc291cmNlW3Byb3BdO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWVwTWVyZ2U7IiwiLy8g5Yik5patYXJy5piv5ZCm5Li65LiA5Liq5pWw57uE77yM6L+U5Zue5LiA5LiqYm9vbOWAvFxyXG5mdW5jdGlvbiBpc0FycmF5IChhcnIpIHtcclxuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJyKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcclxufVxyXG5cclxuLy8g5rex5bqm5YWL6ZqGXHJcbmZ1bmN0aW9uIGRlZXBDbG9uZSAob2JqKSB7XHJcblx0Ly8g5a+55bi46KeB55qE4oCc6Z2e4oCd5YC877yM55u05o6l6L+U5Zue5Y6f5p2l5YC8XHJcblx0aWYoW251bGwsIHVuZGVmaW5lZCwgTmFOLCBmYWxzZV0uaW5jbHVkZXMob2JqKSkgcmV0dXJuIG9iajtcclxuICAgIGlmKHR5cGVvZiBvYmogIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gJ2Z1bmN0aW9uJykge1xyXG5cdFx0Ly/ljp/lp4vnsbvlnovnm7TmjqXov5Tlm55cclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG4gICAgdmFyIG8gPSBpc0FycmF5KG9iaikgPyBbXSA6IHt9O1xyXG4gICAgZm9yKGxldCBpIGluIG9iaikge1xyXG4gICAgICAgIGlmKG9iai5oYXNPd25Qcm9wZXJ0eShpKSl7XHJcbiAgICAgICAgICAgIG9baV0gPSB0eXBlb2Ygb2JqW2ldID09PSBcIm9iamVjdFwiID8gZGVlcENsb25lKG9ialtpXSkgOiBvYmpbaV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG87XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZXBDbG9uZTtcclxuIiwiLyoqXHJcbiAqIOmqjOivgeeUteWtkOmCrueuseagvOW8j1xyXG4gKi9cclxuZnVuY3Rpb24gZW1haWwodmFsdWUpIHtcclxuXHRyZXR1cm4gL15cXHcrKCgtXFx3Kyl8KFxcLlxcdyspKSpcXEBbQS1aYS16MC05XSsoKFxcLnwtKVtBLVphLXowLTldKykqXFwuW0EtWmEtejAtOV0rJC8udGVzdCh2YWx1ZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDpqozor4HmiYvmnLrmoLzlvI9cclxuICovXHJcbmZ1bmN0aW9uIG1vYmlsZSh2YWx1ZSkge1xyXG5cdHJldHVybiAvXjFbMy05XVxcZHs5fSQvLnRlc3QodmFsdWUpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDpqozor4FVUkzmoLzlvI9cclxuICovXHJcbmZ1bmN0aW9uIHVybCh2YWx1ZSkge1xyXG5cdHJldHVybiAvaHR0cChzKT86XFwvXFwvKFtcXHctXStcXC4pK1tcXHctXSsoXFwvW1xcdy0uXFwvPyUmPV0qKT8vLnRlc3QodmFsdWUpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDpqozor4Hml6XmnJ/moLzlvI9cclxuICovXHJcbmZ1bmN0aW9uIGRhdGUodmFsdWUpIHtcclxuXHRyZXR1cm4gIS9JbnZhbGlkfE5hTi8udGVzdChuZXcgRGF0ZSh2YWx1ZSkudG9TdHJpbmcoKSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOmqjOivgUlTT+exu+Wei+eahOaXpeacn+agvOW8j1xyXG4gKi9cclxuZnVuY3Rpb24gZGF0ZUlTTyh2YWx1ZSkge1xyXG5cdHJldHVybiAvXlxcZHs0fVtcXC9cXC1dKDA/WzEtOV18MVswMTJdKVtcXC9cXC1dKDA/WzEtOV18WzEyXVswLTldfDNbMDFdKSQvLnRlc3QodmFsdWUpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDpqozor4HljYHov5vliLbmlbDlrZdcclxuICovXHJcbmZ1bmN0aW9uIG51bWJlcih2YWx1ZSkge1xyXG5cdHJldHVybiAvXig/Oi0/XFxkK3wtP1xcZHsxLDN9KD86LFxcZHszfSkrKT8oPzpcXC5cXGQrKT8kLy50ZXN0KHZhbHVlKVxyXG59XHJcblxyXG4vKipcclxuICog6aqM6K+B5pW05pWwXHJcbiAqL1xyXG5mdW5jdGlvbiBkaWdpdHModmFsdWUpIHtcclxuXHRyZXR1cm4gL15cXGQrJC8udGVzdCh2YWx1ZSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOmqjOivgei6q+S7veivgeWPt+eggVxyXG4gKi9cclxuZnVuY3Rpb24gaWRDYXJkKHZhbHVlKSB7XHJcblx0cmV0dXJuIC9eWzEtOV1cXGR7NX1bMS05XVxcZHszfSgoMFxcZCl8KDFbMC0yXSkpKChbMHwxfDJdXFxkKXwzWzAtMV0pXFxkezN9KFswLTldfFgpJC8udGVzdChcclxuXHRcdHZhbHVlKVxyXG59XHJcblxyXG4vKipcclxuICog5piv5ZCm6L2m54mM5Y+3XHJcbiAqL1xyXG5mdW5jdGlvbiBjYXJObyh2YWx1ZSkge1xyXG5cdC8vIOaWsOiDvea6kOi9pueJjFxyXG5cdGNvbnN0IHhyZWcgPSAvXlvkuqzmtKXmsqrmuJ3lhoDosavkupHovr3pu5HmuZjnmpbpsoHmlrDoi4/mtZnotaPphILmoYLnlJjmmYvokpnpmZXlkInpl73otLXnsqTpnZLol4/lt53lroHnkLzkvb/pooZBLVpdezF9W0EtWl17MX0oKFswLTldezV9W0RGXSQpfChbREZdW0EtSEotTlAtWjAtOV1bMC05XXs0fSQpKS87XHJcblx0Ly8g5pen6L2m54mMXHJcblx0Y29uc3QgY3JlZyA9IC9eW+S6rOa0peayqua4neWGgOixq+S6kei+vem7kea5mOealumygeaWsOiLj+a1mei1o+mEguahgueUmOaZi+iSmemZleWQiemXvei0teeypOmdkuiXj+W3neWugeeQvOS9v+mihkEtWl17MX1bQS1aXXsxfVtBLUhKLU5QLVowLTldezR9W0EtSEotTlAtWjAtOeaMguWtpuitpua4r+a+s117MX0kLztcclxuXHRpZiAodmFsdWUubGVuZ3RoID09PSA3KSB7XHJcblx0XHRyZXR1cm4gY3JlZy50ZXN0KHZhbHVlKTtcclxuXHR9IGVsc2UgaWYgKHZhbHVlLmxlbmd0aCA9PT0gOCkge1xyXG5cdFx0cmV0dXJuIHhyZWcudGVzdCh2YWx1ZSk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDph5Hpop0s5Y+q5YWB6K64MuS9jeWwj+aVsFxyXG4gKi9cclxuZnVuY3Rpb24gYW1vdW50KHZhbHVlKSB7XHJcblx0Ly/ph5Hpop3vvIzlj6rlhYHorrjkv53nlZnkuKTkvY3lsI/mlbBcclxuXHRyZXR1cm4gL15bMS05XVxcZCooLFxcZHszfSkqKFxcLlxcZHsxLDJ9KT8kfF4wXFwuXFxkezEsMn0kLy50ZXN0KHZhbHVlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOS4reaWh1xyXG4gKi9cclxuZnVuY3Rpb24gY2hpbmVzZSh2YWx1ZSkge1xyXG5cdGxldCByZWcgPSAvXltcXHU0ZTAwLVxcdTlmYTVdKyQvZ2k7XHJcblx0cmV0dXJuIHJlZy50ZXN0KHZhbHVlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOWPquiDvei+k+WFpeWtl+avjVxyXG4gKi9cclxuZnVuY3Rpb24gbGV0dGVyKHZhbHVlKSB7XHJcblx0cmV0dXJuIC9eW2EtekEtWl0qJC8udGVzdCh2YWx1ZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlj6rog73mmK/lrZfmr43miJbogIXmlbDlrZdcclxuICovXHJcbmZ1bmN0aW9uIGVuT3JOdW0odmFsdWUpIHtcclxuXHQvL+iLseaWh+aIluiAheaVsOWtl1xyXG5cdGxldCByZWcgPSAvXlswLTlhLXpBLVpdKiQvZztcclxuXHRyZXR1cm4gcmVnLnRlc3QodmFsdWUpO1xyXG59XHJcblxyXG4vKipcclxuICog6aqM6K+B5piv5ZCm5YyF5ZCr5p+Q5Liq5YC8XHJcbiAqL1xyXG5mdW5jdGlvbiBjb250YWlucyh2YWx1ZSwgcGFyYW0pIHtcclxuXHRyZXR1cm4gdmFsdWUuaW5kZXhPZihwYXJhbSkgPj0gMFxyXG59XHJcblxyXG4vKipcclxuICog6aqM6K+B5LiA5Liq5YC86IyD5Zu0W21pbiwgbWF4XVxyXG4gKi9cclxuZnVuY3Rpb24gcmFuZ2UodmFsdWUsIHBhcmFtKSB7XHJcblx0cmV0dXJuIHZhbHVlID49IHBhcmFtWzBdICYmIHZhbHVlIDw9IHBhcmFtWzFdXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDpqozor4HkuIDkuKrplb/luqbojIPlm7RbbWluLCBtYXhdXHJcbiAqL1xyXG5mdW5jdGlvbiByYW5nZUxlbmd0aCh2YWx1ZSwgcGFyYW0pIHtcclxuXHRyZXR1cm4gdmFsdWUubGVuZ3RoID49IHBhcmFtWzBdICYmIHZhbHVlLmxlbmd0aCA8PSBwYXJhbVsxXVxyXG59XHJcblxyXG4vKipcclxuICog5piv5ZCm5Zu65a6a55S16K+dXHJcbiAqL1xyXG5mdW5jdGlvbiBsYW5kbGluZSh2YWx1ZSkge1xyXG5cdGxldCByZWcgPSAvXlxcZHszLDR9LVxcZHs3LDh9KC1cXGR7Myw0fSk/JC87XHJcblx0cmV0dXJuIHJlZy50ZXN0KHZhbHVlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIpOaWreaYr+WQpuS4uuepulxyXG4gKi9cclxuZnVuY3Rpb24gZW1wdHkodmFsdWUpIHtcclxuXHRzd2l0Y2ggKHR5cGVvZiB2YWx1ZSkge1xyXG5cdFx0Y2FzZSAndW5kZWZpbmVkJzpcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRjYXNlICdzdHJpbmcnOlxyXG5cdFx0XHRpZiAodmFsdWUucmVwbGFjZSgvKF5bIFxcdFxcblxccl0qKXwoWyBcXHRcXG5cXHJdKiQpL2csICcnKS5sZW5ndGggPT0gMCkgcmV0dXJuIHRydWU7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSAnYm9vbGVhbic6XHJcblx0XHRcdGlmICghdmFsdWUpIHJldHVybiB0cnVlO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgJ251bWJlcic6XHJcblx0XHRcdGlmICgwID09PSB2YWx1ZSB8fCBpc05hTih2YWx1ZSkpIHJldHVybiB0cnVlO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgJ29iamVjdCc6XHJcblx0XHRcdGlmIChudWxsID09PSB2YWx1ZSB8fCB2YWx1ZS5sZW5ndGggPT09IDApIHJldHVybiB0cnVlO1xyXG5cdFx0XHRmb3IgKHZhciBpIGluIHZhbHVlKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHRyZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmmK/lkKZqc29u5a2X56ym5LiyXHJcbiAqL1xyXG5mdW5jdGlvbiBqc29uU3RyaW5nKHZhbHVlKSB7XHJcblx0aWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0dmFyIG9iaiA9IEpTT04ucGFyc2UodmFsdWUpO1xyXG5cdFx0XHRpZiAodHlwZW9mIG9iaiA9PSAnb2JqZWN0JyAmJiBvYmopIHtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICog5piv5ZCm5pWw57uEXHJcbiAqL1xyXG5mdW5jdGlvbiBhcnJheSh2YWx1ZSkge1xyXG5cdGlmICh0eXBlb2YgQXJyYXkuaXNBcnJheSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRyZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSBcIltvYmplY3QgQXJyYXldXCI7XHJcblx0fVxyXG59XHJcblxyXG4vKipcclxuICog5piv5ZCm5a+56LGhXHJcbiAqL1xyXG5mdW5jdGlvbiBvYmplY3QodmFsdWUpIHtcclxuXHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmmK/lkKbnn63kv6Hpqozor4HnoIFcclxuICovXHJcbmZ1bmN0aW9uIGNvZGUodmFsdWUsIGxlbiA9IDYpIHtcclxuXHRyZXR1cm4gbmV3IFJlZ0V4cChgXlxcXFxkeyR7bGVufX0kYCkudGVzdCh2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0ZW1haWwsXHJcblx0bW9iaWxlLFxyXG5cdHVybCxcclxuXHRkYXRlLFxyXG5cdGRhdGVJU08sXHJcblx0bnVtYmVyLFxyXG5cdGRpZ2l0cyxcclxuXHRpZENhcmQsXHJcblx0Y2FyTm8sXHJcblx0YW1vdW50LFxyXG5cdGNoaW5lc2UsXHJcblx0bGV0dGVyLFxyXG5cdGVuT3JOdW0sXHJcblx0Y29udGFpbnMsXHJcblx0cmFuZ2UsXHJcblx0cmFuZ2VMZW5ndGgsXHJcblx0ZW1wdHksXHJcblx0aXNFbXB0eTogZW1wdHksXHJcblx0anNvblN0cmluZyxcclxuXHRsYW5kbGluZSxcclxuXHRvYmplY3QsXHJcblx0YXJyYXksXHJcblx0Y29kZVxyXG59XHJcbiIsIi8qKlxyXG4gKiDlr7nosaHovax1cmzlj4LmlbBcclxuICogQHBhcmFtIHsqfSBkYXRhLOWvueixoVxyXG4gKiBAcGFyYW0geyp9IGlzUHJlZml4LOaYr+WQpuiHquWKqOWKoOS4ilwiP1wiXHJcbiAqL1xyXG5mdW5jdGlvbiBxdWVyeVBhcmFtcyhkYXRhID0ge30sIGlzUHJlZml4ID0gdHJ1ZSwgYXJyYXlGb3JtYXQgPSAnYnJhY2tldHMnKSB7XHJcblx0bGV0IHByZWZpeCA9IGlzUHJlZml4ID8gJz8nIDogJydcclxuXHRsZXQgX3Jlc3VsdCA9IFtdXHJcblx0aWYgKFsnaW5kaWNlcycsICdicmFja2V0cycsICdyZXBlYXQnLCAnY29tbWEnXS5pbmRleE9mKGFycmF5Rm9ybWF0KSA9PSAtMSkgYXJyYXlGb3JtYXQgPSAnYnJhY2tldHMnO1xyXG5cdGZvciAobGV0IGtleSBpbiBkYXRhKSB7XHJcblx0XHRsZXQgdmFsdWUgPSBkYXRhW2tleV1cclxuXHRcdC8vIOWOu+aOieS4uuepuueahOWPguaVsFxyXG5cdFx0aWYgKFsnJywgdW5kZWZpbmVkLCBudWxsXS5pbmRleE9mKHZhbHVlKSA+PSAwKSB7XHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0fVxyXG5cdFx0Ly8g5aaC5p6c5YC85Li65pWw57uE77yM5Y+m6KGM5aSE55CGXHJcblx0XHRpZiAodmFsdWUuY29uc3RydWN0b3IgPT09IEFycmF5KSB7XHJcblx0XHRcdC8vIGUuZy4ge2lkczogWzEsIDIsIDNdfVxyXG5cdFx0XHRzd2l0Y2ggKGFycmF5Rm9ybWF0KSB7XHJcblx0XHRcdFx0Y2FzZSAnaW5kaWNlcyc6XHJcblx0XHRcdFx0XHQvLyDnu5Pmnpw6IGlkc1swXT0xJmlkc1sxXT0yJmlkc1syXT0zXHJcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdF9yZXN1bHQucHVzaChrZXkgKyAnWycgKyBpICsgJ109JyArIHZhbHVlW2ldKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAnYnJhY2tldHMnOlxyXG5cdFx0XHRcdFx0Ly8g57uT5p6cOiBpZHNbXT0xJmlkc1tdPTImaWRzW109M1xyXG5cdFx0XHRcdFx0dmFsdWUuZm9yRWFjaChfdmFsdWUgPT4ge1xyXG5cdFx0XHRcdFx0XHRfcmVzdWx0LnB1c2goa2V5ICsgJ1tdPScgKyBfdmFsdWUpXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAncmVwZWF0JzpcclxuXHRcdFx0XHRcdC8vIOe7k+aenDogaWRzPTEmaWRzPTImaWRzPTNcclxuXHRcdFx0XHRcdHZhbHVlLmZvckVhY2goX3ZhbHVlID0+IHtcclxuXHRcdFx0XHRcdFx0X3Jlc3VsdC5wdXNoKGtleSArICc9JyArIF92YWx1ZSlcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlICdjb21tYSc6XHJcblx0XHRcdFx0XHQvLyDnu5Pmnpw6IGlkcz0xLDIsM1xyXG5cdFx0XHRcdFx0bGV0IGNvbW1hU3RyID0gXCJcIjtcclxuXHRcdFx0XHRcdHZhbHVlLmZvckVhY2goX3ZhbHVlID0+IHtcclxuXHRcdFx0XHRcdFx0Y29tbWFTdHIgKz0gKGNvbW1hU3RyID8gXCIsXCIgOiBcIlwiKSArIF92YWx1ZTtcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRfcmVzdWx0LnB1c2goa2V5ICsgJz0nICsgY29tbWFTdHIpXHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0dmFsdWUuZm9yRWFjaChfdmFsdWUgPT4ge1xyXG5cdFx0XHRcdFx0XHRfcmVzdWx0LnB1c2goa2V5ICsgJ1tdPScgKyBfdmFsdWUpXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRfcmVzdWx0LnB1c2goa2V5ICsgJz0nICsgdmFsdWUpXHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiBfcmVzdWx0Lmxlbmd0aCA/IHByZWZpeCArIF9yZXN1bHQuam9pbignJicpIDogJydcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcXVlcnlQYXJhbXM7XHJcbiIsIi8qKlxyXG4gKiDot6/nlLHot7Povazmlrnms5XvvIzor6Xmlrnms5Xnm7jlr7nkuo7nm7TmjqXkvb/nlKh1bmkueHh455qE5aW95aSE5piv5L2/55So5pu05Yqg566A5Y2V5b+r5o23XHJcbiAqIOW5tuS4lOW4puaciei3r+eUseaLpuaIquWKn+iDvVxyXG4gKi9cclxuXHJcbmNsYXNzIFJvdXRlciB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHQvLyDljp/lp4vlsZ7mgKflrprkuYlcclxuXHRcdHRoaXMuY29uZmlnID0ge1xyXG5cdFx0XHR0eXBlOiAnbmF2aWdhdGVUbycsXHJcblx0XHRcdHVybDogJycsXHJcblx0XHRcdGRlbHRhOiAxLCAvLyBuYXZpZ2F0ZUJhY2vpobXpnaLlkI7pgIDml7Ys5Zue6YCA55qE5bGC5pWwXHJcblx0XHRcdHBhcmFtczoge30sIC8vIOS8oOmAkueahOWPguaVsFxyXG5cdFx0XHRhbmltYXRpb25UeXBlOiAncG9wLWluJywgLy8g56qX5Y+j5Yqo55S7LOWPquWcqEFQUOacieaViFxyXG5cdFx0XHRhbmltYXRpb25EdXJhdGlvbjogMzAwLCAvLyDnqpflj6PliqjnlLvmjIHnu63ml7bpl7Qs5Y2V5L2N5q+r56eSLOWPquWcqEFQUOacieaViFxyXG5cdFx0XHRpbnRlcmNlcHQ6IGZhbHNlLCAvLyDmmK/lkKbpnIDopoHmi6bmiKpcclxuXHRcdH1cclxuXHRcdC8vIOWboOS4unJvdXRl5pa55rOV5piv6ZyA6KaB5a+55aSW6LWL5YC857uZ5Y+m5aSW55qE5a+56LGh5L2/55So77yM5ZCM5pe2cm91dGXlhoXpg6jmnInkvb/nlKh0aGlz77yM5Lya5a+86Ie0cm91dGXlpLHljrvkuIrkuIvmlodcclxuXHRcdC8vIOi/memHjOWcqOaehOmAoOWHveaVsOS4rei/m+ihjHRoaXPnu5HlrppcclxuXHRcdHRoaXMucm91dGUgPSB0aGlzLnJvdXRlLmJpbmQodGhpcylcclxuXHR9XHJcblxyXG5cdC8vIOWIpOaWrXVybOWJjemdouaYr+WQpuaciVwiL1wi77yM5aaC5p6c5rKh5pyJ5YiZ5Yqg5LiK77yM5ZCm5YiZ5peg5rOV6Lez6L2sXHJcblx0YWRkUm9vdFBhdGgodXJsKSB7XHJcblx0XHRyZXR1cm4gdXJsWzBdID09PSAnLycgPyB1cmwgOiBgLyR7dXJsfWBcclxuXHR9XHJcblxyXG5cdC8vIOaVtOWQiOi3r+eUseWPguaVsFxyXG5cdG1peGluUGFyYW0odXJsLCBwYXJhbXMpIHtcclxuXHRcdHVybCA9IHVybCAmJiB0aGlzLmFkZFJvb3RQYXRoKHVybClcclxuXHRcdFxyXG5cdFx0Ly8g5L2/55So5q2j5YiZ5Yy56YWN77yM5Li76KaB5L6d5o2u5piv5Yik5pat5piv5ZCm5pyJXCIvXCIsXCI/XCIsXCI9XCLnrYnvvIzlpoLigJwvcGFnZS9pbmRleC9pbmRleD9uYW1lPW1hcnlcIlxyXG5cdFx0Ly8g5aaC5p6c5pyJdXJs5Lit5pyJZ2V05Y+C5pWw77yM6L2s5o2i5ZCO5peg6ZyA5bim5LiKXCI/XCJcclxuXHRcdGxldCBxdWVyeSA9ICcnXHJcblx0XHRpZiAoLy4qXFwvLipcXD8uKj0uKi8udGVzdCh1cmwpKSB7XHJcblx0XHRcdC8vIG9iamVjdOWvueixoei9rOS4umdldOexu+Wei+eahOWPguaVsFxyXG5cdFx0XHRxdWVyeSA9IHVuaS4kdS5xdWVyeVBhcmFtcyhwYXJhbXMsIGZhbHNlKTtcclxuXHRcdFx0Ly8g5Zug5Li65bey5pyJZ2V05Y+C5pWwLOaJgOS7peWQjumdouaLvOaOpeeahOWPguaVsOmcgOimgeW4puS4ilwiJlwi6ZqU5byAXHJcblx0XHRcdHJldHVybiB1cmwgKz0gXCImXCIgKyBxdWVyeVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Ly8g55u05o6l5ou85o6l5Y+C5pWw77yM5Zug5Li65q2k5aSEdXJs5Lit5rKh5pyJ5ZCO6Z2i55qEcXVlcnnlj4LmlbDvvIzkuZ/lsLHmsqHmnIlcIj8vJlwi5LmL57G755qE56ym5Y+3XHJcblx0XHRcdHF1ZXJ5ID0gdW5pLiR1LnF1ZXJ5UGFyYW1zKHBhcmFtcyk7XHJcblx0XHRcdHJldHVybiB1cmwgKz0gcXVlcnlcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIOWvueWklueahOaWueazleWQjeensFxyXG5cdGFzeW5jIHJvdXRlKG9wdGlvbnMgPSB7fSwgcGFyYW1zID0ge30pIHtcclxuXHRcdC8vIOWQiOW5tueUqOaIt+eahOmFjee9ruWSjOWGhemDqOeahOm7mOiupOmFjee9rlxyXG5cdFx0bGV0IG1lcmdlQ29uZmlnID0ge31cclxuXHJcblx0XHRpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnKSB7XHJcblx0XHRcdC8vIOWmguaenG9wdGlvbnPkuLrlrZfnrKbkuLLvvIzliJnkuLpyb3V0ZSh1cmwsIHBhcmFtcynnmoTlvaLlvI9cclxuXHRcdFx0bWVyZ2VDb25maWcudXJsID0gdGhpcy5taXhpblBhcmFtKG9wdGlvbnMsIHBhcmFtcylcclxuXHRcdFx0bWVyZ2VDb25maWcudHlwZSA9ICduYXZpZ2F0ZVRvJ1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bWVyZ2VDb25maWcgPSB1bmkuJHUuZGVlcENsb25lKG9wdGlvbnMsIHRoaXMuY29uZmlnKVxyXG5cdFx0XHQvLyDlkKbliJnmraPluLjkvb/nlKhtZXJnZUNvbmZpZ+S4reeahHVybOWSjHBhcmFtc+i/m+ihjOaLvOaOpVxyXG5cdFx0XHRtZXJnZUNvbmZpZy51cmwgPSB0aGlzLm1peGluUGFyYW0ob3B0aW9ucy51cmwsIG9wdGlvbnMucGFyYW1zKVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRpZihwYXJhbXMuaW50ZXJjZXB0KSB7XHJcblx0XHRcdHRoaXMuY29uZmlnLmludGVyY2VwdCA9IHBhcmFtcy5pbnRlcmNlcHRcclxuXHRcdH1cclxuXHRcdC8vIHBhcmFtc+WPguaVsOS5n+W4pue7meaLpuaIquWZqFxyXG5cdFx0bWVyZ2VDb25maWcucGFyYW1zID0gcGFyYW1zXHJcblx0XHQvLyDlkIjlubblhoXlpJbpg6jlj4LmlbBcclxuXHRcdG1lcmdlQ29uZmlnID0gdW5pLiR1LmRlZXBNZXJnZSh0aGlzLmNvbmZpZywgbWVyZ2VDb25maWcpXHJcblx0XHQvLyDliKTmlq3nlKjmiLfmmK/lkKblrprkuYnkuobmi6bmiKrlmahcclxuXHRcdGlmICh0eXBlb2YgdW5pLiR1LnJvdXRlSW50ZXJjZXB0ID09PSAnZnVuY3Rpb24nKSB7XHJcblx0XHRcdC8vIOWumuS4gOS4qnByb21pc2XvvIzmoLnmja7nlKjmiLfmiafooYxyZXNvbHZlKHRydWUp5oiW6ICFcmVzb2x2ZShmYWxzZSnmnaXlhrPlrprmmK/lkKbov5vooYzot6/nlLHot7PovaxcclxuXHRcdFx0Y29uc3QgaXNOZXh0ID0gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRcdHVuaS4kdS5yb3V0ZUludGVyY2VwdChtZXJnZUNvbmZpZywgcmVzb2x2ZSlcclxuXHRcdFx0fSlcclxuXHRcdFx0Ly8g5aaC5p6caXNOZXh05Li6dHJ1Ze+8jOWImeaJp+ihjOi3r+eUsei3s+i9rFxyXG5cdFx0XHRpc05leHQgJiYgdGhpcy5vcGVuUGFnZShtZXJnZUNvbmZpZylcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMub3BlblBhZ2UobWVyZ2VDb25maWcpXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyDmiafooYzot6/nlLHot7PovaxcclxuXHRvcGVuUGFnZShjb25maWcpIHtcclxuXHRcdC8vIOino+aehOWPguaVsFxyXG5cdFx0Y29uc3Qge1xyXG5cdFx0XHR1cmwsXHJcblx0XHRcdHR5cGUsXHJcblx0XHRcdGRlbHRhLFxyXG5cdFx0XHRhbmltYXRpb25UeXBlLFxyXG5cdFx0XHRhbmltYXRpb25EdXJhdGlvblxyXG5cdFx0fSA9IGNvbmZpZ1xyXG5cdFx0aWYgKGNvbmZpZy50eXBlID09ICduYXZpZ2F0ZVRvJyB8fCBjb25maWcudHlwZSA9PSAndG8nKSB7XHJcblx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHR1cmwsXHJcblx0XHRcdFx0YW5pbWF0aW9uVHlwZSxcclxuXHRcdFx0XHRhbmltYXRpb25EdXJhdGlvblxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdGlmIChjb25maWcudHlwZSA9PSAncmVkaXJlY3RUbycgfHwgY29uZmlnLnR5cGUgPT0gJ3JlZGlyZWN0Jykge1xyXG5cdFx0XHR1bmkucmVkaXJlY3RUbyh7XHJcblx0XHRcdFx0dXJsXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGNvbmZpZy50eXBlID09ICdzd2l0Y2hUYWInIHx8IGNvbmZpZy50eXBlID09ICd0YWInKSB7XHJcblx0XHRcdHVuaS5zd2l0Y2hUYWIoe1xyXG5cdFx0XHRcdHVybFxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdGlmIChjb25maWcudHlwZSA9PSAncmVMYXVuY2gnIHx8IGNvbmZpZy50eXBlID09ICdsYXVuY2gnKSB7XHJcblx0XHRcdHVuaS5yZUxhdW5jaCh7XHJcblx0XHRcdFx0dXJsXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGNvbmZpZy50eXBlID09ICduYXZpZ2F0ZUJhY2snIHx8IGNvbmZpZy50eXBlID09ICdiYWNrJykge1xyXG5cdFx0XHR1bmkubmF2aWdhdGVCYWNrKHtcclxuXHRcdFx0XHRkZWx0YVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IChuZXcgUm91dGVyKCkpLnJvdXRlIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuLy8gVGhpcyBtZXRob2Qgb2Ygb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0IG5lZWRzIHRvIGJlXG4vLyBrZXB0IGlkZW50aWNhbCB0byB0aGUgd2F5IGl0IGlzIG9idGFpbmVkIGluIHJ1bnRpbWUuanNcbnZhciBnID0gKGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcyB8fCAodHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgJiYgc2VsZik7XG59KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcblxuLy8gVXNlIGBnZXRPd25Qcm9wZXJ0eU5hbWVzYCBiZWNhdXNlIG5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCBjYWxsaW5nXG4vLyBgaGFzT3duUHJvcGVydHlgIG9uIHRoZSBnbG9iYWwgYHNlbGZgIG9iamVjdCBpbiBhIHdvcmtlci4gU2VlICMxODMuXG52YXIgaGFkUnVudGltZSA9IGcucmVnZW5lcmF0b3JSdW50aW1lICYmXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGcpLmluZGV4T2YoXCJyZWdlbmVyYXRvclJ1bnRpbWVcIikgPj0gMDtcblxuLy8gU2F2ZSB0aGUgb2xkIHJlZ2VuZXJhdG9yUnVudGltZSBpbiBjYXNlIGl0IG5lZWRzIHRvIGJlIHJlc3RvcmVkIGxhdGVyLlxudmFyIG9sZFJ1bnRpbWUgPSBoYWRSdW50aW1lICYmIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuXG4vLyBGb3JjZSByZWV2YWx1dGF0aW9uIG9mIHJ1bnRpbWUuanMuXG5nLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9ydW50aW1lXCIpO1xuXG5pZiAoaGFkUnVudGltZSkge1xuICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBydW50aW1lLlxuICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IG9sZFJ1bnRpbWU7XG59IGVsc2Uge1xuICAvLyBSZW1vdmUgdGhlIGdsb2JhbCBwcm9wZXJ0eSBhZGRlZCBieSBydW50aW1lLmpzLlxuICB0cnkge1xuICAgIGRlbGV0ZSBnLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgfSBjYXRjaChlKSB7XG4gICAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuIShmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIGlmIChydW50aW1lKSB7XG4gICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAvLyBJZiByZWdlbmVyYXRvclJ1bnRpbWUgaXMgZGVmaW5lZCBnbG9iYWxseSBhbmQgd2UncmUgaW4gYSBtb2R1bGUsXG4gICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuICAgIH1cbiAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgcnVudGltZSBnbG9iYWxseSAoYXMgZXhwZWN0ZWQgYnkgZ2VuZXJhdGVkIGNvZGUpIGFzIGVpdGhlclxuICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG4gIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIHJ1bnRpbWUuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBydW50aW1lLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBydW50aW1lLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdClcbiAgICApO1xuXG4gICAgcmV0dXJuIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIHJ1bnRpbWUua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBydW50aW1lLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xufSkoXG4gIC8vIEluIHNsb3BweSBtb2RlLCB1bmJvdW5kIGB0aGlzYCByZWZlcnMgdG8gdGhlIGdsb2JhbCBvYmplY3QsIGZhbGxiYWNrIHRvXG4gIC8vIEZ1bmN0aW9uIGNvbnN0cnVjdG9yIGlmIHdlJ3JlIGluIGdsb2JhbCBzdHJpY3QgbW9kZS4gVGhhdCBpcyBzYWRseSBhIGZvcm1cbiAgLy8gb2YgaW5kaXJlY3QgZXZhbCB3aGljaCB2aW9sYXRlcyBDb250ZW50IFNlY3VyaXR5IFBvbGljeS5cbiAgKGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzIHx8ICh0eXBlb2Ygc2VsZiA9PT0gXCJvYmplY3RcIiAmJiBzZWxmKTtcbiAgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKClcbik7XG4iLCIvLyBwYWRTdGFydCDnmoQgcG9seWZpbGzvvIzlm6DkuLrmn5DkupvmnLrlnovmiJbmg4XlhrXvvIzov5jml6Dms5XmlK/mjIFlczfnmoRwYWRTdGFydO+8jOavlOWmgueUteiEkeeJiOeahOW+ruS/oeWwj+eoi+W6j1xyXG4vLyDmiYDku6Xov5nph4zlgZrkuIDkuKrlhbzlrrlwb2x5ZmlsbOeahOWFvOWuueWkhOeQhlxyXG5pZiAoIVN0cmluZy5wcm90b3R5cGUucGFkU3RhcnQpIHtcclxuXHQvLyDkuLrkuobmlrnkvr/ooajnpLrov5nph4wgZmlsbFN0cmluZyDnlKjkuoZFUzYg55qE6buY6K6k5Y+C5pWw77yM5LiN5b2x5ZON55CG6KejXHJcblx0U3RyaW5nLnByb3RvdHlwZS5wYWRTdGFydCA9IGZ1bmN0aW9uKG1heExlbmd0aCwgZmlsbFN0cmluZyA9ICcgJykge1xyXG5cdFx0aWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChmaWxsU3RyaW5nKSAhPT0gXCJbb2JqZWN0IFN0cmluZ11cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcclxuXHRcdFx0J2ZpbGxTdHJpbmcgbXVzdCBiZSBTdHJpbmcnKVxyXG5cdFx0bGV0IHN0ciA9IHRoaXNcclxuXHRcdC8vIOi/lOWbniBTdHJpbmcoc3RyKSDov5nph4zmmK/kuLrkuobkvb/ov5Tlm57nmoTlgLzmmK/lrZfnrKbkuLLlrZfpnaLph4/vvIzlnKjmjqfliLblj7DkuK3mm7TnrKblkIjnm7Top4lcclxuXHRcdGlmIChzdHIubGVuZ3RoID49IG1heExlbmd0aCkgcmV0dXJuIFN0cmluZyhzdHIpXHJcblxyXG5cdFx0bGV0IGZpbGxMZW5ndGggPSBtYXhMZW5ndGggLSBzdHIubGVuZ3RoLFxyXG5cdFx0XHR0aW1lcyA9IE1hdGguY2VpbChmaWxsTGVuZ3RoIC8gZmlsbFN0cmluZy5sZW5ndGgpXHJcblx0XHR3aGlsZSAodGltZXMgPj49IDEpIHtcclxuXHRcdFx0ZmlsbFN0cmluZyArPSBmaWxsU3RyaW5nXHJcblx0XHRcdGlmICh0aW1lcyA9PT0gMSkge1xyXG5cdFx0XHRcdGZpbGxTdHJpbmcgKz0gZmlsbFN0cmluZ1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmlsbFN0cmluZy5zbGljZSgwLCBmaWxsTGVuZ3RoKSArIHN0cjtcclxuXHR9XHJcbn1cclxuXHJcbi8vIOWFtuS7luabtOWkmuaYr+agvOW8j+WMluacieWmguS4izpcclxuLy8geXl5eTptbTpkZHx5eXl5Om1tfHl5eXnlubRtbeaciGRk5pelfHl5eXnlubRtbeaciGRk5pelIGho5pe2TU3liIbnrYks5Y+v6Ieq5a6a5LmJ57uE5ZCIXHJcbmZ1bmN0aW9uIHRpbWVGb3JtYXQoZGF0ZVRpbWUgPSBudWxsLCBmbXQgPSAneXl5eS1tbS1kZCcpIHtcclxuXHQvLyDlpoLmnpzkuLpudWxsLOWImeagvOW8j+WMluW9k+WJjeaXtumXtFxyXG5cdGlmICghZGF0ZVRpbWUpIGRhdGVUaW1lID0gTnVtYmVyKG5ldyBEYXRlKCkpO1xyXG5cdC8vIOWmguaenGRhdGVUaW1l6ZW/5bqm5Li6MTDmiJbogIUxM++8jOWImeS4uuenkuWSjOavq+enkueahOaXtumXtOaIs++8jOWmguaenOi2hei/hzEz5L2N77yM5YiZ5Li65YW25LuW55qE5pe26Ze05qC85byPXHJcblx0aWYgKGRhdGVUaW1lLnRvU3RyaW5nKCkubGVuZ3RoID09IDEwKSBkYXRlVGltZSAqPSAxMDAwO1xyXG5cdGxldCBkYXRlID0gbmV3IERhdGUoZGF0ZVRpbWUpO1xyXG5cdGxldCByZXQ7XHJcblx0bGV0IG9wdCA9IHtcclxuXHRcdFwieStcIjogZGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCksIC8vIOW5tFxyXG5cdFx0XCJtK1wiOiAoZGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKSwgLy8g5pyIXHJcblx0XHRcImQrXCI6IGRhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCksIC8vIOaXpVxyXG5cdFx0XCJoK1wiOiBkYXRlLmdldEhvdXJzKCkudG9TdHJpbmcoKSwgLy8g5pe2XHJcblx0XHRcIk0rXCI6IGRhdGUuZ2V0TWludXRlcygpLnRvU3RyaW5nKCksIC8vIOWIhlxyXG5cdFx0XCJzK1wiOiBkYXRlLmdldFNlY29uZHMoKS50b1N0cmluZygpIC8vIOenklxyXG5cdFx0Ly8g5pyJ5YW25LuW5qC85byP5YyW5a2X56ym6ZyA5rGC5Y+v5Lul57un57ut5re75Yqg77yM5b+F6aG76L2s5YyW5oiQ5a2X56ym5LiyXHJcblx0fTtcclxuXHRmb3IgKGxldCBrIGluIG9wdCkge1xyXG5cdFx0cmV0ID0gbmV3IFJlZ0V4cChcIihcIiArIGsgKyBcIilcIikuZXhlYyhmbXQpO1xyXG5cdFx0aWYgKHJldCkge1xyXG5cdFx0XHRmbXQgPSBmbXQucmVwbGFjZShyZXRbMV0sIChyZXRbMV0ubGVuZ3RoID09IDEpID8gKG9wdFtrXSkgOiAob3B0W2tdLnBhZFN0YXJ0KHJldFsxXS5sZW5ndGgsIFwiMFwiKSkpXHJcblx0XHR9O1xyXG5cdH07XHJcblx0cmV0dXJuIGZtdDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGltZUZvcm1hdFxyXG4iLCJpbXBvcnQgdGltZUZvcm1hdCBmcm9tICcuLi8uLi9saWJzL2Z1bmN0aW9uL3RpbWVGb3JtYXQuanMnO1xyXG5cclxuLyoqXHJcbiAqIOaXtumXtOaIs+i9rOS4uuWkmuS5heS5i+WJjVxyXG4gKiBAcGFyYW0gU3RyaW5nIHRpbWVzdGFtcCDml7bpl7TmiLNcclxuICogQHBhcmFtIFN0cmluZyB8IEJvb2xlYW4gZm9ybWF0IOWmguaenOS4uuaXtumXtOagvOW8j+Wtl+espuS4su+8jOi2heWHuuS4gOWumuaXtumXtOiMg+WbtO+8jOi/lOWbnuWbuuWumueahOaXtumXtOagvOW8j++8m1xyXG4gKiDlpoLmnpzkuLrluIPlsJTlgLxmYWxzZe+8jOaXoOiuuuS7gOS5iOaXtumXtO+8jOmDvei/lOWbnuWkmuS5heS7peWJjeeahOagvOW8j1xyXG4gKi9cclxuZnVuY3Rpb24gdGltZUZyb20oZGF0ZVRpbWUgPSBudWxsLCBmb3JtYXQgPSAneXl5eS1tbS1kZCcpIHtcclxuXHQvLyDlpoLmnpzkuLpudWxsLOWImeagvOW8j+WMluW9k+WJjeaXtumXtFxyXG5cdGlmICghZGF0ZVRpbWUpIGRhdGVUaW1lID0gTnVtYmVyKG5ldyBEYXRlKCkpO1xyXG5cdC8vIOWmguaenGRhdGVUaW1l6ZW/5bqm5Li6MTDmiJbogIUxM++8jOWImeS4uuenkuWSjOavq+enkueahOaXtumXtOaIs++8jOWmguaenOi2hei/hzEz5L2N77yM5YiZ5Li65YW25LuW55qE5pe26Ze05qC85byPXHJcblx0aWYgKGRhdGVUaW1lLnRvU3RyaW5nKCkubGVuZ3RoID09IDEwKSBkYXRlVGltZSAqPSAxMDAwO1xyXG5cdGxldCB0aW1lc3RhbXAgPSArIG5ldyBEYXRlKE51bWJlcihkYXRlVGltZSkpO1xyXG5cclxuXHRsZXQgdGltZXIgPSAoTnVtYmVyKG5ldyBEYXRlKCkpIC0gdGltZXN0YW1wKSAvIDEwMDA7XHJcblx0Ly8g5aaC5p6c5bCP5LqONeWIhumSnyzliJnov5Tlm55cIuWImuWImlwiLOWFtuS7luS7peatpOexu+aOqFxyXG5cdGxldCB0aXBzID0gJyc7XHJcblx0c3dpdGNoICh0cnVlKSB7XHJcblx0XHRjYXNlIHRpbWVyIDwgMzAwOlxyXG5cdFx0XHR0aXBzID0gJ+WImuWImic7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSB0aW1lciA+PSAzMDAgJiYgdGltZXIgPCAzNjAwOlxyXG5cdFx0XHR0aXBzID0gcGFyc2VJbnQodGltZXIgLyA2MCkgKyAn5YiG6ZKf5YmNJztcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIHRpbWVyID49IDM2MDAgJiYgdGltZXIgPCA4NjQwMDpcclxuXHRcdFx0dGlwcyA9IHBhcnNlSW50KHRpbWVyIC8gMzYwMCkgKyAn5bCP5pe25YmNJztcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIHRpbWVyID49IDg2NDAwICYmIHRpbWVyIDwgMjU5MjAwMDpcclxuXHRcdFx0dGlwcyA9IHBhcnNlSW50KHRpbWVyIC8gODY0MDApICsgJ+WkqeWJjSc7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0Ly8g5aaC5p6cZm9ybWF05Li6ZmFsc2XvvIzliJnml6Dorrrku4DkuYjml7bpl7TmiLPvvIzpg73mmL7npLp4eOS5i+WJjVxyXG5cdFx0XHRpZihmb3JtYXQgPT09IGZhbHNlKSB7XHJcblx0XHRcdFx0aWYodGltZXIgPj0gMjU5MjAwMCAmJiB0aW1lciA8IDM2NSAqIDg2NDAwKSB7XHJcblx0XHRcdFx0XHR0aXBzID0gcGFyc2VJbnQodGltZXIgLyAoODY0MDAgKiAzMCkpICsgJ+S4quaciOWJjSc7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRpcHMgPSBwYXJzZUludCh0aW1lciAvICg4NjQwMCAqIDM2NSkpICsgJ+W5tOWJjSc7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRpcHMgPSB0aW1lRm9ybWF0KHRpbWVzdGFtcCwgZm9ybWF0KTtcclxuXHRcdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gdGlwcztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGltZUZyb207XHJcbiIsIi8qKlxyXG4gKiDmsYLkuKTkuKrpopzoibLkuYvpl7TnmoTmuJDlj5jlgLxcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0YXJ0Q29sb3Ig5byA5aeL55qE6aKc6ImyXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBlbmRDb2xvciDnu5PmnZ/nmoTpopzoibJcclxuICogQHBhcmFtIHtudW1iZXJ9IHN0ZXAg6aKc6Imy562J5YiG55qE5Lu96aKdXHJcbiAqICovXHJcbmZ1bmN0aW9uIGNvbG9yR3JhZGllbnQoc3RhcnRDb2xvciA9ICdyZ2IoMCwgMCwgMCknLCBlbmRDb2xvciA9ICdyZ2IoMjU1LCAyNTUsIDI1NSknLCBzdGVwID0gMTApIHtcclxuXHRsZXQgc3RhcnRSR0IgPSBoZXhUb1JnYihzdGFydENvbG9yLCBmYWxzZSk7IC8v6L2s5o2i5Li6cmdi5pWw57uE5qih5byPXHJcblx0bGV0IHN0YXJ0UiA9IHN0YXJ0UkdCWzBdO1xyXG5cdGxldCBzdGFydEcgPSBzdGFydFJHQlsxXTtcclxuXHRsZXQgc3RhcnRCID0gc3RhcnRSR0JbMl07XHJcblxyXG5cdGxldCBlbmRSR0IgPSBoZXhUb1JnYihlbmRDb2xvciwgZmFsc2UpO1xyXG5cdGxldCBlbmRSID0gZW5kUkdCWzBdO1xyXG5cdGxldCBlbmRHID0gZW5kUkdCWzFdO1xyXG5cdGxldCBlbmRCID0gZW5kUkdCWzJdO1xyXG5cclxuXHRsZXQgc1IgPSAoZW5kUiAtIHN0YXJ0UikgLyBzdGVwOyAvL+aAu+W3ruWAvFxyXG5cdGxldCBzRyA9IChlbmRHIC0gc3RhcnRHKSAvIHN0ZXA7XHJcblx0bGV0IHNCID0gKGVuZEIgLSBzdGFydEIpIC8gc3RlcDtcclxuXHRsZXQgY29sb3JBcnIgPSBbXTtcclxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHN0ZXA7IGkrKykge1xyXG5cdFx0Ly/orqHnrpfmr4/kuIDmraXnmoRoZXjlgLwgXHJcblx0XHRsZXQgaGV4ID0gcmdiVG9IZXgoJ3JnYignICsgTWF0aC5yb3VuZCgoc1IgKiBpICsgc3RhcnRSKSkgKyAnLCcgKyBNYXRoLnJvdW5kKChzRyAqIGkgKyBzdGFydEcpKSArICcsJyArIE1hdGgucm91bmQoKHNCICpcclxuXHRcdFx0aSArIHN0YXJ0QikpICsgJyknKTtcclxuXHRcdGNvbG9yQXJyLnB1c2goaGV4KTtcclxuXHR9XHJcblx0cmV0dXJuIGNvbG9yQXJyO1xyXG59XHJcblxyXG4vLyDlsIZoZXjooajnpLrmlrnlvI/ovazmjaLkuLpyZ2LooajnpLrmlrnlvI8o6L+Z6YeM6L+U5Zuecmdi5pWw57uE5qih5byPKVxyXG5mdW5jdGlvbiBoZXhUb1JnYihzQ29sb3IsIHN0ciA9IHRydWUpIHtcclxuXHRsZXQgcmVnID0gL14jKFswLTlhLWZBLWZdezN9fFswLTlhLWZBLWZdezZ9KSQvO1xyXG5cdHNDb2xvciA9IHNDb2xvci50b0xvd2VyQ2FzZSgpO1xyXG5cdGlmIChzQ29sb3IgJiYgcmVnLnRlc3Qoc0NvbG9yKSkge1xyXG5cdFx0aWYgKHNDb2xvci5sZW5ndGggPT09IDQpIHtcclxuXHRcdFx0bGV0IHNDb2xvck5ldyA9IFwiI1wiO1xyXG5cdFx0XHRmb3IgKGxldCBpID0gMTsgaSA8IDQ7IGkgKz0gMSkge1xyXG5cdFx0XHRcdHNDb2xvck5ldyArPSBzQ29sb3Iuc2xpY2UoaSwgaSArIDEpLmNvbmNhdChzQ29sb3Iuc2xpY2UoaSwgaSArIDEpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRzQ29sb3IgPSBzQ29sb3JOZXc7XHJcblx0XHR9XHJcblx0XHQvL+WkhOeQhuWFreS9jeeahOminOiJsuWAvFxyXG5cdFx0bGV0IHNDb2xvckNoYW5nZSA9IFtdO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCA3OyBpICs9IDIpIHtcclxuXHRcdFx0c0NvbG9yQ2hhbmdlLnB1c2gocGFyc2VJbnQoXCIweFwiICsgc0NvbG9yLnNsaWNlKGksIGkgKyAyKSkpO1xyXG5cdFx0fVxyXG5cdFx0aWYoIXN0cikge1xyXG5cdFx0XHRyZXR1cm4gc0NvbG9yQ2hhbmdlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIGByZ2IoJHtzQ29sb3JDaGFuZ2VbMF19LCR7c0NvbG9yQ2hhbmdlWzFdfSwke3NDb2xvckNoYW5nZVsyXX0pYDtcclxuXHRcdH1cclxuXHR9IGVsc2UgaWYgKC9eKHJnYnxSR0IpLy50ZXN0KHNDb2xvcikpIHtcclxuXHRcdGxldCBhcnIgPSBzQ29sb3IucmVwbGFjZSgvKD86XFwofFxcKXxyZ2J8UkdCKSovZywgXCJcIikuc3BsaXQoXCIsXCIpXHJcblx0XHRyZXR1cm4gYXJyLm1hcCh2YWwgPT4gTnVtYmVyKHZhbCkpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXR1cm4gc0NvbG9yO1xyXG5cdH1cclxufTtcclxuXHJcbi8vIOWwhnJnYuihqOekuuaWueW8j+i9rOaNouS4umhleOihqOekuuaWueW8j1xyXG5mdW5jdGlvbiByZ2JUb0hleChyZ2IpIHtcclxuXHRsZXQgX3RoaXMgPSByZ2I7XHJcblx0bGV0IHJlZyA9IC9eIyhbMC05YS1mQS1mXXszfXxbMC05YS1mQS1mXXs2fSkkLztcclxuXHRpZiAoL14ocmdifFJHQikvLnRlc3QoX3RoaXMpKSB7XHJcblx0XHRsZXQgYUNvbG9yID0gX3RoaXMucmVwbGFjZSgvKD86XFwofFxcKXxyZ2J8UkdCKSovZywgXCJcIikuc3BsaXQoXCIsXCIpO1xyXG5cdFx0bGV0IHN0ckhleCA9IFwiI1wiO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhQ29sb3IubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0bGV0IGhleCA9IE51bWJlcihhQ29sb3JbaV0pLnRvU3RyaW5nKDE2KTtcclxuXHRcdFx0aGV4ID0gU3RyaW5nKGhleCkubGVuZ3RoID09IDEgPyAwICsgJycgKyBoZXggOiBoZXg7IC8vIOS/neivgeavj+S4qnJnYueahOWAvOS4ujLkvY1cclxuXHRcdFx0aWYgKGhleCA9PT0gXCIwXCIpIHtcclxuXHRcdFx0XHRoZXggKz0gaGV4O1xyXG5cdFx0XHR9XHJcblx0XHRcdHN0ckhleCArPSBoZXg7XHJcblx0XHR9XHJcblx0XHRpZiAoc3RySGV4Lmxlbmd0aCAhPT0gNykge1xyXG5cdFx0XHRzdHJIZXggPSBfdGhpcztcclxuXHRcdH1cclxuXHRcdHJldHVybiBzdHJIZXg7XHJcblx0fSBlbHNlIGlmIChyZWcudGVzdChfdGhpcykpIHtcclxuXHRcdGxldCBhTnVtID0gX3RoaXMucmVwbGFjZSgvIy8sIFwiXCIpLnNwbGl0KFwiXCIpO1xyXG5cdFx0aWYgKGFOdW0ubGVuZ3RoID09PSA2KSB7XHJcblx0XHRcdHJldHVybiBfdGhpcztcclxuXHRcdH0gZWxzZSBpZiAoYU51bS5sZW5ndGggPT09IDMpIHtcclxuXHRcdFx0bGV0IG51bUhleCA9IFwiI1wiO1xyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGFOdW0ubGVuZ3RoOyBpICs9IDEpIHtcclxuXHRcdFx0XHRudW1IZXggKz0gKGFOdW1baV0gKyBhTnVtW2ldKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gbnVtSGV4O1xyXG5cdFx0fVxyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXR1cm4gX3RoaXM7XHJcblx0fVxyXG59XHJcblxyXG5cclxuLyoqXHJcbiogSlPpopzoibLljYHlha3ov5vliLbovazmjaLkuLpyZ2LmiJZyZ2JhLOi/lOWbnueahOagvOW8j+S4uiByZ2Jh77yIMjU177yMMjU177yMMjU177yMMC4177yJ5a2X56ym5LiyXHJcbiogc0hleOS4uuS8oOWFpeeahOWNgeWFrei/m+WItueahOiJsuWAvFxyXG4qIGFscGhh5Li6cmdiYeeahOmAj+aYjuW6plxyXG4qL1xyXG5mdW5jdGlvbiBjb2xvclRvUmdiYShjb2xvciwgYWxwaGEgPSAwLjMpIHtcclxuXHRjb2xvciA9IHJnYlRvSGV4KGNvbG9yKVxyXG5cdC8vIOWNgeWFrei/m+WItuminOiJsuWAvOeahOato+WImeihqOi+vuW8j1xyXG5cdHZhciByZWcgPSAvXiMoWzAtOWEtZkEtZl17M318WzAtOWEtZkEtZl17Nn0pJC9cclxuXHQvKiAxNui/m+WItuminOiJsui9rOS4ulJHQuagvOW8jyAqL1xyXG5cdGxldCBzQ29sb3IgPSBjb2xvci50b0xvd2VyQ2FzZSgpXHJcblx0aWYgKHNDb2xvciAmJiByZWcudGVzdChzQ29sb3IpKSB7XHJcblx0XHRpZiAoc0NvbG9yLmxlbmd0aCA9PT0gNCkge1xyXG5cdFx0XHR2YXIgc0NvbG9yTmV3ID0gJyMnXHJcblx0XHRcdGZvciAobGV0IGkgPSAxOyBpIDwgNDsgaSArPSAxKSB7XHJcblx0XHRcdFx0c0NvbG9yTmV3ICs9IHNDb2xvci5zbGljZShpLCBpICsgMSkuY29uY2F0KHNDb2xvci5zbGljZShpLCBpICsgMSkpXHJcblx0XHRcdH1cclxuXHRcdFx0c0NvbG9yID0gc0NvbG9yTmV3XHJcblx0XHR9XHJcblx0XHQvLyDlpITnkIblha3kvY3nmoTpopzoibLlgLxcclxuXHRcdHZhciBzQ29sb3JDaGFuZ2UgPSBbXVxyXG5cdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCA3OyBpICs9IDIpIHtcclxuXHRcdFx0c0NvbG9yQ2hhbmdlLnB1c2gocGFyc2VJbnQoJzB4JyArIHNDb2xvci5zbGljZShpLCBpICsgMikpKVxyXG5cdFx0fVxyXG5cdFx0Ly8gcmV0dXJuIHNDb2xvckNoYW5nZS5qb2luKCcsJylcclxuXHRcdHJldHVybiAncmdiYSgnICsgc0NvbG9yQ2hhbmdlLmpvaW4oJywnKSArICcsJyArIGFscGhhICsgJyknXHJcblx0fSBcclxuXHRlbHNlIHtcclxuXHRcdHJldHVybiBzQ29sb3JcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRjb2xvckdyYWRpZW50LFxyXG5cdGhleFRvUmdiLFxyXG5cdHJnYlRvSGV4LFxyXG5cdGNvbG9yVG9SZ2JhXHJcbn0iLCIvKipcclxuICog5pys566X5rOV5p2l5rqQ5LqO566A5Lmm5byA5rqQ5Luj56CB77yM6K+m6KeB77yaaHR0cHM6Ly93d3cuamlhbnNodS5jb20vcC9mZGJmMjkzZDBhODVcclxuICog5YWo5bGA5ZSv5LiA5qCH6K+G56ym77yIdXVpZO+8jEdsb2JhbGx5IFVuaXF1ZSBJZGVudGlmaWVy77yJLOS5n+ensOS9nCB1dWlkKFVuaXZlcnNhbGx5IFVuaXF1ZSBJRGVudGlmaWVyKSBcclxuICog5LiA6Iis55So5LqO5aSa5Liq57uE5Lu25LmL6Ze0LOe7meWug+S4gOS4quWUr+S4gOeahOagh+ivhuespizmiJbogIV2LWZvcuW+queOr+eahOaXtuWAmSzlpoLmnpzkvb/nlKjmlbDnu4TnmoRpbmRleOWPr+iDveS8muWvvOiHtOabtOaWsOWIl+ihqOWHuueOsOmXrumimFxyXG4gKiDmnIDlj6/og73nmoTmg4XlhrXmmK/lt6bmu5HliKDpmaRpdGVt5oiW6ICF5a+55p+Q5p2h5L+h5oGv5rWBXCLkuI3llpzmrKJcIuW5tuWOu+aOieWug+eahOaXtuWAmSzkvJrlr7zoh7Tnu4Tku7blhoXnmoTmlbDmja7lj6/og73lh7rnjrDplJnkubFcclxuICogdi1mb3LnmoTml7blgJks5o6o6I2Q5L2/55So5ZCO56uv6L+U5Zue55qEaWTogIzkuI3mmK/lvqrnjq/nmoRpbmRleFxyXG4gKiBAcGFyYW0ge051bWJlcn0gbGVuIHV1aWTnmoTplb/luqZcclxuICogQHBhcmFtIHtCb29sZWFufSBmaXJzdFUg5bCG6L+U5Zue55qE6aaW5a2X5q+N572u5Li6XCJ1XCJcclxuICogQHBhcmFtIHtOdWJtZXJ9IHJhZGl4IOeUn+aIkHV1aWTnmoTln7rmlbAo5oSP5ZGz552A6L+U5Zue55qE5a2X56ym5Liy6YO95piv6L+Z5Liq5Z+65pWwKSwyLeS6jOi/m+WItiw4LeWFq+i/m+WItiwxMC3ljYHov5vliLYsMTYt5Y2B5YWt6L+b5Yi2XHJcbiAqL1xyXG5mdW5jdGlvbiBndWlkKGxlbiA9IDMyLCBmaXJzdFUgPSB0cnVlLCByYWRpeCA9IG51bGwpIHtcclxuXHRsZXQgY2hhcnMgPSAnMDEyMzQ1Njc4OUFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonLnNwbGl0KCcnKTtcclxuXHRsZXQgdXVpZCA9IFtdO1xyXG5cdHJhZGl4ID0gcmFkaXggfHwgY2hhcnMubGVuZ3RoO1xyXG5cclxuXHRpZiAobGVuKSB7XHJcblx0XHQvLyDlpoLmnpzmjIflrpp1dWlk6ZW/5bqmLOWPquaYr+WPlumaj+acuueahOWtl+espiwwfHjkuLrkvY3ov5Dnrpcs6IO95Y675o6JeOeahOWwj+aVsOS9jSzov5Tlm57mlbTmlbDkvY1cclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHV1aWRbaV0gPSBjaGFyc1swIHwgTWF0aC5yYW5kb20oKSAqIHJhZGl4XTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0bGV0IHI7XHJcblx0XHQvLyByZmM0MTIy5qCH5YeG6KaB5rGC6L+U5Zue55qEdXVpZOS4rSzmn5DkupvkvY3kuLrlm7rlrprnmoTlrZfnrKZcclxuXHRcdHV1aWRbOF0gPSB1dWlkWzEzXSA9IHV1aWRbMThdID0gdXVpZFsyM10gPSAnLSc7XHJcblx0XHR1dWlkWzE0XSA9ICc0JztcclxuXHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDM2OyBpKyspIHtcclxuXHRcdFx0aWYgKCF1dWlkW2ldKSB7XHJcblx0XHRcdFx0ciA9IDAgfCBNYXRoLnJhbmRvbSgpICogMTY7XHJcblx0XHRcdFx0dXVpZFtpXSA9IGNoYXJzWyhpID09IDE5KSA/IChyICYgMHgzKSB8IDB4OCA6IHJdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdC8vIOenu+mZpOesrOS4gOS4quWtl+espizlubbnlKh15pu/5LujLOWboOS4uuesrOS4gOS4quWtl+espuS4uuaVsOWAvOaXtizor6VndXVpZOS4jeiDveeUqOS9nGlk5oiW6ICFY2xhc3NcclxuXHRpZiAoZmlyc3RVKSB7XHJcblx0XHR1dWlkLnNoaWZ0KCk7XHJcblx0XHRyZXR1cm4gJ3UnICsgdXVpZC5qb2luKCcnKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmV0dXJuIHV1aWQuam9pbignJyk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBndWlkO1xyXG4iLCIvLyDkuLrkuoborqnnlKjmiLfog73lpJ/oh6rlrprkuYnkuLvpopjvvIzkvJrpgJDmraXlvIPnlKjmraTmlofku7bvvIzlkITpopzoibLpgJrov4djc3Pmj5DkvptcclxuLy8g5Li65LqG57uZ5p+Q5Lqb54m55q6K5Zy65pmv5L2/55So5ZKM5ZCR5ZCO5YW85a6577yM5peg6ZyA5Yig6Zmk5q2k5paH5Lu2KDIwMjAtMDYtMjApXHJcbmxldCBjb2xvciA9IHtcclxuXHRwcmltYXJ5OiBcIiMyOTc5ZmZcIixcclxuXHRwcmltYXJ5RGFyazogXCIjMmI4NWU0XCIsXHJcblx0cHJpbWFyeURpc2FibGVkOiBcIiNhMGNmZmZcIixcclxuXHRwcmltYXJ5TGlnaHQ6IFwiI2VjZjVmZlwiLFxyXG5cdGJnQ29sb3I6IFwiI2YzZjRmNlwiLFxyXG5cdFxyXG5cdGluZm86IFwiIzkwOTM5OVwiLFxyXG5cdGluZm9EYXJrOiBcIiM4Mjg0OGFcIixcclxuXHRpbmZvRGlzYWJsZWQ6IFwiI2M4YzljY1wiLFxyXG5cdGluZm9MaWdodDogXCIjZjRmNGY1XCIsXHJcblx0XHJcblx0d2FybmluZzogXCIjZmY5OTAwXCIsXHJcblx0d2FybmluZ0Rhcms6IFwiI2YyOTEwMFwiLFxyXG5cdHdhcm5pbmdEaXNhYmxlZDogXCIjZmNiZDcxXCIsXHJcblx0d2FybmluZ0xpZ2h0OiBcIiNmZGY2ZWNcIixcclxuXHRcclxuXHRlcnJvcjogXCIjZmEzNTM0XCIsXHJcblx0ZXJyb3JEYXJrOiBcIiNkZDYxNjFcIixcclxuXHRlcnJvckRpc2FibGVkOiBcIiNmYWI2YjZcIixcclxuXHRlcnJvckxpZ2h0OiBcIiNmZWYwZjBcIixcclxuXHRcclxuXHRzdWNjZXNzOiBcIiMxOWJlNmJcIixcclxuXHRzdWNjZXNzRGFyazogXCIjMThiNTY2XCIsXHJcblx0c3VjY2Vzc0Rpc2FibGVkOiBcIiM3MWQ1YTFcIixcclxuXHRzdWNjZXNzTGlnaHQ6IFwiI2RiZjFlMVwiLFxyXG5cdFxyXG5cdG1haW5Db2xvcjogXCIjMzAzMTMzXCIsXHJcblx0Y29udGVudENvbG9yOiBcIiM2MDYyNjZcIixcclxuXHR0aXBzQ29sb3I6IFwiIzkwOTM5OVwiLFxyXG5cdGxpZ2h0Q29sb3I6IFwiI2MwYzRjY1wiLFxyXG5cdGJvcmRlckNvbG9yOiBcIiNlNGU3ZWRcIlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb2xvcjsiLCIvKipcclxuICog5qC55o2u5Li76aKYdHlwZeWAvCzojrflj5blr7nlupTnmoTlm77moIdcclxuICogQHBhcmFtIFN0cmluZyB0eXBlIOS4u+mimOWQjeensCxwcmltYXJ5fGluZm98ZXJyb3J8d2FybmluZ3xzdWNjZXNzXHJcbiAqIEBwYXJhbSBTdHJpbmcgZmlsbCDmmK/lkKbkvb/nlKhmaWxs5aGr5YWF5a6e5L2T55qE5Zu+5qCHICBcclxuICovXHJcbmZ1bmN0aW9uIHR5cGUyaWNvbih0eXBlID0gJ3N1Y2Nlc3MnLCBmaWxsID0gZmFsc2UpIHtcclxuXHQvLyDlpoLmnpzpnZ7pooTnva7lgLws6buY6K6k5Li6c3VjY2Vzc1xyXG5cdGlmIChbJ3ByaW1hcnknLCAnaW5mbycsICdlcnJvcicsICd3YXJuaW5nJywgJ3N1Y2Nlc3MnXS5pbmRleE9mKHR5cGUpID09IC0xKSB0eXBlID0gJ3N1Y2Nlc3MnO1xyXG5cdGxldCBpY29uTmFtZSA9ICcnO1xyXG5cdC8vIOebruWJjSgyMDE5LTEyLTEyKSxpbmZv5ZKMcHJpbWFyeeS9v+eUqOWQjOS4gOS4quWbvuagh1xyXG5cdHN3aXRjaCAodHlwZSkge1xyXG5cdFx0Y2FzZSAncHJpbWFyeSc6XHJcblx0XHRcdGljb25OYW1lID0gJ2luZm8tY2lyY2xlJztcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlICdpbmZvJzpcclxuXHRcdFx0aWNvbk5hbWUgPSAnaW5mby1jaXJjbGUnO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgJ2Vycm9yJzpcclxuXHRcdFx0aWNvbk5hbWUgPSAnY2xvc2UtY2lyY2xlJztcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlICd3YXJuaW5nJzpcclxuXHRcdFx0aWNvbk5hbWUgPSAnZXJyb3ItY2lyY2xlJztcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlICdzdWNjZXNzJzpcclxuXHRcdFx0aWNvbk5hbWUgPSAnY2hlY2ttYXJrLWNpcmNsZSc7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0aWNvbk5hbWUgPSAnY2hlY2ttYXJrLWNpcmNsZSc7XHJcblx0fVxyXG5cdC8vIOaYr+WQpuaYr+WunuS9k+exu+WeiyzliqDkuIotZmlsbCzlnKhpY29u57uE5Lu25bqT5LitLOWunuS9k+eahOexu+WQjeaYr+WQjumdouWKoC1maWxs55qEXHJcblx0aWYgKGZpbGwpIGljb25OYW1lICs9ICctZmlsbCc7XHJcblx0cmV0dXJuIGljb25OYW1lO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0eXBlMmljb25cclxuIiwiLy8g5omT5Lmx5pWw57uEXHJcbmZ1bmN0aW9uIHJhbmRvbUFycmF5KGFycmF5ID0gW10pIHtcclxuXHQvLyDljp/nkIbmmK9zb3J05o6S5bqPLE1hdGgucmFuZG9tKCnkuqfnlJ8wPD0geCA8IDHkuYvpl7TnmoTmlbAs5Lya5a+86Ie0eC0wLjA15aSn5LqO5oiW6ICF5bCP5LqOMFxyXG5cdHJldHVybiBhcnJheS5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgLSAwLjUpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByYW5kb21BcnJheVxyXG4iLCJpbXBvcnQgdmFsaWRhdGlvbiBmcm9tICcuL3Rlc3QuanMnO1xyXG5cclxuLy8g5re75Yqg5Y2V5L2N77yM5aaC5p6c5pyJcnB477yMJe+8jHB4562J5Y2V5L2N57uT5bC+5oiW6ICF5YC85Li6YXV0b++8jOebtOaOpei/lOWbnu+8jOWQpuWImeWKoOS4inJweOWNleS9jee7k+WwvlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRVbml0KHZhbHVlID0gJ2F1dG8nLCB1bml0ID0gJ3JweCcpIHtcclxuICAgIHZhbHVlID0gU3RyaW5nKHZhbHVlKTtcclxuXHQvLyDnlKh1Vmlld+WGhee9rumqjOivgeinhOWImeS4reeahG51bWJlcuWIpOaWreaYr+WQpuS4uuaVsOWAvFxyXG4gICAgcmV0dXJuIHZhbGlkYXRpb24ubnVtYmVyKHZhbHVlKSA/IGAke3ZhbHVlfSR7dW5pdH1gIDogdmFsdWU7XHJcbn0iLCJmdW5jdGlvbiByYW5kb20obWluLCBtYXgpIHtcclxuXHRpZiAobWluID49IDAgJiYgbWF4ID4gMCAmJiBtYXggPj0gbWluKSB7XHJcblx0XHRsZXQgZ2FiID0gbWF4IC0gbWluICsgMTtcclxuXHRcdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBnYWIgKyBtaW4pO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXR1cm4gMDtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJhbmRvbTtcclxuIiwiZnVuY3Rpb24gdHJpbShzdHIsIHBvcyA9ICdib3RoJykge1xyXG5cdGlmIChwb3MgPT0gJ2JvdGgnKSB7XHJcblx0XHRyZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csIFwiXCIpO1xyXG5cdH0gZWxzZSBpZiAocG9zID09IFwibGVmdFwiKSB7XHJcblx0XHRyZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpO1xyXG5cdH0gZWxzZSBpZiAocG9zID09ICdyaWdodCcpIHtcclxuXHRcdHJldHVybiBzdHIucmVwbGFjZSgvKFxccyokKS9nLCBcIlwiKTtcclxuXHR9IGVsc2UgaWYgKHBvcyA9PSAnYWxsJykge1xyXG5cdFx0cmV0dXJuIHN0ci5yZXBsYWNlKC9cXHMrL2csIFwiXCIpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXR1cm4gc3RyO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdHJpbVxyXG4iLCJmdW5jdGlvbiB0b2FzdCh0aXRsZSwgZHVyYXRpb24gPSAxNTAwKSB7XHJcblx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHR0aXRsZTogdGl0bGUsXHJcblx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRkdXJhdGlvbjogZHVyYXRpb25cclxuXHR9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0b2FzdFxyXG4iLCIvLyDojrflj5bniLbnu4Tku7bnmoTlj4LmlbDvvIzlm6DkuLrmlK/ku5jlrp3lsI/nqIvluo/kuI3mlK/mjIFwcm92aWRlL2luamVjdOeahOWGmeazlVxyXG4vLyB0aGlzLiRwYXJlbnTlnKjpnZ5INeS4re+8jOWPr+S7peWHhuehruiOt+WPluWIsOeItue7hOS7tu+8jOS9huaYr+WcqEg15Lit77yM6ZyA6KaB5aSa5qyhdGhpcy4kcGFyZW50LiRwYXJlbnQueHh4XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFBhcmVudChuYW1lLCBrZXlzKSB7XHJcblx0bGV0IHBhcmVudCA9IHRoaXMuJHBhcmVudDtcclxuXHQvLyDpgJrov4d3aGlsZeWOhumBje+8jOi/memHjOS4u+imgeaYr+S4uuS6hkg16ZyA6KaB5aSa5bGC6Kej5p6Q55qE6Zeu6aKYXHJcblx0d2hpbGUgKHBhcmVudCkge1xyXG5cdFx0Ly8g54i257uE5Lu2XHJcblx0XHRpZiAocGFyZW50LiRvcHRpb25zLm5hbWUgIT09IG5hbWUpIHtcclxuXHRcdFx0Ly8g5aaC5p6c57uE5Lu255qEbmFtZeS4jeebuOetie+8jOe7p+e7reS4iuS4gOe6p+Wvu+aJvlxyXG5cdFx0XHRwYXJlbnQgPSBwYXJlbnQuJHBhcmVudDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGxldCBkYXRhID0ge307XHJcblx0XHRcdC8vIOWIpOaWrWtleXPmmK/lkKbmlbDnu4TvvIzlpoLmnpzkvKDov4fmnaXnmoTmmK/kuIDkuKrmlbDnu4TvvIzpgqPkuYjnm7TmjqXkvb/nlKjmlbDnu4TlhYPntKDlgLzlvZPlgZrplK7lgLzljrvniLbnu4Tku7blr7vmib5cclxuXHRcdFx0aWYoQXJyYXkuaXNBcnJheShrZXlzKSkge1xyXG5cdFx0XHRcdGtleXMubWFwKHZhbCA9PiB7XHJcblx0XHRcdFx0XHRkYXRhW3ZhbF0gPSBwYXJlbnRbdmFsXSA/IHBhcmVudFt2YWxdIDogJyc7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLyDljobpgY3kvKDov4fmnaXnmoTlr7nosaHlj4LmlbBcclxuXHRcdFx0XHRmb3IobGV0IGkgaW4ga2V5cykge1xyXG5cdFx0XHRcdFx0Ly8g5aaC5p6c5a2Q57uE5Lu25pyJ5q2k5YC85YiZ55So77yM5peg5q2k5YC85YiZ55So54i257uE5Lu255qE5YC8XHJcblx0XHRcdFx0XHQvLyDliKTmlq3mmK/lkKbnqbrmlbDnu4TvvIzlpoLmnpzmmK/vvIzliJnnlKjniLbnu4Tku7bnmoTlgLzvvIzlkKbliJnnlKjlrZDnu4Tku7bnmoTlgLxcclxuXHRcdFx0XHRcdGlmKEFycmF5LmlzQXJyYXkoa2V5c1tpXSkpIHtcclxuXHRcdFx0XHRcdFx0aWYoa2V5c1tpXS5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0XHRkYXRhW2ldID0ga2V5c1tpXTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRkYXRhW2ldID0gcGFyZW50W2ldO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYoa2V5c1tpXS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XHJcblx0XHRcdFx0XHRcdC8vIOWIpOaWreaYr+WQpuWvueixoe+8jOWmguaenOaYr+Wvueixoe+8jOS4lOacieWxnuaAp++8jOmCo+S5iOS9v+eUqOWtkOe7hOS7tueahOWAvO+8jOWQpuWImeS9v+eUqOeItue7hOS7tueahOWAvFxyXG5cdFx0XHRcdFx0XHRpZihPYmplY3Qua2V5cyhrZXlzW2ldKS5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0XHRkYXRhW2ldID0ga2V5c1tpXTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRkYXRhW2ldID0gcGFyZW50W2ldO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHQvLyDlj6ropoHlrZDnu4Tku7bmnInkvKDlgLzvvIzljbPkvb/mmK9mYWxzZeWAvO+8jOS5n+aYr+KAnOS8oOWAvOKAneS6hu+8jOS5n+mcgOimgeimhueblueItue7hOS7tueahOWQjOWQjeWPguaVsFxyXG5cdFx0XHRcdFx0XHRkYXRhW2ldID0gKGtleXNbaV0gfHwga2V5c1tpXSA9PT0gZmFsc2UpID8ga2V5c1tpXSA6IHBhcmVudFtpXTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIGRhdGE7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4ge307XHJcbn0iLCIvLyDojrflj5bniLbnu4Tku7bnmoTlj4LmlbDvvIzlm6DkuLrmlK/ku5jlrp3lsI/nqIvluo/kuI3mlK/mjIFwcm92aWRlL2luamVjdOeahOWGmeazlVxyXG4vLyB0aGlzLiRwYXJlbnTlnKjpnZ5INeS4re+8jOWPr+S7peWHhuehruiOt+WPluWIsOeItue7hOS7tu+8jOS9huaYr+WcqEg15Lit77yM6ZyA6KaB5aSa5qyhdGhpcy4kcGFyZW50LiRwYXJlbnQueHh4XHJcbi8vIOi/memHjOm7mOiupOWAvOetieS6jnVuZGVmaW5lZOacieWug+eahOWQq+S5ie+8jOWboOS4uuacgOmhtuWxguWFg+e0oCjnu4Tku7Yp55qEJHBhcmVudOWwseaYr3VuZGVmaW5lZO+8jOaEj+WRs+edgOS4jeS8oG5hbWVcclxuLy8g5YC8KOm7mOiupOS4unVuZGVmaW5lZCnvvIzlsLHmmK/mn6Xmib7mnIDpobblsYLnmoQkcGFyZW50XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICRwYXJlbnQobmFtZSA9IHVuZGVmaW5lZCkge1xyXG5cdGxldCBwYXJlbnQgPSB0aGlzLiRwYXJlbnQ7XHJcblx0Ly8g6YCa6L+Hd2hpbGXljobpgY3vvIzov5nph4zkuLvopoHmmK/kuLrkuoZINemcgOimgeWkmuWxguino+aekOeahOmXrumimFxyXG5cdHdoaWxlIChwYXJlbnQpIHtcclxuXHRcdC8vIOeItue7hOS7tlxyXG5cdFx0aWYgKHBhcmVudC4kb3B0aW9ucyAmJiBwYXJlbnQuJG9wdGlvbnMubmFtZSAhPT0gbmFtZSkge1xyXG5cdFx0XHQvLyDlpoLmnpznu4Tku7bnmoRuYW1l5LiN55u4562J77yM57un57ut5LiK5LiA57qn5a+75om+XHJcblx0XHRcdHBhcmVudCA9IHBhcmVudC4kcGFyZW50O1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIHBhcmVudDtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIG9zKCkge1xyXG5cdHJldHVybiB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5wbGF0Zm9ybTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzeXMoKSB7XHJcblx0cmV0dXJuIHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG59XHJcblxyXG5cclxuIiwibGV0IHRpbWVvdXQgPSBudWxsO1xyXG5cclxuLyoqXHJcbiAqIOmYsuaKluWOn+eQhu+8muS4gOWumuaXtumXtOWGhe+8jOWPquacieacgOWQjuS4gOasoeaTjeS9nO+8jOWGjei/h3dhaXTmr6vnp5LlkI7miY3miafooYzlh73mlbBcclxuICogXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMg6KaB5omn6KGM55qE5Zue6LCD5Ye95pWwIFxyXG4gKiBAcGFyYW0ge051bWJlcn0gd2FpdCDlu7bml7bnmoTml7bpl7RcclxuICogQHBhcmFtIHtCb29sZWFufSBpbW1lZGlhdGUg5piv5ZCm56uL5Y2z5omn6KGMIFxyXG4gKiBAcmV0dXJuIG51bGxcclxuICovXHJcbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQgPSA1MDAsIGltbWVkaWF0ZSA9IGZhbHNlKSB7XHJcblx0Ly8g5riF6Zmk5a6a5pe25ZmoXHJcblx0aWYgKHRpbWVvdXQgIT09IG51bGwpIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuXHQvLyDnq4vljbPmiafooYzvvIzmraTnsbvmg4XlhrXkuIDoiKznlKjkuI3liLBcclxuXHRpZiAoaW1tZWRpYXRlKSB7XHJcblx0XHR2YXIgY2FsbE5vdyA9ICF0aW1lb3V0O1xyXG5cdFx0dGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRpbWVvdXQgPSBudWxsO1xyXG5cdFx0fSwgd2FpdCk7XHJcblx0XHRpZiAoY2FsbE5vdykgdHlwZW9mIGZ1bmMgPT09ICdmdW5jdGlvbicgJiYgZnVuYygpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQvLyDorr7nva7lrprml7blmajvvIzlvZPmnIDlkI7kuIDmrKHmk43kvZzlkI7vvIx0aW1lb3V05LiN5Lya5YaN6KKr5riF6Zmk77yM5omA5Lul5Zyo5bu25pe2d2FpdOavq+enkuWQjuaJp+ihjGZ1bmPlm57osIPmlrnms5VcclxuXHRcdHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0eXBlb2YgZnVuYyA9PT0gJ2Z1bmN0aW9uJyAmJiBmdW5jKCk7XHJcblx0XHR9LCB3YWl0KTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlYm91bmNlXHJcbiIsImxldCB0aW1lciwgZmxhZztcclxuLyoqXHJcbiAqIOiKgua1geWOn+eQhu+8muWcqOS4gOWumuaXtumXtOWGhe+8jOWPquiDveinpuWPkeS4gOasoVxyXG4gKiBcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyDopoHmiafooYznmoTlm57osIPlh73mlbAgXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB3YWl0IOW7tuaXtueahOaXtumXtFxyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGltbWVkaWF0ZSDmmK/lkKbnq4vljbPmiafooYxcclxuICogQHJldHVybiBudWxsXHJcbiAqL1xyXG5mdW5jdGlvbiB0aHJvdHRsZShmdW5jLCB3YWl0ID0gNTAwLCBpbW1lZGlhdGUgPSB0cnVlKSB7XHJcblx0aWYgKGltbWVkaWF0ZSkge1xyXG5cdFx0aWYgKCFmbGFnKSB7XHJcblx0XHRcdGZsYWcgPSB0cnVlO1xyXG5cdFx0XHQvLyDlpoLmnpzmmK/nq4vljbPmiafooYzvvIzliJnlnKh3YWl05q+r56eS5YaF5byA5aeL5pe25omn6KGMXHJcblx0XHRcdHR5cGVvZiBmdW5jID09PSAnZnVuY3Rpb24nICYmIGZ1bmMoKTtcclxuXHRcdFx0dGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRmbGFnID0gZmFsc2U7XHJcblx0XHRcdH0sIHdhaXQpO1xyXG5cdFx0fVxyXG5cdH0gZWxzZSB7XHJcblx0XHRpZiAoIWZsYWcpIHtcclxuXHRcdFx0ZmxhZyA9IHRydWVcclxuXHRcdFx0Ly8g5aaC5p6c5piv6Z2e56uL5Y2z5omn6KGM77yM5YiZ5Zyod2FpdOavq+enkuWGheeahOe7k+adn+WkhOaJp+ihjFxyXG5cdFx0XHR0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdGZsYWcgPSBmYWxzZVxyXG5cdFx0XHRcdHR5cGVvZiBmdW5jID09PSAnZnVuY3Rpb24nICYmIGZ1bmMoKTtcclxuXHRcdFx0fSwgd2FpdCk7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHRocm90dGxlXHJcbiIsIi8vIOatpOeJiOacrOWPkeW4g+S6jjIwMjAtMTItMTdcclxubGV0IHZlcnNpb24gPSAnMS44LjMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdHY6IHZlcnNpb24sXHJcblx0dmVyc2lvbjogdmVyc2lvbixcclxuXHQvLyDkuLvpopjlkI3np7BcclxuXHR0eXBlOiBbXHJcblx0XHQncHJpbWFyeScsXHJcblx0XHQnc3VjY2VzcycsXHJcblx0XHQnaW5mbycsXHJcblx0XHQnZXJyb3InLFxyXG5cdFx0J3dhcm5pbmcnXHJcblx0XVxyXG59IiwiLy8gdW5pYXBw5ZyoSDXkuK3lkIRBUEnnmoR6LWluZGV45YC85aaC5LiL77yaXHJcbi8qKlxyXG4gKiBhY3Rpb25zaGVldDogOTk5XHJcbiAqIG1vZGFsOiA5OTlcclxuICogbmF2aWdhdGU6IDk5OFxyXG4gKiB0YWJiYXI6IDk5OFxyXG4gKiB0b2FzdDogOTk5XHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdHRvYXN0OiAxMDA5MCxcclxuXHRub05ldHdvcms6IDEwMDgwLFxyXG5cdC8vIHBvcHVw5YyF5ZCrcG9wdXDvvIxhY3Rpb25zaGVldO+8jGtleWJvYXJk77yMcGlja2Vy55qE5YC8XHJcblx0cG9wdXA6IDEwMDc1LFxyXG5cdG1hc2s6IDEwMDcwLFxyXG5cdG5hdmJhcjogOTgwLFxyXG5cdHRvcFRpcHM6IDk3NSxcclxuXHRzdGlja3k6IDk3MCxcclxuXHRpbmRleExpc3RTdGlja3k6IDk2NSxcclxufSJdLCJzb3VyY2VSb290IjoiIn0=