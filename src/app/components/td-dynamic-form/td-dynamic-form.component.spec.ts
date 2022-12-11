import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdDynamicFormComponent } from './td-dynamic-form.component';

describe('TdDynamicFormComponent', () => {
  let component: TdDynamicFormComponent;
  let fixture: ComponentFixture<TdDynamicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdDynamicFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
