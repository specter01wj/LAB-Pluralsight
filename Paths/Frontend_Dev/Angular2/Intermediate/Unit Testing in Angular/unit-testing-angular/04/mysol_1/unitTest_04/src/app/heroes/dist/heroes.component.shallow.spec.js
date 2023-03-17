"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var heroes_component_1 = require("./heroes.component");
var core_1 = require("@angular/core");
var hero_service_1 = require("../hero.service");
var rxjs_1 = require("rxjs");
var platform_browser_1 = require("@angular/platform-browser");
fdescribe('HeroesComponent (shallow tests)', function () {
    var fixture;
    var mockHeroService;
    var HEROES;
    var FakeHeroComponent = /** @class */ (function () {
        function FakeHeroComponent() {
        }
        __decorate([
            core_1.Input()
        ], FakeHeroComponent.prototype, "hero");
        FakeHeroComponent = __decorate([
            core_1.Component({
                selector: 'app-hero',
                template: '<div></div>'
            })
        ], FakeHeroComponent);
        return FakeHeroComponent;
    }());
    beforeEach(function () {
        HEROES = [
            { id: 1, name: 'SpiderDude', strength: 8 },
            { id: 2, name: 'Wonderful Woman', strength: 24 },
            { id: 3, name: 'SuperDude', strength: 55 }
        ];
        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
        testing_1.TestBed.configureTestingModule({
            declarations: [
                heroes_component_1.HeroesComponent,
                FakeHeroComponent
            ],
            providers: [
                { provide: hero_service_1.HeroService, useValue: mockHeroService }
            ]
        });
        fixture = testing_1.TestBed.createComponent(heroes_component_1.HeroesComponent);
    });
    it('should set heroes correctly from the service', function () {
        mockHeroService.getHeroes.and.returnValue(rxjs_1.of(HEROES));
        fixture.detectChanges();
        expect(fixture.componentInstance.heroes.length).toBe(3);
    });
    it('should create one li for each hero', function () {
        mockHeroService.getHeroes.and.returnValue(rxjs_1.of(HEROES));
        fixture.detectChanges();
        expect(fixture.debugElement.queryAll(platform_browser_1.By.css('li')).length).toBe(3);
    });
});
