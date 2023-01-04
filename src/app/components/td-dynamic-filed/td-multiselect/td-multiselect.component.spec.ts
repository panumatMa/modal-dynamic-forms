import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdMultiselectComponent } from './td-multiselect.component';

describe('TdMultiselectComponent', () => {
  let component: TdMultiselectComponent;
  let fixture: ComponentFixture<TdMultiselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdMultiselectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdMultiselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
