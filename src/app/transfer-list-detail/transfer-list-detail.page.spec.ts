import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferListDetailPage } from './transfer-list-detail.page';

describe('TransferListDetailPage', () => {
  let component: TransferListDetailPage;
  let fixture: ComponentFixture<TransferListDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferListDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferListDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
