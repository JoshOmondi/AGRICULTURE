import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: '**', redirectTo: '' }, // Fallback route
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), // Register routes
  ],
  exports: [RouterModule], // Export RouterModule
})
export class AppRoutingModule {}
