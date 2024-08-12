 // Campo entrada 
export default function Input({ tipo, valor, cambio, texto}) {
    return (
        <input
            type={tipo}
            value={valor || ""}
            onChange={cambio}
            placeholder={texto}
        />
    );
}


