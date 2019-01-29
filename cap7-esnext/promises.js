function falarDepoisDe(segundos, frase) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(frase); //Resolve só aceita 1 parametro
    }, segundos*1000);
  });
}

falarDepoisDe(3, 'Que legal!')
  .then(frase => frase.concat('?!?'))
  .then(outraFrase => console.log(outraFrase))
  .catch(error => console.log(error));
