import { useSelector } from "react-redux";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/redux/hooks";
import { increment, decrement } from "./app/redux/slices/count";
function App() {
  const count = useAppSelector((store) => store.counter);
  //const count  = useSelector((store) => store.counter)
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-wrap text-center bg-center">
      <div className=" text-center">
        <h1>  
          count is
          <h2 className="border border-black font-black">
            { count }
          </h2>
        </h1>
        <button
          className="border border-black bg-blue-500 font-black"
          onClick={() => dispatch(increment())}
        >
          increment
        </button>
        <button
          className="border border-black bg-blue-500 font-black"
          onClick={() => dispatch(decrement())}
        >
          decrement
        </button>
        <button></button>
      </div>
    </div>
  );
}

export default App;
