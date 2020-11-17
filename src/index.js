import { buscarHeroeAsync, buscarHeroe, promesaLenta, promesaMedia, promesaRapida } from './js/promesas';
import { obtenerHeroeAwait3, heroesCiclo, heroeIFawait } from './js/await';


// promesaLenta.then(console.log);
// promesaMedia.then(console.log);
// promesaRapida.then(console.log);

//se ejecuta solo 1 por que es mas rapida
// Promise.race([promesaLenta, promesaMedia, promesaRapida])
//     .then(console.log)
//     .catch(console.warn);


//Buscar heroe con Ascy
// buscarHeroe('capi2').then(heroe => console.log(heroe))
//     .catch(console.warn);
// buscarHeroeAsync('iron').then(heroe => console.log(heroe));
//obtenerHeroesArrRefactor().then(console.table);

// console.time('awiat');
// obtenerHeroeAwait3('capi3').then(heroes => {
//     console.table(heroes);
//     console.timeEnd('await');
// }).catch(console.warn);

heroesCiclo();
heroeIFawait('iron');