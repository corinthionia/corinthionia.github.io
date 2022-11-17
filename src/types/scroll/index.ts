import { MutableRefObject } from 'react';
import { PostListItemType } from '../post-list';

export interface useInfiniteScrollType {
  containerRef: MutableRefObject<HTMLDivElement | null>;
  postList: PostListItemType[];
}
