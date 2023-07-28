import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { AnimationContextProvider } from './context/AnimationContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AnimationContextProvider>
			<Router>
				<App />
			</Router>
		</AnimationContextProvider>
	</React.StrictMode>
)
