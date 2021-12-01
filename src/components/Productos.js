import { Component } from 'react'
import Producto from './Producto'

class Productos extends Component {
    render() {
        const { productos, agregarAlCarro } = this.props
        return (
            <div>
                {productos.map(producto =>
                    <Producto
                        agregarAlCarro={agregarAlCarro}
                        key={producto.name}
                        producto={producto}
                    />
                )}
            </div>
        )
    }

}

export default Productos