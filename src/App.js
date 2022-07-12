import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Home from './components/Home';
import Login from './components/Login';
import {Routes,Route} from 'react-router-dom';
import Main from './components/Main';
import WatchList from './components/WatchList';

function App() {
  return (
    <>
     <Header/>
     <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='/login' element={ <Login/>}/>
      <Route path='/movie_details' element={ <Main/>}/>
      <Route path="/movie_details/watchlist" element={<WatchList/>}/>

     </Routes>
    </>
  );
}

export default App;
