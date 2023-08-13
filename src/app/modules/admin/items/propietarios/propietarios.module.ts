import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PropietariosComponent } from './propietarios.component';

const PropietariosRoutes: Route[] = [
    {
        path     : '',
        component: PropietariosComponent
    }
];

@NgModule({
    declarations: [
        PropietariosComponent
    ],
    imports     : [
        RouterModule.forChild(PropietariosRoutes)
    ]
})
export class PropietariosModule
{
}
