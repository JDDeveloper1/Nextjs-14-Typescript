"use client";

/* Dado el caso que quisieramos que nuestros variables de estado o funciones de efecto, 
   no se compartan los datos que se utilizan en nuestra rutas,
   cambiamos el nombre del archivo de layout.tsx a templete.tsx
*/

import { useState } from "react";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [input, setInput] = useState("");

  return (
    <div>
      <h2>Rutas relativas a la cuenta del Usuario </h2>
      <h3>Explicando la diferencia entre tmeplate y layouts</h3>
      {children}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}
