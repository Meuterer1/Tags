export interface Tag {
  count: number
  has_synonyms: boolean
  is_moderator_only: boolean
  is_required: boolean
  name: string
}

export interface TagError {
  error_id: number
  error_message: string
  error_name: string
}

export interface TagsQuery {
  has_more: boolean
  items: Tag[] | null
  quota_max: number
  quota_remaining: number
}

export interface TablePaginationActionsProps {
  count: number
  page: number
  rowsPerPage: number
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void
}

export interface CustomPaginationActionsTableProps {
  tags: Tag[] | TagError | any
  status: string
}

export interface ErrorProps {
  tags: TagError
}
