import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private _auth: AuthService, private _snackBar: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  login() {
    const username = this.form.value.username;
    const password = this.form.value.password;
    this.loading = true;


    this._auth.login(username, password).subscribe(response => {

      this.loading = false;
      if (response) {
        this.router.navigate(['dashboard']);
      } else {
        this.error();
        this.form.reset;
      }
    })
  }

  error() {
    this._snackBar.open('User or password not valid!', '',
      {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 4000,
      })
  }

}
