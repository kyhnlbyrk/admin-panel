import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import { LeftMenuProps } from './LeftMenu.types'
import { BarChart, ChatRounded, EmojiPeople, MenuBook } from '@mui/icons-material'

const LeftMenu: React.FunctionComponent<LeftMenuProps> = ({ setOpen }) => (
	<Box sx={{ width: 250 }} role="presentation" onClick={() => setOpen(false)}>
		<List>
			<ListItem disablePadding>
				<ListItemButton>
					<ListItemIcon>
						<EmojiPeople />
					</ListItemIcon>
					<ListItemText primary={'Customer'} />
				</ListItemButton>
			</ListItem>
   <ListItem disablePadding>
				<ListItemButton>
					<ListItemIcon>
						<BarChart />
					</ListItemIcon>
					<ListItemText primary={'Sales'} />
				</ListItemButton>
			</ListItem>
   <ListItem disablePadding>
				<ListItemButton>
					<ListItemIcon>
						<MenuBook />
					</ListItemIcon>
					<ListItemText primary={'Employee'} />
				</ListItemButton>
			</ListItem>
		</List>
	</Box>
)

export default LeftMenu
