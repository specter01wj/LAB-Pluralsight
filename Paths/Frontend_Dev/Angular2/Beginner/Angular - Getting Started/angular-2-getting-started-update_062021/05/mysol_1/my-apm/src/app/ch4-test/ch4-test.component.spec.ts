import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ch4TestComponent } from './ch4-test.component';

describe('Ch4TestComponent', () => {
  let component: Ch4TestComponent;
  let fixture: ComponentFixture<Ch4TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ch4TestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ch4TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
