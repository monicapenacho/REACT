Incluir total compras

1. Transforma los precios a números al momento de calcular el total.
2. Agrega el total en la sección del carrito.

Incluir botón eliminar

// Función para eliminar un producto del carrito basado en su índice
// opción 1 Elimina basado en el índice del producto
// const handleRemoveFromCart = (product) => {
// setCart(cart.filter((item) => item.id !== product.id));
// };
<button className="btn btn-danger" onClick={() => handleRemoveFromCart(item)}>
Eliminar <FaTrashAlt />
</button>
// opción 2 eliminar un solo elemento basado en su índice en la lista del carrito.
const handleRemoveFromCart = (indexToRemove) => {
setCart(cart.filter((\_, index) => index !== indexToRemove));
// Crea un nuevo array sin el producto que tiene el índice igual a `indexToRemove`
};

     <button
            className="btn btn-danger"
            onClick={() => handleRemoveFromCart(index)}
          >
            Eliminar <FaTrashAlt />
          </button>
