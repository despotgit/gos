(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-chat-chat-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chat/chat.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/chat/chat.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-toolbar (onlineUsers)=\"online($event)\"></app-toolbar>\n\n<div class=\"container\" style=\"margin-top: 30px\">\n    <div class=\"row chatRow\">\n        <div class=\"col s12\">\n            <app-message [users]=\"online_users\"></app-message>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/message/message.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/message/message.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col s12\" style=\"margin-bottom: 5px \">\n    <div class=\"row\">\n      <div class=\"card\">\n        <div class=\"valign-wrapper\" style=\"background: #64b5f6 !important; margin-bottom: 200px \">\n          <div class=\"col s12 imgCol\">\n            <img *ngIf=\"receiverData\" src=\"http://res.cloudinary.com/dsg8eiomh/image/upload/v{{receiverData.picVersion}}/{{receiverData.picId}}\"\n              class=\"imgCircle\">\n          </div>\n          <div class=\"row\" style=\"height: 60px\">\n            <div class=\"col s10 nameCol\">\n              <span>\n                {{receiver}}\n                <p class=\"isOnline\" *ngIf=\"isOnline\">Online</p>\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col s12 rowDiv\" ngx-auto-scroll lock-y-offset=\"10\" observe-attributes>\n    <div class=\"row\">\n      <div class=\"col s12\">\n        <div class=\"message-wrspper\" *ngFor=\"let message of messagesArray\">\n          <div class=\"left\" *ngIf=\"user.username !== receiver && user.username !== message.sendername\">\n            <div class=\"chat-bubble left slide-left\">\n              <div class=\"message\">{{message.body}}</div>\n            </div>\n          </div>\n\n          <div class=\"right\" *ngIf=\"user.username === message.sendername\">\n            <div class=\"chat-bubble right slide-right\">\n              <div class=\"message\">{{message.body}}</div>\n            </div>\n          </div>\n\n          <div class=\"cf\"></div>\n        </div>\n        <div class=\"left\" *ngIf=\"typing\">\n          <div class=\"chat-bubble left slide-left\">\n            <div class=\"message\">\n              {{receiver}} is typing...\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col s12\" style=\"margin: 0px\">\n    <div class=\"row\">\n      <div class=\"card\" style=\"height: 55px\">\n        <div class=\"inputRow\">\n          <form (ngSubmit)=\"SendMessage()\">\n            <div class=\"input-field inputField col s10\">\n              <textarea name=\"message\" [(ngModel)]=\"message\" (keypress)=\"IsTyping()\" class=\"materialize-textarea inputBox\"></textarea>\n            </div>\n            <div class=\"input-field col s1 emojiDiv\">\n              <button class=\"emojiBtn\" (click)=\"Toggled()\">😄</button>\n\n              <div class=\"emoji-content-editable\" (emojiPickerCaretEmitter)=\"HandleCurrentCaret($event)\" (input)=\"content = $event.target.textContent\"\n                [textContent]=\"content\" contenteditable=\"true\"></div>\n\n              <i class=\"emoji-toggle-button imgBtn\" [(emojiPickerIf)]=\"toggled\" [emojiPickerPreserveSelection]=\"false\" [emojiPickerDirection]=\"direction\"\n                [emojiPickerAutofocus]=\"true\" (emojiPickerSelect)=\"HandleSelection($event)\"></i>\n            </div>\n            <div class=\"input-field col s1\">\n              <button class=\"suffix btn\">Send</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./src/app/components/chat/chat-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/chat/chat-routing.module.ts ***!
  \********************************************************/
/*! exports provided: ChatRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoutingModule", function() { return ChatRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _chat_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.component */ "./src/app/components/chat/chat.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




const routes = [
    {
        path: '',
        component: _chat_component__WEBPACK_IMPORTED_MODULE_1__["ChatComponent"]
    }
];
let ChatRoutingModule = class ChatRoutingModule {
};
ChatRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], ChatRoutingModule);



/***/ }),

