import { AppBar, Toolbar } from '@mui/material'
import styles from './Footer.module.css'
const Footer: React.FunctionComponent = () => (
	<AppBar position="relative" color="primary" sx={{ top: 'auto', bottom: 0, marginTop: '80px' }}>
		<Toolbar className={styles.footer}>Made By KA</Toolbar>
	</AppBar>
)

export default Footer
