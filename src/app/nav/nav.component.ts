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

  constructor(private service: DataService) { }

  search(name: string) {
    if (name.length > 3)
      this.service.search(name)
    else if (name.length == 0)
      this.service.getFilms();
  }

}
