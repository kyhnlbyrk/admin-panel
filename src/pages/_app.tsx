import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { defaultTheme } from '@/themes/defaultTheme'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export default function App({ Component, pageProps }: AppProps) {
	const queryClient = new QueryClient()
	return (
		<ThemeProvider theme={defaultTheme}>
			<QueryClientProvider client={queryClient}>
				<CssBaseline />
				<Component {...pageProps} />
			</QueryClientProvider>
		</ThemeProvider>
	)
}