/***/ "./src/app/components/chat/chat.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/chat/chat.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".chatRow {\n  bottom: 0 !important;\n  margin-bottom: 0px !important;\n  position: relative;\n  max-height: 700px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0L2NoYXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLDRCQUE0QjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdFJvdyB7XG4gIGJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtaGVpZ2h0OiA3MDBweCAhaW1wb3J0YW50O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/chat/chat.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/chat/chat.component.ts ***!
  \***************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChatComponent = class ChatComponent {
    constructor() {
        this.online_users = [];
    }
    ngOnInit() {
        this.tabElement = document.querySelector('.nav-content');
    }
    ngAfterViewInit() {
        this.tabElement.style.display = 'none';
    }
    online(event) {
        this.online_users = event;
    }
};
ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chat/chat.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat.component.css */ "./src/app/components/chat/chat.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ChatComponent);



/***/ }),

/***/ "./src/app/components/chat/chat.module.ts":
/*!************************************************!*\
  !*** ./src/app/components/chat/chat.module.ts ***!
  \************************************************/
/*! exports provided: ChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ng2_emoji_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-emoji-picker */ "./node_modules/ng2-emoji-picker/esm2015/ng2-emoji-picker.js");
/* harmony import */ var _chat_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat-routing.module */ "./src/app/components/chat/chat-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _chat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat.component */ "./src/app/components/chat/chat.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../message/message.component */ "./src/app/components/message/message.component.ts");








let ChatModule = class ChatModule {
};
ChatModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_chat_component__WEBPACK_IMPORTED_MODULE_6__["ChatComponent"], _message_message_component__WEBPACK_IMPORTED_MODULE_7__["MessageComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _chat_routing_module__WEBPACK_IMPORTED_MODULE_4__["ChatRoutingModule"],
            ng2_emoji_picker__WEBPACK_IMPORTED_MODULE_3__["EmojiPickerModule"].forRoot()
        ]
    })
], ChatModule);



/***/ }),

