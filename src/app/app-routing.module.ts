import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Main/home/home.component';
import { AboutComponent } from './Main/about/about.component';
import { CartComponent } from './Main/cart/cart.component';
import { ContactComponent } from './Main/contact/contact.component';
import { ProductComponent } from './Main/product/product.component';
import { GalleryComponent } from './Main/gallery/gallery.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cart', component: CartComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'products', component: ProductComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
