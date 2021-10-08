import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Resto} from "../models/resto";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-resto-form',
  templateUrl: './resto-form.component.html',
  styleUrls: ['./resto-form.component.css']
})
export class RestoFormComponent implements OnInit {
  @ViewChild("form", {static: true}) form?: NgForm;
  @Output() restoAdded = new EventEmitter<Resto>();

  public resto: Resto = {
    id: 0,
    nom: "",
    adresse: "",
    evaluations: []
  }
  constructor() { }

  ngOnInit(): void {
  }
  public submit(): void {
    if (this.form && this.form.valid) {
      this.restoAdded.emit(this.resto);
      this.resto = {
        id: 0,
        nom: "",
        adresse: "",
        evaluations: []
      }
    }
  }
}
