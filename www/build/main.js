webpackJsonp([14],{

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_note_list_service__ = __webpack_require__(97);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewsPage = (function () {
    function NewsPage(navCtrl, navParams, afd, noteListService) {
        // this.getDataFromFireBase();
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afd = afd;
        this.noteListService = noteListService;
        this.noteList = this.noteListService.getNoteList()
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })
            .map(function (changes) { return changes.reverse(); });
    }
    // getDataFromFireBase() {
    //   this.afd.list('Incidents/').valueChanges().subscribe(
    //     data => {
    //       console.log(data)
    //       this.comments = data;
    //     }
    //   )
    // }
    NewsPage.prototype.addData = function () {
        this.afd.list('Incidents/').push(this.dataToAdd);
    };
    return NewsPage;
}());
NewsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-news',template:/*ion-inline-start:"C:\Users\Daniel Danny\Documents\Hoputa_Beta\src\pages\news\news.html"*/'<!--\n  Generated template for the NewsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Latest News</ion-title>\n    <!-- <ion-buttons end>\n        <button navPush="AddNotePage" ion-button>\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-buttons> -->\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  \n  <!-- <ion-item *ngFor="let comment of comments">\n    \n\n    <ion-card>\n      <img src="assets/img/img1.jpeg"/>\n      <ion-card-content>\n        <ion-card-title>\n          Nine Inch Nails Live\n          </ion-card-title>\n        <p>\n          {{comment}}\n        </p>\n      </ion-card-content>\n    </ion-card>\n  </ion-item> -->\n\n  <ion-list>\n   \n      <ion-item *ngFor="let note of noteList | async" \n      detail-push navPush="EditNotePage" [navParams]="{note:note}">\n        <!-- {{note.title}} -->\n        <ion-card>\n\n            <ion-item>\n              <ion-avatar item-start>\n                <img src="assets/img/user2.png">\n              </ion-avatar>\n              <h2>Marty McFly</h2>\n              <p>November 5, 1955</p>\n            </ion-item>\n          \n            <img src="img/advance-card-bttf.png">\n          \n            <ion-card-content>\n              <p>{{note.content}}</p>\n            </ion-card-content>\n          \n            <ion-row>\n              <ion-col>\n                <button ion-button icon-start clear small>\n                  <ion-icon name="eye"></ion-icon>\n                  <div>12 views</div>\n                </button>\n              </ion-col>\n              <ion-col>\n                <button ion-button icon-start clear small>\n                  <ion-icon name="flag"></ion-icon>\n                  <div>State &nbsp;<b style="color:black">{{note.state}}</b></div>\n                </button>\n              </ion-col>\n              <ion-col center text-center>\n                <ion-note>\n                  11h ago\n                </ion-note>\n              </ion-col>\n            </ion-row>\n          \n          </ion-card>\n      </ion-item>\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Daniel Danny\Documents\Hoputa_Beta\src\pages\news\news.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_3__services_note_list_service__["a" /* NoteListService */]])
], NewsPage);

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"C:\Users\Daniel Danny\Documents\Hoputa_Beta\src\pages\about\about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>About Hoputa</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-list>\n        <ion-item>\n          <ion-avatar item-start>\n            <ion-icon name="home" class="ic"></ion-icon>\n          </ion-avatar>\n          <h2>Application Name</h2>\n          <p>Hoputa</p>\n        </ion-item>\n        <ion-item>\n            <ion-avatar item-start>\n              <ion-icon name="mail" class="ic"></ion-icon>\n            </ion-avatar>\n            <h2>Email</h2>\n            <p>danielochinasa@gmail.com</p>\n          </ion-item>\n          <ion-item>\n              <ion-avatar item-start>\n                <ion-icon name="ionic" class="ic"></ion-icon>\n              </ion-avatar>\n              <h2>Copyright</h2>\n              <p>copyright 2018 Daniel Okoro</p>\n              <p>All rights reserved</p>\n            </ion-item>\n            <ion-item>\n                <ion-avatar item-start>\n                  <ion-icon name="star" class="ic"></ion-icon>\n                </ion-avatar>\n                <h2>Rate</h2>\n                <p>Please rate or share feedback</p>\n              </ion-item>\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Daniel Danny\Documents\Hoputa_Beta\src\pages\about\about.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
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
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CategoriesPage = (function () {
    // comments;
    // dataToAdd;
    function CategoriesPage(navCtrl, navParams, afd) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afd = afd;
        // this.getDataFromFireBase();
    }
    return CategoriesPage;
}());
CategoriesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-categories',template:/*ion-inline-start:"C:\Users\Daniel Danny\Documents\Hoputa_Beta\src\pages\categories\categories.html"*/'<!--\n  Generated template for the CategoriesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>News Categories</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    \n</ion-content>\n'/*ion-inline-end:"C:\Users\Daniel Danny\Documents\Hoputa_Beta\src\pages\categories\categories.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"]])
], CategoriesPage);

//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InecInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the InecInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InecInfoPage = (function () {
    function InecInfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InecInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InecInfoPage');
    };
    return InecInfoPage;
}());
InecInfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-inec-info',template:/*ion-inline-start:"C:\Users\Daniel Danny\Documents\Hoputa_Beta\src\pages\inec-info\inec-info.html"*/'<!--\n  Generated template for the InecInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>INEC Info</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-card>\n        <ion-card-header>\n            Headquarters\n        </ion-card-header>\n        <ion-card-content>\n            INEC, Plot 436 Zambezi Crescent, Maitama District FCT, Abuja, NIGERIA\n        </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n        <ion-card-header>\n            Mailing Addresss\n        </ion-card-header>\n        <ion-card-content>\n            PMB 0184 Garki FCT, Abuja, Nigeria\n        </ion-card-content>\n        <ion-card-content>\n            iccc@inec.gov.ng\n        </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n        <ion-card-header>\n            Phone\n        </ion-card-header>\n        <ion-card-content>\n            0700-CALL-INEC\n        </ion-card-content>\n    </ion-card>\n    \n</ion-content>\n'/*ion-inline-end:"C:\Users\Daniel Danny\Documents\Hoputa_Beta\src\pages\inec-info\inec-info.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], InecInfoPage);

//# sourceMappingURL=inec-info.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_imghandler_imghandler__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(75);
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
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, userservice, zone, alertCtrl, imghandler) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userservice = userservice;
        this.zone = zone;
        this.alertCtrl = alertCtrl;
        this.imghandler = imghandler;
    }
    ProfilePage.prototype.ionViewWillEnter = function () {
        this.loaduserdetails();
    };
    ProfilePage.prototype.loaduserdetails = function () {
        var _this = this;
        this.userservice.getuserdetails().then(function (res) {
            _this.displayName = res.displayName;
            _this.userid = res.uid;
            _this.zone.run(function () {
                _this.avatar = res.photoURL;
            });
        });
    };
    ProfilePage.prototype.editimage = function () {
        var _this = this;
        var statusalert = this.alertCtrl.create({
            buttons: ['okay']
        });
        this.imghandler.uploadimage().then(function (url) {
            _this.userservice.updateimage(url).then(function (res) {
                if (res.success) {
                    statusalert.setTitle('Updated');
                    statusalert.setSubTitle('Your profile pic has been changed successfully!!');
                    statusalert.present();
                    _this.zone.run(function () {
                        _this.avatar = url;
                    });
                }
            }).catch(function (err) {
                statusalert.setTitle('Failed');
                statusalert.setSubTitle('Your profile pic was not changed');
                statusalert.present();
            });
        });
    };
    ProfilePage.prototype.editname = function () {
        var _this = this;
        var statusalert = this.alertCtrl.create({
            buttons: ['okay']
        });
        var alert = this.alertCtrl.create({
            title: 'Edit Nickname',
            inputs: [{
                    name: 'nickname',
                    placeholder: 'Nickname'
                }],
            buttons: [{
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Edit',
                    handler: function (data) {
                        if (data.nickname) {
                            _this.userservice.updatedisplayname(data.nickname).then(function (res) {
                                if (res.success) {
                                    statusalert.setTitle('Updated');
                                    statusalert.setSubTitle('Your nickname has been changed successfully!!');
                                    statusalert.present();
                                    _this.zone.run(function () {
                                        _this.displayName = data.nickname;
                                    });
                                }
                                else {
                                    statusalert.setTitle('Failed');
                                    statusalert.setSubTitle('Your nickname was not changed');
                                    statusalert.present();
                                }
                            });
                        }
                    }
                }]
        });
        alert.present();
    };
    ProfilePage.prototype.logout = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().signOut().then(function () {
            _this.navCtrl.parent.parent.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
        });
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Daniel Danny\Documents\Hoputa_Beta\src\pages\profile\profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div class="profile-image" (click)="editimage()">\n        <img src="{{avatar}}">\n    </div>\n      <div>\n        <h2 (click)="editname()">{{displayName}}</h2>\n        <!-- <h2 (click)="editname()">{{userid}}</h2> -->\n      </div>\n      <div>\n        Tap on your pic or nick name to change it.\n      </div>\n      <div class="spacer" style="height: 10px;"></div>\n      <div>\n        <button ion-button round outline color="danger" (click)="logout()">Logout</button>\n      </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Daniel Danny\Documents\Hoputa_Beta\src\pages\profile\profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_imghandler_imghandler__["a" /* ImghandlerProvider */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImghandlerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_file_chooser__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ImghandlerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ImghandlerProvider = (function () {
    function ImghandlerProvider(filechooser) {
        this.filechooser = filechooser;
        this.firestore = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.storage();
        console.log('Hello ImghandlerProvider Provider');
    }
    ImghandlerProvider.prototype.uploadimage = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.filechooser.open().then(function (url) {
                window.FilePath.resolveNativePath(url, function (result) {
                    _this.nativepath = result;
                    window.resolveLocalFileSystemURL(_this.nativepath, function (res) {
                        res.file(function (resFile) {
                            var reader = new FileReader();
                            reader.readAsArrayBuffer(resFile);
                            reader.onloadend = function (evt) {
                                var imgBlob = new Blob([evt.target.result], { type: 'image/jpeg' });
                                var imageStore = _this.firestore.ref('/profileimages').child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid);
                                imageStore.put(imgBlob).then(function (res) {
                                    _this.firestore.ref('/profileimages').child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).getDownloadURL().then(function (url) {
                                        resolve(url);
                                    }).catch(function (err) {
                                        reject(err);
                                    });
                                    // alert('Upload Success');
                                }).catch(function (err) {
                                    reject(err);
                                });
                            };
                        });
                    });
                });
            });
        });
        return promise;
    };
    return ImghandlerProvider;
}());
ImghandlerProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_file_chooser__["a" /* FileChooser */]])
], ImghandlerProvider);

//# sourceMappingURL=imghandler.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuccessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(55);
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
 * Generated class for the SuccessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SuccessPage = (function () {
    function SuccessPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SuccessPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SuccessPage');
    };
    SuccessPage.prototype.home = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    return SuccessPage;
}());
SuccessPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-success',template:/*ion-inline-start:"C:\Users\Daniel Danny\Documents\Hoputa_Beta\src\pages\success\success.html"*/'<!--\n  Generated template for the SuccessPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <!-- <ion-navbar color="primary">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Success</ion-title>\n  </ion-navbar> -->\n\n</ion-header>\n\n\n<ion-content padding class="background">\n\n    <p class="successtext">Report Submitted!</p>\n    <div class="successicon"><ion-icon name="checkmark-circle" ></ion-icon></div>\n    <p class="text2">Thanks for your contribution towards a transparent election.</p>\n    <div class="successicon"><button ion-button round color="light-mine" (click)="home()">GO TO HOME</button></div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Daniel Danny\Documents\Hoputa_Beta\src\pages\success\success.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], SuccessPage);

//# sourceMappingURL=success.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__ = __webpack_require__(275);
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
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TestPage = (function () {
    function TestPage(navCtrl, navParams, geo, googleMaps) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geo = geo;
        this.googleMaps = googleMaps;
        this.zoomValue = 18;
        this.tiltValue = 60;
        this.bearingValue = 140;
    }
    TestPage.prototype.loadMap = function () {
        var _this = this;
        try {
            this.mapElement = document.getElementById('map');
            var mapOption = {
                camera: {
                    target: {
                        lat: 32.8371608,
                        lng: -117.1430907
                    },
                    zoom: 18,
                    tilt: 30
                }
            };
            this.map = this.googleMaps.create(this.mapElement, mapOption);
            this.map.one(__WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY).then(function () {
                alert("Map is Ready to use");
                _this.map.addMarker({
                    title: 'Hi from ionic',
                    icon: 'blue',
                    animation: 'DROP',
                    position: {
                        lat: 32.8371608,
                        lng: -117.1430907
                    }
                }).then(function (marker) {
                    marker.on(__WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MARKER_CLICK).subscribe(function () {
                        alert("Hi there...");
                    });
                });
            });
        }
        catch (error) {
            alert("Map Error" + error);
        }
    };
    TestPage.prototype.startGeolocation = function () {
        var _this = this;
        var geoOptions = { enableHighAccuracy: true };
        this.geo.watchPosition(geoOptions).subscribe(function (data) {
            try {
                _this.latitude = data.coords.latitude;
                _this.longitude = data.coords.longitude;
                _this.map.addMarker({
                    title: 'Hello from Ionic',
                    icon: 'red',
                    animation: 'DROP',
                    position: {
                        lat: _this.latitude,
                        lng: _this.longitude
                    }
                });
                var GOOGLE = { "lat": _this.latitude, "lng": _this.longitude };
                _this.map.moveCamera({
                    'target': GOOGLE,
                    'tilt': _this.tiltValue,
                    'zoom': _this.zoomValue,
                    'bearing': _this.bearingValue
                });
            }
            catch (error) {
                alert("Geo Error" + error);
            }
        });
    };
    TestPage.prototype.stopGeolocation = function () {
    };
    TestPage.prototype.setBearing = function (bearing) {
        this.bearingValue.bearingValue = bearing;
        this.updateMap();
    };
    TestPage.prototype.setTilt = function (tilt) {
        this.tiltValue = tilt;
        this.updateMap();
    };
    TestPage.prototype.setZoom = function (zoom) {
        this.zoomValue = zoom;
        this.updateMap();
    };
    TestPage.prototype.updateMap = function () {
        var GOOGLE = { "lat": this.latitude, "lng": this.longitude };
        this.map.moveCamera({
            'target': GOOGLE,
            'tilt': this.tiltValue,
            'zoom': this.zoomValue,
            'bearing': this.bearingValue
        });
    };
    return TestPage;
}());
TestPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-test',template:/*ion-inline-start:"C:\Users\Daniel Danny\Documents\Hoputa_Beta\src\pages\test\test.html"*/'<!--\n  Generated template for the TestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>Google Map</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <button ion-button (click)="loadMap()">Load Map</button>\n  <button ion-button (click)="startGeolocation()" color="success">Start Tracking</button>\n  <button ion-button (click)="stopGeolocation()" color="danger">Stop</button>\n\n  <div #map id=map style="height: 354px"></div>\n\n  <p>Change Bearing</p>\n  <ion-range style="margin: 0px; padding: 0px" pin=true min="1" max="360" step="1" [(ngModel)]="bearingValue" (ionChange)="setBearing(bearingValue)"></ion-range>\n\n  <p>Tilt Map</p>\n  <ion-range style="margin: 0px; padding: 0px" pin=true min="1" max="10" step="1" [(ngModel)]="tiltValue" (ionChange)="setTilt(tiltValue)"></ion-range>\n\n  <p>Zoom (In or Out)</p>\n  <ion-range style="margin: 0px; padding: 0px" pin=true min="1" max="100" step="1" [(ngModel)]="zoomValue" (ionChange)="setZoom(zoomValue)"></ion-range>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Daniel Danny\Documents\Hoputa_Beta\src\pages\test\test.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__["a" /* GoogleMaps */]])
], TestPage);

//# sourceMappingURL=test.js.map

/***/ }),

