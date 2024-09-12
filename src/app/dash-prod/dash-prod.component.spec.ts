import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashProdComponent } from './dash-prod.component';

describe('DashProdComponent', () => {
  let component: DashProdComponent;
  let fixture: ComponentFixture<DashProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashProdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
