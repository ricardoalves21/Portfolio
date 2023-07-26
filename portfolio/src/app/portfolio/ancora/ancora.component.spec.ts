import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AncoraComponent } from './ancora.component';

describe('AncoraComponent', () => {
  let component: AncoraComponent;
  let fixture: ComponentFixture<AncoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AncoraComponent]
    });
    fixture = TestBed.createComponent(AncoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
