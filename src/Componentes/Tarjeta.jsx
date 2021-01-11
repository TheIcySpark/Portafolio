import React from 'react';
import { CardColumns, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export default class Tarjeta extends React.Component{

    render(){
        console.log(this.props)
        return(
            <Card bg = 'info' border = 'white'>
                <Card.Img variant = 'top' src = {this.props.imagen} >
                </Card.Img>
                <Card.Body>
                    <Card.Title>
                        {this.props.title}
                    </Card.Title>
                    <Card.Text>
                        {this.props.text}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <div className = 'd-flex justify-content-between'>
                        <Button variant = 'secondary' href = {this.props.mas_informacion}>
                            Mas informacion
                        </Button>
                        <Button variant = 'secondary' href = {this.props.ir_al_proyecto}>
                            Ir al proyecto
                        </Button>
                    </div>
                </Card.Footer>
            </Card>
        )
    }
}