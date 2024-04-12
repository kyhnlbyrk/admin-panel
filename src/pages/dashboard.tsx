import Head from 'next/head'
import { GetServerSideProps } from 'next'
import Layout from '@/components/Layout'
import { withAuthGuard } from '@/components/hoc/authGuard'


export default function Dashboard() {
	return (
		<>
			<Head>
				<title>Welcome to Admin Panel</title>
			</Head>
			<Layout>
				<div style={{ height: '200px' }}></div>
				<div style={{ height: '200px' }}></div>
				<div style={{ height: '200px' }}></div>
				<div style={{ height: '200px' }}></div>
				<div style={{ height: '200px' }}></div>
				<div style={{ height: '200px' }}></div>
				<div style={{ height: '200px' }}></div>
				<div style={{ height: '200px' }}></div>
				<div style={{ height: '200px' }}></div>
				<div style={{ height: '200px' }}></div>
				<div style={{ height: '200px' }}></div>
				<div style={{ height: '200px' }}></div>
				<div style={{ height: '200px' }}></div>
			</Layout>
		</>
	)
}

export const getServerSideProps: GetServerSideProps = withAuthGuard(async context => {
	// Sayfanızın server-side logic'i burada yer alır

	return {
		props: {} // Gerekli props'lar burada sağlanır
	}
})
