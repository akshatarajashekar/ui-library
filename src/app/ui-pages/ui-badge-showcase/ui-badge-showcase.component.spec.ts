import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiBadgeShowcaseComponent } from './ui-badge-showcase.component';

describe('UiBadgeShowcaseComponent', () => {
  let component: UiBadgeShowcaseComponent;
  let fixture: ComponentFixture<UiBadgeShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiBadgeShowcaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiBadgeShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
