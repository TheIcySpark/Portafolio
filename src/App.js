import { Row, Col, CardDeck } from 'react-bootstrap';
import BarraSuperior from './Componentes/BarraSuperior';
import Tarjeta from './Componentes/Tarjeta';
import {precargador_imagenes} from './Imagenes/precargador_imagenes.js'


function App() {
    let texto1 = 'Canal de youtube donde se hablan sobre temas relacionados a la programacion y computacion \
    es un proyecto colaborativo de 4 personas en total'
    let texto2 = 'Aplicacion web construida con tecnologia react, la aplicacion permite visualizar ciertos algoritmos \
    de ordenamiento, da la posibilidad de cambiar el numero de elementos a ordenar y la velocidad con la que estos se ordenan'
    let texto3 = 'Canal de youtube como hobbie, la tematica del canal es sobre videojuegos, este al igual que el canal \
    es un proyecto colaborativo de 4 personas en total'
    return (
        <div>
            <BarraSuperior></BarraSuperior>
            <hr className = 'bg-white pd-2'></hr>
                <CardDeck className = 'py-2'>
                    <Tarjeta title = 'Bugs Developers'
                    text = {texto1}
                    imagen = {precargador_imagenes['imagen4']}
                    bg = 'info'
                    ir_al_proyecto = 'https://www.youtube.com/channel/UCDMDqrjwkoSkCiCnEXj4S2g'>
                    </Tarjeta>
                    <Tarjeta title = 'Visualizador de ordenamientos'
                    text = {texto2}
                    imagen = {precargador_imagenes['imagen3']}
                    bg = 'info'
                    ir_al_proyecto = 'https://visualizador-ordenamientos.herokuapp.com/'>
                    </Tarjeta>
                    <Tarjeta title = 'Playing Bugs'
                    text = {texto3}
                    imagen = {precargador_imagenes['imagen5']}
                    bg = 'warning'
                    ir_al_proyecto = ''></Tarjeta>
                </CardDeck>
                <hr className = 'bg-white pd-2'></hr>
        </div>
    );
}

export default App;
