import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatDashComponent } from './chat-dash.component';

describe('ChatDashComponent', () => {
  let component: ChatDashComponent;
  let fixture: ComponentFixture<ChatDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatDashComponent]
    });
    fixture = TestBed.createComponent(ChatDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
