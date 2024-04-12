import Head from 'next/head'
import { GetServerSideProps } from 'next'
import Layout from '@/components/Layout'
import { withAuthGuard } from '@/components/hoc/authGuard'
import DataTable, { DataTableProps } from '@/components/DataTable'
import styles from '@/styles/dashboard.module.css'
import { Paper, Typography, styled } from '@mui/material'
import Chart from '@/components/Chart'

const Title = styled(Typography)(({ theme, color }) => ({
	//@ts-ignore
	color: theme.palette[color].dark,
	marginTop: '16px',
	marginBottom: '16px'
}))

interface DashboardProps {
	productProps: DataTableProps<any>
	employeeProps: DataTableProps<any>
}

export default function Dashboard(props: DashboardProps) {
	const { productProps, employeeProps } = props
	return (
		<>
			<Head>
				<title>Welcome to Admin Panel</title>
			</Head>
			<Layout>
				<div className={styles.container}>
					<div className={styles.wrapper}>
						<Paper className={styles['dashboard-card']}>
							<h2 className={styles['card-title']}>All Sales</h2>
							<Title variant="h4" color={'success'}>
								1.123.344 TL
							</Title>
						</Paper>
						<Paper className={styles['dashboard-card']}>
							<h2 className={styles['card-title']}>Lost Sales</h2>
							<Title variant="h4" color={'error'}>
								123.543 TL
							</Title>
						</Paper>
						<Paper className={styles['dashboard-card']}>
							<h2 className={styles['card-title']}>Critical Products</h2>
							<Title variant="h4" color={'warning'}>
								323
							</Title>
						</Paper>
						<Paper className={styles['dashboard-card']}>
							<h2 className={styles['card-title']}>Top Employee</h2>
							<Title variant="h4" color={'success'}>
								Kayahan Albayrak
							</Title>
						</Paper>
					</div>
					<div className={styles.wrapper}>
						<Paper className={styles['dashboard-card']}>
							<h2 className={styles['card-title']}>Top Products</h2>
							<DataTable {...productProps} />
						</Paper>
						<Paper className={styles['dashboard-card']}>
							<h2 className={styles['card-title']}>Top Employees</h2>
							<DataTable {...employeeProps} />
						</Paper>
					</div>
					<div className={styles.wrapper}>
						<Paper className={styles['dashboard-card']}>
							<h2 className={styles['card-title']}>Day to Day Change</h2>
							<Chart />
						</Paper>
					</div>
				</div>
			</Layout>
		</>
	)
}

export const getServerSideProps: GetServerSideProps = withAuthGuard(async context => {
	// Sayfanızın server-side logic'i burada yer alır

	const productProps: DataTableProps<any> = {
		columns: [
			{ field: 'id', headerName: 'ID', width: 90 },
			{
				field: 'productName',
				headerName: 'Product Name',
				width: 150
			},
			{
				field: 'price',
				headerName: 'Price',
				width: 110
			},
			{
				field: 'stock',
				headerName: 'Stocks',
				type: 'number',
				width: 150
			}
		],
		rows: [
			{ id: 1, productName: 'Sword', stock: 93, price: '14.999 TL' },
			{ id: 2, productName: 'Sword', stock: 93, price: '14.999 TL' },
			{ id: 3, productName: 'Sword', stock: 93, price: '14.999 TL' },
			{ id: 4, productName: 'Sword', stock: 93, price: '14.999 TL' },
			{ id: 5, productName: 'Sword', stock: 93, price: '14.999 TL' },
			{ id: 6, productName: 'Sword', stock: 93, price: '14.999 TL' },
			{ id: 7, productName: 'Sword', stock: 93, price: '14.999 TL' },
			{ id: 8, productName: 'Sword', stock: 93, price: '14.999 TL' },
			{ id: 9, productName: 'Sword', stock: 93, price: '14.999 TL' },
			{ id: 10, productName: 'Sword', stock: 93, price: '14.999 TL' }
		]
	}

	const employeeProps: DataTableProps<any> = {
		columns: [
			{ field: 'id', headerName: 'ID', width: 90 },
			{
				field: 'firstName',
				headerName: 'First name',
				width: 150
			},
			{
				field: 'lastName',
				headerName: 'Last name',
				width: 150
			},
			{
				field: 'age',
				headerName: 'Age',
				type: 'number',
				width: 110
			}
		],
		rows: [
			{ id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
			{ id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
			{ id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
			{ id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
			{ id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
			{ id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
			{ id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
			{ id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
			{ id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
			{ id: 10, lastName: 'Albyayrak', firstName: 'Kayahan', age: 31 }
		]
	}
	return {
		props: { productProps: productProps, employeeProps: employeeProps } // Gerekli props'lar burada sağlanır
	}
})
