import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decreaseDay,
  increaseDay,
  decreaseByDepositAmount,
  increaseByDepositAmount,
  selectDday,
  selectDeposit,
} from "./Test_CounterSlice";
import styles from "./Counter.module.css";

export default function Test_Counter() {
  const Dday = useSelector(selectDday);
  const deposit = useSelector(selectDeposit);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("15000");
  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        하루 예산
        <span className={styles.value}>{Math.round(deposit / Dday)}</span>
      </div>
      <div className={styles.row}>
        <div>D-Day</div>
        <button
          className={styles.button}
          aria-label="Decrement Dday"
          onClick={() => {
            dispatch(decreaseDay());
          }}
        >
          -
        </button>
        <span className={styles.value}>{Dday}</span>
        <button
          className={styles.button}
          aria-label="Decrement Dday"
          onClick={() => {
            dispatch(increaseDay());
          }}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <div>잔고</div>
        <span className={styles.value}>{deposit}</span>
      </div>
      <div className={styles.row}>
        <div>Amount</div>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementValue}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(decreaseByDepositAmount(incrementValue))}
        >
          Decrease Deposit
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(increaseByDepositAmount(incrementValue))}
        >
          Increase Deposit
        </button>
      </div>
    </div>
  );
}
