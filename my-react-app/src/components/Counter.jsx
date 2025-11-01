import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { dec, inc, reset } from "../redux/slices/counterSlice";

export default function Counter() {
const counter = useSelector((state) => {

    return state.counterSlice.counter;
  });
  const dispatch = useDispatch();

  const inct = () => {
    dispatch(inc())
  };

  const dect = () => {
    dispatch(dec())
  };

  const re_set = () => {
    dispatch(reset())
  };
  return (
    <div>
      <button onClick={inct}>Inc</button>
      <button onClick={dect}>Dec</button>
      <button onClick={re_set}>ReSet</button>
      <p>{counter}</p>
    </div>
  );
}
