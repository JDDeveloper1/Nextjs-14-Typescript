 export const metadata = {
   title: "Products",
   description: "Products description",
 };

// 'use client'

// import { useState, useEffect } from 'react';

function Products() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 10000); // Cambia este valor al número de milisegundos que desees

  //   return () => clearTimeout(timer); // Limpia el temporizador si el componente se desmonta
  // }, []);

  // if (!loading) {
  //   return null;
  //}
  return (
    <div>
      <h1>Product</h1>
    </div>
  )
}

export default Products
