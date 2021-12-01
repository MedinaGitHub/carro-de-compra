import { Component } from 'react';
import Productos from './components/Productos';

class App extends Component {
  state = {
    productos: [
      { name: 'Tomate', price: 1500, img: '/productos/tomate.jpg' },
      { name: 'Arberja', price: 2500, img: '/productos/arbejas.jpg' },
      { name: 'Lechuga', price: 500, img: '/productos/lechuga.jpg' },
    ]
  }
  render() {
    return (
      <div >
        <Productos
          agregarAlCarro={()=> console.log('No hace nada')}
          productos={this.state.productos}
        />
        <p>Hola Mundo</p>
      </div>
    );
  }
}

export default App;
