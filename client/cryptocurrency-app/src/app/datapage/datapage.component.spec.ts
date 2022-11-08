import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatapageComponent } from './datapage.component';

describe('DatapageComponent', () => {
  let component: DatapageComponent;
  let fixture: ComponentFixture<DatapageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatapageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatapageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
