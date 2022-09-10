import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from '../crud/crud.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { UserComponent } from '../user/user.component';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';


const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
    {path: '', component: InicioComponent},
    {path: 'gallery', component: GalleryComponent},
    {path: 'profile', component: UserComponent},
    {path: 'crud', component: CrudComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
