import { Routes } from '@angular/router';

import {HomeComponent} from './features/home/home.component';
import {AboutComponent} from './features/about/about.component';
import {ProjectsComponent} from './features/projects/projects.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch:'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: '**', redirectTo:'home'},
];
