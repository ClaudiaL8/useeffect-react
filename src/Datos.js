import React, { useState, useEffect } from 'react';
import Axios from 'axios';

export default function Datos({ url }) {
    const [datos, setDatos] = useState(null);

    useEffect(() => {
        const cargar = async () => {
            const resultado = await Axios.get(url);
            setDatos(resultado.data)
        };
        cargar()
    }, [url]);

    if (!datos) {
        return <div>cargando {url}</div>;
    }
    return <div>{JSON.stringify(datos)}</div>
}