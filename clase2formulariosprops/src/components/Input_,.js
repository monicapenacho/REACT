
const Input = ({ type, type2, text }) => { //type seria input, y type2 text area
    console.log(text)
    let etiqueta = "";
    if (type2 === "textArea") {
        etiqueta = <textarea name="descripcion" id="descripcion" rows="6" cols="60"></textarea>
    } else {
        if (text) {
            // etiqueta = <button type="button">{text}</button>
            etiqueta = <input type={type} value={text} name="nombre" id="nombre" maxlength="50" />
        } else {
            etiqueta = <input type={type} name="nombre" id="nombre" maxlength="50" />
        }
    }
 
    return (
        <div>
            {etiqueta}
        </div>
    )
}
 
 
 
 
export default Input;
 




 