import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTableShowcaseComponent } from './ui-table-showcase.component';

describe('UiTableShowcaseComponent', () => {
  let component: UiTableShowcaseComponent;
  let fixture: ComponentFixture<UiTableShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiTableShowcaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiTableShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
