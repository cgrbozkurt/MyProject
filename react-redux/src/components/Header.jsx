import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth";
import Userprofilecard from "./Userprofilecard";

const Header = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const logoutHandler = (e) => {
    dispatch(authActions.logout());
    e.preventDefault();
  };

  return (
    <header>
      <h1>Header</h1>
      {isAuth && <button onClick={logoutHandler}>Logout</button>}
      {isAuth && <Userprofilecard/> }
    </header>
  );
};

export default Header;
