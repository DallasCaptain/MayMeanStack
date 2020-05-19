import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingamabobNewComponent } from './thingamabob-new.component';

describe('ThingamabobNewComponent', () => {
  let component: ThingamabobNewComponent;
  let fixture: ComponentFixture<ThingamabobNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingamabobNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingamabobNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
