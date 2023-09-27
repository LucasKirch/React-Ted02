import PrimeiroComponente from "./Componentes/Basicos/Primeiro";
import SegundoComponente from "./Componentes/Basicos/Segundo"
import TerceiroComponente from "./Componentes/Basicos/Terceiro"
import ArrowFunction from "./Componentes/Basicos/ArrowFunction";
import Spred from "./Componentes/Basicos/Spread";
import Ted02 from "./Componentes/Basicos/Ted02";

function App() {
    return(
    <div>
        <h1>TESTEEE</h1>
        <PrimeiroComponente/>
        <SegundoComponente/>
        <TerceiroComponente texto1="Utilizando props" texto2="Continuação" />
        <ArrowFunction um={0} dois={9} />
        <Spred />
        <Ted02  h1="NOME 1" h2="NOME 2"/>
    </div>
    )
}

export default App