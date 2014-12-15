webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\nvar home = angular.module('app.home', [__webpack_require__(6).name]);\n\nhome.controller('HomeController', __webpack_require__(15));\nhome.directive('home', __webpack_require__(16));\n\nexports['default'] = home;\nmodule.exports = exports['default'];//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2hvbWUvaW5kZXguanM/Mzc0ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQ3RDLG1CQUFPLENBQUMsQ0FBYSxDQUFDLENBQUMsSUFBSSxDQUM1QixDQUFDLENBQUM7O0FBRUgsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxtQkFBTyxDQUFDLEVBQW1CLENBQUMsQ0FBQyxDQUFDO0FBQ2hFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLG1CQUFPLENBQUMsRUFBa0IsQ0FBQyxDQUFDLENBQUM7O3FCQUVyQyxJQUFJIiwiZmlsZSI6IjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBob21lID0gYW5ndWxhci5tb2R1bGUoJ2FwcC5ob21lJywgW1xuICByZXF1aXJlKCcuLi8uLi9oZWxsbycpLm5hbWVcbl0pO1xuXG5ob21lLmNvbnRyb2xsZXIoJ0hvbWVDb250cm9sbGVyJywgcmVxdWlyZSgnLi9ob21lX2NvbnRyb2xsZXInKSk7XG5ob21lLmRpcmVjdGl2ZSgnaG9tZScsIHJlcXVpcmUoJy4vaG9tZV9kaXJlY3RpdmUnKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGhvbWU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9hcHAvaG9tZS9pbmRleC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar hello = angular.module('hello', [__webpack_require__(7).name]);\n\nhello.service('HelloService', __webpack_require__(9)).service('HelloHelloService', __webpack_require__(10)).directive('hello', __webpack_require__(11)).controller('HelloController', __webpack_require__(14));\n\nmodule.exports = hello;//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGVsbG8vaW5kZXguanM/ZTQ3YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQ3BDLG1CQUFPLENBQUMsQ0FBaUIsQ0FBQyxDQUFDLElBQUksQ0FDaEMsQ0FBQyxDQUFDOztBQUVILEtBQUssQ0FDRixPQUFPLENBQUMsY0FBYyxFQUFFLG1CQUFPLENBQUMsQ0FBaUIsQ0FBQyxDQUFDLENBQ25ELE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxtQkFBTyxDQUFDLEVBQXVCLENBQUMsQ0FBQyxDQUM5RCxTQUFTLENBQUMsT0FBTyxFQUFFLG1CQUFPLENBQUMsRUFBbUIsQ0FBQyxDQUFDLENBQ2hELFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxtQkFBTyxDQUFDLEVBQW9CLENBQUMsQ0FBQyxDQUFDOztBQUVoRSxNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUsiLCJmaWxlIjoiNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGhlbGxvID0gYW5ndWxhci5tb2R1bGUoJ2hlbGxvJywgW1xuICByZXF1aXJlKCcuLy4uL2JsYWgvaW5kZXgnKS5uYW1lXG5dKTtcblxuaGVsbG9cbiAgLnNlcnZpY2UoJ0hlbGxvU2VydmljZScsIHJlcXVpcmUoJy4vaGVsbG9fc2VydmljZScpKVxuICAuc2VydmljZSgnSGVsbG9IZWxsb1NlcnZpY2UnLCByZXF1aXJlKCcuL2hlbGxvX2hlbGxvX3NlcnZpY2UnKSlcbiAgLmRpcmVjdGl2ZSgnaGVsbG8nLCByZXF1aXJlKCcuL2hlbGxvX2RpcmVjdGl2ZScpKVxuICAuY29udHJvbGxlcignSGVsbG9Db250cm9sbGVyJywgcmVxdWlyZSgnLi9oZWxsb19jb250cm9sbGVyJykpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGhlbGxvO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvaGVsbG8vaW5kZXguanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar blah = angular.module('blahBlahBlah', []);\n\nblah.service('BlahService', __webpack_require__(8));\n\nmodule.exports = blah;//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxhaC9pbmRleC5qcz9lYjRmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUM7O0FBRWhELElBQUksQ0FDRCxPQUFPLENBQUMsYUFBYSxFQUFFLG1CQUFPLENBQUMsQ0FBZ0IsQ0FBQyxDQUFDLENBQUM7O0FBRXJELE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSIsImZpbGUiOiI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYmxhaCA9IGFuZ3VsYXIubW9kdWxlKCdibGFoQmxhaEJsYWgnLCBbXSk7XG5cbmJsYWhcbiAgLnNlcnZpY2UoJ0JsYWhTZXJ2aWNlJywgcmVxdWlyZSgnLi9ibGFoX3NlcnZpY2UnKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gYmxhaDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2JsYWgvaW5kZXguanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 8 */
/***/ function(module, exports) {

	eval("'use strict';\n\nvar $inject = [];\nvar BlahService = function BlahService() {\n  this.blah = function () {\n    return 'blah';\n  };\n};\n\nBlahService.$inject = $inject;\n\nmodule.exports = BlahService;//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxhaC9ibGFoX3NlcnZpY2UuanM/NjAzYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQztBQUNuQixJQUFNLFdBQVcsR0FBRyxTQUFkLFdBQVcsR0FBZTtBQUM5QixNQUFJLENBQUMsSUFBSSxHQUFHO1dBQU0sTUFBTTtHQUFBLENBQUM7Q0FDMUIsQ0FBQzs7QUFFRixXQUFXLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQzs7QUFFOUIsTUFBTSxDQUFDLE9BQU8sR0FBRyxXQUFXIiwiZmlsZSI6IjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCAkaW5qZWN0ID0gW107XG5jb25zdCBCbGFoU2VydmljZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5ibGFoID0gKCkgPT4gJ2JsYWgnO1xufTtcblxuQmxhaFNlcnZpY2UuJGluamVjdCA9ICRpbmplY3Q7XG5cbm1vZHVsZS5leHBvcnRzID0gQmxhaFNlcnZpY2U7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9ibGFoL2JsYWhfc2VydmljZS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 9 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\nvar $inject = ['HelloHelloService', 'BlahService'];\nvar HelloService = function HelloService(helloService, blahService) {\n  this.hello = function () {\n    return helloService.hello() + blahService.blah();\n  };\n};\n\nHelloService.$inject = $inject;\n\nexports['default'] = HelloService;\nmodule.exports = exports['default'];//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGVsbG8vaGVsbG9fc2VydmljZS5qcz8zZWM3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTSxPQUFPLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUNyRCxJQUFNLFlBQVksR0FBRyxTQUFmLFlBQVksQ0FBYSxZQUFZLEVBQUUsV0FBVyxFQUFFO0FBQ3hELE1BQUksQ0FBQyxLQUFLLEdBQUc7V0FBTSxZQUFZLENBQUMsS0FBSyxFQUFFLEdBQUcsV0FBVyxDQUFDLElBQUksRUFBRTtHQUFBLENBQUM7Q0FDOUQsQ0FBQzs7QUFFRixZQUFZLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQzs7cUJBRWhCLFlBQVkiLCJmaWxlIjoiOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0ICRpbmplY3QgPSBbJ0hlbGxvSGVsbG9TZXJ2aWNlJywgJ0JsYWhTZXJ2aWNlJ107XG5jb25zdCBIZWxsb1NlcnZpY2UgPSBmdW5jdGlvbiAoaGVsbG9TZXJ2aWNlLCBibGFoU2VydmljZSkge1xuICB0aGlzLmhlbGxvID0gKCkgPT4gaGVsbG9TZXJ2aWNlLmhlbGxvKCkgKyBibGFoU2VydmljZS5ibGFoKCk7XG59O1xuXG5IZWxsb1NlcnZpY2UuJGluamVjdCA9ICRpbmplY3Q7XG5cbmV4cG9ydCBkZWZhdWx0IEhlbGxvU2VydmljZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2hlbGxvL2hlbGxvX3NlcnZpY2UuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 10 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\nvar $inject = [];\nvar HelloHelloService = function HelloHelloService() {\n  this.hello = function () {\n    return 'hello';\n  };\n};\n\nHelloHelloService.$inject = $inject;\n\nexports['default'] = HelloHelloService;\nmodule.exports = exports['default'];//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGVsbG8vaGVsbG9faGVsbG9fc2VydmljZS5qcz9iNmI1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDO0FBQ25CLElBQU0saUJBQWlCLEdBQUcsU0FBcEIsaUJBQWlCLEdBQWU7QUFDcEMsTUFBSSxDQUFDLEtBQUssR0FBRztXQUFNLE9BQU87R0FBQSxDQUFDO0NBQzVCLENBQUM7O0FBRUYsaUJBQWlCLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQzs7cUJBRXJCLGlCQUFpQiIsImZpbGUiOiIxMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0ICRpbmplY3QgPSBbXTtcbmNvbnN0IEhlbGxvSGVsbG9TZXJ2aWNlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmhlbGxvID0gKCkgPT4gJ2hlbGxvJztcbn07XG5cbkhlbGxvSGVsbG9TZXJ2aWNlLiRpbmplY3QgPSAkaW5qZWN0O1xuXG5leHBvcnQgZGVmYXVsdCBIZWxsb0hlbGxvU2VydmljZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2hlbGxvL2hlbGxvX2hlbGxvX3NlcnZpY2UuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n__webpack_require__(12);\n\nvar $inject = ['HelloService'];\nvar Hello = function Hello(helloService) {\n  var link = function link($scope) {\n    $scope.hello = helloService.hello();\n  };\n\n  return {\n    template: __webpack_require__(13),\n    restrict: 'E',\n    link: link,\n    scope: {}\n  };\n};\n\nHello.$inject = $inject;\n\nexports['default'] = Hello;\nmodule.exports = exports['default'];//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGVsbG8vaGVsbG9fZGlyZWN0aXZlLmpzP2M1ZmMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQkFBTyxDQUFDLEVBQWMsQ0FBQyxDQUFDOztBQUV4QixJQUFNLE9BQU8sR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ2pDLElBQU0sS0FBSyxHQUFHLFNBQVIsS0FBSyxDQUFhLFlBQVksRUFBRTtBQUNwQyxNQUFNLElBQUksR0FBRyxTQUFQLElBQUksQ0FBRyxNQUFNLEVBQUk7QUFDckIsVUFBTSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7R0FDckMsQ0FBQzs7QUFFRixTQUFPO0FBQ0wsWUFBUSxFQUFFLG1CQUFPLENBQUMsRUFBYyxDQUFDO0FBQ2pDLFlBQVEsRUFBRSxHQUFHO0FBQ2IsUUFBSSxFQUFKLElBQUk7QUFDSixTQUFLLEVBQUUsRUFBRTtHQUNWLENBQUM7Q0FDSCxDQUFDOztBQUVGLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDOztxQkFFVCxLQUFLIiwiZmlsZSI6IjExLmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnLi9oZWxsby5zYXNzJyk7XG5cbmNvbnN0ICRpbmplY3QgPSBbJ0hlbGxvU2VydmljZSddO1xuY29uc3QgSGVsbG8gPSBmdW5jdGlvbiAoaGVsbG9TZXJ2aWNlKSB7XG4gIGNvbnN0IGxpbmsgPSAkc2NvcGUgPT4ge1xuICAgICRzY29wZS5oZWxsbyA9IGhlbGxvU2VydmljZS5oZWxsbygpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vaGVsbG8uaHRtbCcpLFxuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgbGluayxcbiAgICBzY29wZToge31cbiAgfTtcbn07XG5cbkhlbGxvLiRpbmplY3QgPSAkaW5qZWN0O1xuXG5leHBvcnQgZGVmYXVsdCBIZWxsbztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2hlbGxvL2hlbGxvX2RpcmVjdGl2ZS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 12 */
/***/ function(module, exports) {

	eval("// removed by extract-text-webpack-plugin//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGVsbG8vaGVsbG8uc2Fzcz9mNzRjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjEyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2hlbGxvL2hlbGxvLnNhc3NcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 13 */
/***/ function(module, exports) {

	eval("var v1=\"{{hello}}\";\nwindow.angular.module([\"ng\"]).run([\"$templateCache\",function(c){c.put(\"src/hello/hello.html\", v1)}]);\nmodule.exports=v1;//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGVsbG8vaGVsbG8uaHRtbD9hMDVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFVBQVUsT0FBTztBQUNqQixnRUFBZ0Usa0NBQWtDO0FBQ2xHIiwiZmlsZSI6IjEzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHYxPVwie3toZWxsb319XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoW1wibmdcIl0pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLGZ1bmN0aW9uKGMpe2MucHV0KFwic3JjL2hlbGxvL2hlbGxvLmh0bWxcIiwgdjEpfV0pO1xubW9kdWxlLmV4cG9ydHM9djE7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9oZWxsby9oZWxsby5odG1sXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 14 */
/***/ function(module, exports) {

	eval("'use strict';\n\nvar $inject = ['HelloService'];\nvar HelloController = function HelloController(helloService) {\n  this.test = helloService.hello();\n};\n\nHelloController.$inject = $inject;\n\nmodule.exports = HelloController;//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGVsbG8vaGVsbG9fY29udHJvbGxlci5qcz8yMmJmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTSxPQUFPLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUNqQyxJQUFNLGVBQWUsR0FBRyxTQUFsQixlQUFlLENBQWEsWUFBWSxFQUFFO0FBQzlDLE1BQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO0NBQ2xDLENBQUM7O0FBRUYsZUFBZSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7O0FBRWxDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsZUFBZSIsImZpbGUiOiIxNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0ICRpbmplY3QgPSBbJ0hlbGxvU2VydmljZSddO1xuY29uc3QgSGVsbG9Db250cm9sbGVyID0gZnVuY3Rpb24gKGhlbGxvU2VydmljZSkge1xuICB0aGlzLnRlc3QgPSBoZWxsb1NlcnZpY2UuaGVsbG8oKTtcbn07XG5cbkhlbGxvQ29udHJvbGxlci4kaW5qZWN0ID0gJGluamVjdDtcblxubW9kdWxlLmV4cG9ydHMgPSBIZWxsb0NvbnRyb2xsZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9oZWxsby9oZWxsb19jb250cm9sbGVyLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 15 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\nvar $inject = ['HelloService'];\nvar HomeController = function HomeController(helloService) {\n  this.name = 'Home: ' + helloService.hello();\n};\n\nHomeController.$inject = $inject;\n\nexports['default'] = HomeController;\nmodule.exports = exports['default'];//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2hvbWUvaG9tZV9jb250cm9sbGVyLmpzP2E2MjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNLE9BQU8sR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ2pDLElBQU0sY0FBYyxHQUFHLFNBQWpCLGNBQWMsQ0FBYSxZQUFZLEVBQUU7QUFDN0MsTUFBSSxDQUFDLElBQUksY0FBWSxZQUFZLENBQUMsS0FBSyxFQUFJLENBQUM7Q0FDN0MsQ0FBQzs7QUFFRixjQUFjLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQzs7cUJBRWxCLGNBQWMiLCJmaWxlIjoiMTUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCAkaW5qZWN0ID0gWydIZWxsb1NlcnZpY2UnXTtcbmNvbnN0IEhvbWVDb250cm9sbGVyID0gZnVuY3Rpb24gKGhlbGxvU2VydmljZSkge1xuICB0aGlzLm5hbWUgPSBgSG9tZTogJHtoZWxsb1NlcnZpY2UuaGVsbG8oKX1gO1xufTtcblxuSG9tZUNvbnRyb2xsZXIuJGluamVjdCA9ICRpbmplY3Q7XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVDb250cm9sbGVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL2hvbWUvaG9tZV9jb250cm9sbGVyLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\nvar $inject = [];\nvar home = function home() {\n  __webpack_require__(17);\n\n  return {\n    controller: 'HomeController',\n    controllerAs: 'controller',\n    template: __webpack_require__(18)\n  };\n};\n\nhome.$inject = $inject;\n\nexports['default'] = home;\nmodule.exports = exports['default'];//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2hvbWUvaG9tZV9kaXJlY3RpdmUuanM/YTFmNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQztBQUNuQixJQUFNLElBQUksR0FBRyxTQUFQLElBQUksR0FBZTtBQUN2QixxQkFBTyxDQUFDLEVBQVksQ0FBQyxDQUFDOztBQUV0QixTQUFPO0FBQ0wsY0FBVSxFQUFFLGdCQUFnQjtBQUM1QixnQkFBWSxFQUFFLFlBQVk7QUFDMUIsWUFBUSxFQUFFLG1CQUFPLENBQUMsRUFBYSxDQUFDO0dBQ2pDLENBQUM7Q0FDSCxDQUFDOztBQUVGLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDOztxQkFFUixJQUFJIiwiZmlsZSI6IjE2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgJGluamVjdCA9IFtdO1xuY29uc3QgaG9tZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmVxdWlyZSgnLi9ob21lLmNzcycpO1xuXG4gIHJldHVybiB7XG4gICAgY29udHJvbGxlcjogJ0hvbWVDb250cm9sbGVyJyxcbiAgICBjb250cm9sbGVyQXM6ICdjb250cm9sbGVyJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9ob21lLmh0bWwnKVxuICB9O1xufTtcblxuaG9tZS4kaW5qZWN0ID0gJGluamVjdDtcblxuZXhwb3J0IGRlZmF1bHQgaG9tZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9ob21lL2hvbWVfZGlyZWN0aXZlLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 17 */
/***/ function(module, exports) {

	eval("// removed by extract-text-webpack-plugin//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2hvbWUvaG9tZS5jc3M/MTNjOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIxNy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hcHAvaG9tZS9ob21lLmNzc1xuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 18 */
/***/ function(module, exports) {

	eval("var v1=\"<div>{{controller.name}}</div> <div> HelloDirective: <hello></hello> </div> <div ng-controller=\\\"HelloController as hello\\\"> HelloController as hello: {{hello.test}} </div> Base64-embedded image (&lt;32kb) <div class=\\\"trollface\\\"></div> External image (&gt;32kb) <div class=\\\"true-story\\\"></div>\";\nwindow.angular.module([\"ng\"]).run([\"$templateCache\",function(c){c.put(\"app/home/home.html\", v1)}]);\nmodule.exports=v1;//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2hvbWUvaG9tZS5odG1sPzA5NzEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZSxpQkFBaUIsaUlBQWlJLFlBQVksbUNBQW1DLDBEQUEwRDtBQUMxUSxnRUFBZ0UsZ0NBQWdDO0FBQ2hHIiwiZmlsZSI6IjE4LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHYxPVwiPGRpdj57e2NvbnRyb2xsZXIubmFtZX19PC9kaXY+IDxkaXY+IEhlbGxvRGlyZWN0aXZlOiA8aGVsbG8+PC9oZWxsbz4gPC9kaXY+IDxkaXYgbmctY29udHJvbGxlcj1cXFwiSGVsbG9Db250cm9sbGVyIGFzIGhlbGxvXFxcIj4gSGVsbG9Db250cm9sbGVyIGFzIGhlbGxvOiB7e2hlbGxvLnRlc3R9fSA8L2Rpdj4gQmFzZTY0LWVtYmVkZGVkIGltYWdlICgmbHQ7MzJrYikgPGRpdiBjbGFzcz1cXFwidHJvbGxmYWNlXFxcIj48L2Rpdj4gRXh0ZXJuYWwgaW1hZ2UgKCZndDszMmtiKSA8ZGl2IGNsYXNzPVxcXCJ0cnVlLXN0b3J5XFxcIj48L2Rpdj5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZShbXCJuZ1wiXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsZnVuY3Rpb24oYyl7Yy5wdXQoXCJhcHAvaG9tZS9ob21lLmh0bWxcIiwgdjEpfV0pO1xubW9kdWxlLmV4cG9ydHM9djE7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hcHAvaG9tZS9ob21lLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
]);