import type {Component} from 'react';
import type {
  ImageStyle,
  NativeScrollEvent,
  NativeSyntheticEvent,
  TextStyle,
  ViewStyle,
} from 'react-native';

export interface NativeEvent<T> {
  nativeEvent: T;
}
export type ShadowNodeWrapper = object;

export type DependencyList = Array<unknown> | undefined;
export type __Context = Record<string, unknown>;
/**
 * @deprecated
 */
export interface __WorkletFunction {
  __closure?: __Context;
  __workletHash?: number;
}

export interface ContextWithDependencies<TContext extends __Context> {
  context: TContext;
  savedDependencies: DependencyList;
}
export interface Descriptor {
  tag: number;
  name: string;
  shadowNodeWrapper: ShadowNodeWrapper;
}
export interface AnimatedRef<T extends Component> {
  current: T | null;
  (component?: T): number | ShadowNodeWrapper | HTMLElement;
}
export type DefaultStyle = ViewStyle | ImageStyle | TextStyle;

export interface ScrollHandler<TContext extends __Context>
  extends __WorkletFunction {
  (event: NativeScrollEvent, context?: TContext): void;
}
export interface ScrollEvent
  extends NativeScrollEvent,
    NativeEvent<ScrollEvent> {
  eventName: string;
}
export interface ScrollHandlers<TContext extends __Context> {
  [key: string]: ScrollHandler<TContext> | undefined;
  onScroll?: ScrollHandler<TContext>;
  onBeginDrag?: ScrollHandler<TContext>;
  onEndDrag?: ScrollHandler<TContext>;
  onMomentumBegin?: ScrollHandler<TContext>;
  onMomentumEnd?: ScrollHandler<TContext>;
}
export type OnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
export type useAnimatedScrollHandler = <
  TContext extends __Context = Record<string, never>,
>(
  handlers: ScrollHandlers<TContext> | ScrollHandler<TContext>,
  deps?: DependencyList,
) => OnScroll;
export declare const useAnimatedScrollHandler: useAnimatedScrollHandler;
export {};
