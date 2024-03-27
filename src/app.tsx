import React from 'react'
import { useQuery } from 'react-query'
import CustomPaginationActionsTable from '../componnets/table'
import { Tag } from '../interfaces/interfaces'

const App: React.FC = () => {
  const {
    data: tagsQuery,
    status,
    isLoading,
    isError,
    isSuccess
  } = useQuery<Tag[]>({
    queryKey: ['tags'],
    queryFn: async () => {
      const res = await fetch(
        'https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow'
      )
      return res.json()
    }
  })

  console.log('zapytanie: ', tagsQuery)

  return (
    <main>
      <CustomPaginationActionsTable tags={tagsQuery} />
    </main>
  )
}

export default App
