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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./app/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_animacoes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/animacoes */ \"./app/js/animacoes.js\");\n/* harmony import */ var _js_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/menu */ \"./app/js/menu.js\");\n/* harmony import */ var _js_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/modal */ \"./app/js/modal.js\");\n/* harmony import */ var _js_banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/banner */ \"./app/js/banner.js\");\n/* harmony import */ var _js_blog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/blog */ \"./app/js/blog.js\");\n/* harmony import */ var _js_projetosSlider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/projetosSlider */ \"./app/js/projetosSlider.js\");\n/* harmony import */ var _js_modernizr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/modernizr */ \"./app/js/modernizr.js\");\n/* harmony import */ var _js_modernizr__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_js_modernizr__WEBPACK_IMPORTED_MODULE_7__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nObject(_js_banner__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\nObject(_js_blog__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\nObject(_js_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\nObject(_js_projetosSlider__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./app/index.js?");

/***/ }),

/***/ "./app/js/animacoes.js":
/*!*****************************!*\
  !*** ./app/js/animacoes.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return animacoes; });\nfunction animacoes() {\r\n  const animaItem = document.querySelectorAll(\"[data-animar]\");\r\n\r\n  animaItem.forEach(item => {\r\n    if (item.getBoundingClientRect().top < window.innerHeight)\r\n      return item.classList.add(\"animar\");\r\n\r\n    window.addEventListener(\"scroll\", e => {\r\n      const distTop = window.innerHeight * 0.85;\r\n\r\n      if (item.getBoundingClientRect().top < distTop)\r\n        item.classList.add(\"animar\");\r\n    });\r\n  });\r\n\r\n  const animarComTempo = document.querySelectorAll(\"[data-anima-tempo]\");\r\n\r\n  window.setTimeout(() => {\r\n    animarComTempo.forEach(item => {\r\n      item.classList.add(\"animar\");\r\n    });\r\n  }, 500);\r\n}\r\n\n\n//# sourceURL=webpack:///./app/js/animacoes.js?");

/***/ }),

/***/ "./app/js/banner.js":
/*!**************************!*\
  !*** ./app/js/banner.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return banner; });\n/* harmony import */ var _bannerFunctions_verifyWheelScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bannerFunctions/verifyWheelScroll */ \"./app/js/bannerFunctions/verifyWheelScroll.js\");\n/* harmony import */ var _bannerFunctions_manageBanners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bannerFunctions/manageBanners */ \"./app/js/bannerFunctions/manageBanners.js\");\n\r\n\r\n\r\nfunction banner() {\r\n  const homeBanner = document.querySelector('.home-banner');\r\n  const bannersContent = document.querySelectorAll('.home-banner-content');\r\n  const bannerControls = document.querySelectorAll('.banner-control-wrapper');\r\n  const bannerInfo = {\r\n    actualBanner: 0,\r\n    cooldown: true\r\n  };\r\n  \r\n  if (!bannersContent[0]) return;\r\n\r\n  bannersContent[0].classList.remove('inactive');\r\n  bannersContent[0].classList.add('active');\r\n  bannerControls[0].classList.add('active');\r\n\r\n  window.setTimeout(() => {\r\n    bannerInfo.cooldown = false;\r\n  }, 3000);\r\n\r\n  if (window.innerWidth > 768) {\r\n    window.addEventListener('mousewheel', e => {\r\n      if (!bannerInfo.cooldown) {\r\n        const newActualBanner = Object(_bannerFunctions_verifyWheelScroll__WEBPACK_IMPORTED_MODULE_0__[\"verifyWheelScroll\"])(\r\n          e.deltaY,\r\n          bannerInfo.actualBanner,\r\n          bannersContent.length\r\n        );\r\n        \r\n        bannerInfo.actualBanner = newActualBanner;\r\n        bannerInfo.cooldown = true;\r\n  \r\n        Object(_bannerFunctions_manageBanners__WEBPACK_IMPORTED_MODULE_1__[\"manageBanners\"])(homeBanner, bannersContent, bannerInfo.actualBanner, bannerControls);\r\n    \r\n        window.setTimeout(() => {\r\n          bannerInfo.cooldown = false;\r\n        }, 3000);\r\n      }\r\n    });\r\n  }\r\n\r\n  bannerControls.forEach((control, index) => {\r\n    control.addEventListener('click', e => {\r\n      e.preventDefault();\r\n\r\n      if (index !== bannerInfo.actualBanner && !bannerInfo.cooldown) {\r\n        bannerInfo.actualBanner = index;\r\n        bannerInfo.cooldown = true;\r\n\r\n        Object(_bannerFunctions_manageBanners__WEBPACK_IMPORTED_MODULE_1__[\"manageBanners\"])(homeBanner, bannersContent, bannerInfo.actualBanner, bannerControls);\r\n      \r\n        window.setTimeout(() => {\r\n          bannerInfo.cooldown = false;\r\n        }, 3000);\r\n      }\r\n    });\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./app/js/banner.js?");

