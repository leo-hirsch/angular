import { Component, OnInit } from '@angular/core';
import {Resto} from "../models/resto";
import {RestoService} from "../resto.service";

@Component({
  selector: 'app-resto',
  templateUrl: './resto.component.html',
  styleUrls: ['./resto.component.css']
})
export class RestoComponent implements OnInit {


  public restos: Resto[] = [];

  constructor(private restoService: RestoService) { }

  ngOnInit(): void {
    this.loadRestos();
  }

  private loadRestos(): void {
    this.restoService.getRestos().subscribe(value => this.restos = value);
  }

  public restoAdded(resto: Resto): void {
    this.restoService.addResto(resto);
  }

}
