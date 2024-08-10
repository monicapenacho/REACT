
//  <></> Son necesarios porque hay varios div. Los div son bloques
// El Board debe renderizar los hijos (children) que se le pasan. Modifica el componente Board para incluir {children} en el renderizado. 



export default function BoardUseState({classtext, children}) {
    return (

        <>  
        <div className={classtext}>
            {children}
        </div>
        </>
    )
  }