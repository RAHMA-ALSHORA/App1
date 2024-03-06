import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainsliderComponent } from './mainslider.component';

describe('MainsliderComponent', () => {
  let component: MainsliderComponent;
  let fixture: ComponentFixture<MainsliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainsliderComponent]
    });
    fixture = TestBed.createComponent(MainsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});