import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import Owner from './pages/Owner';
import Customer from './pages/Customer';
import CustomerRegister from './pages/CustomerRegister';

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Dashboard />}></Route>
            <Route path='/owner' element={<Owner />}></Route>
            <Route path='/customer' element={<Customer />}></Route>
            <Route path='/customerRegister' element={<CustomerRegister />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
