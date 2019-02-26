import React from 'react';

export default props => [<h1 key="h1">Bom dia, {props.nome}!</h1>, <h2 key="h2">Até breve! {props.idade}</h2>]

// export default props => {
//   return <React.Fragment>
//     <h1>Bom dia, {props.idade}!</h1>
//     <h2>Até breve!</h2>
//   </React.Fragment>
// }

// export default props => {
//   return <div>
//     <h1>Bom dia, {props.idade}!</h1>
//     <h2>Até breve!</h2>
//   </div>
// }