import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { VehiculosComponent } from './vehiculos.component';

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
        RouterModule.forChild(VehiculosRoutes)
    ]
})
export class VehiculosModule
{
}