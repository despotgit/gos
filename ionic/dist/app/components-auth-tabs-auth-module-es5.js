function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-auth-tabs-auth-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth-tabs/auth-tabs.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth-tabs/auth-tabs.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAuthTabsAuthTabsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"bodyDiv card-panel blue\">\n  <div class=\"container bodyContainer\">\n    <div class=\"row\">\n      <div class=\"col s12\">\n        <div class=\"card\">\n          <div class=\"card-tabs\">\n            <ul class=\"tabs tabs-fixed-width\">\n              <li class=\"tab\">\n                <a href=\"#login\" class=\"active\">Chat App Login</a>\n              </li>\n              <li class=\"tab\">\n                <a href=\"#signup\">Chat App Sign Up</a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"card-content\">\n            <p style=\"text-align: center; font-size: 20px\">\n              Welcome to Chat App\n            </p>\n          </div>\n          <div class=\"card-content auth-content\">\n            <div id=\"login\">\n              <app-login></app-login>\n            </div>\n            <div id=\"signup\">\n              <app-signup></app-signup>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col s10 offset-s1\" id=\"panel\">\n            <div class=\"progress\" *ngIf=\"showSpinner\">\n                <div class=\"indeterminate\"></div>\n            </div>\n            <h3 id=\"title\">Login</h3>\n            <div id=\"errorMsg\" *ngIf=\"errorMessage\">\n                <span>{{errorMessage}}</span>\n            </div>\n            <form class=\"col s12\" [formGroup]=\"loginForm\" novalidate (ngSubmit)=\"loginUser()\">\n                <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                        <input id=\"user-name\" type=\"text\" formControlName=\"username\" autocomplete=\"off\">\n                        <label for=\"user-name\">Username</label>\n                        <span class=\"error\" *ngIf=\"!loginForm.controls['username'].valid && loginForm.controls['username'].touched\">\n                            Username is required\n                        </span>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                        <input id=\"password\" type=\"password\" formControlName=\"password\">\n                        <label for=\"password\">Password</label>\n                        <span class=\"error\" *ngIf=\"!loginForm.controls['password'].valid && loginForm.controls['password'].touched\">\n                            Password is required\n                        </span>\n                    </div>\n                </div>\n                <button class=\"btn waves-effect\" id=\"loginbtn\" [disabled]=\"!loginForm.valid\">\n                    Login\n                </button>\n            </form>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/signup/signup.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/signup/signup.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSignupSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col s10 offset-s1\" id=\"panel\">\n            <div class=\"progress\" *ngIf=\"showSpinner\">\n                <div class=\"indeterminate\"></div>\n            </div>\n            <h3 id=\"title\">Sign Up</h3>\n            <div id=\"errorMsg\" *ngIf=\"errorMessage\">\n                <span>{{errorMessage}}</span>\n            </div>\n            <form class=\"col s12\" [formGroup]=\"signupForm\" novalidate (ngSubmit)=\"signupUser()\">\n                <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                        <input id=\"user_name\" type=\"text\" formControlName=\"username\" autocomplete=\"off\">\n                        <label for=\"user_name\">Username</label>\n                        <span class=\"error\" *ngIf=\"!signupForm.controls['username'].valid && signupForm.controls['username'].touched\">\n                            Username is required\n                        </span>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                        <input id=\"email\" type=\"email\" formControlName=\"email\" autocomplete=\"off\">\n                        <label for=\"email\">Email</label>\n                        <span class=\"error\" *ngIf=\"!signupForm.controls['email'].valid && signupForm.controls['email'].touched\">\n                            Email is required\n                        </span>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                        <input id=\"pass-word\" type=\"password\" formControlName=\"password\">\n                        <label for=\"pass-word\">Password</label>\n                        <span class=\"error\" *ngIf=\"!signupForm.controls['password'].valid && signupForm.controls['password'].touched\">\n                            Password is required\n                        </span>\n                    </div>\n                </div>\n                <button class=\"btn waves-effect\" id=\"signupbtn\" [disabled]=\"!signupForm.valid\">\n                    Sign Up\n                </button>\n            </form>\n\n            <!-- <div id=\"modal1\" class=\"modal\">\n                <div class=\"modal-content\">\n                    <h4>Sign Up Error</h4>\n                    <p>A bunch of text</p>\n                </div>\n                <div class=\"modal-footer\">\n                    <a href=\"#!\" class=\"modal-close waves-effect waves-green btn-flat\">Agree</a>\n                </div>\n            </div> -->\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/components/auth-tabs/auth-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/auth-tabs/auth-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: AuthRoutingModule */

  /***/
  function srcAppComponentsAuthTabsAuthRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function () {
      return AuthRoutingModule;
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


    var _auth_tabs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth-tabs.component */
    "./src/app/components/auth-tabs/auth-tabs.component.ts");

    var routes = [{
      path: '',
      component: _auth_tabs_component__WEBPACK_IMPORTED_MODULE_3__["AuthTabsComponent"]
    }];

    var AuthRoutingModule = function AuthRoutingModule() {
      _classCallCheck(this, AuthRoutingModule);
    };

    AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AuthRoutingModule);
    /***/
  },

  /***/
  "./src/app/components/auth-tabs/auth-tabs.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/components/auth-tabs/auth-tabs.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAuthTabsAuthTabsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bodyDiv {\n  height: 100vh;\n}\n\ndiv.bodyContainer {\n  margin-top: 50px !important;\n}\n\n.tabs a {\n  color: #64b5f6;\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.tabs .active {\n  background: inherit !important;\n}\n\n.auth-content {\n  height: 515px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdXRoLXRhYnMvYXV0aC10YWJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2F1dGgtdGFicy9hdXRoLXRhYnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5RGl2IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuZGl2LmJvZHlDb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA1MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi50YWJzIGEge1xuICBjb2xvcjogIzY0YjVmNjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnRhYnMgLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQgIWltcG9ydGFudDtcbn1cblxuLmF1dGgtY29udGVudCB7XG4gIGhlaWdodDogNTE1cHggIWltcG9ydGFudDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/auth-tabs/auth-tabs.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/auth-tabs/auth-tabs.component.ts ***!
    \*************************************************************/

  /*! exports provided: AuthTabsComponent */

  /***/
  function srcAppComponentsAuthTabsAuthTabsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthTabsComponent", function () {
      return AuthTabsComponent;
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


    var materialize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! materialize-css */
    "./node_modules/materialize-css/dist/js/materialize.js");
    /* harmony import */


    var materialize_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_2__);

    var AuthTabsComponent = /*#__PURE__*/function () {
      function AuthTabsComponent() {
        _classCallCheck(this, AuthTabsComponent);
      }

      _createClass(AuthTabsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var tabs = document.querySelector('.tabs');
          materialize_css__WEBPACK_IMPORTED_MODULE_2__["Tabs"].init(tabs, {});
        }
      }]);

      return AuthTabsComponent;
    }();

    AuthTabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-auth-tabs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./auth-tabs.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth-tabs/auth-tabs.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./auth-tabs.component.css */
      "./src/app/components/auth-tabs/auth-tabs.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], AuthTabsComponent);
    /***/
  },

  /***/
  "./src/app/components/auth-tabs/auth.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/auth-tabs/auth.module.ts ***!
    \*****************************************************/

  /*! exports provided: AuthModule */

  /***/
  function srcAppComponentsAuthTabsAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
      return AuthModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth-routing.module */
    "./src/app/components/auth-tabs/auth-routing.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _auth_tabs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auth-tabs.component */
    "./src/app/components/auth-tabs/auth-tabs.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../signup/signup.component */
    "./src/app/components/signup/signup.component.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");

    var AuthModule = function AuthModule() {
      _classCallCheck(this, AuthModule);
    };

    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]],
      declarations: [_auth_tabs_component__WEBPACK_IMPORTED_MODULE_6__["AuthTabsComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"]],
      providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]]
    })], AuthModule);
    /***/
  },

  /***/
  "./src/app/components/login/login.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/login/login.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#panel {\n  background-color: #ffffff;\n}\n\n#panel {\n  padding: 0px;\n}\n\n#loginbtn {\n  float: right;\n  margin-right: 10px;\n  background-color: #64b5f6;\n  font-weight: 500;\n}\n\n#title {\n  background-color: #64b5f6;\n  color: white;\n  padding: 8px;\n  margin-top: 0px;\n  font-weight: 700;\n  text-align: center;\n}\n\nform {\n  padding: 0px;\n  border-radius: 3px;\n  box-sizing: border-box;\n  margin: 0px 20px 0px 20px;\n}\n\n.error {\n  color: red;\n}\n\n.indeterminate {\n  background-color: #64b5f6 !important;\n}\n\n.input-field {\n  margin-bottom: 0px !important;\n  padding-bottom: 0px !important;\n}\n\n#errorMsg {\n  background: #f6b2b5;\n  width: 100%;\n  height: 50px;\n  text-align: center;\n}\n\n#errorMsg span {\n  top: 50%;\n  transform: translate(-50%, -50%);\n  left: 50%;\n  position: relative;\n  float: left;\n  font-size: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUNBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsUUFBUTtFQUNSLGdDQUFnQztFQUNoQyxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3BhbmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuI3BhbmVsIHtcbiAgcGFkZGluZzogMHB4O1xufVxuI2xvZ2luYnRuIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NGI1ZjY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4jdGl0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjRiNWY2O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5mb3JtIHtcbiAgcGFkZGluZzogMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMHB4IDIwcHggMHB4IDIwcHg7XG59XG5cbi5lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5pbmRldGVybWluYXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0YjVmNiAhaW1wb3J0YW50O1xufVxuXG4uaW5wdXQtZmllbGQge1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuXG4jZXJyb3JNc2cge1xuICBiYWNrZ3JvdW5kOiAjZjZiMmI1O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNlcnJvck1zZyBzcGFuIHtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBsZWZ0OiA1MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
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


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(fb, authService, router, tokenService) {
        _classCallCheck(this, LoginComponent);

        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.tokenService = tokenService;
        this.showSpinner = false;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.init();
        }
      }, {
        key: "init",
        value: function init() {
          this.loginForm = this.fb.group({
            username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
        }
      }, {
        key: "loginUser",
        value: function loginUser() {
          var _this = this;

          this.showSpinner = true;
          this.authService.loginUser(this.loginForm.value).subscribe(function (data) {
            _this.tokenService.SetToken(data.token);

            _this.loginForm.reset();

            setTimeout(function () {
              _this.router.navigate(["streams"]);
            }, 3000);
          }, function (err) {
            _this.showSpinner = false;

            if (err.error.message) {
              _this.errorMessage = err.error.message;
            }
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _services_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: "app-login",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/components/login/login.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"]])], LoginComponent);
    /***/
  },

  /***/
  "./src/app/components/signup/signup.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/signup/signup.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSignupSignupComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#panel {\n  background-color: #ffffff;\n}\n#signupbtn {\n  float: right;\n  margin-right: 10px;\n  background-color: #64b5f6;\n  font-weight: 500;\n}\n#title {\n  background-color: #64b5f6;\n  color: white;\n  padding: 8px;\n  margin-top: 0px;\n  font-weight: 700;\n  text-align: center;\n}\nform {\n  padding: 0px;\n  border-radius: 3px;\n  box-sizing: border-box;\n  margin: 0px 20px 0px 20px;\n}\n.error {\n  color: red;\n}\n.indeterminate {\n  background-color: #64b5f6 !important;\n}\n.input-field {\n  margin-bottom: 0px !important;\n  padding-bottom: 0px !important;\n}\n#errorMsg {\n  background: #f6b2b5;\n  width: 100%;\n  height: 50px;\n  text-align: center;\n}\n#errorMsg span {\n  top: 50%;\n  transform: translate(-50%, -50%);\n  left: 50%;\n  position: relative;\n  float: left;\n  font-size: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7QUFFQTtFQUNFLDZCQUE2QjtFQUM3Qiw4QkFBOEI7QUFDaEM7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsUUFBUTtFQUNSLGdDQUFnQztFQUNoQyxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcGFuZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuI3NpZ251cGJ0biB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjRiNWY2O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuI3RpdGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0YjVmNjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA4cHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuZm9ybSB7XG4gIHBhZGRpbmc6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDBweCAyMHB4IDBweCAyMHB4O1xufVxuXG4uZXJyb3Ige1xuICBjb2xvcjogcmVkO1xufVxuXG4uaW5kZXRlcm1pbmF0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NGI1ZjYgIWltcG9ydGFudDtcbn1cblxuLmlucHV0LWZpZWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuI2Vycm9yTXNnIHtcbiAgYmFja2dyb3VuZDogI2Y2YjJiNTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jZXJyb3JNc2cgc3BhbiB7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgbGVmdDogNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDE1cHg7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/signup/signup.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/signup/signup.component.ts ***!
    \*******************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppComponentsSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
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


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var SignupComponent = /*#__PURE__*/function () {
      function SignupComponent(authService, fb, router, tokenService) {
        _classCallCheck(this, SignupComponent);

        this.authService = authService;
        this.fb = fb;
        this.router = router;
        this.tokenService = tokenService;
        this.showSpinner = false;
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.init();
        }
      }, {
        key: "init",
        value: function init() {
          this.signupForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
        }
      }, {
        key: "signupUser",
        value: function signupUser() {
          var _this2 = this;

          this.showSpinner = true;
          this.authService.registerUser(this.signupForm.value).subscribe(function (data) {
            _this2.tokenService.SetToken(data.token);

            _this2.signupForm.reset();

            setTimeout(function () {
              _this2.router.navigate(['streams']);
            }, 3000);
          }, function (err) {
            _this2.showSpinner = false;

            if (err.error.msg) {
              _this2.errorMessage = err.error.msg[0].message;
            }

            if (err.error.message) {
              _this2.errorMessage = err.error.message;
            }
          });
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _services_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"]
      }];
    };

    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/signup/signup.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.component.css */
      "./src/app/components/signup/signup.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"]])], SignupComponent);
    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _shared_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/constants */
    "./src/app/shared/constants.ts");

    var BASEURL = _shared_constants__WEBPACK_IMPORTED_MODULE_3__["serverUrl"] + "/api/chatapp";

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
      }

      _createClass(AuthService, [{
        key: "registerUser",
        value: function registerUser(body) {
          return this.http.post("".concat(BASEURL, "/register"), body);
        }
      }, {
        key: "loginUser",
        value: function loginUser(body) {
          return this.http.post("".concat(BASEURL, "/login"), body);
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], AuthService);
    /***/
  }
}]);
//# sourceMappingURL=components-auth-tabs-auth-module-es5.js.map