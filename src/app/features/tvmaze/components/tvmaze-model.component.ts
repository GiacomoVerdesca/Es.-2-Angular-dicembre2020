import { Component, OnInit ,Input,Output, EventEmitter} from '@angular/core';
import{Series, Show} from'../../../series/series'
@Component({
  selector: 'app-tvmaze-modal',
  template: `
<!--Dettails-->


<div class="wrapper" *ngIf="showDetails">
      <div class="content">
        <h2>{{ showDetails.name }}</h2>
        <img [src]="showDetails.image.original" width="100%" />
        <div [innerHTML]="showDetails.summary"></div>
        <div class="tag" *ngFor="let gen of showDetails.genres">{{ gen }}</div>
      </div>
      <i class="fa fa-times closeButton" (click)="Closes.emit()"></i>
    </div>

  `,
  styleUrls: ["./tvmaze-model.component.css"]
})
export class TvmazeModelComponent {
  @Input() showDetails:Show
  @Output() Closes : EventEmitter<any> = new EventEmitter<any>();

}