/***/ }),

/***/ "./app/js/bannerFunctions/manageBanners.js":
/*!*************************************************!*\
  !*** ./app/js/bannerFunctions/manageBanners.js ***!
  \*************************************************/
/*! exports provided: manageBanners */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"manageBanners\", function() { return manageBanners; });\nfunction manageBanners(bannerWrapper, banners, actualBanner, bannerControls) {\r\n  const gradientPosition = actualBanner === 0 ? 0 : actualBanner * 25;\r\n\r\n  banners.forEach((banner, index) => {\r\n    banner.classList.remove('active');\r\n    banner.classList.add('inactive');\r\n    bannerControls[index].classList.remove('active');\r\n\r\n    if (index === actualBanner) {\r\n      bannerControls[index].classList.add('active');\r\n\r\n      window.setTimeout(() => {\r\n        banner.classList.remove('inactive');\r\n        banner.classList.add('active');\r\n\r\n        bannerWrapper.style.setProperty('background-position', `${gradientPosition}% ${100 - gradientPosition}%`);\r\n      }, 3000);\r\n    }\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./app/js/bannerFunctions/manageBanners.js?");

/***/ }),

/***/ "./app/js/bannerFunctions/verifyWheelScroll.js":
/*!*****************************************************!*\
  !*** ./app/js/bannerFunctions/verifyWheelScroll.js ***!
  \*****************************************************/
/*! exports provided: verifyWheelScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"verifyWheelScroll\", function() { return verifyWheelScroll; });\nfunction verifyWheelScroll(scrollDeltaY, actualBanner, limit) {  \r\n  if (scrollDeltaY > 0) {\r\n    const newValue = actualBanner === limit - 1 ? 0 : actualBanner + 1;\r\n\r\n    return newValue;\r\n  } else if (scrollDeltaY < 0) {\r\n    const newValue = actualBanner === 0 ? limit - 1 : actualBanner - 1;\r\n\r\n    return newValue;\r\n  }    \r\n}\r\n\n\n//# sourceURL=webpack:///./app/js/bannerFunctions/verifyWheelScroll.js?");

/***/ }),

/***/ "./app/js/blog.js":
/*!************************!*\
  !*** ./app/js/blog.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return blog; });\n/* harmony import */ var _blogFunctions_classControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blogFunctions/classControl */ \"./app/js/blogFunctions/classControl.js\");\n\r\n\r\nfunction blog() {\r\n  const posts = document.querySelectorAll('.blog-item');\r\n  const imgWrapper = document.querySelector('.blog-img-wrapper');\r\n  const blogControls = document.querySelectorAll('.banner-blog-controls button');\r\n  const blogInfo = {\r\n    actualBlog: 0\r\n  }\r\n\r\n  if (!posts[0]) return null;\r\n\r\n  Object(_blogFunctions_classControl__WEBPACK_IMPORTED_MODULE_0__[\"controlClass\"])(posts, blogInfo.actualBlog, imgWrapper);\r\n\r\n  blogControls.forEach((control, index) => {\r\n    control.addEventListener('click', e => {\r\n      e.preventDefault();\r\n\r\n      const { actualBlog } = blogInfo;\r\n      \r\n      if (index === 0) {\r\n        const newActualBlog = actualBlog === 0 ? posts.length - 1 : actualBlog - 1;\r\n\r\n        blogInfo.actualBlog = newActualBlog;\r\n\r\n        Object(_blogFunctions_classControl__WEBPACK_IMPORTED_MODULE_0__[\"controlClass\"])(posts, blogInfo.actualBlog, imgWrapper);\r\n      } else {\r\n        const newActualBlog = actualBlog === posts.length - 1 ? 0 : actualBlog + 1;\r\n\r\n        blogInfo.actualBlog = newActualBlog;\r\n\r\n        Object(_blogFunctions_classControl__WEBPACK_IMPORTED_MODULE_0__[\"controlClass\"])(posts, blogInfo.actualBlog, imgWrapper);\r\n      }\r\n    });\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./app/js/blog.js?");

