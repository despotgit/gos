function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-images-images-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/images/images.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/images/images.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsImagesImagesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-toolbar></app-toolbar>\n\n<div class=\"container\" style=\"margin-top: 30px\">\n  <div class=\"row\">\n    <div class=\"col s12 m4 l3\">\n      <app-side></app-side>\n    </div>\n\n    <div class=\"col s12 m8 l9\">\n      <div class=\"row\">\n        <div class=\"col s6\">\n          <div class=\"file-field input-field\">\n            <div class=\"btn\">\n              <span>File</span>\n              <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" (onFileSelected)=\"OnFileSelected($event)\">\n            </div>\n            <div class=\"file-path-wrapper\">\n              <input class=\"file-path validate\" id=\"filePath\" type=\"text\">\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col s6\">\n          <div class=\"file-field input-field\">\n            <a class=\"waves-effect waves-light btn\" (click)=\"Upload()\">\n              <i class=\"material-icons left\">image</i>Upload Image\n            </a>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col s12 m6 l4\" *ngFor=\"let image of images\">\n          <div class=\"item-img-wrap imgDiv\">\n            <img class=\"imgCircle\" src=\"http://res.cloudinary.com/dsg8eiomh/image/upload/v{{image.imgVersion}}/{{image.imgId}}\">\n            <button class=\"btn imgBtn\" (click)=\"SetProfileImage(image)\">Set AS Profile</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/components/images/images-routing.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/components/images/images-routing.module.ts ***!
    \************************************************************/

  /*! exports provided: ImagesRoutingModule */

  /***/
  function srcAppComponentsImagesImagesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImagesRoutingModule", function () {
      return ImagesRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _images_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./images.component */
    "./src/app/components/images/images.component.ts");
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
      component: _images_component__WEBPACK_IMPORTED_MODULE_1__["ImagesComponent"]
    }];

    var ImagesRoutingModule = function ImagesRoutingModule() {
      _classCallCheck(this, ImagesRoutingModule);
    };

    ImagesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], ImagesRoutingModule);
    /***/
  },

  /***/
  "./src/app/components/images/images.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/images/images.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsImagesImagesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".item-img-wrap {\n  position: relative;\n  text-align: center;\n  overflow: hidden;\n}\n\n.item-img-wrap img {\n  transition: all 200ms linear;\n  width: 100%;\n  height: 180px;\n}\n\n.imgCircle {\n  border-radius: 50%;\n}\n\n.imgCircle {\n  width: 160px !important;\n  height: 160px !important;\n  border-radius: 50%;\n  margin: 0 auto !important;\n}\n\n.imgBtn {\n  margin: 0 auto !important;\n  text-align: center !important;\n  margin-top: 5px !important;\n}\n\n.active {\n  width: 350px !important;\n  height: 350px !important;\n  border-radius: none !important;\n  margin: 50px 0px 0px 120px !important;\n}\n\n@media only screen and (max-width: 480px) {\n  .imgCircle {\n    width: 140px !important;\n    height: 140px !important;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbWFnZXMvaW1hZ2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUlFLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLDhCQUE4QjtFQUM5QixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtJQUN2Qix3QkFBd0I7RUFDMUI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW1hZ2VzL2ltYWdlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0taW1nLXdyYXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLml0ZW0taW1nLXdyYXAgaW1nIHtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMjAwbXMgbGluZWFyO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMjAwbXMgbGluZWFyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAyMDBtcyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBsaW5lYXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE4MHB4O1xufVxuXG4uaW1nQ2lyY2xlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uaW1nQ2lyY2xlIHtcbiAgd2lkdGg6IDE2MHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTYwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xufVxuXG4uaW1nQnRuIHtcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDVweCAhaW1wb3J0YW50O1xufVxuXG4uYWN0aXZlIHtcbiAgd2lkdGg6IDM1MHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMzUwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogbm9uZSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDUwcHggMHB4IDBweCAxMjBweCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5pbWdDaXJjbGUge1xuICAgIHdpZHRoOiAxNDBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTQwcHggIWltcG9ydGFudDtcbiAgfVxufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/images/images.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/images/images.component.ts ***!
    \*******************************************************/

  /*! exports provided: ImagesComponent */

  /***/
  function srcAppComponentsImagesImagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImagesComponent", function () {
      return ImagesComponent;
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


    var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/users.service */
    "./src/app/services/users.service.ts");
    /* harmony import */


    var ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng2-file-upload */
    "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! socket.io-client */
    "./node_modules/socket.io-client/lib/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_5__);

    var URL = "http://localhost:3000/api/chatapp/upload-image";

    var ImagesComponent = /*#__PURE__*/function () {
      function ImagesComponent(usersService, tokenService) {
        _classCallCheck(this, ImagesComponent);

        this.usersService = usersService;
        this.tokenService = tokenService;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__["FileUploader"]({
          url: URL,
          disableMultipart: true
        });
        this.images = [];
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_5___default()("http://localhost:3000");
      }

      _createClass(ImagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.user = this.tokenService.GetPayload();
          this.GetUser();
          this.socket.on("refreshPage", function () {
            _this.GetUser();
          });
        }
      }, {
        key: "GetUser",
        value: function GetUser() {
          var _this2 = this;

          this.usersService.GetUserById(this.user._id).subscribe(function (data) {
            _this2.images = data.result.images;
          }, function (err) {
            return console.log(err);
          });
        }
      }, {
        key: "OnFileSelected",
        value: function OnFileSelected(event) {
          var _this3 = this;

          var file = event[0];
          this.ReadAsBase64(file).then(function (result) {
            _this3.selectedFile = result;
          })["catch"](function (err) {
            return console.log(err);
          });
        }
      }, {
        key: "Upload",
        value: function Upload() {
          var _this4 = this;

          if (this.selectedFile) {
            this.usersService.AddImage(this.selectedFile).subscribe(function (data) {
              _this4.socket.emit("refresh", {});

              var filePath = document.getElementById("filePath");
              filePath.value = "";
            }, function (err) {
              return console.log(err);
            });
          }
        }
      }, {
        key: "SetProfileImage",
        value: function SetProfileImage(image) {
          var _this5 = this;

          this.usersService.SetDefaultImage(image.imgId, image.imgVersion).subscribe(function (data) {
            _this5.socket.emit("refresh", {});
          }, function (err) {
            return console.log(err);
          });
        }
      }, {
        key: "ReadAsBase64",
        value: function ReadAsBase64(file) {
          var reader = new FileReader();
          var fileValue = new Promise(function (resolve, reject) {
            reader.addEventListener("load", function () {
              resolve(reader.result);
            });
            reader.addEventListener("error", function (event) {
              reject(event);
            });
            reader.readAsDataURL(file);
          });
          return fileValue;
        }
      }]);

      return ImagesComponent;
    }();

    ImagesComponent.ctorParameters = function () {
      return [{
        type: _services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
      }, {
        type: _services_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"]
      }];
    };

    ImagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: "app-images",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./images.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/images/images.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./images.component.css */
      "./src/app/components/images/images.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"], _services_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"]])], ImagesComponent);
    /***/
  },

  /***/
  "./src/app/components/images/images.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/components/images/images.module.ts ***!
    \****************************************************/

  /*! exports provided: ImagesModule */

  /***/
  function srcAppComponentsImagesImagesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImagesModule", function () {
      return ImagesModule;
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


    var _images_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./images-routing.module */
    "./src/app/components/images/images-routing.module.ts");
    /* harmony import */


    var _images_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./images.component */
    "./src/app/components/images/images.component.ts");

    var ImagesModule = function ImagesModule() {
      _classCallCheck(this, ImagesModule);
    };

    ImagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_images_component__WEBPACK_IMPORTED_MODULE_5__["ImagesComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _images_routing_module__WEBPACK_IMPORTED_MODULE_4__["ImagesRoutingModule"]]
    })], ImagesModule);
    /***/
  }
}]);
//# sourceMappingURL=components-images-images-module-es5.js.map