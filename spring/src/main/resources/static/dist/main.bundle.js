webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationService = (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
        this.loginUrl = "http://localhost:8080/members";
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json; charset=utf-8' });
        // private loggedIn = new Subject<boolean>();
        this.subject = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
    }
    AuthenticationService.prototype.getObservable = function () {
        console.log('getObservable() working');
        return this.subject.asObservable();
    };
    AuthenticationService.prototype.login = function (email, password) {
        var _this = this;
        var url = this.loginUrl + "/login";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json;  charset=utf-8', 'Accept': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var member = { "mEmail": email, "mPassword": password };
        console.log('member = ' + JSON.stringify(member));
        // return this.http.post(url, JSON.stringify(member), options).toPromise().then(
        //   res => {
        //     let json = res.text();
        //     console.log("service login =" + json);
        //     if(json === "fail") {
        //       return json || {};
        //     } else {
        //       // json = JSON.parse(json);
        //       sessionStorage.setItem('member', json);
        //       //이때, top-nav로 가서 처리
        //       this.subject.next({ json });
        //       return json || {};
        //     }
        //
        //   });
        return this.http.post(url, JSON.stringify(member), options).toPromise().then(function (res) {
            var member = res.json();
            console.log('error =' + member.merror);
            if (member.merror !== null) {
                return JSON.stringify(member) || {};
            }
            else {
                var m = JSON.stringify(member);
                sessionStorage.setItem('member', m);
                //이때, top-nav로 가서 처리
                _this.subject.next({ login: 'true' });
                return m || {};
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        var url = this.loginUrl + "/logout";
        return this.http.get(url);
    };
    AuthenticationService.prototype.extractDataForObject = function (res) {
        console.log('extractDataForObject#res = ' + JSON.stringify(res));
        var json = res.text();
        json = JSON.parse(json);
        return json || {};
    };
    AuthenticationService.prototype.extractData = function (res) {
        console.log('extractData#res = ' + JSON.stringify(res));
        var json = res.text();
        json = JSON.parse(json);
        return json || [];
    };
    AuthenticationService.prototype.handleError = function (res) {
        console.log("Erroe = " + res);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(res.json().error || 'Server Down');
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthenticationService);

var _a, _b;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/file-upload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadFileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploadFileService = (function () {
    function UploadFileService(http) {
        this.http = http;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    UploadFileService.prototype.pushFileToStorage = function (file, progress, foodName) {
        var formdata = new FormData();
        formdata.append('file', file);
        formdata.append('foodName', foodName);
        var req = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpRequest */]('POST', '/post', formdata, {
            reportProgress: true,
            responseType: 'text'
        });
        this.http.request(req).subscribe(function (event) {
            // if (event.type === HttpEventType.UploadProgress) {
            //   progress.percentage = Math.round(100 * event.loaded / event.total);
            //     this.subject.next({upload:'ok'});
            // } else if (event instanceof HttpResponse) {
            //   console.log('File is completely uploaded!');
            // }
        });
    };
    UploadFileService.prototype.getFiles = function () {
        return this.http.get('/getallfiles');
    };
    UploadFileService.prototype.getObservable = function () {
        return this.subject.asObservable();
    };
    return UploadFileService;
}());
UploadFileService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], UploadFileService);

var _a;
//# sourceMappingURL=file-upload.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/google-map.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GoogleMapService = (function () {
    function GoogleMapService(http) {
        this.http = http;
        this.truckUrl = "http://localhost:8080/trucks";
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json; charset=utf-8' });
    }
    GoogleMapService.prototype.getTruckAllList = function () {
        return this.http.get(this.truckUrl + "/getalltrucks")
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    GoogleMapService.prototype.extractData = function (res) {
        console.log('res = ' + JSON.stringify(res));
        var json = res.text();
        json = JSON.parse(json);
        return json || [];
    };
    GoogleMapService.prototype.extractDataForObject = function (res) {
        console.log('res = ' + JSON.stringify(res));
        var json = res.text();
        json = JSON.parse(json);
        return json || {};
    };
    GoogleMapService.prototype.handleError = function (res) {
        console.log(res);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(res.json().error || 'Server Down');
    };
    return GoogleMapService;
}());
GoogleMapService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], GoogleMapService);

var _a;
//# sourceMappingURL=google-map.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/hotlist.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotlistService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HotlistService = (function () {
    function HotlistService(http) {
        this.http = http;
        this.hotlistUrl = "http://localhost:8080/hotlist";
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json; charset=utf-8' });
        this.subject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.session = sessionStorage.getItem('member');
        // if(this.session !== null){
        //   this.member = JSON.parse(this.session);
        // }
        console.log('review service # constructor # session =' + this.session);
    }
    HotlistService.prototype.getObservable = function () {
        return this.subject.asObservable();
    };
    HotlistService.prototype.getHotlistDetail = function () {
        if (this.session !== null) {
            this.member = JSON.parse(this.session);
        }
        var email = this.member.memail;
        var url = this.hotlistUrl + "/" + email;
        return this.http.get(url)
            .map(this.extractData)
            ._catch(this.handleError);
    };
    HotlistService.prototype.addHotlist = function (member, truck) {
        var url = this.hotlistUrl;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var hotlist = { "hId": null, "hMember": member, "hTruck": truck };
        console.log(' add holist info = ' + JSON.stringify(hotlist));
        return this.http.post(url, JSON.stringify(hotlist), options)
            .map(this.extractDataForObject)
            ._catch(this.handleError);
    };
    //되는 remove
    HotlistService.prototype.removeHotlist = function (hotlistdetail) {
        var url = this.hotlistUrl + "/" + hotlistdetail.hid;
        console.log('remove url=' + url);
        return this.http.delete(url, { headers: this.headers })
            .map(function (res) {
            var json = res.text();
            // this.subject.next({ json });
            return json || {};
        })
            ._catch(this.handleError);
    };
    HotlistService.prototype.extractDataForObject = function (res) {
        var json = res.text();
        console.log('hotlist service=' + json);
        json = JSON.parse(json);
        return json || {};
    };
    HotlistService.prototype.extractData = function (res) {
        var json = res.text();
        json = JSON.parse(json);
        return json || [];
    };
    HotlistService.prototype.handleError = function (res) {
        console.log("Erroe = " + res);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(res.json().error || 'Server Down');
    };
    return HotlistService;
}());
HotlistService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], HotlistService);

var _a;
//# sourceMappingURL=hotlist.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/member.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';


var MemberService = (function () {
    function MemberService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.memberUrl = "http://localhost:8080/members";
    }
    MemberService.prototype.getMember = function (memail) {
        var url = this.memberUrl + "/" + sessionStorage.getItem('member');
        return this.http.get(url)
            .map(this.extractDataForObject)
            ._catch(this.handleError);
    };
    MemberService.prototype.addMember = function (email, password, nickname, registype) {
        var url = this.memberUrl + "/regist";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var member = { "mEmail": email, "mPassword": password, "mNickname": nickname, "mRegistype": registype };
        console.log('member = ' + JSON.stringify(member));
        return this.http.post(url, JSON.stringify(member), options)
            .map(this.extractDataForObject)
            .catch(this.handleError);
    };
    MemberService.prototype.extractDataForObject = function (res) {
        var json = res.text();
        console.log(json);
        json = JSON.parse(json);
        return json || {};
    };
    MemberService.prototype.extractData = function (res) {
        console.log('extractData#res = ' + JSON.stringify(res));
        var json = res.text();
        json = JSON.parse(json);
        return json || [];
    };
    MemberService.prototype.handleError = function (res) {
        console.log("Erroe = " + res);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(res.json().error || 'Server Down');
    };
    return MemberService;
}());
MemberService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], MemberService);

