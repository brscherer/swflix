import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Film, Angular2SwapiService } from 'angular2-swapi';

@Injectable()
export class DataService {
  private results: BehaviorSubject<Film[]> = new BehaviorSubject([]);
  private results$: Observable<Film[]> = this.results.asObservable();

  private searchQuery: BehaviorSubject<string> = new BehaviorSubject('');
  private searchQuery$: Observable<string> = this.searchQuery.asObservable();

  private empty: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public empty$: Observable<boolean> = this.empty.asObservable();

  constructor(private _swapi: Angular2SwapiService) {
    this.getFilms();
  }

  public getResults$() {
    return this.results$;
  }

  public getSearchQuery$() {
    return this.searchQuery$;
  }

  public search(name: string) {
    this.searchQuery.next(name);
    this._swapi.searchFilms(name).subscribe(response => {
      if (response.length == 0) {
        this.empty.next(true);
        this.results.next(response);
        return;
      }
      this.empty.next(false);
      this.results.next(response);
    });
  }

  public getFilms() {
    this._swapi.getFilms().subscribe(response => this.results.next(response));
  }

  public getFilm(id: number): Observable<Film> {
    return this._swapi.getFilm(id);
  }

  public updateSearchQuery(value: string) {
    this.searchQuery.next(value);
  }

  public isEmpty$() {
    return this.empty$;
  }
}
