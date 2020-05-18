import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupaComponent } from './supa.component';

describe('SupaComponent', () => {
  let component: SupaComponent;
  let fixture: ComponentFixture<SupaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
