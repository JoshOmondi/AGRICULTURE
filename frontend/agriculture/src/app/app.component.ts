import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // Mark as standalone
  imports: [RouterModule], // Import RouterModule for routing
  template: `
    <header>
      <h1>Welcome to the Agriculture App</h1>
      <nav>
        <a routerLink="/">Home</a>
      </nav>
    </header>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      header {
        text-align: center;
        margin-bottom: 20px;
      }
      nav a {
        margin: 0 10px;
        text-decoration: none;
        color: green;
      }
      nav a:hover {
        text-decoration: underline;
      }
    `,
  ],
})
export class AppComponent {}
