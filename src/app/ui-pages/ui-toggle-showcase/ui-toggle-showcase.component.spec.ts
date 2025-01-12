import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiToggleShowcaseComponent } from './ui-toggle-showcase.component';

describe('UiToggleShowcaseComponent', () => {
  let component: UiToggleShowcaseComponent;
  let fixture: ComponentFixture<UiToggleShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiToggleShowcaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiToggleShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
