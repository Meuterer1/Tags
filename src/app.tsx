import { Container } from '@mui/material'
import React from 'react'
import { useQuery } from 'react-query'
import CustomPaginationActionsTable from '../componnets/table'
import { TagsQuery } from '../interfaces/interfaces'

const App: React.FC = () => {
  const { data: tagsQuery, status } = useQuery<TagsQuery>({
    queryKey: ['tags'],
    queryFn: async () => {
      const res = await fetch(
        'https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow'
      )
      return res.json()
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false
  })

  return (
    <Container sx={{ mt: 5 }}>
      <CustomPaginationActionsTable tags={tagsQuery} status={status} />
    </Container>
  )
}

export default App
