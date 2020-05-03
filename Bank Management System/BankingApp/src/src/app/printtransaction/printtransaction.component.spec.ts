import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinttransactionComponent } from './printtransaction.component';

describe('PrinttransactionComponent', () => {
  let component: PrinttransactionComponent;
  let fixture: ComponentFixture<PrinttransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrinttransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrinttransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
