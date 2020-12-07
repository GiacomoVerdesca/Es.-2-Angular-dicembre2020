import { Component} from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
<!--   <div class="conytainer text-center ">

    <button routerLink="/" class="btn btn-primary">Register</button>
    <button routerLink="catalog" class="btn btn-primary">Catalog</button>
    <button routerLink="users" class="btn btn-primary">Users</button>
    <button routerLink="contatti" class="btn btn-primary">Contatti</button>
    <button routerLink="tvmaze" class="btn btn-primary">TvMaze</button>
    </div> -->



    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Mysite.it</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" routerLink="/">Register <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="catalog">Catalog</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="users">Users</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="contatti">Contatti</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="tvmaze">TvMaze</a>
      </li>



    </ul>
  </div>
</nav>



  `,
  styles: [],
})
export class NavbarComponent  {
  constructor() {}

  ngOnInit(): void {}
}