/***/ 209:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 209;

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		542,
		13
	],
	"../pages/add-note/add-note.module": [
		543,
		3
	],
	"../pages/categories/categories.module": [
		544,
		12
	],
	"../pages/edit-note/edit-note.module": [
		545,
		2
	],
	"../pages/inec-info/inec-info.module": [
		546,
		11
	],
	"../pages/map/map.module": [
		547,
		10
	],
	"../pages/newgroup/newgroup.module": [
		552,
		1
	],
	"../pages/news/news.module": [
		548,
		9
	],
	"../pages/profile/profile.module": [
		549,
		8
	],
	"../pages/profilepic/profilepic.module": [
		550,
		0
	],
	"../pages/report-incident/report-incident.module": [
		554,
		6
	],
	"../pages/report-incident2/report-incident2.module": [
		555,
		7
	],
	"../pages/success/success.module": [
		551,
		5
	],
	"../pages/test/test.module": [
		553,
		4
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 252;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsPage = (function () {
    function NotificationsPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    NotificationsPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    return NotificationsPage;
}());
NotificationsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-notifications',template:/*ion-inline-start:"C:\Users\Daniel Danny\Documents\Hoputa_Beta\src\pages\notifications\notifications.html"*/'<ion-list class="no-margin">\n  <ion-list-header class="no-margin">\n  	<ion-icon name="notifications" color="primary"></ion-icon>\n  	<span ion-text color="primary" class="bold">Notifications</span>\n  </ion-list-header>\n  <button ion-item color="secondary" class="text-1x" tappable (click)="close()">\n  	<ion-icon name="mail"></ion-icon>\n  	New booking success!\n  </button>\n  <button ion-item color="secondary" class="text-1x" tappable (click)="close()">\n  	<ion-icon name="mail"></ion-icon>\n  	Activity rescheduled\n  </button>\n  <button ion-item class="text-1x" tappable (click)="close()">\n  	<ion-icon name="mail-open" color="secondary"></ion-icon>\n  	<span ion-text color="secondary">Activity rescheduled</span>\n  </button>\n  <button ion-item class="text-1x" tappable (click)="close()">\n  	<ion-icon name="mail-open" color="secondary"></ion-icon>\n  	<span ion-text color="secondary">Activity rescheduled</span>\n  </button>\n</ion-list>\n'/*ion-inline-end:"C:\Users\Daniel Danny\Documents\Hoputa_Beta\src\pages\notifications\notifications.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
], NotificationsPage);

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsPage = (function () {
    function SettingsPage(nav) {
        this.nav = nav;
    }
    // logout
    SettingsPage.prototype.logout = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"C:\Users\Daniel Danny\Documents\Hoputa_Beta\src\pages\settings\settings.html"*/'<!-- -->\n<ion-header class="no-shadow">\n\n  <ion-navbar class="no-border">\n    <ion-title>\n      <ion-icon name="cog" class="text-primary"></ion-icon>\n      <span class="text-primary">Settings</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="common-bg">\n  <!-- User settings-->\n  <ion-item-group>\n    <ion-item-divider color="secondary" class="bold">User Settings</ion-item-divider>\n    <ion-item>\n      <ion-label>Language</ion-label>\n      <ion-select [(ngModel)]="language" cancelText="Cancel" okText="OK">\n        <ion-option value="en-US" selected="true">English (US)</ion-option>\n        <ion-option value="en-GB">English (UK)</ion-option>\n        <ion-option value="en-CA">English (CA)</ion-option>\n        <ion-option value="en-AU">English (AU)</ion-option>\n        <ion-option value="en-IN">English (IN)</ion-option>\n        <ion-option value="pt-BR">Portuguese (BR)</ion-option>\n        <ion-option value="pt-PT">Portuguese (PT)</ion-option>\n        <ion-option value="es-ES">Spanish (ES)</ion-option>\n        <ion-option value="es-AR">Spanish (AR)</ion-option>\n        <ion-option value="es-CO">Spanish (CO)</ion-option>\n        <ion-option value="es-CL">Spanish (CL)</ion-option>\n        <ion-option value="es-MX">Spanish (MX)</ion-option>\n        <ion-option value="zh-CN">Chinese (CN)</ion-option>\n        <ion-option value="zh-TW">Chinese (TW)</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Currency</ion-label>\n      <ion-select [(ngModel)]="currency" cancelText="Cancel" okText="OK">\n        <ion-option value="USD" selected="true">U.S Dollar (US$)</ion-option>\n        <ion-option value="EUR">Euro (€)</ion-option>\n        <ion-option value="GBP">Pound (£)</ion-option>\n        <ion-option value="BRL">Brazilian Real (R$)</ion-option>\n        <ion-option value="CNY">Chinese Yuan</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Units</ion-label>\n      <ion-select [(ngModel)]="munits" cancelText="Cancel" okText="OK">\n        <ion-option value="M" selected="true">Miles (ft²)</ion-option>\n        <ion-option value="K">Kilometers (m²)</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Notifications?</ion-label>\n      <ion-toggle checked="true"></ion-toggle>\n    </ion-item>\n  </ion-item-group>\n  <!-- App settings-->\n  <ion-item-group>\n    <ion-item-divider color="secondary" class="bold">App Settings</ion-item-divider>\n    <ion-item>\n      <span>Clear Private Data</span>\n    </ion-item>\n    <ion-item>\n      <ion-label>Push Notifications?</ion-label>\n      <ion-toggle checked="false"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <span>Privacy Policy</span>\n    </ion-item>\n  </ion-item-group>  \n\n  <!--sign out button-->\n  <button ion-button color="primary" full tappable (click)="logout()">LOG OUT</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Daniel Danny\Documents\Hoputa_Beta\src\pages\settings\settings.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trip_detail_trip_detail__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TripsPage = (function () {
    function TripsPage(nav, tripService) {
        this.nav = nav;
        this.tripService = tripService;
        // set sample data
        this.trips = tripService.getAll();
    }
    // view trip detail
    TripsPage.prototype.viewDetail = function (id) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__trip_detail_trip_detail__["a" /* TripDetailPage */], { id: id });
    };
    return TripsPage;
}());
TripsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-trips',template:/*ion-inline-start:"C:\Users\Daniel Danny\Documents\Hoputa_Beta\src\pages\trips\trips.html"*/'<!-- -->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      <span ion-text>Activities</span>\n    </ion-title>\n  </ion-navbar>\n\n  <!--  -->\n  <ion-toolbar padding color="light">\n    <p ion-text no-margin class="text-white">\n      <strong>4</strong> results found!\n    </p>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content padding class="trips detail-bg">\n  <!--list of trips-->\n  <div class="trip card" *ngFor="let trip of trips" tappable (click)="viewDetail(trip.id)" margin-bottom>\n    <div class="background border-bottom" [ngStyle]="{\'background-image\': \'url(\' + trip.thumb + \')\'}">\n      <div class="background-filter rlt">\n        <div class="align-bottom" padding-left padding-right>\n          <h6 class="pull-left text-white" ion-text>{{ trip.name }}</h6>\n          <h6 class="pull-right text-white" ion-text>{{ trip.price_adult | currency:\'USD\':true }}</h6>\n          <div class="clear"></div>\n        </div>\n      </div>\n    </div>\n    <div class="padding-sm primary-bg">\n      <ion-icon name="time" class="text-white"></ion-icon>\n      <span ion-text class="text-white">{{ trip.time }}</span>\n      <span class="pull-right" ion-text color="light"><strong>per adult</strong> (childs has <span ion-text  class="text-green bold">50% OFF</span>)</span>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Daniel Danny\Documents\Hoputa_Beta\src\pages\trips\trips.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */]])
], TripsPage);

//# sourceMappingURL=trips.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkout_trip_checkout_trip__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TripDetailPage = (function () {
    function TripDetailPage(nav, tripService) {
        this.nav = nav;
        this.tripService = tripService;
        // number of adult
        this.adults = 2;
        // number of children
        this.children = 0;
        // set sample data
        this.trip = tripService.getItem(1);
    }
    // minus adult when click minus button
    TripDetailPage.prototype.minusAdult = function () {
        this.adults--;
    };
    // plus adult when click plus button
    TripDetailPage.prototype.plusAdult = function () {
        this.adults++;
    };
    // minus children when click minus button
    TripDetailPage.prototype.minusChildren = function () {
        this.children--;
    };
    // plus children when click plus button
    TripDetailPage.prototype.plusChildren = function () {
        this.children++;
    };
    // go to checkout page
    TripDetailPage.prototype.checkout = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__checkout_trip_checkout_trip__["a" /* CheckoutTripPage */]);
    };
    return TripDetailPage;
}());
TripDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-trip-detail',template:/*ion-inline-start:"C:\Users\Daniel Danny\Documents\Hoputa_Beta\src\pages\trip-detail\trip-detail.html"*/'<!-- -->\n<ion-header>\n\n  <ion-navbar  color="primary">\n    <ion-title>\n      <span ion-text>{{ trip.name }}</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="common-bg">\n  <!--slides-->\n  <ion-slides class="to-top" pager>\n    <ion-slide *ngFor="let image of trip.images">\n      <img [src]="image" alt="">\n    </ion-slide>\n  </ion-slides>\n\n  <!--services-->\n  <ion-grid class="border-bottom dark-bg">\n    <ion-row>\n      <ion-col text-center>\n        <div class="text-sm">\n          <div>\n            <ion-icon name="time" class="text-white"></ion-icon>\n            <span ion-text color="light">{{ trip.time }}</span>\n            <ion-icon name="checkbox-outline" margin-left class="text-white" *ngIf="trip.free_cancellation"></ion-icon>\n            <span ion-text color="light" *ngIf="trip.free_cancellation">Free cancellation</span>\n            <ion-icon name="list-box" margin-left class="text-white" *ngIf="trip.electric_voucher"></ion-icon>\n            <span ion-text color="light" *ngIf="trip.electric_voucher">Electronic voucher</span>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!--high light-->\n  <div class="border-bottom" padding>\n    <span ion-text color="dark" class="bold">HIGHLIGHT</span>\n    <ul class="highlight">\n      <li *ngFor="let highlight of trip.highlights">\n        <ion-icon name="checkmark" class="text-green"></ion-icon>\n        <span ion-text color="primary">{{ highlight }}</span>\n      </li>\n    </ul>\n  </div>\n\n  <!--booking form-->\n  <div class="booking-form card round" margin>\n    <div class="border-bottom" padding>\n      <h5>{{ trip.sub_name }}</h5>\n\n      <!--choose guest-->\n      <ion-grid class="filters" no-padding margin-top>\n        <ion-row>\n          <ion-col class="adult" width-70>\n            <span ion-text color="primary"><strong>{{ trip.price_adult | currency:\'USD\':true }}</strong> Adults</span>\n          </ion-col>\n          <ion-col width-10 text-center>\n            <ion-icon name="remove-circle" class="text-2x" tappable (click)="minusAdult()" [hidden]="adults < 2"\n                      color="secondary"></ion-icon>\n          </ion-col>\n          <ion-col width-10 text-center>{{ adults }}</ion-col>\n          <ion-col width-10 text-center>\n            <ion-icon name="add-circle" class="text-2x" tappable (click)="plusAdult()" color="secondary"></ion-icon>\n          </ion-col>\n        </ion-row>\n        <ion-row margin-top>\n          <ion-col width-70>\n            <span ion-text color="primary"><strong>{{ trip.price_child | currency:\'USD\':true }}</strong> Child (0-12 years)</span>\n          </ion-col>\n          <ion-col width-10 text-center>\n            <ion-icon name="remove-circle" class="text-2x" tappable (click)="minusChildren()" [hidden]="children < 1"\n                      color="secondary"></ion-icon>\n          </ion-col>\n          <ion-col width-10 text-center>{{ children }}</ion-col>\n          <ion-col width-10 text-center>\n            <ion-icon name="add-circle" class="text-2x" tappable (click)="plusChildren()" color="secondary"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <div padding class="form-bottom">\n<!--       <span ion-text color="dark" class="bold">{{ adults }} Adults</span> -->\n      <!--booking button-->\n      <button ion-button class="pull-right" color="secondary" tappable (click)="checkout()">Book Now {{ adults * trip.price_adult +\n        children * trip.price_child | currency:\'USD\':true }}\n      </button>\n      <div class="clear"></div>\n    </div>\n  </div>\n\n  <!--description-->\n  <div class="border-bottom" padding>\n    <span ion-text color="primary" class="bold">DESCRIPTION</span>\n    <p ion-text>{{ trip.description }}</p>\n  </div>\n\n  <!--address-->\n  <div class="border-bottom" padding>\n    <span ion-text color="primary" class="bold">LOCATION</span>\n    <p ion-text>{{ trip.location }}</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Daniel Danny\Documents\Hoputa_Beta\src\pages\trip-detail\trip-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */]])
], TripDetailPage);

