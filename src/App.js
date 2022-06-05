import { Fragment } from "react";
import { useSelector } from "react-redux";

import Counter from "./components/Counter";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import Auth from "./components/Auth";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);

  const content = isAuth ? (
    <Fragment>
      <Header />
      <UserProfile />
    </Fragment>
  ) : (
    <Auth />
  );

  return (
    <Fragment>
      {content}
      {/* <Counter /> */}
    </Fragment>
  );
}

export default App;
