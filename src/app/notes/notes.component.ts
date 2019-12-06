import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { DbService } from "../services/db.service";

@Component({
  selector: "app-notes",
  templateUrl: "./notes.component.html",
  styleUrls: ["./notes.component.css"]
})
export class NotesComponent implements OnInit {
  newNoteTitle = "";
  newNotePinned = "";
  newNoteContent = "";
  resultNotes;
  constructor(private dbService: DbService) {}

  addNote() {
    // post note
    this.getNotes();
  }
  getNotes() {
    this.dbService.getNotes().subscribe(data => {
      this.resultNotes = data;
      // console.log(data);
      // console.log(this.resultNotes);
    });
  }
  ngOnInit() {
    this.getNotes();
  }
}
