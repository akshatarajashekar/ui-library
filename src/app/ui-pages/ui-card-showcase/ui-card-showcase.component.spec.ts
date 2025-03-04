import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCardShowcaseComponent } from './ui-card-showcase.component';

describe('UiCardShowcaseComponent', () => {
  let component: UiCardShowcaseComponent;
  let fixture: ComponentFixture<UiCardShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiCardShowcaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiCardShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
