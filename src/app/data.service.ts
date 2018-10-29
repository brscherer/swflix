import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Film, Angular2SwapiService } from 'angular2-swapi';

@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject('default');
  public currentMessage: Observable<string> = this.messageSource.asObservable();

  public film$: Observable<Film[]>;

  constructor(private _swapi: Angular2SwapiService) { }

  searchFilm(searchValue : string): Observable<Film[]> {
    this.film$ = this._swapi.searchFilms(searchValue);
    return this.film$;
  }

  getFilms(): Observable<Film[]>{
    this.film$ = this._swapi.getFilms();
    return this.film$;
  }
}
