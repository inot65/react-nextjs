"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/new-meetup";
exports.ids = ["pages/api/new-meetup"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\n// ruta API : /api/new-meetup\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const data = req.body;\n        // stocam datele intr-o baza de date\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://toni:2PeY0uYDGXs64WPe@cluster0.sulps.mongodb.net/meetups?retryWrites=true&w=majority\");\n        const db = client.db();\n        // obtin acces la colectia de \"meetups\"\n        const meetupCollection = db.collection(\"meetups\");\n        // adaug un meetup in colectie\n        const result = await meetupCollection.insertOne(data);\n        console.log(\"Rezultatul adaugarii este continut in result:\", result);\n        // inchid conexiunea\n        client.close();\n        // trimit inapoi un raspuns cu \"res\"\n        res.status(201).json({\n            message: \"Meetup inserted!\"\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBb0M7QUFFcEMsNkJBQTZCO0FBRTdCLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDL0IsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3pCLE1BQU1DLElBQUksR0FBR0gsR0FBRyxDQUFDSSxJQUFJO1FBRXJCLG9DQUFvQztRQUNwQyxNQUFNQyxNQUFNLEdBQUcsTUFBTVAsd0RBQW1CLENBQ3RDLG9HQUFvRyxDQUNyRztRQUVELE1BQU1TLEVBQUUsR0FBR0YsTUFBTSxDQUFDRSxFQUFFLEVBQUU7UUFFdEIsdUNBQXVDO1FBQ3ZDLE1BQU1DLGdCQUFnQixHQUFHRCxFQUFFLENBQUNFLFVBQVUsQ0FBQyxTQUFTLENBQUM7UUFFakQsOEJBQThCO1FBRTlCLE1BQU1DLE1BQU0sR0FBRyxNQUFNRixnQkFBZ0IsQ0FBQ0csU0FBUyxDQUFDUixJQUFJLENBQUM7UUFFckRTLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLCtDQUErQyxFQUFFSCxNQUFNLENBQUMsQ0FBQztRQUVyRSxvQkFBb0I7UUFDcEJMLE1BQU0sQ0FBQ1MsS0FBSyxFQUFFLENBQUM7UUFFZixvQ0FBb0M7UUFDcENiLEdBQUcsQ0FBQ2MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBQ0MsT0FBTyxFQUFFLGtCQUFrQjtTQUFDLENBQUMsQ0FBQztLQUNyRDtDQUNGO0FBRUQsaUVBQWVsQixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vcGFnZXMvYXBpL25ldy1tZWV0dXAuanM/NzM5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01vbmdvQ2xpZW50fSBmcm9tIFwibW9uZ29kYlwiO1xyXG5cclxuLy8gcnV0YSBBUEkgOiAvYXBpL25ldy1tZWV0dXBcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcclxuICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcclxuXHJcbiAgICAvLyBzdG9jYW0gZGF0ZWxlIGludHItbyBiYXphIGRlIGRhdGVcclxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXHJcbiAgICAgIFwibW9uZ29kYitzcnY6Ly90b25pOjJQZVkwdVlER1hzNjRXUGVAY2x1c3RlcjAuc3VscHMubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG5cclxuICAgIC8vIG9idGluIGFjY2VzIGxhIGNvbGVjdGlhIGRlIFwibWVldHVwc1wiXHJcbiAgICBjb25zdCBtZWV0dXBDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihcIm1lZXR1cHNcIik7XHJcblxyXG4gICAgLy8gYWRhdWcgdW4gbWVldHVwIGluIGNvbGVjdGllXHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWVldHVwQ29sbGVjdGlvbi5pbnNlcnRPbmUoZGF0YSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJSZXp1bHRhdHVsIGFkYXVnYXJpaSBlc3RlIGNvbnRpbnV0IGluIHJlc3VsdDpcIiwgcmVzdWx0KTtcclxuXHJcbiAgICAvLyBpbmNoaWQgY29uZXhpdW5lYVxyXG4gICAgY2xpZW50LmNsb3NlKCk7XHJcblxyXG4gICAgLy8gdHJpbWl0IGluYXBvaSB1biByYXNwdW5zIGN1IFwicmVzXCJcclxuICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHttZXNzYWdlOiBcIk1lZXR1cCBpbnNlcnRlZCFcIn0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcclxuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImRhdGEiLCJib2R5IiwiY2xpZW50IiwiY29ubmVjdCIsImRiIiwibWVldHVwQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJyZXN1bHQiLCJpbnNlcnRPbmUiLCJjb25zb2xlIiwibG9nIiwiY2xvc2UiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meetup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-meetup.js"));
module.exports = __webpack_exports__;

})();