function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-view-user-view-user-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/view-user/view-user.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/view-user/view-user.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsViewUserViewUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-toolbar></app-toolbar>\n\n<div class=\"container\">\n  <div class=\"col s12 m12 l10\">\n    <ul class=\"tabs\">\n      <li class=\"tab col s4\" (click)=\"ChangeTab('posts')\">\n        <a href=\"#\" class=\"active\">\n          Posts\n        </a>\n      </li>\n      <li class=\"tab col s4\" (click)=\"ChangeTab('following')\">\n        <a href=\"#\">\n          Following\n        </a>\n      </li>\n      <li class=\"tab col s4\" (click)=\"ChangeTab('followers')\">\n        <a href=\"#\">\n          Followers\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>\n\n<div class=\"container\" style=\"margin-top: 30px\">\n  <div class=\"row\">\n    <div class=\"col s12 m4 l3\">\n      <div class=\"row\">\n        <div class=\"col s12\">\n          <span class=\"title\">{{name}}</span>\n          <h2 class=\"cityName\" *ngIf=\"user\">{{user.city}}, {{user.country}}</h2>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col s12 m8 l9\" style=\"background: white;\">\n      <div class=\"row\">\n        <div class=\"col s12\">\n          <div class=\"row\" *ngIf=\"postsTab\">\n            <ul class=\"collection col s12 m12 l10\" *ngFor=\"let post of posts\">\n              <li class=\"collection-item avatar\">\n                <img class=\"circle\" src=\"http://res.cloudinary.com/dsg8eiomh/image/upload/v{{user.picVersion}}/{{user.picId}}\">\n                <span class=\"post\">{{post.postId.username}}</span>\n                <span data-target=\"modal\" class=\"title secondary-content modal-trigger\" (click)=\"OpenEditModal(post)\">\n                  Edit\n                </span>\n                <p class=\"time\">{{TimeFromNow(post.postId.created)}}\n                  <br> @{{user.city}}, {{user.country}}\n                </p>\n              </li>\n              <div class=\"row\">\n                <div class=\"col s12\">\n                  <div class=\"card\">\n                    <div class=\"card-image card_image\" *ngIf=\"post.postId.imgId\">\n                      <img class=\"postImage\" src=\"http://res.cloudinary.com/dsg8eiomh/image/upload/v{{post.postId.imgVersion}}/{{post.postId.imgId}}\">\n                    </div>\n                    <div class=\"card-content\">\n                      <p>{{post.postId.post}}</p>\n                    </div>\n                    <div class=\"card-action\">\n                      <i class=\"material-icons\">thumb_up</i>\n                      <span id=\"iconSpan\">\n                        {{post.postId.totalLikes}}\n                      </span>\n                      <i class=\"material-icons\">chat</i>\n                      <span id=\"iconSpan\">\n                        {{post.postId.comments.length}}\n                      </span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </ul>\n          </div>\n\n          <div class=\"row\" *ngIf=\"followingTab\">\n            <div class=\"col s12 m4 l4\" *ngFor=\"let user of following\">\n              <div class=\"card\">\n                <div class=\"card-image imgDiv\">\n                  <img class=\"imgCircle\" src=\"http://res.cloudinary.com/dsg8eiomh/image/upload/v{{user.userFollowed.picVersion}}/{{user.userFollowed.picId}}\">\n                </div>\n                <div class=\"card-action\">\n                  <h3 class=\"card-title\">{{user.userFollowed.username}}</h3>\n                  <!-- <p>Country</p> -->\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\" *ngIf=\"followersTab\">\n            <div class=\"col s12 m4 l4\" *ngFor=\"let user of followers\">\n              <div class=\"card\">\n                <div class=\"card-image imgDiv\">\n                  <img class=\"imgCircle\" src=\"http://res.cloudinary.com/dsg8eiomh/image/upload/v{{user.follower.picVersion}}/{{user.follower.picId}}\">\n                </div>\n                <div class=\"card-action\">\n                  <h3 class=\"card-title\">{{user.follower.username}}</h3>\n                  <!-- <p>Country</p> -->\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div id=\"modal\" class=\"modal\">\n    <div class=\"modal-content\">\n      <h4>\n        Edit Post\n        <button class=\"secondary-content deleteBtn btn\" (click)=\"DeletePost()\">\n          Delete\n        </button>\n      </h4>\n      <p *ngIf=\"postValue\">{{postValue.post}}</p>\n      <form [formGroup]=\"editForm\" novalidate>\n        <textarea formControlName=\"editedPost\" class=\"materialize-textarea\"></textarea>\n        <div class=\"modal-footer\">\n          <button class=\"button\" (click)=\"CloseModal()\">Close</button>&nbsp;\n          <button class=\"btn\" (click)=\"SubmitEditedPost()\">Save</button>\n        </div>\n      </form>\n    </div>\n\n  </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/components/view-user/view-user-routing.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/view-user/view-user-routing.module.ts ***!
    \******************************************************************/

  /*! exports provided: ViewUserRoutingModule */

  /***/
  function srcAppComponentsViewUserViewUserRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewUserRoutingModule", function () {
      return ViewUserRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _view_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./view-user.component */
    "./src/app/components/view-user/view-user.component.ts");
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
      component: _view_user_component__WEBPACK_IMPORTED_MODULE_1__["ViewUserComponent"]
    }];

    var ViewUserRoutingModule = function ViewUserRoutingModule() {
      _classCallCheck(this, ViewUserRoutingModule);
    };

    ViewUserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], ViewUserRoutingModule);
    /***/
  },

  /***/
  "./src/app/components/view-user/view-user.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/components/view-user/view-user.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsViewUserViewUserComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-image {\n  height: 200px;\n}\n\n.imgDiv {\n  display: block;\n  position: relative;\n}\n\n.imgCircle {\n  width: 150px !important;\n  height: 150px !important;\n  border-radius: 50% !important;\n  margin: 0 auto !important;\n  top: 20px !important;\n}\n\n.title {\n  font-size: 21px;\n  font-weight: 700;\n  margin-bottom: 0px !important;\n  bottom: 0 !important;\n}\n\n.cityName {\n  font-size: 14px;\n  line-height: 20px;\n  margin-top: -1px !important;\n}\n\n.post {\n  font-weight: bold;\n  color: #64b5f6;\n}\n\n.postImage {\n  width: 100% !important;\n  margin: 0 auto !important;\n  left: 20px !important;\n  top: 10px !important;\n}\n\n.card_image {\n  width: 200px;\n  height: auto !important;\n}\n\n.tabs a {\n  color: #64b5f6 !important;\n  font-weight: bold;\n  font-size: 16px;\n}\n\n.tabs .col .s4 {\n  text-align: center !important;\n  margin: 0 auto !important;\n}\n\n.tabs a .indicator {\n  background-color: #64b5f6 !important;\n}\n\n.collection {\n  border: none !important;\n}\n\n.collection-item {\n  border: none !important;\n}\n\n.button {\n  background: none !important;\n  border: none !important;\n  height: 10px;\n}\n\n.deleteBtn {\n  background: red !important;\n  border: none !important;\n  height: 40px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWV3LXVzZXIvdmlldy11c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4Qiw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ZpZXctdXNlci92aWV3LXVzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWltYWdlIHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmltZ0RpdiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pbWdDaXJjbGUge1xuICB3aWR0aDogMTUwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxNTBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbiAgdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIGJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuXG4uY2l0eU5hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAtMXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wb3N0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNjRiNWY2O1xufVxuXG4ucG9zdEltYWdlIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbiAgbGVmdDogMjBweCAhaW1wb3J0YW50O1xuICB0b3A6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmNhcmRfaW1hZ2Uge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xufVxuXG4udGFicyBhIHtcbiAgY29sb3I6ICM2NGI1ZjYgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnRhYnMgLmNvbCAuczQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbn1cblxuLnRhYnMgYSAuaW5kaWNhdG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0YjVmNiAhaW1wb3J0YW50O1xufVxuXG4uY29sbGVjdGlvbiB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uY29sbGVjdGlvbi1pdGVtIHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b24ge1xuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwcHg7XG59XG5cbi5kZWxldGVCdG4ge1xuICBiYWNrZ3JvdW5kOiByZWQgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDBweDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/view-user/view-user.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/view-user/view-user.component.ts ***!
    \*************************************************************/

  /*! exports provided: ViewUserComponent */

  /***/
  function srcAppComponentsViewUserViewUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewUserComponent", function () {
      return ViewUserComponent;
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


    var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/post.service */
    "./src/app/services/post.service.ts");
    /* harmony import */


    var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../services/users.service */
    "./src/app/services/users.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var materialize_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! materialize-css */
    "./node_modules/materialize-css/dist/js/materialize.js");
    /* harmony import */


    var materialize_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! socket.io-client */
    "./node_modules/socket.io-client/lib/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var _shared_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../shared/constants */
    "./src/app/shared/constants.ts");

    var ViewUserComponent = /*#__PURE__*/function () {
      function ViewUserComponent(route, usersService, postService, fb) {
        _classCallCheck(this, ViewUserComponent);

        this.route = route;
        this.usersService = usersService;
        this.postService = postService;
        this.fb = fb;
        this.postsTab = false;
        this.followingTab = false;
        this.followersTab = false;
        this.posts = [];
        this.following = [];
        this.followers = [];
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_8___default()(_shared_constants__WEBPACK_IMPORTED_MODULE_9__["serverUrl"]);
      }

      _createClass(ViewUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.postsTab = true;
          var tabs = document.querySelector(".tabs");
          materialize_css__WEBPACK_IMPORTED_MODULE_5__["Tabs"].init(tabs, {});
          this.tabElement = document.querySelector(".nav-content");
          this.modalElement = document.querySelector(".modal");
          materialize_css__WEBPACK_IMPORTED_MODULE_5__["Modal"].init(this.modalElement, {});
          this.route.params.subscribe(function (params) {
            _this.name = params.name;

            _this.GetUserData(_this.name);
          });
          this.socket.on("refreshPage", function (data) {
            _this.route.params.subscribe(function (params) {
              _this.name = params.name;

              _this.GetUserData(_this.name);
            });
          });
          this.InitEditForm();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.tabElement.style.display = "none";
        }
      }, {
        key: "InitEditForm",
        value: function InitEditForm() {
          this.editForm = this.fb.group({
            editedPost: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "GetUserData",
        value: function GetUserData(name) {
          var _this2 = this;

          this.usersService.GetUserByName(name).subscribe(function (data) {
            _this2.user = data.result;
            _this2.posts = data.result.posts.reverse();
            _this2.followers = data.result.followers;
            _this2.following = data.result.following;
          }, function (err) {
            return console.log(err);
          });
        }
      }, {
        key: "OpenEditModal",
        value: function OpenEditModal(post) {
          this.postValue = post;
        }
      }, {
        key: "SubmitEditedPost",
        value: function SubmitEditedPost() {
          var _this3 = this;

          var body = {
            id: this.postValue.postId._id,
            post: this.editForm.value.editedPost
          };
          this.postService.EditPost(body).subscribe(function (data) {
            _this3.socket.emit("refresh", {});
          }, function (err) {
            return console.log(err);
          });
          materialize_css__WEBPACK_IMPORTED_MODULE_5__["Modal"].getInstance(this.modalElement).close();
          this.editForm.reset();
        }
      }, {
        key: "CloseModal",
        value: function CloseModal() {
          materialize_css__WEBPACK_IMPORTED_MODULE_5__["Modal"].getInstance(this.modalElement).close();
          this.editForm.reset();
        }
      }, {
        key: "DeletePost",
        value: function DeletePost() {
          var _this4 = this;

          this.postService.DeletePost(this.postValue.postId._id).subscribe(function (data) {
            _this4.socket.emit("refresh", {});
          }, function (err) {
            return console.log(err);
          });
          materialize_css__WEBPACK_IMPORTED_MODULE_5__["Modal"].getInstance(this.modalElement).close();
        }
      }, {
        key: "ChangeTab",
        value: function ChangeTab(value) {
          if (value === "posts") {
            this.postsTab = true;
            this.followersTab = false;
            this.followingTab = false;
          }

          if (value === "following") {
            this.postsTab = false;
            this.followersTab = false;
            this.followingTab = true;
          }

          if (value === "followers") {
            this.postsTab = false;
            this.followersTab = true;
            this.followingTab = false;
          }
        }
      }, {
        key: "TimeFromNow",
        value: function TimeFromNow(time) {
          return moment__WEBPACK_IMPORTED_MODULE_7__(time).fromNow();
        }
      }]);

      return ViewUserComponent;
    }();

    ViewUserComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: _services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]
      }, {
        type: _services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }];
    };

    ViewUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: "app-view-user",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./view-user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/view-user/view-user.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./view-user.component.css */
      "./src/app/components/view-user/view-user.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"], _services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])], ViewUserComponent);
    /***/
  },

  /***/
  "./src/app/components/view-user/view-user.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/components/view-user/view-user.module.ts ***!
    \**********************************************************/

  /*! exports provided: ViewUserModule */

  /***/
  function srcAppComponentsViewUserViewUserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewUserModule", function () {
      return ViewUserModule;
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


    var _view_user_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./view-user-routing.module */
    "./src/app/components/view-user/view-user-routing.module.ts");
    /* harmony import */


    var _view_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./view-user.component */
    "./src/app/components/view-user/view-user.component.ts");

    var ViewUserModule = function ViewUserModule() {
      _classCallCheck(this, ViewUserModule);
    };

    ViewUserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_view_user_component__WEBPACK_IMPORTED_MODULE_5__["ViewUserComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _view_user_routing_module__WEBPACK_IMPORTED_MODULE_4__["ViewUserRoutingModule"]]
    })], ViewUserModule);
    /***/
  }
}]);
//# sourceMappingURL=components-view-user-view-user-module-es5.js.map