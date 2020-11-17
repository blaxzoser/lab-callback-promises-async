import { buscarHeroe, buscarHeroeDalay, buscarHeroeAsync } from './promesas';

const heroesIds = ['capi', 'iron', 'chapulin'];
const heroesPromesas = heroesIds.map(id => buscarHeroe(id));


export const obtenerHeroesArr = async() => {

    const heroesArry = [];

    for (const id of heroesIds) {
        const heroe = await buscarHeroeDalay(id);
        heroesArry.push(heroe);
    }
    return heroesArry;
};

export const obtenerHeroesArrFast = async() => {

    const heroesArry = [];

    for (const id of heroesIds) {
        heroesArry.push(buscarHeroeDalay(id));
    }
    return await Promise.all(heroesArry);
};

export const obtenerHeroesArrRefactor = async() => {
    return await Promise.all(heroesIds.map(buscarHeroeDalay));
};


export const obtenerHeroeAwait3 = async(id) => {
    try {
        const heroe = await buscarHeroeAsync(id);
        return heroe;
    } catch {
        console.log('CATH!!');
        return {
            nombre: 'Sin nombre',
            poder: 'sin poder'
        }
    }
}

export const heroesCiclo = async() => {
    console.time('heroesCiclo');

    for await (const heroe of heroesPromesas) {
        console.log(heroe);
    }
    console.timeEnd('Heroesciclo');
};

export const heroeIFawait = async(id) => {
    if ((await buscarHeroeAsync(id)).nombre === 'Spiderman') {
        console.log('Es el mejor de todos');
    } else {
        console.log('basura');
    }

}