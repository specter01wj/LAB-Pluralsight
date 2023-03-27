"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var hero_detail_component_1 = require("./hero-detail.component");
var router_1 = require("@angular/router");
var hero_service_1 = require("../hero.service");
var common_1 = require("@angular/common");
var rxjs_1 = require("rxjs");
var forms_1 = require("@angular/forms");
describe('HeroDetailComponent', function () {
    var fixture;
    var mockActivatedRoute, mockHeroService, mockLocation;
    beforeEach(function () {
        mockActivatedRoute = {
            snapshot: { paramMap: { get: function () { return '3'; } } }
        };
        mockHeroService = jasmine.createSpyObj(['getHero', 'updateHero']);
        mockLocation = jasmine.createSpyObj(['back']);
        testing_1.TestBed.configureTestingModule({
            imports: [forms_1.FormsModule],
            declarations: [hero_detail_component_1.HeroDetailComponent],
            providers: [
                { provide: router_1.ActivatedRoute, useValue: mockActivatedRoute },
                { provide: hero_service_1.HeroService, useValue: mockHeroService },
                { provide: common_1.Location, useValue: mockLocation },
            ]
        });
        fixture = testing_1.TestBed.createComponent(hero_detail_component_1.HeroDetailComponent);
        mockHeroService.getHero.and.returnValue(rxjs_1.of({ id: 3, name: 'SuperDude', strength: 100 }));
    });
    it('should render hero name in a h2 tag', function () {
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('h2').textContent).toContain('SUPERDUDE');
    });
});
