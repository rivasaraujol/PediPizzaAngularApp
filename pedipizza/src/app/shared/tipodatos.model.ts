export interface Pedido {
    id: number, 
    telefono: string, 
    nombre?: string,
    cedula?: string,
    direccion?: string,
    img: string,
    validado: number,
    platosPedidos: PlatoPedido[]
}

export interface PlatoPedido {
    id: number,
    cantidad: number,
    idpedido: number,
    nombre: string,
    descripcion: string,
    precio: number,
    img: string
}

export interface Pizza {
    id: number,
    nombre: string,
    descripcion: string, 
    precio: number, 
    img: string,
    existencia: number
}