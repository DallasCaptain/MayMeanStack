import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingamabobComponent } from './thingamabob.component';

describe('ThingamabobComponent', () => {
  let component: ThingamabobComponent;
  let fixture: ComponentFixture<ThingamabobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingamabobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingamabobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
