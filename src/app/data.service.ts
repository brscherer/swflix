import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Film, Angular2SwapiService } from 'angular2-swapi';
import { EventEmitter } from 'protractor';

@Injectable()
export class DataService {

  private results: BehaviorSubject<Film[]> = new BehaviorSubject([]);
  private results$: Observable<Film[]> = this.results.asObservable();

  constructor(private _swapi: Angular2SwapiService) {
    this._swapi.getFilms().subscribe(response => this.results.next(response));
  }

  public getResults$() {
    return this.results$;
  }

  search(name: string) {
    this._swapi.searchFilms(name).subscribe(response => this.results.next(response));
  }

  getFilms() {
    this._swapi.getFilms().subscribe(response => this.results.next(response));
  }
}
