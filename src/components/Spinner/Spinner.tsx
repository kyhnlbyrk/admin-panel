import * as React from 'react'

import styles from './Spinner.module.css'

const Spinner: React.FunctionComponent = () => {
	return (
		<div className={styles['loader-wrapper']}>
			<svg className={styles.loader} viewBox="0 0 50 50">
				<circle className={styles.path} cx="25" cy="25" r="20" fill="none" strokeWidth="4" />
			</svg>
		</div>
	)
}

export default Spinner
