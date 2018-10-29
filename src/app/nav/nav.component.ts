import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  public faSearch: any = faSearch;

  constructor(private _data: DataService) { }

  searchFilm(searchValue : string) {
   this._data.searchFilm(searchValue);
  }

}
