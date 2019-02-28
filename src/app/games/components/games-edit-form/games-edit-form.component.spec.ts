import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesEditFormComponent } from './games-edit-form.component';

describe('GamesEditFormComponent', () => {
  let component: GamesEditFormComponent;
  let fixture: ComponentFixture<GamesEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