//# sourceMappingURL=trip-detail.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutTripPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CheckoutTripPage = (function () {
    function CheckoutTripPage(nav, tripService, loadingCtrl, toastCtrl) {
        this.nav = nav;
        this.tripService = tripService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        // number of adults
        this.adults = 2;
        // date
        this.date = new Date();
        this.paymethods = 'creditcard';
        // set sample data
        this.trip = tripService.getItem(1);
    }
    // process send button
    CheckoutTripPage.prototype.send = function () {
        var _this = this;
        // send booking info
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        // show message
        var toast = this.toastCtrl.create({
            showCloseButton: true,
            cssClass: 'profile-bg',
            message: 'Book Activity Success!',
            duration: 3000,
            position: 'bottom'
        });
        loader.present();
        setTimeout(function () {
            loader.dismiss();
            toast.present();
            // back to home page
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }, 3000);
    };
    return CheckoutTripPage;
}());
CheckoutTripPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-checkout-trip',template:/*ion-inline-start:"C:\Users\Daniel Danny\Documents\Hoputa_Beta\src\pages\checkout-trip\checkout-trip.html"*/'<!-- -->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Activity Checkout</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="checkout-trip common-bg">\n  <!--trip information-->\n  <div class="trip-info card round">\n    <div class="trip-image border-bottom" [ngStyle]="{\'background-image\': \'url(\' + trip.thumb + \')\'}"></div>\n    <ion-grid padding>\n      <ion-row>\n        <ion-col width-66>\n          <h5 ion-text color="primary">{{ trip.name }}</h5>\n          <div>\n            <span class="bold">{{ trip.sub_name }}</span>\n            <br/>\n            <span ion-text color="dark">{{ adults }} Adults</span>\n          </div>\n          <div margin-top>\n            <span ion-text color="dark">{{ date | date: \'EEE, MMM dd\' }}</span>\n            <br/>\n            <span ion-text>{{ trip.location }}</span>\n          </div>\n          <div margin-top>\n            <ion-icon name="checkmark" class="text-green" *ngIf="trip.free_cancellation"></ion-icon>\n            <span ion-text *ngIf="trip.free_cancellation">Free cancellation</span>\n          </div>\n        </ion-col>\n        <ion-col col-4>\n          <span ion-text>Total with Tax</span>\n          <h5 ion-text color="primary" class="bold" no-margin>{{ trip.price_adult * adults | currency:\'USD\':true }}</h5>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n    <!--more info-->\n  <h5>Guest Details</h5>\n  <div class="card round" margin-top>\n\n    <ion-list no-margin>\n      <ion-item class="primary-bg">\n        <ion-avatar item-start>\n          <img src="assets/img/avatar.jpeg">\n        </ion-avatar>\n        <h2 ion-text class="text-white bold">João Firmino</h2>\n        <p ion-text class="text-secondary bold">User</p>\n      </ion-item>\n    </ion-list>\n\n    <div padding>\n      <h5 ion-text color="secondary">Other Guests</h5>\n\n      <ion-item no-padding>\n        <ion-label color="dark" stacked>Adult 1 Name:</ion-label>\n        <ion-input type="text" placeholder="Ex. Joe Doe" value=""></ion-input>\n      </ion-item>\n      <ion-item no-padding>\n        <ion-label color="dark" stacked>Child 1 Name:</ion-label>\n        <ion-input type="text" placeholder="Ex. Joe Doe" value=""></ion-input>\n      </ion-item>\n    </div>\n  </div>\n\n  <!--payment info-->\n  <h5>Payment Methods</h5>\n  <ion-segment color="secondary" [(ngModel)]="paymethods">\n    <ion-segment-button value="creditcard" >\n      Credit card\n    </ion-segment-button>\n    <ion-segment-button value="paypal">\n      PayPal\n    </ion-segment-button>\n  </ion-segment>\n\n  <div class="card round" margin-top margin-bottom>\n\n    <div [ngSwitch]="paymethods">\n      <ion-grid *ngSwitchCase="\'creditcard\'" padding>\n        <ion-row>\n          <ion-col no-padding text-center>\n            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA0OCA0OCIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgZmlsbDojMTU2NUMwOyIgZD0iTSA0NSAzNSBDIDQ1IDM3LjIxMDkzOCA0My4yMTA5MzggMzkgNDEgMzkgTCA3IDM5IEMgNC43ODkwNjMgMzkgMyAzNy4yMTA5MzggMyAzNSBMIDMgMTMgQyAzIDEwLjc4OTA2MyA0Ljc4OTA2MyA5IDcgOSBMIDQxIDkgQyA0My4yMTA5MzggOSA0NSAxMC43ODkwNjMgNDUgMTMgWiAiLz48cGF0aCBzdHlsZT0iIGZpbGw6I0ZGRkZGRjsiIGQ9Ik0gMTUuMTg3NSAxOSBMIDEyLjU1ODU5NCAyNi44MzIwMzEgQyAxMi41NTg1OTQgMjYuODMyMDMxIDExLjg5NDUzMSAyMy41MTk1MzEgMTEuODI4MTI1IDIzLjEwMTU2MyBDIDEwLjMzMjAzMSAxOS42OTE0MDYgOC4xMjUgMTkuODgyODEzIDguMTI1IDE5Ljg4MjgxMyBMIDEwLjcyNjU2MyAzMCBMIDEwLjcyNjU2MyAyOS45OTYwOTQgTCAxMy44ODY3MTkgMjkuOTk2MDk0IEwgMTguMjU3ODEzIDE5IFogIi8+PHBhdGggc3R5bGU9IiBmaWxsOiNGRkZGRkY7IiBkPSJNIDE3LjY4NzUgMzAgTCAyMC41NTg1OTQgMzAgTCAyMi4yOTY4NzUgMTkgTCAxOS4zOTA2MjUgMTkgWiAiLz48cGF0aCBzdHlsZT0iIGZpbGw6I0ZGRkZGRjsiIGQ9Ik0gMzguMDA3ODEzIDE5IEwgMzQuOTg4MjgxIDE5IEwgMzAuMjc3MzQ0IDMwIEwgMzMuMTI4OTA2IDMwIEwgMzMuNzE4NzUgMjguNDI5Njg4IEwgMzcuMzEyNSAyOC40Mjk2ODggTCAzNy42MTcxODggMzAgTCA0MC4yMzA0NjkgMzAgWiBNIDM0LjUxMTcxOSAyNi4zMjgxMjUgTCAzNi4wNzQyMTkgMjIuMTcxODc1IEwgMzYuODk0NTMxIDI2LjMyODEyNSBaICIvPjxwYXRoIHN0eWxlPSIgZmlsbDojRkZGRkZGOyIgZD0iTSAyNi4zNjcxODggMjIuMjA3MDMxIEMgMjYuMzY3MTg4IDIxLjYwMTU2MyAyNi44NjcxODggMjEuMTQ4NDM4IDI4LjI5Njg3NSAyMS4xNDg0MzggQyAyOS4yMjI2NTYgMjEuMTQ4NDM4IDMwLjI4NTE1NiAyMS44MjQyMTkgMzAuMjg1MTU2IDIxLjgyNDIxOSBMIDMwLjc1MzkwNiAxOS41MTU2MjUgQyAzMC43NTM5MDYgMTkuNTE1NjI1IDI5LjM5NDUzMSAxOSAyOC4wNjI1IDE5IEMgMjUuMDQyOTY5IDE5IDIzLjQ4NDM3NSAyMC40NDE0MDYgMjMuNDg0Mzc1IDIyLjI2OTUzMSBDIDIzLjQ4NDM3NSAyNS41NzgxMjUgMjcuNDY0ODQ0IDI1LjEyNSAyNy40NjQ4NDQgMjYuODIwMzEzIEMgMjcuNDY0ODQ0IDI3LjExMzI4MSAyNy4yMzQzNzUgMjcuNzg1MTU2IDI1LjU3NDIxOSAyNy43ODUxNTYgQyAyMy45MTQwNjMgMjcuNzg1MTU2IDIyLjgxNjQwNiAyNy4xNzU3ODEgMjIuODE2NDA2IDI3LjE3NTc4MSBMIDIyLjMyMDMxMyAyOS4zOTQ1MzEgQyAyMi4zMjAzMTMgMjkuMzk0NTMxIDIzLjM4NjcxOSAzMCAyNS40Mzc1IDMwIEMgMjcuNDk2MDk0IDMwIDMwLjM1NTQ2OSAyOC40NjA5MzggMzAuMzU1NDY5IDI2LjI0NjA5NCBDIDMwLjM1NTQ2OSAyMy41ODU5MzggMjYuMzY3MTg4IDIzLjM5NDUzMSAyNi4zNjcxODggMjIuMjA3MDMxIFogIi8+PHBhdGggc3R5bGU9IiBmaWxsOiNGRkMxMDc7IiBkPSJNIDEyLjIxMDkzOCAyNC45NDUzMTMgTCAxMS4yNDYwOTQgMjAuMTk1MzEzIEMgMTEuMjQ2MDk0IDIwLjE5NTMxMyAxMC44MDg1OTQgMTkuMTY3OTY5IDkuNjcxODc1IDE5LjE2Nzk2OSBDIDguNTM1MTU2IDE5LjE2Nzk2OSA1LjIzNDM3NSAxOS4xNjc5NjkgNS4yMzQzNzUgMTkuMTY3OTY5IEMgNS4yMzQzNzUgMTkuMTY3OTY5IDEwLjg5NDUzMSAyMC44Mzk4NDQgMTIuMjEwOTM4IDI0Ljk0NTMxMyBaICIvPjwvZz48L3N2Zz4=" alt="Visa" />\n            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA0OCA0OCIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgZmlsbDojM0Y1MUI1OyIgZD0iTSA0NSAzNSBDIDQ1IDM3LjIxMDkzOCA0My4yMTA5MzggMzkgNDEgMzkgTCA3IDM5IEMgNC43ODkwNjMgMzkgMyAzNy4yMTA5MzggMyAzNSBMIDMgMTMgQyAzIDEwLjc4OTA2MyA0Ljc4OTA2MyA5IDcgOSBMIDQxIDkgQyA0My4yMTA5MzggOSA0NSAxMC43ODkwNjMgNDUgMTMgWiAiLz48cGF0aCBzdHlsZT0iIGZpbGw6I0ZGQzEwNzsiIGQ9Ik0gNDAgMjQgQyA0MCAyOS41MjM0MzggMzUuNTIzNDM4IDM0IDMwIDM0IEMgMjQuNDc2NTYzIDM0IDIwIDI5LjUyMzQzOCAyMCAyNCBDIDIwIDE4LjQ3NjU2MyAyNC40NzY1NjMgMTQgMzAgMTQgQyAzNS41MjM0MzggMTQgNDAgMTguNDc2NTYzIDQwIDI0IFogIi8+PHBhdGggc3R5bGU9IiBmaWxsOiNGRjNEMDA7IiBkPSJNIDIyLjAxNTYyNSAzMCBDIDIxLjU1MDc4MSAyOS4zODI4MTMgMjEuMTUyMzQ0IDI4LjcxNDg0NCAyMC44Mzk4NDQgMjggTCAyNi4xNjQwNjMgMjggQyAyNi40NDE0MDYgMjcuMzYzMjgxIDI2LjY2MDE1NiAyNi42OTUzMTMgMjYuODAwNzgxIDI2IEwgMjAuMjAzMTI1IDI2IEMgMjAuMDcwMzEzIDI1LjM1NTQ2OSAyMCAyNC42ODc1IDIwIDI0IEwgMjcgMjQgQyAyNyAyMy4zMTI1IDI2LjkyOTY4OCAyMi42NDQ1MzEgMjYuODAwNzgxIDIyIEwgMjAuMTk5MjE5IDIyIEMgMjAuMzQzNzUgMjEuMzA0Njg4IDIwLjU1ODU5NCAyMC42MzY3MTkgMjAuODM5ODQ0IDIwIEwgMjYuMTY0MDYzIDIwIEMgMjUuODUxNTYzIDE5LjI4NTE1NiAyNS40NTMxMjUgMTguNjE3MTg4IDI0Ljk4ODI4MSAxOCBMIDIyLjAxNTYyNSAxOCBDIDIyLjQ0OTIxOSAxNy40MjE4NzUgMjIuOTQ1MzEzIDE2Ljg3ODkwNiAyMy40OTYwOTQgMTYuNDA2MjUgQyAyMS43NDYwOTQgMTQuOTEwMTU2IDE5LjQ4MDQ2OSAxNCAxNyAxNCBDIDExLjQ3NjU2MyAxNCA3IDE4LjQ3NjU2MyA3IDI0IEMgNyAyOS41MjM0MzggMTEuNDc2NTYzIDM0IDE3IDM0IEMgMjAuMjY5NTMxIDM0IDIzLjE2MDE1NiAzMi40MjU3ODEgMjQuOTg0Mzc1IDMwIFogIi8+PC9nPjwvc3ZnPg==" alt="mastercard">\n            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA0OCA0OCIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgZmlsbDojRTFFN0VBOyIgZD0iTSA0NSAzNSBDIDQ1IDM3LjE5OTIxOSA0My4xOTkyMTkgMzkgNDEgMzkgTCA3IDM5IEMgNC44MDA3ODEgMzkgMyAzNy4xOTkyMTkgMyAzNSBMIDMgMTMgQyAzIDEwLjgwMDc4MSA0LjgwMDc4MSA5IDcgOSBMIDQxIDkgQyA0My4xOTkyMTkgOSA0NSAxMC44MDA3ODEgNDUgMTMgWiAiLz48cGF0aCBzdHlsZT0iIGZpbGw6I0ZGNkQwMDsiIGQ9Ik0gNDUgMzUgQyA0NSAzNy4xOTkyMTkgNDMuMTk5MjE5IDM5IDQxIDM5IEwgMTYgMzkgQyAxNiAzOSAzOS42MDE1NjMgMzUuMTk5MjE5IDQ1IDI0IFogTSAyMiAyNCBDIDIyIDI1LjY5OTIxOSAyMy4zMDA3ODEgMjcgMjUgMjcgQyAyNi42OTkyMTkgMjcgMjggMjUuNjk5MjE5IDI4IDI0IEMgMjggMjIuMzAwNzgxIDI2LjY5OTIxOSAyMSAyNSAyMSBDIDIzLjMwMDc4MSAyMSAyMiAyMi4zMDA3ODEgMjIgMjQgWiAiLz48cGF0aCBzdHlsZT0iICIgZD0iTSAxMS4xOTkyMTkgMjEgTCAxMi4zMDA3ODEgMjEgTCAxMi4zMDA3ODEgMjcgTCAxMS4xOTkyMTkgMjcgWiBNIDE3LjE5OTIxOSAyNCBDIDE3LjE5OTIxOSAyNS42OTkyMTkgMTguNSAyNyAyMC4xOTkyMTkgMjcgQyAyMC42OTkyMTkgMjcgMjEuMTAxNTYzIDI2Ljg5ODQzOCAyMS42MDE1NjMgMjYuNjk5MjE5IEwgMjEuNjAxNTYzIDI1LjM5ODQzOCBDIDIxLjE5OTIxOSAyNS44MDA3ODEgMjAuODAwNzgxIDI2IDIwLjE5OTIxOSAyNiBDIDE5LjEwMTU2MyAyNiAxOC4zMDA3ODEgMjUuMTk5MjE5IDE4LjMwMDc4MSAyNCBDIDE4LjMwMDc4MSAyMi44OTg0MzggMTkuMTAxNTYzIDIyIDIwLjE5OTIxOSAyMiBDIDIwLjY5OTIxOSAyMiAyMS4xMDE1NjMgMjIuMTk5MjE5IDIxLjYwMTU2MyAyMi42MDE1NjMgTCAyMS42MDE1NjMgMjEuMzAwNzgxIEMgMjEuMTAxNTYzIDIxLjEwMTU2MyAyMC42OTkyMTkgMjAuODk4NDM4IDIwLjE5OTIxOSAyMC44OTg0MzggQyAxOC41IDIxIDE3LjE5OTIxOSAyMi4zOTg0MzggMTcuMTk5MjE5IDI0IFogTSAzMC42MDE1NjMgMjQuODk4NDM4IEwgMjkgMjEgTCAyNy44MDA3ODEgMjEgTCAzMC4zMDA3ODEgMjcgTCAzMC44OTg0MzggMjcgTCAzMy4zOTg0MzggMjEgTCAzMi4xOTkyMTkgMjEgWiBNIDMzLjg5ODQzOCAyNyBMIDM3LjEwMTU2MyAyNyBMIDM3LjEwMTU2MyAyNiBMIDM1IDI2IEwgMzUgMjQuMzk4NDM4IEwgMzcgMjQuMzk4NDM4IEwgMzcgMjMuMzk4NDM4IEwgMzUgMjMuMzk4NDM4IEwgMzUgMjIgTCAzNy4xMDE1NjMgMjIgTCAzNy4xMDE1NjMgMjEgTCAzMy44OTg0MzggMjEgWiBNIDQxLjUgMjIuODAwNzgxIEMgNDEuNSAyMS42OTkyMTkgNDAuODAwNzgxIDIxIDM5LjUgMjEgTCAzNy44MDA3ODEgMjEgTCAzNy44MDA3ODEgMjcgTCAzOC44OTg0MzggMjcgTCAzOC44OTg0MzggMjQuNjAxNTYzIEwgMzkgMjQuNjAxNTYzIEwgNDAuNjAxNTYzIDI3IEwgNDIgMjcgTCA0MC4xOTkyMTkgMjQuNSBDIDQxIDI0LjMwMDc4MSA0MS41IDIzLjY5OTIxOSA0MS41IDIyLjgwMDc4MSBaIE0gMzkuMTk5MjE5IDIzLjgwMDc4MSBMIDM4Ljg5ODQzOCAyMy44MDA3ODEgTCAzOC44OTg0MzggMjIgTCAzOS4xOTkyMTkgMjIgQyAzOS44OTg0MzggMjIgNDAuMzAwNzgxIDIyLjMwMDc4MSA0MC4zMDA3ODEgMjIuODk4NDM4IEMgNDAuMzAwNzgxIDIzLjM5ODQzOCA0MCAyMy44MDA3ODEgMzkuMTk5MjE5IDIzLjgwMDc4MSBaIE0gNy42OTkyMTkgMjEgTCA2IDIxIEwgNiAyNyBMIDcuNjAxNTYzIDI3IEMgMTAuMTAxNTYzIDI3IDEwLjY5OTIxOSAyNC44OTg0MzggMTAuNjk5MjE5IDI0IEMgMTAuODAwNzgxIDIyLjE5OTIxOSA5LjUgMjEgNy42OTkyMTkgMjEgWiBNIDcuMzk4NDM4IDI2IEwgNy4xMDE1NjMgMjYgTCA3LjEwMTU2MyAyMiBMIDcuNSAyMiBDIDkgMjIgOS42MDE1NjMgMjMgOS42MDE1NjMgMjQgQyA5LjYwMTU2MyAyNC4zOTg0MzggOS41IDI2IDcuMzk4NDM4IDI2IFogTSAxNS4zMDA3ODEgMjMuMzAwNzgxIEMgMTQuNjAxNTYzIDIzIDE0LjM5ODQzOCAyMi44OTg0MzggMTQuMzk4NDM4IDIyLjYwMTU2MyBDIDE0LjM5ODQzOCAyMi4xOTkyMTkgMTQuODAwNzgxIDIyIDE1LjE5OTIxOSAyMiBDIDE1LjUgMjIgMTUuODAwNzgxIDIyLjEwMTU2MyAxNi4xMDE1NjMgMjIuNSBMIDE2LjY5OTIxOSAyMS42OTkyMTkgQyAxNi4xOTkyMTkgMjEuMTk5MjE5IDE1LjY5OTIxOSAyMSAxNSAyMSBDIDE0IDIxIDEzLjE5OTIxOSAyMS42OTkyMTkgMTMuMTk5MjE5IDIyLjY5OTIxOSBDIDEzLjE5OTIxOSAyMy41IDEzLjYwMTU2MyAyMy44OTg0MzggMTQuNjAxNTYzIDI0LjMwMDc4MSBDIDE1LjE5OTIxOSAyNC41IDE1LjY5OTIxOSAyNC42OTkyMTkgMTUuNjk5MjE5IDI1LjE5OTIxOSBDIDE1LjY5OTIxOSAyNS42OTkyMTkgMTUuMzAwNzgxIDI2IDE0LjgwMDc4MSAyNiBDIDE0LjMwMDc4MSAyNiAxMy44MDA3ODEgMjUuNjk5MjE5IDEzLjYwMTU2MyAyNS4xOTkyMTkgTCAxMi44OTg0MzggMjUuODk4NDM4IEMgMTMuMzk4NDM4IDI2LjY5OTIxOSAxNCAyNyAxNC44OTg0MzggMjcgQyAxNi4xMDE1NjMgMjcgMTYuODk4NDM4IDI2LjE5OTIxOSAxNi44OTg0MzggMjUuMTAxNTYzIEMgMTYuODk4NDM4IDI0LjE5OTIxOSAxNi41IDIzLjgwMDc4MSAxNS4zMDA3ODEgMjMuMzAwNzgxIFogIi8+PC9nPjwvc3ZnPg==" alt="discover">\n            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNTIgMjUyIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwyNTJ2LTI1MmgyNTJ2MjUyeiIgZmlsbD0ibm9uZSIvPjxnPjxnIGlkPSJzdXJmYWNlMSI+PHBhdGggZD0iTTIzNi4yNSwxODMuNzVjMCwxMS42MDc0MiAtOS4zOTI1OCwyMSAtMjEsMjFoLTE3OC41Yy0xMS42MDc0MiwwIC0yMSwtOS4zOTI1OCAtMjEsLTIxdi0xMTUuNWMwLC0xMS42MDc0MiA5LjM5MjU4LC0yMSAyMSwtMjFoMTc4LjVjMTEuNjA3NDIsMCAyMSw5LjM5MjU4IDIxLDIxeiIgZmlsbD0iIzE2YTA4NSIvPjxwYXRoIGQ9Ik0xMTYuODMzMDEsMTA1bC0xMS4wOTQ3MywyNC41ODg4N2wtMTEuMDMzMiwtMjQuNTg4ODdoLTE0LjE1MDM5djM1LjMxNDQ2bC0xNS43NzA1MSwtMzUuMzE0NDZoLTExLjkzNTU1bC0xNi4wOTg2MywzNi42NDc0Nmg5LjUzNjEzbDMuNTA2ODQsLTguMTgyNjJoMTguMDI2MzdsMy41ODg4Nyw4LjE4MjYyaDE4LjE5MDQzdi0yNy4yMTM4N2wxMi4wNTg1OSwyNy4yMTM4N2g4LjIwMzEzbDEyLjM0NTcxLC0yNi43NDIxOXYyNi43NDIxOWg5LjA0Mzk0di0zNi42NDc0NnpNNTMuMjE3NzcsMTI1LjU0ODgzbDUuMzczMDQsLTEyLjc5Njg3bDUuNTk4NjQsMTIuNzk2ODh6IiBmaWxsPSIjZmZmZmZmIi8+PHBhdGggZD0iTTE5OC44ODQ3NywxMjIuOTIzODNsMTYuMzY1MjMsLTE3LjgyMTI5aC0xMS42NDg0NGwtMTAuNDU4OTgsMTEuMzYxMzNsLTEwLjEzMDg2LC0xMS40NjM4N2gtMzYuMDExNzJ2MzYuNjQ3NDZoMzQuODQyNzdsMTAuOTcxNjgsLTEyLjEyMDEybDEwLjcwNTA4LDEyLjIyMjY2aDExLjYwNzQyek0xNzcuMDY0NDYsMTMzLjk1NzAzaC0yMS4wNDEwMnYtNy4yMzkyNmgyMC4xMzg2N3YtNi45NTIxNWgtMjAuMTM4Njd2LTYuODcwMTJsMjIuMjA5OTYsMC4wNjE1Mmw4LjkwMDM5LDkuOTY2OHoiIGZpbGw9IiNmZmZmZmYiLz48L2c+PC9nPjwvZz48L3N2Zz4=" alt="Amex">\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item no-padding>\n              <ion-input type="text" placeholder="Card Holder"></ion-input>\n<!--               <ion-icon name="person" item-end no-margin></ion-icon> -->\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item no-padding>\n              <ion-input placeholder="Card Number" type="number"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-4>\n            <ion-item no-padding>\n              <ion-select placeholder="MM" class="max-width full-width">\n                <ion-option value="01">01</ion-option>\n                <ion-option value="02">02</ion-option>\n                <ion-option value="03">03</ion-option>\n                <ion-option value="04">04</ion-option>\n                <ion-option value="05">05</ion-option>\n                <ion-option value="06">06</ion-option>\n                <ion-option value="07">07</ion-option>\n                <ion-option value="08">08</ion-option>\n                <ion-option value="09">09</ion-option>\n                <ion-option value="10">10</ion-option>\n                <ion-option value="11">11</ion-option>\n                <ion-option value="12">12</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n          <ion-col col-4>\n            <ion-item no-padding>\n              <ion-select placeholder="YY" class="max-width full-width">\n                <ion-option value="19">19</ion-option>\n                <ion-option value="20">20</ion-option>\n                <ion-option value="21">21</ion-option>\n                <ion-option value="22">22</ion-option>\n                <ion-option value="23">23</ion-option>\n                <ion-option value="24">24</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n          <ion-col col-4>\n            <ion-item no-padding>\n              <ion-input placeholder="CVV" type="number"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-grid *ngSwitchCase="\'paypal\'" padding>\n        <ion-row>\n          <ion-col no-padding text-center>\n            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA0OCA0OCIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgZmlsbDojMTU2NUMwOyIgZD0iTSAxOC42OTkyMTkgMTMuNzY1NjI1IEwgMTguNzAzMTI1IDEzLjc2OTUzMSBDIDE4LjgwODU5NCAxMy4zMjQyMTkgMTkuMTg3NSAxMyAxOS42NjAxNTYgMTMgTCAzMy4xMzI4MTMgMTMgQyAzMy4xNDg0MzggMTMgMzMuMTY0MDYzIDEyLjk5MjE4OCAzMy4xODM1OTQgMTIuOTkyMTg4IEMgMzIuODk0NTMxIDguMjE0ODQ0IDI4Ljg4NjcxOSA2IDI1LjM1MTU2MyA2IEwgMTEuODc4OTA2IDYgQyAxMS40MDIzNDQgNiAxMS4wMjczNDQgNi4zMzU5MzggMTAuOTIxODc1IDYuNzc3MzQ0IEwgMTAuOTE3OTY5IDYuNzczNDM4IEwgNS4wMjczNDQgMzMuODEyNSBMIDUuMDQyOTY5IDMzLjgxMjUgQyA1LjAyNzM0NCAzMy44Nzg5MDYgNS4wMDM5MDYgMzMuOTM3NSA1LjAwMzkwNiAzNC4wMDc4MTMgQyA1LjAwMzkwNiAzNC41NjI1IDUuNDQ5MjE5IDM1IDYuMDAzOTA2IDM1IEwgMTQuMDc0MjE5IDM1IFogIi8+PHBhdGggc3R5bGU9IiBmaWxsOiMwMzlCRTU7IiBkPSJNIDMzLjE4MzU5NCAxMi45OTIxODggQyAzMy4yMzQzNzUgMTMuODcxMDk0IDMzLjE3OTY4OCAxNC44MjQyMTkgMzIuOTUzMTI1IDE1Ljg3NSBDIDMxLjY3MTg3NSAyMS44NzEwOTQgMjcuMDQyOTY5IDI0Ljk5MjE4OCAyMS4zMjAzMTMgMjQuOTkyMTg4IEMgMjEuMzIwMzEzIDI0Ljk5MjE4OCAxNy44NDc2NTYgMjQuOTkyMTg4IDE3LjAwNzgxMyAyNC45OTIxODggQyAxNi40ODQzNzUgMjQuOTkyMTg4IDE2LjIzODI4MSAyNS4yOTY4NzUgMTYuMTI1IDI1LjUzMTI1IEwgMTQuMzg2NzE5IDMzLjU3ODEyNSBMIDE0LjA4MjAzMSAzNS4wMDc4MTMgTCAxNC4wNzQyMTkgMzUuMDA3ODEzIEwgMTIuODEyNSA0MC44MDQ2ODggTCAxMi44MjQyMTkgNDAuODA0Njg4IEMgMTIuODEyNSA0MC44NzEwOTQgMTIuNzg1MTU2IDQwLjkyOTY4OCAxMi43ODUxNTYgNDEgQyAxMi43ODUxNTYgNDEuNTU0Njg4IDEzLjIzNDM3NSA0MiAxMy43ODUxNTYgNDIgTCAyMS4xMTcxODggNDIgTCAyMS4xMzI4MTMgNDEuOTg4MjgxIEMgMjEuNjA1NDY5IDQxLjk4NDM3NSAyMS45ODA0NjkgNDEuNjQ0NTMxIDIyLjA3ODEyNSA0MS4yMDMxMjUgTCAyMi4wOTM3NSA0MS4xODc1IEwgMjMuOTA2MjUgMzIuNzY5NTMxIEMgMjMuOTA2MjUgMzIuNzY5NTMxIDI0LjAzMTI1IDMxLjk2ODc1IDI0Ljg3ODkwNiAzMS45Njg3NSBDIDI1LjcyMjY1NiAzMS45Njg3NSAyOS4wNTQ2ODggMzEuOTY4NzUgMjkuMDU0Njg4IDMxLjk2ODc1IEMgMzQuNzc3MzQ0IDMxLjk2ODc1IDM5LjQ1NzAzMSAyOC44NjMyODEgNDAuNzM4MjgxIDIyLjg2NzE4OCBDIDQyLjE3OTY4OCAxNi4xMDU0NjkgMzcuMzU5Mzc1IDEzLjAxOTUzMSAzMy4xODM1OTQgMTIuOTkyMTg4IFogIi8+PHBhdGggc3R5bGU9IiBmaWxsOiMyODM1OTM7IiBkPSJNIDE5LjY2MDE1NiAxMyBDIDE5LjE4NzUgMTMgMTguODA4NTk0IDEzLjMyNDIxOSAxOC43MDMxMjUgMTMuNzY5NTMxIEwgMTguNjk5MjE5IDEzLjc2NTYyNSBMIDE2LjEyNSAyNS41MzEyNSBDIDE2LjIzODI4MSAyNS4yOTY4NzUgMTYuNDg0Mzc1IDI0Ljk5MjE4OCAxNy4wMDM5MDYgMjQuOTkyMTg4IEMgMTcuODQ3NjU2IDI0Ljk5MjE4OCAyMS4yMzgyODEgMjQuOTkyMTg4IDIxLjIzODI4MSAyNC45OTIxODggQyAyNi45NjQ4NDQgMjQuOTkyMTg4IDMxLjY3MTg3NSAyMS44NzEwOTQgMzIuOTUzMTI1IDE1Ljg3ODkwNiBDIDMzLjE3OTY4OCAxNC44MjQyMTkgMzMuMjM0Mzc1IDEzLjg3MTA5NCAzMy4xODM1OTQgMTIuOTk2MDk0IEMgMzMuMTY0MDYzIDEyLjk5MjE4OCAzMy4xNDg0MzggMTMgMzMuMTMyODEzIDEzIFogIi8+PC9nPjwvc3ZnPg==" alt="paypal">\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item no-padding>\n              <ion-input type="mail" placeholder="E-mail"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item no-padding>\n              <ion-input placeholder="Password" type="password"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n  </div>\n\n  <!--submit button-->\n  <button ion-button class="round" color="primary" margin-top full tappable (click)="send()">SEND</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Daniel Danny\Documents\Hoputa_Beta\src\pages\checkout-trip\checkout-trip.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
], CheckoutTripPage);

