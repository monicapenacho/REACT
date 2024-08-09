document.addEventListener("DOMContentLoaded", function() {
    // Crear y configurar elementos del formulario
    const form = document.createElement('form');
    form.setAttribute('action', '');
    form.setAttribute('method', 'get');

    const h1 = document.createElement('h1');
    h1.textContent = 'Formulario de registro';

    // Crear campo de nombre
    const pNombre = document.createElement('p');
    const labelNombre = document.createElement('label');
    labelNombre.setAttribute('for', 'nombre');
    labelNombre.textContent = 'Nombre:';
    const inputNombre = document.createElement('input');
    inputNombre.setAttribute('type', 'text');
    inputNombre.setAttribute('name', 'nombre');
    inputNombre.setAttribute('id', 'nombre');
    inputNombre.setAttribute('maxlength', '50');
    pNombre.appendChild(labelNombre);
    pNombre.appendChild(inputNombre);

    // Crear campo de apellidos
    const pApellidos = document.createElement('p');
    const labelApellidos = document.createElement('label');
    labelApellidos.setAttribute('for', 'apellidos');
    labelApellidos.textContent = 'Apellidos:';
    const inputApellidos = document.createElement('input');
    inputApellidos.setAttribute('type', 'text');
    inputApellidos.setAttribute('name', 'apellidos');
    inputApellidos.setAttribute('id', 'apellidos');
    inputApellidos.setAttribute('maxlength', '50');
    pApellidos.appendChild(labelApellidos);
    pApellidos.appendChild(inputApellidos);

    // Crear campo de sexo
    const pSexo = document.createElement('p');
    pSexo.textContent = 'Sexo: ';
    const inputSexoH = document.createElement('input');
    inputSexoH.setAttribute('type', 'radio');
    inputSexoH.setAttribute('name', 'sexo');
    inputSexoH.setAttribute('id', 'sexo-h');
    inputSexoH.setAttribute('value', 'h');
    const labelSexoH = document.createElement('label');
    labelSexoH.setAttribute('for', 'sexo-h');
    labelSexoH.textContent = 'hombre';
    const inputSexoM = document.createElement('input');
    inputSexoM.setAttribute('type', 'radio');
    inputSexoM.setAttribute('name', 'sexo');
    inputSexoM.setAttribute('id', 'sexo-m');
    inputSexoM.setAttribute('value', 'm');
    const labelSexoM = document.createElement('label');
    labelSexoM.setAttribute('for', 'sexo-m');
    labelSexoM.textContent = 'mujer';
    pSexo.appendChild(inputSexoH);
    pSexo.appendChild(labelSexoH);
    pSexo.appendChild(inputSexoM);
    pSexo.appendChild(labelSexoM);

    // Crear campo de correo
    const pCorreo = document.createElement('p');
    const labelCorreo = document.createElement('label');
    labelCorreo.setAttribute('for', 'correo');
    labelCorreo.textContent = 'Correo:';
    const inputCorreo = document.createElement('input');
    inputCorreo.setAttribute('type', 'text');
    inputCorreo.setAttribute('name', 'correo');
    inputCorreo.setAttribute('id', 'correo');
    inputCorreo.setAttribute('maxlength', '100');
    pCorreo.appendChild(labelCorreo);
    pCorreo.appendChild(inputCorreo);

    // Crear campo de población
    const pPoblacion = document.createElement('p');
    const labelPoblacion = document.createElement('label');
    labelPoblacion.setAttribute('for', 'poblacion');
    labelPoblacion.textContent = 'Población:';
    const selectPoblacion = document.createElement('select');
    selectPoblacion.setAttribute('name', 'poblacion');
    selectPoblacion.setAttribute('id', 'poblacion');
    const opciones = ['Alicante', 'Madrid', 'Sevilla', 'Valencia'];
    opciones.forEach(opcion => {
        const option = document.createElement('option');
        option.textContent = opcion;
        selectPoblacion.appendChild(option);
    });
    pPoblacion.appendChild(labelPoblacion);
    pPoblacion.appendChild(selectPoblacion);

    // Crear campo de descripción
    const pDescripcion = document.createElement('p');
    const labelDescripcion = document.createElement('label');
    labelDescripcion.setAttribute('for', 'descripcion');
    labelDescripcion.textContent = 'Descripción:';
    const textareaDescripcion = document.createElement('textarea');
    textareaDescripcion.setAttribute('name', 'descripcion');
    textareaDescripcion.setAttribute('id', 'descripcion');
    textareaDescripcion.setAttribute('rows', '6');
    textareaDescripcion.setAttribute('cols', '60');
    pDescripcion.appendChild(labelDescripcion);
    pDescripcion.appendChild(textareaDescripcion);

    // Crear campo de recibir información
    const pInfo = document.createElement('p');
    const inputInfo = document.createElement('input');
    inputInfo.setAttribute('type', 'checkbox');
    inputInfo.setAttribute('name', 'info');
    inputInfo.setAttribute('id', 'info');
    inputInfo.setAttribute('checked', 'checked');
    const labelInfo = document.createElement('label');
    labelInfo.setAttribute('for', 'info');
    labelInfo.textContent = 'Deseo recibir información sobre novedades y ofertas';
    pInfo.appendChild(inputInfo);
    pInfo.appendChild(labelInfo);

    // Crear campo de condiciones
    const pCondiciones = document.createElement('p');
    const inputCondiciones = document.createElement('input');
    inputCondiciones.setAttribute('type', 'checkbox');
    inputCondiciones.setAttribute('name', 'condiciones');
    inputCondiciones.setAttribute('id', 'condiciones');
    const labelCondiciones = document.createElement('label');
    labelCondiciones.setAttribute('for', 'condiciones');
    labelCondiciones.textContent = ' Declaro haber leído y aceptar las condiciones generales del programa y la normativa sobre protección de datos';
    pCondiciones.appendChild(inputCondiciones);
    pCondiciones.appendChild(labelCondiciones);

    // Crear botón de enviar
    const pSubmit = document.createElement('p');
    const inputSubmit = document.createElement('input');
    inputSubmit.setAttribute('type', 'submit');
    inputSubmit.setAttribute('value', 'Enviar');
    pSubmit.appendChild(inputSubmit);

    // Añadir todos los elementos al formulario
    form.appendChild(pNombre);
    form.appendChild(pApellidos);
    form.appendChild(pSexo);
    form.appendChild(pCorreo);
    form.appendChild(pPoblacion);
    form.appendChild(pDescripcion);
    form.appendChild(pInfo);
    form.appendChild(pCondiciones);
    form.appendChild(pSubmit);

    // Añadir el formulario al body del documento
    document.body.appendChild(h1);
    document.body.appendChild(form);
});