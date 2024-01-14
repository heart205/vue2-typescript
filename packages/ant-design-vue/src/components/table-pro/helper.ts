import { type TableColumnType } from 'ant-design-vue'
import { Ref } from 'vue'
export { noop } from '@cc-heart/utils'

export interface IPagination {
  pageNum: number
  pageSize: number
}

export interface RowSelection<T, K> {
  selectedRowKeys: K[]
  selectedRows: T[]
  onChange: (selectedRowKeys: K[], selectedRows: T[]) => void
}

export interface Pagination {
  current: number
  pageSize: number
  total: number
  showSizeChanger: boolean
  showQuickJumper: boolean
  showTotal: (total: number) => string
  onChange: (page: number, pageSize: number) => void
  onShowSizeChange: (current: number, size: number) => void
}

export interface TableProps {
  columns: TableColumnType[]
  bordered: boolean
  total: number
  dataSource: Array<unknown>
  loadData: <T extends IPagination>(args: T) => any
  rowSelection: RowSelection<any, any> | null
  rowKey: string
  pagination: Exclude<Pagination, 'total' | 'current' | 'pageSize'>
}

export interface useRowSelectionParams {
  onChange?: (
    selectedRowKeys: Array<unknown>,
    selectedRows: Array<unknown>
  ) => void
}
export interface UseColumnSortParams {
  columns: Ref<TableColumnType[]>
  rowKey: string | (() => string)
}

export const VERSION = '0.0.1'
