import './App.css';
import './Form.css';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {
  return (
    <div className='container'>
      <div>
        <Sidebar />
      </div>
      <div>
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route path='/about' element={<About />} />
          {/* <Route path='/projects' element={<Projects />} /> */}
          <Route path='/work' element={<Work />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
