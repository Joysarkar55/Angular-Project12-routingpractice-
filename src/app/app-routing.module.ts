import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import {ContactusComponent }from './contactus/contactus.component'
import {NotfoundComponent} from './notfound/notfound.component';


const routes: Routes = [
  {path:'home', component: HomeComponent},
{path: 'product', component: ProductComponent},
{path: 'contactus', component: ContactusComponent},
{path: '**', component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
