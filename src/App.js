import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Routes,Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import NotFound from './components/NotFound/NotFound';
import OurReviews from './components/OurReviews/OurReviews';

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
          <Route path='/home' element={<Homepage></Homepage>}></Route>
          <Route path='/' element={<Homepage></Homepage>}></Route>
          <Route path='/reviews' element={<OurReviews></OurReviews>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
