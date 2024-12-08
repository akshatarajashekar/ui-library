import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTextfieldShowcaseComponent } from './ui-textfield-showcase.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('UiTextfieldShowcaseComponent', () => {
  let component: UiTextfieldShowcaseComponent;
  let fixture: ComponentFixture<UiTextfieldShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiTextfieldShowcaseComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiTextfieldShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
