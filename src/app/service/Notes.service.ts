import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notes = [
    {id:1, text: 'Note 1', editable: false},
    {id:2, text: 'Note 2', editable: false},
    {id:3, text: 'Note 3', editable: false},
    {id:4, text: `Note 4.
                  New line here edit`, editable: true},
    {id:5, text: 'Note 12', editable: false},
  ]
  addNote(newtext: string){
    let newid = -1;
    do {
      newid = Math.random();
    } while ( this.findNote(newid) != -1);
    this.notes.push({id:newid, text: newtext, editable: false });
  }
  findNote = (id: number) => {
    return this.notes.findIndex((obj) => obj.id === id);
  }
  deleteNote(id: number){
    const index = this.findNote(id);
    if(index > -1)
      this.notes.splice(index, 1);
  }
  toggleNoteStatus(id: number){
    const index = this.findNote(id);
    if(index > -1){
      const editable = this.notes[index]["editable"];
      this.notes[index]["editable"] = !editable; 
      console.log(this.notes);
      }
  }
  updateNote(id:number, text:string){
    const index = this.findNote(id);

    if(index > -1){
      this.notes[index]["text"] = text; 
      this.notes[index]["editable"] = false; 
    }
  }
constructor() { }

}
