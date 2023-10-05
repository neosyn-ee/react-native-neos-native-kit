import {type PostType} from '@components/Post/Post.types';

export type VirtualizedVideoListProps = {
  data: Array<PostType>;
  paginated?: boolean;
  pagesNum?: number;
  viewAreaCoveragePercentThreshold?: number;
  fetchData?: (page: number) => Promise<void | number>;
};
