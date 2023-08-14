import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { VehiculosComponent } from './vehiculos.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DetalleVehiculoComponent } from './detalle-vehiculo/detalle-vehiculo.component';
import { ListaVehiculosComponent } from './lista-vehiculos/lista-vehiculos.component';

const VehiculosRoutes: Route[] = [
    {
        path     : '',
        //component: UsuariosComponent,
        children : [
            {
                path: '', redirectTo: 'main'
            },
            {
                path     : 'main',
                component: ListaVehiculosComponent,
            },
            {
                path     : 'detalle/:idVehiculo',
                component: DetalleVehiculoComponent,
            }
        ]
    }
];

@NgModule({
    declarations: [
        VehiculosComponent,
        DetalleVehiculoComponent,
        ListaVehiculosComponent
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