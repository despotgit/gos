(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-following-following-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/following/following.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/following/following.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-toolbar></app-toolbar>\n\n<div class=\"container\" style=\"margin-top: 30px\">\n  <div class=\"row\">\n    <div class=\"col s12 m4 l3\">\n      <app-side></app-side>\n    </div>\n\n    <div class=\"col s12 m8 l9\">\n      <div class=\"row\" *ngIf=\"following.length > 0\">\n        <div class=\"col s12 m6 l4 cardDiv\" *ngFor=\"let user of following\">\n          <div class=\"card\">\n            <a>\n              <div class=\"card-image imgDiv\">\n                <img class=\"imgCircle responsive-img\" src=\"http://res.cloudinary.com/dsg8eiomh/image/upload/v{{user.userFollowed.picVersion}}/{{user.userFollowed.picId}}\">\n              </div>\n            </a>\n            <div class=\"card-action\">\n              <h3 class=\"card-title\">\n                {{user.userFollowed.username}}\n              </h3>\n              <p *ngIf=\"user.userFollowed.city\">{{user.userFollowed.city}}, {{user.userFollowed.country}}</p>\n              <button class=\"btn\" (click)=\"UnFollowUser(user.userFollowed)\">UnFollow</button>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\" *ngIf=\"following.length <= 0\">\n        <h4 class=\"text\">You are not following anyone yet</h4>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./src/app/components/following/following-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/following/following-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: FollowingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowingRoutingModule", function() { return FollowingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _following_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./following.component */ "./src/app/components/following/following.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var routes = [
    {
        path: '',
        component: _following_component__WEBPACK_IMPORTED_MODULE_1__["FollowingComponent"]
    }
];
var FollowingRoutingModule = /** @class */ (function () {
    function FollowingRoutingModule() {
    }
    FollowingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], FollowingRoutingModule);
    return FollowingRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/following/following.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/following/following.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-image {\n  height: 200px;\n  border: 2px solid #e7e7e7;\n}\n\n.more {\n  margin-right: -18px !important;\n}\n\n.dropdown-content {\n  margin: 0;\n  display: none;\n  min-width: 150px;\n  max-height: auto;\n  margin-left: -1px;\n  overflow: hidden;\n  opacity: 0;\n  position: absolute;\n  white-space: nowrap;\n  z-index: 1;\n  will-change: width, height;\n}\n\n.collection-item {\n  margin: 0px !important;\n  padding: 0px !important;\n}\n\n.card-action {\n  height: 179px !important;\n  border: 1px solid #e7e7e7;\n}\n\n.imgDiv {\n  display: block;\n  position: relative;\n}\n\n.imgCircle {\n  width: 150px !important;\n  height: 150px !important;\n  border-radius: 50% !important;\n  margin: 0 auto !important;\n  top: 20px !important;\n}\n\n.active {\n  width: 350px !important;\n  height: 350px !important;\n  border-radius: none !important;\n  margin: -150px 0px 0px 120px !important;\n}\n\n.fa-circle {\n  color: rgb(21, 206, 21) !important;\n  font-size: 15px !important;\n}\n\n.following {\n  color: #64b5f6 !important;\n}\n\n.text {\n  text-align: center !important;\n  font-size: 18px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb2xsb3dpbmcvZm9sbG93aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsU0FBUztFQUNULGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsNkJBQTZCO0VBQzdCLHlCQUF5QjtFQUN6QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLDhCQUE4QjtFQUM5Qix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZvbGxvd2luZy9mb2xsb3dpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWltYWdlIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2U3ZTdlNztcbn1cblxuLm1vcmUge1xuICBtYXJnaW4tcmlnaHQ6IC0xOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kcm9wZG93bi1jb250ZW50IHtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBub25lO1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogLTFweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB6LWluZGV4OiAxO1xuICB3aWxsLWNoYW5nZTogd2lkdGgsIGhlaWdodDtcbn1cblxuLmNvbGxlY3Rpb24taXRlbSB7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uY2FyZC1hY3Rpb24ge1xuICBoZWlnaHQ6IDE3OXB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlN2U3ZTc7XG59XG5cbi5pbWdEaXYge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaW1nQ2lyY2xlIHtcbiAgd2lkdGg6IDE1MHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTUwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XG4gIHRvcDogMjBweCAhaW1wb3J0YW50O1xufVxuXG4uYWN0aXZlIHtcbiAgd2lkdGg6IDM1MHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMzUwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogbm9uZSAhaW1wb3J0YW50O1xuICBtYXJnaW46IC0xNTBweCAwcHggMHB4IDEyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5mYS1jaXJjbGUge1xuICBjb2xvcjogcmdiKDIxLCAyMDYsIDIxKSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbn1cblxuLmZvbGxvd2luZyB7XG4gIGNvbG9yOiAjNjRiNWY2ICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/following/following.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/following/following.component.ts ***!
  \*************************************************************/
/*! exports provided: FollowingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowingComponent", function() { return FollowingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/constants */ "./src/app/shared/constants.ts");






var FollowingComponent = /** @class */ (function () {
    function FollowingComponent(tokenService, usersService) {
        this.tokenService = tokenService;
        this.usersService = usersService;
        this.following = [];
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4___default()(_shared_constants__WEBPACK_IMPORTED_MODULE_5__["serverUrl"]);
    }
    FollowingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.tokenService.GetPayload();
        this.GetUser();
        this.socket.on("refreshPage", function () {
            _this.GetUser();
        });
    };
    FollowingComponent.prototype.GetUser = function () {
        var _this = this;
        this.usersService.GetUserById(this.user._id).subscribe(function (data) {
            _this.following = data.result.following;
        }, function (err) { return console.log(err); });
    };
    FollowingComponent.prototype.UnFollowUser = function (user) {
        var _this = this;
        this.usersService.UnFollowUser(user._id).subscribe(function (data) {
            _this.socket.emit("refresh", {});
        });
    };
    FollowingComponent.ctorParameters = function () { return [
        { type: _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] },
        { type: _services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"] }
    ]; };
    FollowingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-following",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./following.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/following/following.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./following.component.css */ "./src/app/components/following/following.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"], _services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]])
    ], FollowingComponent);
    return FollowingComponent;
}());



/***/ }),

/***/ "./src/app/components/following/following.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/following/following.module.ts ***!
  \**********************************************************/
/*! exports provided: FollowingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowingModule", function() { return FollowingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _following_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./following-routing.module */ "./src/app/components/following/following-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _following_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./following.component */ "./src/app/components/following/following.component.ts");






var FollowingModule = /** @class */ (function () {
    function FollowingModule() {
    }
    FollowingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_following_component__WEBPACK_IMPORTED_MODULE_5__["FollowingComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _following_routing_module__WEBPACK_IMPORTED_MODULE_3__["FollowingRoutingModule"]
            ]
        })
    ], FollowingModule);
    return FollowingModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-following-following-module.js.map