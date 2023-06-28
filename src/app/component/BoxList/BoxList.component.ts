import { Component, OnInit } from '@angular/core';
import { BoxComponent } from '../Box/Box.component';
import { NgFor, CommonModule} from "@angular/common";
import { NotesService } from 'src/app/service/Notes.service';
import { Note } from 'src/app/model/note.model';

@Component({
  selector: 'app-BoxList',
  templateUrl: './BoxList.component.html',
  styleUrls: ['./BoxList.component.css'],
  imports: [BoxComponent, NgFor, CommonModule],
  providers: [NotesService],
  standalone: true
})
export class BoxListComponent implements OnInit {
  notes:Note[] = [];
  constructor(private notesService: NotesService) { }
  ngOnInit() {
    this.notes = this.notesService.notes;
  }
  deleteNote(id: number){
    this.notesService.deleteNote(id);
  }
  toggleNoteStatus(id: number){
    this.notesService.toggleNoteStatus(id);
  }
  addNote(textElement: HTMLInputElement){
    this.notesService.addNote(textElement.value);
  }
  callUpdateNote(noteObj:{id:number, text:string}){
    this.notesService.updateNote(noteObj.id, noteObj.text);
  }
}
