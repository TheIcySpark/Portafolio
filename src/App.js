import { Row, Col, CardDeck } from 'react-bootstrap';
import BarraSuperior from './Componentes/BarraSuperior';
import Tarjeta from './Componentes/Tarjeta';
import { precargador_imagenes } from './Imagenes/precargador_imagenes.js'


function App() {
    let texto1 = 'Pagina de facebook donde se hablan sobre temas relacionados a la programacion y computacion \
    es un proyecto colaborativo de 4 personas en total'
    let texto2 = 'Aplicacion web construida con tecnologia react, la aplicacion permite visualizar ciertos algoritmos \
    de ordenamiento, da la posibilidad de cambiar el numero de elementos a ordenar y la velocidad con la que estos se ordenan'
    let texto3 = 'Pagina de facebook, la tematica del canal es sobre videojuegos, este al igual que la otra pagina \
    es un proyecto colaborativo de 4 personas en total'
    let texto4 = 'Aplicacion creada apartir de react, esta aplicacion permite la visualizacion de algoritmos de busqueda \
    la aplicacion posee animaciones para una visualizacion mas simple, controles de velocidad, la posibilidad de crear \
    obstaculos a libertad y mover los puntos de inicio y final. Ademas de esto posee un tutorial para mejor entendimiento \
    de como utilizar.'
    return (
        <div>
            <BarraSuperior></BarraSuperior>
            <hr className='bg-white pd-2'></hr>
            <CardDeck className='py-2'>
                <Tarjeta title='Visualizador de ordenamientos'
                    text={texto2}
                    imagen={precargador_imagenes['imagen3']}
                    bg='info'
                    ir_al_proyecto='https://visualizador-ordenamientos.web.app/'>
                </Tarjeta>
                <Tarjeta title = 'visualizador de algoritmos de busqueda'
                    text = {texto4}
                    imagen = {precargador_imagenes['imagen6']}
                    bg = 'info'
                    ir_al_proyecto = 'https://visualizador-buscador.web.app/' >
                </Tarjeta>
            </CardDeck>
            <CardDeck>
            <Tarjeta title='Bugs Developers'
                    text={texto1}
                    imagen={precargador_imagenes['imagen4']}
                    bg='warning'
                    ir_al_proyecto='https://www.facebook.com/bugsdevelopers'>
                </Tarjeta>
                <Tarjeta title='Playing Bugs'
                    text={texto3}
                    imagen={precargador_imagenes['imagen5']}
                    bg='warning'
                    ir_al_proyecto='https://www.facebook.com/Playing-Bugs-100450415392791'></Tarjeta>
            </CardDeck>
            <hr className='bg-white pd-2'></hr>
        </div>
    );
}

export default App;
