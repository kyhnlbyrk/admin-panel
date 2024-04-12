import Head from 'next/head'
import { Alert, Button, Paper, useMediaQuery, useTheme } from '@mui/material'
import styles from '@/styles/Login.module.css'
import { TextField } from '@mui/material'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { LoginType } from '../types/login.type'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { Login as LoginService } from '@/services/auth'
import Cookies from 'js-cookie'
import CircularProgress from '@mui/material/CircularProgress'
import { useRouter } from 'next/router'

const FormValidation = yup.object({
	email: yup
		.string()
		.matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, { message: 'Please enter a valid email!' })
		.required('Please enter your email!'),
	password: yup.string().required('Please enter your password!')
})

export default function Login() {
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
	const router = useRouter()

	const methods = useForm<LoginType>({
		defaultValues: {
			email: 'admin@admin.com',
			password: 'admin'
		},
		mode: 'onBlur',
		reValidateMode: 'onBlur',
		resolver: yupResolver(FormValidation)
	})

	const { register, formState } = methods
	const { errors } = formState

	const mutation = useMutation({ mutationFn: LoginService })

	const onSubmit = async (data: LoginType) => {
		mutation.mutate(data)
	}

	if (mutation.isSuccess) {
		Cookies.set('isLoggedin', 'yes', { expires: 7 })
		router.push('/')
	}

	return (
		<>
			<Head>
				<title>Login to Admin Panel</title>
			</Head>
			<div className={styles['login-container']}>
				<Alert className={styles['alert']} variant="filled" severity={!!mutation.error ? 'error' : 'info'}>
					{!!mutation.error ? (
						//@ts-ignore
						mutation.error?.response.data.message
					) : (
						<>
							Use <b>admin@admin.com</b> as email, and use <b>admin</b> as password!
						</>
					)}
				</Alert>
				<Paper onSubmit={methods.handleSubmit(onSubmit)} component="form" variant="outlined" className={styles['login-card']}>
					<TextField
						error={!!errors?.email}
						helperText={errors?.email?.message}
						{...register('email')}
						type="email"
						fullWidth
						size={isMobile ? 'small' : 'medium'}
						id="email"
						label="Email"
						variant="outlined"
					>
						Email
					</TextField>
					<TextField
						error={!!errors?.password}
						helperText={errors?.password?.message}
						{...register('password')}
						type="password"
						fullWidth
						size={isMobile ? 'small' : 'medium'}
						id="password"
						label="Password"
						variant="outlined"
					>
						Password
					</TextField>
					<Button
						disabled={mutation.isPending}
						endIcon={mutation.isPending ? <CircularProgress size={20} color="inherit" /> : <></>}
						type="submit"
						fullWidth
						size={isMobile ? 'small' : 'large'}
						variant="contained"
					>
						Login
					</Button>
				</Paper>
			</div>
		</>
	)
}
