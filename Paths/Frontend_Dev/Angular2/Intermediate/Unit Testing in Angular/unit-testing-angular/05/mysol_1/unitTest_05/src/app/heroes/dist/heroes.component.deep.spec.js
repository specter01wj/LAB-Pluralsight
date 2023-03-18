"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var heroes_component_1 = require("./heroes.component");
var core_1 = require("@angular/core");
var hero_service_1 = require("../hero.service");
var rxjs_1 = require("rxjs");
var platform_browser_1 = require("@angular/platform-browser");
var hero_component_1 = require("../hero/hero.component");
fdescribe('HeroesComponent (deep tests)', function () {
    var fixture;
    var mockHeroService;
    var HEROES;
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
                hero_component_1.HeroComponent
            ],
            providers: [
                { provide: hero_service_1.HeroService, useValue: mockHeroService }
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        });
        fixture = testing_1.TestBed.createComponent(heroes_component_1.HeroesComponent);
    });
    it('should render each hero as a HeroComponent', function () {
        mockHeroService.getHeroes.and.returnValue(rxjs_1.of(HEROES));
        // run ngOnInit
        fixture.detectChanges();
        var heroComponentDEs = fixture.debugElement.queryAll(platform_browser_1.By.directive(hero_component_1.HeroComponent));
        expect(heroComponentDEs.length).toEqual(3);
        for (var i = 0; i < heroComponentDEs.length; i++) {
            expect(heroComponentDEs[i].componentInstance.hero.name).toEqual(HEROES[i].name);
        }
    });
});
