import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import VistorInterface from './components/user/UserInterface';
import AdminInterface from './components/admin/AdminInterface';
import Home from './pages/Home';
import Dashboard from './components/admin/pages/Dashboad';
import Login from './auth/login';
import Register from './auth/register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<VistorInterface />}>
          <Route index element={<Home/>}/>
          <Route path="/login" element={<Login />} />
          <Route path='/register' element={<Register/>} />

        </Route>


        <Route path="/admin" element={<AdminInterface/>}>

          <Route index element={<Dashboard />}/>
        
        </Route>
      </Routes>
    </div>
  );
}

export default App;
