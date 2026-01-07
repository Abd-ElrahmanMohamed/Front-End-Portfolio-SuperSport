import { Routes } from '@angular/router';
import { Home } from './layout/home/home';
import { Contact } from './layout/contact/contact';
import { Services } from './layout/services/services';
import { About } from './layout/about/about';
import { Portfolio } from './layout/portfolio/portfolio';
import { Clients } from './layout/clients/clients';
import { AdminDashboardComponent } from './dashboard/admin/dashboard/dashboard.component';
import { HomeEditorComponent } from './dashboard/admin/home-editor/home-editor.component';
import { AboutEditorComponent } from './dashboard/admin/about-editor/about-editor.component';
import { ServicesEditorComponent } from './dashboard/admin/services-editor/services-editor.component';
import { PortfolioEditorComponent } from './dashboard/admin/portfolio-editor/portfolio-editor.component';
import { ContactEditorComponent } from './dashboard/admin/contact-editor/contact-editor.component';
import { AdminLoginComponent } from './dashboard/auth/login.component';

export const routes: Routes = [
  // Public routes (with header and footer)
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'services', component: Services },
  { path: 'portfolio', component: Portfolio },
  { path: 'clients', component: Clients },
  { path: 'contact', component: Contact },

  // Admin routes (without header and footer)
  { path: 'admin/login', component: AdminLoginComponent },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeEditorComponent },
      { path: 'about', component: AboutEditorComponent },
      { path: 'services', component: ServicesEditorComponent },
      { path: 'portfolio', component: PortfolioEditorComponent },
      { path: 'contact', component: ContactEditorComponent },
    ],
  },

  // Wildcard route
  { path: '**', redirectTo: 'home' },
];
