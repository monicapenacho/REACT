 // Campo entrada 
export default function Input({ tipo, valor, onChange, texto}) {
    return (
        <input
            type={tipo}
            value={valor || ""}
            onChange={onChange}
            placeholder={texto}
        />
    );
}


