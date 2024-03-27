import { useQuery } from 'react-query'

export function getData() {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await fetch(
        'https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow'
      )
      return res.json()
    }
  })
}
