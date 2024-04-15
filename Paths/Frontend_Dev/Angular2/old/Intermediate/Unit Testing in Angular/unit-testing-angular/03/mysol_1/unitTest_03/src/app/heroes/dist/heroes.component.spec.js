"use strict";
exports.__esModule = true;
var heroes_component_1 = require("./heroes.component");
var rxjs_1 = require("rxjs");
fdescribe('HeroesComponent', function () {
    var component;
    var HEROES;
    var mockHeroService;
    beforeEach(function () {
        HEROES = [
            { id: 1, name: 'SpiderDude', strength: 8 },
            { id: 2, name: 'Wonderful Woman', strength: 24 },
            { id: 3, name: 'SuperDude', strength: 55 }
        ];
        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
        component = new heroes_component_1.HeroesComponent(mockHeroService);
    });
    describe('delete', function () {
        it('should remove the indicated hero from the heroes list', function () {
            mockHeroService.deleteHero.and.returnValue(rxjs_1.of(true));
            component.heroes = HEROES;
            component["delete"](HEROES[2]);
            expect(component.heroes.length).toBe(2);
        });
        it('should call deleteHero', function () {
            mockHeroService.deleteHero.and.returnValue(rxjs_1.of(true));
            component.heroes = HEROES;
            component["delete"](HEROES[2]);
            expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
        });
    });
    describe('getHeroes', function () {
        xit('should getHeroes', function () {
            mockHeroService.getHeroes.and.returnValue(rxjs_1.of(true));
            component.heroes = HEROES;
            component.getHeroes();
            expect(component.heroes.length).toBe(3);
        });
        it('should call getHeroes', function () {
            mockHeroService.getHeroes.and.returnValue(rxjs_1.of(true));
            component.heroes = HEROES;
            component.getHeroes();
            expect(mockHeroService.getHeroes).toHaveBeenCalled();
        });
    });
});