var _a, _b;
//# sourceMappingURL=member.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/review.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReviewService = (function () {
    function ReviewService(http) {
        this.http = http;
        this.reviewUrl = "http://localhost:8080/reviews";
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json; charset=utf-8' });
        // console.log('언제실행?')
        this.session = sessionStorage.getItem('member');
        console.log('review service # constructor # session =' + this.session);
    }
    //내가 등록한 리뷰를 가져온다.
    ReviewService.prototype.getMyReview = function () {
        console.log('review service # getMyReview # session =' + this.session);
        if (this.session !== null) {
            this.member = JSON.parse(this.session);
        }
        var email = this.member.memail;
        var url = this.reviewUrl + "/member/" + email;
        console.log('review url=' + url);
        return this.http.get(url)
            .map(this.extractData)
            ._catch(this.handleError);
    };
    ReviewService.prototype.getTruckReview = function () {
        console.log('review service # getTruckReview # session =' + this.session);
        if (this.session !== null) {
            this.member = JSON.parse(this.session);
        }
        //트럭아이디를 어떻게 가져 올 것인가? ----------
        var email = this.member.memail;
        var url = this.reviewUrl + "/truck/" + email;
        console.log('review url=' + url);
        return this.http.get(url)
            .map(this.extractData)
            ._catch(this.handleError);
    };
    ReviewService.prototype.addReview = function (comment, image, score, email, truck) {
        var url = this.reviewUrl;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var review = { "rComment": comment, "rImage": image, "rScore": score, "rMember": email, "rTruck": truck };
        console.log('add review info = ' + JSON.stringify(review));
        return this.http.post(url, JSON.stringify(review), options)
            .map(function (res) {
            var json = res.text();
            console.log('json=' + json);
            return json || {};
        })
            ._catch(this.handleError);
    };
    ReviewService.prototype.removeReview = function (review) {
        var url = this.reviewUrl + "/" + review.rid;
        console.log('review remove url= ' + url);
        return this.http.delete(url, { headers: this.headers })
            .map(function (res) {
            var json = res.text();
            return json || {};
        })
            ._catch(this.handleError);
    };
    ReviewService.prototype.extractDataForObject = function (res) {
        var json = res.text();
        console.log('review service=' + json);
        json = JSON.parse(json);
        return json || {};
    };
    ReviewService.prototype.extractData = function (res) {
        var json = res.text();
        console.log('review service=' + json);
        json = JSON.parse(json);
        return json || [];
    };
    ReviewService.prototype.handleError = function (res) {
        console.log("Erroe = " + res);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(res.json().error || 'Server Down');
    };
    return ReviewService;
}());
ReviewService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ReviewService);

var _a;
//# sourceMappingURL=review.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/truck.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruckService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TruckService = (function () {
    function TruckService(http2) {
        this.http2 = http2;
        this.trucks2 = [];
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.trucksUrl = "http://localhost:8080/trucks";
    }
    // truckRegist(name: string, open: string, close: string, lat: string, lng: string, comment: string, file: File) {
    TruckService.prototype.truckRegist = function (name, open, close, lat, lng, comment, file, email) {
        var _this = this;
        var url = this.trucksUrl + "/post";
        var formdata = new FormData();
        var address;
        // let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        // let options = new RequestOptions({ headers: headers });
        this.http2.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&key=AIzaSyAmd6XJpMMk5qA869GC9XXrNmo8Fb1cRYg")
            .subscribe(function (response) {
            console.log(response.json());
            console.log(response.json().results[0].formatted_address);
            address = response.json().results[0].formatted_address;
            console.log(address);
            console.log(email);
            formdata.append('name', name);
            formdata.append('open', open);
            formdata.append('close', close);
            formdata.append('lat', lat);
            formdata.append('lng', lng);
            formdata.append('comment', comment);
            formdata.append('file', file);
            formdata.append('address', address);
            formdata.append('email', email);
            console.log(formdata.get('address'));
            console.log(formdata.get('file'));
            return _this.http2.post(url, formdata).subscribe();
        });
    };
    TruckService.prototype.truckgetAll = function () {
        var url = this.trucksUrl + "/getalltrucks";
        return this.http2.get(url);
    };
    TruckService.prototype.keyFind = function (key) {
        console.log(key);
        var url = this.trucksUrl + "/find/" + key;
        console.log(url);
        //   this.trucks2=[];
        //   this.http2.get("https://maps.googleapis.com/maps/api/geocode/json?address=+"+f+"&key=AIzaSyAmd6XJpMMk5qA869GC9XXrNmo8Fb1cRYg")
        //   .subscribe(res=>{
        //     console.log(res.json().results[0].geometry.location)
        //     var lat = res.json().results[0].geometry.location.lat;
        //     var lng = res.json().results[0].geometry.location.lng;
        //     console.log(lat);
        //     console.log(lng);
        //
        //     let url = `${this.membersUrl}/${lat}/${lng}`;
        //     console.log(url);
        //
        //     this.http2.get(url).subscribe(res=>
        //       {
        //
        //         var result = res.json();
        //         console.log(result)
        //         for(let i=0; i<result.length; i++){
        //           // this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address=+"+f.address+"&key=AIzaSyAmd6XJpMMk5qA869GC9XXrNmo8Fb1cRYg")
        //           this.http2.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+result[i].tlat+","+result[i].tlng+"&key=AIzaSyAmd6XJpMMk5qA869GC9XXrNmo8Fb1cRYg")
        //           .subscribe(response=>
        //             {
        //               result[i].address = response.json().results[1].formatted_address;
        //             })
        //             this.trucks2.push(result[i]);
        //           }
        //           console.log(this.trucks2)
        //           return this.trucks2;
        //         });
        //   });
        return this.http2.get(url);
    };
    return TruckService;
}());
TruckService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TruckService);

