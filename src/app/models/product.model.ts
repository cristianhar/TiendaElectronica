export interface Product {
    id: number;
    nombre: string;
    cantidadToAdd?: number;
    precio: number;
    descripcion: string;
    imageUrl: string;
    stock: number;
}