import { Box, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import { ErrorProps } from '../interfaces/interfaces'

const primary = purple[800]

const Error: React.FC<ErrorProps> = ({ tags }) => {
  if (!tags || typeof tags !== 'object') {
    return null
  }
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: primary
      }}
    >
      <Typography variant="h1" style={{ color: 'white' }}>
        {tags.error_id}
      </Typography>
      <Typography variant="h5" style={{ color: 'white' }}>
        {tags.error_name}
      </Typography>
      <Typography variant="h6" style={{ color: 'white' }}>
        {tags.error_message}
      </Typography>
    </Box>
  )
}

export default Error
