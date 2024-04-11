import Head from 'next/head'
import { Button, Paper, useMediaQuery, useTheme } from '@mui/material'
import styles from '@/styles/Login.module.css'
import { TextField } from '@mui/material'

export default function Login() {
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
	return (
		<>
			<Head>
				<title>Login to Admin Panel</title>
			</Head>
			<div className={styles['login-container']}>
				<Paper component="form" variant="outlined" className={styles['login-card']}>
					<TextField fullWidth size={isMobile ? 'small' : 'medium'} id="email" label="Email" variant="outlined">
						Email
					</TextField>
					<TextField fullWidth size={isMobile ? 'small' : 'medium'} id="password" label="Password" variant="outlined">
						Password
					</TextField>
					<Button fullWidth size={isMobile ? 'small' : 'large'} variant="contained">
						Login
					</Button>
				</Paper>
			</div>
		</>
	)
}
