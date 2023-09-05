export type VirtualizedVideoListProps<T> = {
  data: T[];
  fetchDataByPage: (page: number) => void;
  maxToRenderPerBatch?: number;
};
