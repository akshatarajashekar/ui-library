import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSpinnerShowcaseComponent } from './ui-spinner-showcase.component';

describe('UiSpinnerShowcaseComponent', () => {
  let component: UiSpinnerShowcaseComponent;
  let fixture: ComponentFixture<UiSpinnerShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiSpinnerShowcaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiSpinnerShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
