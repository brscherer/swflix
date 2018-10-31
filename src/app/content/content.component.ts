import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Film } from 'angular2-swapi';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  public film$: Observable<Film[]>;
  public searchQuery: string;
  public isEmpty: boolean;

  constructor(private service: DataService) {
    this.film$ = this.service.getResults$();
    this.service.getSearchQuery$().subscribe(searchQuery => this.searchQuery = searchQuery);
    this.service.isEmpty$().subscribe(isEmpty => this.isEmpty = isEmpty);
  }

}
