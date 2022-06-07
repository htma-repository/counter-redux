import { useState } from "react";
import { useDispatch } from "react-redux";

import { authAction } from "../store/auth-slice";
import classes from "./Auth.module.css";

const Auth = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passInput, setPassInput] = useState("");
  // const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();

  const emailChangeHandler = (event) => {
    setEmailInput(event.target.value);
  };
  const passChangeHandler = (event) => {
    setPassInput(event.target.value);
  };
  const loginHandler = (event) => {
    event.preventDefault();
    if (emailInput.trim().includes("@") && passInput.trim().length > 6) {
      dispatch(authAction.login(true));
    }

    setEmailInput("");
    setPassInput("");
    return;
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={emailChangeHandler} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={passChangeHandler} />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
