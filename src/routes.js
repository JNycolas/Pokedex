import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './routes/home';
import Card from './routes/card';


function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/card/*' element={<Card/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;