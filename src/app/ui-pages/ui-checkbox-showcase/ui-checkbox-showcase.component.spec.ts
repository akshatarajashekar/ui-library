import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCheckboxShowcaseComponent } from './ui-checkbox-showcase.component';

describe('UiCheckboxShowcaseComponent', () => {
  let component: UiCheckboxShowcaseComponent;
  let fixture: ComponentFixture<UiCheckboxShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiCheckboxShowcaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiCheckboxShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
