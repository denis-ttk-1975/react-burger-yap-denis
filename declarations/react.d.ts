interface RefObject<T> {
  // immutable
  readonly current: T | null;
}
function forwardRef<T, P = {}>(Component: RefForwardingComponent<T, P>): ComponentType<P & ClassAttributes<T>>;
