import { useDispatch } from "react-redux";

import { authAction } from "../store/store-redux";
import classes from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authAction.logout(false));
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href="/">My Products</a>
          </li>
          <li>
            <a href="/">My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
