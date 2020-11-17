const heroes = {
    capi: {
        nombre: 'capita america',
        poder: 'Bien mamado'
    },
    iron: {
        nombre: 'Spiderman',
        poder: 'trepa muros',
    },
    chapulin: {
        nombre: 'chapulin colorado',
        poder: 'Martillo gigante',
    }
}


export const buscarHeroe = (id) => {
    const hereo = heroes[id];
    return new Promise((resolve, reject) => {
        if (hereo) {
            resolve(hereo);
        } else {
            reject(`No existe un heroe con el id ${id}`);
        }
    });
}

export const buscarHeroeAsync = async(id) => {
    const hereo = heroes[id];
    if (hereo) {
        return hereo;
    } else {
        throw `No existe un heroe con el id ${id}`;
    }

}

export const buscarHeroeDalay = (id) => {
    const heroe = heroes[id];
    return new Promise((resolve, reject) => {
        if (heroe) {
            setTimeout(() => resolve(heroe), 1000);
        } else {
            reject(`No existe un heroe con el id ${id}`);
        }
    });
}


const promesaLenta = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa Lenta'), 2000);
});

const promesaMedia = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa Media'), 1500);
});

const promesaRapida = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa Rapida'), 1000);
});

export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}