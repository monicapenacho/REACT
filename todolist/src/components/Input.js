 // Campo entrada 
export default function Input({ tipo, valor, cambio, texto}) {
    return (
        <input
            type={tipo}
            onChange={cambio}
            placeholder={texto}
        />
    );
}


