import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiAccordianComponent } from './ui-accordian.component';

describe('UiAccordianComponent', () => {
  let component: UiAccordianComponent;
  let fixture: ComponentFixture<UiAccordianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiAccordianComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiAccordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