var _a;
//# sourceMappingURL=truck.service.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_map_google_map_component__ = __webpack_require__("../../../../../src/app/google-map/google-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_home_main_home_component__ = __webpack_require__("../../../../../src/app/main-home/main-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_page_login_page_component__ = __webpack_require__("../../../../../src/app/login-page/login-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__join_page_join_page_component__ = __webpack_require__("../../../../../src/app/join-page/join-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__canival_canival_component__ = __webpack_require__("../../../../../src/app/canival/canival.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__truck_list_truck_list_component__ = __webpack_require__("../../../../../src/app/truck-list/truck-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__support_support_component__ = __webpack_require__("../../../../../src/app/support/support.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__favorites_favorites_component__ = __webpack_require__("../../../../../src/app/favorites/favorites.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__reviews_reviews_component__ = __webpack_require__("../../../../../src/app/reviews/reviews.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__truck_info_truck_info_component__ = __webpack_require__("../../../../../src/app/truck-info/truck-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__truck_reviews_truck_reviews_component__ = __webpack_require__("../../../../../src/app/truck-reviews/truck-reviews.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__menu_list_menu_list_component__ = __webpack_require__("../../../../../src/app/menu-list/menu-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__truck_regist_truck_regist_component__ = __webpack_require__("../../../../../src/app/truck-regist/truck-regist.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    { path: '', redirectTo: '/main-home', pathMatch: 'full' },
    { path: 'main-home', component: __WEBPACK_IMPORTED_MODULE_3__main_home_main_home_component__["a" /* MainHomeComponent */] },
    { path: 'truck-map', component: __WEBPACK_IMPORTED_MODULE_2__google_map_google_map_component__["a" /* GoogleMapComponent */] },
    { path: 'login-page', component: __WEBPACK_IMPORTED_MODULE_4__login_page_login_page_component__["a" /* LoginPageComponent */] },
    { path: 'join-page', component: __WEBPACK_IMPORTED_MODULE_5__join_page_join_page_component__["a" /* JoinPageComponent */] },
    { path: 'canival', component: __WEBPACK_IMPORTED_MODULE_6__canival_canival_component__["a" /* CanivalComponent */] },
    { path: 'truck-list', component: __WEBPACK_IMPORTED_MODULE_7__truck_list_truck_list_component__["a" /* TruckListComponent */] },
    { path: 'favorites', component: __WEBPACK_IMPORTED_MODULE_9__favorites_favorites_component__["a" /* FavoritesComponent */] },
    { path: 'support', component: __WEBPACK_IMPORTED_MODULE_8__support_support_component__["a" /* SupportComponent */] },
    { path: 'reviews', component: __WEBPACK_IMPORTED_MODULE_10__reviews_reviews_component__["a" /* ReviewsComponent */] },
    { path: 'menu-list', component: __WEBPACK_IMPORTED_MODULE_13__menu_list_menu_list_component__["a" /* MenuListComponent */] },
    { path: 'truck-info/:tid', component: __WEBPACK_IMPORTED_MODULE_11__truck_info_truck_info_component__["a" /* TruckInfoComponent */] },
    { path: 'truck-reviews', component: __WEBPACK_IMPORTED_MODULE_12__truck_reviews_truck_reviews_component__["a" /* TruckReviewsComponent */] },
    { path: 'truck-regist', component: __WEBPACK_IMPORTED_MODULE_14__truck_regist_truck_regist_component__["a" /* TruckRegistComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

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

module.exports = "<app-top-nav></app-top-nav>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bar_rating__ = __webpack_require__("../../../../ngx-bar-rating/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__google_map_google_map_component__ = __webpack_require__("../../../../../src/app/google-map/google-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__file_upload_file_upload_component__ = __webpack_require__("../../../../../src/app/file-upload/file-upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__main_home_main_home_component__ = __webpack_require__("../../../../../src/app/main-home/main-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_page_login_page_component__ = __webpack_require__("../../../../../src/app/login-page/login-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__join_page_join_page_component__ = __webpack_require__("../../../../../src/app/join-page/join-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__top_nav_top_nav_component__ = __webpack_require__("../../../../../src/app/top-nav/top-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__canival_canival_component__ = __webpack_require__("../../../../../src/app/canival/canival.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__truck_list_truck_list_component__ = __webpack_require__("../../../../../src/app/truck-list/truck-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__support_support_component__ = __webpack_require__("../../../../../src/app/support/support.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__favorites_favorites_component__ = __webpack_require__("../../../../../src/app/favorites/favorites.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__reviews_reviews_component__ = __webpack_require__("../../../../../src/app/reviews/reviews.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__truck_info_truck_info_component__ = __webpack_require__("../../../../../src/app/truck-info/truck-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__truck_reviews_truck_reviews_component__ = __webpack_require__("../../../../../src/app/truck-reviews/truck-reviews.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__menu_list_menu_list_component__ = __webpack_require__("../../../../../src/app/menu-list/menu-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__truck_regist_truck_regist_component__ = __webpack_require__("../../../../../src/app/truck-regist/truck-regist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_member_service__ = __webpack_require__("../../../../../src/app/_services/member.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_hotlist_service__ = __webpack_require__("../../../../../src/app/_services/hotlist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_review_service__ = __webpack_require__("../../../../../src/app/_services/review.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_google_map_service__ = __webpack_require__("../../../../../src/app/_services/google-map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_truck_service__ = __webpack_require__("../../../../../src/app/_services/truck.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_file_upload_service__ = __webpack_require__("../../../../../src/app/_services/file-upload.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//review star rating

//component
















//service







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__google_map_google_map_component__["a" /* GoogleMapComponent */],
            __WEBPACK_IMPORTED_MODULE_11__file_upload_file_upload_component__["a" /* FileUploadComponent */],
            __WEBPACK_IMPORTED_MODULE_12__main_home_main_home_component__["a" /* MainHomeComponent */],
            __WEBPACK_IMPORTED_MODULE_13__login_page_login_page_component__["a" /* LoginPageComponent */],
            __WEBPACK_IMPORTED_MODULE_14__join_page_join_page_component__["a" /* JoinPageComponent */],
            __WEBPACK_IMPORTED_MODULE_15__top_nav_top_nav_component__["a" /* TopNavComponent */],
            __WEBPACK_IMPORTED_MODULE_16__canival_canival_component__["a" /* CanivalComponent */],
            __WEBPACK_IMPORTED_MODULE_17__truck_list_truck_list_component__["a" /* TruckListComponent */],
            __WEBPACK_IMPORTED_MODULE_18__support_support_component__["a" /* SupportComponent */],
            __WEBPACK_IMPORTED_MODULE_19__favorites_favorites_component__["a" /* FavoritesComponent */],
            __WEBPACK_IMPORTED_MODULE_20__reviews_reviews_component__["a" /* ReviewsComponent */],
            __WEBPACK_IMPORTED_MODULE_21__truck_info_truck_info_component__["a" /* TruckInfoComponent */],
            __WEBPACK_IMPORTED_MODULE_22__truck_reviews_truck_reviews_component__["a" /* TruckReviewsComponent */],
            __WEBPACK_IMPORTED_MODULE_23__menu_list_menu_list_component__["a" /* MenuListComponent */],
            __WEBPACK_IMPORTED_MODULE_24__truck_regist_truck_regist_component__["a" /* TruckRegistComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
            //review star rating
            __WEBPACK_IMPORTED_MODULE_8_ngx_bar_rating__["a" /* BarRatingModule */],
            __WEBPACK_IMPORTED_MODULE_6__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyBFQmGdDApLDMW8Fp3F8VtOv9kwAg1xAUU',
                region: "kr",
                libraries: ["places"],
            })
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_25__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_26__services_member_service__["a" /* MemberService */],
            __WEBPACK_IMPORTED_MODULE_27__services_hotlist_service__["a" /* HotlistService */],
            __WEBPACK_IMPORTED_MODULE_28__services_review_service__["a" /* ReviewService */],
            __WEBPACK_IMPORTED_MODULE_29__services_google_map_service__["a" /* GoogleMapService */],
            __WEBPACK_IMPORTED_MODULE_30__services_truck_service__["a" /* TruckService */],
            __WEBPACK_IMPORTED_MODULE_31__services_file_upload_service__["a" /* UploadFileService */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/canival/canival.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/canival/canival.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  canival works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/canival/canival.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanivalComponent; });
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

var CanivalComponent = (function () {
    function CanivalComponent() {
    }
    CanivalComponent.prototype.ngOnInit = function () {
    };
    return CanivalComponent;
}());
CanivalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-canival',
        template: __webpack_require__("../../../../../src/app/canival/canival.component.html"),
        styles: [__webpack_require__("../../../../../src/app/canival/canival.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CanivalComponent);

//# sourceMappingURL=canival.component.js.map

/***/ }),

