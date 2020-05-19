import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingamabobListComponent } from './thingamabob-list.component';

describe('ThingamabobListComponent', () => {
  let component: ThingamabobListComponent;
  let fixture: ComponentFixture<ThingamabobListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingamabobListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingamabobListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
