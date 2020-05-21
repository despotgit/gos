(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-people-people-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/people/people.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/people/people.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-toolbar (onlineUsers)=\"online($event)\"></app-toolbar>\n\n<div class=\"container\" style=\"margin-top: 30px\">\n    <div class=\"row\">\n        <div class=\"col s12 m4 l3\">\n            <app-side></app-side>\n        </div>\n\n        <div class=\"col s12 m8 l9\">\n            <div class=\"row\">\n                <div class=\"col s12 m6 l4 cardDiv\" *ngFor=\"let user of users\">\n                    <div class=\"card\">\n                        <a (click)=\"ViewUser(user)\">\n                            <div class=\"card-image imgDiv\">\n                                <img class=\"imgCircle responsive-img\" src=\"http://res.cloudinary.com/dsg8eiomh/image/upload/v{{user.picVersion}}/{{user.picId}}\">\n                            </div>\n                        </a>\n                        <div class=\"card-action\">\n                            <h3 class=\"card-title\">\n                                {{user.username}}\n                                <i class=\"fa fa-circle\" *ngIf=\"CheckIfOnline(user.username)\"></i>\n                            </h3>\n                            <p *ngIf=\"user.city\">{{user.city}}, {{user.country}}</p>\n                            <button class=\"btn\" *ngIf=\"!CheckInArray(userArr, user._id)\" (click)=\"FollowUser(user)\">Follow</button>\n                            <button class=\"btn disabled following\" *ngIf=\"CheckInArray(userArr, user._id)\">Following</button>\n                            <a class=\"secondary-content\" [routerLink]=\"['/chat', user.username]\">\n                                <i class=\"material-icons\">chat</i>\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/components/people/people-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/components/people/people-routing.module.ts ***!
  \************************************************************/
/*! exports provided: PeopleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleRoutingModule", function() { return PeopleRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _people_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./people.component */ "./src/app/components/people/people.component.ts");




const routes = [
    {
        path: '',
        component: _people_component__WEBPACK_IMPORTED_MODULE_3__["PeopleComponent"],
    },
];
let PeopleRoutingModule = class PeopleRoutingModule {
};
PeopleRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PeopleRoutingModule);



/***/ }),

/***/ "./src/app/components/people/people.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/people/people.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-image {\n  height: 200px;\n  border: 2px solid #e7e7e7;\n}\n\n.more {\n  margin-right: -18px !important;\n}\n\n.dropdown-content {\n  margin: 0;\n  display: none;\n  min-width: 150px;\n  max-height: auto;\n  margin-left: -1px;\n  overflow: hidden;\n  opacity: 0;\n  position: absolute;\n  white-space: nowrap;\n  z-index: 1;\n  will-change: width, height;\n}\n\n.collection-item {\n  margin: 0px !important;\n  padding: 0px !important;\n}\n\n.card-action {\n  height: 179px !important;\n  border: 1px solid #e7e7e7;\n}\n\n.imgDiv {\n  display: block;\n  position: relative;\n}\n\n.imgCircle {\n  width: 150px !important;\n  height: 150px !important;\n  border-radius: 50% !important;\n  margin: 0 auto !important;\n  top: 20px !important;\n}\n\n.active {\n  width: 350px !important;\n  height: 350px !important;\n  border-radius: none !important;\n  margin: -150px 0px 0px 120px !important;\n}\n\n.fa-circle {\n  color: rgb(21, 206, 21) !important;\n  font-size: 15px !important;\n}\n\n.following {\n  color: #64b5f6 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wZW9wbGUvcGVvcGxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsU0FBUztFQUNULGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsNkJBQTZCO0VBQzdCLHlCQUF5QjtFQUN6QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLDhCQUE4QjtFQUM5Qix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wZW9wbGUvcGVvcGxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1pbWFnZSB7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlN2U3ZTc7XG59XG5cbi5tb3JlIHtcbiAgbWFyZ2luLXJpZ2h0OiAtMThweCAhaW1wb3J0YW50O1xufVxuXG4uZHJvcGRvd24tY29udGVudCB7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogbm9uZTtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LWhlaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgei1pbmRleDogMTtcbiAgd2lsbC1jaGFuZ2U6IHdpZHRoLCBoZWlnaHQ7XG59XG5cbi5jb2xsZWN0aW9uLWl0ZW0ge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmNhcmQtYWN0aW9uIHtcbiAgaGVpZ2h0OiAxNzlweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTdlN2U3O1xufVxuXG4uaW1nRGl2IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmltZ0NpcmNsZSB7XG4gIHdpZHRoOiAxNTBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE1MHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xuICB0b3A6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLmFjdGl2ZSB7XG4gIHdpZHRoOiAzNTBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDM1MHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IG5vbmUgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAtMTUwcHggMHB4IDBweCAxMjBweCAhaW1wb3J0YW50O1xufVxuXG4uZmEtY2lyY2xlIHtcbiAgY29sb3I6IHJnYigyMSwgMjA2LCAyMSkgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5mb2xsb3dpbmcge1xuICBjb2xvcjogIzY0YjVmNiAhaW1wb3J0YW50O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/people/people.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/people/people.component.ts ***!
  \*******************************************************/
