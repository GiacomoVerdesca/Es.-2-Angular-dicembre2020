import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  template: `
  <app-navbar></app-navbar>
    <p>
      catalog works!<br>
      <i class="fa fa-3x fa-cog fa-spin"></i>
      Work in Progres
    </p>

  `,
  styles: [
  ]
})
export class CatalogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