//# sourceMappingURL=checkout-trip.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchLocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {SearchCarsPage} from "../search-cars/search-cars";
var SearchLocationPage = (function () {
    function SearchLocationPage(storage, nav, navParams) {
        this.storage = storage;
        this.nav = nav;
        this.navParams = navParams;
        // places
        this.places = {
            nearby: [
                {
                    id: 1,
                    name: "Current Location"
                },
                {
                    id: 2,
                    name: "Rio de Janeiro, Brazil"
                },
                {
                    id: 3,
                    name: "São Paulo, Brazil"
                },
                {
                    id: 4,
                    name: "New York, United States"
                },
                {
                    id: 5,
                    name: "London, United Kingdom"
                },
                {
                    id: 6,
                    name: "Same as pickup"
                }
            ],
            recent: [
                {
                    id: 1,
                    name: "Rio de Janeiro"
                }
            ]
        };
        this.fromto = this.navParams.data;
    }
    // search by item
    SearchLocationPage.prototype.searchBy = function (item) {
        if (this.fromto === 'from') {
            this.storage.set('pickup', item.name);
        }
        if (this.fromto === 'to') {
            this.storage.set('dropOff', item.name);
        }
        // this.nav.push(SearchCarsPage);
        this.nav.pop();
    };
    return SearchLocationPage;
}());
SearchLocationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-search-location',template:/*ion-inline-start:"C:\Users\Daniel Danny\Documents\Hoputa_Beta\src\pages\search-location\search-location.html"*/'<!-- # -->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-input placeholder="Enter Destination" padding-left autofocus></ion-input>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <div class="list-no-border">\n    <!--nearby places-->\n    <ion-item *ngFor="let item of places.nearby" tappable (click)="searchBy(item)">\n      <ion-icon name="md-locate" item-left color="primary"></ion-icon>\n      <span ion-text color="primary">{{ item.name }}</span>\n    </ion-item>\n    <!--recent places-->\n    <ion-item *ngFor="let item of places.recent" tappable (click)="searchBy(item)">\n      <ion-icon name="md-time" item-left color="primary"></ion-icon>\n      <span ion-text color="primary">{{ item.name }}</span>\n    </ion-item>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Daniel Danny\Documents\Hoputa_Beta\src\pages\search-location\search-location.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], SearchLocationPage);