/***/ "../../../../../src/app/favorites/favorites.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/favorites/favorites.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  favorites works!\r\n</p>\r\n<div class=\"bs-example container\">\r\n  <form class=\"form-horizontal\" name=\"form\" (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\" novalidate>\r\n    <div class=\"form-group\">\r\n      <label for=\"htruck\" class=\"control-label col-xs-2\">truckID</label>\r\n      <div class=\"col-xs-10\">\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"htruck\" name=\"htruck\" required>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <div class=\"col-xs-offset-2 col-xs-10\">\r\n        <div *ngIf=\"errorMessage\" class=\"alert alert-danger\">{{errorMessage}}</div>\r\n        <button type=\"submit\" class=\"btn btn-primary\">Add</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n\r\n\r\n\r\n  <div class=\"row\">\r\n    <h3>{{member.mnickname}} 님의 즐겨찾기</h3>\r\n    <div *ngIf=\"message\" class=\"alert alert-info\">{{message}}</div>\r\n    <div  class=\"col-md-4\" *ngFor=\"let h of hotlistDetail\">\r\n      <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\" >즐겨찾기 번호: {{h.hid}}</div>\r\n        <div class=\"panel-body\" >\r\n          트럭아이디: {{h.tid}}<br>\r\n          가게이름 : {{h.tname}} <br>\r\n          평점 : {{h.tavg}}점<br>\r\n          판매음식 : {{h.tfood}} <br>\r\n          위도와 경도 : {{h.tlat}} :: {{h.tlng}}<br>\r\n        </div>\r\n        <div class=\"panel-footer clearfix\">\r\n          <div class=\"pull-right\">\r\n            <a [routerLink]=\"['/favorites']\" class=\"text-warning\" (click)=\"removeHotlist(h)\">\r\n              <span class=\"glyphicon glyphicon-remove\"></span>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/favorites/favorites.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_hotlist_service__ = __webpack_require__("../../../../../src/app/_services/hotlist.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FavoritesComponent = (function () {
    function FavoritesComponent(hotlistService, http, router) {
        this.hotlistService = hotlistService;
        this.http = http;
        this.router = router;
        this.session = sessionStorage.getItem('member');
    }
    FavoritesComponent.prototype.ngOnInit = function () {
        this.getHotlistDetail();
    };
    FavoritesComponent.prototype.getHotlistDetail = function () {
        var _this = this;
        if (this.session !== null) {
            this.member = JSON.parse(this.session);
        }
        this.hotlistService.getHotlistDetail()
            .subscribe(function (result) {
            // console.log('hotlist detail='+result);
            _this.hotlistDetail = result;
        });
    };
    FavoritesComponent.prototype.onSubmit = function (f) {
        if (f.valid) {
            this.addHotlist(this.member.memail, f.value.htruck);
        }
    };
    FavoritesComponent.prototype.addHotlist = function (hmember, htruck) {
        var _this = this;
        this.hotlistService.addHotlist(hmember, htruck)
            .subscribe(function (result) {
            // alert(result.herror);
            _this.errorMessage = result.herror;
            //실제로 추가할 때는 필요없습니다.
            //지금은 테스트상으로 넣어둠.
            _this.getHotlistDetail();
        });
    };
    FavoritesComponent.prototype.removeHotlist = function (hotlistdetail) {
        var _this = this;
        this.hotlistService.removeHotlist(hotlistdetail)
            .subscribe(function (result) {
            console.log('hotlist remove = ' + result);
            _this.message = result;
            _this.getHotlistDetail();
        });
    };
    return FavoritesComponent;
}());
FavoritesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-favorites',
        template: __webpack_require__("../../../../../src/app/favorites/favorites.component.html"),
        styles: [__webpack_require__("../../../../../src/app/favorites/favorites.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_hotlist_service__["a" /* HotlistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_hotlist_service__["a" /* HotlistService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], FavoritesComponent);

var _a, _b, _c;
//# sourceMappingURL=favorites.component.js.map

/***/ }),

/***/ "../../../../../src/app/file-upload/file-upload.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/file-upload/file-upload.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<div *ngIf=\"currentFileUpload\" class=\"progress\">\r\n<div class=\"progress-bar progress-bar-info progress-bar-striped\"\r\nrole=\"progressbar\" attr.aria-valuenow=\"{{progress.percentage}}\"\r\naria-valuemin=\"0\" aria-valuemax=\"100\"\r\n[ngStyle]=\"{width:progress.percentage+'%'}\">\r\n{{progress.percentage}}%</div>\r\n</div>\r\n\r\n<label class=\"btn btn-default\">\r\n<input type=\"file\" (change)=\"selectFile($event)\">\r\n</label>\r\n\r\n<button class=\"btn btn-success\" [disabled]=\"!selectedFiles\"\r\n(click)=\"upload()\">Upload</button>\r\n"

/***/ }),

/***/ "../../../../../src/app/file-upload/file-upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_file_upload_service__ = __webpack_require__("../../../../../src/app/service/file-upload.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FileUploadComponent = (function () {
    function FileUploadComponent(uploadService) {
        this.uploadService = uploadService;
        this.progress = { percentage: 0 };
        this.cnt = 1;
    }
    FileUploadComponent.prototype.ngOnInit = function () {
    };
    FileUploadComponent.prototype.selectFile = function (event) {
        this.selectedFiles = event.target.files;
    };
    FileUploadComponent.prototype.upload = function () {
        this.progress.percentage = 0;
        this.currentFileUpload = this.selectedFiles.item(0);
        this.foodname = '라면';
        console.log(this.currentFileUpload.name);
        this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress, this.foodname);
        this.selectedFiles = undefined;
    };
    return FileUploadComponent;
}());
FileUploadComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-file-upload',
        template: __webpack_require__("../../../../../src/app/file-upload/file-upload.component.html"),
        styles: [__webpack_require__("../../../../../src/app/file-upload/file-upload.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_file_upload_service__["a" /* UploadFileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_file_upload_service__["a" /* UploadFileService */]) === "function" && _a || Object])
], FileUploadComponent);

var _a;
//# sourceMappingURL=file-upload.component.js.map

/***/ }),

/***/ "../../../../../src/app/google-map/google-map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\r\n    height: 300px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/google-map/google-map.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-container w3-content\" style=\"max-width:1400px;margin-top:80px\">\r\n  <div class=\"container\">\r\n\r\n    <!-- <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n    <a class=\"navbar-brand\" href=\"#\">My Google Maps</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n  <ul class=\"navbar-nav mr-auto\">\r\n  <li class=\"nav-item active\">\r\n  <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\r\n</li>\r\n<li class=\"nav-item\">\r\n<a class=\"nav-link\" href=\"#\">Link</a>\r\n</li>\r\n</ul>\r\n<form class=\"form-inline my-2 my-lg-0\">\r\n<input class=\"form-control\" style=\"width: 450px;\" #search placeholder=\"search for location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\"\r\ntype=\"text\">\r\n</form>\r\n<button type=\"button\" name=\"button\" (click)=\"saveLocal()\">현재 위치 마커</button>\r\n</div>\r\n</nav> -->\r\n\r\n<agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"true\" [zoom]=\"zoom\" (mapClick)=\"mapClick($event)\">\r\n  <agm-marker *ngFor=\"let truck of trucks; let i = index\" [latitude]=\"truck.tlat\" [longitude]=\"truck.tlng\" (markerClick)=\"clickedMarker(truck, i)\">\r\n    <agm-info-window [disableAutoPan]=\"true\">\r\n      <div class=\"\">\r\n        <strong>{{truck.tname}}</strong>\r\n        <div class=\"\">\r\n          {{truck.tcomment}}<br>\r\n          Open : {{truck.topen}} ~ Close : {{truck.tclose}}\r\n        </div>\r\n        <button type=\"button\" (click)=\"getFoodTruck(truck.tid)\">바로가기</button>\r\n      </div>\r\n    </agm-info-window>\r\n  </agm-marker>\r\n</agm-map>\r\n\r\n\r\n<div class=\"alert alert-warning\" role=\"alert\">\r\n  현재 지도 위치 : {{latitude}}, {{longitude}}\r\n</div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/google-map/google-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_google_map_service__ = __webpack_require__("../../../../../src/app/_services/google-map.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//npm install --save @agm/core 설치필요




