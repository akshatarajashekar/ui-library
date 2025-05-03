import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiAccordianShowcaseComponent } from './ui-accordian-showcase.component';

describe('UiAccordianShowcaseComponent', () => {
  let component: UiAccordianShowcaseComponent;
  let fixture: ComponentFixture<UiAccordianShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiAccordianShowcaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiAccordianShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
