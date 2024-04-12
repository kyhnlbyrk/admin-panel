import { AppBar, Toolbar } from '@mui/material'
import styles from './Footer.module.css'
const Footer: React.FunctionComponent = () => (
	<AppBar component={'footer'} position="relative" color="primary">
		<Toolbar className={styles.footer}>Made By KA</Toolbar>
	</AppBar>
)

export default Footer
