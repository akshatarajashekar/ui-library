import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiProgressbarShowcaseComponent } from './ui-progressbar-showcase.component';

describe('UiProgressbarShowcaseComponent', () => {
  let component: UiProgressbarShowcaseComponent;
  let fixture: ComponentFixture<UiProgressbarShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiProgressbarShowcaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiProgressbarShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
