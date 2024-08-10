// Este componente combina HandleClickSetValue y OnClick. HandleClickSetValue es el contenedor que gestiona el estado y la lógica del clic, mientras que OnClick es el componente de presentación.

import HandleClickSetValue from './HandleClickSetValue';
import OnClickSetValue from './OnClickSetValue'

export default function MyUseState () {
    return (
    
    <HandleClickSetValue> 
        <OnClickSetValue classtext="square"/>
    </HandleClickSetValue>
    
    )
}



