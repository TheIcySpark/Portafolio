import { Row, Col } from 'react-bootstrap';
import BarraSuperior from './Componentes/BarraSuperior';
import Tarjeta from './Componentes/Tarjeta';


function App() {
    let texto1 = 'Canal de youtube donde se hablan sobre temas relacionados a la programacion y computacion \
    es un proyecto colaborativo de 4 personas en total'
    return (
        <div >
            <BarraSuperior></BarraSuperior>
            <hr className = 'bg-white pd-2'></hr>
            <Row className = 'd-flex'>
                <Col>
                <Tarjeta title = 'Bugs Developers'
                text = {texto1}
                imagen = 'imagen2'
                mas_informacion = ''
                ir_al_proyecto = 'https://www.youtube.com/channel/UCDMDqrjwkoSkCiCnEXj4S2g'>
                </Tarjeta>
                </Col>
                <Col>
                <Tarjeta></Tarjeta>
                </Col>
                <Col>
                <Tarjeta></Tarjeta>
                </Col>
            </Row>
        </div>
    );
}

export default App;
