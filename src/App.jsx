import './App.css'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import About from './pages/About'
import Work from './pages/Work'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router-dom'

function App() {
	return (
		<div className='container'>
			<div>
				<Sidebar />
			</div>
			<div>
				<Routes>
					<Route exact path='/' element={<Main />}></Route>
					<Route path='/about' element={<About />}></Route>
					<Route path='/work' element={<Work />}></Route>
					<Route path='/contact' element={<Contact />}></Route>
				</Routes>
			</div>
		</div>
	)
}

export default App
