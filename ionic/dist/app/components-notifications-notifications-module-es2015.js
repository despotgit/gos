(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-notifications-notifications-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notifications/notifications.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/notifications/notifications.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-toolbar></app-toolbar>\n\n<div class=\"container\" style=\"margin-top: 30px\">\n  <div class=\"row\">\n    <div class=\"col s12 m4 l3\">\n      <app-side></app-side>\n    </div>\n\n    <div class=\"col s12 m8 l9\">\n      <ul class=\"collection col s12 m10\" *ngIf=\"notifications.length > 0\">\n        <li class=\"collection-item avatar\" *ngFor=\"let data of notifications\">\n          <img class=\"circle\" src=\"http://res.cloudinary.com/dsg8eiomh/image/upload/v{{data.senderId.picVersion}}/{{data.senderId.picId}}\"\n            alt=\"\">\n          <span class=\"title\">{{data.message}}</span>\n          <a class=\"secondary-content\">\n            <i *ngIf=\"!data.read\" class=\"material-icons\">brightness_1</i>\n            <i *ngIf=\"data.read\" class=\"material-icons\">panorama_fish_eye</i>\n          </a>\n          <p class=\"time\">{{TimeFromNow(data.created)}}</p>\n          <div>\n            <i class=\"material-icons\" (click)=\"MarkNotication(data)\" [ngClass]=\"data.read ? 'disabled': 'notDisbled'\">\n              check\n            </i>\n            <i class=\"material-icons\" (click)=\"DeleteNotification(data)\">\n              delete_forever\n            </i>\n          </div>\n        </li>\n      </ul>\n      <div class=\"row\" *ngIf=\"notifications.length <= 0\">\n        <h3 class=\"text\">You have no notification</h3>\n      </div>\n    </div>\n  </div>");

/***/ }),

/***/ "./src/app/components/notifications/notifications-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/notifications/notifications-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: NotificationsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsRoutingModule", function() { return NotificationsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _notifications_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifications.component */ "./src/app/components/notifications/notifications.component.ts");




const routes = [
    {
        path: '',
        component: _notifications_component__WEBPACK_IMPORTED_MODULE_3__["NotificationsComponent"],
    },
];
let NotificationsRoutingModule = class NotificationsRoutingModule {
};
NotificationsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], NotificationsRoutingModule);



/***/ }),

/***/ "./src/app/components/notifications/notifications.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/notifications/notifications.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".material-icons {\n  color: #64b5f6 !important;\n  margin-right: 10px;\n  cursor: pointer;\n}\n\n.time {\n  margin-bottom: 10px !important;\n  font-style: italic;\n}\n\n.text {\n  text-align: center;\n  font-size: 18px !important;\n}\n\n.disabled {\n  color: #c0c0c0 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXRlcmlhbC1pY29ucyB7XG4gIGNvbG9yOiAjNjRiNWY2ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGltZSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4udGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kaXNhYmxlZCB7XG4gIGNvbG9yOiAjYzBjMGMwICFpbXBvcnRhbnQ7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/notifications/notifications.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/notifications/notifications.component.ts ***!
  \*********************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/constants */ "./src/app/shared/constants.ts");







let NotificationsComponent = class NotificationsComponent {
    constructor(tokenService, usersService) {
        this.tokenService = tokenService;
        this.usersService = usersService;
        this.notifications = [];
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4___default()(_shared_constants__WEBPACK_IMPORTED_MODULE_6__["serverUrl"]);
    }
    ngOnInit() {
        this.user = this.tokenService.GetPayload();
        this.GetUser();
        this.socket.on("refreshPage", () => {
            this.GetUser();
        });
    }
    GetUser() {
        this.usersService.GetUserById(this.user._id).subscribe(data => {
            this.notifications = data.result.notifications.reverse();
        });
    }
    MarkNotication(data) {
        this.usersService.MarkNotification(data._id).subscribe(value => {
            this.socket.emit("refresh", {});
        });
    }
    DeleteNotification(value) {
        this.usersService.MarkNotification(value._id, true).subscribe(data => {
            console.log(data);
            this.socket.emit("refresh", {});
        });
    }
    TimeFromNow(time) {
        return moment__WEBPACK_IMPORTED_MODULE_5__(time).fromNow();
    }
};
NotificationsComponent.ctorParameters = () => [
    { type: _services_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"] },
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"] }
];
NotificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-notifications",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notifications.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notifications/notifications.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notifications.component.css */ "./src/app/components/notifications/notifications.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"], _services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]])
], NotificationsComponent);



/***/ }),

/***/ "./src/app/components/notifications/notifications.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/notifications/notifications.module.ts ***!
  \******************************************************************/
/*! exports provided: NotificationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsModule", function() { return NotificationsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _notifications_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notifications.component */ "./src/app/components/notifications/notifications.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notifications-routing.module */ "./src/app/components/notifications/notifications-routing.module.ts");






let NotificationsModule = class NotificationsModule {
};
NotificationsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [_notifications_component__WEBPACK_IMPORTED_MODULE_2__["NotificationsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
            _notifications_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificationsRoutingModule"]
        ]
    })
], NotificationsModule);



/***/ })

}]);
//# sourceMappingURL=components-notifications-notifications-module-es2015.js.map