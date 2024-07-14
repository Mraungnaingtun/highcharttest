import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcharttestComponent } from './barcharttest.component';

describe('BarcharttestComponent', () => {
  let component: BarcharttestComponent;
  let fixture: ComponentFixture<BarcharttestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarcharttestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarcharttestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