var GoogleMapComponent = (function () {
    function GoogleMapComponent(mapsAPILoader, ngZone, mapService, router) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.mapService = mapService;
        this.router = router;
        this.trucks = [];
        this.markers = [
            {
                latitude: 37.483038487116616,
                longitude: 126.90061283105024,
            }
        ];
    }
    GoogleMapComponent.prototype.ngOnInit = function () {
        //set google maps defaults
        this.zoom = 16;
        this.latitude = 39.8282;
        this.longitude = -98.5795;
        this.mapTypeId = 'roadmap'; // 'roadmap'|'hybrid'|'satellite'|'terrain'
        //set current position
        this.setCurrentPosition();
        this.getAllTrucks();
        //load Places Autocomplete
        // this.mapsAPILoader.load().then(() => {
        //   let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        //     types: ["geocode"]
        //   });
        //   autocomplete.addListener("place_changed", () => {
        //     this.ngZone.run(() => {
        //       //get the place result
        //       let place: google.maps.places.PlaceResult = autocomplete.getPlace();
        //
        //       //verify result
        //       if (place.geometry === undefined || place.geometry === null) {
        //         return;
        //       }
        //
        //       //set latitude, longitude and zoom
        //       this.latitude = place.geometry.location.lat();
        //       this.longitude = place.geometry.location.lng();
        //       this.zoom = 16;
        //     });
        //   });
        // });
    };
    GoogleMapComponent.prototype.mapClick = function (event) {
        console.log("mapClick called : " + event.coords);
        this.latitude = event.coords.lat;
        this.longitude = event.coords.lng;
    };
    GoogleMapComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        console.log('set=' + navigator);
        console.log('set=' + navigator.geolocation.getCurrentPosition);
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                console.log('lat' + _this.latitude);
                _this.longitude = position.coords.longitude;
                console.log('lng' + _this.longitude);
                _this.zoom = 16;
                console.log(position.coords);
            });
        }
    };
    GoogleMapComponent.prototype.getAllTrucks = function () {
        var _this = this;
        this.mapService.getTruckAllList().subscribe(function (trucks) {
            for (var i = 0; i < trucks.length; i++) {
                _this.trucks.push(trucks[i]);
            }
        });
        console.log(this.trucks);
    };
    GoogleMapComponent.prototype.saveLocal = function () {
        console.log(navigator.geolocation.getCurrentPosition);
    };
    GoogleMapComponent.prototype.clickedMarker = function (marker, index) {
        console.log(marker);
    };
    GoogleMapComponent.prototype.getFoodTruck = function (tid) {
        console.log(tid);
        this.router.navigate(["truck-info", tid]);
    };
    return GoogleMapComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("search"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], GoogleMapComponent.prototype, "searchElementRef", void 0);
GoogleMapComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-google-map',
        template: __webpack_require__("../../../../../src/app/google-map/google-map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/google-map/google-map.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* MapsAPILoader */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_google_map_service__["a" /* GoogleMapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_google_map_service__["a" /* GoogleMapService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object])
], GoogleMapComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=google-map.component.js.map

/***/ }),

/***/ "../../../../../src/app/join-page/join-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/join-page/join-page.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  join-page works!\r\n</p>\r\n<div class=\"container\">\r\n  <div class=\"col-md-6 col-md-offset-3\">\r\n    <h2>회원가입</h2>\r\n    <form name=\"form\" (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\" novalidate>\r\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\r\n        <label for=\"email\">이메일</label>\r\n        <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" id=\"email\" name=\"email\" placeholder=\"Email\" required pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\">\r\n        <div *ngIf=\"errorMessage\" class=\"alert alert-danger\">{{errorMessage}}</div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"password\">비밀번호</label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"password\" id=\"password\" name=\"password\" placeholder=\"password\" required>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"nickname\">닉네임</label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"nickname\" id=\"nickname\" name=\"nickname\" placeholder=\"name\" required>\r\n      </div>\r\n\r\n      <div class=\"form-check form-check-inline\">\r\n        <label class=\"form-check-label\">\r\n          <input class=\"form-check-input\" type=\"radio\" name=\"registype\" [(ngModel)]=\"registype\" id=\"inlineRadio1\" value=\"1\"> 일반회원\r\n        </label>\r\n      </div>\r\n      <div class=\"form-check form-check-inline\">\r\n        <label class=\"form-check-label\">\r\n          <input class=\"form-check-input\" type=\"radio\" name=\"registype\" [(ngModel)]=\"registype\" id=\"inlineRadio2\" value=\"2\"> 사업자회원\r\n        </label>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <button type=\"submit\" class=\"btn btn-primary btn-sm\">\r\n          <b class=\"glyphicon glyphicon-plus\"></b>SEND\r\n        </button>\r\n        <a [routerLink]=\"['/login-page']\" class=\"btn btn-link\">취소</a>\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/join-page/join-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoinPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_member_service__ = __webpack_require__("../../../../../src/app/_services/member.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JoinPageComponent = (function () {
    function JoinPageComponent(memberService, router) {
        this.memberService = memberService;
        this.router = router;
        this.model = {};
    }
    JoinPageComponent.prototype.ngOnInit = function () {
    };
    JoinPageComponent.prototype.onSubmit = function (f) {
        if (f.valid) {
            var member = f.value;
            this.addMember(member.email, member.password, member.nickname, member.registype);
        }
    };
    JoinPageComponent.prototype.addMember = function (email, password, nickname, registype) {
        var _this = this;
        console.log('registype=' + registype);
        this.memberService.addMember(email, password, nickname, registype)
            .subscribe(function (res) {
            var member = res;
            if (member.merror !== null) {
                _this.errorMessage = member.merror;
                console.log(_this.errorMessage);
            }
            else {
                _this.router.navigate(['/login-page']);
            }
        });
    };
    return JoinPageComponent;
}());
JoinPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-join-page',
        template: __webpack_require__("../../../../../src/app/join-page/join-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/join-page/join-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_member_service__["a" /* MemberService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_member_service__["a" /* MemberService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], JoinPageComponent);

var _a, _b;
//# sourceMappingURL=join-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/login-page/login-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-page {\r\n\twidth: 360px;\r\n\tpadding: 8% 0 0;\r\n\tmargin: auto;\r\n}\r\n\r\n.form {\r\n\tposition: relative;\r\n\tz-index: 1;\r\n\tbackground: #FFFFFF;\r\n\tmax-width: 360px;\r\n\tmargin: 0 auto 100px;\r\n\tpadding: 45px;\r\n\ttext-align: center;\r\n\tbox-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-page/login-page.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  login-page works!\r\n</p>\r\n<div class=\"login-page\">\r\n\t<div class=\"form\">\r\n\t\t<form name=\"form\" class=\"login-form\" (ngSubmit)=\"f.form.valid && login(f)\" #f=\"ngForm\" novalidate>\r\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !memail.valid }\">\r\n        <label for=\"memail\">Email</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"memail\" placeholder=\"Email\" [(ngModel)]=\"model.memail\" #memail=\"ngModel\"  required />\r\n        <div *ngIf=\"f.submitted && !memail.valid\" class=\"help-block\">Email is required</div>\r\n      </div>\r\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !mpassword.valid }\">\r\n        <label for=\"mpassword\">Password</label>\r\n        <input type=\"password\" class=\"form-control\" name=\"mpassword\" placeholder=\"Password\" [(ngModel)]=\"model.mpassword\" #mpassword=\"ngModel\" required />\r\n        <div *ngIf=\"f.submitted && !mpassword.valid\" class=\"help-block\">Password is required</div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <button class=\"btn btn-primary\" [disabled]=\"f.invalid\">Login</button>\r\n      </div>\r\n      <p class=\"message\">Not registered? <a href=\"#\">Create an account</a></p>\r\n      <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/login-page/login-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPageComponent = (function () {
    function LoginPageComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.model = {};
        this.error = '';
    }
    LoginPageComponent.prototype.ngOnInit = function () {
    };
    LoginPageComponent.prototype.login = function (f) {
        var _this = this;
        this.authService.login(this.model.memail, this.model.mpassword)
            .then(function (result) {
            console.log('login log = ' + result);
            var member = JSON.parse(result);
            console.log('login member = ' + member.memail);
            if (member.merror === null) {
                _this.session = sessionStorage.getItem('member');
                _this.router.navigate(['/']);
            }
            else {
                _this.session = null;
                _this.error = member.merror;
            }
            // if(result === "fail") {
            //   this.session = null;
            //   this.error = "login fail";
            // } else {
            //   // console.log("login component  success = " + result);
            //   this.session = sessionStorage.getItem('member');
            //   this.router.navigate(['/']);
            // }
        });
    };
    return LoginPageComponent;
}());
LoginPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login-page',
        template: __webpack_require__("../../../../../src/app/login-page/login-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login-page/login-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginPageComponent);

var _a, _b;
//# sourceMappingURL=login-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/main-home/main-home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-home/main-home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  Main-home\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/main-home/main-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainHomeComponent; });
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

var MainHomeComponent = (function () {
    function MainHomeComponent() {
    }
    MainHomeComponent.prototype.ngOnInit = function () {
    };
    return MainHomeComponent;
}());
MainHomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-main-home',
        template: __webpack_require__("../../../../../src/app/main-home/main-home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main-home/main-home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MainHomeComponent);

//# sourceMappingURL=main-home.component.js.map

/***/ }),

