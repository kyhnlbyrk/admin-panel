import { GridColDef } from '@mui/x-data-grid'

type Column = GridColDef<Row[number]>[]
type Row = []

export interface DataTableProps {
	columns: Column
	rows: Row
}
