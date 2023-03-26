"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RouterLinkDirectiveStub = void 0;
var testing_1 = require("@angular/core/testing");
var heroes_component_1 = require("./heroes.component");
var core_1 = require("@angular/core");
var hero_service_1 = require("../hero.service");
var rxjs_1 = require("rxjs");
var platform_browser_1 = require("@angular/platform-browser");
var hero_component_1 = require("../hero/hero.component");
var RouterLinkDirectiveStub = /** @class */ (function () {
    function RouterLinkDirectiveStub() {
        this.navigatedTo = null;
    }
    RouterLinkDirectiveStub.prototype.onClick = function () {
        this.navigatedTo = this.linkParams;
    };
    __decorate([
        core_1.Input('routerLink')
    ], RouterLinkDirectiveStub.prototype, "linkParams");
    RouterLinkDirectiveStub = __decorate([
        core_1.Directive({
            selector: '[routerLink]',
            host: { '(click)': 'onClick()' }
        })
    ], RouterLinkDirectiveStub);
    return RouterLinkDirectiveStub;
}());
exports.RouterLinkDirectiveStub = RouterLinkDirectiveStub;
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
                hero_component_1.HeroComponent,
                RouterLinkDirectiveStub
            ],
            providers: [
                { provide: hero_service_1.HeroService, useValue: mockHeroService }
            ]
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
    it("should call heroService.deleteHero when the Hero Component's\n    delete button is clicked", function () {
        spyOn(fixture.componentInstance, 'delete');
        mockHeroService.getHeroes.and.returnValue(rxjs_1.of(HEROES));
        fixture.detectChanges();
        var heroComponents = fixture.debugElement.queryAll(platform_browser_1.By.directive(hero_component_1.HeroComponent));
        // (<HeroComponent>heroComponents[0].componentInstance).delete.emit(undefined);
        heroComponents[0].query(platform_browser_1.By.css('button'))
            .triggerEventHandler('click', { stopPropagation: function () { } });
        // heroComponents[0].triggerEventHandler('delete', null);
        expect(fixture.componentInstance["delete"]).toHaveBeenCalledWith(HEROES[0]);
    });
    it('should add a new hero to the hero list when the add button is clicked', function () {
        mockHeroService.getHeroes.and.returnValue(rxjs_1.of(HEROES));
        fixture.detectChanges();
        var name = "Mr. Ice";
        mockHeroService.addHero.and.returnValue(rxjs_1.of({ id: 5, name: name, strength: 4 }));
        var inputElement = fixture.debugElement.query(platform_browser_1.By.css('input')).nativeElement;
        var addButton = fixture.debugElement.queryAll(platform_browser_1.By.css('button'))[0];
        inputElement.value = name;
        addButton.triggerEventHandler('click', null);
        fixture.detectChanges();
        var heroText = fixture.debugElement.query(platform_browser_1.By.css('ul')).nativeElement.textContent;
        expect(heroText).toContain(name);
    });
    it('should have the correct route for the first hero', function () {
        mockHeroService.getHeroes.and.returnValue(rxjs_1.of(HEROES));
        fixture.detectChanges();
        var heroComponents = fixture.debugElement.queryAll(platform_browser_1.By.directive(hero_component_1.HeroComponent));
        var routerLink = heroComponents[0]
            .query(platform_browser_1.By.directive(RouterLinkDirectiveStub))
            .injector.get(RouterLinkDirectiveStub);
        heroComponents[0].query(platform_browser_1.By.css('a')).triggerEventHandler('click', null);
        expect(routerLink.navigatedTo).toBe('/detail/1');
    });
});
