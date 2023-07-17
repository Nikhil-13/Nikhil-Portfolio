import './App.css'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import About from './pages/About'
import Work from './pages/Work'
import Contact from './pages/Contact'

function App() {
	return (
		<div className='container'>
			<div>
				<Sidebar />
			</div>
			<div>
				<Main>
					<About />
					<Contact />
					<Work />
				</Main>
			</div>
		</div>
	)
}

export default App

