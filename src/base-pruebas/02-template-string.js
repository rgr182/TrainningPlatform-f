export function getSaludo(nombre) {
    return 'Hola ' + nombre;
}
const nombre='Emile';

console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );