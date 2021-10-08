import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherestoComponent } from './afficheresto.component';

describe('AfficherestoComponent', () => {
  let component: AfficherestoComponent;
  let fixture: ComponentFixture<AfficherestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
