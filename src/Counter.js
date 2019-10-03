import React, { useState, useEffect } from 'react';

export default function Counter() {
    const [numero, setNumero] = useState(0);

    useEffect(() => {
        console.log(`el numero es ${numero}`);
    });

    return <div>
        <button onClick={() => {
            setNumero(numero + 1);
        }}>++</button>
        {numero}
    </div>
}