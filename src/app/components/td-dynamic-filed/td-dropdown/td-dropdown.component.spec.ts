import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdDropdownComponent } from './td-dropdown.component';

describe('TdDropdownComponent', () => {
  let component: TdDropdownComponent;
  let fixture: ComponentFixture<TdDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
