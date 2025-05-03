import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiRadioShowcaseComponent } from './ui-radio-showcase.component';

describe('UiRadioShowcaseComponent', () => {
  let component: UiRadioShowcaseComponent;
  let fixture: ComponentFixture<UiRadioShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiRadioShowcaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiRadioShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