/***/ "../../../../../src/app/menu-list/menu-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu-list/menu-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  menu-list works!\r\n</p>\r\n<div class=\"container\">\r\n  <h2>Image Gallery</h2>\r\n  <div class=\"row\" *ngFor=\"let i of images\">\r\n    <div class=\"col-md-3\">\r\n      <div class=\"thumbnail\">\r\n          <img src=\"{{i.url}}\" alt=\"Lights\" style=\"width:100%\">\r\n          <div class=\"caption\">\r\n            <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/menu-list/menu-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuListComponent; });
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

var MenuListComponent = (function () {
    function MenuListComponent() {
        this.images = [
            { url: '/img/character_01.png' },
            { url: '/img/character_02.png' },
            { url: '/img/character_03.png' },
            { url: '/img/character_04.png' },
            { url: '/img/character_05.png' },
            { url: '/img/character_06.png' },
            { url: '/img/character_07.png' },
            { url: '/img/character_08.png' },
            { url: '/img/character_09.png' },
            { url: '/img/character_10.png' },
            { url: '/img/character_11.png' },
            { url: '/img/character_12.png' },
        ];
    }
    MenuListComponent.prototype.ngOnInit = function () {
    };
    return MenuListComponent;
}());
MenuListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-menu-list',
        template: __webpack_require__("../../../../../src/app/menu-list/menu-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/menu-list/menu-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MenuListComponent);

//# sourceMappingURL=menu-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/reviews/reviews.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reviews/reviews.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  reviews works!\r\n</p>\r\n<div class=\"bs-example container\">\r\n  <form class=\"form-horizontal\" name=\"form\" (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\" novalidate>\r\n    <div class=\"form-group\">\r\n      <label for=\"comment\" class=\"control-label col-xs-2\">글내용</label>\r\n      <div class=\"col-xs-10\">\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"comment\" name=\"comment\" required>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"image\" class=\"control-label col-xs-2\">사진</label>\r\n      <div class=\"col-xs-10\">\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"image\" name=\"image\" required>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"score\" class=\"control-label col-xs-2\">별점</label>\r\n      <div class=\"col-xs-10\">\r\n        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"score\" name=\"score\" required>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"truck\" class=\"control-label col-xs-2\">트럭이륾</label>\r\n      <div class=\"col-xs-10\">\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"truck\" name=\"truck\" required>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <div class=\"col-xs-offset-2 col-xs-10\">\r\n        <!-- <div *ngIf=\"errorMessage\" class=\"alert alert-danger\">{{errorMessage}}</div> -->\r\n        <button type=\"submit\" class=\"btn btn-primary\">Add</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n\r\n  <div class=\"row\">\r\n    <h3>{{member.mnickname}} 님의 리뷰</h3>\r\n    <!-- 화면에 결과 메세지를 띄우고 싶을 때, 지금은 alert사용 -->\r\n    <!-- <div *ngIf=\"message\" class=\"alert alert-info\">{{message}}</div> -->\r\n    <div  class=\"col-md-4\" *ngFor=\"let r of myReviews\">\r\n      <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\" >리뷰 번호: {{r.rid}}</div>\r\n        <div class=\"panel-body\" >\r\n          해당트럭: {{r.rtruck}}<br>\r\n          사진: {{r.rimage}}<br>\r\n          내용: {{r.rcomment}}<br>\r\n          점수: {{r.rscore}}<br>\r\n          작성일: {{r.rdate}}<br>\r\n        </div>\r\n        <div class=\"panel-footer clearfix\">\r\n          <div class=\"pull-right\">\r\n            <a [routerLink]=\"['/reviews']\" class=\"text-warning\" (click)=\"removeReview(r)\">\r\n              <span class=\"glyphicon glyphicon-remove\"></span>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- <div class=\"row\">\r\n    <h3>{{member.mnickname}} 님의 리뷰</h3>\r\n    <div *ngIf=\"message\" class=\"alert alert-info\">{{message}}</div>\r\n    <div  class=\"col-md-4\" *ngFor=\"let h of hotlistDetail\">\r\n      <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\" >즐겨찾기 번호: {{h.hid}}</div>\r\n        <div class=\"panel-body\" >\r\n          트럭아이디{{h.tid}}<br>\r\n          가게이름 : {{h.tname}} <br>\r\n          평점 : {{h.tavg}}점<br>\r\n          판매음식 : {{h.tfood}} <br>\r\n          위도와 경도 : {{h.tlat}} :: {{h.tlng}}<br>\r\n        </div>\r\n        <div class=\"panel-footer clearfix\">\r\n          <div class=\"pull-right\">\r\n            <a [routerLink]=\"['/favorites']\" class=\"text-warning\" (click)=\"removeHotlist(h)\">\r\n              <span class=\"glyphicon glyphicon-remove\"></span>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/reviews/reviews.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_review_service__ = __webpack_require__("../../../../../src/app/_services/review.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReviewsComponent = (function () {
    function ReviewsComponent(http, router, reviewService) {
        this.http = http;
        this.router = router;
        this.reviewService = reviewService;
        var session = sessionStorage.getItem('member');
        if (session !== null) {
            this.member = JSON.parse(session);
        }
    }
    ReviewsComponent.prototype.ngOnInit = function () {
        this.getMyReview();
    };
    ReviewsComponent.prototype.getMyReview = function () {
        var _this = this;
        this.reviewService.getMyReview()
            .subscribe(function (result) {
            // console.log('reviewService myReviews='+result);
            _this.myReviews = result;
        });
    };
    ReviewsComponent.prototype.onSubmit = function (f) {
        if (f.valid) {
            var r = f.value;
            this.addReview(r.comment, r.image, r.score, this.member.memail, r.truck);
        }
    };
    //실제로 리뷰를 등록할 때는 해당 트럭의 트럭정보에 가서 리뷰를 입력.
    //따라서 실제 서비스를 할 때 트럭아이디ㄴ는 아땋게 가져오나?
    ReviewsComponent.prototype.addReview = function (comment, image, score, email, truck) {
        var _this = this;
        this.reviewService.addReview(comment, image, score, email, truck)
            .subscribe(function (res) {
            console.log('addReview = ' + res);
            // this.message = res;
            _this.getMyReview();
        });
    };
    ReviewsComponent.prototype.removeReview = function (review) {
        var _this = this;
        this.reviewService.removeReview(review)
            .subscribe(function (result) {
            // this.message = result;
            alert(result);
            _this.getMyReview();
        });
    };
    return ReviewsComponent;
}());
ReviewsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-reviews',
        template: __webpack_require__("../../../../../src/app/reviews/reviews.component.html"),
        styles: [__webpack_require__("../../../../../src/app/reviews/reviews.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_review_service__["a" /* ReviewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_review_service__["a" /* ReviewService */]) === "function" && _c || Object])
], ReviewsComponent);

