import './App.css'
import Main from './pages/Main'
import Sidebar from './pages/Sidebar'

function App() {
	return (
		<div className='container'>
			<div>
				<Sidebar />
			</div>
			<div>
				<Main />
			</div>
		</div>
	)
}

export default App

