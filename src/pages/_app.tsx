import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { defaultTheme } from './themes/defaultTheme'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={defaultTheme}>
			<CssBaseline />
			<Component {...pageProps} />
		</ThemeProvider>
	)
}
