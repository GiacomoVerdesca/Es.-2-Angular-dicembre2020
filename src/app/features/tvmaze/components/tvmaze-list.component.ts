import { Component, OnInit ,Input,Output, EventEmitter} from '@angular/core';
import{Series} from'../../../series/series'
@Component({
  selector: 'app-tvmaze-list',
  template: `

<!-- List -->
<div class="grid">
      <div *ngFor="let series of risposta" class="grid-item "> <!-- View films -->
        <div class=" movie ">
          <div class="card  mt-3 " (click)="clickItem.emit(series)">
            <img *ngIf="series.show.image" [src]="series.show.image.medium" /> <!-- View Film's img  -->
            {{ series.show.name }}
            <div *ngIf="!series.show.image">
              |No Image|
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["./tvmaze-list.component.css"]
})
export class TvmazeListComponent {
  @Input() risposta:Series[]
  @Output() clickItem : EventEmitter<any> = new EventEmitter<any>();

}
