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

  constructor(private service: DataService) {
    this.film$ = this.service.getResults$();
  }


}
