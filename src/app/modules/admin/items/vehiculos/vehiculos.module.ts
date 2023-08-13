import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { VehiculosComponent } from './vehiculos.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const VehiculosRoutes: Route[] = [
    {
        path     : '',
        component: VehiculosComponent
    }
];

@NgModule({
    declarations: [
        VehiculosComponent
    ],
    imports     : [
        RouterModule.forChild(VehiculosRoutes),
        MatTableModule,
        MatButtonModule,
        MatIconModule
    ]
})
export class VehiculosModule
{
}