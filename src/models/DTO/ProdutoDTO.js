class ProductoDTO {
    constructor(product){
        this.id = product.id || product._id
        this.nombre = product.nombre;
        this.descripcion = product.descripcion;
        this.precio = product.precio;
        this.imagen  = product.imagen;
        this.categoria = product.categoria || "Sin Categoria"
    }

    getProducto(){
        return {
            id: this.id,
            nombre: this.nombre,
            descripcion: this.descripcion,
            precio: this.precio,
            imagen: this.imagen,
            categoria: this.categoria
        }
    }
}

module.exports = ProductoDTO;