var _a, _b, _c;
//# sourceMappingURL=reviews.component.js.map

/***/ }),

/***/ "../../../../../src/app/service/file-upload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadFileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploadFileService = (function () {
    function UploadFileService(http) {
        this.http = http;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    UploadFileService.prototype.pushFileToStorage = function (file, progress, foodName) {
        var formdata = new FormData();
        formdata.append('file', file);
        formdata.append('foodName', foodName);
        var req = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpRequest */]('POST', '/post', formdata, {
            reportProgress: true,
            responseType: 'text'
        });
        this.http.request(req).subscribe(function (event) {
            // if (event.type === HttpEventType.UploadProgress) {
            //   progress.percentage = Math.round(100 * event.loaded / event.total);
            //     this.subject.next({upload:'ok'});
            // } else if (event instanceof HttpResponse) {
            //   console.log('File is completely uploaded!');
            // }
        });
    };
    UploadFileService.prototype.getFiles = function () {
        return this.http.get('/getallfiles');
    };
    UploadFileService.prototype.getObservable = function () {
        return this.subject.asObservable();
    };
    return UploadFileService;
}());
UploadFileService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], UploadFileService);

var _a;
//# sourceMappingURL=file-upload.service.js.map

/***/ }),

/***/ "../../../../../src/app/support/support.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/support/support.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  support works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/support/support.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportComponent; });
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

var SupportComponent = (function () {
    function SupportComponent() {
    }
    SupportComponent.prototype.ngOnInit = function () {
    };
    return SupportComponent;
}());
SupportComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-support',
        template: __webpack_require__("../../../../../src/app/support/support.component.html"),
        styles: [__webpack_require__("../../../../../src/app/support/support.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SupportComponent);

//# sourceMappingURL=support.component.js.map

/***/ }),

/***/ "../../../../../src/app/top-nav/top-nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/top-nav/top-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n\t<div class=\"container-fluid\">\r\n\t\t<!-- Brand and toggle get grouped for better mobile display -->\r\n\t\t<div class=\"navbar-header\">\r\n\t\t\t<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\"\r\n\t\t\t\tdata-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n\t\t\t\t<span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span>\r\n\t\t\t\t<span class=\"icon-bar\"></span>\r\n\t\t\t</button>\r\n\t\t\t<a class=\"navbar-brand\" routerLink=\"\">Home</a>\r\n\t\t</div>\r\n    <!-- truck-map truck-list truck-info truck-reviews truck-regist favorites reviews support -->\r\n\t\t<!-- Collect the nav links, forms, and other content for toggling -->\r\n\t\t<div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n\t\t\t<ul class=\"nav navbar-nav\">\r\n        <!-- <li class=\"dropdown\"><a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\"\r\n\t\t\t\t\taria-haspopup=\"true\" aria-expanded=\"false\"><span class=\"badge\">메뉴</span> <span class=\"caret\"></span></a>\r\n\t\t\t\t\t<ul class=\"dropdown-menu\">\r\n            <li routerLinkActive=\"active\"><a routerLink=\"truck-map\">트럭지도</a></li>\r\n    \t\t\t\t<li routerLinkActive=\"active\"><a routerLink=\"truck-list\">트럭리스트</a></li>\r\n    \t\t\t\t<li routerLinkActive=\"active\"><a routerLink=\"truck-review\">트럭리뷰</a></li>\r\n    \t\t\t\t<li routerLinkActive=\"active\"><a routerLink=\"truck-regist\">트럭등록</a></li>\r\n    \t\t\t\t<li routerLinkActive=\"active\"><a routerLink=\"support\">고객센터</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</li> -->\r\n\t\t\t\t<li routerLinkActive=\"active\"><a routerLink=\"truck-map\">트럭지도</a></li>\r\n\t\t\t\t<li routerLinkActive=\"active\"><a routerLink=\"truck-list\">트럭리스트</a></li>\r\n\t\t\t\t<li routerLinkActive=\"active\"><a routerLink=\"menu-list\">푸드</a></li>\r\n\t\t\t\t<!-- <li routerLinkActive=\"active\"><a routerLink=\"truck-info\">트럭정보</a></li> -->\r\n\t\t\t\t<li routerLinkActive=\"active\"><a routerLink=\"truck-reviews\">트럭리뷰</a></li>\r\n\t\t\t\t<li routerLinkActive=\"active\"><a routerLink=\"truck-regist\">트럭등록</a></li>\r\n\t\t\t\t<li routerLinkActive=\"active\"><a routerLink=\"support\">고객센터</a></li>\r\n\t\t\t</ul>\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li role=\"separator\" class=\"divider\"></li>\r\n        <!-- <li *ngIf=\"email !== null\"><a ng-click=\"logout()\" routerLink=\"login\">Logout</a></li> -->\r\n        <li *ngIf=\"!session\"><a routerLink=\"join-page\">join-page</a></li>\r\n        <li *ngIf=\"!session\"><a routerLink=\"login-page\">Login</a></li>\r\n\r\n        <li class=\"dropdown\" *ngIf=\"session\"><a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\"\r\n\t\t\t\t\taria-haspopup=\"true\" aria-expanded=\"false\"><span class=\"badge\">{{email}}</span> <span class=\"caret\"></span></a>\r\n\t\t\t\t\t<ul class=\"dropdown-menu\">\r\n\t\t\t\t\t\t<li routerLinkActive=\"active\"><a routerLink=\"#\">회원정보수정</a></li>\r\n\t\t\t\t\t\t<li routerLinkActive=\"active\"><a routerLink=\"favorites\">나의 즐겨찾기</a></li>\r\n\t\t\t\t\t\t<li routerLinkActive=\"active\"><a routerLink=\"reviews\">나의 리뷰</a></li>\r\n\t\t\t\t\t\t<li role=\"separator\" class=\"divider\"></li>\r\n            <li routerLinkActive=\"active\"><a href=\"/login-page\" (click)=\"logout()\"><b class=\"glyphicon glyphicon-log-out\"></b> logout</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</li>\r\n\r\n      </ul>\r\n\t\t</div>\r\n\t\t<!-- /.navbar-collapse -->\r\n\t</div>\r\n\t<!-- /.container-fluid -->\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/top-nav/top-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopNavComponent = (function () {
    function TopNavComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.session = sessionStorage.getItem('member');
        console.log('top#component# constructor session=' + this.session);
        if (this.session !== null) {
            var member = JSON.parse(this.session);
            this.email = member.memail;
        }
        // if(this.session !== null){
        //   this.member = JSON.parse(this.session);
        //   this.email = this.member.memail;
        // }
        // this.email = this.member.memail;
    }
    TopNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log('top#component# ngOnInit() session=' + this.session);
        //동적으로 top-nav의 session 적용
        this.authService.getObservable().subscribe(function (massege) {
            if (massege.login = 'true') {
                _this.session = sessionStorage.getItem('member');
                if (_this.session !== null) {
                    var member = JSON.parse(_this.session);
                    console.log('topnav=' + member.memail);
                    _this.email = member.memail;
                }
            }
        });
    };
    TopNavComponent.prototype.logout = function () {
        sessionStorage.removeItem('member');
        this.session = null;
        // location.reload();
    };
    return TopNavComponent;
}());
TopNavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-top-nav',
        template: __webpack_require__("../../../../../src/app/top-nav/top-nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/top-nav/top-nav.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], TopNavComponent);

var _a, _b;
//# sourceMappingURL=top-nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/truck-info/truck-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/truck-info/truck-info.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  truck-info works!\r\n</p>\r\n<div class=\"\">\r\n  <div>\r\n    name: {{name}}\r\n  </div>\r\n  <div>\r\n    open: {{open}}\r\n  </div>\r\n  <div>\r\n    close: {{close}}\r\n  </div>\r\n  <div>\r\n    address: {{address}}\r\n  </div>\r\n  <div>\r\n    tID: {{id}}\r\n  </div>\r\n  <div>\r\n    <img src=\"\" alt=\"\">\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/truck-info/truck-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruckInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TruckInfoComponent = (function () {
    function TruckInfoComponent(route) {
        this.route = route;
    }
    TruckInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.name = '푸드트럭';
        this.open = "오픈시간";
        this.close = "닫는시간";
        this.address = "주소";
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['tid'];
        });
    };
    return TruckInfoComponent;
}());
TruckInfoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-truck-info',
        template: __webpack_require__("../../../../../src/app/truck-info/truck-info.component.html"),
        styles: [__webpack_require__("../../../../../src/app/truck-info/truck-info.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], TruckInfoComponent);

var _a;
//# sourceMappingURL=truck-info.component.js.map

/***/ }),

