import React, { useState, useEffect } from 'react';
import './App.css';
import Counter from './Counter';
import Mounted from './Mounted';
import Nombre from './Nombre';
import Resize from './Resize';
import Datos from './Datos';

export default function App() {
  const [mounted, setMounted] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setMounted(false);
    }, 1000);
  }, [])

  return (
    <div className="App">
      <Counter />
      <hr />
      <Mounted />
      <hr />
      <Nombre />
      {mounted && (
        <>
          <hr />
          <Resize />
        </>
      )}
      <hr />
      <Datos url="https://reqres.in/api/users/2?delay=2" />
    </div>
  );
}
