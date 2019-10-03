import React, { useEffect } from 'react';

export default function Mounted() {
    useEffect(() => { //así con la función useEffect, podemos devolver otra función que se ejecuta cuando ya no se utiliza el componente resize
        const resized = () => {
            console.log('la pantalla ha sido resized')
        };
       window.addEventListener('resize', resized);
       return() => {
           console.log('ya no queremos este evento');
           window.removeEventListener('resize', resized);
       };
    }, []);

    return <div>Resizing</div>
}