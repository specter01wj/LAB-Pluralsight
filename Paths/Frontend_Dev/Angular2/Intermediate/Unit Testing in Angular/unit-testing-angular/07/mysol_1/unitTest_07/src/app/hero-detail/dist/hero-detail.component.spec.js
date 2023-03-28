"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var hero_detail_component_1 = require("./hero-detail.component");
var router_1 = require("@angular/router");
var hero_service_1 = require("../hero.service");
var common_1 = require("@angular/common");
var rxjs_1 = require("rxjs");
var forms_1 = require("@angular/forms");
fdescribe('HeroDetailComponent', function () {
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
    it('should call updateHero when save is called', testing_1.fakeAsync(function () {
        mockHeroService.updateHero.and.returnValue(rxjs_1.of({}));
        fixture.detectChanges();
        fixture.componentInstance.save();
        testing_1.flush();
        expect(mockHeroService.updateHero).toHaveBeenCalled();
    }));
    it('should call updateHero when save is called', testing_1.waitForAsync(function () {
        mockHeroService.updateHero.and.returnValue(rxjs_1.of({}));
        fixture.detectChanges();
        fixture.componentInstance.save();
        fixture.whenStable().then(function () {
            expect(mockHeroService.updateHero).toHaveBeenCalled();
        });
    }));
});
