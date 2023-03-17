"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var hero_component_1 = require("./hero.component");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
fdescribe('HeroComponent (shallow tests)', function () {
    var fixture;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [hero_component_1.HeroComponent],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        });
        fixture = testing_1.TestBed.createComponent(hero_component_1.HeroComponent);
    });
    it('should have the correct hero', function () {
        fixture.componentInstance.hero = { id: 1, name: 'SuperDude', strength: 3 };
        expect(fixture.componentInstance.hero.name).toEqual('SuperDude');
    });
    it('should render the hero name in an anchor tag', function () {
        fixture.componentInstance.hero = { id: 1, name: 'SuperDude', strength: 3 };
        fixture.detectChanges();
        var deA = fixture.debugElement.query(platform_browser_1.By.css('a'));
        expect(deA.nativeElement.textContent).toContain('SuperDude');
        // expect(fixture.nativeElement.querySelector('a').textContent).toContain('SuperDude');
    });
});