/***/ "../../../../../src/app/truck-list/truck-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/truck-list/truck-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form class=\"form\" (ngSubmit)=\"search(f)\" #f=\"ngForm\">\r\n    <div class=\"input-group\">\r\n      <input type=\"text\" class=\"form-control\" name=\"key\" [(ngModel)]=\"key\" required placeholder=\"Search\">\r\n      <div class=\"input-group-btn\">\r\n        <button class=\"btn btn-default\">\r\n            <i class=\"glyphicon glyphicon-search\"></i>\r\n          </button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n  <br>\r\n  <div *ngFor=\"let t of trucks\">\r\n        <img src=\"{{resource}}\" alt=\"image\">\r\n        <h4 class=\"md-headline\">name: {{t.tname}}</h4>\r\n        <h4 class=\"md-headline\">open : {{t.topen}}</h4>\r\n        <h4 class=\"md-subhead\">close : {{t.tclose}}</h4>\r\n        <h4 class=\"md-subhead\">address : {{t.taddress}}</h4>\r\n    <br>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/truck-list/truck-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruckListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_truck_service__ = __webpack_require__("../../../../../src/app/_services/truck.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TruckListComponent = (function () {
    function TruckListComponent(truckService) {
        this.truckService = truckService;
        this.trucks = [];
    }
    TruckListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.truckService.truckgetAll().subscribe(function (res) {
            console.log(res.json());
            _this.trucks = res.json();
        });
    };
    TruckListComponent.prototype.search = function (f) {
        console.log(f.value.key);
        this.truckService.keyFind(f.value.key).subscribe(function (res) {
            console.log(res.json());
            // this.trucks=res.json();
        });
    };
    return TruckListComponent;
}());
TruckListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-truck-list',
        template: __webpack_require__("../../../../../src/app/truck-list/truck-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/truck-list/truck-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_truck_service__["a" /* TruckService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_truck_service__["a" /* TruckService */]) === "function" && _a || Object])
], TruckListComponent);

var _a;
//# sourceMappingURL=truck-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/truck-regist/truck-regist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/truck-regist/truck-regist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-6 col-md-offset-3\">\r\n    <form class=\"\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\r\n      <div class=\"form-group\">\r\n        <label class=\"sr-only\" for=\"email\">Name</label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"name\" required>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"sr-only\" for=\"password\">Open</label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"open\"  name=\"open\" placeholder=\"open\" required>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"sr-only\" for=\"name\">Close</label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"close\" name=\"close\" placeholder=\"close\" required>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"sr-only\" for=\"address\">위치</label>\r\n\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"lat\" value=\"{{lat}}\" name=\"lat\" placeholder=\"lat\" required>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"lng\" value=\"{{lng}}\" name=\"lng\" placeholder=\"lng\" required>\r\n        <button type=\"button\" (click)=\"setCurrentPosition()\" name=\"button\">위치 등록</button>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"sr-only\" for=\"comment\">소개글</label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"comment\" name=\"comment\" placeholder=\"comment\" required>\r\n      </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"sr-only\" for=\"picture\">사진</label>\r\n      \t<input type=\"file\" (change)=\"selectFile($event)\">\r\n      </div>\r\n      <button>\r\n        <b class=\"glyphicon glyphicon-plus\"></b>SEND\r\n      </button>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/truck-regist/truck-regist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruckRegistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_truck_service__ = __webpack_require__("../../../../../src/app/_services/truck.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TruckRegistComponent = (function () {
    function TruckRegistComponent(truckService) {
        this.truckService = truckService;
    }
    TruckRegistComponent.prototype.ngOnInit = function () {
        //2
        this.session = sessionStorage.getItem('member');
    };
    TruckRegistComponent.prototype.selectFile = function (event) {
        this.selectedFiles = event.target.files;
    };
    TruckRegistComponent.prototype.onSubmit = function (f) {
        f.value.file = this.selectedFiles.item(0);
        //3
        if (this.session !== null) {
            this.member = JSON.parse(this.session);
        }
        console.log(f.value);
        // this.truckService.truckRegist(f.value.name, f.value.open, f.value.close, f.value.lat, f.value.lng, f.value.comment, f.value.file);
        this.truckService.truckRegist(f.value.name, f.value.open, f.value.close, f.value.lat, f.value.lng, f.value.comment, f.value.file, this.member.memail);
    };
    TruckRegistComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
            });
        }
    };
    return TruckRegistComponent;
}());
TruckRegistComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-truck-regist',
        template: __webpack_require__("../../../../../src/app/truck-regist/truck-regist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/truck-regist/truck-regist.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_truck_service__["a" /* TruckService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_truck_service__["a" /* TruckService */]) === "function" && _a || Object])
], TruckRegistComponent);

var _a;
//# sourceMappingURL=truck-regist.component.js.map

/***/ }),

/***/ "../../../../../src/app/truck-reviews/truck-reviews.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/truck-reviews/truck-reviews.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  truck-reviews works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/truck-reviews/truck-reviews.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruckReviewsComponent; });
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

var TruckReviewsComponent = (function () {
    function TruckReviewsComponent() {
    }
    TruckReviewsComponent.prototype.ngOnInit = function () {
    };
    return TruckReviewsComponent;
}());
TruckReviewsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-truck-reviews',
        template: __webpack_require__("../../../../../src/app/truck-reviews/truck-reviews.component.html"),
        styles: [__webpack_require__("../../../../../src/app/truck-reviews/truck-reviews.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TruckReviewsComponent);

//# sourceMappingURL=truck-reviews.component.js.map

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map