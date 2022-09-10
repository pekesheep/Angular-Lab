import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-privatenavbar',
  templateUrl: './privatenavbar.component.html',
  styleUrls: ['./privatenavbar.component.scss']
})
export class PrivatenavbarComponent implements OnInit {

  constructor(public _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }


  doLogout() {
    this._auth.logout();
    this._router.navigate(['/login']);

  }
}
