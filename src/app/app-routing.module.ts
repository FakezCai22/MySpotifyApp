import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
{ path: "home",component:HomeComponent },
{ path: "search",component:SearchComponent},
{ path: "about",component:AboutComponent },
{ path: "products",component:ProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