//# sourceMappingURL=search-location.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterPage = (function () {
    function RegisterPage(fireAuth, toastCtrl, navCtrl, navParams, nav, loadingCtrl, userservice) {
        this.fireAuth = fireAuth;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nav = nav;
        this.loadingCtrl = loadingCtrl;
        this.userservice = userservice;
        this.user = {};
        this.newuser = {
            displayName: '',
            email: '',
            password: ''
        };
    }
    RegisterPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Registering User Please wait...'
        });
        this.loading.present();
    };
    // register and go to home page
    RegisterPage.prototype.register = function () {
        var _this = this;
        var toaster = this.toastCtrl.create({
            duration: 3000,
            position: 'bottom'
        });
        if (this.newuser.email == '' || this.newuser.password == '' || this.newuser.displayName == '') {
            toaster.setMessage('All fields are required here');
            toaster.present();
        }
        else if (this.newuser.password.length < 6) {
            toaster.setMessage('Password is not strong');
            toaster.present();
        }
        else {
            var loader_1 = this.loadingCtrl.create({
                content: 'Registering User Please wait...'
            });
            loader_1.present();
            this.userservice.adduser(this.newuser).then(function (res) {
                loader_1.dismiss();
                if (res.success)
                    _this.nav.push('ProfilepicPage');
                else
                    alert('Error' + res);
            });
        }
    };
    // go to login page
    RegisterPage.prototype.login = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"C:\Users\Daniel Danny\Documents\Hoputa_Beta\src\pages\register\register.html"*/'<!-- -->\n<ion-content class="auth-page">\n  <div class="login-content">\n\n    <!-- Logo -->\n    <div padding text-center>\n      <div class="logo"></div>\n      <h6 ion-text class="text-primary">\n        <strong>Hoputa</strong> is a cross platform app that promotes election transparency via crowd sourced data\n      </h6>\n    </div>\n\n    <!-- Login form -->\n    \n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="person" item-start class="text-primary"></ion-icon>\n          Display Name\n        </ion-label>\n        <ion-input type="text" [(ngModel)]="newuser.displayName"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="mail" item-start class="text-primary"></ion-icon>\n          Email\n        </ion-label>\n        <ion-input type="email" [(ngModel)]="newuser.email"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n          Password\n        </ion-label>\n        <ion-input type="password" [(ngModel)]="newuser.password"></ion-input>\n      </ion-item>\n    \n\n    <div margin-top>\n      <button ion-button block color="dark" tappable (click)="register(newuser)">\n        SIGN UP\n      </button>\n\n      <p text-center ion-text color="secondary">Or Sign Up with:</p>\n\n      <ion-grid>\n        <ion-row>\n          <ion-col col-4>\n            <button ion-button icon-only block class="btn-facebook">\n              <ion-icon name="logo-facebook"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col col-4>\n            <button ion-button icon-only block class="btn-twitter">\n              <ion-icon name="logo-twitter"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col col-4>\n            <button ion-button icon-only block class="btn-gplus">\n              <ion-icon name="logo-googleplus"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <!-- Other links -->\n    <div text-center margin-top>\n      <span ion-text color="primary" tappable (click)="login()">I have an account already</span>\n    </div>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Daniel Danny\Documents\Hoputa_Beta\src\pages\register\register.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WeatherProvider = (function () {
    function WeatherProvider(http) {
        this.http = http;
        this.apiKey = '1e4a0bdb251c64e4';
        console.log('Hello WeatherProvider Provider');
        this.url = 'http://api.wunderground.com/api/' + this.apiKey + '/conditions/q/';
    }
    WeatherProvider.prototype.getWeather = function (state, city) {
        return this.http.get(this.url + state + '/' + city + '.json').map(function (res) { return res; });
    };
    return WeatherProvider;
}());
WeatherProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
], WeatherProvider);

//# sourceMappingURL=weather.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalWeatherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_weather__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { HttpErrorResponse } from '@angular/common/http';
var LocalWeatherPage = (function () {
    function LocalWeatherPage(navCtrl, weatherProvider, storage) {
        this.navCtrl = navCtrl;
        this.weatherProvider = weatherProvider;
        this.storage = storage;
        this.locationList = [
            { city: 'Los Angeles', state: 'CA' },
            { city: 'Miami', state: 'FL' },
            { city: 'New York', state: 'NY' },
            { city: 'Seattle', state: 'WA' }
        ];
    }
    LocalWeatherPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('location').then(function (val) {
            if (val != null) {
                _this.location = JSON.parse(val);
            }
            else {
                _this.location = {
                    state: 'NY',
                    city: 'New York'
                };
            }
            _this.getWeather(_this.location);
        });
    };
    LocalWeatherPage.prototype.getWeather = function (location) {
        var _this = this;
        if (typeof location === 'string') {
            this.location = JSON.parse(location);
            console.log(this.location);
        }
        else {
            this.location = location;
        }
        this.weatherProvider.getWeather(this.location.state, this.location.city).subscribe(function (weather) {
            _this.weather = weather.current_observation;
        });
    };
    return LocalWeatherPage;
}());
LocalWeatherPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-local-weather',template:/*ion-inline-start:"C:\Users\Daniel Danny\Documents\Hoputa_Beta\src\pages\local-weather\local-weather.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Local Weather</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding class="common-bg">\n  <ion-card class="full-width" no-margin margin-bottom>\n    <ion-card-content no-padding>\n\n      <ion-item>\n        <ion-label class="text-1x bold">Select Local</ion-label>\n        <ion-select [(ngModel)]="location" (ionChange)="getWeather(location)">\n          <ion-option *ngFor="let location of locationList" [value]="location">{{ location.city }}</ion-option>\n        </ion-select>\n      </ion-item>\n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-grid class="card" padding *ngIf="weather">\n    <ion-row>\n        <ion-col width-50 offset-25>\n            <h2 class="location text-dark">{{weather.display_location.full}}</h2>\n            <div class="icon"><img src="{{weather.icon_url}}" alt="weather"></div>\n            <h3 class="desc">{{weather.weather}}</h3>\n            <h1 class="temp">{{weather.temp_c}}&deg;</h1>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col width-100>\n            <ion-list>\n\n                <ion-item>\n                <strong>Temp:</strong> {{weather.temperature_string}}\n                </ion-item>\n                 <ion-item>\n                    <strong>Relative Humidity:</strong> {{weather.relative_humidity}}\n                </ion-item>\n                 <ion-item>\n                    <strong>Dewpoint:</strong> {{weather.dewpoint_string}}\n                </ion-item>\n                 <ion-item>\n                    <strong>Visibility:</strong> {{weather.visibility_km}}\n                </ion-item>\n                <ion-item>\n                    <strong>Heat Index:</strong> {{weather.heat_index_string}}\n                </ion-item>\n\n            </ion-list>\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Daniel Danny\Documents\Hoputa_Beta\src\pages\local-weather\local-weather.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__services_weather__["a" /* WeatherProvider */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], LocalWeatherPage);

//# sourceMappingURL=local-weather.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapPage = (function () {
    function MapPage(navCtrl, geolocation) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        console.log(this.mapElement);
    }
    MapPage.prototype.ionViewDidLoad = function () {
        this.loadMap();
        this.startNavigating();
    };
    MapPage.prototype.loadMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            _this.here = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var mapOptions = {
                center: _this.here,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
        }, function (err) {
            console.log(err);
        });
    };
    MapPage.prototype.addMarker = function () {
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });
        var content = "<h4>Information!</h4>";
        this.addInfoWindow(marker, content);
    };
    MapPage.prototype.addInfoWindow = function (marker, content) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    MapPage.prototype.startNavigating = function () {
        var _this = this;
        console.log('Navigation Started!');
        this.geolocation.getCurrentPosition().then(function (position) {
            var directionsService = new google.maps.DirectionsService;
            var directionsDisplay = new google.maps.DirectionsRenderer;
            directionsDisplay.setMap(_this.map);
            directionsDisplay.setPanel(_this.directionsPanel.nativeElement);
            directionsService.route({
                origin: _this.here,
                destination: { lat: 9.956970, lng: 8.890165 },
                travelMode: google.maps.TravelMode['DRIVING']
            }, function (res, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    console.log('Displaying directions!');
                    directionsDisplay.setDirections(res);
                }
                else {
                    console.log('Directions failed! Sorry!');
                    console.warn(status);
                }
            });
        });
    };
    return MapPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], MapPage.prototype, "mapElement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('directionsPanel'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], MapPage.prototype, "directionsPanel", void 0);
MapPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-map',template:/*ion-inline-start:"C:\Users\Daniel Danny\Documents\Hoputa_Beta\src\pages\map\map.html"*/'<!--\n  Generated template for the MapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title> Your Current Location</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="addMarker()"><ion-icon name="add"> </ion-icon>Add Marker</button>\n    </ion-buttons> \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-card>\n        <ion-card-content>\n            <div #directionsPanel></div>\n        </ion-card-content>\n    </ion-card>\n  <div #map id="map"></div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Daniel Danny\Documents\Hoputa_Beta\src\pages\map\map.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
], MapPage);

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportIncidentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report_incident2_report_incident2__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportIncidentPage = (function () {
    function ReportIncidentPage(navController, nav) {
        this.navController = navController;
        this.nav = nav;
        this.appName = 'Ionic App';
        this.initializeState();
        this.initializeDistrict();
        this.initializeWard();
        this.initializePollingunit();
        this.initializeCity();
    }
    ReportIncidentPage.prototype.initializeState = function () {
        this.states = [
            { id: 1, name: 'Abia' },
            { id: 2, name: 'Adamawa' },
            { id: 3, name: 'Akwa Ibom' },
            { id: 4, name: 'Anambara' },
            { id: 5, name: 'Bauchi' },
            { id: 6, name: 'Bayelsa' },
            { id: 7, name: 'Benue' },
            { id: 8, name: 'Borno' },
            { id: 9, name: 'Crossriver' },
            { id: 10, name: 'Delta' },
            { id: 11, name: 'Ebonyi' },
            { id: 12, name: 'Edo' },
            { id: 13, name: 'Ekiti' },
            { id: 14, name: 'Enugu' },
            { id: 15, name: 'Gombe' },
            { id: 16, name: 'Imo' },
            { id: 17, name: 'Jigawa' },
            { id: 18, name: 'Kaduna' },
            { id: 19, name: 'Kano' },
            { id: 20, name: 'Kastina' },
            { id: 21, name: 'Kebbi' },
            { id: 22, name: 'Kogi' },
            { id: 23, name: 'Kwara' },
            { id: 24, name: 'Lagos' },
            { id: 25, name: 'Nassarawa' },
            { id: 26, name: 'Niger' },
            { id: 27, name: 'Ogun' },
            { id: 28, name: 'Oyo' },
            { id: 29, name: 'Plateau' },
            { id: 30, name: 'Rivers' },
            { id: 31, name: 'Sokoto' },
            { id: 32, name: 'Taraba' },
            { id: 33, name: 'Yobe' },
            { id: 34, name: 'Zamfara' },
            { id: 35, name: 'FCT' }
        ];
    };
    ReportIncidentPage.prototype.initializeDistrict = function () {
        this.districts = [
            { id: 1, name: 'Aba North', state_id: 1, state_name: 'Abia' },
            { id: 2, name: 'Aba South', state_id: 1, state_name: 'Abia' },
            { id: 3, name: 'Arochukwu', state_id: 1, state_name: 'Abia' },
            { id: 4, name: 'Bende', state_id: 1, state_name: 'Abia' },
            { id: 5, name: 'Ikwuano', state_id: 1, state_name: 'Abia' },
            { id: 6, name: 'Isiala Ngwa North', state_id: 1, state_name: 'Abia' },
            { id: 7, name: 'Isiala Ngwa South', state_id: 1, state_name: 'Abia' },
            { id: 8, name: 'Isiukwuato', state_id: 1, state_name: 'Abia' },
            { id: 9, name: 'Obi Ngwa', state_id: 1, state_name: 'Abia' },
            { id: 10, name: 'Ohafia', state_id: 1, state_name: 'Abia' },
            { id: 11, name: 'Osisioma Ngwa', state_id: 1, state_name: 'Abia' },
            { id: 12, name: 'Ugwunagbo', state_id: 1, state_name: 'Abia' },
            { id: 13, name: 'Ukwa East', state_id: 1, state_name: 'Abia' },
            { id: 14, name: 'Ukwa West', state_id: 1, state_name: 'Abia' },
            { id: 15, name: 'Umuahia North', state_id: 1, state_name: 'Abia' },
            { id: 16, name: 'Umuahia South', state_id: 1, state_name: 'Abia' },
            { id: 17, name: 'Umunneochi', state_id: 1, state_name: 'Abia' },
            { id: 18, name: 'Demsa', state_id: 2, state_name: 'Adamawa' },
            { id: 18, name: 'Fufore', state_id: 2, state_name: 'Adamawa' },
            { id: 18, name: 'Ganye', state_id: 2, state_name: 'Adamawa' },
            { id: 18, name: 'Girei', state_id: 2, state_name: 'Adamawa' },
            { id: 18, name: 'Gombi', state_id: 2, state_name: 'Adamawa' },
            { id: 18, name: 'Guyuk', state_id: 2, state_name: 'Adamawa' },
            { id: 18, name: 'Hong', state_id: 2, state_name: 'Adamawa' },
            { id: 18, name: 'Jada', state_id: 2, state_name: 'Adamawa' },
            { id: 18, name: 'Lamurde', state_id: 2, state_name: 'Adamawa' },
            { id: 18, name: 'Madagali', state_id: 2, state_name: 'Adamawa' },
            { id: 18, name: 'Maiha', state_id: 2, state_name: 'Adamawa' },
            { id: 18, name: 'Mayo-Belwa', state_id: 2, state_name: 'Adamawa' },
            { id: 18, name: 'Michika', state_id: 2, state_name: 'Adamawa' },
            { id: 18, name: 'Mubi North', state_id: 2, state_name: 'Adamawa' },
            { id: 18, name: 'Mubi South', state_id: 2, state_name: 'Adamawa' },
            { id: 18, name: 'Numan', state_id: 2, state_name: 'Adamawa' },
            { id: 18, name: 'Shelleng', state_id: 2, state_name: 'Adamawa' },
            { id: 18, name: 'Song', state_id: 2, state_name: 'Adamawa' },
            { id: 18, name: 'Toungo', state_id: 2, state_name: 'Adamawa' },
            { id: 18, name: 'Yola North', state_id: 2, state_name: 'Adamawa' },
            { id: 18, name: 'Yola South', state_id: 2, state_name: 'Adamawa' },
            { id: 19, name: 'Barkin Ladi', state_id: 29, state_name: 'Plateau' },
            { id: 20, name: 'Bassa', state_id: 29, state_name: 'Plateau' },
            { id: 21, name: 'Bokkos', state_id: 29, state_name: 'Plateau' },
            { id: 22, name: 'Jos-East', state_id: 29, state_name: 'Plateau' },
            { id: 23, name: 'Jos-North', state_id: 29, state_name: 'Plateau' },
            { id: 24, name: 'Jos-South', state_id: 29, state_name: 'Plateau' },
            { id: 25, name: 'Kanam', state_id: 29, state_name: 'Plateau' },
            { id: 26, name: 'Kanke', state_id: 29, state_name: 'Plateau' },
            { id: 27, name: 'Langtang North', state_id: 29, state_name: 'Plateau' },
            { id: 28, name: 'Langtang South', state_id: 29, state_name: 'Plateau' },
            { id: 29, name: 'Mangu', state_id: 29, state_name: 'Plateau' },
            { id: 30, name: 'Mikang', state_id: 29, state_name: 'Plateau' },
            { id: 31, name: 'Pankshin', state_id: 29, state_name: 'Plateau' },
            { id: 32, name: 'Quaan Pan', state_id: 29, state_name: 'Plateau' },
            { id: 33, name: 'Ryom', state_id: 29, state_name: 'Plateau' },
            { id: 34, name: 'Shendam', state_id: 29, state_name: 'Plateau' },
            { id: 35, name: 'Wase', state_id: 29, state_name: 'Plateau' },
        ];
    };
    ReportIncidentPage.prototype.initializeWard = function () {
        this.wards = [
            { id: 1, name: 'Abia Ward 1', state_id: 1, district_id: 1 },
            { id: 2, name: 'Abia Ward 2', state_id: 1, district_id: 1 },
            { id: 3, name: 'City of Jasin 1', state_id: 1, district_id: 2 },
            { id: 4, name: 'City of Muar 1', state_id: 2, district_id: 3 },
            { id: 5, name: 'City of Muar 2', state_id: 2, district_id: 3 },
            { id: 6, name: 'City of Segamat 1', state_id: 2, district_id: 4 },
            { id: 7, name: 'City of Shah Alam 1', state_id: 3, district_id: 5 },
            { id: 8, name: 'City of Klang 1', state_id: 3, district_id: 6 },
            { id: 9, name: 'City of Klang 2', state_id: 3, district_id: 6 }
        ];
    };
    ReportIncidentPage.prototype.initializePollingunit = function () {
        this.pollingunits = [
            { id: 1, name: 'Abia Ward 1', state_id: 1, district_id: 1 },
            { id: 2, name: 'Abia Ward 2', state_id: 1, district_id: 1 },
            { id: 3, name: 'City of Jasin 1', state_id: 1, district_id: 2 },
            { id: 4, name: 'City of Muar 1', state_id: 2, district_id: 3 },
            { id: 5, name: 'City of Muar 2', state_id: 2, district_id: 3 },
            { id: 6, name: 'City of Segamat 1', state_id: 2, district_id: 4 },
            { id: 7, name: 'City of Shah Alam 1', state_id: 3, district_id: 5 },
            { id: 8, name: 'City of Klang 1', state_id: 3, district_id: 6 },
            { id: 9, name: 'City of Klang 2', state_id: 3, district_id: 6 }
        ];
    };
    ReportIncidentPage.prototype.initializeCity = function () {
        this.cities = [
            { id: 1, name: 'Abia Ward 1', state_id: 1, district_id: 1 },
            { id: 2, name: 'Abia Ward 2', state_id: 1, district_id: 1 },
            { id: 3, name: 'City of Jasin 1', state_id: 1, district_id: 2 },
            { id: 4, name: 'City of Muar 1', state_id: 2, district_id: 3 },
            { id: 5, name: 'City of Muar 2', state_id: 2, district_id: 3 },
            { id: 6, name: 'City of Segamat 1', state_id: 2, district_id: 4 },
            { id: 7, name: 'City of Shah Alam 1', state_id: 3, district_id: 5 },
            { id: 8, name: 'City of Klang 1', state_id: 3, district_id: 6 },
            { id: 9, name: 'City of Klang 2', state_id: 3, district_id: 6 }
        ];
    };
    ReportIncidentPage.prototype.setDistrictValues = function (sState) {
        this.selectedDistricts = this.districts.filter(function (district) { return district.state_id == sState.id; });
    };
    ReportIncidentPage.prototype.setWardValues = function (sDistrict) {
        this.selectedWards = this.wards.filter(function (ward) { return ward.district_id == sDistrict.id; });
    };
    ReportIncidentPage.prototype.setPollingunitValues = function (sDistrict) {
        this.selectedPollingunits = this.pollingunits.filter(function (pollingunit) { return pollingunit.district_id == sDistrict.id; });
    };
    ReportIncidentPage.prototype.setCityValues = function (sDistrict) {
        this.selectedCities = this.cities.filter(function (city) { return city.district_id == sDistrict.id; });
    };
    ReportIncidentPage.prototype.proceed = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__report_incident2_report_incident2__["a" /* ReportIncident2Page */]);
    };
    return ReportIncidentPage;
}());
ReportIncidentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-report-incident',template:/*ion-inline-start:"C:\Users\Daniel Danny\Documents\Hoputa_Beta\src\pages\report-incident\report-incident.html"*/'<!--\n  Generated template for the ReportIncidentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>Report Incident</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-item>\n        <ion-label>State</ion-label>\n        <ion-select (ionChange)="setDistrictValues(sState)" [(ngModel)]="sState">\n             <ion-option [value]="sState" *ngFor = "let sState of states">{{sState.name}}  </ion-option> \n       </ion-select>\n    </ion-item>\n   <ion-item *ngIf="selectedDistricts">\n         <ion-label>LGA</ion-label>\n         <ion-select (ionChange)="setWardValues(sDistrict)" [(ngModel)]="sDistrict">\n               <ion-option [value]="sDistrict" *ngFor = "let sDistrict of selectedDistricts">{{sDistrict.name}}</ion-option>\n         </ion-select>\n    </ion-item>\n    <ion-item *ngIf="selectedWards">\n        <ion-label>Wards</ion-label>\n        <ion-select (ionChange)="setPollingunitValues(sWard)" [(ngModel)]="sWard">\n              <ion-option [value]="sWard" *ngFor = "let sWard of selectedWards">{{sWard.name}}</ion-option>\n        </ion-select>\n   </ion-item>\n   <ion-item *ngIf="selectedWards">\n      <ion-label>Polling Unit</ion-label>\n      <ion-select (ionChange)="setCityValues(sPollingunit)" [(ngModel)]="sPollingunit">\n            <ion-option [value]="sPollingunit" *ngFor = "let sPollingunit of selectedPollingunits">{{sPollingunit.name}}</ion-option>\n      </ion-select>\n   </ion-item>\n   <ion-list *ngIf="selectedCities">\n         <ion-item *ngFor="let city of selectedCities">\n               <p>{{city.name}}</p>\n         </ion-item>\n   </ion-list>\n\n      <!-- The Proceed Footer button -->\n   <ion-footer>\n            <button ion-button full footer (click)="proceed()">PROCEED</button>\n    </ion-footer>\n\n  <!-- <ion-item>\n      <ion-textarea placeholder="Description" cols="8" rows="8" [(ngModel)]="dataToAdd"></ion-textarea> -->\n    <!-- <ion-label>Enter Data</ion-label>\n    <ion-input [(ngModel)]="dataToAdd"></ion-input> -->\n  <!-- </ion-item> -->\n  \n  <!-- <button ion-button (click)="addData()">Add Data</button>\n  <ion-item *ngFor="let item of items">\n      {{item}}\n  </ion-item> -->\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Daniel Danny\Documents\Hoputa_Beta\src\pages\report-incident\report-incident.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], ReportIncidentPage);