/***/ "./src/app/components/message/message.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/message/message.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bar-footer {\n  overflow: visible !important;\n}\n.bar-footer textarea {\n  resize: none;\n  height: 25px;\n}\nimg.profile-pic {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  position: absolute;\n  bottom: 10px;\n}\nimg.profile-pic.left {\n  left: 10px;\n}\nimg.profile-pic.right {\n  right: 10px;\n}\nimg.imgMsg {\n  height: auto;\n  width: auto;\n  max-width: 100%;\n  max-height: 100px;\n}\n.message {\n  font-size: 16px;\n}\n.message-detail {\n  white-space: nowrap;\n  font-size: 14px;\n}\n.message-wrapper {\n  position: relative;\n  margin-top: 10px;\n  z-index: 1000 !important;\n}\n.chat-bubble {\n  border-radius: 10px;\n  display: inline-block;\n  padding: 10px 18px;\n  position: relative;\n  margin: 10px;\n  max-width: 80%;\n}\n.chat-bubble:before {\n  content: '\\00a0';\n  display: block;\n  height: 16px;\n  width: 9px;\n  position: absolute;\n  bottom: -7.5px;\n}\n.chat-bubble.left {\n  background: #f1f0f0;\n  float: left;\n  margin-left: 7px;\n}\n.chat-bubble.left:before {\n  background: #f1f0f0;\n  left: 10px;\n  z-index: -1;\n  border-radius: 10px;\n  transform: rotate(70deg) skew(5deg);\n}\n.chat-bubble.right {\n  background: #64b5f6;\n  color: #fff;\n  float: right;\n  margin-right: 7px;\n}\n.chat-bubble.right:before {\n  z-index: -1;\n  background: #64b5f6;\n  border-radius: 10px;\n  right: 10px;\n  transform: rotate(118deg) skew(-5deg);\n}\n.chat-bubble.right a.autolinker {\n  color: #fff;\n  font-weight: bold;\n}\n.user-messages-top-icon {\n  font-size: 28px;\n  display: inline-block;\n  vertical-align: middle;\n  position: relative;\n  top: -3px;\n  right: 5px;\n}\n.msg-header-username {\n  display: inline-block;\n  vertical-align: middle;\n  position: relative;\n  top: -3px;\n}\ninput,\ntextarea,\n.item-input,\n.item-input-wrapper {\n  background: #64b5f6;\n  height: 38px;\n}\n.text-input {\n  background: transparent !important;\n}\n.bold {\n  font-weight: bold;\n  color: white;\n}\n.boldLeft {\n  color: red;\n}\n.cf {\n  clear: both !important;\n}\na.autolinker {\n  color: #3b88c3;\n  text-decoration: none;\n}\n.rowDiv {\n  background: #ffffff !important;\n  height: 61vh !important;\n  max-height: 62vh !important;\n  overflow-y: scroll !important;\n  top: 0px;\n  margin-top: -20px !important;\n}\n.footerDiv {\n  height: 38px;\n  bottom: 0px !important;\n}\n.inputField {\n  height: 38px;\n}\nemoji-picker {\n  width: 100% !important;\n  right: 6px;\n}\nemoji-content {\n  width: 100% !important;\n}\n.emojiBtn {\n  font-size: 20px !important;\n  background: inherit !important;\n  border: none !important;\n  text-align: center !important;\n  margin-left: -10px !important;\n}\n.emojiDiv {\n  width: 40px !important;\n  margin-bottom: 0px !important;\n}\n.imgCircle {\n  width: 50px !important;\n  height: 50px !important;\n  border-radius: 50% !important;\n  margin: 0 auto !important;\n  top: 20px !important;\n}\n.imgCol {\n  width: 50px !important;\n  margin-left: 20px !important;\n  margin-top: 5px !important;\n}\n.nameCol span {\n  font-size: 25px;\n  font-weight: 600 !important;\n  color: white !important;\n  padding: 0px !important;\n}\n.nameCol {\n  margin-left: 28px !important;\n  height: auto !important;\n  width: auto !important;\n  padding: 0px !important;\n}\n.card {\n  height: 60px;\n}\n.inputBox {\n  color: white;\n  padding: 10px;\n}\n.input-field {\n  top: -9px !important;\n}\n.inputRow {\n  margin: 0px 10px 0px 10px !important;\n}\n.isOnline {\n  color: white;\n  margin-top: -5px !important;\n  padding: 0px !important;\n  font-size: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsV0FBVztFQUNYLG1CQUFtQjtFQUVuQixtQ0FBbUM7QUFDckM7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsV0FBVztFQUVYLHFDQUFxQztBQUN2QztBQUNBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWDtBQUNBOzs7O0VBSUUsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0NBQWtDO0FBQ3BDO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLHVCQUF1QjtFQUN2QiwyQkFBMkI7RUFDM0IsNkJBQTZCO0VBQzdCLFFBQVE7RUFDUiw0QkFBNEI7QUFDOUI7QUFFQTtFQUNFLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFVBQVU7QUFDWjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLHVCQUF1QjtFQUN2Qiw2QkFBNkI7RUFDN0IsNkJBQTZCO0FBQy9CO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsNkJBQTZCO0FBQy9CO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDBCQUEwQjtBQUM1QjtBQUVBO0VBQ0UsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7QUFFQTtFQUNFLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhci1mb290ZXIge1xuICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xufVxuLmJhci1mb290ZXIgdGV4dGFyZWEge1xuICByZXNpemU6IG5vbmU7XG4gIGhlaWdodDogMjVweDtcbn1cblxuaW1nLnByb2ZpbGUtcGljIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbn1cbmltZy5wcm9maWxlLXBpYy5sZWZ0IHtcbiAgbGVmdDogMTBweDtcbn1cbmltZy5wcm9maWxlLXBpYy5yaWdodCB7XG4gIHJpZ2h0OiAxMHB4O1xufVxuaW1nLmltZ01zZyB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwcHg7XG59XG5cbi5tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLm1lc3NhZ2UtZGV0YWlsIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubWVzc2FnZS13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB6LWluZGV4OiAxMDAwICFpbXBvcnRhbnQ7XG59XG4uY2hhdC1idWJibGUge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHggMThweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDEwcHg7XG4gIG1heC13aWR0aDogODAlO1xufVxuLmNoYXQtYnViYmxlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDAwYTAnO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogOXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTcuNXB4O1xufVxuLmNoYXQtYnViYmxlLmxlZnQge1xuICBiYWNrZ3JvdW5kOiAjZjFmMGYwO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDdweDtcbn1cbi5jaGF0LWJ1YmJsZS5sZWZ0OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICNmMWYwZjA7XG4gIGxlZnQ6IDEwcHg7XG4gIHotaW5kZXg6IC0xO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDcwZGVnKSBza2V3KDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg3MGRlZykgc2tldyg1ZGVnKTtcbn1cbi5jaGF0LWJ1YmJsZS5yaWdodCB7XG4gIGJhY2tncm91bmQ6ICM2NGI1ZjY7XG4gIGNvbG9yOiAjZmZmO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogN3B4O1xufVxuLmNoYXQtYnViYmxlLnJpZ2h0OmJlZm9yZSB7XG4gIHotaW5kZXg6IC0xO1xuICBiYWNrZ3JvdW5kOiAjNjRiNWY2O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMThkZWcpIHNrZXcoLTVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMThkZWcpIHNrZXcoLTVkZWcpO1xufVxuLmNoYXQtYnViYmxlLnJpZ2h0IGEuYXV0b2xpbmtlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi51c2VyLW1lc3NhZ2VzLXRvcC1pY29uIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtM3B4O1xuICByaWdodDogNXB4O1xufVxuLm1zZy1oZWFkZXItdXNlcm5hbWUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtM3B4O1xufVxuaW5wdXQsXG50ZXh0YXJlYSxcbi5pdGVtLWlucHV0LFxuLml0ZW0taW5wdXQtd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6ICM2NGI1ZjY7XG4gIGhlaWdodDogMzhweDtcbn1cbi50ZXh0LWlucHV0IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbi5ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5ib2xkTGVmdCB7XG4gIGNvbG9yOiByZWQ7XG59XG4uY2Yge1xuICBjbGVhcjogYm90aCAhaW1wb3J0YW50O1xufVxuYS5hdXRvbGlua2VyIHtcbiAgY29sb3I6ICMzYjg4YzM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnJvd0RpdiB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA2MXZoICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDYydmggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsICFpbXBvcnRhbnQ7XG4gIHRvcDogMHB4O1xuICBtYXJnaW4tdG9wOiAtMjBweCAhaW1wb3J0YW50O1xufVxuXG4uZm9vdGVyRGl2IHtcbiAgaGVpZ2h0OiAzOHB4O1xuICBib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuXG4uaW5wdXRGaWVsZCB7XG4gIGhlaWdodDogMzhweDtcbn1cblxuZW1vamktcGlja2VyIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgcmlnaHQ6IDZweDtcbn1cbmVtb2ppLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4uZW1vamlCdG4ge1xuICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogaW5oZXJpdCAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweCAhaW1wb3J0YW50O1xufVxuXG4uZW1vamlEaXYge1xuICB3aWR0aDogNDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmltZ0NpcmNsZSB7XG4gIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbiAgdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pbWdDb2wge1xuICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMjBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcbn1cblxuLm5hbWVDb2wgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5uYW1lQ29sIHtcbiAgbWFyZ2luLWxlZnQ6IDI4cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uY2FyZCB7XG4gIGhlaWdodDogNjBweDtcbn1cblxuLmlucHV0Qm94IHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uaW5wdXQtZmllbGQge1xuICB0b3A6IC05cHggIWltcG9ydGFudDtcbn1cblxuLmlucHV0Um93IHtcbiAgbWFyZ2luOiAwcHggMTBweCAwcHggMTBweCAhaW1wb3J0YW50O1xufVxuXG4uaXNPbmxpbmUge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IC01cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/message/message.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/message/message.component.ts ***!
  \*********************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/constants */ "./src/app/shared/constants.ts");









