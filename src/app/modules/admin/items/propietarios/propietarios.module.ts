import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PropietariosComponent } from './propietarios.component';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { DetallePropietarioComponent } from './detalle-propietario/detalle-propietario.component';
import { ListaPropietariosComponent } from './lista-propietarios/lista-propietarios.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



const PropietariosRoutes: Route[] = [
    /*{
        path     : '',
        component: PropietariosComponent
    }*/
    {
        path     : '',
        //component: UsuariosComponent,
        children : [
            {
                path: '', redirectTo: 'main'
            },
            {
                path     : 'main',
                component: ListaPropietariosComponent,
            },
            {
                path     : 'detalle/:idPropietario',
                component: DetallePropietarioComponent,
            }
        ]
    }
];

@NgModule({
    declarations: [
        PropietariosComponent,
        DetallePropietarioComponent,
        ListaPropietariosComponent,
    ],
    imports     : [
        RouterModule.forChild(PropietariosRoutes),
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule
    ]
})
export class PropietariosModule
{
}
