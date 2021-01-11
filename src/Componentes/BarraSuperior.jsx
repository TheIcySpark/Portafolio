import React from 'react';
import logo_youtube from '../Imagenes/youtube.svg';
import logo_github from '../Imagenes/github.svg';

export default class BarraSuperior extends React.Component {

    render(){
        return (
            <div className = 'd-flex justify-content-between p-2'>
                <a href = 'https://www.youtube.com/channel/UCDMDqrjwkoSkCiCnEXj4S2g'>
                    <img src = {logo_youtube} width = '100'>
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

