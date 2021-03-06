webpackJsonp([0],{

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilepicPageModule", function() { return ProfilepicPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profilepic__ = __webpack_require__(558);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilepicPageModule = (function () {
    function ProfilepicPageModule() {
    }
    return ProfilepicPageModule;
}());
ProfilepicPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__profilepic__["a" /* ProfilepicPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profilepic__["a" /* ProfilepicPage */]),
        ],
    })
], ProfilepicPageModule);

//# sourceMappingURL=profilepic.module.js.map

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilepicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_imghandler_imghandler__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ProfilepicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilepicPage = (function () {
    function ProfilepicPage(navCtrl, navParams, imgservice, zone, userservice, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imgservice = imgservice;
        this.zone = zone;
        this.userservice = userservice;
        this.loadingCtrl = loadingCtrl;
        // photoURL: any;
        this.imgurl = 'https://firebasestorage.googleapis.com/v0/b/hoputademo.appspot.com/o/user_avatar_35720.png?alt=media&token=e3597d02-5429-45b7-a6cc-59158078afe9';
        this.moveon = true;
    }
    ProfilepicPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad ProfilepicPage');
    };
    ProfilepicPage.prototype.chooseimage = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        loader.present();
        this.imgservice.uploadimage().then(function (uploadedurl) {
            loader.dismiss();
            _this.zone.run(function () {
                _this.imgurl = uploadedurl;
                _this.moveon = false;
            });
        });
    };
    ProfilepicPage.prototype.updateproceed = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Please Wait while we upload your image...'
        });
        loader.present();
        this.userservice.updateimage(this.imgurl).then(function (res) {
            loader.dismiss();
            if (res.success) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
            }
            else {
                alert(res);
            }
        });
    };
    ProfilepicPage.prototype.proceed = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    return ProfilepicPage;
}());
ProfilepicPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profilepic',template:/*ion-inline-start:"C:\Users\Daniel Danny\Documents\Hoputa_Beta\src\pages\profilepic\profilepic.html"*/'<!--\n  Generated template for the ProfilepicPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Profile Picture</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div class="profile-image">\n    <img src="{{imgurl}}">\n  </div>\n  <div>\n    <button ion-button round outlne (click)="chooseimage()">Choose a Profile Image</button>\n  </div>\n  <div [hidden]="!moveon">\n      <button ion-button round outlne (click)="proceed()">Skip this Step</button>\n  </div>\n  <div [hidden]="moveon">\n      <button ion-button round outlne (click)="updateproceed()">Upload & Proceed</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Daniel Danny\Documents\Hoputa_Beta\src\pages\profilepic\profilepic.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_imghandler_imghandler__["a" /* ImghandlerProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], ProfilepicPage);

//# sourceMappingURL=profilepic.js.map

/***/ })

});
//# sourceMappingURL=0.js.map