import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'HomePage' } },
  {
    path: 'about-me',
    component: AboutMeComponent,
    data: { animation: 'AboutMePage' },
  },
  { path: '**', redirectTo: '' },
];
