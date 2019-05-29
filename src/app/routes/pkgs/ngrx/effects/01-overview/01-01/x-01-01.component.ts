import { Component, OnInit } from '@angular/core';
import { X0101Service } from '../services/x-01-01.service';
import { IMovie } from '../vms/IMovie';

/*
 * https://ngrx.io/guide/effects#comparison-with-component-based-side-effects
 */
@Component({
  selector: 'app-x-01-01',
  templateUrl: './x-01-01.component.html',
  styles: [],
})
export class X0101Component implements OnInit {
  public movies: Array<IMovie> = [];

  constructor(private x0101Service: X0101Service) {}

  public ngOnInit() {
    this.x0101Service.listMovies().subscribe((movies: Array<IMovie>) => {
      this.movies = movies;
    });
  }
}
