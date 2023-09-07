import data from 'storage/database/post';

import {PostType} from '@components/Post/Post.types';

// An enum with all the types of actions to use in our reducer
export enum PostActionKind {
  INCREASE = 'INCREASE_PAGE',
  DECREASE = 'DECREASE_PAGE',
}

// An interface for our actions
interface PostAction {
  type: PostActionKind;
  payload: number;
}

// An interface for our initial state
export interface PostState {
  prev: PostType[];
  data: PostType[];
  next: PostType[];
}

export default function postReducer(state: PostState, action: PostAction) {
  const [pageNum, pageLength] = [5, 20];
  const {payload: page} = action;
  const {data: currentData} = state;
  switch (action.type) {
    case PostActionKind.INCREASE: {
      const start =
        page > 1
          ? (data as PostType[]).indexOf(currentData[currentData.length - 1]) +
            1
          : 0;
      const end = start + pageLength;
      return {
        prev: page > 1 ? currentData : [],
        data: data.slice(start, end),
        next: data.slice(start + pageLength, end + pageLength),
      };
    }
    case PostActionKind.DECREASE: {
      const start = (data as PostType[]).indexOf(currentData[0]) - pageLength;
      const end = start + pageLength;
      return {
        prev: data.slice(start - pageLength, end - pageLength),
        data: data.slice(start, end),
        next: page < pageNum ? currentData : [],
      };
    }
    default:
      return state;
  }
}
