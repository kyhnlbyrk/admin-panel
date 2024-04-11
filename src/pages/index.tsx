import Head from 'next/head'
import Cookies from 'js-cookie'
import { GetServerSideProps } from 'next'

export default function Home() {
	return (
		<>
			<Head>
				<title>Welcome to Admin Panel</title>
			</Head>
		</>
	)
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	// Fetch data from external API
	const cookies = req.headers.cookie ?? ''

	const isLoggedin = cookies.includes('isLoggedin=yes')

	if (!isLoggedin) {
		return {
			redirect: {
				permanent: false,
				destination: '/login/'
			}
		}
	}

	// Pass data to the page via props
	return { props: { test: 'omg' } }
}
