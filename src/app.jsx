import PrimeiroComponente from "./Componentes/Basicos/Primeiro";
import SegundoComponente from "./Componentes/Basicos/Segundo"
import TerceiroComponente from "./Componentes/Basicos/Terceiro"

function App() {
    return(
    <div>
        <h1>TESTEEE</h1>
        <PrimeiroComponente/>
        <SegundoComponente/>
        <TerceiroComponente texto1="Utilizando props" texto2="Continuação" />
    </div>
    )
}

export default App