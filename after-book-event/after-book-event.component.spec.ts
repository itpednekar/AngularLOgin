import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterBookEventComponent } from './after-book-event.component';

describe('AfterBookEventComponent', () => {
  let component: AfterBookEventComponent;
  let fixture: ComponentFixture<AfterBookEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterBookEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterBookEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
