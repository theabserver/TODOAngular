import { Component,  Input, Output, EventEmitter  } from '@angular/core';
import { Note } from 'src/app/model/note.model';
import { NgIf, CommonModule} from "@angular/common";
@Component({
  selector: 'app-Box',
  templateUrl: './Box.component.html',
  styleUrls: ['./Box.component.css'],
  imports:[CommonModule],
  standalone: true,
})

export class BoxComponent  {
  @Input() note!:Note;
  @Output() deleteNote:EventEmitter<number> = new EventEmitter<number>;
  @Output() toggleNote:EventEmitter<number> = new EventEmitter<number>;
  @Output() updateNote:EventEmitter<{id: number, text: string}> = new EventEmitter<{id: number, text: string}>;
  constructor() { }
  onDelete = (id: number) => {
    this.deleteNote.emit(id);
  }
  onToggle = (id: number) => {
    this.toggleNote.emit(id);
  }
  callUpdateNote = (id: number, ele: HTMLInputElement) => {
    const editText =  ele.value;
    this.updateNote.emit({id:id, text:editText});
  }
}
