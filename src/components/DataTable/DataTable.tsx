import * as React from 'react'
import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'
import { DataTableProps } from './DataTable.types'
import styled from '@emotion/styled'

const CustomDataGrid = styled(DataGrid)(({ theme }) => ({
 '& .MuiDataGrid-columnHeaders div': {
  //@ts-ignore
		backgroundColor: theme.palette.primary.dark
	}
}))

const DataTable: React.FunctionComponent<DataTableProps<any>> = props => {
	const { columns, rows, pageSize, page } = props

	return (
		<Box sx={{ width: '100%' }}>
			<CustomDataGrid
				rows={rows}
     //@ts-ignore
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: { pageSize: pageSize, page: page }
					}
				}}
				disableRowSelectionOnClick
			/>
		</Box>
	)
}

DataTable.defaultProps = {
	pageSize: 5,
	page: 0
}

export default DataTable
