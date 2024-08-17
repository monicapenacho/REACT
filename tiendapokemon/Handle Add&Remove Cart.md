// return pokemons;

    // Función para agregar un producto (parámetro = pokemon) al carrito: agrupando por producto
    const handleAddToCart = (pokemon) => {
      //setCart es una función de React setState para actualizar el estado basado en su valor anterior, Esta función recibe el estado anterior como argumento.prevCart = previousCart (carrito anterior) Es el estado actual del carrito justo antes de que se realice la actualización.
      setCart((prevCart) => {
        //busca en el carrito previo (prevCart) un producto que tenga el mismo id que el producto que se quiere agregar. Si lo encuentra, lo almacena en la variable existingProduct.

        const existingProduct = prevCart.find((item) => item.id === pokemon.id);
        if (existingProduct) {
          // Si el producto ya está en el carrito, incrementa la cantidad
          return prevCart.map((item) =>
            item.id === pokemon.id ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          // Si el producto no está en el carrito, agrégalo con cantidad 1
          return [...prevCart, { ...pokemon, quantity: 1 }];
        }
      });
    };


    const handleRemoveFromCart = (indexToRemove) => {
        setCart(cart.filter((_, index) => index !== indexToRemove));
    };
