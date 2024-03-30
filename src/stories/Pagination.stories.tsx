import { TablePaginationActionsProps } from '@mui/material/TablePagination/TablePaginationActions'
import { useState } from 'react'
import Pagination from '../../componnets/Pagination'

export default {
  title: 'Pagination',
  component: Pagination,
  argTypes: {
    count: {
      control: { type: 'number' },
      defaultValue: 5
    }
  },
  args: {
    getItemAriaLabel: (type: 'first' | 'last' | 'next' | 'previous') => {
      switch (type) {
        case 'first':
          return 'First page'
        case 'last':
          return 'Last page'
        case 'next':
          return 'Next page'
        case 'previous':
          return 'Previous page'
        default:
          return ''
      }
    },
    onPageChange: (pageNumber: number) => {
      console.log('Page changed to:', pageNumber)
    },
    showFirstButton: true,
    showLastButton: true
  }
}

export const DefaultPagination = (args: TablePaginationActionsProps) => {
  const [pageNumber, setPageNumber] = useState(0)

  const handlePageChange = (event: any, newPage: number) => {
    setPageNumber(newPage)
    args.onPageChange(event, newPage)
  }

  return (
    <Pagination
      {...args}
      page={pageNumber}
      onPageChange={handlePageChange}
      rowsPerPage={1}
    />
  )
}

export const DisabledPagination = (args: TablePaginationActionsProps) => (
  <Pagination {...args} disabled={true} rowsPerPage={1} count={0} page={0} />
)