//# sourceMappingURL=report-incident.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(447);



// this is the magic wand
Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_activity_service__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_trip_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_weather__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_checkout_trip_checkout_trip__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_home_home__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_login_login__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_notifications_notifications__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_register_register__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_search_location_search_location__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_trip_detail_trip_detail__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_trips_trips__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_local_weather_local_weather__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angularfire2__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularfire2_database__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_angularfire2_firestore__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angularfire2_auth__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__firebase_info__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_map_map__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_report_incident_report_incident__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_test_test__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_report_incident2_report_incident2__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_success_success__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_about_about__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_inec_info_inec_info__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_google_maps__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_geolocation__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_news_news__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_categories_categories__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_user_user__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__providers_imghandler_imghandler__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_file__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ionic_native_file_chooser__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ionic_native_file_path__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_profile_profile__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__providers_incidents_incidents__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__services_note_list_service__ = __webpack_require__(97);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















































// import services
// end import services
// end import services
// import pages
// end import pages
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_checkout_trip_checkout_trip__["a" /* CheckoutTripPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_local_weather_local_weather__["a" /* LocalWeatherPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_notifications_notifications__["a" /* NotificationsPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_search_location_search_location__["a" /* SearchLocationPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_trip_detail_trip_detail__["a" /* TripDetailPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_trips_trips__["a" /* TripsPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_map_map__["a" /* MapPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_report_incident_report_incident__["a" /* ReportIncidentPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_report_incident2_report_incident2__["a" /* ReportIncident2Page */],
            __WEBPACK_IMPORTED_MODULE_32__pages_success_success__["a" /* SuccessPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_test_test__["a" /* TestPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_inec_info_inec_info__["a" /* InecInfoPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_news_news__["a" /* NewsPage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_categories_categories__["a" /* CategoriesPage */],
            __WEBPACK_IMPORTED_MODULE_44__pages_profile_profile__["a" /* ProfilePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_26_angularfire2_auth__["AngularFireAuthModule"],
            __WEBPACK_IMPORTED_MODULE_23_angularfire2__["AngularFireModule"],
            __WEBPACK_IMPORTED_MODULE_23_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_27__firebase_info__["a" /* FIREBASE_INFO */]),
            __WEBPACK_IMPORTED_MODULE_24_angularfire2_database__["AngularFireDatabaseModule"],
            __WEBPACK_IMPORTED_MODULE_25_angularfire2_firestore__["AngularFirestoreModule"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */], {
                scrollPadding: false,
                scrollAssist: true,
                autoFocusAssist: false,
                tabsPlacement: 'top'
            }, {
                links: [
                    { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/add-note/add-note.module#AddNotePageModule', name: 'AddNotePage', segment: 'add-note', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/categories/categories.module#CategoriesPageModule', name: 'CategoriesPage', segment: 'categories', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/edit-note/edit-note.module#EditNotePageModule', name: 'EditNotePage', segment: 'edit-note', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/inec-info/inec-info.module#InecInfoPageModule', name: 'InecInfoPage', segment: 'inec-info', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/news/news.module#NewsPageModule', name: 'NewsPage', segment: 'news', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profilepic/profilepic.module#ProfilepicPageModule', name: 'ProfilepicPage', segment: 'profilepic', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/success/success.module#SuccessPageModule', name: 'SuccessPage', segment: 'success', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/newgroup/newgroup.module#NewgroupPageModule', name: 'NewgroupPage', segment: 'newgroup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/test/test.module#TestPageModule', name: 'TestPage', segment: 'test', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/report-incident/report-incident.module#ReportIncidentPageModule', name: 'ReportIncidentPage', segment: 'report-incident', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/report-incident2/report-incident2.module#ReportIncident2PageModule', name: 'ReportIncident2Page', segment: 'report-incident2', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                name: '__ionic3_start_theme',
                driverOrder: ['indexeddb', 'sqlite', 'websql']
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_checkout_trip_checkout_trip__["a" /* CheckoutTripPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_local_weather_local_weather__["a" /* LocalWeatherPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_notifications_notifications__["a" /* NotificationsPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_search_location_search_location__["a" /* SearchLocationPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_trip_detail_trip_detail__["a" /* TripDetailPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_trips_trips__["a" /* TripsPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_map_map__["a" /* MapPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_report_incident_report_incident__["a" /* ReportIncidentPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_report_incident2_report_incident2__["a" /* ReportIncident2Page */],
            __WEBPACK_IMPORTED_MODULE_32__pages_success_success__["a" /* SuccessPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_test_test__["a" /* TestPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_inec_info_inec_info__["a" /* InecInfoPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_news_news__["a" /* NewsPage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_categories_categories__["a" /* CategoriesPage */],
            __WEBPACK_IMPORTED_MODULE_44__pages_profile_profile__["a" /* ProfilePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_8__services_activity_service__["a" /* ActivityService */],
            __WEBPACK_IMPORTED_MODULE_9__services_trip_service__["a" /* TripService */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_41__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_43__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_42__ionic_native_file_chooser__["a" /* FileChooser */],
            __WEBPACK_IMPORTED_MODULE_36__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_10__services_weather__["a" /* WeatherProvider */],
            __WEBPACK_IMPORTED_MODULE_35__ionic_native_google_maps__["a" /* GoogleMaps */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_39__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_40__providers_imghandler_imghandler__["a" /* ImghandlerProvider */],
            __WEBPACK_IMPORTED_MODULE_45__providers_incidents_incidents__["a" /* IncidentsProvider */],
            __WEBPACK_IMPORTED_MODULE_46__services_note_list_service__["a" /* NoteListService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TRIPS; });
var TRIPS = [
    {
        id: 1,
        name: "Copacabana Beach",
        price_adult: 60,
        price_child: 30,
        time: "12h",
        free_cancellation: 1,
        electric_voucher: 1,
        sub_name: "English Commentary Tour",
        thumb: "assets/img/trip/thumb/trip_1.jpg",
        description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
        location: "Rio de Janeiro, Brazil",
        images: [
            "assets/img/trip/thumb/trip_5.jpg",
            "assets/img/trip/thumb/trip_6.jpg",
            "assets/img/trip/thumb/trip_7.jpg",
            "assets/img/trip/thumb/trip_8.jpg",
        ],
        highlights: [
            "Numerous kiosks",
            "First in a string of Atlantic Ocean-facing beaches",
            "Sand is flanked by mountains in the background",
            "Swing in the turquoise waters",
            "Water Sports",
        ]
    },
    {
        id: 2,
        name: "Christ the Redeemer",
        price_adult: 90,
        price_child: 45,
        time: "4h",
        free_cancellation: 1,
        electric_voucher: 1,
        sub_name: "English Commentary Tour",
        thumb: "assets/img/trip/thumb/trip_2.jpg",
        description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
        location: "Rio de Janeiro, Brazil",
        images: [],
        highlights: []
    },
    {
        id: 3,
        name: "Ipiranga Museum",
        price_adult: 30,
        price_child: 15,
        time: "6h",
        free_cancellation: 1,
        electric_voucher: 1,
        sub_name: "English Commentary Tour",
        thumb: "assets/img/trip/thumb/trip_3.jpg",
        description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
        location: "São Paulo, Brazil",
        images: [],
        highlights: []
    },
    {
        id: 4,
        name: "Fernando de Noronha",
        price_adult: 500,
        price_child: 250,
        time: "24h",
        free_cancellation: 1,
        electric_voucher: 1,
        sub_name: "English Commentary Tour",
        thumb: "assets/img/trip/thumb/trip_4.jpg",
        description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
        location: "Fernando de Noronha, Brazil",
        images: [],
        highlights: []
    }
];
//# sourceMappingURL=mock-trips.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_activities__ = __webpack_require__(528);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActivityService = (function () {
    function ActivityService() {
        this.activities = __WEBPACK_IMPORTED_MODULE_1__mock_activities__["a" /* ACTIVITIES */];
    }
    ActivityService.prototype.getAll = function () {
        return this.activities;
    };
    ActivityService.prototype.getItem = function (id) {
        for (var i = 0; i < this.activities.length; i++) {
            if (this.activities[i].id === parseInt(id)) {
                return this.activities[i];
            }
        }
        return null;
    };
    ActivityService.prototype.remove = function (item) {
        this.activities.splice(this.activities.indexOf(item), 1);
    };
    return ActivityService;
}());
ActivityService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ActivityService);

//# sourceMappingURL=activity-service.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACTIVITIES; });
var ACTIVITIES = [];
//# sourceMappingURL=mock-activities.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_test_test__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_local_weather_local_weather__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_about_about__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_inec_info_inec_info__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_report_incident2_report_incident2__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, keyboard) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.keyboard = keyboard;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        this.appMenuItems = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], icon: 'home' },
            // {title: 'Test', component: TestPage, icon: 'create'},
            { title: 'Report Incident', component: __WEBPACK_IMPORTED_MODULE_11__pages_report_incident2_report_incident2__["a" /* ReportIncident2Page */], icon: 'create' },
            { title: 'View Results', component: __WEBPACK_IMPORTED_MODULE_8__pages_local_weather_local_weather__["a" /* LocalWeatherPage */], icon: 'eye' },
            { title: 'Locate Polling Unit', component: __WEBPACK_IMPORTED_MODULE_6__pages_test_test__["a" /* TestPage */], icon: 'pin' },
            { title: 'View INEC Contact', component: __WEBPACK_IMPORTED_MODULE_10__pages_inec_info_inec_info__["a" /* InecInfoPage */], icon: 'call' },
            { title: 'Local Weather', component: __WEBPACK_IMPORTED_MODULE_8__pages_local_weather_local_weather__["a" /* LocalWeatherPage */], icon: 'partly-sunny' },
            // {title: 'Test', component: TestPage, icon: 'home'},
            { title: 'About App', component: __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */], icon: 'information-circle' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            //*** Control Splash Screen
            // this.splashScreen.show();
            // this.splashScreen.hide();
            //*** Control Status Bar
            _this.statusBar.styleDefault();
            _this.statusBar.overlaysWebView(false);
            //*** Control Keyboard
            // this.keyboard.disableScroll(true);
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logout = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Daniel Danny\Documents\Hoputa_Beta\src\app\app.html"*/'<ion-menu side="left" id="authenticated" [content]="content">\n  <ion-header>\n    <ion-toolbar class="user-profile">\n\n      <ion-grid>\n        <ion-row>\n          <ion-col col-4>\n              <div class="user-avatar">\n                <img src="assets/img/user.png">\n              </div>\n          </ion-col>\n          <ion-col padding-top col-8>\n            <h2 ion-text class="no-margin bold text-white">\n              Daniel Okoro\n            </h2>\n            <span ion-text color="light">User</span>\n          </ion-col>\n        </ion-row>\n\n        <ion-row no-padding class="other-data">\n          <ion-col no-padding class="column">\n            <button ion-button icon-left small full color="light" menuClose disabled>\n              <ion-icon name="contact"></ion-icon>\n              Edit Profile\n            </button>\n          </ion-col>\n          <ion-col no-padding class="column">\n            <button ion-button icon-left small full color="light" menuClose (click)="logout()">\n              <ion-icon name="log-out"></ion-icon>\n              Log Out\n            </button>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content color="primary">\n\n    <ion-list class="user-list">\n      <button ion-item menuClose class="text-1x" *ngFor="let menuItem of appMenuItems" (click)="openPage(menuItem)">\n        <ion-icon item-left [name]="menuItem.icon" color="primary"></ion-icon>\n        <span ion-text color="primary">{{menuItem.title}}</span>\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\Daniel Danny\Documents\Hoputa_Beta\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_INFO; });
var FIREBASE_INFO = {
    apiKey: "AIzaSyAHGp4XKlcmECziGAnRnFASMsmp10SIT9A",
    authDomain: "hoputademo.firebaseapp.com",
    databaseURL: "https://hoputademo.firebaseio.com",
    projectId: "hoputademo",
    storageBucket: "hoputademo.appspot.com",
    messagingSenderId: "472245919987"
};
//# sourceMappingURL=firebase.info.js.map

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncidentsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the IncidentsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var IncidentsProvider = (function () {
    function IncidentsProvider(http) {
        this.http = http;
        console.log('Hello IncidentsProvider Provider');
    }
    return IncidentsProvider;
}());
IncidentsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], IncidentsProvider);

