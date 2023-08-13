import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PropietariosComponent } from './propietarios.component';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';



const PropietariosRoutes: Route[] = [
    {
        path     : '',
        component: PropietariosComponent
    }
];

@NgModule({
    declarations: [
        PropietariosComponent,
    ],
    imports     : [
        RouterModule.forChild(PropietariosRoutes),
        MatTableModule,
        MatButtonModule,
        MatIconModule
    ]
})
export class PropietariosModule
{
}
