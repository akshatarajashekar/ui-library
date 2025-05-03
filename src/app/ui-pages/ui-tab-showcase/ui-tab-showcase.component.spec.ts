import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTabShowcaseComponent } from './ui-tab-showcase.component';

describe('UiTabShowcaseComponent', () => {
  let component: UiTabShowcaseComponent;
  let fixture: ComponentFixture<UiTabShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiTabShowcaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiTabShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