//# sourceMappingURL=incidents.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notifications_notifications__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__trips_trips__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_location_search_location__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__news_news__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__categories_categories__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__profile_profile__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var HomePage = (function () {
    function HomePage(storage, nav, popoverCtrl, toast, fireAuth) {
        this.storage = storage;
        this.nav = nav;
        this.popoverCtrl = popoverCtrl;
        this.toast = toast;
        this.fireAuth = fireAuth;
        // search condition
        this.search = {
            name: "Rio de Janeiro, Brazil",
            date: new Date().toISOString()
        };
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_8__news_news__["a" /* NewsPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_9__categories_categories__["a" /* CategoriesPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_10__profile_profile__["a" /* ProfilePage */];
    }
    // ionViewWillLoad(){
    //   this.fireAuth.authState.subscribe(data => {
    //     if(data.email){
    //       this.toast.create({
    //         message: 'Welcome to Hoputa Monitoring',
    //         duration: 4000,
    //         cssClass: "welcome"
    //       }).present();
    //     }
    //     else{
    //       this.toast.create({
    //         message: 'Could Not Find Authentication details',
    //         duration: 3000
    //       }).present();
    //     }
    //   });
    // }
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        // this.search.pickup = "Rio de Janeiro, Brazil";
        // this.search.dropOff = "Same as pickup";
        this.storage.get('pickup').then(function (val) {
            if (val === null) {
                _this.search.name = "Rio de Janeiro, Brazil";
            }
            else {
                _this.search.name = val;
            }
        }).catch(function (err) {
            console.log(err);
        });
    };
    // go to result page
    HomePage.prototype.doSearch = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__trips_trips__["a" /* TripsPage */]);
    };
    // choose place
    HomePage.prototype.choosePlace = function (from) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__search_location_search_location__["a" /* SearchLocationPage */], from);
    };
    // to go account page
    HomePage.prototype.goToAccount = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__settings_settings__["a" /* SettingsPage */]);
    };
    HomePage.prototype.presentNotifications = function (myEvent) {
        console.log(myEvent);
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__notifications_notifications__["a" /* NotificationsPage */]);
        popover.present({
            ev: myEvent
        });
    };
    HomePage.prototype.filter = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__trips_trips__["a" /* TripsPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Daniel Danny\Documents\Hoputa_Beta\src\pages\home\home.html"*/'<ion-tabs>\n    <ion-tab [root]="tab1Root" tabTitle="Latest News" tabIcon="md-chatboxes" tabsHideOnSubPages="true"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="Categories" tabIcon="logo-buffer" tabsHideOnSubPages="true"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Profile" tabIcon="person"></ion-tab>\n  </ion-tabs>\n\n'/*ion-inline-end:"C:\Users\Daniel Danny\Documents\Hoputa_Beta\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["AngularFireAuth"]])
], HomePage);

//
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var LoginPage = (function () {
    function LoginPage(nav, forgotCtrl, menu, toastCtrl, fireAuth, navCtrl, toast, loadingCtrl) {
        this.nav = nav;
        this.forgotCtrl = forgotCtrl;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.fireAuth = fireAuth;
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.loadingCtrl = loadingCtrl;
        this.user = {};
        this.menu.swipeEnable(false);
    }
    LoginPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait Authenticating...'
        });
        this.loading.present();
    };
    // go to register page
    LoginPage.prototype.register = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    // login and go to home page
    LoginPage.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var info, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        this.showLoader();
                        return [4 /*yield*/, this.fireAuth.auth.signInWithEmailAndPassword(user.email, user.password)];
                    case 1:
                        info = _a.sent();
                        if (!info) return [3 /*break*/, 3];
                        this.loading.dismiss();
                        return [4 /*yield*/, this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */])];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        this.toast.create({
                            message: "Invalid email or password",
                            duration: 3000,
                            cssClass: "error"
                        }).present();
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.forgotPass = function () {
        var _this = this;
        var forgot = this.forgotCtrl.create({
            title: 'Forgot Password?',
            message: "Enter you email address to send a reset link password.",
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Email',
                    type: 'email'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Send',
                    handler: function (data) {
                        console.log('Send clicked');
                        var toast = _this.toastCtrl.create({
                            message: 'Email was sended successfully',
                            duration: 3000,
                            position: 'top',
                            cssClass: 'dark-trans',
                            closeButtonText: 'OK',
                            showCloseButton: true
                        });
                        toast.present();
                    }
                }
            ]
        });
        forgot.present();
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\Daniel Danny\Documents\Hoputa_Beta\src\pages\login\login.html"*/'<!-- -->\n<ion-content padding class="animated fadeIn login auth-page">\n  <div class="login-content">\n\n    <!-- Logo -->\n    <div padding-horizontal text-center class="animated fadeInDown">\n      <div class="logo"></div>\n      <h6 ion-text class="text-primary">\n        <strong>Hoputa</strong> is a cross platform app that promotes election transparency via crowd sourced data\n      </h6>\n    </div>\n\n    <!-- Login form -->\n    \n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="mail" item-start class="text-primary"></ion-icon>\n          Email\n        </ion-label>\n        <ion-input type="email" [(ngModel)]="user.email"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n          Password\n        </ion-label>\n        <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n      </ion-item>\n    \n\n    <p text-right ion-text color="secondary" tappable (click)="forgotPass()"><strong>Forgot Password?</strong></p>\n\n    <div>\n      <button ion-button icon-start block color="dark" tappable (click)="login(user)">\n        <ion-icon name="log-in"></ion-icon>\n        SIGN IN\n      </button>\n\n      <p text-center ion-text color="secondary">Or Sign in with:</p>\n\n      <ion-grid>\n        <ion-row>\n          <ion-col col-4>\n            <button ion-button icon-only block class="btn-facebook">\n              <ion-icon name="logo-facebook"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col col-4>\n            <button ion-button icon-only block class="btn-twitter">\n              <ion-icon name="logo-twitter"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col col-4>\n            <button ion-button icon-only block class="btn-gplus">\n              <ion-icon name="logo-googleplus"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n    </div>\n\n\n    <!-- Other links -->\n    <div text-center margin-top>\n      <span ion-text color="secondary" tappable (click)="register()">New here? <strong>Sign up</strong></span>\n    </div>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Daniel Danny\Documents\Hoputa_Beta\src\pages\login\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_trips__ = __webpack_require__(503);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TripService = (function () {
    function TripService() {
        this.trips = __WEBPACK_IMPORTED_MODULE_1__mock_trips__["a" /* TRIPS */];
    }
    TripService.prototype.getAll = function () {
        return this.trips;
    };
    TripService.prototype.getItem = function (id) {
        for (var i = 0; i < this.trips.length; i++) {
            if (this.trips[i].id === parseInt(id)) {
                return this.trips[i];
            }
        }
        return null;
    };
    TripService.prototype.remove = function (item) {
        this.trips.splice(this.trips.indexOf(item), 1);
    };
    return TripService;
}());
TripService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], TripService);

//# sourceMappingURL=trip-service.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NoteListService = (function () {
    function NoteListService(db) {
        this.db = db;
        this.noteListRef = this.db.list('note-list');
    }
    NoteListService.prototype.getNoteList = function () {
        return this.noteListRef;
    };
    NoteListService.prototype.addNote = function (note) {
        return this.noteListRef.push(note);
    };
    NoteListService.prototype.updateNote = function (note) {
        return this.noteListRef.update(note.key, note);
    };
    NoteListService.prototype.removeNote = function (note) {
        return this.noteListRef.remove(note.key);
    };
    return NoteListService;
}());
NoteListService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["AngularFireDatabase"]])
], NoteListService);

