import React from 'react';
import logo_facebook from '../Imagenes/facebook.svg';
import logo_github from '../Imagenes/github.svg';

export default class BarraSuperior extends React.Component {

    render(){
        return (
            <div className = 'd-flex justify-content-between p-2'>
                <a href = 'https://www.facebook.com/bugsdevelopers'>
                    <img src = {logo_facebook} width = '100'>
                    </img>
                </a>
                <div>
                    Isaac Manjarrez Leyva
                </div>
                <a href = 'https://github.com/TheIcySpark/Portafolio'>
                    <img src = {logo_github} width = '100'>
                    </img>
                </a>
            </div>
        );
    }
}

