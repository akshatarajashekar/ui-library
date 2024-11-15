import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MToggleComponent } from './m-toggle.component';

describe('MToggleComponent', () => {
  let component: MToggleComponent;
  let fixture: ComponentFixture<MToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MToggleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
