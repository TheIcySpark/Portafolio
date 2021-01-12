import React from 'react';
import { CardColumns, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export default class Tarjeta extends React.Component{

    render(){
        console.log(this.props)
        return(
            <Card bg = {this.props.bg} border = 'white'>
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
                    <div >
                        <Button variant = 'secondary' href = {this.props.ir_al_proyecto}>
                            Ir al proyecto
                        </Button>
                    </div>
                </Card.Footer>
            </Card>
        )
    }
}