import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListScorersComponent } from './list-scorers.component';

describe('ListScorersComponent', () => {
  let component: ListScorersComponent;
  let fixture: ComponentFixture<ListScorersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListScorersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListScorersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
