import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdtelesComponent } from './prodteles.component';

describe('ProdtelesComponent', () => {
  let component: ProdtelesComponent;
  let fixture: ComponentFixture<ProdtelesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdtelesComponent]
    });
    fixture = TestBed.createComponent(ProdtelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
