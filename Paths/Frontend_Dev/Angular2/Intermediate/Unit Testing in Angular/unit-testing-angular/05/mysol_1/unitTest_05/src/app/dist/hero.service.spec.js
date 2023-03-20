"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var hero_service_1 = require("./hero.service");
var message_service_1 = require("./message.service");
var testing_2 = require("@angular/common/http/testing");
fdescribe('HeroService', function () {
    var mockMessageService;
    var httpTestingController;
    var service;
    beforeEach(function () {
        mockMessageService = jasmine.createSpyObj(['add']);
        testing_1.TestBed.configureTestingModule({
            imports: [testing_2.HttpClientTestingModule],
            providers: [
                hero_service_1.HeroService,
                { provide: message_service_1.MessageService, useValue: mockMessageService }
            ]
        });
        httpTestingController = testing_1.TestBed.inject(testing_2.HttpTestingController);
        service = testing_1.TestBed.inject(hero_service_1.HeroService);
    });
    describe('getHero', function () {
        it('should call get with the correct URL', function () {
            service.getHero(4).subscribe();
            var req = httpTestingController.expectOne('api/heroes/4');
            req.flush({ id: 4, name: 'SuperDude', strength: 100 });
            httpTestingController.verify();
        });
    });
});
