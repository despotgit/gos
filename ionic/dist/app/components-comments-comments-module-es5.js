function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-comments-comments-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/comments/comments.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/comments/comments.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCommentsCommentsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-toolbar></app-toolbar>\n\n<div class=\"container\" style=\"margin-top: 30px\">\n    <div class=\"row\">\n        <div class=\"col s12 m4 l3\">\n            <app-side></app-side>\n        </div>\n\n        <div class=\"col s12 m8 l9\">\n            <div class=\"col s12 m10\">\n                <div class=\"row\">\n                    <div class=\"card\">\n                        <ul class=\"collection\">\n                            <li class=\"collection-item\">\n                                <span class=\"post\">{{post}}</span>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"card\">\n                        <div class=\"card postDiv\">\n                            <div class=\"card-content\">\n                                <form [formGroup]=\"commmentForm\" (ngSubmit)=\"AddComment()\">\n                                    <div class=\"formDiv\">\n                                        <textarea formControlName=\"comment\" class=\"materialize-textarea\"></textarea>\n                                        <button class=\"btn postBtn\" [disabled]=\"!commmentForm.valid\">\n                                            Add Comment\n                                        </button>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <ul class=\"collection col s12 m10\" *ngFor=\"let comment of commentsArray\">\n                <li class=\"collection-item avatar\">\n                    <img class=\"circle\" src=\"http://placehold.it/50x50\">\n                    <span class=\"title\">{{comment.username}}</span>\n                    <p class=\"time\">{{TimeFromNow(comment.createdAt)}}</p>\n                    <p class=\"postComment\">{{comment.comment}}</p>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/components/comments/comments-routing.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/components/comments/comments-routing.module.ts ***!
    \****************************************************************/

  /*! exports provided: CommentsRoutingModule */

  /***/
  function srcAppComponentsCommentsCommentsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentsRoutingModule", function () {
      return CommentsRoutingModule;
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


    var _comments_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./comments.component */
    "./src/app/components/comments/comments.component.ts");

    var routes = [{
      path: '',
      component: _comments_component__WEBPACK_IMPORTED_MODULE_3__["CommentsComponent"]
    }];

    var CommentsRoutingModule = function CommentsRoutingModule() {
      _classCallCheck(this, CommentsRoutingModule);
    };

    CommentsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CommentsRoutingModule);
    /***/
  },

  /***/
  "./src/app/components/comments/comments.component.css":
  /*!************************************************************!*\
    !*** ./src/app/components/comments/comments.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCommentsCommentsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".postDiv {\n  background-color: #64b5f6;\n}\n\nform {\n  background-color: #fff;\n}\n\n.formDiv {\n  margin: 0px 20px 0px 20px;\n}\n\n.addImageBtn {\n  margin-bottom: 5px;\n}\n\n.postBtn {\n  margin-bottom: 5px;\n}\n\n.title {\n  font-weight: bold;\n  color: #64b5f6;\n}\n\n.time {\n  font-size: 14px;\n  color: #666565;\n}\n\n.postComment {\n  font-size: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tZW50cy9jb21tZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbW1lbnRzL2NvbW1lbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdERpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NGI1ZjY7XG59XG5cbmZvcm0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uZm9ybURpdiB7XG4gIG1hcmdpbjogMHB4IDIwcHggMHB4IDIwcHg7XG59XG5cbi5hZGRJbWFnZUJ0biB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLnBvc3RCdG4ge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzY0YjVmNjtcbn1cblxuLnRpbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNjY2NTY1O1xufVxuXG4ucG9zdENvbW1lbnQge1xuICBmb250LXNpemU6IDE1cHg7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/comments/comments.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/comments/comments.component.ts ***!
    \***********************************************************/

  /*! exports provided: CommentsComponent */

  /***/
  function srcAppComponentsCommentsCommentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentsComponent", function () {
      return CommentsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/post.service */
    "./src/app/services/post.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! socket.io-client */
    "./node_modules/socket.io-client/lib/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _shared_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/constants */
    "./src/app/shared/constants.ts");

    var CommentsComponent = /*#__PURE__*/function () {
      function CommentsComponent(fb, postService, route) {
        _classCallCheck(this, CommentsComponent);

        this.fb = fb;
        this.postService = postService;
        this.route = route;
        this.commentsArray = [];
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_5___default()(_shared_constants__WEBPACK_IMPORTED_MODULE_7__["serverUrl"]);
      }

      _createClass(CommentsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.toolbarElement = document.querySelector(".nav-content");
          this.postId = this.route.snapshot.paramMap.get("id");
          this.init();
          this.GetPost();
          this.socket.on("refreshPage", function (data) {
            _this.GetPost();
          });
        }
      }, {
        key: "init",
        value: function init() {
          this.commmentForm = this.fb.group({
            comment: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.toolbarElement.style.display = "none";
        }
      }, {
        key: "AddComment",
        value: function AddComment() {
          var _this2 = this;

          this.postService.addComment(this.postId, this.commmentForm.value.comment).subscribe(function (data) {
            _this2.socket.emit("refresh", {});

            _this2.commmentForm.reset();
          });
        }
      }, {
        key: "GetPost",
        value: function GetPost() {
          var _this3 = this;

          this.postService.getPost(this.postId).subscribe(function (data) {
            _this3.post = data.post.post;
            _this3.commentsArray = data.post.comments.reverse();
          });
        }
      }, {
        key: "TimeFromNow",
        value: function TimeFromNow(time) {
          return moment__WEBPACK_IMPORTED_MODULE_6__(time).fromNow();
        }
      }]);

      return CommentsComponent;
    }();

    CommentsComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    CommentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: "app-comments",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./comments.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/comments/comments.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./comments.component.css */
      "./src/app/components/comments/comments.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])], CommentsComponent);
    /***/
  },

  /***/
  "./src/app/components/comments/comments.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/components/comments/comments.module.ts ***!
    \********************************************************/

  /*! exports provided: CommentsModule */

  /***/
  function srcAppComponentsCommentsCommentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentsModule", function () {
      return CommentsModule;
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


    var _comments_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./comments-routing.module */
    "./src/app/components/comments/comments-routing.module.ts");
    /* harmony import */


    var _comments_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./comments.component */
    "./src/app/components/comments/comments.component.ts");

    var CommentsModule = function CommentsModule() {
      _classCallCheck(this, CommentsModule);
    };

    CommentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_comments_component__WEBPACK_IMPORTED_MODULE_5__["CommentsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _comments_routing_module__WEBPACK_IMPORTED_MODULE_4__["CommentsRoutingModule"]]
    })], CommentsModule);
    /***/
  }
}]);
//# sourceMappingURL=components-comments-comments-module-es5.js.map