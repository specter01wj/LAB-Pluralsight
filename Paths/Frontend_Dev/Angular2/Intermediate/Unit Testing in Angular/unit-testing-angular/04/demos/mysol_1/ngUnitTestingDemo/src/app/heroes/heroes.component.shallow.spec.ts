import { TestBed, ComponentFixture } from "@angular/core/testing";
import { HeroesComponent } from "./heroes.component";

describe('HeroesComponent (shallow tests)', () => {
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroesComponent]
    });

    fixture = TestBed.createComponent(HeroesComponent);
  })

  describe('delete', () => {

    it('should remove the indicated hero from the heroes list', () => {
      
    });

  })
})