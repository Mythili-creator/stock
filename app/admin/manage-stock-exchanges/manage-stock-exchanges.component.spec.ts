import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageStockExchangesComponent } from './manage-stock-exchanges.component';

describe('ManageStockExchangesComponent', () => {
  let component: ManageStockExchangesComponent;
  let fixture: ComponentFixture<ManageStockExchangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageStockExchangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageStockExchangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