/*! exports provided: PeopleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleComponent", function() { return PeopleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/constants */ "./src/app/shared/constants.ts");








let PeopleComponent = class PeopleComponent {
    constructor(usersService, tokenService, router) {
        this.usersService = usersService;
        this.tokenService = tokenService;
        this.router = router;
        this.users = [];
        this.userArr = [];
        this.onlineusers = [];
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_5___default()(_shared_constants__WEBPACK_IMPORTED_MODULE_7__["serverUrl"]);
    }
    ngOnInit() {
        this.loggedInUser = this.tokenService.GetPayload();
        this.GetUsers();
        this.GetUser();
        this.socket.on("refreshPage", () => {
            this.GetUsers();
            this.GetUser();
        });
    }
    GetUsers() {
        this.usersService.GetAllUsers().subscribe(data => {
            lodash__WEBPACK_IMPORTED_MODULE_4___default.a.remove(data.result, { username: this.loggedInUser.username });
            this.users = data.result;
        });
    }
    GetUser() {
        this.usersService.GetUserById(this.loggedInUser._id).subscribe(data => {
            this.userArr = data.result.following;
        });
    }
    FollowUser(user) {
        this.usersService.FollowUser(user._id).subscribe(data => {
            this.socket.emit("refresh", {});
        });
    }
    ViewUser(user) {
        this.router.navigate([user.username]);
        if (this.loggedInUser.username !== user.username) {
            this.usersService.ProfileNotifications(user._id).subscribe(data => {
                this.socket.emit("refresh", {});
            }, err => console.log(err));
        }
    }
    CheckInArray(arr, id) {
        const result = lodash__WEBPACK_IMPORTED_MODULE_4___default.a.find(arr, ["userFollowed._id", id]);
        if (result) {
            return true;
        }
        else {
            return false;
        }
    }
    online(event) {
        this.onlineusers = event;
    }
    CheckIfOnline(name) {
        const result = lodash__WEBPACK_IMPORTED_MODULE_4___default.a.indexOf(this.onlineusers, name);
        if (result > -1) {
            return true;
        }
        else {
            return false;
        }
    }
};
PeopleComponent.ctorParameters = () => [
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] },
    { type: _services_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
PeopleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-people",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./people.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/people/people.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./people.component.css */ "./src/app/components/people/people.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"], _services_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], PeopleComponent);



/***/ }),

/***/ "./src/app/components/people/people.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/people/people.module.ts ***!
  \****************************************************/
/*! exports provided: PeopleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleModule", function() { return PeopleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _people_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./people.component */ "./src/app/components/people/people.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _people_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./people-routing.module */ "./src/app/components/people/people-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../shared/shared.module */ "./src/app/shared/shared.module.ts");






let PeopleModule = class PeopleModule {
};
PeopleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_people_component__WEBPACK_IMPORTED_MODULE_1__["PeopleComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _people_routing_module__WEBPACK_IMPORTED_MODULE_4__["PeopleRoutingModule"]
        ]
    })
], PeopleModule);



/***/ })

}]);
//# sourceMappingURL=components-people-people-module-es2015.js.map