import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdDynamicFiledComponent } from './td-dynamic-filed.component';

describe('TdDynamicFiledComponent', () => {
  let component: TdDynamicFiledComponent;
  let fixture: ComponentFixture<TdDynamicFiledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdDynamicFiledComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdDynamicFiledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
