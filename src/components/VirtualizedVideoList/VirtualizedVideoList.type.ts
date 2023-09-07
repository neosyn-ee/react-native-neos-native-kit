export type VirtualizedVideoListProps<T> = {
  data: T[];
  fetchDataByPage: (page: number, prevPage: number) => Promise<number>;
};
