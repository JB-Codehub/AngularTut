import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: "admin",
    data: { animation: 'Admin' },
    loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule)
  },
  {
    path: "user",
    data: { animation: 'User' },
    loadChildren: () => import("./user/user.module").then(m => m.UserModule)
  }
  // ,
  // {
  //   path: "",
  //   component: AppComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
