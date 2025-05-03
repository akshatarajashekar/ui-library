import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTooltipShowcaseComponent } from './ui-tooltip-showcase.component';

describe('UiTooltipShowcaseComponent', () => {
  let component: UiTooltipShowcaseComponent;
  let fixture: ComponentFixture<UiTooltipShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiTooltipShowcaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiTooltipShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
