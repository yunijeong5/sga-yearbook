"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[4]!./styles/styles.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[4]!./styles/styles.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700|Source+Sans+Pro:300,400,700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".app {\\n  max-width: 1200px;\\n  width: 100%;\\n  margin: 100px auto;\\n  -webkit-box-shadow: 0 0 5px #ccc;\\n          box-shadow: 0 0 5px #ccc;\\n}\\n\\n.navbar {\\n  padding: 20px;\\n}\\n\\n.navbar-brand,\\n.nav-link {\\n  font-family: \\\"Minion Pro\\\", sans-serif;\\n  color: white !important;\\n}\\n\\n.navbar-brand {\\n  font-weight: 700;\\n}\\n\\n.nav-link {\\n  margin-left: 8px;\\n  margin-right: 8px;\\n  font-weight: 700;\\n}\\n.nav-link:hover {\\n  text-decoration: underline;\\n}\\n\\n.details {\\n  display: -webkit-flex;\\n  display: -moz-box;\\n  display: flex;\\n  -webkit-justify-content: space-evenly;\\n     -moz-box-pack: space-evenly;\\n          justify-content: space-evenly;\\n  -webkit-flex-wrap: wrap;\\n          flex-wrap: wrap;\\n  padding: 30px 0;\\n  position: relative;\\n}\\n\\n.details .big-img {\\n  margin: 50px;\\n  left: 500px;\\n  max-width: 600px;\\n  min-width: 290px;\\n  max-height: 550px;\\n  overflow: hidden;\\n  border: 6px solid white;\\n  border-radius: 4px;\\n}\\n\\n.big-img img {\\n  width: 100%;\\n  height: 100%;\\n  max-height: 550px;\\n  display: -webkit-flex;\\n  display: -moz-box;\\n  display: flex;\\n  object-fit: cover;\\n}\\n\\n.details .box {\\n  max-width: 500px;\\n  min-width: 290px;\\n  height: 66.5vh;\\n  margin: 25px;\\n}\\n\\n.box .row {\\n  display: -webkit-flex;\\n  display: -moz-box;\\n  display: flex;\\n  -webkit-justify-content: space-between;\\n     -moz-box-pack: justify;\\n          justify-content: space-between;\\n  margin-bottom: 15px;\\n}\\n\\n.box .row h2 {\\n  text-transform: uppercase;\\n  letter-spacing: 2px;\\n}\\n\\n.box .row span {\\n  color: crimson;\\n}\\n\\n.box .colors button {\\n  width: 30px;\\n  height: 30px;\\n  border: 1px solid #333;\\n  outline: none;\\n  margin-right: 5px;\\n  cursor: pointer;\\n}\\n\\n.box p {\\n  line-height: 1.5;\\n}\\n\\n.thumb {\\n  width: 100%;\\n  height: 100px;\\n  display: -webkit-flex;\\n  display: -moz-box;\\n  display: flex;\\n  cursor: pointer;\\n}\\n\\n.thumb img {\\n  width: 90px;\\n  height: 100%;\\n  display: block;\\n  object-fit: cover;\\n  border: 1px solid #ddd;\\n  margin-right: 5px;\\n  opacity: 0.7;\\n  border-radius: 5px;\\n}\\n\\n.thumb img.active {\\n  opacity: 1;\\n  border: 1px solid lightseagreen;\\n}\\n\\n.box .cart {\\n  background: #333;\\n  color: white;\\n  outline: none;\\n  border: none;\\n  cursor: pointer;\\n  padding: 10px 25px;\\n}\\n\\n.about-bg {\\n  background-size: cover;\\n  background-position: 50% 70%;\\n}\\n\\n.bg-gradient {\\n  background: -webkit-gradient(linear, left top, right top, from(#a30000), to(#f44708));\\n  background: -webkit-linear-gradient(left, #a30000, #f44708);\\n  background: linear-gradient(to right, #a30000, #f44708);\\n}\\n\\n.bg-gradient-transparent {\\n  background: #881c1c;\\n}\\n\\n.copyright {\\n  font-size: 14px;\\n  font-family: \\\"Minion Pro\\\", sans-serif;\\n  font-weight: 400;\\n  color: rgba(255, 255, 255, 0.7) !important;\\n  margin: 0px;\\n  padding: 0px;\\n}\\n\\n.bg-image {\\n  opacity: 0.95;\\n  background-repeat: no-repeat;\\n  background-position: center;\\n  background-size: cover;\\n  width: 100%;\\n  height: 100%;\\n  position: fixed;\\n  -webkit-filter: brightness(50%) sepia(30%) saturate(150%);\\n          filter: brightness(50%) sepia(30%) saturate(150%);\\n}\\n\\n.content {\\n  position: relative;\\n  z-index: 1;\\n}\\n\\n.outer {\\n  position: relative;\\n  width: 100%;\\n  height: 100vh;\\n}\\n\\n.outer img {\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  right: 0;\\n  bottom: 0;\\n  object-fit: cover;\\n  object-position: center;\\n}\\n\\n.main-text {\\n  color: #ccc;\\n}\\n\\n.footer-wrapper {\\n  position: relative;\\n  bottom: 0;\\n  display: block;\\n  width: 100%;\\n  z-index: -100;\\n}\\n\\n.content-wrap {\\n  padding-bottom: 10em;\\n}\\n\\n.footer {\\n  background-color: #881c1c;\\n  color: white;\\n  position: relative;\\n}\\n.footer .nav-link {\\n  font-size: 14px;\\n  font-family: \\\"Minion Pro\\\", sans-serif;\\n  font-weight: 400;\\n  color: rgba(255, 255, 255, 0.7) !important;\\n  margin: 0px;\\n  padding: 0px;\\n  text-decoration: none !important;\\n}\\n.footer .nav-link .footer-heading {\\n  color: white !important;\\n  font-size: 16px;\\n  font-weight: 700;\\n}\\n\\n@media only screen and (min-width: 640px) {\\n  .footer-col {\\n    display: -webkit-flex;\\n    display: -moz-box;\\n    display: flex;\\n    -webkit-align-items: center;\\n       -moz-box-align: center;\\n            align-items: center;\\n    -webkit-justify-content: center;\\n       -moz-box-pack: center;\\n            justify-content: center;\\n    text-align: center;\\n    margin-bottom: 10px;\\n  }\\n}\\n@media only screen and (min-width: 1024px) {\\n  .thumb {\\n    height: 50px;\\n  }\\n\\n  .thumb img {\\n    width: 50px;\\n  }\\n}\\n.icon {\\n  color: white;\\n  margin: 10px;\\n}\\n\\n.padding3 {\\n  padding-top: 2.5em;\\n  padding-bottom: 2em;\\n}\\n\\n.pg-heading {\\n  color: white;\\n}\\n\\n.margin-bottom2 {\\n  margin-bottom: 5px;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles.scss\"],\"names\":[],\"mappings\":\"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\",\"sourcesContent\":[\"@import url(\\\"https://fonts.googleapis.com/css?family=Montserrat:400,500,700|Source+Sans+Pro:300,400,700&display=swap\\\");\\n\\n$primary-font: \\\"Minion Pro\\\", sans-serif;\\n$secondary-font: \\\"Sans Serif\\\", sans-serif;\\n$primary-color:  #881c1c;\\n$primary-color-darker: #a30000;\\n$base-color: #000000;\\n$red-gradient: linear-gradient(to right, #a30000, #f44708);\\n$red-gradient-transparent: #881c1c;\\n\\n.app{\\n    max-width: 1200px;\\n    width: 100%;\\n    margin: 100px auto;\\n    box-shadow: 0 0 5px #ccc;\\n}\\n\\n.navbar {\\n    padding: 20px;\\n}\\n\\n.navbar-brand,\\n.nav-link {\\n    font-family: $primary-font;\\n    color: white !important;\\n}\\n\\n.navbar-brand {\\n    font-weight: 700;\\n}\\n\\n.nav-link {\\n    margin-left: 8px;\\n    margin-right: 8px;\\n    font-weight: 700;\\n    &:hover {\\n         text-decoration: underline;\\n    }\\n}\\n\\n\\n.details{\\n    display: flex;\\n    justify-content: space-evenly;\\n    flex-wrap: wrap;\\n    padding: 30px 0;\\n    position: relative;\\n}\\n\\n.details .big-img{\\n    margin: 50px;\\n    left: 500px;\\n    max-width: 600px;\\n    min-width: 290px;\\n    max-height: 550px;\\n    overflow: hidden;\\n    // margin: 40px;\\n    border: 6px solid white;\\n    border-radius: 4px;\\n}\\n\\n\\n.big-img img{\\n    width: 100%;\\n    height: 100%;\\n    max-height: 550px;\\n    display: flex;\\n    object-fit: cover;\\n}\\n\\n.details .box{\\n    max-width: 500px;\\n    min-width: 290px;\\n    height: 66.5vh;\\n    margin: 25px; //25px\\n}\\n.box .row{\\n    display: flex;\\n    justify-content: space-between;\\n    margin-bottom: 15px;\\n}\\n.box .row h2{\\n    text-transform: uppercase;\\n    letter-spacing: 2px;\\n}\\n.box .row span{\\n    color: crimson;\\n}\\n\\n.box .colors button{\\n    width: 30px;\\n    height: 30px;\\n    border: 1px solid #333;\\n    outline: none;\\n    margin-right: 5px;\\n    cursor: pointer;\\n}\\n\\n.box p{\\n    line-height: 1.5;\\n    // margin: 15px 0;\\n}\\n.thumb{\\n    width: 100%;\\n    height: 100px;\\n    display: flex;\\n    cursor: pointer;\\n    // margin: 10px 0;\\n}\\n.thumb img{\\n    width: 90px;\\n    height: 100%;\\n    display: block;\\n    object-fit: cover;\\n    border: 1px solid #ddd;\\n    margin-right: 5px;\\n    opacity: 0.7;\\n    border-radius: 5px;\\n}\\n\\np {\\n    // color: white;\\n}\\n\\n.thumb img.active{\\n    opacity: 1;\\n    border: 1px solid lightseagreen;\\n}\\n.box .cart{\\n    background: #333;\\n    color: white;\\n    outline: none;\\n    border: none;\\n    cursor: pointer;\\n    padding: 10px 25px;\\n    // margin-top: 15px;\\n}\\n\\n.about-bg {\\n    background-size: cover;\\n    background-position: 50% 70%;\\n}\\n\\n.bg-gradient {\\n    background: $red-gradient;\\n}\\n\\n.bg-gradient-transparent {\\n    background: $red-gradient-transparent;\\n}\\n\\n.copyright {\\n\\tfont-size: 14px;\\n\\tfont-family: $primary-font;\\n\\tfont-weight: 400;\\n\\tcolor: rgba($color: white, $alpha: 0.7) !important;\\n\\tmargin: 0px;\\n\\tpadding: 0px;\\n}\\n\\n.bg-image {\\n    // background-color: rgb(68, 46, 46);\\n    opacity: 0.95;\\n    background-repeat:  no-repeat;\\n    background-position: center;\\n    background-size: cover;\\n    width: 100%;\\n    height: 100%;\\n    position: fixed;\\n    filter: brightness(50%) sepia(30%) saturate(150%)\\n}\\n\\n.content {\\n  position: relative;\\n  z-index: 1;\\n}\\n\\n.outer {\\n  position: relative;\\n  width: 100%;\\n  height: 100vh;\\n}\\n\\n.outer img {\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  right: 0;\\n  bottom: 0;\\n  object-fit: cover;\\n  object-position: center;\\n}\\n\\n.main-text {\\n    color: #ccc\\n}\\n\\n // might be useless\\n.footer-wrapper {\\n    position:relative;\\n    bottom:0;\\n    display:block;\\n    width:100%;\\n    z-index: -100;\\n}\\n\\n.content-wrap {\\n    padding-bottom: 10em;\\n}\\n\\n.footer {\\n\\tbackground-color: $primary-color;\\n\\tcolor: white;\\n    position: relative;\\n\\n\\t.nav-link {\\n\\t\\tfont-size: 14px;\\n\\t\\tfont-family: $primary-font;\\n\\t\\tfont-weight: 400;\\n\\t\\tcolor: rgba($color: white, $alpha: 0.7) !important;\\n\\t\\tmargin: 0px;\\n\\t\\tpadding: 0px;\\n\\t\\ttext-decoration: none !important;\\n\\n        .footer-heading {\\n            color: rgba($color: white, $alpha: 1) !important;\\n            font-size: 16px;\\n            font-weight: 700;\\n            // margin-bottom: 8px;\\n        }\\n    }\\n}\\n\\n\\n\\n@media only screen and (min-width: 640px) {\\n\\t.footer-col {\\n      display: flex;\\n      align-items: center;\\n      justify-content: center;\\n      text-align: center;\\n\\n      margin-bottom: 10px;\\n    }\\n}\\n\\n@media only screen and (min-width: 1024px){\\n    .thumb{\\n        height: 50px;\\n    }\\n    .thumb img{\\n        width: 50px;\\n    }\\n}\\n\\n.icon {\\n    color: white;\\n\\tmargin: 10px;\\n    \\n}\\n\\n.padding3 {\\n\\tpadding-top: 2.5em;\\n\\tpadding-bottom: 2em;\\n}\\n\\n.pg-heading {\\n\\tcolor: white;\\n}\\n\\n.margin-bottom2 {\\n\\tmargin-bottom: 5px;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzddLnVzZVsxXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzddLnVzZVsyXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzddLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzddLnVzZVs0XSEuL3N0eWxlcy9zdHlsZXMuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUMrRjtBQUMvRiw4QkFBOEIseUZBQTJCO0FBQ3pELCtKQUErSjtBQUMvSjtBQUNBLGdEQUFnRCxzQkFBc0IsZ0JBQWdCLHVCQUF1QixxQ0FBcUMscUNBQXFDLEdBQUcsYUFBYSxrQkFBa0IsR0FBRywrQkFBK0IsNENBQTRDLDRCQUE0QixHQUFHLG1CQUFtQixxQkFBcUIsR0FBRyxlQUFlLHFCQUFxQixzQkFBc0IscUJBQXFCLEdBQUcsbUJBQW1CLCtCQUErQixHQUFHLGNBQWMsMEJBQTBCLHNCQUFzQixrQkFBa0IsMENBQTBDLG1DQUFtQywwQ0FBMEMsNEJBQTRCLDRCQUE0QixvQkFBb0IsdUJBQXVCLEdBQUcsdUJBQXVCLGlCQUFpQixnQkFBZ0IscUJBQXFCLHFCQUFxQixzQkFBc0IscUJBQXFCLDRCQUE0Qix1QkFBdUIsR0FBRyxrQkFBa0IsZ0JBQWdCLGlCQUFpQixzQkFBc0IsMEJBQTBCLHNCQUFzQixrQkFBa0Isc0JBQXNCLEdBQUcsbUJBQW1CLHFCQUFxQixxQkFBcUIsbUJBQW1CLGlCQUFpQixHQUFHLGVBQWUsMEJBQTBCLHNCQUFzQixrQkFBa0IsMkNBQTJDLDhCQUE4QiwyQ0FBMkMsd0JBQXdCLEdBQUcsa0JBQWtCLDhCQUE4Qix3QkFBd0IsR0FBRyxvQkFBb0IsbUJBQW1CLEdBQUcseUJBQXlCLGdCQUFnQixpQkFBaUIsMkJBQTJCLGtCQUFrQixzQkFBc0Isb0JBQW9CLEdBQUcsWUFBWSxxQkFBcUIsR0FBRyxZQUFZLGdCQUFnQixrQkFBa0IsMEJBQTBCLHNCQUFzQixrQkFBa0Isb0JBQW9CLEdBQUcsZ0JBQWdCLGdCQUFnQixpQkFBaUIsbUJBQW1CLHNCQUFzQiwyQkFBMkIsc0JBQXNCLGlCQUFpQix1QkFBdUIsR0FBRyx1QkFBdUIsZUFBZSxvQ0FBb0MsR0FBRyxnQkFBZ0IscUJBQXFCLGlCQUFpQixrQkFBa0IsaUJBQWlCLG9CQUFvQix1QkFBdUIsR0FBRyxlQUFlLDJCQUEyQixpQ0FBaUMsR0FBRyxrQkFBa0IsMEZBQTBGLGdFQUFnRSw0REFBNEQsR0FBRyw4QkFBOEIsd0JBQXdCLEdBQUcsZ0JBQWdCLG9CQUFvQiw0Q0FBNEMscUJBQXFCLCtDQUErQyxnQkFBZ0IsaUJBQWlCLEdBQUcsZUFBZSxrQkFBa0IsaUNBQWlDLGdDQUFnQywyQkFBMkIsZ0JBQWdCLGlCQUFpQixvQkFBb0IsOERBQThELDhEQUE4RCxHQUFHLGNBQWMsdUJBQXVCLGVBQWUsR0FBRyxZQUFZLHVCQUF1QixnQkFBZ0Isa0JBQWtCLEdBQUcsZ0JBQWdCLFdBQVcsWUFBWSxnQkFBZ0IsaUJBQWlCLGFBQWEsY0FBYyxzQkFBc0IsNEJBQTRCLEdBQUcsZ0JBQWdCLGdCQUFnQixHQUFHLHFCQUFxQix1QkFBdUIsY0FBYyxtQkFBbUIsZ0JBQWdCLGtCQUFrQixHQUFHLG1CQUFtQix5QkFBeUIsR0FBRyxhQUFhLDhCQUE4QixpQkFBaUIsdUJBQXVCLEdBQUcscUJBQXFCLG9CQUFvQiw0Q0FBNEMscUJBQXFCLCtDQUErQyxnQkFBZ0IsaUJBQWlCLHFDQUFxQyxHQUFHLHFDQUFxQyw0QkFBNEIsb0JBQW9CLHFCQUFxQixHQUFHLCtDQUErQyxpQkFBaUIsNEJBQTRCLHdCQUF3QixvQkFBb0Isa0NBQWtDLGdDQUFnQyxrQ0FBa0Msc0NBQXNDLCtCQUErQixzQ0FBc0MseUJBQXlCLDBCQUEwQixLQUFLLEdBQUcsOENBQThDLFlBQVksbUJBQW1CLEtBQUssa0JBQWtCLGtCQUFrQixLQUFLLEdBQUcsU0FBUyxpQkFBaUIsaUJBQWlCLEdBQUcsZUFBZSx1QkFBdUIsd0JBQXdCLEdBQUcsaUJBQWlCLGlCQUFpQixHQUFHLHFCQUFxQix1QkFBdUIsR0FBRyxPQUFPLDRFQUE0RSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksWUFBWSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssYUFBYSxRQUFRLEtBQUssVUFBVSxZQUFZLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sYUFBYSxZQUFZLFdBQVcsS0FBSyxNQUFNLFVBQVUsWUFBWSxZQUFZLFdBQVcsVUFBVSxVQUFVLFdBQVcsS0FBSyxNQUFNLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsbUpBQW1KLDhDQUE4Qyw4Q0FBOEMsMkJBQTJCLGlDQUFpQyx1QkFBdUIsNkRBQTZELHFDQUFxQyxTQUFTLHdCQUF3QixrQkFBa0IseUJBQXlCLCtCQUErQixHQUFHLGFBQWEsb0JBQW9CLEdBQUcsK0JBQStCLGlDQUFpQyw4QkFBOEIsR0FBRyxtQkFBbUIsdUJBQXVCLEdBQUcsZUFBZSx1QkFBdUIsd0JBQXdCLHVCQUF1QixlQUFlLHNDQUFzQyxPQUFPLEdBQUcsZUFBZSxvQkFBb0Isb0NBQW9DLHNCQUFzQixzQkFBc0IseUJBQXlCLEdBQUcsc0JBQXNCLG1CQUFtQixrQkFBa0IsdUJBQXVCLHVCQUF1Qix3QkFBd0IsdUJBQXVCLHNCQUFzQiw4QkFBOEIseUJBQXlCLEdBQUcsbUJBQW1CLGtCQUFrQixtQkFBbUIsd0JBQXdCLG9CQUFvQix3QkFBd0IsR0FBRyxrQkFBa0IsdUJBQXVCLHVCQUF1QixxQkFBcUIsb0JBQW9CLFNBQVMsWUFBWSxvQkFBb0IscUNBQXFDLDBCQUEwQixHQUFHLGVBQWUsZ0NBQWdDLDBCQUEwQixHQUFHLGlCQUFpQixxQkFBcUIsR0FBRyx3QkFBd0Isa0JBQWtCLG1CQUFtQiw2QkFBNkIsb0JBQW9CLHdCQUF3QixzQkFBc0IsR0FBRyxXQUFXLHVCQUF1Qix3QkFBd0IsR0FBRyxTQUFTLGtCQUFrQixvQkFBb0Isb0JBQW9CLHNCQUFzQix3QkFBd0IsR0FBRyxhQUFhLGtCQUFrQixtQkFBbUIscUJBQXFCLHdCQUF3Qiw2QkFBNkIsd0JBQXdCLG1CQUFtQix5QkFBeUIsR0FBRyxPQUFPLHNCQUFzQixHQUFHLHNCQUFzQixpQkFBaUIsc0NBQXNDLEdBQUcsYUFBYSx1QkFBdUIsbUJBQW1CLG9CQUFvQixtQkFBbUIsc0JBQXNCLHlCQUF5QiwwQkFBMEIsR0FBRyxlQUFlLDZCQUE2QixtQ0FBbUMsR0FBRyxrQkFBa0IsZ0NBQWdDLEdBQUcsOEJBQThCLDRDQUE0QyxHQUFHLGdCQUFnQixvQkFBb0IsK0JBQStCLHFCQUFxQix1REFBdUQsZ0JBQWdCLGlCQUFpQixHQUFHLGVBQWUsMkNBQTJDLG9CQUFvQixvQ0FBb0Msa0NBQWtDLDZCQUE2QixrQkFBa0IsbUJBQW1CLHNCQUFzQiwwREFBMEQsY0FBYyx1QkFBdUIsZUFBZSxHQUFHLFlBQVksdUJBQXVCLGdCQUFnQixrQkFBa0IsR0FBRyxnQkFBZ0IsV0FBVyxZQUFZLGdCQUFnQixpQkFBaUIsYUFBYSxjQUFjLHNCQUFzQiw0QkFBNEIsR0FBRyxnQkFBZ0Isb0JBQW9CLDJDQUEyQyx3QkFBd0IsZUFBZSxvQkFBb0IsaUJBQWlCLG9CQUFvQixHQUFHLG1CQUFtQiwyQkFBMkIsR0FBRyxhQUFhLHFDQUFxQyxpQkFBaUIseUJBQXlCLGlCQUFpQixzQkFBc0IsaUNBQWlDLHVCQUF1Qix5REFBeUQsa0JBQWtCLG1CQUFtQix1Q0FBdUMsNkJBQTZCLCtEQUErRCw4QkFBOEIsK0JBQStCLG9DQUFvQyxXQUFXLE9BQU8sR0FBRyxtREFBbUQsaUJBQWlCLHNCQUFzQiw0QkFBNEIsZ0NBQWdDLDJCQUEyQiw4QkFBOEIsT0FBTyxHQUFHLCtDQUErQyxhQUFhLHVCQUF1QixPQUFPLGlCQUFpQixzQkFBc0IsT0FBTyxHQUFHLFdBQVcsbUJBQW1CLGlCQUFpQixTQUFTLGVBQWUsdUJBQXVCLHdCQUF3QixHQUFHLGlCQUFpQixpQkFBaUIsR0FBRyxxQkFBcUIsdUJBQXVCLEdBQUcsbUJBQW1CO0FBQ3RoWDtBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9zdHlsZXMuc2Nzcz80YjVmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo0MDAsNTAwLDcwMHxTb3VyY2UrU2FucytQcm86MzAwLDQwMCw3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmFwcCB7XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAxMDBweCBhdXRvO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgNXB4ICNjY2M7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA1cHggI2NjYztcXG59XFxuXFxuLm5hdmJhciB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4ubmF2YmFyLWJyYW5kLFxcbi5uYXYtbGluayB7XFxuICBmb250LWZhbWlseTogXFxcIk1pbmlvbiBQcm9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XFxufVxcblxcbi5uYXZiYXItYnJhbmQge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLm5hdi1saW5rIHtcXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDhweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5uYXYtbGluazpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLmRldGFpbHMge1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgIC1tb3otYm94LXBhY2s6IHNwYWNlLWV2ZW5seTtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgcGFkZGluZzogMzBweCAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZGV0YWlscyAuYmlnLWltZyB7XFxuICBtYXJnaW46IDUwcHg7XFxuICBsZWZ0OiA1MDBweDtcXG4gIG1heC13aWR0aDogNjAwcHg7XFxuICBtaW4td2lkdGg6IDI5MHB4O1xcbiAgbWF4LWhlaWdodDogNTUwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyOiA2cHggc29saWQgd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5iaWctaW1nIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDU1MHB4O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5kZXRhaWxzIC5ib3gge1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG4gIG1pbi13aWR0aDogMjkwcHg7XFxuICBoZWlnaHQ6IDY2LjV2aDtcXG4gIG1hcmdpbjogMjVweDtcXG59XFxuXFxuLmJveCAucm93IHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgLW1vei1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuXFxuLmJveCAucm93IGgyIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbn1cXG5cXG4uYm94IC5yb3cgc3BhbiB7XFxuICBjb2xvcjogY3JpbXNvbjtcXG59XFxuXFxuLmJveCAuY29sb3JzIGJ1dHRvbiB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ib3ggcCB7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG4udGh1bWIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGh1bWIgaW1nIHtcXG4gIHdpZHRoOiA5MHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gIG9wYWNpdHk6IDAuNztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnRodW1iIGltZy5hY3RpdmUge1xcbiAgb3BhY2l0eTogMTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0c2VhZ3JlZW47XFxufVxcblxcbi5ib3ggLmNhcnQge1xcbiAgYmFja2dyb3VuZDogIzMzMztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4IDI1cHg7XFxufVxcblxcbi5hYm91dC1iZyB7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDcwJTtcXG59XFxuXFxuLmJnLWdyYWRpZW50IHtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBmcm9tKCNhMzAwMDApLCB0bygjZjQ0NzA4KSk7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjYTMwMDAwLCAjZjQ0NzA4KTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2EzMDAwMCwgI2Y0NDcwOCk7XFxufVxcblxcbi5iZy1ncmFkaWVudC10cmFuc3BhcmVudCB7XFxuICBiYWNrZ3JvdW5kOiAjODgxYzFjO1xcbn1cXG5cXG4uY29weXJpZ2h0IHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWluaW9uIFByb1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSAhaW1wb3J0YW50O1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxufVxcblxcbi5iZy1pbWFnZSB7XFxuICBvcGFjaXR5OiAwLjk1O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIC13ZWJraXQtZmlsdGVyOiBicmlnaHRuZXNzKDUwJSkgc2VwaWEoMzAlKSBzYXR1cmF0ZSgxNTAlKTtcXG4gICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDUwJSkgc2VwaWEoMzAlKSBzYXR1cmF0ZSgxNTAlKTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLm91dGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLm91dGVyIGltZyB7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcblxcbi5tYWluLXRleHQge1xcbiAgY29sb3I6ICNjY2M7XFxufVxcblxcbi5mb290ZXItd3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3R0b206IDA7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogLTEwMDtcXG59XFxuXFxuLmNvbnRlbnQtd3JhcCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBlbTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODgxYzFjO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uZm9vdGVyIC5uYXYtbGluayB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LWZhbWlseTogXFxcIk1pbmlvbiBQcm9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgIWltcG9ydGFudDtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogMHB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxufVxcbi5mb290ZXIgLm5hdi1saW5rIC5mb290ZXItaGVhZGluZyB7XFxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpIHtcXG4gIC5mb290ZXItY29sIHtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgIC1tb3otYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcbiAgLnRodW1iIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgfVxcblxcbiAgLnRodW1iIGltZyB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgfVxcbn1cXG4uaWNvbiB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5wYWRkaW5nMyB7XFxuICBwYWRkaW5nLXRvcDogMi41ZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMmVtO1xcbn1cXG5cXG4ucGctaGVhZGluZyB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5tYXJnaW4tYm90dG9tMiB7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFVQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtBQVJKOztBQVdBO0VBQ0ksYUFBQTtBQVJKOztBQVdBOztFQUVJLHFDQXJCVztFQXNCWCx1QkFBQTtBQVJKOztBQVdBO0VBQ0ksZ0JBQUE7QUFSSjs7QUFXQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQVJKO0FBU0k7RUFDSywwQkFBQTtBQVBUOztBQVlBO0VBQ0kscUJBQUE7RUFBQSxpQkFBQTtFQUFBLGFBQUE7RUFDQSxxQ0FBQTtLQUFBLDJCQUFBO1VBQUEsNkJBQUE7RUFDQSx1QkFBQTtVQUFBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFUSjs7QUFZQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFFQSx1QkFBQTtFQUNBLGtCQUFBO0FBVko7O0FBY0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFBQSxpQkFBQTtFQUFBLGFBQUE7RUFDQSxpQkFBQTtBQVhKOztBQWNBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBWEo7O0FBYUE7RUFDSSxxQkFBQTtFQUFBLGlCQUFBO0VBQUEsYUFBQTtFQUNBLHNDQUFBO0tBQUEsc0JBQUE7VUFBQSw4QkFBQTtFQUNBLG1CQUFBO0FBVko7O0FBWUE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0FBVEo7O0FBV0E7RUFDSSxjQUFBO0FBUko7O0FBV0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQVJKOztBQVdBO0VBQ0ksZ0JBQUE7QUFSSjs7QUFXQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFBQSxpQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0FBUko7O0FBV0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFSSjs7QUFlQTtFQUNJLFVBQUE7RUFDQSwrQkFBQTtBQVpKOztBQWNBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFYSjs7QUFlQTtFQUNJLHNCQUFBO0VBQ0EsNEJBQUE7QUFaSjs7QUFlQTtFQUNJLHFGQXpJVztFQXlJWCwyREF6SVc7RUF5SVgsdURBeklXO0FBNkhmOztBQWVBO0VBQ0ksbUJBNUl1QjtBQWdJM0I7O0FBZUE7RUFDQyxlQUFBO0VBQ0EscUNBdkpjO0VBd0pkLGdCQUFBO0VBQ0EsMENBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVpEOztBQWVBO0VBRUksYUFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlEQUFBO1VBQUEsaURBQUE7QUFiSjs7QUFnQkE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUFiRjs7QUFnQkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBYkY7O0FBZ0JBO0VBQ0UsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQWJGOztBQWdCQTtFQUNJLFdBQUE7QUFiSjs7QUFpQkE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFkSjs7QUFpQkE7RUFDSSxvQkFBQTtBQWRKOztBQWlCQTtFQUNDLHlCQWhOZ0I7RUFpTmhCLFlBQUE7RUFDRyxrQkFBQTtBQWRKO0FBZ0JDO0VBQ0MsZUFBQTtFQUNBLHFDQXhOYTtFQXlOYixnQkFBQTtFQUNBLDBDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtBQWRGO0FBZ0JRO0VBQ0ksdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFkWjs7QUFzQkE7RUFDQztJQUNLLHFCQUFBO0lBQUEsaUJBQUE7SUFBQSxhQUFBO0lBQ0EsMkJBQUE7T0FBQSxzQkFBQTtZQUFBLG1CQUFBO0lBQ0EsK0JBQUE7T0FBQSxxQkFBQTtZQUFBLHVCQUFBO0lBQ0Esa0JBQUE7SUFFQSxtQkFBQTtFQXBCSjtBQUNGO0FBdUJBO0VBQ0k7SUFDSSxZQUFBO0VBckJOOztFQXVCRTtJQUNJLFdBQUE7RUFwQk47QUFDRjtBQXVCQTtFQUNJLFlBQUE7RUFDSCxZQUFBO0FBckJEOztBQXlCQTtFQUNDLGtCQUFBO0VBQ0EsbUJBQUE7QUF0QkQ7O0FBeUJBO0VBQ0MsWUFBQTtBQXRCRDs7QUF5QkE7RUFDQyxrQkFBQTtBQXRCRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDUwMCw3MDB8U291cmNlK1NhbnMrUHJvOjMwMCw0MDAsNzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbiRwcmltYXJ5LWZvbnQ6IFxcXCJNaW5pb24gUHJvXFxcIiwgc2Fucy1zZXJpZjtcXG4kc2Vjb25kYXJ5LWZvbnQ6IFxcXCJTYW5zIFNlcmlmXFxcIiwgc2Fucy1zZXJpZjtcXG4kcHJpbWFyeS1jb2xvcjogICM4ODFjMWM7XFxuJHByaW1hcnktY29sb3ItZGFya2VyOiAjYTMwMDAwO1xcbiRiYXNlLWNvbG9yOiAjMDAwMDAwO1xcbiRyZWQtZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2EzMDAwMCwgI2Y0NDcwOCk7XFxuJHJlZC1ncmFkaWVudC10cmFuc3BhcmVudDogIzg4MWMxYztcXG5cXG4uYXBwe1xcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMTAwcHggYXV0bztcXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAjY2NjO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLm5hdmJhci1icmFuZCxcXG4ubmF2LWxpbmsge1xcbiAgICBmb250LWZhbWlseTogJHByaW1hcnktZm9udDtcXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XFxufVxcblxcbi5uYXZiYXItYnJhbmQge1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ubmF2LWxpbmsge1xcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgJjpob3ZlciB7XFxuICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIH1cXG59XFxuXFxuXFxuLmRldGFpbHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHBhZGRpbmc6IDMwcHggMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZGV0YWlscyAuYmlnLWltZ3tcXG4gICAgbWFyZ2luOiA1MHB4O1xcbiAgICBsZWZ0OiA1MDBweDtcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gICAgbWluLXdpZHRoOiAyOTBweDtcXG4gICAgbWF4LWhlaWdodDogNTUwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIC8vIG1hcmdpbjogNDBweDtcXG4gICAgYm9yZGVyOiA2cHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuXFxuLmJpZy1pbWcgaW1ne1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiA1NTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5kZXRhaWxzIC5ib3h7XFxuICAgIG1heC13aWR0aDogNTAwcHg7XFxuICAgIG1pbi13aWR0aDogMjkwcHg7XFxuICAgIGhlaWdodDogNjYuNXZoO1xcbiAgICBtYXJnaW46IDI1cHg7IC8vMjVweFxcbn1cXG4uYm94IC5yb3d7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuLmJveCAucm93IGgye1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbn1cXG4uYm94IC5yb3cgc3BhbntcXG4gICAgY29sb3I6IGNyaW1zb247XFxufVxcblxcbi5ib3ggLmNvbG9ycyBidXR0b257XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ib3ggcHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gICAgLy8gbWFyZ2luOiAxNXB4IDA7XFxufVxcbi50aHVtYntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgLy8gbWFyZ2luOiAxMHB4IDA7XFxufVxcbi50aHVtYiBpbWd7XFxuICAgIHdpZHRoOiA5MHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5wIHtcXG4gICAgLy8gY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udGh1bWIgaW1nLmFjdGl2ZXtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRzZWFncmVlbjtcXG59XFxuLmJveCAuY2FydHtcXG4gICAgYmFja2dyb3VuZDogIzMzMztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogMTBweCAyNXB4O1xcbiAgICAvLyBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG5cXG4uYWJvdXQtYmcge1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNzAlO1xcbn1cXG5cXG4uYmctZ3JhZGllbnQge1xcbiAgICBiYWNrZ3JvdW5kOiAkcmVkLWdyYWRpZW50O1xcbn1cXG5cXG4uYmctZ3JhZGllbnQtdHJhbnNwYXJlbnQge1xcbiAgICBiYWNrZ3JvdW5kOiAkcmVkLWdyYWRpZW50LXRyYW5zcGFyZW50O1xcbn1cXG5cXG4uY29weXJpZ2h0IHtcXG5cXHRmb250LXNpemU6IDE0cHg7XFxuXFx0Zm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQ7XFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXG5cXHRjb2xvcjogcmdiYSgkY29sb3I6IHdoaXRlLCAkYWxwaGE6IDAuNykgIWltcG9ydGFudDtcXG5cXHRtYXJnaW46IDBweDtcXG5cXHRwYWRkaW5nOiAwcHg7XFxufVxcblxcbi5iZy1pbWFnZSB7XFxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYig2OCwgNDYsIDQ2KTtcXG4gICAgb3BhY2l0eTogMC45NTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6ICBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoNTAlKSBzZXBpYSgzMCUpIHNhdHVyYXRlKDE1MCUpXFxufVxcblxcbi5jb250ZW50IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5vdXRlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5vdXRlciBpbWcge1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG4ubWFpbi10ZXh0IHtcXG4gICAgY29sb3I6ICNjY2NcXG59XFxuXFxuIC8vIG1pZ2h0IGJlIHVzZWxlc3NcXG4uZm9vdGVyLXdyYXBwZXIge1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gICAgYm90dG9tOjA7XFxuICAgIGRpc3BsYXk6YmxvY2s7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIHotaW5kZXg6IC0xMDA7XFxufVxcblxcbi5jb250ZW50LXdyYXAge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBlbTtcXG59XFxuXFxuLmZvb3RlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XFxuXFx0Y29sb3I6IHdoaXRlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuXFx0Lm5hdi1saW5rIHtcXG5cXHRcXHRmb250LXNpemU6IDE0cHg7XFxuXFx0XFx0Zm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQ7XFxuXFx0XFx0Zm9udC13ZWlnaHQ6IDQwMDtcXG5cXHRcXHRjb2xvcjogcmdiYSgkY29sb3I6IHdoaXRlLCAkYWxwaGE6IDAuNykgIWltcG9ydGFudDtcXG5cXHRcXHRtYXJnaW46IDBweDtcXG5cXHRcXHRwYWRkaW5nOiAwcHg7XFxuXFx0XFx0dGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxuXFxuICAgICAgICAuZm9vdGVyLWhlYWRpbmcge1xcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKCRjb2xvcjogd2hpdGUsICRhbHBoYTogMSkgIWltcG9ydGFudDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDBweCkge1xcblxcdC5mb290ZXItY29sIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpe1xcbiAgICAudGh1bWJ7XFxuICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIH1cXG4gICAgLnRodW1iIGltZ3tcXG4gICAgICAgIHdpZHRoOiA1MHB4O1xcbiAgICB9XFxufVxcblxcbi5pY29uIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcblxcdG1hcmdpbjogMTBweDtcXG4gICAgXFxufVxcblxcbi5wYWRkaW5nMyB7XFxuXFx0cGFkZGluZy10b3A6IDIuNWVtO1xcblxcdHBhZGRpbmctYm90dG9tOiAyZW07XFxufVxcblxcbi5wZy1oZWFkaW5nIHtcXG5cXHRjb2xvcjogd2hpdGU7XFxufVxcblxcbi5tYXJnaW4tYm90dG9tMiB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[4]!./styles/styles.scss\n");

/***/ })

});