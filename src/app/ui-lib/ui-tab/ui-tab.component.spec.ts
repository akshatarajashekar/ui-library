import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTabComponent } from './ui-tab.component';

describe('UiTabComponent', () => {
  let component: UiTabComponent;
  let fixture: ComponentFixture<UiTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
