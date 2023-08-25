import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DetallePropietarioComponent } from './propietarios/detalle-propietario/detalle-propietario.component';
import { ListaPropietariosComponent } from './propietarios/lista-propietarios/lista-propietarios.component';
import { DetalleVehiculoComponent } from './vehiculos/detalle-vehiculo/detalle-vehiculo.component';
import { ListaVehiculosComponent } from './vehiculos/lista-vehiculos/lista-vehiculos.component';
import { CrearItemsComponent } from './crear-items/crear-items.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

const VehiculosRoutes: Route[] = [
    {
        path     : '',
        //component: UsuariosComponent,
        children : [
            {
                path: '', redirectTo: 'main'
            },
            {
                path     : 'vehiculos',
                component: ListaVehiculosComponent,
            },
            {
                path     : 'vehiculos/detalle/:idVehiculo',
                component: DetalleVehiculoComponent,
            },
            {
                path     : 'propietarios',
                component: ListaPropietariosComponent,
            },
            {
                path     : 'propietarios/detalle/:idVehiculo',
                component: DetallePropietarioComponent,
            },
            {
                path     : 'crear',
                component: CrearItemsComponent,
            }
        ]
    }
];

@NgModule({
    declarations: [
        DetalleVehiculoComponent,
        ListaVehiculosComponent,
        DetallePropietarioComponent,
        ListaPropietariosComponent,
        CrearItemsComponent,
    ],
    imports     : [
        RouterModule.forChild(VehiculosRoutes),
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatTabsModule,
        CommonModule
        //BrowserModule
    ]
})
export class ItemsModule
{
}