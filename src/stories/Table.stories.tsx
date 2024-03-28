import { Meta } from '@storybook/react'
import CustomPaginationActionsTable from '../../componnets/table'

import { CustomPaginationActionsTableProps } from '../../interfaces/interfaces'

export default {
  title: 'Table',
  component: CustomPaginationActionsTable
} as Meta

const args = {
  tags: {
    items: [
      { name: 'Tag1', count: 10 },
      { name: 'Tag2', count: 20 },
      { name: 'Tag3', count: 105600 },
      { name: 'Tag4', count: 20100 },
      { name: 'Tag5', count: 11230 },
      { name: 'Tag6', count: 211570 }
    ]
  },
  status: 'success'
}

export const Default: React.FC<CustomPaginationActionsTableProps> = () => (
  <CustomPaginationActionsTable tags={args.tags} status={args.status} />
)
