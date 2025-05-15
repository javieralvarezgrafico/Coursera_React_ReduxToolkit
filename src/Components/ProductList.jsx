import React from 'react';// Importar hooks de React Redux
import { useDispatch, useSelector } from 'react-redux'; //// Importar el archivo CSS para el estilo
import { addItemToCart } from './CartSlice'; // Creador de acciones
import './ProductList.css'; // Estilos CSS

const ProductList = () => { // Inicializar la función dispatch para enviar acciones a la tienda Redux
  const dispatch = useDispatch();

  // Acceder a los artículos del carrito actuales desde el estado global de Redux
  const cartItems = useSelector(state => state.cart.cartItems);

  // Lista de productos de ejemplo
  const products = [
    { id: 1, name: 'Producto A', price: 60 },
    { id: 2, name: 'Producto B', price: 75 },
    { id: 3, name: 'Producto C', price: 30 },
  ];

  // Función para manejar la adición de un producto al carrito
  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product)); // Despachar acción para agregar producto al carrito
  };

  return (
    <div className="product-list">
      <h2 className="product-list-title">Productos</h2>
      <ul className="product-list-items">
        {products.map((product) => {
          const isAlreadyInCart = cartItems.some(item => item.id === product.id); // Verificar si el producto ya está en el carrito

          return (
            <li key={product.id} className="product-list-item">
              <span>{product.name} - ${product.price}</span>
              <button
                className={`add-to-cart-btn ${isAlreadyInCart ? 'disabled' : ''}`}
                onClick={() => handleAddToCart(product)}
                disabled={isAlreadyInCart} // Deshabilitar botón si ya se ha agregado
              >
                {isAlreadyInCart ? 'Agregado' : 'Agregar al Carrito'}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;