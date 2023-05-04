import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from '../services/note.service';
import { Note } from '../models/note';
import { tap } from 'rxjs';

@Component({
  selector: 'app-note-detail-view',
  templateUrl: './note-detail-view.component.html',
  styleUrls: ['./note-detail-view.component.scss']
})
export class NoteDetailViewComponent implements OnInit {
  noteDetails!: Note;
  
  constructor(private route: ActivatedRoute, private noteService: NoteService) { }

  ngOnInit(): void {
    const noteId = Number(this.route.snapshot.params['id']);

    this.noteService.getNote(noteId)
      .pipe(
        tap(note => this.noteDetails = note)
      )
      .subscribe();
  }

}
