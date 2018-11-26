import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelsampleComponent } from './cancelsample.component';

describe('CancelsampleComponent', () => {
  let component: CancelsampleComponent;
  let fixture: ComponentFixture<CancelsampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelsampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelsampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
