import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabalhosComponent } from './trabalhos.component';

describe('TrabalhosComponent', () => {
  let component: TrabalhosComponent;
  let fixture: ComponentFixture<TrabalhosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrabalhosComponent]
    });
    fixture = TestBed.createComponent(TrabalhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
