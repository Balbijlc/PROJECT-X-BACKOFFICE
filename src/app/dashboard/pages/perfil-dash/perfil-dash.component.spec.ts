import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilDashComponent } from './perfil-dash.component';

describe('PerfilDashComponent', () => {
  let component: PerfilDashComponent;
  let fixture: ComponentFixture<PerfilDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilDashComponent]
    });
    fixture = TestBed.createComponent(PerfilDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
