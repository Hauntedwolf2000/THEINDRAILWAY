import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Register from './component/regpage/Register';
import Login from './component/regpage/Login';
import Home from './component/Mainpage/Home';
import Fnt from './component/Fnt/Fnt';
import Smt from './component/Fnt/Smt';
import ScrollingTicker from './component/alert page/ScrollingTicker';
import Bok from './component/book/Bok';
import Pnr from './component/PNR/Pnr';
import Dum from './component/book/Dum';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/fnt' element={<Fnt/>}></Route>
          <Route path='/snt' element={<Smt/>}></Route>
          <Route path='/ScrollingTicker' element={<ScrollingTicker/>}></Route>
          <Route path='/Bok' element={<Bok/>}></Route>
          <Route path='/Pnr' element={<Pnr/>}></Route>
          <Route path='/Dum' element={<Dum/>}></Route>
          
        </Routes>
        
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
