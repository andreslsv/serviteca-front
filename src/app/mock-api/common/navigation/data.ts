/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    },
    {
        id   : 'items',
        title: 'Items',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/items'
    },
    {
        id      : 'items',
        title   : 'Items',
        subtitle: 'Gestiona los propietarios y vehículos',
        type    : 'group',
        icon    : 'feather:box',
        children: [
            {
                id   : 'items.propietarios',
                title: 'Propietarios',
                type : 'basic',
                icon : 'heroicons_outline:clipboard-check',
                link : '/items/propietarios'
            },
            {
                id   : 'items.vehiculos',
                title: 'Vehículos',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/items/vehiculos'
            },
            {
                id   : 'items.crear',
                title: 'Crear',
                type : 'basic',
                icon : 'heroicons_outline:plus-circle',
                link : '/items/crear'
            }
        ]
    },
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    },
    {
        id      : 'items',
        title   : 'Items',
        tooltip : 'Items',
        type    : 'aside',
        icon    : 'feather:box',
        children: []
    },

];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
