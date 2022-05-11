import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articulos: [{
                      codigo: 1, 
                      descripcion: 'coca-cola',
                      precio: 2.50
                 },{
                      codigo: 2, 
                      descripcion: 'inka-cola',
                      precio: 2.20
                 },{
                      codigo: 3, 
                      descripcion: 'fanta',
                      precio: 1.70
                 }]
    }
    this.borrar = this.borrar.bind(this);
  }

  render() {
    return (
      <div class="container p-3 mb-2 bg-light text-dark">
        <br></br><table border="1" class="table table-dark table-striped text-center" >
        <thead><tr><th>Código</th><th>Descripción</th><th>Precio</th><th>Borrar?</th></tr></thead>
        <tbody >
        {this.state.articulos.map(elemento => {
          return (
            <tr  class="table-secondary" key={elemento.codigo}>
              <td>
                {elemento.codigo}  
              </td>
              <td>
                {elemento.descripcion}
              </td>
              <td>
                {elemento.precio}
              </td>              
              <td>
                <button class="btn btn-outline btn-secondary" onClick={()=>this.borrar(elemento.codigo)}>Borrar</button>
              </td>
            </tr>
          )
        })}    
        </tbody>    
        </table>
      </div>
    );

  }

  borrar(cod) {
    var temp = this.state.articulos.filter((el)=>el.codigo !== cod);
    this.setState({
      articulos: temp
    })
}

}

export default App;
