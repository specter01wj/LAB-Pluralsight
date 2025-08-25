"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CoffeeApiService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var environment_1 = require("../../environments/environment");
var CoffeeApiService = /** @class */ (function () {
    function CoffeeApiService(http) {
        this.http = http;
        this.apiURL = 'https://fake-coffee-api.vercel.app/api';
        /*
          CRUD Methods for consuming RESTful API
        */
        // Note: This particular API does not like the client (us) setting the Content-Type
        // but note that for many JSON endpoints, you will need to use this header.
        this.httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    // GET
    CoffeeApiService.prototype.getCoffees = function () {
        return this.http
            .get(this.apiURL)
            .pipe(operators_1.timeout(2), operators_1.retry({
            count: environment_1.environment.coffeeServiceRetryCount,
            delay: function (err, attemptNum) {
                console.error("[CoffeeApiService] => Encountered an error while retrying request on attempt " + attemptNum + ": ", err);
                return rxjs_1.timer(1000 * attemptNum);
            }
        }), operators_1.catchError(this.handleErrorWithTimeout));
    };
    // GET by ID
    CoffeeApiService.prototype.getCoffee = function (id) {
        return this.http
            .get(this.apiURL + '/' + id)
            .pipe(operators_1.catchError(this.handleError));
    };
    // Get Coffee image buffer by URL
    CoffeeApiService.prototype.getCoffeeImageBuffer = function (url) {
        return this.http
            .get(url, { responseType: 'arraybuffer' })
            .pipe(operators_1.catchError(this.handleError));
    };
    // Get Coffee image blob (file object) by URL
    CoffeeApiService.prototype.getCoffeeImageBlob = function (url) {
        return this.http
            .get(url, { responseType: 'blob' })
            .pipe(operators_1.catchError(this.handleError));
    };
    // Request a Coffee object in its raw, string representation
    CoffeeApiService.prototype.getCoffeeAsText = function (id) {
        return this.http
            .get(this.apiURL + '/' + id, { responseType: 'text' })
            .pipe(operators_1.catchError(this.handleError));
    };
    // POST
    CoffeeApiService.prototype.createCoffee = function (coffee) {
        return this.http
            .post(this.apiURL, JSON.stringify(coffee))
            .pipe(operators_1.map(function (res) { return res.added; }), operators_1.catchError(this.handleError));
    };
    // PUT
    CoffeeApiService.prototype.updateCoffee = function (coffee) {
        return this.http
            .put(this.apiURL + '/' + coffee.id, JSON.stringify(coffee))
            .pipe(operators_1.map(function (res) { return res.update; }), operators_1.catchError(this.handleError));
    };
    // DELETE
    CoffeeApiService.prototype.deleteCoffee = function (id) {
        return this.http["delete"](this.apiURL + '/' + id, this.httpOptions)
            .pipe(operators_1.catchError(this.handleError));
    };
    // Shared error handling
    CoffeeApiService.prototype.handleError = function (error) {
        var errorMessage = '';
        if (error.status === 0) {
            // Get client-side error
            errorMessage = error.error;
            console.error('[CoffeeApiService] => Client-side HTTP error occurred: ', errorMessage, error);
        }
        else {
            // Get server-side error
            errorMessage = "Error Code: " + error.status + "\nMessage: " + error.error;
            console.error('[CoffeeApiService] => Server-side HTTP error occurred: ', errorMessage, error);
        }
        return rxjs_1.throwError(function () {
            return errorMessage;
        });
    };
    CoffeeApiService.prototype.handleErrorWithTimeout = function (error) {
        var errorMessage = '';
        if (error instanceof rxjs_1.TimeoutError) {
            console.error('[CoffeeApiService] => Request timed out!', error);
            return rxjs_1.throwError(function () {
                return errorMessage;
            });
        }
        else {
            return this.handleError(error);
        }
    };
    CoffeeApiService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CoffeeApiService);
    return CoffeeApiService;
}());
exports.CoffeeApiService = CoffeeApiService;
