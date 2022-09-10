import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  form: any;

  constructor() { }

  login(username: string, password: string): Observable<boolean> {

    if (username === 'Carlos' && password === 'apruebame') {
      localStorage.setItem("token", "12345");
      localStorage.setItem("username", username);

      return of(true).pipe(delay(2000));
    } else {
      return of(false).pipe(delay(2000));
    }
  }

  isLogged(): boolean {
    if (!localStorage.getItem("token")) {
      return false;
    }
    else { return true }
  }

  logout(): void {
    localStorage.clear();
  }

  getUsername() {
    return localStorage.getItem("username");
  }

}
