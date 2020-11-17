import './styles.css'
import { buscarHeroe as buscarHeroesCallback } from './js/callbacks.js'
import { buscarHeroe } from './js/promesas.js'


const heroeId1 = 'capi';
const heroeId2 = 'chapulin';
// Callback es una funcion que pasa argumentos otra funcion
// se creo este mecanismo para ser peticion a destiempo
// son ejecutamos de manera secuencial
// utilizan el mismo hilo
// buscarHeroe(heroeId1, (err, heroe1) => {

//     if (err) { return console.error(err); }
//     //Call back Hell
//     buscarHeroe(heroeId2, (err2, heroe2) => {

//         if (err2) { return console.error(err2); }

//         // Podemos meter otro tercero y 4 y 5 y 6 y se vuelve mas desmadre 
//         //  buscarHeroe(heroeId2, (err2, heroe2) => {
//         //  });
//         console.log(`ambos van ir pelar ${heroe1.nombre} y ${heroe2.nombre}`);
//     });
// });

///Promesas tipo A
// buscarHeroe(heroeId1).then(heroe1 => {
//     // console.log(`enviando a ${heroe1.nombre} a la mision`);
//     buscarHeroe(heroeId2).then(heroe2 => {
//         console.log(`ambos van ir pelar ${heroe1.nombre} y ${heroe2.nombre}`);
//     });
// });

///Promesas tipo B
//Si una promesa falla va a comper todas las demas y por lo tanto tirara el error
Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2)])
    .then(([heroe1, heroe2]) => {

        console.log(`ambos van ir pelar ${heroe1.nombre} y ${heroe2.nombre}`);
    }).catch(err => {
        alert(err);
    }).finally(() => {
        console.log('Se termino todo');
    });

console.log('Fin del programa');