webpackJsonp([1],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pouchdb__ = __webpack_require__("../../../../pouchdb/lib/index-browser.es.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



__WEBPACK_IMPORTED_MODULE_2_pouchdb__["a" /* default */].plugin(__webpack_require__("../../../../pouchdb-load/lib/index.js"));
var db = new __WEBPACK_IMPORTED_MODULE_2_pouchdb__["a" /* default */]('pouchdb');
var AppComponent = (function () {
    function AppComponent(http) {
        var _this = this;
        this.http = http;
        this.title = 'app';
        this.http.get('./assets/data/vocabulary.json')
            .subscribe(function (res) { return _this.readjson(res.json()); });
    }
    AppComponent.prototype.ngOnInit = function () {
        db.info().then(function (info) {
            console.log(info);
        });
        console.log("Dashboard starts");
        //  db.destroy().then(function (response) {
        //   // success
        // }).catch(function (err) {
        //   console.log(err);
        // });
    };
    AppComponent.prototype.readjson = function (data) {
        this.data = data;
        db.bulkDocs(data);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_dragula_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/ng2-dragula.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_dragula_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__digital_digital_component__ = __webpack_require__("../../../../../src/app/digital/digital.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */], pathMatch: 'full' },
    { path: 'digital', component: __WEBPACK_IMPORTED_MODULE_6__digital_digital_component__["a" /* DigitalComponent */], pathMatch: 'full' },
    { path: '**', redirectTo: '/dashboard' },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_6__digital_digital_component__["a" /* DigitalComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_dragula_ng2_dragula__["DragulaModule"],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
            )
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{margin:0;padding:0;}*\r\n\r\n.wrapper{\r\n  width: 100%;\r\n  display: inline-block;  \r\n  \r\n}\r\n.wrapper .content-main-2 {\r\n  background: #ffffff none repeat scroll 0 0;\r\n  padding: 0;\r\n}\r\n.top-bar {\r\nwidth:100%;\r\nbackground: #242536;\r\n}\r\n.side-bar {\r\n  background-color: #242536;\r\n  height: 100%;\r\n}\r\n.side-bar nav {\r\n  background-color: #242536;\r\n  width: 100%;\r\n  box-shadow: none;\r\n}\r\nnav ul li {\r\n  width: 100%;\r\n  line-height: 35px;\r\n}\r\n.fa.fa-caret-right {\r\n  height: auto;\r\n}\r\n.search-bar {\r\n  display: inline-block;\r\n  width: 100%;\r\n}\r\n.section.no-pad-bot {\r\n  padding-top: 0px;\r\n}\r\n.search-bar .input-field > input {\r\n  margin-bottom: 15px;\r\n}\r\n.search-bar form {\r\n  float: right;\r\n  margin-right: 15px;\r\n}\r\n.search-bar .input-field {\r\n  margin-top: 0px;\r\n}\r\n.search-bar {\r\n  border-bottom: 2px solid #dcdcdc;\r\n  display: inline-block;\r\n  width: 100%;\r\n}\r\n.wrapper .col.s12.m8.l9 {\r\n  padding: 0px;\r\n}\r\nnav.bredcrumb {\r\n  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\n  box-shadow: none;\r\n  height: auto;\r\n  line-height: 10px;\r\n}\r\n.breadcrumb::before {\r\n  font-size: 0px;\r\n  margin: 0px;\r\n}\r\n.breadcrumb {\r\n  color: #a4a4a4;\r\n  font-size: 12px;\r\n}\r\n.breadcrumb:last-child {\r\n  color: #a4a4a4;\r\n}\r\nspan.fruit {\r\n  display: inline-block;\r\n  font-size: 22px;\r\n  padding-bottom: 7px;\r\n}\r\n.aple-cover {\r\n  float: right;\r\n  margin-right: 30px;\r\n}\r\n.right-imge {\r\n  display: inline-block;\r\n  float: left;\r\n  width: 49%;\r\n}\r\n.title {\r\n  display: inline-block;\r\n  float: left;\r\n  width: 50%;\r\n}\r\n.del {\r\n  color: #4c4c4c;\r\n}\r\n.upload {\r\n  color: #4c4c4c;\r\n  font-size: 20px;\r\n  margin: 0 15px;\r\n}\r\n.wrapper .col.s7 {\r\n  padding: 0px;\r\n}\r\n.heading {\r\n  border-right: 3px solid #c8c8c8;\r\n  display: inline-block;\r\n  padding: 0ox 10px;\r\n  position: relative;\r\n  top: -6px;\r\n  width: 100%;\r\n}\r\n.top-table {\r\n  border-bottom: 2px solid #f0f0f0;\r\n  display: inline-block;\r\n  padding: 10px 0 7px 25px;\r\n  width: 100%;\r\n}\r\n.delete {\r\n  color: #4c4c4c;\r\n}\r\n#upload {\r\n  color: #9b9b9b;\r\n}\r\n.item {\r\n  color: #4e7fed;\r\n}\r\n.heading th {\r\n  color: #a3a3a3;\r\n  font-size: 13px;\r\n  font-weight: 400;\r\n}\r\n.btn-2 {\r\n  bottom: -30px;\r\n  float: right;\r\n  position: relative;\r\n}\r\n#upload-2 {\r\n  bottom: -30px;\r\n  float: right;\r\n  margin: 0 10px;\r\n  position: relative;\r\n}\r\n.down .input-field.col.s10 {\r\n  margin-top: 0px;\r\n}\r\n.ic-play {\r\n  float: left;\r\n}\r\n.w-play {\r\n  float: left;\r\n  margin-left: 10px;\r\n}\r\n.right-side-img input {\r\n  margin-bottom: 0px !important;\r\n}\r\n.bt-cover {\r\n  display: inline-block;\r\n  width: 100%;\r\n  margin-top: 15px;\r\n  margin-bottom: 20px;\r\n}\r\n.save {\r\n  background: #4285f4 none repeat scroll 0 0;\r\n  border-radius: 4px;\r\n  box-shadow: 0 2px 2px 0 #999999;\r\n  color: #ffffff;\r\n  padding: 6px 42px;\r\n  border: medium none;\r\n}\r\n.cancel:hover {\r\n  color: #4285F4;\r\n}\r\n.cancel {\r\n  color: #000000;\r\n  float: right;\r\n}\r\n.file-path.validate {\r\n  margin-bottom: 0px !important;\r\n}\r\n.botom-row > td {\r\n  padding: 0px !important;\r\n}\r\n.select-content {\r\n  display: inline-block;\r\n  padding-top: 8px;\r\n  position: relative;\r\n  top: -8px;\r\n  width: 100%;\r\n}\r\n.select-one {\r\n  border-bottom: 1px solid #d0d0d0;\r\n  float: left;\r\n  padding: 10px 0 10px 15px;\r\n}\r\n.minus {\r\n  float: left;\r\n  margin: 0 13px 0 0;\r\n}\r\n.content-wrap {\r\n  float: left;\r\n  width: 92%;\r\n}\r\n.inner p {\r\n  padding: 3px 0;\r\n}\r\n.aa {\r\n  color: #9b9b9b;\r\n  float: left;\r\n}\r\n.rem-btn > a {\r\n  background: #d8d8d8 none repeat scroll 0 0;\r\n  border-radius: 4px;\r\n  color: #ffffff;\r\n  margin: 0 6px;\r\n  padding: 2px 18px;\r\n}\r\np .fa.fa-cloud-upload {\r\n  float: left;\r\n  font-size: 20px;\r\n  margin: 0 10px;\r\n}\r\n/* 27-7-17 css start */\r\n.check-input {\r\n  display: inline-block;\r\n  float: right;\r\n}\r\n.example {\r\n  display: inline-block;\r\n}\r\n.check-input .filled-in {\r\n  float: left !important;\r\n  position: static;\r\n}\r\n.check-input .validate {\r\n  display: inline-block;\r\n  height: 20px !important;\r\n  vertical-align: middle;\r\n  width: auto !important;\r\n}\r\n.first-dropdown {\r\n  margin-left: 15px;\r\n}\r\n.second-dropdwon {\r\n  margin-left: 25px;\r\n}\r\n.second-dropdwon-1 {\r\n  display: none;\r\n  margin-left:12px;\r\n}\r\n.second-dropdwon-2 {\r\n  display: none;\r\n  margin-left:10px;\r\n}\r\n.wrapper .row {\r\n  margin: 0px;\r\n}\r\n.item-detail {\r\n padding-top: 7px;\r\n  padding-left: 10px;\r\n}\r\n.collapsible-header {\r\n  padding: 5px 0 0;\r\n}\r\n.example-c2 i {\r\n  font-size: 1.6rem;\r\n  margin-right: 1rem;\r\n  width: 2rem;\r\n  text-align: center;\r\n}\r\n.example-c2 > h5 {\r\n  display: inline-block;\r\n  margin: 0px;\r\n}\r\n.example-c2 {\r\n  display: inline-block;\r\n  margin-top: 20px;\r\n  width: 100%;\r\n}\r\n.filled-in[type=\"checkbox\"]:checked + label::before {\r\n  border-color: rgba(0, 0, 0, 0) #ffffff #ffffff rgba(0, 0, 0, 0) !important;\r\n}\r\n.coover-btm .col.s8 {\r\n  padding-left: 0;\r\n}\r\n.filled-in[type=\"checkbox\"]:checked + label::after {\r\n  background-color: #4285f4 !important;\r\n  border: 2px solid #4285f4 !important;\r\n}\r\n\r\n@media screen and (max-width: 1199px) {\r\n\r\nnav ul a {\r\n  font-size: 13px;\r\n  padding: 0;\r\n}\r\n.second-dropdwon-1 {\r\n margin-left: 6px;\r\n}\r\n.second-dropdwon-2 {\r\n  margin-left: 4px;\r\n}\r\n}\r\n\r\n@media screen and (min-device-width: 100px) and (max-device-width: 992px) { \r\n\r\nbody {\r\n  overflow: visible !important;\r\n}\r\n.heading {\r\n  border-right: medium none;\r\n}\r\ntable.responsive-table {\r\n  width: 97%;\r\n}\r\n.side-bar {\r\n  width: 100% !important;\r\n  height: auto;\r\n}\r\n.side-nav {\r\n  background-color: #242536;\r\n}\r\n.fa.fa-caret-right {\r\n  color: #ffffff;\r\n  margin: 0;\r\n  width: 10px;\r\n}\r\n.side-nav li a {\r\n  color: #ffffff;\r\n}\r\n.content-main-2 {\r\n  width: 100% !important;\r\n}\r\n.up .input-field.col.s8 {\r\n  width: 100%;\r\n}\r\n.row .col.m10 {\r\n width: 74.333%;\r\n}\r\n.save {\r\n padding: 6px 35px;\r\n}\r\n.select-content .col.s5 {\r\n  padding-left: 0px;\r\n  width: 98%;\r\n}\r\n.content-main-2 .col.s7 {\r\n  left: auto;\r\n  margin-left: auto;\r\n  right: auto;\r\n  width: 100%;\r\n}\r\n.content-main-2 .col.s7 {\r\n  width: 100%;\r\n}\r\n.botom-row {\r\n  display: none !important;\r\n}\r\n.col.s5.right-sideform {\r\n  width: 100%;\r\n}\r\n.col.s5.right-sideform {\r\n  margin-bottom: 30px;\r\n  width: 100%;\r\n}\r\n\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n  \r\n.wrapper .col.s7 {\r\n  width: 100%;\r\n} \r\n.right-sideform {\r\n  width: 100% !important;\r\n} \r\n.select-one {\r\n width: 100%;\r\n}\r\n.content-main-2 .col.s8 {\r\n  width: 100%;\r\n}\r\n.heading {\r\n  border-bottom: 3px solid #dcdcdc;\r\n} \r\n.select-content .col.s5 {\r\n  width: 100%;\r\n}\r\n}\r\n@media screen and (max-width: 480px) {\r\n.rem-btn > a {\r\n  display: block;\r\n  margin: 10px;\r\n}\r\n.title {\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n.search-bar form {\r\n width: 85%;\r\n}\r\n.aple-cover {\r\n  float: none;\r\n}\r\n.right-imge {\r\n  float: none;\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n}\r\n/* 28-7-17 css start */\r\n.brand-logo {\r\n  width: 150px;\r\n}\r\n.apple img {\r\n    width: 50px;\r\n    border-radius: 61px;\r\n    float: left;\r\n    height: 50px;\r\n}\r\nul.collapsible {\r\n  margin: 0px;\r\n  box-shadow: none;\r\n}\r\n.heading td, th {\r\n  padding: 10px 5px;\r\n}\r\n.heading .first-line {\r\n  text-align: center !important;\r\n}\r\n.item-detail {\r\n  font-size: 22px;\r\n}\r\n.input-field.col.s8 > label {\r\n  font-size: 12px;\r\n  height: auto;\r\n}\r\n.input-field.col.s10 > label {\r\n  font-size: 12px;\r\n  height: auto;\r\n}\r\n.down .file-field.input-field {\r\n  margin-top: 0px;\r\n}\r\n.input-field.col.s8.power-play {\r\n  margin: 12px 0px 0px 0px;\r\n}\r\n.down img {\r\n  width: 75px;\r\n}\r\n.input-field {\r\n  margin-top: 10px;\r\n}\r\n.collapsible-header {\r\n  padding: 5px;\r\n  border-bottom: medium none;\r\n}\r\n.collapsible-body {\r\n padding: 0rem;\r\n border-bottom: medium none;\r\n}\r\n.collapsible-header > h5 {\r\n  margin: 0px;\r\n}\r\nli.active .collapsible-body {\r\n  height: 250px;\r\n  overflow: auto;\r\n  scroll-behavior: auto;\r\n}\r\ntable {\r\n  display: table;\r\n  margin-left: 0px !important;\r\n}\r\n[type=\"checkbox\"]:checked + label::before {\r\n border-color: rgba(0, 0, 0, 0) #4e7fed #4e7fed rgba(0, 0, 0, 0) !important;\r\n}\r\n.collapsible {\r\n  border: medium none !important;\r\n}\r\na.del .material-icons {\r\n  font-size: 19px !important;\r\n}\r\n.coover-btm {\r\n  display: inline-block;\r\n  padding-left: 7px;\r\n  position: relative;\r\n  top: -12px;\r\n  width: 100%;\r\n}\r\n.topics {\r\n  color: #9a9a9a;\r\n  float: left;\r\n  font-size: 12px;\r\n  line-height: 30px;\r\n}\r\na .play-bt {\r\n  color: #4c4c4c;\r\n}\r\ntd .material-icons {\r\n  color: #535353;\r\n}\r\n.input-field label.active:not(.label-icon) {\r\n  -webkit-transform: translateY(-2px) scale(0.8) !important;\r\n          transform: translateY(-2px) scale(0.8) !important;\r\n}\r\n.search-bar i.material-icons {\r\n  bottom: -22px;\r\n  left: -46px;\r\n  position: relative;\r\n}\r\n.select-one .filled-in[type=\"checkbox\"]:checked + label::before {\r\n  border-color: rgba(0, 0, 0, 0) #ffffff #ffffff rgba(0, 0, 0, 0) !important;\r\n}\r\n.select-one .filled-in[type=\"checkbox\"]:checked + label::after {\r\n  background-color: #4285f4;\r\n  border: 2px solid #4285f4;\r\n}\r\n.file-field .file-path-wrapper {\r\n  padding-top: 15px;\r\n  padding-left:0px !important;\r\n}\r\n.down .input-field.col.s8 {\r\n  width: 81%;\r\n}\r\n.apple .del {\r\n  position: relative;\r\n  top: -10px;\r\n}\r\n.apple .upload {\r\n  position: relative;\r\n  top: -10px;\r\n}\r\n.fa.fa-folder-o {\r\n  color: #ffffff;\r\n  height: auto;\r\n  margin: 0;\r\n}\r\n.fa.fa-pencil {\r\n  color: #535353;\r\n}\r\n\r\n\r\n\r\n/* media query end */\r\n/*29-7-17 start css */\r\n/* .second-dropdwon-3, .second-dropdwon-4, .second-dropdwon-5 {\r\n  display: none;\r\n} */\r\n.fa.fa-folder-o {\r\n  height: auto;\r\n}\r\nnav ul a {\r\n  font-size: 13px;\r\n  padding: 0 6px;\r\n}\r\n.side-bar {\r\n  padding-right: 0px !important;\r\n}\r\n.right.hide-on-med-and-down {\r\n/*  min-height: 768px;\r\n  height: 768px;\r\n  overflow: visible;\r\n  scroll-behavior: auto;\r\n      width: 100%;*/\r\n        float: left;\r\n    height: auto;\r\n    min-height: 768px;\r\n    overflow: visible;\r\n    scroll-behavior: auto;\r\n    width: 100%;\r\n} \r\n.number {\r\n  color: #8b8c94;\r\n}\r\n.side-nav li > a {\r\n padding: 0 10px;\r\n}\r\n.nav-cober {\r\n  display: block;\r\n  height: 768px;\r\n  min-height: 768px;\r\n  overflow: auto;\r\n  scroll-behavior: auto;\r\n}\r\n.example-content {\r\n  border-top: 2px solid #afafaf;\r\n  display: inline-block;\r\n  height: 200px;\r\n  overflow: auto;\r\n  position: relative;\r\n  top: -8px;\r\n  width: 100%;\r\n}\r\n[type=\"checkbox\"]:checked + label + tr ::before {\r\nbackground :#eee;\r\n}\r\n.foo {\r\n  background: #e8e8e8;\r\n}\r\n.foo #test5 {\r\n  background-color: #000 !important;\r\n  height: 30px !important;\r\n  width:30px !important;\r\n  display: inline-block;\r\n}\r\n/*menu toogle */\r\n#megaUber > li.active >  ul {\r\n    display: block !important;\r\n  padding-left: 10px;\r\n}\r\n/* #megaUber > li > a + ul {\r\n    display: none !important;\r\n}*/\r\n #megaUber > li > ul > li.active >  ul {\r\n    display: block !important;\r\n  padding-left: 10px;\r\n}\r\n/*#megaUber > li > ul > li >  ul {\r\n    display: none !important\r\n}*/\r\n#megaUber-2 > li.active >  ul {\r\n    display: block !important;\r\n  padding-left: 10px;\r\n}\r\n/* #megaUber-2 > li > a + ul {\r\n    display: none !important;\r\n}*/\r\n #megaUber-2 > li > ul > li.active >  ul {\r\n    display: block !important;\r\n  padding-left: 10px;\r\n}\r\n/*#megaUber-2 > li > ul > li >  ul {\r\n    display: none !important\r\n}*/\r\n/* 08-8-17 media query start */\r\n\r\n@media screen and (max-width: 1440px) and (min-width: 993px) {\r\n  \r\n.right-side-img input {\r\n  height: 35px !important;\r\n}\r\n.top-table {\r\n  padding: 5px 0 5px 18px;\r\n}\r\n.example-content {\r\n  top: -7px;\r\n}\r\n.example-content {\r\n  height: 200px;\r\n}\r\n.search-bar i.material-icons {\r\n  bottom: -8px;\r\n}\r\n.search-bar .input-field > input {\r\n  height: 25px !important;\r\n}\r\n.search-bar {\r\n  height: 40px !important;\r\n}\r\n.top-table {\r\n  padding: 0px 0px 0px 25px !important;\r\n}\r\n.heading td, th {\r\n    padding: 10px 0 0 5px !important;\r\n}\r\n.botom-row {\r\n  display: none;\r\n}\r\n\r\n.btn-2 {\r\n  bottom: -10px;\r\n}\r\n.down .file-path-wrapper {\r\n  padding-top: 0 !important;\r\n}\r\n#upload-2 {\r\n  bottom: -10px;\r\n}\r\n.apple {\r\n  display: inline-block;\r\n  padding-top: 8px !important;\r\n}\r\nspan.fruit {\r\n  padding: 5px 0px  !important;\r\n}\r\n.top-table {\r\n  padding: 0 0 0 18px !important;\r\n}\r\nnav ul a {\r\n  padding: 0 6px !important;\r\n}\r\n.item-detail {\r\n    padding-top: 0px !important;\r\n    margin-bottom: 0px !important;\r\n    margin-top: 0px !important;\r\n  font-size: 20px;\r\n}\r\n.down .input-field {\r\n    margin-top: 0px;\r\n}\r\nspan.fruit {\r\n  font-size: 20px;\r\n}\r\n.input-field.col.s8 > label {\r\n  font-size: 10px;\r\n}\r\n\r\n}\r\n*::-moz-placeholder {\r\n  color: #9e9e9e !important;\r\n  font-size: 13px;\r\n}\r\n.select-content .input-field.col.s10 {\r\n  padding-left: 22px;\r\n  padding-right: 0;\r\n}\r\n.wrap-cover {\r\n  display: inline-block;\r\n  width: 100%;\r\n}\r\n.example-cover-main {\r\n  display: inline-block;\r\n  width: 100%;\r\n}\r\n\r\n.ajax-loader {\r\n    background: #000 none repeat scroll 0 0;\r\n    float: left;\r\n    height: 100%;\r\n    left: 0;\r\n    opacity: 0.5;\r\n    position: absolute;\r\n    right: 0;\r\n    text-align: center;\r\n    top: 0;\r\n    width: 100%;\r\n    z-index: 9999;\r\n}\r\n.ajax-loader > img {\r\n    bottom: 0;\r\n    display: block;\r\n    height: 120px;\r\n    left: 0;\r\n    margin: auto;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    width: 120px;\r\n}\r\n.row .col.s7\r\n{\r\n    position: relative;\r\n}\r\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\r\n  color: #9e9e9e;\r\n  font-size: 12px;\r\n}\r\n::-moz-placeholder { /* Firefox 19+ */\r\n  color: #9e9e9e;\r\n  font-size: 12px;\r\n}\r\n:-ms-input-placeholder { /* IE 10+ */\r\n  color:#9e9e9e;\r\n  font-size: 12px;\r\n}\r\n:-moz-placeholder { /* Firefox 18- */\r\n  color:#9e9e9e;\r\n  font-size: 12px;\r\n}\r\n.col.s5.right-sideform {\r\n    position: relative;\r\n}\r\n.category_box {\r\n    background: #fff none repeat scroll 0 0;\r\n    border: 2px solid #ccc;\r\n    box-shadow: 1px 1px 0 -1px;\r\n    color: #000;\r\n    float: right;\r\n    height: 200px;\r\n    left: 122px;\r\n    position: absolute;\r\n    top: 12px;\r\n    width: 200px;\r\n    z-index: 9999;\r\n}\r\nnav ul li\r\n{\r\n    position: relative;\r\n}\r\n.category_box_inner {\r\n    float: left;\r\n    margin-top: 15px;\r\n    padding: 5px;\r\n    width: 100%;\r\n}\r\n.heading_category_name {\r\n    float: left;\r\n    width: 99%;\r\n}\r\n.category_submit {\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.heading_category_name > label {\r\n    color: #000;\r\n    float: left;\r\n    font-size: 14px;\r\n    width: 100%;\r\n}\r\n.heading_category_name > input {\r\n    border: 1px solid #ccc !important;\r\n    float: left;\r\n    height: 30px !important;\r\n}\r\n.category_submit {\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.category_submit > a {\r\n    background: #4285f4 none repeat scroll 0 0;\r\n    float: left;\r\n    font-size: 12px;\r\n    line-height: 12px;\r\n    margin: 5px;\r\n    padding: 5px !important;\r\n    text-align: center;\r\n    width: 83px;\r\n}\r\n#resizable {\r\n    height: 100%;\r\n    padding: 0px;\r\n    width: 100%;\r\n}\r\nspan.fruit {\r\n    padding-bottom: 0;\r\n}\r\n#update_category_form\r\n{\r\n    float: right;\r\n}\r\n.file-field #update_category_form input[type=file]{\r\n    width:108px;\r\n}\r\n\r\n#update_category_form .save{\r\n        padding: 4px 14px;\r\n    border: none;\r\nmargin-top: 23px;\r\n    margin-left: 14px;\r\n}\r\n.row .col.s7 {\r\n    padding-right: 0px;\r\n    padding-left: 0px;\r\n}\r\n.gu-transit\r\n{\r\n    background: #4e7fed;\r\n\r\n}\r\n.fa.fa-folder-o {\r\n    height: auto;\r\n        margin-right: 5px;\r\n}\r\nnav ul a\r\n{\r\n font-size: 13px;\r\n    padding: 0 6px;\r\n}\r\n.topics {\r\n    color: #9a9a9a;\r\n    float: left;\r\n    font-size: 12px;\r\n    line-height: 30px;\r\n}\r\n.foo {\r\n    background: #e8e8e8 none repeat scroll 0 0;\r\n}\r\n.right {\r\n    float: left !important;\r\n}\r\n.wrapper .content-main-2 {\r\n    background: #ffffff none repeat scroll 0 0;\r\n    padding: 0;\r\n}\r\n.heading .first-line {\r\n    text-align: center !important;\r\n}\r\n\r\n.default_message\r\n{\r\n    float: left;\r\n    width: 100%;\r\n    text-align: center;\r\n    padding: 20px;\r\n    font-size: 18px;\r\n}\r\n.ui-icon-gripsmall-diagonal-se\r\n{\r\n    display: none!important;\r\n}\r\n\r\n.right-imge .aple-cover.file-field .del\r\n{\r\n    margin-top: 25px;\r\n    float: right;\r\n}\r\n.right-imge .aple-cover.file-field .upload\r\n{\r\n    float: left;\r\n    margin-top: 21px;\r\n}\r\n.input-field.col.s8 > label {\r\n    font-size: 12px;\r\n    height: auto;\r\n}\r\nnav .nav-wrapper\r\n{\r\n    float: left;\r\n}\r\nnav .nav-wrapper .breadcrumb\r\n{\r\n    float: right;\r\n    margin-right: 4px;\r\n    margin-top: 3px;\r\n}\r\n\r\n.ajax-loader-menu {\r\n    background: #fff none repeat scroll 0 0;\r\n    float: left;\r\n    height: 100%;\r\n    left: 0;\r\n    opacity: 0.55;\r\n    position: absolute;\r\n    right: 0;\r\n    text-align: center;\r\n    top: 0;\r\n    width: 100%;\r\n    z-index: 9999;\r\n}\r\n.side-bar\r\n{\r\n  position: relative;\r\n}\r\n.ajax-loader-menu > img {\r\n    bottom: 0;\r\n    display: block;\r\n    height: 60px;\r\n    left: 0;\r\n    margin: auto;\r\n    position: absolute;\r\n    right: 0;\r\n    top: -200px;\r\n    width: 60px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1.0\"/>\n        <title>Starter Template - Materialize</title>\n\n        <!-- CSS  -->\n        \n          \n        <!--  <link href=\"https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css\" rel=\"stylesheet\" type=\"text/css\"> -->\n        <!-- <script>\n           $('.button-collapse').sideNav({\n             menuWidth: 300, // Default is 300\n             edge: 'right', // Choose the horizontal origin\n             closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor\n             draggable: true, // Choose whether you can drag to open on touch screens,\n             onOpen: function(el) { /* Do Stuff* / }, // A function to be called when sideNav is opened\n             onClose: function(el) { /* Do Stuff*/ }, // A function to be called when sideNav is closed\n           }\n         );\n         \n           $(\".button-collapse\").sideNav();\n         </script> -->\n    </head>\n    <body style=\"height:100%;overflow:hidden;\">\n        <div class=\"wrapper\">\n        <div class=\"top-bar\">\n\n            <a href=\"#\"><img src=\"assets/images/logo.png\" class=\"brand-logo\" alt=\"path ok\"/> </a> \n\n        </div>\n        <div class=\"row\">\n      \n            <div class=\"col s12 m3 l2 side-bar\">\n                    <div class=\"ajax-loader-menu\" style=\"display: none;\">\n                      <img src=\"assets/images/25.gif\" alt=\"loader\" title=\"loader\">  \n                      </div>\n                <nav class=\"side-bar-inner\" role=\"navigation\">\n                    <ul class=\"right hide-on-med-and-down\" >\n                        <span class=\"topics\"> TOPICS </span>\n                        <ul id='megaUber'>\n                        <li *ngFor=\"let record of data;  let rowIndex=index\">\n                    <ng-container *ngIf=\"record.doc.parent==false\">\n                        <a id='cat{{rowIndex+1}}' class=\"sub-menu-1\" href='javascript:void(0);' data-activates='dropdown1' onclick='show_cat_main(this);' (contextmenu)=\"onRightClick(rowIndex+1,record.doc._id)\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>      \n                             {{ record.doc.name }} <span class=\"number\" id={{record.doc._id}} >({{ record.doc.total_items }}) </span>\n                        </a>\n                        \n                        <ul class=\"second-dropdwon-1\" [dragula]='\"bag-one\"' [dragulaModel]='items1'>\n                            <li *ngFor=\"let record1 of data; let rowIndex=index\" [attr.data-id]=\"record1.doc._id\">\n                        <ng-container *ngIf=\"record.doc._id==record1.doc.parent\">\n                            <a href=\"javascript:void(0);\" id='cat{{rowIndex+1}}' (contextmenu)=\"onRightClick(rowIndex+1,record1.doc._id)\" onclick='show_cat_main(this);' class=\"sub-menu-1\" (click)=\"show_category_items(record1.doc._id);\" >\n                            <ng-container *ngIf=\"record.doc.subcategories.length>0\">\n                            <i class=\"fa fa-caret-right\" aria-hidden=\"true\" ></i> \n                            </ng-container>\n                            <ng-container *ngIf=\"record.doc.subcategories.length==0\">\n                            <i class=\"fa fa-folder-o\" aria-hidden=\"true\" ></i> \n                            </ng-container>\n                            <span class=\"name\" id='nme{{record1.doc._id}}'> {{ record1.doc.name }} </span><span class=\"number\" id={{record1.doc._id}}>({{ record1.doc.total_items }})</span></a>\n                            <ul class=\"second-dropdwon-1\" [dragula]='\"bag-one\"' [dragulaModel]='items2'>\n                                <li *ngFor=\"let record2 of data; let rowIndex=index\" [attr.data-id]=\"record2.doc._id\">\n                            <ng-container *ngIf=\"record1.doc._id==record2.doc.parent\">\n                                <a href=\"javascript:void(0);\"  id='cat{{rowIndex+1}}' (contextmenu)=\"onRightClick(rowIndex+1,record2.doc._id)\" class=\"sub-menu-1\" onclick='show_cat_main(this);' (click)=\"show_category_items(record2.doc._id);\" >\n                                 <ng-container *ngIf=\"record2.doc.subcategories.length>0\">   \n                                <i class=\"fa fa-caret-right\" aria-hidden=\"true\" ></i>\n                                 </ng-container>\n                                 <ng-container *ngIf=\"record2.doc.subcategories.length==0\">\n                               <i class=\"fa fa-folder-o\" aria-hidden=\"true\"></i>\n                              </ng-container>\n                                 <span class=\"name\" id='nme{{record2.doc._id}}'>{{ record2.doc.name }}</span><span class=\"number\" id={{record2.doc._id}} >({{ record2.doc.total_items }})</span></a>\n                                <ul class=\"second-dropdwon-1\" [dragula]='\"bag-one\"' [dragulaModel]='items3'>\n                                    <li *ngFor=\"let record3 of data\" [attr.data-id]=\"record3.doc._id\">\n                                <ng-container *ngIf=\"record2.doc._id==record3.doc.parent\">\n                                    <a href=\"javascript:void(0);\"  class=\"sub-menu-1\" onclick='show_cat_main(this);' (click)=\"show_category_items(record3.doc._id);\" >\n                                     <ng-container *ngIf=\"record3.doc.subcategories.length>0\"> \n                                      <i class=\"fa fa-caret-right\" aria-hidden=\"true\" ></i>\n                                  </ng-container>\n                                  <ng-container *ngIf=\"record3.doc.subcategories.length==0\">\n                               <i class=\"fa fa-folder-o\" aria-hidden=\"true\"></i> \n                              </ng-container>\n                                    \n                                    <span class=\"name\" id='nme{{record3.doc._id}}'>{{ record3.doc.name }}</span><span class=\"number\" id={{record3.doc._id}} >({{ record3.doc.total_items }})</span></a>\n                                </ng-container>\n                                </li>\n                            </ul>\n                        </ng-container>\n                        </li>\n                    </ul>\n                </ng-container>\n                </li>\n            </ul>\n        </ng-container>\n\n\n        </li>\n        </ul>\n                        \n    </ul>\n\n                 \n\n    <ul id=\"nav-mobile\" class=\"side-nav\">\n        <li><a class=\"sub-menu-1\" href='#' data-activates='dropdown1'><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>&nbsp;  Nouns</a>\n            <ul class=\"second-dropdwon-1\">\n                <li> <a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>&nbsp; The Body </a></li>\n                <li> <a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>&nbsp; The Mind </a></li>\n                <li> <a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>&nbsp;  People </a></li>\n                <li> <a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>&nbsp;  Family </a></li>\n                <li> <a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>&nbsp;  Places </a></li>\n                <li> <a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>&nbsp;  At Home </a></li>\n                <li> <a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>&nbsp;  At Word </a></li>\n                <li> <a class=\"sub-menu-2\" href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>&nbsp;  Food & Drink </a>\n                    <ul class=\"second-dropdwon-2\">\n                        <li> <a href=\"#\"> Basic Meals </a></li>\n                        <li> <a href=\"#\"> Types of  Meals </a></li>\n                        <li> <a href=\"#\"> Fruits & Vegetables </a></li>\n                    </ul>\n                </li>\n            </ul>\n        </li>\n        <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>&nbsp;Verbs</a></li>\n        <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>&nbsp;Descriptives</a></li>\n        <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>&nbsp;Pronouns</a></li>\n        <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>&nbsp;Conjuctions</a></li>\n        <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>&nbsp;Numbers\t</a></li>\n        <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>&nbsp;Time</a></li>\n    </ul>\n    <a href=\"#\" data-activates=\"nav-mobile\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>\n</nav>\n</div>\n\n<div class=\"col s12 m10 22 content-main-2\" id=\"layout\">\n    <div class=\"wrap-cover resize\">\n   <div class=\"section no-pad-bot\" id=\"index-banner\">\n  <div class=\"search-bar\"> \n\t<form>\n          <div class=\"input-field\">\n            <input id=\"search\" type=\"search\" placeholder=\"find item\" />\n            <label for=\"search\"><i class=\"material-icons\">search</i></label>\n          </div>\n        </form>\n\n  </div>\n  </div>\n\n    <div class=\"col s7\">\n     \n        <!--\t<frame src=\"frame_a.htm\">-->\n        <div class=\"default_message\">Please select a category</div>\n        <div class=\"heading\"  style=\"display: none;\">\n <div class=\"ajax-loader\" style=\"display: none;\">\n      <img src=\"assets/images/loader.gif\" alt=\"loader\" title=\"loader\">  \n         </div>\n            <div class=\"top-table\">\n                <div class=\"title\">\n                    <span class=\"fruit\"> Fruits </span>&nbsp;&nbsp;&nbsp;<a href=\"javascript:void(0)\" onclick=\"edit_category_name();\">\n                        <input type=\"hidden\" value=\"\" id=\"category_id\">\n                        <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></a>\n                    <nav class=\"bredcrumb\">\n                        <div class=\"nav-wrapper\">  \n                            <a href=\"#!\" class=\"breadcrumb\">All Categories &nbsp; > </a>\n                            <a href=\"#!\" class=\"breadcrumb\">Nouns &nbsp;  > </a>\n                            <a href=\"#!\" class=\"breadcrumb\">Food & Drink </a>\n                        </div>\n                    </nav>\n                </div>\n                <div class=\"right-imge\">\n                    <div class=\"aple-cover file-field\">\n                        <span class=\"apple\"> <img src=\"\" width=\"63px\" height=\"66px\" class=\"img-responsive\" alt=\"No Image...\"/></span>\n                        <a class=\"upload\" href=\"#\"> <i class=\"fa fa-cloud-upload\" aria-hidden=\"true\"></i> </a>\n                          <form id=\"update_category_form\" enctype=\"multipart/form-data\" method=\"post\">\n                           <input type=\"file\" id=\"category_image\" name=\"category_image\">\n                           <input type=\"submit\" class=\"save\" value=\"upload\"  name=\"catgory_form_submit\" id=\"catgory_form_submit\" style=\"display: none;\">\n                          </form>\n                        <a class=\"del\" href=\"javascript:void(0);\" onclick=\"delete_category();\"> <i class=\"material-icons\">delete</i> </a>\n                    </div> \n                </div> \n            </div>\n            <div class=\"top-table\">\n                <div class=\"title\">\n                    <span class=\"item\"> 1 Item selected </span>\n\n                </div>\n                <div class=\"right-imge\">\n                    <div class=\"aple-cover\">\n\n                        <a id=\"upload\" class=\"upload\" href=\"#\"> <i class=\"material-icons\">delete</i> </a>\n                        <a class=\"delete\" href=\"#\"> <i class=\"material-icons\">add_box</i> </a> \n                    </div> \n                </div> \n            </div>\n\n            <table class=\"responsive-table bordered\">\n                <thead>\n                    <tr>\n                        <th class=\"first-line\">  <input type=\"checkbox\" id=\"test5\"  class='filled-in'/> <label for=\"test5\"></label>\t</th>\t\n                        <th>English</th>\n                        <th>Chinese</th>\n                        <th>Pinyin</th>\n                        <th>Image</th>\n                        <th>Audio</th>\n                        <th>Examples</th>\n                    </tr>\n                </thead>\n\n                <tbody>\n                    <tr>\n                        <td class=\"first-line\"> <input type=\"checkbox\" id=\"test6\" class='filled-in'/> <label for=\"test6\"></label> \t</td>\n                        <td>Alvin</td>\n                        <td>Eclair</td>\n                        <td>$0.87</td>\n                        <td><i class=\"material-icons\">image</i> </td>\n                        <td><i class=\"material-icons\">audiotrack</i></td>\n                        <td> 3 </td>\n                    </tr>\n                    <tr>\n                        <td class=\"first-line\">  <input type=\"checkbox\" id=\"test7\"  class='filled-in'/> <label for=\"test7\"></label> \t</td>\n                        <td>Alan</td>\n                        <td>Jellybean</td>\n                        <td>$3.76</td>\n                        <td><i class=\"material-icons\">image</i></td>\n                        <td><i class=\"material-icons\">audiotrack</i></td>\n                        <td> 3 </td>\n                    </tr>\n                    <tr>\n                        <td class=\"first-line\"> <input type=\"checkbox\" id=\"test8\"  class='filled-in'/> <label for=\"test8\"></label> \t</td>\n                        <td>Jonathan</td>\n                        <td>Lollipop</td>\n                        <td>$7.00</td>\n                        <td><i class=\"material-icons\">image</i></td>\n                        <td><i class=\"material-icons\">audiotrack</i> </td> \n                        <td> 3 </td>\n                    </tr>\n                    <tr>\n                        <td class=\"first-line\"> <input type=\"checkbox\" id=\"test8\"  class='filled-in'/> <label for=\"test8\"></label> \t</td>\n                        <td>Jonathan</td>\n                        <td>Lollipop</td>\n                        <td>$7.00</td>\n                        <td><i class=\"material-icons\">image</i></td>\n                        <td><i class=\"material-icons\">audiotrack</i> </td> \n                        <td> 3 </td>\n                    </tr>\n                    <tr>\n                        <td class=\"first-line\"> <input type=\"checkbox\" id=\"test8\"  class='filled-in'/> <label for=\"test8\"></label> \t</td>\n                        <td>Jonathan</td>\n                        <td>Lollipop</td>\n                        <td>$7.00</td>\n                        <td><i class=\"material-icons\">image</i></td>\n                        <td><i class=\"material-icons\">audiotrack</i> </td> \n                        <td> 3 </td>\n                    </tr>\n                    <tr>\n                        <td class=\"first-line\"> <input type=\"checkbox\" id=\"test8\"  class='filled-in'/> <label for=\"test8\"></label> \t</td>\n                        <td>Jonathan</td>\n                        <td>Lollipop</td>\n                        <td>$7.00</td>\n                        <td><i class=\"material-icons\">image</i></td>\n                        <td><i class=\"material-icons\">audiotrack</i> </td> \n                        <td> 3 </td>\n                    </tr>\n                    <tr>\n                        <td class=\"first-line\"> <input type=\"checkbox\" id=\"test8\"  class='filled-in'/> <label for=\"test8\"></label> \t</td>\n                        <td>Jonathan</td>\n                        <td>Lollipop</td>\n                        <td>$7.00</td>\n                        <td><i class=\"material-icons\">image</i></td>\n                        <td><i class=\"material-icons\">audiotrack</i> </td> \n                        <td> 3 </td>\n                    </tr>\n                    <tr class=\"botom-row\">\n                        <td> \t</td>\n                        <td></td>\n                        <td></td>\n\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n\n\n    </div>\n\n    <div class=\"col s5 right-sideform resize\" id=\"resizable1\">\n        <div class=\"ajax-loader\" style=\"display: none;\">\n      <img src=\"assets/images/loader.gif\" alt=\"loader\" title=\"loader\">  \n         </div>\n        <div class=\"right-side-img \">\n            <h5 class=\"item-detail\"> Item Details </h5>\n            <form id=\"update_items_form\" enctype=\"multipart/form-data\" method=\"post\">\n                <div class=\"up\">\n                    <div class=\"input-field col s8\">\n                        <input id=\"English\" type=\"text\" class=\"validate\" placeholder=\"English\" required>\n                    </div>\n                    <div class=\"input-field col s8\">\n                        <input id=\"chinese\" type=\"text\" class=\"validate\" placeholder=\"Chinese\" required>\n                    </div>\n                    <div class=\"input-field col s8\">\n                        <input id=\"pinyin\" type=\"text\" class=\"validate\" placeholder=\"Pinyin\" required>\n                    </div>\n\n                </div>\n\n                <div class=\"down\">\t\t\t\n                    <div class=\"input-field col s10\">\n                        <label>Image</label>\n                        <div class=\"file-field input-field\">\n                            <a id=\"upload-2\" class=\"upload\" href=\"javascript:void(0);\" onclick=\"return remove_image();\"> <i class=\"material-icons\">delete</i> </a>\n                            <div class=\"btn-2\">\n                                <a class=\"upload\" href=\"#\"> <i class=\"fa fa-cloud-upload\" aria-hidden=\"true\"></i> </a>\n                                <input type=\"file\" id=\"item_image\" name=\"item_image\">\n                            </div>\n\n                            <div class=\"file-path-wrapper\">\n                                <input class=\"file-path validate\" type=\"text\" placeholder=\"\">\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"input-field col s10\">\n                        <div class=\"file-field input-field\">\n                            <div class=\"file-path-wrapper\">\n                                <img src=\"assets/images/abc.png\" class=\"img-responsive\" alt=\"No Image...\"/>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"input-field col s10\">\n                        <label>Audio</label>\n                        <div class=\"file-field input-field\">\n                            <a id=\"upload-2\" class=\"upload\" href=\"javascript:void(0);\" onclick=\"return remove_audio();\" > <i class=\"material-icons\">delete</i> </a>\n                            <div class=\"btn-2\">\n                                <a class=\"upload\" href=\"#\"> <i class=\"fa fa-cloud-upload\" aria-hidden=\"true\"></i> </a>\n                                <input type=\"file\" id=\"item_audio\" name=\"item_audio\">\n                            </div>\n                            <div class=\"file-path-wrapper\">\n                                <input class=\"file-path validate\" type=\"text\" placeholder=\"\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"input-field col s8 power-play\">\n                        <div class=\"play\"> <i class=\"material-icons ic-play\">play_circle_filled </i>\t\t<span class=\"w-play\">Play </span> </div>\n                    </div>\n                    <div class=\"input-field col s8\">\n                        <div class=\"bt-cover\">\n                            <input type=\"hidden\" value=\"\" id=\"doc_item\" name=\"doc_item\">\n                            <input type=\"hidden\" value=\"\" id=\"dov_rev\" name=\"dov_rev\">\n                            <input type=\"submit\" name=\"submit_item\" value=\"SAVE\"  class=\"save\" >\n                            <a href=\"#\" class=\"cancel\"> CANCEL </a>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n     <div class=\"example-cover-main\">\n <div class=\"example-content\">\n  <div class=\"col s12\">\n   <h5> Selected Examples </h5>  \n<div class=\"select-content\"> \n\n <div class=\"col s7\"> \n <div class=\"select-one\"> \n  <div class=\"inner\">\n\t <div class=\"minus\"> <i class=\"material-icons ic-play\">remove_circle_outline </i> </div>\n\t\t<div class=\"content-wrap\">\n\t\t\t<p> The apple doesn't fall from the tree</p>\n\t\t\t<p> Pingguo bu hui diao de li pingguo shu tai yuan The apple doesn't fall from the tree</p>\n\t\t\t<p> <span class=\"aa\"> Audio</span><a href=\"#\"> <i id=\"upload\" class=\"material-icons ic-play\">play_arrow </i> </a> \n\t\t\t<a href=\"#\"> <i id=\"upload\" class=\"material-icons ic-play\">delete </i> </a> </p>\n\t\t</div>\n\t</div>\n </div>\n\n </div> \n \n <div class=\"col s5\">\n\t\t<div class=\"input-field col s10\">\n\t\t\t<div class=\"bt-cover\">\n\t\t\t\t<a href=\"#\" class=\"save\"> SAVE </a>\n\t\t\t\t<a href=\"#\" class=\"cancel\"> CANCEL </a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t\n  </div>\n  \n  <div class=\"select-content\"> \n\n <div class=\"col s7\"> \n <div class=\"select-one\"> \n  <div class=\"inner\">\n\t <div class=\"minus\"> <i class=\"material-icons ic-play\">remove_circle_outline </i> </div>\n\t\t<div class=\"content-wrap\">\n\t\t\t<p> The apple doesn't fall from the tree</p>\n\t\t\t<p> Pingguo bu hui diao de li pingguo shu tai yuan The apple doesn't fall from the tree</p>\n\t\t\t<p> <span class=\"aa\"> Audio</span><a href=\"#\"> <i id=\"upload\" class=\"material-icons ic-play\">play_arrow </i> </a>\n\t\t\t<a href=\"#\">\t<i id=\"upload\" class=\"material-icons ic-play\">delete </i> </a> </p>\n\t\t</div>\n\t</div>\n </div>\n\n </div> \n \n <div class=\"col s5\">\n\t\t<div class=\"input-field col s10\">\n\t\t\t<div class=\"bt-cover\">\n\t\t\t\t<a href=\"#\" class=\"save\"> SAVE </a>\n\t\t\t\t<a href=\"#\" class=\"cancel\"> CANCEL </a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t\n  </div>\n  <div class=\"select-content\"> \n\n <div class=\"col s7\"> \n <div class=\"select-one\"> \n  <div class=\"inner\">\n\t <div class=\"minus\"> <i class=\"material-icons ic-play\">remove_circle_outline </i> </div>\n\t\t<div class=\"content-wrap\">\n\t\t\t<p> The apple doesn't fall from the tree</p>\n\t\t\t<p> Pingguo bu hui diao de li pingguo shu tai yuan The apple doesn't fall from the tree</p>\n\t\t\t<p> <span class=\"aa\"> Audio</span><a href=\"#\"> <i id=\"upload\" class=\"material-icons ic-play\">play_arrow </i> </a> \n\t\t\t<a href=\"#\">\t<i id=\"upload\" class=\"material-icons ic-play\">delete </i> </a> </p>\n\t\t</div>\n\t</div>\n </div>\n\n </div> \n \n <div class=\"col s5\">\n\t\t<div class=\"input-field col s10\">\n\t\t\t<div class=\"bt-cover\">\n\t\t\t\t<a href=\"#\" class=\"save\"> SAVE </a>\n\t\t\t\t<a href=\"#\" class=\"cancel\"> CANCEL </a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t\n  </div>\n\n<div class=\"coover-btm\">\n\n\n <div class=\"col s8\">\n <div class=\"example-c2\">\n     <h5> Examples </h5>  \n   \n   \t\t<div class=\"check-input\">  <input type=\"checkbox\" class=\"filled-in\" id=\"filled-in-box\" checked=\"checked\" />\n\t\t\t<label for=\"filled-in-box\"></label> \n\t\t  <input id=\"icon_prefix\" type=\"text\" class=\"validate\">\n         </div>\n\t\t\t\t<div class=\"check-input\">  <input type=\"checkbox\" class=\"filled-in\" id=\"filled-in-box-2\" checked=\"checked\" />\n\t\t\t<label for=\"filled-in-box-2\"></label> \n\t\t  <input id=\"icon_prefix\" type=\"text\" class=\"validate\">\n        </div>\n</div>\n\t  <div class=\"select-one\">\n\n\t  <div class=\"inner\">\n\t\t <div class=\"minus\"> <i class=\"material-icons ic-play\">add_circle_outline</i> </div>\n\t\t\t<div class=\"content-wrap\">\n\t\t\t\t<p> The apple doesn't fall from the tree from the tree. <a id=\"upload\" class=\"upload\" href=\"#\"> <i class=\"material-icons\">delete</i> </a>  </p>\n\t\t\t\t<p> Pingguo bu hui diao de li pingguo shu tai yuan The apple doesn't fall from the tree pingguo shu tai yuan The apple </p>\n\t\t\t\t<p> <span class=\"aa\"> No Audio</span> <a href=\"#\"> <i id=\"upload\" class=\"fa fa-cloud-upload\" aria-hidden=\"true\"></i> </a> <span class=\"related\">related</span> <span class=\"rem-btn\"> <a href=\"#\"> remember </a> <a href=\"#\"> to pick </a> </span> </p>\n\t\t\t</div>\n\t\t</div>\n\t </div>\n\t <div class=\"select-one\">\n\t  <div class=\"inner\">\n\t\t <div class=\"minus\"> <i class=\"material-icons ic-play\">add_circle_outline</i> </div>\n\t\t\t<div class=\"content-wrap\">\n\t\t\t\t<p> The apple doesn't fall from the tree from the tree <a id=\"upload\" class=\"upload\" href=\"#\"> <i class=\"material-icons\">delete</i> </a> </p>\n\t\t\t\t<p> Pingguo bu hui diao de li pingguo shu tai yuan The apple doesn't fall from the tree pingguo shu tai yuan The apple </p>\n\t\t\t\t<p> <span class=\"aa\"> No Audio</span><a href=\"#\"> <i id=\"upload\" class=\"fa fa-cloud-upload\" aria-hidden=\"true\"></i> </a> <span class=\"related\">related</span> <span class=\"rem-btn\"> <a href=\"#\"> remember </a> <a href=\"#\"> to pick </a> </span> </p>\n\t\t\t</div>\n\t\t</div>\n\t </div>\n\t  <div class=\"select-one\">\n\t\t  <div class=\"inner\">\n\t\t <div class=\"minus\"> <i class=\"material-icons ic-play\">add_circle_outline</i> </div>\n\t\t\t<div class=\"content-wrap\">\n\t\t\t\t<p> The apple doesn't fall from the tree from the tree <a id=\"upload\" class=\"upload\" href=\"#\"> <i class=\"material-icons\">delete</i></a> </p>\n\t\t\t\t<p> Pingguo bu hui diao de li pingguo shu tai yuan The apple doesn't fall from the tree pingguo shu tai yuan The apple </p>\n\t\t\t\t<p> <span class=\"aa\"> No Audio</span><a href=\"#\"> <i id=\"upload\" class=\"fa fa-cloud-upload\" aria-hidden=\"true\"></i></a> <span class=\"related\">related</span> <span class=\"rem-btn\"> <a href=\"#\"> remember </a> <a href=\"#\"> to pick </a> </span> </p>\n\t\t\t</div>\n\t\t</div>\n\t </div>\n\t <div class=\"select-one\">\n\t\t  <div class=\"inner\">\n\t\t <div class=\"minus\"> <i class=\"material-icons ic-play\">add_circle_outline</i> </div>\n\t\t\t<div class=\"content-wrap\">\n\t\t\t\t<p> The apple doesn't fall from the tree from the tree <a id=\"upload\" class=\"upload\" href=\"#\"> <i class=\"material-icons\">delete</i></a> </p> \n\t\t\t\t<p> Pingguo bu hui diao de li pingguo shu tai yuan The apple doesn't fall from the tree pingguo shu tai yuan The apple </p>\n\t\t\t\t<p> <span class=\"aa\"> No Audio</span><a href=\"#\"> <i id=\"upload\" class=\"fa fa-cloud-upload\" aria-hidden=\"true\"></i> </a> <span class=\"related\">related</span> <span class=\"rem-btn\"> <a href=\"#\"> remember </a> <a href=\"#\"> to pick </a> </span> </p>\n\t\t\t</div>\n\t\t</div>\n\t </div>\n </div>\n\t  <div class=\"col s4\">   </div>\n</div>\t  \n\t\n</div> \n</div> \n</div>\n\n</div>\n\n</div>\n\n    </div>\n\n<!--  <script src=\"https://code.jquery.com/jquery-2.1.1.min.js\"></script>-->\n<!--<script src=\"/assets/js/materialize.js\"></script>\n<script src=\"/assets/js/init.js\"></script>-->\n<!--<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>-->\n\n<!--  Scripts-->\n\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_dragula_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/ng2-dragula.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_dragula_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pouchdb__ = __webpack_require__("../../../../pouchdb/lib/index-browser.es.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var db = new __WEBPACK_IMPORTED_MODULE_3_pouchdb__["a" /* default */]('pouchdb');
var DashboardComponent = (function () {
    function DashboardComponent(dragulaService) {
        var _this = this;
        this.dragulaService = dragulaService;
        this.title = 'my Page';
        this.mytest = { total: 111 };
        this.flag = false;
        dragulaService.setOptions('bag-one', {
            revertOnSpill: true
        });
        dragulaService.drop.subscribe(function (value) {
            //console.log(`drop: ${value[0]}`);
            var bagName = value[0], e = value[1], el = value[2];
            _this.onDrop(e.dataset.id);
        });
    }
    DashboardComponent.prototype.onDrop = function (args) {
        var that = this;
        var e = args[0], el = args[1];
        var dataid = __WEBPACK_IMPORTED_MODULE_2_jquery__('li[data-id="' + args + '"]').prev().attr("data-id");
        var selected_id = args;
        var parent_id = dataid;
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".ajax-loader-menu").show();
        db.get(parent_id, { attachments: true }).then(function (doc) {
            db.get(doc.parent).then(function (doc2) {
                // console.log(doc2.subcategories);
                // console.log(selected_id);
                for (var i = 0; i < doc2.subcategories.length; i++) {
                    // console.log("cat:"+doc2.subcategories[i]);
                    if (doc2.subcategories[i] == selected_id) {
                        doc2.subcategories.splice(i, 1);
                    }
                }
                var next_index = doc2.subcategories.length;
                doc2.subcategories[next_index] = selected_id;
                //console.log(doc2.subcategories);
                // put them back
                return db.put(doc2);
            }).then(function () {
                return db.get(doc.parent);
            }).then(function (doc2) {
                //console.log(doc2);
            });
            db.get(selected_id).then(function (doc1) {
                if (doc1.parent != doc.parent) {
                    db.get(doc1.parent).then(function (doc3) {
                        doc3.total_items = doc3.total_items - doc1.total_items;
                        //   console.log("name:"+doc3.name+"total:"+doc3.total_items);
                        // console.log("lessbefore:"+doc3.subcategories);
                        for (var i = 0; i < doc3.subcategories.length; i++) {
                            // console.log("cat:"+doc3.subcategories[i]);
                            if (doc3.subcategories[i] == selected_id) {
                                doc3.subcategories.splice(i, 1);
                            }
                        }
                        __WEBPACK_IMPORTED_MODULE_2_jquery__('[id="' + doc3._id + '"]').text("(" + doc3.total_items + ")");
                        //  console.log("lessafter:"+doc3.subcategories);
                        doc3.subcategories = doc3.subcategories;
                        return db.put(doc3);
                    }).then(function () {
                        //return db.get(doc3.parent);
                    }).then(function (doc3) {
                        //console.log(doc3);
                    });
                    db.get(doc.parent).then(function (doc4) {
                        doc4.total_items = doc4.total_items + doc1.total_items;
                        //console.log("name:"+doc4.name+"total:"+doc4.total_items);
                        __WEBPACK_IMPORTED_MODULE_2_jquery__('[id="' + doc4._id + '"]').text("(" + doc4.total_items + ")");
                        // put them back
                        return db.put(doc4);
                    }).then(function () {
                        //return db.get(doc.parent);
                    }).then(function (doc4) {
                        //console.log(doc2);
                    });
                }
                doc1.parent = doc.parent;
                db.put(doc1);
                var total3 = 0;
                db.get(doc1.parent).then(function (doc12) {
                    db.get(doc12.parent).then(function (doc11) {
                        //console.log(doc11);                       
                        for (var i = 0; i < doc11.subcategories.length; i++) {
                            db.get(doc11.subcategories[i], function (err6, res6) {
                                total3 += res6.total_items;
                                // console.log("loop2:"+"name:"+res6.name+"/"+res6.total_items);
                                // console.log(total3);
                                //console.log("id2 is:"+doc11._id);
                                __WEBPACK_IMPORTED_MODULE_2_jquery__('[id="' + doc11._id + '"]').text("(" + total3 + ")");
                                db.get(res6._id).then(function (origDoc) {
                                    doc11._rev = origDoc._rev;
                                    doc11.total_items = total3;
                                    return db.put(doc11);
                                }).catch(function (err5) {
                                    if (err5.status === 409) {
                                        //return db.get(doc11)
                                    }
                                    else {
                                        //return db.put(doc11);
                                    }
                                });
                            });
                        }
                        setTimeout(function () {
                            var total5 = 0;
                            db.get(doc11.parent).then(function (doc13) {
                                //  console.log(doc13); 
                                //  console.log(doc11);  
                                // console.log(doc11.total_items);                    
                                for (var i = 0; i < doc13.subcategories.length; i++) {
                                    db.get(doc13.subcategories[i], function (err7, res7) {
                                        total5 += res7.total_items;
                                        // console.log("loop3:"+"name:"+res7.name+"/"+res7.total_items);
                                        //  console.log(total5);
                                        // console.log("id3 is:"+doc13._id);
                                        __WEBPACK_IMPORTED_MODULE_2_jquery__('[id="' + doc13._id + '"]').text("(" + total5 + ")");
                                        db.get(doc13._id).then(function (origDoc) {
                                            doc13._rev = origDoc._rev;
                                            doc13.total_items = total5;
                                            return db.put(doc13);
                                        }).catch(function (err7) {
                                            if (err7.status === 409) {
                                                //return db.get(doc11)
                                            }
                                            else {
                                                return db.put(doc13);
                                            }
                                        });
                                    });
                                }
                                //  console.log(doc13);  
                                //return db.put(doc11);
                            }).then(function () {
                                //return db.get(doc3.parent);
                            }).then(function (doc12) {
                                //console.log(doc11);
                            });
                        }, 3000);
                        //return db.put(doc11);
                    }).then(function () {
                        //return db.get(doc3.parent);
                    }).then(function (doc12) {
                        //console.log(doc11);
                    });
                    //return db.put(doc11);
                }).then(function () {
                    //return db.get(doc3.parent);
                }).then(function (doc11) {
                    //console.log(doc11);
                });
                setTimeout(function () { that.update_category_items_count(); }, 2000);
                setTimeout(function () { that.update_category_items_count(); }, 4000);
                setTimeout(function () { that.update_parent_category_count(); }, 7000);
            }).then(function () {
                //return db.get(doc3.parent);
            }).then(function (doc1) {
                //console.log(doc3);
            });
        }).then(function (response, err) {
            // console.log(response);// handle response
        }).catch(function (err) {
            if (err.status === 409) {
            }
            else {
            }
        });
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.update_category_items_count();
        this.update_parent_category_count();
        var that = this; // display docs listing in template
        db.allDocs({
            include_docs: true,
            attachments: true,
        }, function (err, response) {
            if (err) {
                console.log(err);
            }
            if (response) {
                that.data = response.rows;
            }
            // handle result
        });
    };
    DashboardComponent.prototype.show_category_items = function (obj) {
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".category_box").remove();
        var breadcrumb = "";
        var breadcrumb1 = "";
        var url = "";
        var category_id = obj.toString();
        db.get(category_id, { attachments: true }).then(function (doc) {
            var items = "";
            var _loop_1 = function (i) {
                __WEBPACK_IMPORTED_MODULE_2_jquery__(".col.s7 .ajax-loader").show();
                db.get(doc.items[i], function (err, res) {
                    if (err) {
                        // return console.log(err);
                    }
                    if (res) {
                        //  console.log(doc);
                        __WEBPACK_IMPORTED_MODULE_2_jquery__(".fruit").text(doc.name);
                        __WEBPACK_IMPORTED_MODULE_2_jquery__("#category_id").val(category_id);
                        __WEBPACK_IMPORTED_MODULE_2_jquery__(".default_message").hide();
                        __WEBPACK_IMPORTED_MODULE_2_jquery__(".heading").show();
                        // console.log("mydata");   
                        //console.log(res);
                        items += '<tr><td class="first-line"><input  class="filled-in" type="checkbox" name="items" id="' + i + '"  onclick=show_item_detail("' + res._id + '","' + i + '");> <label for="' + i + '"></label></td><td>' + res.english + '</td><td>' + res.chinese + '</td><td>' + res.pinyin + '</td><td><i class="material-icons">image</i></td><td><i class="material-icons">audiotrack</i></td><td>0</td></tr>';
                        __WEBPACK_IMPORTED_MODULE_2_jquery__(".responsive-table tbody").html(items);
                        __WEBPACK_IMPORTED_MODULE_2_jquery__(".col.s7 .ajax-loader").hide();
                        // return console.log(res);
                        //  console.log("own"+category_id);
                        var imageFW = db.getAttachment(category_id, 'attach_image');
                        __WEBPACK_IMPORTED_MODULE_2_jquery__(".bredcrumb .nav-wrapper").html(breadcrumb);
                        imageFW.then(function (blob) {
                            url = URL.createObjectURL(blob);
                            __WEBPACK_IMPORTED_MODULE_2_jquery__('.apple .img-responsive').attr("src", url);
                        }).catch(function (err) {
                            // $('.apple .img-responsive').attr("src", "");
                            // console.log(err);
                        });
                    }
                });
            };
            for (var i = 0; i < doc.num_items; i++) {
                _loop_1(i);
            }
            db.get(category_id, function (err1, res1) {
                if (err1) {
                    // return console.log(err1);
                }
                if (res1) {
                    if (res1.subcategories == "") {
                        //console.log(res1.name);
                        breadcrumb += '<a href="javascript:void(0);" class="breadcrumb">' + res1.name + ' &nbsp;  </a>';
                        __WEBPACK_IMPORTED_MODULE_2_jquery__(".bredcrumb .nav-wrapper").html(breadcrumb);
                        db.get(res1.parent, function (err2, res2) {
                            if (res2) {
                                breadcrumb += '<a href="javascript:void(0);" class="breadcrumb">' + res2.name + ' &nbsp; > </a>';
                                __WEBPACK_IMPORTED_MODULE_2_jquery__(".bredcrumb .nav-wrapper").html(breadcrumb);
                                db.get(res2.parent, function (err3, res3) {
                                    if (res3) {
                                        if (res3.parent == "") {
                                            breadcrumb += '<a href="javascript:void(0);" class="breadcrumb">' + res3.name + ' &nbsp; > </a>';
                                            __WEBPACK_IMPORTED_MODULE_2_jquery__(".bredcrumb .nav-wrapper").html(breadcrumb);
                                        }
                                        else {
                                            breadcrumb += '<a href="javascript:void(0);" class="breadcrumb">' + res3.name + ' &nbsp; > </a>';
                                            __WEBPACK_IMPORTED_MODULE_2_jquery__(".bredcrumb .nav-wrapper").html(breadcrumb);
                                            db.get(res3.parent, function (err4, res4) {
                                                if (res4) {
                                                    if (res4.parent == "") {
                                                        breadcrumb += '<a href="javascript:void(0);" class="breadcrumb">' + res4.name + ' &nbsp; > </a>';
                                                        __WEBPACK_IMPORTED_MODULE_2_jquery__(".bredcrumb .nav-wrapper").html(breadcrumb);
                                                    }
                                                    else {
                                                        db.get(res4.parent, function (err5, res5) {
                                                            if (res5) {
                                                                breadcrumb += '<a href="javascript:void(0);" class="breadcrumb">' + res5.name + ' &nbsp; > </a>';
                                                                __WEBPACK_IMPORTED_MODULE_2_jquery__(".bredcrumb .nav-wrapper").html(breadcrumb);
                                                            }
                                                        });
                                                    }
                                                }
                                            });
                                        }
                                    }
                                });
                            }
                        });
                    }
                }
            });
        }).then(function (response) {
            __WEBPACK_IMPORTED_MODULE_2_jquery__("#catgory_form_submit").hide();
            // console.log(response);// handle response
        }).catch(function (err) {
            //  console.log(err);
        });
        return false;
    };
    DashboardComponent.prototype.onRightClick = function (obj, obj1) {
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".category_box").remove();
        __WEBPACK_IMPORTED_MODULE_2_jquery__("#cat" + obj).next().after("<div class='category_box'><div class='category_box_inner'><div class='heading_category_name'><label>Enter Category Name:</label><input type='text' value='' id='new_cat'></div><div class='category_submit'> <a href='javascript:void(0);' title='save' onclick=add_new_category('" + obj1 + "');>Save</a><a href='javascript:void(0);' title='cancel' onclick='return close_box();'>Cancel</a></div></div></div>");
    };
    DashboardComponent.prototype.update_category_items_count = function () {
        var that = this;
        db.allDocs({
            include_docs: true,
            attachments: true,
        }, function (err, response) {
            if (err) {
                console.log(err);
            }
            if (response) {
                var _loop_2 = function (i) {
                    var count = 0;
                    var items = 0;
                    if (response.rows[i].doc.parent == false) {
                        for (var k = 0; k < response.rows[i].doc.subcategories.length; k++) {
                            db.get(response.rows[i].doc.subcategories[k], function (err1, res1) {
                                var total7 = 0;
                                for (var j = 0; j < res1.subcategories.length; j++) {
                                    db.get(res1.subcategories[j], function (err2, res2) {
                                        total7 += res2.total_items;
                                        //console.log("subparent:"+total7);
                                        //console.log("parent:"+res2.parent);
                                        //console.log(total7);
                                        db.get(res2.parent).then(function (doc11) {
                                            doc11.total_items = total7;
                                            __WEBPACK_IMPORTED_MODULE_2_jquery__('[id="' + doc11._id + '"]').text("(" + total7 + ")");
                                            return db.put(doc11);
                                        }).catch(function (err) {
                                            if (err.status === 409) {
                                                return res2;
                                            }
                                            else {
                                                //return db.put(doc11);
                                            }
                                        });
                                    });
                                }
                            });
                        }
                        var total_1 = 0;
                        for (var j = 0; j < response.rows[i].doc.subcategories.length; j++) {
                            db.get(response.rows[i].doc.subcategories[j], function (err1, res1) {
                                total_1 += res1.total_items;
                                //console.log("parent:"+total);
                                //this.ngzone.run()
                                db.get(res1.parent).then(function (doc7) {
                                    //console.log(doc7);
                                    // console.log(res1.parent);
                                    __WEBPACK_IMPORTED_MODULE_2_jquery__('[id="' + doc7._id + '"]').text("(" + total_1 + ")");
                                    db.put({
                                        "name": doc7.name,
                                        "total_items": total_1,
                                        "num_items": 0,
                                        "subcategories": doc7.subcategories,
                                        "parent": false,
                                        "items": [],
                                        "_id": doc7._id,
                                        "_rev": doc7._rev,
                                    }).then(function (response3) {
                                    }).catch(function (err3) {
                                        if (err3.status === 409) {
                                            return res1;
                                        }
                                        else {
                                            //return db.put(doc11);
                                        }
                                    });
                                });
                            });
                        }
                    }
                };
                for (var i = 0; i < response.rows.length; i++) {
                    _loop_2(i);
                }
            }
            // handle result
        });
    };
    DashboardComponent.prototype.update_parent_category_count = function () {
        var that = this;
        db.allDocs({
            include_docs: true,
            attachments: true,
        }, function (err, response) {
            if (err) {
                console.log(err);
            }
            if (response) {
                var _loop_3 = function (i) {
                    var count = 0;
                    var items = 0;
                    if (response.rows[i].doc.parent == false) {
                        var total_2 = 0;
                        for (var j = 0; j < response.rows[i].doc.subcategories.length; j++) {
                            db.get(response.rows[i].doc.subcategories[j], function (err1, res1) {
                                total_2 += res1.total_items;
                                //this.ngzone.run()
                                //console.log(response.rows[i].doc.subcategories[j]); 
                                db.get(res1.parent).then(function (doc7) {
                                    //console.log(doc7);
                                    //  console.log("parent:"+total+"/name:"+doc7.name);
                                    // console.log(res1.parent);
                                    __WEBPACK_IMPORTED_MODULE_2_jquery__('[id="' + doc7._id + '"]').text("(" + total_2 + ")");
                                    __WEBPACK_IMPORTED_MODULE_2_jquery__(".ajax-loader-menu").hide();
                                    db.put({
                                        "name": doc7.name,
                                        "total_items": total_2,
                                        "num_items": 0,
                                        "subcategories": doc7.subcategories,
                                        "parent": false,
                                        "items": [],
                                        "_id": doc7._id,
                                        "_rev": doc7._rev,
                                    }).then(function (response3) {
                                    }).catch(function (err3) {
                                        if (err3.status === 409) {
                                            return res1;
                                        }
                                        else {
                                            //return db.put(doc11);
                                        }
                                    });
                                });
                            });
                        }
                    }
                };
                for (var i = 0; i < response.rows.length; i++) {
                    _loop_3(i);
                }
            }
            // handle result
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_dragula_ng2_dragula__["DragulaService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_dragula_ng2_dragula__["DragulaService"]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/digital/digital.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/digital/digital.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  digital works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/digital/digital.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DigitalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DigitalComponent = (function () {
    function DigitalComponent() {
    }
    DigitalComponent.prototype.ngOnInit = function () {
    };
    return DigitalComponent;
}());
DigitalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-digital',
        template: __webpack_require__("../../../../../src/app/digital/digital.component.html"),
        styles: [__webpack_require__("../../../../../src/app/digital/digital.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DigitalComponent);

//# sourceMappingURL=digital.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map