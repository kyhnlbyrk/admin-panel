import { GetServerSideProps, GetServerSidePropsContext } from 'next'

export function withAuthGuard(gssp: GetServerSideProps, isIndexPage?: boolean): GetServerSideProps {
	return async (context: GetServerSidePropsContext) => {
		const cookies = context.req.headers.cookie ?? ''

		const isLoggedin = cookies.includes('isLoggedin=yes')

		if (!isLoggedin) {
			return {
				redirect: {
					destination: '/login/',
					permanent: false
				}
			}
		}

		if (isIndexPage) {
			return {
				redirect: {
					destination: '/dashboard/',
					permanent: false
				}
			}
		}

		return await gssp(context)
	}
}
