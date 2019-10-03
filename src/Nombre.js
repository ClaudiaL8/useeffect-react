import React, { useState, useEffect } from 'react';

export default function Counter() {
    const [nombre, setNombre] = useState(localStorage.getItem('nombre') || '');

    useEffect(() => {
        console.log(`el nuevo nombre es ${nombre}`)
        localStorage.setItem('nombre', nombre)
    }, [nombre]); //este useEffect solo se va a ejecutar cuando el nombre cambie.

    return (
        <div>
            <input onChange={(evento)=> {
                setNombre(evento.target.value);
            }} value={nombre} />
        </div>
    )
}