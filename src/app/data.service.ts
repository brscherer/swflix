import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Film, Angular2SwapiService } from 'angular2-swapi';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService {

  private films$: Observable<Film[]> =  this._swapi.getFilms();

  private results: BehaviorSubject<Film[]> = new BehaviorSubject([]);
  private results$: Observable<Film[]> = this.results.asObservable();

  private searchQuery: BehaviorSubject<string> = new BehaviorSubject('');
  private searchQuery$: Observable<string> = this.searchQuery.asObservable();

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
    this.films$
      .pipe(map(films => films.filter(film => film.title.toLowerCase().includes(name.toLowerCase()))))
      .subscribe(response => this.results.next(response));
      console.log(this.results)
    //this._swapi.searchFilms(name).subscribe(response => this.results.next(response));
  }

  public getFilms() {
    this.films$
      .subscribe(response => this.results.next(response));
    //this._swapi.getFilms().subscribe(response => this.results.next(response));
  }
}
