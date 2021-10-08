import {Component, Input, OnInit} from '@angular/core';
import {Resto} from "../models/resto";

@Component({
  selector: 'app-afficheresto',
  templateUrl: './afficheresto.component.html',
  styleUrls: ['./afficheresto.component.css']
})
export class AfficherestoComponent implements OnInit {
  @Input() restos: Resto[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
