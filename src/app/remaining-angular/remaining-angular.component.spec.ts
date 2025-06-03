import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemainingAngularComponent } from './remaining-angular.component';

describe('RemainingAngularComponent', () => {
  let component: RemainingAngularComponent;
  let fixture: ComponentFixture<RemainingAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RemainingAngularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemainingAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
