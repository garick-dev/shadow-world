import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from "./app.routing";


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    onSameUrlNavigation: 'reload',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