let MessageComponent = class MessageComponent {
    constructor(tokenService, msgService, route, usersService) {
        this.tokenService = tokenService;
        this.msgService = msgService;
        this.route = route;
        this.usersService = usersService;
        this.messagesArray = [];
        this.typing = false;
        this.isOnline = false;
        this.direction = Math.random() > 0.5 ? (Math.random() > 0.5 ? "top" : "bottom") : Math.random() > 0.5 ? "right" : "left";
        this.toggled = false;
        this.content = " ";
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_6___default()(_shared_constants__WEBPACK_IMPORTED_MODULE_8__["serverUrl"]);
    }
    ngOnInit() {
        this.user = this.tokenService.GetPayload();
        this.route.params.subscribe(params => {
            this.receiver = params.name;
            this.GetUserByUsername(this.receiver);
            this.socket.on("refreshPage", () => {
                this.GetUserByUsername(this.receiver);
            });
        });
        this.socket.on("is_typing", data => {
            if (data.sender === this.receiver) {
                this.typing = true;
            }
        });
        this.socket.on("has_stopped_typing", data => {
            if (data.sender === this.receiver) {
                this.typing = false;
            }
        });
    }
    ngOnChanges(changes) {
        const title = document.querySelector(".nameCol");
        if (changes.users.currentValue.length > 0) {
            const result = lodash__WEBPACK_IMPORTED_MODULE_7___default.a.indexOf(changes.users.currentValue, this.receiver);
            if (result > -1) {
                this.isOnline = true;
                title.style.marginTop = "10px";
            }
            else {
                this.isOnline = false;
                title.style.marginTop = "20px";
            }
        }
    }
    ngAfterViewInit() {
        const params = {
            room1: this.user.username,
            room2: this.receiver
        };
        this.socket.emit("join chat", params);
    }
    GetUserByUsername(name) {
        this.usersService.GetUserByName(name).subscribe(data => {
            this.receiverData = data.result;
            this.GetMessages(this.user._id, data.result._id);
        });
    }
    GetMessages(senderId, receiverId) {
        this.msgService.GetAllMessages(senderId, receiverId).subscribe(data => {
            this.messagesArray = data.messages.message;
        });
    }
    SendMessage() {
        if (this.message) {
            this.msgService
                .SendMessage(this.user._id, this.receiverData._id, this.receiverData.username, this.message)
                .subscribe(data => {
                this.socket.emit("refresh", {});
                this.message = "";
            });
        }
    }
    HandleSelection(event) {
        this.content =
            this.content.slice(0, this._lastCaretEvent.caretOffset) +
                event.char +
                this.content.slice(this._lastCaretEvent.caretOffset);
        this.eventMock = JSON.stringify(event);
        this.message = this.content;
        this.toggled = !this.toggled;
        this.content = "";
    }
    HandleCurrentCaret(event) {
        this._lastCaretEvent = event;
        this.eventPosMock = `{ caretOffset : ${event.caretOffset}, caretRange: Range{...}, textContent: ${event.textContent} }`;
    }
    Toggled() {
        this.toggled = !this.toggled;
    }
    IsTyping() {
        this.socket.emit("start_typing", {
            sender: this.user.username,
            receiver: this.receiver
        });
        if (this.typingMessage) {
            clearTimeout(this.typingMessage);
        }
        this.typingMessage = setTimeout(() => {
            this.socket.emit("stop_typing", {
                sender: this.user.username,
                receiver: this.receiver
            });
        }, 500);
    }
};
MessageComponent.ctorParameters = () => [
    { type: _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] },
    { type: _services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MessageComponent.prototype, "users", void 0);
MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: "app-message",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./message.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/message/message.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./message.component.css */ "./src/app/components/message/message.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"],
        _services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]])
], MessageComponent);



/***/ })

}]);
//# sourceMappingURL=components-chat-chat-module-es2015.js.map