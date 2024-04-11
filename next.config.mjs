/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	trailingSlash: true,

	async redirects() {
		return [
			{
				source: '/',
				destination: '/login/',
				permanent: true
			}
		]
	}
}

export default nextConfig