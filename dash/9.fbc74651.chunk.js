(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ 2222:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireWildcard=__webpack_require__(7);var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(__webpack_require__(6));var _react=_interopRequireWildcard(__webpack_require__(1));var _reactRouterDom=__webpack_require__(34);var _strapiHelperPlugin=__webpack_require__(8);const EditView=/*#__PURE__*/(0,_react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(2)]).then(__webpack_require__.t.bind(null, 2292, 7)));const EditSettingsView=/*#__PURE__*/(0,_react.lazy)(()=>__webpack_require__.e(/* import() */ 0).then(__webpack_require__.t.bind(null, 2220, 7)));const SingleTypeRecursivePath=props=>{const{url}=(0,_reactRouterDom.useRouteMatch)();const{slug}=(0,_reactRouterDom.useParams)();const renderRoute=(routeProps,Component)=>{return/*#__PURE__*/_react.default.createElement(Component,(0,_extends2.default)({},props,routeProps,{slug:slug}));};const routes=[{path:'ctm-configurations/edit-settings/:type',comp:EditSettingsView},{path:'',comp:EditView}].map(({path,comp})=>/*#__PURE__*/_react.default.createElement(_reactRouterDom.Route,{key:path,path:"".concat(url,"/").concat(path),render:props=>renderRoute(props,comp)}));return/*#__PURE__*/_react.default.createElement(_react.Suspense,{fallback:/*#__PURE__*/_react.default.createElement(_strapiHelperPlugin.LoadingIndicatorPage,null)},/*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch,null,routes));};var _default=SingleTypeRecursivePath;exports.default=_default;

/***/ })

}]);