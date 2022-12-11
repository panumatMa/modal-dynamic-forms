import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdDateComponent } from './td-date.component';

describe('TdDateComponent', () => {
  let component: TdDateComponent;
  let fixture: ComponentFixture<TdDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
