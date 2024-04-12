import Footer from '../Footer'
import Header from '../Header'
import { LayoutProps } from './Layout.types'

const Layout: React.FunctionComponent<LayoutProps> = props => (
	<>
		<Header />
		{props.children}
  <Footer />
	</>
)

export default Layout
