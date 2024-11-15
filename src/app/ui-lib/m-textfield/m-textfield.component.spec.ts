import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MTextfieldComponent } from './m-textfield.component';

describe('MTextfieldComponent', () => {
  let component: MTextfieldComponent;
  let fixture: ComponentFixture<MTextfieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MTextfieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MTextfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
