import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Series, Show } from '../../series/series';
@Component({
  selector: 'app-tvmaze',
  template: `
  <app-navbar></app-navbar>
  <!-- Form -->
  <div class="container">
      <form #f="ngForm" (submit)="getFilm(f.value.text)">
        <input
          type="text"
          [ngModel]="searchtext"
          required
          class="form-control"
          placeholder="Search Series"
          minlenght="3"
          name="text"
        />
        <button type="submit" [disabled]="f.invalid" class="btn btn-primary">
          Search
        </button>
      </form>
    </div>
    <app-tvmaze-list [risposta]="risposta" (clickItem)="ShowDetails($event)"></app-tvmaze-list>
    <app-tvmaze-modal [showDetails]="showDetails" (Closes)="close()"></app-tvmaze-modal>


  `,
  styles: [],
})
export class TvmazeComponent {
  risposta: Series[];
  searchtext: string = 'viking';
  showDetails:Show;

  constructor(private http: HttpClient) {
    this.getFilm(this.searchtext);
  }

  getFilm(text: string): void {
    this.http
      .get<Series[]>('http://api.tvmaze.com/search/shows?q=' + text)
      .subscribe((rispo) => console.log((this.risposta = rispo)));
  }
  close(){
    this.showDetails=null;
  }
  ShowDetails(series: Series): void {
    this.showDetails = series.show;
  }
}
