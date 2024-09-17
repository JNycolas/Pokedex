import Dados from '../../components/dados/dados.js'
import './Card.css'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


function Card() {



    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    var tipos

    if (Dados[id].tipo.length == 2) {
        tipos = `
                <br/><h3 id='${Dados[id].tipo[0]}' >${Dados[id].tipo[0]}</h3><br/>
                <h3 id='${Dados[id].tipo[1]}'>${Dados[id].tipo[1]}</h3>
                `
    } else {
        tipos = `<br/><h3 id='${Dados[id].tipo}' >${Dados[id].tipo}</h3>`
    }

    return (
        <main>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"/>
            <center>
                <Link to='/'><i id='icone' class="bi bi-x-circle"></i></Link>
                <h1 style={{paddingTop: 10 + 'px'}}>
                    {Dados[id].nome}
                    <span>
                        N°{Dados[id].numero}
                    </span>
                </h1>
            </center>
            <nav>
                <img src={Dados[id].foto} />
                <article>
                    <div id="bio">
                        <h3>{Dados[id].bio}</h3>
                    </div>

                    <div id='Tipos' dangerouslySetInnerHTML={{ __html: tipos }} />
                </article>
            </nav>

        </main>
    )



}


export default Card