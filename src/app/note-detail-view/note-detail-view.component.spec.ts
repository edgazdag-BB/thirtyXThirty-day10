import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteDetailViewComponent } from './note-detail-view.component';

describe('NoteDetailViewComponent', () => {
  let component: NoteDetailViewComponent;
  let fixture: ComponentFixture<NoteDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteDetailViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
