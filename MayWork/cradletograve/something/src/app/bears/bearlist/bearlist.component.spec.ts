import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BearlistComponent } from './bearlist.component';

describe('BearlistComponent', () => {
  let component: BearlistComponent;
  let fixture: ComponentFixture<BearlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BearlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BearlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
