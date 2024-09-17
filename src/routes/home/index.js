import './Home.css'
import Dados from '../../components/dados/dados.js'
import React, {Link} from 'react-router-dom'


function Home(){
    return(
        <main>
            <div id='header'>
            <center>
                <h1 style={{color:'white'}}>Pokédex</h1>
            </center>
            </div>
            
            <div id='menu'>
                <Link className='Link' to='/card?id=0'>
                    <img src={Dados[0].foto} id='imagem'/>
                </Link>
                <Link className='Link' to='/card?id=1'>
                    <img src={Dados[1].foto} id='imagem'/>
                </Link>
                <Link className='Link' to='/card?id=2'>
                    <img src={Dados[2].foto} id='imagem'/>
                </Link>
                <Link className='Link' to='/card?id=3'>
                    <img src={Dados[3].foto} id='imagem'/>
                </Link>
                <Link className='Link' to='/card?id=4'>
                    <img src={Dados[4].foto} id='imagem'/>
                </Link>
                <Link className='Link' to='/card?id=5'>
                    <img src={Dados[5].foto} id='imagem'/>
                </Link>
            </div>
        </main>
    )
}

export default Home;