
/**
 * 
 * @param {string} carta
 * @returns {HTMLEImagelement} return de una imagen en abajo del cada jugador
 */

export const crearCartaHTML = ( carta) => {
    if (!carta) throw new Error('La carta es un argmuneto necesario');

 // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta;  
}