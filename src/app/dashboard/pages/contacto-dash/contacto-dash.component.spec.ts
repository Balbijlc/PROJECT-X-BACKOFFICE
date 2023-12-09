import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoDashComponent } from './contacto-dash.component';

describe('ContactoDashComponent', () => {
  let component: ContactoDashComponent;
  let fixture: ComponentFixture<ContactoDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactoDashComponent]
    });
    fixture = TestBed.createComponent(ContactoDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
