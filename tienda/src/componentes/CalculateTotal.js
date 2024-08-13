


export default function CalculateTotal({cart}) {

         
          const calculateTotal = () => {
            return cart.reduce((total, item) => {
              // Elimina el símbolo de dólar y convierte el precio a número
              const price = parseFloat(item.price.replace("$", "")); //Antes de sumar, el precio se convierte a un número usando parseFloat y eliminando el símbolo de dólar con replace("$", "").
              return total + price;
            }, 0);
          };
return <h3>Total: ${calculateTotal()}</h3>
}