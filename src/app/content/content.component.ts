import { Component, OnInit, Input } from '@angular/core';
import { Film } from 'angular2-swapi';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  public film$: Observable<Film[]>;

  @Input('searchFilm') film: string;

  constructor(private _data: DataService) { }

  ngOnInit() {
    this.film$ = this._data.getFilms();
  }

}
