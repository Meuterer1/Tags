import {
  TableCell,
  TableHead,
  TableSortLabel,
  TextField,
  Toolbar,
  Typography
} from '@mui/material'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableFooter from '@mui/material/TableFooter'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import * as React from 'react'
import Error from '../componnets/errorPage'
import {
  CustomPaginationActionsTableProps,
  Tag
} from '../interfaces/interfaces'
import Pagination from './Pagination'

const CustomPaginationActionsTable: React.FC<
  CustomPaginationActionsTableProps
> = ({ tags, status }) => {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)
  const [sortBy, setSortBy] = React.useState<string>('')
  const [isDescending, setIsDescending] = React.useState<boolean>(false)

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage)
  }

  const sortTags = (items: Tag[], sortBy: string, isDescending: boolean) => {
    if (sortBy === 'tags') {
      items.sort((a, b) => {
        if (!isDescending) {
          return a.name.localeCompare(b.name)
        } else {
          return b.name.localeCompare(a.name)
        }
      })
    } else if (sortBy === 'count') {
      items.sort((a, b) => {
        if (!isDescending) {
          return a.count - b.count
        } else {
          return b.count - a.count
        }
      })
    }
  }

  const handleSortChange = (sortBy: string) => {
    if (sortBy === sortBy) {
      setIsDescending(!isDescending)
    } else {
      setIsDescending(false)
    }
    setSortBy(sortBy)
    sortTags(tags.items, sortBy, isDescending)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const rowsValue = parseInt(event.target.value, 10)
    if (!isNaN(rowsValue) && rowsValue >= 0 && rowsPerPage !== rowsValue) {
      setRowsPerPage(rowsValue)
      setPage(0)
      sortTags(tags.items, sortBy, !isDescending)
    } else {
      setRowsPerPage(0)
    }
  }

  console.log('tags', tags)

  if (status === 'loading') {
    return <h1>Loading...</h1>
  }

  if (!tags || tags.items.length === 0) {
    return <h1>No data available</h1>
  }

  if (status === 'error') {
    return <Error tags={tags} />
  }

  return (
    <TableContainer component={Paper}>
      <Toolbar sx={{ pl: { sm: 2 }, pr: { xs: 2, sm: 2 }, pt: { sm: 2 } }}>
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h5"
          id="tableTitle"
          component="div"
        >
          Tags
        </Typography>

        <TextField
          id="standard-basic"
          label="Rows per page"
          variant="standard"
          placeholder={rowsPerPage.toString()}
          name="rowsPerPage"
          onChange={handleChangeRowsPerPage}
          type="number"
          defaultValue={rowsPerPage}
          inputProps={{ min: 0 }}
        />
      </Toolbar>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell
              component="th"
              scope="row"
              onClick={() => handleSortChange('tags')}
            >
              <TableSortLabel direction={isDescending ? 'desc' : 'asc'}>
                Tag
              </TableSortLabel>
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              onClick={() => handleSortChange('count')}
              style={{ width: 160 }}
            >
              <TableSortLabel direction={isDescending ? 'desc' : 'asc'}>
                Count
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {(
            tags.items.length > 0 &&
            tags.items.slice(
              page * rowsPerPage,
              page * rowsPerPage + rowsPerPage
            )
          ).map((tag: Tag) => (
            <TableRow key={tag.name}>
              <TableCell component="th" scope="row">
                {tag.name}
              </TableCell>
              <TableCell style={{ width: 160 }}>{tag.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              colSpan={3}
              count={tags.items.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={Pagination}
              rowsPerPageOptions={[]}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  )
}

export default CustomPaginationActionsTable
