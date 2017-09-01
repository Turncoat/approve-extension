/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _approveButton = __webpack_require__(2);

var _approveButton2 = _interopRequireDefault(_approveButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var itemscopeContainer = document.getElementById('js-repo-pjax-container');
var baseHashComment = itemscopeContainer.childNodes[1].data;
var hashStart = baseHashComment.indexOf('&quot;') + 6;
var hashEnd = baseHashComment.indexOf('&quot;', hashStart);
var commitHash = baseHashComment.substring(hashStart, hashEnd);

var prDiscussionHeader = document.getElementById('partial-discussion-header');
var headers = prDiscussionHeader.getElementsByClassName('gh-header-show')[0];
var headerActions = headers.getElementsByClassName('gh-header-actions')[0];
headerActions.appendChild((0, _approveButton2.default)());

// window.location.pathname + /reviews

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _github = __webpack_require__(3);

var approveAction = function approveAction(event) {

  var data = {
    event: 'APPROVE'
  };

  chrome.storage.local.get(['github_username', 'github_access_token'], function (items) {
    var accessToken = items.github_access_token;
    var username = items.github_username;
    var authHash = btoa(username + ':' + accessToken);
    var headers = new Headers({
      'Authorization': 'Basic ' + authHash,
      'Content-Type': 'application/json'
    });

    fetch('https://api.github.com/repos/' + _github.repoOwner + '/' + _github.repoName + '/pulls/' + _github.prNumber + '/reviews', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    }).then(function (resp) {
      if (!resp.ok) throw new Error('Something went wrong');
    }).catch(function (error) {
      alert('PR could not be approved');
    });
  });
};

var getApproveButton = function getApproveButton() {
  var approveButton = document.createElement('button');
  approveButton.appendChild(document.createTextNode('Approve'));
  approveButton.classList.add('btn', 'btn-sm', 'btn-primary');
  approveButton.addEventListener('click', approveAction);

  return approveButton;
};

exports.default = getApproveButton;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var pathInfo = window.location.pathname.split('/');
var repoOwner = exports.repoOwner = pathInfo[1];
var repoName = exports.repoName = pathInfo[2];
var prNumber = exports.prNumber = pathInfo[4];

/***/ })
/******/ ]);