//# sourceMappingURL=note-list.service.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserProvider = (function () {
    function UserProvider(afireauth) {
        this.afireauth = afireauth;
        this.firedata = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/hoputausers');
        // console.log('Hello UserProvider Provider');
    }
    UserProvider.prototype.adduser = function (newuser) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.afireauth.auth.createUserWithEmailAndPassword(newuser.email, newuser.password).then(function () {
                _this.afireauth.auth.currentUser.updateProfile({
                    displayName: newuser.displayName,
                    photoURL: 'https://firebasestorage.googleapis.com/v0/b/hoputademo.appspot.com/o/user_avatar_35720.png?alt=media&token=e3597d02-5429-45b7-a6cc-59158078afe9'
                }).then(function () {
                    _this.firedata.child(_this.afireauth.auth.currentUser.uid).set({
                        uid: _this.afireauth.auth.currentUser.uid,
                        displayName: newuser.displayName,
                        photoURL: 'https://firebasestorage.googleapis.com/v0/b/hoputademo.appspot.com/o/user_avatar_35720.png?alt=media&token=e3597d02-5429-45b7-a6cc-59158078afe9'
                    }).then(function () {
                        resolve({ success: true });
                    }).catch(function (err) {
                        reject(err);
                    });
                }).catch(function (err) {
                    reject(err);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    UserProvider.prototype.updateimage = function (imageurl) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.afireauth.auth.currentUser.updateProfile({
                displayName: _this.afireauth.auth.currentUser.displayName,
                photoURL: imageurl
            }).then(function () {
                __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/users/' + __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).update({
                    displayName: _this.afireauth.auth.currentUser.displayName,
                    photoURL: imageurl,
                    uid: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid
                }).then(function () {
                    resolve({ success: true });
                }).catch(function (err) {
                    reject(err);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    UserProvider.prototype.getuserdetails = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.firedata.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).once('value', function (snapshot) {
                resolve(snapshot.val());
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    UserProvider.prototype.updatedisplayname = function (newname) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.afireauth.auth.currentUser.updateProfile({
                displayName: newname,
                photoURL: _this.afireauth.auth.currentUser.photoURL
            }).then(function () {
                _this.firedata.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).update({
                    displayName: newname,
                    photoURL: _this.afireauth.auth.currentUser.photoURL,
                    uid: _this.afireauth.auth.currentUser.uid
                }).then(function () {
                    resolve({ success: true });
                }).catch(function (err) {
                    reject(err);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    return UserProvider;
}());
UserProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["AngularFireAuth"]])
], UserProvider);

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportIncident2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__success_success__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_note_list_service__ = __webpack_require__(97);
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
 * Generated class for the ReportIncident2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReportIncident2Page = (function () {
    function ReportIncident2Page(navCtrl, navParams, nav, camera, alertCtrl, afd, noteListService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nav = nav;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.afd = afd;
        this.noteListService = noteListService;
        this.note = {
            title: '',
            content: '',
            description: '',
            poll: '',
            state: '',
            lga: ''
        };
        this.appName = 'Ionic App';
        this.initializeState();
        this.initializeDistrict();
        this.initializeWard();
        this.initializePollingunit();
        this.initializeCity();
    }
    ReportIncident2Page.prototype.initializeState = function () {
        this.states = [
            { id: 1, name: 'Abia' },
            { id: 2, name: 'Adamawa' },
            { id: 3, name: 'Akwa Ibom' },
            { id: 4, name: 'Anambara' },
            { id: 5, name: 'Bauchi' },
            { id: 6, name: 'Bayelsa' },
            { id: 7, name: 'Benue' },
            { id: 8, name: 'Borno' },
            { id: 9, name: 'Crossriver' },
            { id: 10, name: 'Delta' },
            { id: 11, name: 'Ebonyi' },
            { id: 12, name: 'Edo' },
            { id: 13, name: 'Ekiti' },
            { id: 14, name: 'Enugu' },
            { id: 15, name: 'Gombe' },
            { id: 16, name: 'Imo' },
            { id: 17, name: 'Jigawa' },
            { id: 18, name: 'Kaduna' },
            { id: 19, name: 'Kano' },
            { id: 20, name: 'Kastina' },
            { id: 21, name: 'Kebbi' },
            { id: 22, name: 'Kogi' },
            { id: 23, name: 'Kwara' },
            { id: 24, name: 'Lagos' },
            { id: 25, name: 'Nassarawa' },
            { id: 26, name: 'Niger' },
            { id: 27, name: 'Ogun' },
            { id: 28, name: 'Oyo' },
            { id: 29, name: 'Plateau' },
            { id: 30, name: 'Rivers' },
            { id: 31, name: 'Sokoto' },
            { id: 32, name: 'Taraba' },
            { id: 33, name: 'Yobe' },
            { id: 34, name: 'Zamfara' },
            { id: 35, name: 'FCT' }
        ];
    };
    ReportIncident2Page.prototype.initializeDistrict = function () {
        this.districts = [
            { id: 1, name: 'Aba North', state_id: 1, state_name: 'Abia' },
            { id: 2, name: 'Aba South', state_id: 1, state_name: 'Abia' },
            { id: 3, name: 'Arochukwu', state_id: 1, state_name: 'Abia' },
            { id: 4, name: 'Bende', state_id: 1, state_name: 'Abia' },
            { id: 5, name: 'Ikwuano', state_id: 1, state_name: 'Abia' },
            { id: 6, name: 'Isiala Ngwa North', state_id: 1, state_name: 'Abia' },
            { id: 7, name: 'Isiala Ngwa South', state_id: 1, state_name: 'Abia' },
            { id: 8, name: 'Isiukwuato', state_id: 1, state_name: 'Abia' },
            { id: 9, name: 'Obi Ngwa', state_id: 1, state_name: 'Abia' },
            { id: 10, name: 'Ohafia', state_id: 1, state_name: 'Abia' },
            { id: 11, name: 'Osisioma Ngwa', state_id: 1, state_name: 'Abia' },
            { id: 12, name: 'Ugwunagbo', state_id: 1, state_name: 'Abia' },
            { id: 13, name: 'Ukwa East', state_id: 1, state_name: 'Abia' },
            { id: 14, name: 'Ukwa West', state_id: 1, state_name: 'Abia' },
            { id: 15, name: 'Umuahia North', state_id: 1, state_name: 'Abia' },
            { id: 16, name: 'Umuahia South', state_id: 1, state_name: 'Abia' },
            { id: 17, name: 'Umunneochi', state_id: 1, state_name: 'Abia' },
            { id: 18, name: 'Demsa', state_id: 2, state_name: 'Adamawa' },
            { id: 18, name: 'Fufore', state_id: 2, state_name: 'Adamawa' },
            { id: 18, name: 'Ganye', state_id: 2, state_name: 'Adamawa' },
            { id: 18, name: 'Girei', state_id: 2, state_name: 'Adamawa' },
            { id: 18, name: 'Gombi', state_id: 2, state_name: 'Adamawa' },
            { id: 18, name: 'Guyuk', state_id: 2, state_name: 'Adamawa' },
            { id: 18, name: 'Hong', state_id: 2, state_name: 'Adamawa' },
            { id: 18, name: 'Jada', state_id: 2, state_name: 'Adamawa' },
            { id: 18, name: 'Lamurde', state_id: 2, state_name: 'Adamawa' },
            { id: 18, name: 'Madagali', state_id: 2, state_name: 'Adamawa' },
            { id: 18, name: 'Maiha', state_id: 2, state_name: 'Adamawa' },
            { id: 18, name: 'Mayo-Belwa', state_id: 2, state_name: 'Adamawa' },
            { id: 18, name: 'Michika', state_id: 2, state_name: 'Adamawa' },
            { id: 18, name: 'Mubi North', state_id: 2, state_name: 'Adamawa' },
            { id: 18, name: 'Mubi South', state_id: 2, state_name: 'Adamawa' },
            { id: 18, name: 'Numan', state_id: 2, state_name: 'Adamawa' },
            { id: 18, name: 'Shelleng', state_id: 2, state_name: 'Adamawa' },
            { id: 18, name: 'Song', state_id: 2, state_name: 'Adamawa' },
            { id: 18, name: 'Toungo', state_id: 2, state_name: 'Adamawa' },
            { id: 18, name: 'Yola North', state_id: 2, state_name: 'Adamawa' },
            { id: 18, name: 'Yola South', state_id: 2, state_name: 'Adamawa' },
            { id: 19, name: 'Barkin Ladi', state_id: 29, state_name: 'Plateau' },
            { id: 20, name: 'Bassa', state_id: 29, state_name: 'Plateau' },
            { id: 21, name: 'Bokkos', state_id: 29, state_name: 'Plateau' },
            { id: 22, name: 'Jos-East', state_id: 29, state_name: 'Plateau' },
            { id: 23, name: 'Jos-North', state_id: 29, state_name: 'Plateau' },
            { id: 24, name: 'Jos-South', state_id: 29, state_name: 'Plateau' },
            { id: 25, name: 'Kanam', state_id: 29, state_name: 'Plateau' },
            { id: 26, name: 'Kanke', state_id: 29, state_name: 'Plateau' },
            { id: 27, name: 'Langtang North', state_id: 29, state_name: 'Plateau' },
            { id: 28, name: 'Langtang South', state_id: 29, state_name: 'Plateau' },
            { id: 29, name: 'Mangu', state_id: 29, state_name: 'Plateau' },
            { id: 30, name: 'Mikang', state_id: 29, state_name: 'Plateau' },
            { id: 31, name: 'Pankshin', state_id: 29, state_name: 'Plateau' },
            { id: 32, name: 'Quaan Pan', state_id: 29, state_name: 'Plateau' },
            { id: 33, name: 'Ryom', state_id: 29, state_name: 'Plateau' },
            { id: 34, name: 'Shendam', state_id: 29, state_name: 'Plateau' },
            { id: 35, name: 'Wase', state_id: 29, state_name: 'Plateau' },
        ];
    };
    ReportIncident2Page.prototype.initializeWard = function () {
        this.wards = [
            { id: 1, name: 'Abia Ward 1', state_id: 1, district_id: 1 },
            { id: 2, name: 'Abia Ward 2', state_id: 1, district_id: 1 },
            { id: 3, name: 'City of Jasin 1', state_id: 1, district_id: 2 },
            { id: 4, name: 'City of Muar 1', state_id: 2, district_id: 3 },
            { id: 5, name: 'City of Muar 2', state_id: 2, district_id: 3 },
            { id: 6, name: 'City of Segamat 1', state_id: 2, district_id: 4 },
            { id: 7, name: 'City of Shah Alam 1', state_id: 3, district_id: 5 },
            { id: 8, name: 'City of Klang 1', state_id: 3, district_id: 6 },
            { id: 9, name: 'City of Klang 2', state_id: 3, district_id: 6 }
        ];
    };
    ReportIncident2Page.prototype.initializePollingunit = function () {
        this.pollingunits = [
            { id: 1, name: 'Abia Ward 1', state_id: 1, district_id: 1 },
            { id: 2, name: 'Abia Ward 2', state_id: 1, district_id: 1 },
            { id: 3, name: 'City of Jasin 1', state_id: 1, district_id: 2 },
            { id: 4, name: 'City of Muar 1', state_id: 2, district_id: 3 },
            { id: 5, name: 'City of Muar 2', state_id: 2, district_id: 3 },
            { id: 6, name: 'City of Segamat 1', state_id: 2, district_id: 4 },
            { id: 7, name: 'City of Shah Alam 1', state_id: 3, district_id: 5 },
            { id: 8, name: 'City of Klang 1', state_id: 3, district_id: 6 },
            { id: 9, name: 'City of Klang 2', state_id: 3, district_id: 6 }
        ];
    };
    ReportIncident2Page.prototype.initializeCity = function () {
        this.cities = [
            { id: 1, name: 'Abia Ward 1', state_id: 1, district_id: 1 },
            { id: 2, name: 'Abia Ward 2', state_id: 1, district_id: 1 },
            { id: 3, name: 'City of Jasin 1', state_id: 1, district_id: 2 },
            { id: 4, name: 'City of Muar 1', state_id: 2, district_id: 3 },
            { id: 5, name: 'City of Muar 2', state_id: 2, district_id: 3 },
            { id: 6, name: 'City of Segamat 1', state_id: 2, district_id: 4 },
            { id: 7, name: 'City of Shah Alam 1', state_id: 3, district_id: 5 },
            { id: 8, name: 'City of Klang 1', state_id: 3, district_id: 6 },
            { id: 9, name: 'City of Klang 2', state_id: 3, district_id: 6 }
        ];
    };
    ReportIncident2Page.prototype.setDistrictValues = function (sState) {
        this.selectedDistricts = this.districts.filter(function (district) { return district.state_id == sState.id; });
    };
    ReportIncident2Page.prototype.setWardValues = function (sDistrict) {
        this.selectedWards = this.wards.filter(function (ward) { return ward.district_id == sDistrict.id; });
    };
    ReportIncident2Page.prototype.setPollingunitValues = function (sDistrict) {
        this.selectedPollingunits = this.pollingunits.filter(function (pollingunit) { return pollingunit.district_id == sDistrict.id; });
    };
    ReportIncident2Page.prototype.setCityValues = function (sDistrict) {
        this.selectedCities = this.cities.filter(function (city) { return city.district_id == sDistrict.id; });
    };
    ReportIncident2Page.prototype.ngOnInit = function () {
        this.photos = [];
    };
    ReportIncident2Page.prototype.deletePhoto = function (index) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Sure you want to delete this photo? Click NO to undo!',
            message: '',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                }, {
                    text: 'Yes',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.photos.splice(index, 1);
                    }
                }
            ]
        });
        confirm.present();
    };
    ReportIncident2Page.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.base64Image = "data:image/jpeg;base64," + imageData;
            _this.photos.push(_this.base64Image);
            _this.photos.reverse();
        }, function (err) {
            console.log(err);
        });
    };
    ReportIncident2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReportIncident2Page');
    };
    ReportIncident2Page.prototype.success = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__success_success__["a" /* SuccessPage */]);
    };
    ReportIncident2Page.prototype.addData = function () {
        this.afd.list('Incidents/').push(this.dataToAdd);
        this.afd.list('Incidents/').push(this.dataToAdd2);
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__success_success__["a" /* SuccessPage */]);
    };
    ReportIncident2Page.prototype.addNote = function (note) {
        var _this = this;
        this.noteListService.addNote(note).then(function (ref) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__success_success__["a" /* SuccessPage */]);
        });
    };
    return ReportIncident2Page;
}());
ReportIncident2Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-report-incident2',template:/*ion-inline-start:"C:\Users\Daniel Danny\Documents\Hoputa_Beta\src\pages\report-incident2\report-incident2.html"*/'<!--\n  Generated template for the ReportIncident2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Report Incident</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<h4 style="color:gray">Report Incident State</h4>\n    <ion-item>\n        <ion-label>State</ion-label>\n          <ion-select [(ngModel)]="note.state" style="color:brown">\n            <ion-option value="abia">Abia</ion-option>\n            <ion-option value="Adamawa">Adamawa</ion-option>\n            <ion-option value="Akwa Ibom">Akwa Ibom</ion-option>\n            <ion-option value="Anambara">Anambara</ion-option>\n            <ion-option value="Bauchi">Bauchi</ion-option>\n            <ion-option value="Bayelsa">Bayelsa</ion-option>\n            <ion-option value="Benue">Benue</ion-option>\n            <ion-option value="Borno">Borno</ion-option>\n            <ion-option value="Cross River">Crossriver</ion-option>\n            <ion-option value="Delta">Delta</ion-option>\n            <ion-option value="Ebonyi">Ebonyi</ion-option>\n            <ion-option value="Edo">Edo</ion-option>\n            <ion-option value="Ekiti">Ekiti</ion-option>\n            <ion-option value="Enugu">Enugu</ion-option>\n            <ion-option value="Gombe">Gombe</ion-option>\n            <ion-option value="Imo">Imo</ion-option>\n            <ion-option value="Jigawa">Jigawa</ion-option>\n            <ion-option value="Kaduna">Kaduna</ion-option>\n            <ion-option value="Kano">Kano</ion-option>\n            <ion-option value="Kastina">Kastina</ion-option>\n            <ion-option value="Kebbi">Kebbi</ion-option>\n            <ion-option value="Kogi">Kogi</ion-option>\n            <ion-option value="Kwara">Kwara</ion-option>\n            <ion-option value="Lagos">Lagos</ion-option>\n            <ion-option value="Nassarawa">Nassarawa</ion-option>\n            <ion-option value="Niger">Niger</ion-option>\n            <ion-option value="Ogun">Ogun</ion-option>\n            <ion-option value="Ondo">Ondo</ion-option>\n            <ion-option value="Oyo">Oyo</ion-option>\n            <ion-option value="Plateau">Plateau</ion-option>\n            <ion-option value="Rivers">Rivers</ion-option>\n            <ion-option value="Sokoto">Sokoto</ion-option>\n            <ion-option value="Taraba">Taraba</ion-option>\n            <ion-option value="yobe">yobe</ion-option>\n            <ion-option value="Zamfara">Zamfara</ion-option>\n            <ion-option value="FCT">FCT</ion-option>\n          </ion-select>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>LGA</ion-label>\n        <ion-input [(ngModel)]="note.lga" placeholder="Enter LGA" style="color:brown"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Polling Unit</ion-label>\n        <ion-input [(ngModel)]="note.poll" placeholder="Enter your polling unit" style="color:brown"></ion-input>\n      </ion-item>\n   \n\n    <h4 style="color:gray">Incident Type</h4>\n\n    <ion-item>\n        <ion-label style="color:black">Ballot Issues</ion-label>\n        <ion-select [(ngModel)]="note.title" style="color:brown">\n          <ion-option value="Ballot Box Stuffing">Ballot Box Stuffing</ion-option>\n          <ion-option value="Tampering with Ballot Box">Tampering with Ballot Box</ion-option>\n          <ion-option value="Spoilt Ballot Box not Preserved">Spoilt Ballot Box not Preserved</ion-option>\n          <ion-option value="Ballot Transport Issues">Ballot Transport Issues</ion-option>\n          <ion-option value="Ballot Boxes Destroyed">Ballot Boxes Destroyed</ion-option>\n          <ion-option value="Ballot Boxes Hijacked">Ballot Boxes Hijacked</ion-option>\n          <ion-option value="Ballots Not Counted in Transparent manner">Ballots Not Counted in Transparent manner</ion-option>\n          <ion-option value="Disagree with Results">Disagree with Results</ion-option>\n          <ion-option value="Others">Others</ion-option>\n        </ion-select>\n    </ion-item>\n\n    <ion-item>\n        <ion-label style="color:black">Polling Station Issues</ion-label>\n        <ion-select [(ngModel)]="note.title" style="color:brown">\n          <ion-option value="Voting Suspended">Voting Suspended</ion-option>\n          <ion-option value="Ineligible voters allowed">Ineligible voters allowed</ion-option>\n          <ion-option value="Wrong or Inadequate voting Materials">Wrong or Inadequate voting Materials</ion-option>\n          <ion-option value="Physical challenged or Illustrates not assisted">Physical challenged or Illustrates not assisted</ion-option>\n          <ion-option value="Voter Impersonation">Voter Impersonation</ion-option>\n          <ion-option value="Voter Assistance">Voter Assistance</ion-option>\n          <ion-option value="Vote Buying or Bribery">Vote Buying or Bribery</ion-option>\n          <ion-option value="Polling Station Opening">Polling Station Opening</ion-option>\n          <ion-option value="Polling Station Campaigns">Polling Station Campaigns</ion-option>\n          <ion-option value="Smart Card Reader Issues">Smart Card Reader Issues</ion-option>\n          <ion-option value="Accreditation Issues">Accreditation Issues</ion-option>\n          <ion-option value="Observers/Media not Granted Access">Observers/Media not Granted Access</ion-option>\n        </ion-select>\n    </ion-item>\n\n    <ion-item>\n        <ion-label style="color:black">Security</ion-label>\n        <ion-select [(ngModel)]="note.title" style="color:brown">\n          <ion-option value="Police Violence">Police Violence</ion-option>\n          <ion-option value="Mobilization towards violence">Mobilization towards violence</ion-option>\n          <ion-option value="Gunshots">Gunshots</ion-option>\n          <ion-option value="Intimidation or Harassment">Intimidation or Harassment</ion-option>\n          <ion-option value="Vendalism">Vendalism</ion-option>\n          <ion-option value="Attacks">Attacks</ion-option>\n          <ion-option value="Heavy Security Presence">Heavy Security Presence</ion-option>\n          <ion-option value="Civilian Violence">Civilian Violence</ion-option>\n          <ion-option value="Police Arrest">Police Arrest</ion-option>\n          <ion-option value="Deaths">Deaths</ion-option>\n          <ion-option value="Mass Protest">Mass Protest</ion-option>\n          <ion-option value="Others">Others</ion-option>\n        </ion-select>\n    </ion-item>\n\n    <ion-item>\n        <ion-label style="color:black">Collation Center Issue</ion-label>\n        <ion-select [(ngModel)]= "note.title" style="color:brown">\n          <ion-option value="Observers/Media not Granted Access">Observers/Media not Granted Access</ion-option>\n          <ion-option value="Non sharing of Information">Non sharing of Information</ion-option>\n          <ion-option value="No Security Official">No Security Official</ion-option>\n          <ion-option value="Ballot Box Stuffing">Ballot Box Stuffing</ion-option>\n          <ion-option value="Others">Others</ion-option>\n        </ion-select>\n    </ion-item>\n\n    <ion-item>\n        <ion-label style="color:black">Positive Events</ion-label>\n        <ion-select [(ngModel)]= "note.title" style="color:brown">\n          <ion-option value="Police Peace Efforts">Police Peace Effort</ion-option>\n          <ion-option value="Civilian Peace Efforts">Civilian Peace Efforts</ion-option>\n          <ion-option value="Everything is Fine">Everything is Fine</ion-option>\n          <ion-option value="Others">Others</ion-option>\n        </ion-select>\n    </ion-item>\n\n    <button ion-button full (click)="takePhoto()" >\n      <ion-icon name="camera"></ion-icon>&nbsp; &nbsp;Capture Image\n    </button>\n\n    <ion-grid>\n      <ion-row>\n          <ion-col col-6 *ngFor="let photo of photos; let id = index">\n              <ion-card class="block">\n                <ion-icon name="trash" class="deleteIcon" (click)="deletePhoto(id)"></ion-icon>\n                <img [src]="photo" *ngIf="photo" />\n              </ion-card>\n          </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-item>\n        <ion-textarea placeholder="Description" cols="8" rows="8" [(ngModel)]="note.content"></ion-textarea>\n    </ion-item>\n\n    <!-- <ion-item>\n      <ion-textarea placeholder="Description" cols="8" rows="8" [(ngModel)]="dataToAdd"></ion-textarea> -->\n    <!-- <ion-label>Enter Data</ion-label>\n    <ion-input [(ngModel)]="dataToAdd"></ion-input> -->\n  <!-- </ion-item> -->\n  \n  <!-- <button ion-button (click)="addData()">Add Data</button> -->\n\n    <!-- The Proceed Footer button -->\n   \n      <button ion-button block footer (click)="addNote(note)">REPORT NOW</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Daniel Danny\Documents\Hoputa_Beta\src\pages\report-incident2\report-incident2.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_5__services_note_list_service__["a" /* NoteListService */]])
], ReportIncident2Page);

//# sourceMappingURL=report-incident2.js.map

/***/ })

},[326]);
//# sourceMappingURL=main.js.map