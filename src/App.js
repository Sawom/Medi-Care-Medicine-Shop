import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Confirm from './Pages/Confirm/confirm';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Required from './Pages/Login/Required/Required';
import MedicineDetails from './Pages/MedicineDetails/MedicineDetails';
import Notfound from './Pages/Notfound/Notfound';
import Return from './Pages/Return/Return';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Term from './Pages/Term/Term';


function App() {
  return (
    <div className="App">
     <Header></Header> 
     <Routes>
        <Route path='/' element={ <Home></Home> } ></Route>
        <Route path='/home' element={ <Home></Home> } ></Route>
        <Route path='/about' element={ <About></About> } ></Route>
        <Route path='/return' element={ 
          <Required>
              <Return></Return> 
          </Required>
        } ></Route>
        <Route path='/terms' element={ <Term></Term> } ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/register' element={<Register></Register>} ></Route>
        <Route path='/confirm' element={
          <Required>
            <Confirm></Confirm>
          </Required>
        } ></Route>
        {/* dynamic route
        <Route path='/mediinfo/:medid' element={<MedicineDetails></MedicineDetails>} ></Route> */}
        <Route path='*' element={ <Notfound></Notfound>} ></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
