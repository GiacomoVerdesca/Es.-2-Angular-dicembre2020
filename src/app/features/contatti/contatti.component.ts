import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatti',
  template: `
  <app-navbar></app-navbar>
  <p>Contatti</p><br>
      <i class="fa fa-3x fa-cog fa-spin"></i>
      Work in Progres

  `,
  styles: [
  ]
})
export class ContattiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
