import React, { useEffect } from 'react';

export default function Mounted() {
    useEffect(() => {
        console.log(`yo soy Mounted`);
    }, []);

    return <div>Mounted</div>
}