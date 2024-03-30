import { TextField } from '@mui/material'
import { Meta } from '@storybook/react'
import { useState } from 'react'

export default {
  title: 'Input',
  component: TextField
} as Meta

export const DefaultInput = () => {
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const rowsValue = parseInt(event.target.value, 10)
    if (!isNaN(rowsValue) && rowsValue >= 0 && rowsPerPage !== rowsValue) {
      setRowsPerPage(rowsValue)
    } else {
      setRowsPerPage(0)
    }
  }

  return (
    <TextField
      label="Rows per page"
      variant="standard"
      placeholder={rowsPerPage.toString()}
      name="rowsPerPage"
      onChange={handleChangeRowsPerPage}
      type="number"
      defaultValue={rowsPerPage}
      inputProps={{ min: 0 }}
      sx={{
        width: 100,
        '& input': {
          textAlign: 'center'
        }
      }}
    />
  )
}