/***/ }),

/***/ "./app/js/blogFunctions/classControl.js":
/*!**********************************************!*\
  !*** ./app/js/blogFunctions/classControl.js ***!
  \**********************************************/
/*! exports provided: controlClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"controlClass\", function() { return controlClass; });\n/* harmony import */ var _imgControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgControl */ \"./app/js/blogFunctions/imgControl.js\");\n \r\n\r\nfunction controlClass(elements, actualElement, parentElement) {\r\n  elements.forEach((element, index) => {\r\n    element.classList.remove('active');\r\n\r\n    if (index === actualElement) {\r\n      element.classList.add('active');\r\n\r\n      Object(_imgControl__WEBPACK_IMPORTED_MODULE_0__[\"createImg\"])(element.dataset.imgLink, parentElement);\r\n    }      \r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./app/js/blogFunctions/classControl.js?");

/***/ }),

/***/ "./app/js/blogFunctions/imgControl.js":
/*!********************************************!*\
  !*** ./app/js/blogFunctions/imgControl.js ***!
  \********************************************/
/*! exports provided: createImg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createImg\", function() { return createImg; });\nfunction createImg(src, parentElement) {\r\n  clearParentElement(parentElement);\r\n\r\n  const img = document.createElement('img');\r\n\r\n  img.setAttribute('src', src);\r\n\r\n  parentElement.appendChild(img);\r\n}\r\n\r\nfunction clearParentElement(parentElement) {\r\n  parentElement.innerHTML = '';\r\n}\r\n\n\n//# sourceURL=webpack:///./app/js/blogFunctions/imgControl.js?");

/***/ }),

/***/ "./app/js/menu.js":
/*!************************!*\
  !*** ./app/js/menu.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return openMenu; });\nconst headerCursorControl = [\r\n  {\r\n    selector: '.header-logo',\r\n    cursor: 'pointer'\r\n  },\r\n  {\r\n    selector: '.header-midias a',\r\n    cursor: 'pointer'\r\n  },\r\n  {\r\n    selector: '.menu-hamb',\r\n    cursor: 'pointer'\r\n  },\r\n  {\r\n    selector: '.header .container',\r\n    cursor: 'default'\r\n  }\r\n]\r\n\r\nfunction openMenu() {\r\n  const menuHamb = document.querySelector('[data-menu=\"button\"]');\r\n  const menu = document.querySelector('[data-menu=\"menu\"]');\r\n  const mouseDot = document.querySelector('.mouse-dot');\r\n  const menuOptions = document.querySelectorAll('.menu ul a');\r\n  const menuInfo = {\r\n    hideCursor: false\r\n  }\r\n\r\n  if (!menuHamb || !menu) return null;\r\n\r\n  menuOptions.forEach((menuOption, index) => {\r\n    menuOption.style.setProperty('transition-delay', `${1.5 + (.3 * index)}s`)\r\n  });\r\n\r\n  menuHamb.addEventListener('click', e => {\r\n    e.preventDefault();\r\n\r\n    menu.classList.toggle('active');\r\n    menuHamb.classList.toggle('active');\r\n    mouseDot.classList.toggle('active');\r\n\r\n    menuInfo.hideCursor = !menuInfo.hideCursor;\r\n\r\n    hideCursor(headerCursorControl, menuInfo.hideCursor);\r\n  });\r\n\r\n  window.addEventListener('mousemove', e => {\r\n    mouseDot.style.setProperty('left', `${e.clientX}px`);\r\n    mouseDot.style.setProperty('top', `${e.clientY}px`);\r\n  });\r\n}\r\n\r\nfunction hideCursor(targets, hide) {\r\n  targets.forEach(target => {\r\n    const nodeTargets = document.querySelectorAll(target.selector);\r\n\r\n    nodeTargets.forEach(nodeTarget => {\r\n      if (!!hide) {\r\n        nodeTarget.style.setProperty('cursor', 'none');\r\n      } else {\r\n        nodeTarget.style.setProperty('cursor', target.cursor);\r\n      }\r\n    });\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./app/js/menu.js?");

/***/ }),

