import { Container, CssBaseline, ThemeProvider } from '@mui/material'
import "./styles.css"
import theme from '../theme'
import { Outlet } from 'react-router-dom'
import Header from './Header'


function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline/>
			<Header/>
			<Container maxWidth="xl">
				<Outlet/>
			</Container>
		</ThemeProvider>
	)
}

export default App
