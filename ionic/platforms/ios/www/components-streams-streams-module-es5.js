function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-streams-streams-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/streams/streams.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/streams/streams.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsStreamsStreamsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-toolbar></app-toolbar>\n\n<div class=\"container\" style=\"margin-top: 30px\">\n    <div class=\"row\">\n        <div class=\"col s12 m4 l3\">\n            <app-side></app-side>\n        </div>\n\n        <div class=\"col s12 m8 l9\">\n            <div class=\"row\">\n                <div class=\"col s12 m12 l10\">\n                    <ul class=\"tabs\">\n                        <li class=\"tab col s6\" (click)=\"ChangeTabs('streams')\">\n                            <a class=\"active\" href=\"#streams\">Streams</a>\n                        </li>\n                        <li class=\"tab col s6\" (click)=\"ChangeTabs('top')\">\n                            <a href=\"#top\">Top Streams</a>\n                        </li>\n                    </ul>\n                </div>\n                <div id=\"streams\" class=\"col s12\" *ngIf=\"streamsTab\">\n                    <app-post-form></app-post-form>\n                    <app-posts></app-posts>\n                </div>\n                <div id=\"top\" class=\"col s12\" *ngIf=\"topStreamsTab\">\n                    <app-top-streams></app-top-streams>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/components/streams/streams-routing.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/streams/streams-routing.module.ts ***!
    \**************************************************************/

  /*! exports provided: StreamsRoutingModule */

  /***/
  function srcAppComponentsStreamsStreamsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StreamsRoutingModule", function () {
      return StreamsRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _streams_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./streams.component */
    "./src/app/components/streams/streams.component.ts");

    var routes = [{
      path: '',
      component: _streams_component__WEBPACK_IMPORTED_MODULE_3__["StreamsComponent"]
    }, {
      path: '**',
      redirectTo: 'streams',
      pathMatch: 'full'
    }];

    var StreamsRoutingModule = function StreamsRoutingModule() {
      _classCallCheck(this, StreamsRoutingModule);
    };

    StreamsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], StreamsRoutingModule);
    /***/
  },

  /***/
  "./src/app/components/streams/streams.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/components/streams/streams.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsStreamsStreamsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".tabs a {\n  color: #64b5f6;\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.tabs .active {\n  background: inherit !important;\n}\n\ncontainer {\n  overflow-y: scroll;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdHJlYW1zL3N0cmVhbXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RyZWFtcy9zdHJlYW1zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFicyBhIHtcbiAgY29sb3I6ICM2NGI1ZjY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi50YWJzIC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG59XG5cbmNvbnRhaW5lciB7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/streams/streams.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/streams/streams.component.ts ***!
    \*********************************************************/

  /*! exports provided: StreamsComponent */

  /***/
  function srcAppComponentsStreamsStreamsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StreamsComponent", function () {
      return StreamsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/token.service */
    "./src/app/services/token.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var materialize_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! materialize-css */
    "./node_modules/materialize-css/dist/js/materialize.js");
    /* harmony import */


    var materialize_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_4__);

    var StreamsComponent = /*#__PURE__*/function () {
      function StreamsComponent(tokenService, router) {
        _classCallCheck(this, StreamsComponent);

        this.tokenService = tokenService;
        this.router = router;
        this.streamsTab = false;
        this.topStreamsTab = false;
      }

      _createClass(StreamsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.streamsTab = true;
          this.token = this.tokenService.GetPayload();
          var tabs = document.querySelector('.tabs');
          materialize_css__WEBPACK_IMPORTED_MODULE_4__["Tabs"].init(tabs, {});
        }
      }, {
        key: "ChangeTabs",
        value: function ChangeTabs(value) {
          if (value === 'streams') {
            this.streamsTab = true;
            this.topStreamsTab = false;
          }

          if (value === 'top') {
            this.streamsTab = false;
            this.topStreamsTab = true;
          }
        }
      }]);

      return StreamsComponent;
    }();

    StreamsComponent.ctorParameters = function () {
      return [{
        type: _services_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    StreamsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-streams',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./streams.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/streams/streams.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./streams.component.css */
      "./src/app/components/streams/streams.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], StreamsComponent);
    /***/
  },

  /***/
  "./src/app/components/streams/streams.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/components/streams/streams.module.ts ***!
    \******************************************************/

  /*! exports provided: StreamsModule */

  /***/
  function srcAppComponentsStreamsStreamsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StreamsModule", function () {
      return StreamsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _streams_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./streams.component */
    "./src/app/components/streams/streams.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _streams_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./streams-routing.module */
    "./src/app/components/streams/streams-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var StreamsModule = function StreamsModule() {
      _classCallCheck(this, StreamsModule);
    };

    StreamsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_streams_component__WEBPACK_IMPORTED_MODULE_1__["StreamsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _streams_routing_module__WEBPACK_IMPORTED_MODULE_4__["StreamsRoutingModule"]]
    })], StreamsModule);
    /***/
  }
}]);
//# sourceMappingURL=components-streams-streams-module-es5.js.map