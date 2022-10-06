import {Routes, RouterModule} from '@angular/router';
import {Component, NgModule} from '@angular/core';
import {} from '../app/components/home/home/home.component'
import { HomeComponent } from 'src/app/components/home/home/home.component';
import { GuidesComponent } from 'src/app/components/guides/guides/guides.component';
import { AboutComponent } from 'src/app/components/about/about/about.component';

const routes: Routes = [
    {path: 'Home', component:HomeComponent},
    {path: 'Guides', component:GuidesComponent},
    {path: 'About', component:AboutComponent},
];


@NgModule({
    imports: [RouterModule.forRoot(routes,{useHash: true, relativeLinkResolution: 'legacy'}), ],
    exports: [RouterModule]

})

export class AppRoutingModule{}