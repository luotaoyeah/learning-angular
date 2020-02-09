import { Component, OnInit } from '@angular/core';
import { X01Service } from '../services/x-01.service';
import { IMovie } from '../vms/i-movie';

/*
 * https://ngrx.io/guide/effects#comparison-with-component-based-side-effects
 */
@Component({
  selector: 'app--x-01-01',
  templateUrl: './x-01-01.component.html',
})
export class X0101Component implements OnInit {
  public movies: Array<IMovie> = [];

  constructor(private x01Service: X01Service) {}

  public ngOnInit() {
    this.x01Service.listMovies().subscribe((movies: Array<IMovie>) => {
      this.movies = movies;
    });
  }
}
