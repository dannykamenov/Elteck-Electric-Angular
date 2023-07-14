import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfographComponent } from './infograph.component';

describe('InfographComponent', () => {
  let component: InfographComponent;
  let fixture: ComponentFixture<InfographComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfographComponent]
    });
    fixture = TestBed.createComponent(InfographComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
