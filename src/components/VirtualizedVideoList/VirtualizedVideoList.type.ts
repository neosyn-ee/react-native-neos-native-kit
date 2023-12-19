import {type PostType} from '@components/Post/Post.types';
import { VirtualizedListWithoutRenderItemProps } from 'react-native';

export type VirtualizedVideoListProps<TItem> = VirtualizedListWithoutRenderItemProps<TItem> & {
  data: Array<PostType>;
  paginated?: boolean;
  pagesNum?: number;
  viewAreaCoveragePercentThreshold?: number;
  fetchData?: (page: number) => Promise<void | number>;
};
