"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/common/http/testing");
var cart_service_1 = require("./cart.service");
var http_1 = require("@angular/common/http");
fdescribe('CartService', function () {
    var httpClient;
    var TESTDATA = [{ id: 1 }, { id: 2 }];
    var service;
    var httpTestingController;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [cart_service_1.CartService],
            imports: [testing_2.HttpClientTestingModule]
        });
        httpClient = testing_1.TestBed.inject(http_1.HttpClient);
        httpTestingController = testing_1.TestBed.inject(testing_2.HttpTestingController);
        service = testing_1.TestBed.inject(cart_service_1.CartService);
    });
    it('should have the returned data in the cart', function (done) {
        var req = httpTestingController.expectOne('/api/cart');
        req.flush(TESTDATA);
        service.getCart().subscribe(function (data) {
            expect(data.length).toEqual(2);
            done();
        });
    });
});
