import React from 'react';
import ReactDOM from 'react-dom';
import BomDia from './componentes/BomDia';
import Multi, { BoaNoite } from './componentes/Multiplos'

// const elemento = <h1>React 2</h1>;
// $('<h1>').html('React 2')
ReactDOM.render(
  <div>
    <Multi.BoaTarde nome="Ana" />
    <BoaNoite nome="Bia" />
  </div>
  , document.getElementById('root'));