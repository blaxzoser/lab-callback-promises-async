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

// Callback retorna
export const buscarHeroe = (id, callBack) => {
    const heroe = heroes[id];
    if (heroe) {
        callBack(null, heroe);
    } else {
        callBack(`No existe un heroe ${id}`);
    }

}