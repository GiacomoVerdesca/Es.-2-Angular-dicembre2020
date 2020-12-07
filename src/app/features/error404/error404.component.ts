import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error404',
  template: `
   <h2><i class="fa  fa-exclamation-circle"></i> Error 404  </h2>
   <p>Page not found!</p>

  `,
  styles: [
  ]
})
export class Error404Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
