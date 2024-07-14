import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchartDynamicDataComponent } from './barchart-dynamic-data.component';

describe('BarchartDynamicDataComponent', () => {
  let component: BarchartDynamicDataComponent;
  let fixture: ComponentFixture<BarchartDynamicDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarchartDynamicDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarchartDynamicDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
