webpackHotUpdate_N_E("pages/index",{

/***/ "./services/fetchMovies.js":
/*!*********************************!*\
  !*** ./services/fetchMovies.js ***!
  \*********************************/
/*! exports provided: fetchMoviesJSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchMoviesJSON", function() { return fetchMoviesJSON; });
/* harmony import */ var C_Users_Administrator_Visual_Studio_Code_projects_movie_grid_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Administrator_Visual_Studio_Code_projects_movie_grid_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Administrator_Visual_Studio_Code_projects_movie_grid_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Administrator_Visual_Studio_Code_projects_movie_grid_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");



var fetchMoviesJSON = /*#__PURE__*/function () {
  var _ref = Object(C_Users_Administrator_Visual_Studio_Code_projects_movie_grid_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_Administrator_Visual_Studio_Code_projects_movie_grid_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(searchQuery) {
    var response, movies;
    return C_Users_Administrator_Visual_Studio_Code_projects_movie_grid_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(window.location.href.toString());

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            movies = _context.sent;

            if (!(searchQuery == undefined || searchQuery == "")) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return", movies);

          case 10:
            return _context.abrupt("return", movies.filter(function (movie) {
              return movie.title.toLowerCase().includes(searchQuery.toLowerCase());
            }));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchMoviesJSON(_x) {
    return _ref.apply(this, arguments);
  };
}();



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvZmV0Y2hNb3ZpZXMuanMiXSwibmFtZXMiOlsiZmV0Y2hNb3ZpZXNKU09OIiwic2VhcmNoUXVlcnkiLCJmZXRjaCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInRvU3RyaW5nIiwicmVzcG9uc2UiLCJqc29uIiwibW92aWVzIiwidW5kZWZpbmVkIiwiZmlsdGVyIiwibW92aWUiLCJ0aXRsZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLGVBQWU7QUFBQSw4VkFBRyxpQkFBT0MsV0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVHQyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsQ0FBcUJDLFFBQXJCLEVBQUQsQ0FGUjs7QUFBQTtBQUVkQyxvQkFGYztBQUFBO0FBQUEsbUJBR0NBLFFBQVEsQ0FBQ0MsSUFBVCxFQUhEOztBQUFBO0FBR2RDLGtCQUhjOztBQUFBLGtCQUloQlIsV0FBVyxJQUFJUyxTQUFmLElBQTRCVCxXQUFXLElBQUksRUFKM0I7QUFBQTtBQUFBO0FBQUE7O0FBQUEsNkNBS1RRLE1BTFM7O0FBQUE7QUFBQSw2Q0FRVEEsTUFBTSxDQUFDRSxNQUFQLENBQWMsVUFBQUMsS0FBSztBQUFBLHFCQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixHQUEwQkMsUUFBMUIsQ0FBbUNkLFdBQVcsQ0FBQ2EsV0FBWixFQUFuQyxDQUFKO0FBQUEsYUFBbkIsQ0FSUzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFmZCxlQUFlO0FBQUE7QUFBQTtBQUFBLEdBQXJCOztBQVlBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJjYTdmYzBjYjI4YzI5ZDQwZWYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmZXRjaE1vdmllc0pTT04gPSBhc3luYyAoc2VhcmNoUXVlcnkpID0+IHtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnRvU3RyaW5nKCkpO1xyXG4gICAgY29uc3QgbW92aWVzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgaWYgKHNlYXJjaFF1ZXJ5ID09IHVuZGVmaW5lZCB8fCBzZWFyY2hRdWVyeSA9PSBcIlwiKSB7Ly8udGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgcmV0dXJuIG1vdmllcztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBtb3ZpZXMuZmlsdGVyKG1vdmllID0+IG1vdmllLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSkpOy8vLnRhcmdldC52YWx1ZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBmZXRjaE1vdmllc0pTT04gfTsiXSwic291cmNlUm9vdCI6IiJ9