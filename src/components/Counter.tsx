import { decrement, increment } from "../redux/counterSlice";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";

export function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  const counter = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{counter.value}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
