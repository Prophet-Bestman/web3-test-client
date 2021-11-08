import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header.component';
import Home from './routes/Home';
import Users from './routes/Users/Users';
import { Routes, Route } from 'react-router';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/users" element={<Users />} />
      </Routes>      
    </div>
  );
}

export default App;
