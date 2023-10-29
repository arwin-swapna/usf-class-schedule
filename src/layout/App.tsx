import { Container, CssBaseline, ThemeProvider } from '@mui/material'
import "./styles.css"
import theme from '../theme'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import { useState } from 'react'


function App() {
	const [classCount, setClassCount] = useState(0);
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline/>
			<Header count={classCount} />
			<Container maxWidth="xl">
				<Outlet context={[classCount ,setClassCount]} />
			</Container> 
		</ThemeProvider>
	)
}

export default App
