test('Esta prueba no debe de fallar', ()=> {

    if(0===0){
        const msg1= 'Hola Mundo';
        const msg2= msg1.trim();

        expect(msg1).toBe(msg2);
    }
})