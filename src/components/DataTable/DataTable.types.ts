import { GridColDef } from '@mui/x-data-grid'

type Row<T> = T[]

// Column tanımı, her bir sütunun tür bilgisi için de generic kullanabilir.
type Column<T> = GridColDef<Row<T>>[]

// DataTableProps interface'ini tanımlarken, hem sütunlar hem de satırlar için generic tipler kullanılır.
export interface DataTableProps<T> {
	columns: Column<T>
	rows: Row<T>
 pageSize?: number
 page?: number
}
