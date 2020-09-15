import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSantanderComponent } from './ui-santander.component';

describe('UiSantanderComponent', () => {
  let component: UiSantanderComponent;
  let fixture: ComponentFixture<UiSantanderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiSantanderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiSantanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
