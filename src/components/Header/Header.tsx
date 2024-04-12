import * as React from 'react'
import { styled } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import InputBase from '@mui/material/InputBase'
import Badge from '@mui/material/Badge'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MailIcon from '@mui/icons-material/Mail'
import NotificationsIcon from '@mui/icons-material/Notifications'
import MoreIcon from '@mui/icons-material/MoreVert'
import { Avatar, Drawer } from '@mui/material'
import { Logout } from '@mui/icons-material'
import styles from './Header.module.css'
import LeftMenu from '../LeftMenu/'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch'
		}
	}
}))

const Header = () => {
	const [moreAnchorEl, setMoreAnchorEl] = React.useState<null | HTMLElement>(null)
	const [drawerOpen, setDrawerOpen] = React.useState(false)

	const router = useRouter()

	const menuId = 'primary-search-account-menu'

	const renderMenu = (
		<Menu
			anchorEl={moreAnchorEl}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right'
			}}
			id={menuId}
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right'
			}}
			open={!!moreAnchorEl}
			onClose={() => setMoreAnchorEl(null)}
		>
			<MenuItem>
				<IconButton size="large" aria-label="show 4 new mails" color="inherit">
					<Badge badgeContent={4} color="error">
						<MailIcon />
					</Badge>
				</IconButton>
				<p>Messages</p>
			</MenuItem>
			<MenuItem>
				<IconButton size="large" aria-label="show 17 new notifications" color="inherit">
					<Badge badgeContent={17} color="error">
						<NotificationsIcon />
					</Badge>
				</IconButton>
				<p>Notifications</p>
			</MenuItem>
			<MenuItem>
				<IconButton size="large" aria-label="show 17 new notifications" color="inherit">
					<AccountCircle />
				</IconButton>
				<p>My Account</p>
			</MenuItem>
			<MenuItem
				onClick={() => {
					Cookies.remove('isLoggedin')
					router.push('/login/')
				}}
			>
				<IconButton size="large" aria-label="account of current user" aria-controls="primary-search-account-menu" aria-haspopup="true" color="inherit">
					<Logout />
				</IconButton>
				<p>Logout</p>
			</MenuItem>
		</Menu>
	)

	return (
		<Box sx={{ flexGrow: 1 }}>
			<Drawer open={drawerOpen} onClose={() => setDrawerOpen(!drawerOpen)}>
				<LeftMenu setOpen={setDrawerOpen} />
			</Drawer>
			<AppBar component={'header'} className={styles['header']} position="sticky">
				<Toolbar className={styles['toolbar']}>
					<IconButton onClick={() => setDrawerOpen(!drawerOpen)} size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }}>
						<MenuIcon />
					</IconButton>
					<div className={styles.search}>
						<div className={styles['search-icon-wrapper']}>
							<SearchIcon />
						</div>
						<StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
					</div>
					<Box sx={{ flexGrow: 1 }} />
					<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
						<IconButton
							size="large"
							edge="end"
							aria-label="account of current user"
							aria-controls={menuId}
							aria-haspopup="true"
							onClick={e => setMoreAnchorEl(e.currentTarget)}
							color="inherit"
						>
							<Badge sx={{ right: '2px' }} badgeContent={21} color="error">
								<Avatar sx={{ color: '#fff' }}>KA</Avatar>
							</Badge>
						</IconButton>
					</Box>
					<Box sx={{ display: { xs: 'flex', md: 'none' } }}>
						<IconButton size="large" aria-label="show more" aria-controls={menuId} aria-haspopup="true" onClick={e => setMoreAnchorEl(e.currentTarget)} color="inherit">
							<MoreIcon />
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>
			{renderMenu}
		</Box>
	)
}

export default Header
