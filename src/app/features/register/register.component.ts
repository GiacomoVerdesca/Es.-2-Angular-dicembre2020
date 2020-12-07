import { Component } from '@angular/core';
import { _user } from '../interface/user.interface';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  template: `
<app-navbar></app-navbar>

    <div class="container mt-4">
      <form
        class="card card-body mt-3"
        #f="ngForm"
        (submit)="logUser(f)"
        [ngClass]="{
          male: f.value.gender === 'M',
          female: f.value.gender === 'F'
        }"
      >
        <!--Username-->
        <label for="username">Username</label>
        <input
          type="text"
          placeholder="Username"
          [ngModel]
          class="form-control"
          #usernameInput="ngModel"
          name="username"
          required
          [ngClass]="{ 'is-invalid': usernameInput.invalid && f.dirty }"
        />
        <!-- Gender -->
        <label for="gender">Gender</label>
        <select
          name="gender"
          [ngModel]
          #genderInput="ngModel"
          required
          class="form-control"
        >
          <option [ngValue]="null">-Select Gender-</option>
          <option value="M">M</option>
          <option value="F">F</option>
        </select>
        <!-- Date -->
        <label for="date">Date of Birth</label>
        <input type="date"
          [ngModel]
          #dateInput="ngModel"
          required
          name="date"
        />


        <!--Password-->
        <label for="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          class="form-control"
          [ngModel]
          #passwordInput="ngModel"
          required
          [ngClass]="{ 'is-invalid': passwordInput.invalid && f.dirty }"
        />
        <!--Button-->
        <button class="btn btn-primary ml-2" [disabled]="f.invalid">
          Register
        </button>
      </form>

      <div class="container mt-4">

        <div
          *ngFor="let u of User"
          class="list-group-item"
          [ngClass]="{ 'male': u.gender === 'M', 'female': u.gender === 'F' }"
        >


          <i class="fa fa-trash fa-1x pull-right" (click)="deleteUser(u)"></i>
          <p>
            <i
              class="fa fa-3x"
              [ngClass]="{
                'fa-mars ': u.gender === 'M',
                'fa-venus ': u.gender === 'F'
              }"
            ></i>
            Username : {{ u.username }} - Password: {{ u.password }} - Date of Birth: {{u.date}}
          </p>

        </div>

      </div>
    </div>

  `,
  styles: [
    `
      .male {
        background-color: #36caff;
      }
      .female {
        background-color: pink;
      }
      .card {
        transition: all 0.5s;
      }
    `,
  ],
})
export class RegisterComponent {
  User: _user[];

  constructor(private http: HttpClient) {
    this.init();
  }

  init() {
    this.http
      .get<_user[]>('http://localhost:3000/users')
      .subscribe((risposta) => {
        this.User = risposta;
      });
  }

  logUser(f: NgForm) {
    const Us = f.value as _user;
    this.http
      .post<_user>(`http://localhost:3000/users/`, Us)
      .subscribe((dbUser) => {
        this.User = [...this.User, dbUser];
        f.reset();
      });
  }
  deleteUser(UserDelete: _user) {
    this.http
      .delete('http://localhost:3000/users/' + UserDelete.id)
      .subscribe(() => {
        this.User = this.User.filter((u) => u.id !== UserDelete.id);
      });
  }
}
