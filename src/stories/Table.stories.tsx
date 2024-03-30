import { Meta } from '@storybook/react'
import CustomPaginationActionsTable from '../../componnets/table'

export default {
  title: 'Table',
  component: CustomPaginationActionsTable
} as Meta

export const DefaultTable = () => (
  <CustomPaginationActionsTable
    tags={{
      items: [
        { name: 'Tag1', count: 10 },
        { name: 'Tag2', count: 20 },
        { name: 'Tag3', count: 105600 },
        { name: 'Tag4', count: 20100 },
        { name: 'Tag5', count: 11230 },
        { name: 'Tag6', count: 211570 }
      ]
    }}
    status="success"
  />
)

export const LoadingTable = () => (
  <CustomPaginationActionsTable tags={undefined} status="loading" />
)

export const ErrorTable = () => (
  <CustomPaginationActionsTable
    tags={{
      error_id: 502,
      error_message: 'Error message',
      error_name: 'Error title'
    }}
    status="error"
  />
)

ErrorTable.parameters = {
  layout: 'fullscreen'
}
