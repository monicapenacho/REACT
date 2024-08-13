// Un componente que representa un solo producto
export default function Product({ product, onAddToCart }) {
    return (
      <div className="product">
        <img src={product.image} alt={product.name} width="100" />
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <button className="btn btn-info" onClick={() => onAddToCart(product)}>Añadir al carrito</button>
      </div>
    );
  }
  