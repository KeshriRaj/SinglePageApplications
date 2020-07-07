import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormeditComponent } from './formedit.component';

describe('FormeditComponent', () => {
  let component: FormeditComponent;
  let fixture: ComponentFixture<FormeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
