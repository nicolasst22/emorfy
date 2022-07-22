class ClienteDTO {

    constructor(cliente){
        this.nombre = cliente.nombre;
        this.direccion = cliente.direccion;
        this.email = cliente.email;
        this.password  = cliente.password;
    }

    getCliente(){
        return {
            nombre: this.nombre,
            direccion: this.direccion,
            email: this.email,
            password: this.password
        }
    }
}

module.exports = ClienteDTO;