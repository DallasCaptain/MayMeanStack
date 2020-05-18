import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbearComponent } from './editbear.component';

describe('EditbearComponent', () => {
  let component: EditbearComponent;
  let fixture: ComponentFixture<EditbearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditbearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditbearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
