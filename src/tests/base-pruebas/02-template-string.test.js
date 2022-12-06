import {getSaludo} from 'C:/Users/elmil/Desktop/CursoReact/03-counter-app-vite/src/base-pruebas/02-template-string';    
describe('Pruebas en 02-template-string',() => {
    test('getsaludo debe de retornar "Hola Emile"', ()=> {
        const name='Emile';
        const saludo=getSaludo( name );

        expect( saludo ).toBe(`Hola ${ name }`)
    });
});