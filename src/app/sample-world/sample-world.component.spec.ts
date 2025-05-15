import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleWorldComponent } from './sample-world.component';

describe('SampleWorldComponent', () => {
  let component: SampleWorldComponent;
  let fixture: ComponentFixture<SampleWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SampleWorldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
