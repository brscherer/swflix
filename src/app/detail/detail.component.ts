import { Component, OnInit } from '@angular/core';
import { Film } from 'angular2-swapi';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Location } from '@angular/common';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  public film: Film;
  public faArrowLeft: any = faArrowLeft;

  constructor(
    private route: ActivatedRoute,
    private service: DataService,
    private location: Location
    ) { }

  ngOnInit() {
    this.getFilm();
  }

  getFilm(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getFilm(id).subscribe(film => this.film = film);
  }

  goBack(): void {
    this.location.back();
  }

}