/***/ "./app/js/modal.js":
/*!*************************!*\
  !*** ./app/js/modal.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return modal; });\nfunction modal() {\r\n  const imgArray = document.querySelectorAll(\"[data-modal]\");\r\n  const modal = document.querySelector(\"#modal\");\r\n  const body = document.querySelector(\"body\");\r\n\r\n  if (!imgArray) return null;\r\n\r\n  imgArray.forEach(img => {\r\n    img.addEventListener(\"click\", e => {\r\n      e.preventDefault();\r\n\r\n      body.style.setProperty(\"overflow-y\", \"hidden\");\r\n\r\n      modal.classList.add(\"ativo\");\r\n\r\n      const modalWrapper = document.createElement(\"div\");\r\n      s;\r\n      modalWrapper.innerHTML = `\r\n        <img src=\"${img.getAttribute(\"src\")}\" alt=\"${img.getAttribute(\r\n        \"alt\"\r\n      )}\" />\r\n      `;\r\n\r\n      const closeModal = document.createElement(\"button\");\r\n      closeModal.innerText = \"x\";\r\n      closeModal.addEventListener(\"click\", e => {\r\n        e.preventDefault();\r\n\r\n        body.style.setProperty(\"overflow-y\", \"scroll\");\r\n\r\n        modal.classList.remove(\"ativo\");\r\n        modal.innerHTML = \"\";\r\n      });\r\n\r\n      modalWrapper.appendChild(closeModal);\r\n      modal.appendChild(modalWrapper);\r\n\r\n      modal.addEventListener(\"click\", e => {\r\n        if (e.target === e.currentTarget) {\r\n          body.style.setProperty(\"overflow-y\", \"scroll\");\r\n\r\n          modal.classList.remove(\"ativo\");\r\n          modal.innerHTML = \"\";\r\n        }\r\n      });\r\n    });\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./app/js/modal.js?");

/***/ }),

/***/ "./app/js/modernizr.js":
/*!*****************************!*\
  !*** ./app/js/modernizr.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("!function(e,n,A){function o(e,n){return typeof e===n}function t(){var e,n,A,t,a,i,l;for(var f in r)if(r.hasOwnProperty(f)){if(e=[],n=r[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(A=0;A<n.options.aliases.length;A++)e.push(n.options.aliases[A].toLowerCase());for(t=o(n.fn,\"function\")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],l=i.split(\".\"),1===l.length?Modernizr[l[0]]=t:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=t),s.push((t?\"\":\"no-\")+l.join(\"-\"))}}function a(e){var n=u.className,A=Modernizr._config.classPrefix||\"\";if(c&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp(\"(^|\\\\s)\"+A+\"no-js(\\\\s|$)\");n=n.replace(o,\"$1\"+A+\"js$2\")}Modernizr._config.enableClasses&&(n+=\" \"+A+e.join(\" \"+A),c?u.className.baseVal=n:u.className=n)}function i(e,n){if(\"object\"==typeof e)for(var A in e)f(e,A)&&i(A,e[A]);else{e=e.toLowerCase();var o=e.split(\".\"),t=Modernizr[o[0]];if(2==o.length&&(t=t[o[1]]),\"undefined\"!=typeof t)return Modernizr;n=\"function\"==typeof n?n():n,1==o.length?Modernizr[o[0]]=n:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=n),a([(n&&0!=n?\"\":\"no-\")+o.join(\"-\")]),Modernizr._trigger(e,n)}return Modernizr}var s=[],r=[],l={_version:\"3.6.0\",_config:{classPrefix:\"\",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var A=this;setTimeout(function(){n(A[e])},0)},addTest:function(e,n,A){r.push({name:e,fn:n,options:A})},addAsyncTest:function(e){r.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=l,Modernizr=new Modernizr;var f,u=n.documentElement,c=\"svg\"===u.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;f=o(e,\"undefined\")||o(e.call,\"undefined\")?function(e,n){return n in e&&o(e.constructor.prototype[n],\"undefined\")}:function(n,A){return e.call(n,A)}}(),l._l={},l.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},l._trigger=function(e,n){if(this._l[e]){var A=this._l[e];setTimeout(function(){var e,o;for(e=0;e<A.length;e++)(o=A[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){l.addTest=i}),Modernizr.addAsyncTest(function(){function e(e,n,A){function o(n){var o=n&&\"load\"===n.type?1==t.width:!1,a=\"webp\"===e;i(e,a&&o?new Boolean(o):o),A&&A(n)}var t=new Image;t.onerror=o,t.onload=o,t.src=n}var n=[{uri:\"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=\",name:\"webp\"},{uri:\"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==\",name:\"webp.alpha\"},{uri:\"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA\",name:\"webp.animation\"},{uri:\"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=\",name:\"webp.lossless\"}],A=n.shift();e(A.name,A.uri,function(A){if(A&&\"load\"===A.type)for(var o=0;o<n.length;o++)e(n[o].name,n[o].uri)})}),t(),a(s),delete l.addTest,delete l.addAsyncTest;for(var p=0;p<Modernizr._q.length;p++)Modernizr._q[p]();e.Modernizr=Modernizr}(window,document);\n\n//# sourceURL=webpack:///./app/js/modernizr.js?");

/***/ }),

