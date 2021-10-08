import { Injectable } from "@angular/core";
import {Com} from './com';
export interface Resto{
  id: number
  nom: string
  adresse: string,
  evaluations: Com[]
}
