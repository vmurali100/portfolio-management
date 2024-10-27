import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PortfolioFormComponent } from './portfolio-form/portfolio-form.component';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Default route redirects to Dashboard
    { path: 'dashboard', component: DashboardComponent},
    { path: 'portfolio-form', component: PortfolioFormComponent },
    { path: '**', redirectTo: '/dashboard' } // Redirect any unknown routes to Dashboard
  
];