/***/ "./app/js/projetosFunctions/classControl.js":
/*!**************************************************!*\
  !*** ./app/js/projetosFunctions/classControl.js ***!
  \**************************************************/
/*! exports provided: classControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"classControl\", function() { return classControl; });\nfunction classControl(projetos, classes, actualProject, textWrapper) {\r\n  projetos.forEach((projeto, index) => {\r\n    projeto.classList.remove(classes[0], classes[1], classes[2]);\r\n\r\n    if (!actualProject) {\r\n      if (index === 0) {\r\n        projeto.classList.add(classes[0]);\r\n        textWrapper.innerHTML = projeto.children[1].innerHTML;\r\n      } else if (index === 1)\r\n        projeto.classList.add(classes[1]);\r\n      else\r\n        projeto.classList.add(classes[2]);\r\n    }\r\n\r\n    if (!!actualProject) {\r\n      if (index === actualProject) {\r\n        projeto.classList.add(classes[0]);\r\n        textWrapper.innerHTML = projeto.children[1].innerHTML;\r\n      } else if (index === actualProject + 1)\r\n        projeto.classList.add(classes[1]);\r\n      else if (index >= actualProject + 2)\r\n        projeto.classList.add(classes[2]);\r\n    }\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./app/js/projetosFunctions/classControl.js?");

/***/ }),

/***/ "./app/js/projetosSlider.js":
/*!**********************************!*\
  !*** ./app/js/projetosSlider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return projetosSlider; });\n/* harmony import */ var _projetosFunctions_classControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projetosFunctions/classControl */ \"./app/js/projetosFunctions/classControl.js\");\n\r\n\r\nfunction projetosSlider() {\r\n  const projetos = document.querySelectorAll('.projetos-item');\r\n  const controls = document.querySelectorAll('.banner-projetos-controls button')\r\n  const projetoText = document.querySelector('.banner-projetos-text');\r\n  const projetoInfo = {\r\n    actualProject: 0,\r\n    classes: ['first', 'second', 'third']\r\n  };\r\n\r\n  if (!projetos[0]) return null;\r\n\r\n  Object(_projetosFunctions_classControl__WEBPACK_IMPORTED_MODULE_0__[\"classControl\"])(projetos, projetoInfo.classes, null, projetoText);\r\n\r\n  controls.forEach((control, index) => {\r\n    control.addEventListener('click', e => {\r\n      e.preventDefault();\r\n      \r\n      if (index === 0) {\r\n        const newActualProject = projetoInfo.actualProject === 0 ? projetoInfo.actualProject : projetoInfo.actualProject - 1;\r\n\r\n        projetoInfo.actualProject = newActualProject;\r\n\r\n        Object(_projetosFunctions_classControl__WEBPACK_IMPORTED_MODULE_0__[\"classControl\"])(projetos, projetoInfo.classes, projetoInfo.actualProject, projetoText);\r\n      } else {\r\n        const newActualProject = projetoInfo.actualProject === projetos.length - 1 ? projetoInfo.actualProject : projetoInfo.actualProject + 1;\r\n\r\n        projetoInfo.actualProject = newActualProject;\r\n\r\n        Object(_projetosFunctions_classControl__WEBPACK_IMPORTED_MODULE_0__[\"classControl\"])(projetos, projetoInfo.classes, projetoInfo.actualProject, projetoText);\r\n      }\r\n    });\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./app/js/projetosSlider.js?");

/***/ }),

/***/ "./app/style.scss":
/*!************************!*\
  !*** ./app/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./app/style.scss?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./app/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./app/index.js */\"./app/index.js\");\n\n\n//# sourceURL=webpack:///multi_./app/index.js?");

/***/ })

/******/ });