import { TestBed, ComponentFixture } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { HeroService } from "./hero.service";
import { MessageService } from "./message.service";

describe('HeroService', () => {
  let mockMessageService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    mockMessageService = jasmine.createSpyObj(['add']);

    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        HeroService,
         { provide: MessageService, useValue: mockMessageService }
      ],
    });

    httpTestingController = TestBed.get(HttpTestingController);
    
  });



})