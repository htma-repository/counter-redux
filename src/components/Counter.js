import { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

import { INCRE, DECRE } from "../store/store-redux";

const Counter = () => {
  const store = useSelector((state) => state.value);
  const toggle = useSelector((state) => state.isShowToggle);
  const dispatch = useDispatch();
  const [increaseNum, setIncreaseNum] = useState(0);
  // const [isCounter, setIsCounter] = useState(false);

  const toggleCounterHandler = () => {
    // !isCounter ? setIsCounter(true) : setIsCounter(false);
    !toggle
      ? dispatch({ type: "TOGGLE", isShown: true })
      : dispatch({ type: "TOGGLE", isShown: false });
  };

  const incrementButtonHandler = () => {
    dispatch({ type: INCRE, newValue: 1 });
  };

  const decrementButtonHandler = () => {
    dispatch({ type: DECRE, newValue: 1 });
  };

  const increaseByNumberButtonHandler = () => {
    dispatch({ type: "INCREASEBY", newValueBy: +increaseNum });
  };

  const increaseInputHandler = (event) => {
    setIncreaseNum(event.target.value);
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && (
        <Fragment>
          <div className={classes.value}>{store}</div>
          <div className={classes.button}>
            <button onClick={decrementButtonHandler}>Decrement</button>
            <button onClick={increaseByNumberButtonHandler}>
              Increase {increaseNum}
            </button>
            <button onClick={incrementButtonHandler}>Increment</button>
            <input type="number" onChange={increaseInputHandler} />
          </div>
        </Fragment>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   decrementButtonHandler() {
//     return this.props.decrement();
//   }
//   incrementButtonHandler() {
//     return this.props.increment();
//   }
//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.value}</div>
//         <div className={classes.button}>
//           <button onClick={this.decrementButtonHandler.bind(this)}>
//             Decrement
//           </button>
//           <button onClick={this.incrementButtonHandler.bind(this)}>
//             Increment
//           </button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     value: state.value,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "INCRE", newValue: 1 }),
//     decrement: () => dispatch({ type: "DECRE", newValue: 1 }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);