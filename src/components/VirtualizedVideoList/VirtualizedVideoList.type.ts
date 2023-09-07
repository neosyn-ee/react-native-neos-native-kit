export type VirtualizedVideoListProps<T> = {
  data: T[];
  paginated?: boolean;
  pagesNum?: number;
  refreshData: () => Promise<number>;
};
