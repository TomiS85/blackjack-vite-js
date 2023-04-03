import { pedirCarta, valorCarta, crearCartaHTML } from './';
/**
 * 
 * @param {number} puntosMinimos puntos minimos que la computdora necesita para ganar
 * @param {HTMLElement} puntosHTML elemnto HTML para mostrar el puntaje
 * @param {HTMLElement} divCartasComputadora elemnto HTML para mostrar las cartas
 * @param {Array<string>} deck 
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

    if( !puntosMinimos ) throw new Error('Puntos mínimos son necesarios');
    if( !deck) throw new Error('El deck es necesario');
    if( !puntosHTML) throw new Erros('Argumentos puntosHTML es necesario');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHTML( carta );

        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}