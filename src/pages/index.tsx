import { withAuthGuard } from '@/components/hoc/authGuard'
import { GetServerSideProps } from 'next'

export default function Home() {
	return <></>
}

export const getServerSideProps: GetServerSideProps = withAuthGuard(async context => {
	return {
		props: {}
	}
}, true)
