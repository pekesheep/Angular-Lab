import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { GalleryComponent } from '../gallery/gallery.component';
import { UserComponent } from '../user/user.component';
import { DashboardComponent } from './dashboard.component';
import { CrudComponent } from '../crud/crud.component';
import { PrivatenavbarComponent } from '../privatenavbar/privatenavbar.component';
import { SharedModule } from '../shared/shared.module';
import { InicioComponent } from './inicio/inicio.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CrudComponent,
    GalleryComponent,
    PrivatenavbarComponent,
    UserComponent,
    InicioComponent

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }


