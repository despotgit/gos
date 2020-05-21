function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-change-password-change-password-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/change-password/change-password.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/change-password/change-password.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsChangePasswordChangePasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-toolbar></app-toolbar>\n\n<div class=\"container\" style=\"margin-top: 30px\">\n  <div class=\"row\">\n    <div class=\"col s12 m4 l3\">\n      <app-side></app-side>\n    </div>\n\n    <div class=\"col s12 m8 l9\">\n      <div class=\"row\">\n        <h2 class=\"text\">Change Password</h2>\n        <div class=\"col s12 password-column\">\n          <div class=\"row\">\n            <form class=\"col s12\" [formGroup]=\"passwordForm\" (ngSubmit)=\"ChangePassword()\">\n              <div class=\"row\">\n                <div class=\"input-field col s6\" style=\"margin-left: 10px;\">\n                  <input id=\"cpassword\" type=\"password\" formControlName=\"cpassword\">\n                  <label for=\"cpassword\">Current Password</label>\n                  <p class=\"error\" *ngIf=\"!passwordForm.controls['cpassword'].valid && passwordForm.controls['cpassword'].touched\">\n                    Current Password is required\n                  </p>\n                </div>\n\n                <div class=\"input-field col s6\" style=\"margin-left: 10px;\">\n                  <input id=\"new-password\" type=\"password\" formControlName=\"newPassword\">\n                  <label for=\"new-password\">New Password</label>\n                  <p class=\"error\" *ngIf=\"!passwordForm.controls['newPassword'].valid && passwordForm.controls['newPassword'].touched\">\n                    Password is required\n                  </p>\n                </div>\n\n                <div class=\"input-field col s6\" style=\"margin-left: 10px;\">\n                  <input id=\"confirm-password\" type=\"password\" formControlName=\"confirmPassword\">\n                  <label for=\"confirm-password\">Confirm Password</label>\n                  <p class=\"error\" *ngIf=\"!passwordForm.controls['confirmPassword'].valid && passwordForm.controls['confirmPassword'].touched\">\n                    Confirm Password is required\n                  </p>\n                  <p class=\"error\" *ngIf=\"passwordForm.errors\">Password does not match</p>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col s6\" style=\"margin-left: 10px;\">\n                  <button class=\"btn\" [disabled]=\"!passwordForm.valid\">\n                    Save Password\n                  </button>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/components/change-password/change-password-routing.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/components/change-password/change-password-routing.module.ts ***!
    \******************************************************************************/

  /*! exports provided: ChangePasswordRoutingModule */

  /***/
  function srcAppComponentsChangePasswordChangePasswordRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangePasswordRoutingModule", function () {
      return ChangePasswordRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _change_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./change-password.component */
    "./src/app/components/change-password/change-password.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [{
      path: '',
      component: _change_password_component__WEBPACK_IMPORTED_MODULE_1__["ChangePasswordComponent"]
    }];

    var ChangePasswordRoutingModule = function ChangePasswordRoutingModule() {
      _classCallCheck(this, ChangePasswordRoutingModule);
    };

    ChangePasswordRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], ChangePasswordRoutingModule);
    /***/
  },

  /***/
  "./src/app/components/change-password/change-password.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/components/change-password/change-password.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsChangePasswordChangePasswordComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".error {\n  color: red;\n  padding: 0px !important;\n  margin: 0px !important;\n}\n\n.text {\n  margin-left: 10px !important;\n  margin-top: -10px;\n  color: #64b5f6;\n  font-weight: bold;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuXG4udGV4dCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBjb2xvcjogIzY0YjVmNjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/change-password/change-password.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/change-password/change-password.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ChangePasswordComponent */

  /***/
  function srcAppComponentsChangePasswordChangePasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function () {
      return ChangePasswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/users.service */
    "./src/app/services/users.service.ts");

    var ChangePasswordComponent = /*#__PURE__*/function () {
      function ChangePasswordComponent(fb, usersService) {
        _classCallCheck(this, ChangePasswordComponent);

        this.fb = fb;
        this.usersService = usersService;
      }

      _createClass(ChangePasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.Init();
        }
      }, {
        key: "Init",
        value: function Init() {
          this.passwordForm = this.fb.group({
            cpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            newPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          }, {
            validator: this.Validate.bind(this)
          });
        }
      }, {
        key: "ChangePassword",
        value: function ChangePassword() {
          this.usersService.ChangePassword(this.passwordForm.value).subscribe(function (data) {
            console.log(data); // this.passwordForm.reset();
          }, function (err) {
            return console.log(err);
          });
        }
      }, {
        key: "Validate",
        value: function Validate(passwordFormGroup) {
          var new_password = passwordFormGroup.controls.newPassword.value;
          var confirm_password = passwordFormGroup.controls.confirmPassword.value;

          if (confirm_password.length <= 0) {
            return null;
          }

          if (confirm_password !== new_password) {
            return {
              doesNotMatch: true
            };
          }

          return null;
        }
      }]);

      return ChangePasswordComponent;
    }();

    ChangePasswordComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: _services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]
      }];
    };

    ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-change-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./change-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/change-password/change-password.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./change-password.component.css */
      "./src/app/components/change-password/change-password.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]])], ChangePasswordComponent);
    /***/
  },

  /***/
  "./src/app/components/change-password/change-password.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/change-password/change-password.module.ts ***!
    \**********************************************************************/

  /*! exports provided: ChangePasswordModule */

  /***/
  function srcAppComponentsChangePasswordChangePasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangePasswordModule", function () {
      return ChangePasswordModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _change_password_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./change-password-routing.module */
    "./src/app/components/change-password/change-password-routing.module.ts");
    /* harmony import */


    var _change_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./change-password.component */
    "./src/app/components/change-password/change-password.component.ts");

    var ChangePasswordModule = function ChangePasswordModule() {
      _classCallCheck(this, ChangePasswordModule);
    };

    ChangePasswordModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_change_password_component__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _change_password_routing_module__WEBPACK_IMPORTED_MODULE_4__["ChangePasswordRoutingModule"]]
    })], ChangePasswordModule);
    /***/
  }
}]);
//# sourceMappingURL=components-change-password-change-password-module-es5.js.map