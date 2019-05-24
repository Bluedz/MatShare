import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSearchPage } from './list-search.page';

describe('ListSearchPage', () => {
  let component: ListSearchPage;
  let fixture: ComponentFixture<ListSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSearchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
