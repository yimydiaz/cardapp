import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './home/card/card.component';
import { HomeComponent } from './home/home.component';
import { TransactionComponent } from './home/transaction/transaction.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'card', component: CardComponent },
  { path: 'transaction', component: TransactionComponent },
  { path: 'home', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
