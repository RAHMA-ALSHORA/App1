import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatrgComponent } from './catrg.component';

describe('CatrgComponent', () => {
  let component: CatrgComponent;
  let fixture: ComponentFixture<CatrgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatrgComponent]
    });
    fixture = TestBed.createComponent(CatrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
