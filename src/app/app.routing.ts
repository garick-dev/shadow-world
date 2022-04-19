import { Routes } from "@angular/router";
import {MainPageComponent} from "./components/main-page/main-page.component";
import {CityFallenComponent} from "./@shared/location/city/city-fallen/city-fallen.component";
import {ElementalComponent} from "./@shared/location/monster/elemental/elemental.component";

export const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'city-fallen',
    component: CityFallenComponent,
  },
  {
    path: '',
    redirectTo: "/",
    pathMatch: 'full',
  },
  {
    path: 'monster',
    component: ElementalComponent
  }

]
