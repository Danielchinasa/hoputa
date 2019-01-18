webpackJsonp([2],{

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditNotePageModule", function() { return EditNotePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_note__ = __webpack_require__(557);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditNotePageModule = (function () {
    function EditNotePageModule() {
    }
    return EditNotePageModule;
}());
EditNotePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__edit_note__["a" /* EditNotePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_note__["a" /* EditNotePage */]),
        ],
    })
], EditNotePageModule);

//# sourceMappingURL=edit-note.module.js.map

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditNotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_note_list_service__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_news_news__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditNotePage = (function () {
    function EditNotePage(navCtrl, navParams, noteListService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.noteListService = noteListService;
        this.note = {
            title: '',
            content: '',
            description: '',
            poll: '',
            state: '',
            lga: ''
        };
    }
    EditNotePage.prototype.ionViewDidLoad = function () {
        this.note = this.navParams.get('note');
    };
    EditNotePage.prototype.updateNote = function (note) {
        var _this = this;
        this.noteListService.updateNote(note).then(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_news_news__["a" /* NewsPage */]);
        });
    };
    EditNotePage.prototype.removeNote = function (note) {
        var _this = this;
        this.noteListService.removeNote(note).then(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_news_news__["a" /* NewsPage */]);
        });
    };
    return EditNotePage;
}());
EditNotePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-edit-note',template:/*ion-inline-start:"C:\Users\Daniel Danny\Documents\Hoputa_Beta\src\pages\edit-note\edit-note.html"*/'<ion-header>\n \n    <ion-navbar>\n      <ion-title>{{note?.title}}</ion-title>\n    </ion-navbar>\n   \n  </ion-header>\n   \n  <ion-content padding>\n   \n    <ion-item>\n      <ion-label>Title</ion-label>\n      <ion-input [(ngModel)]="note.title" placeholder="Java Sample Approach"></ion-input>\n    </ion-item>\n   \n    <ion-item>\n      <ion-label>Content</ion-label>\n      <ion-textarea [(ngModel)]="note.content" placeholder="Java Technology - Spring Framework"></ion-textarea>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Description</ion-label>\n        <ion-textarea [(ngModel)]="note.description" placeholder="description"></ion-textarea>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>State</ion-label>\n        <ion-textarea [(ngModel)]="note.state" placeholder="state"></ion-textarea>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>LGA</ion-label>\n        <ion-textarea [(ngModel)]="note.lga" placeholder="lga"></ion-textarea>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Polling Unit</ion-label>\n        <ion-textarea [(ngModel)]="note.poll" placeholder="poll"></ion-textarea>\n    </ion-item>\n   \n    <button ion-button block clear (click)="updateNote(note)">Save</button>\n    <button ion-button block clear (click)="removeNote(note)">Delete</button>\n  </ion-content>'/*ion-inline-end:"C:\Users\Daniel Danny\Documents\Hoputa_Beta\src\pages\edit-note\edit-note.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_note_list_service__["a" /* NoteListService */]])
], EditNotePage);

//# sourceMappingURL=edit-note.js.map

/***/ })

});
//# sourceMappingURL=2.js.map