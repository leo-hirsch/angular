import { Injectable } from '@angular/core';
import {Resto} from "./models/resto";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RestoService {

  private restos: BehaviorSubject<Resto[]> = new BehaviorSubject<Resto[]>([]);
  constructor(private httpClient: HttpClient) {
    this.loadRestos();
  }
  public getRestos(): Observable<Resto[]> {
    return this.restos;
  }
  public loadRestos(): void {
    this.httpClient.get<Resto[]>("http://localhost:3000/restaurants").subscribe(value => this.restos.next(value));
  }
  public addResto(resto: Resto): void {
    this.httpClient.post("http://localhost:3000/", resto).subscribe(value => this.restos.next([...this.restos.getValue(), resto]));
  }
}
