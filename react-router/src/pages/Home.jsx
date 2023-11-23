import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/products");
  }
  return (
    <Fragment>
      <h1>My Home Page</h1>
      {/* <a href="/products">Go to Producs Page</a> */}
      {/* <Link to="/products">Go to Producs Page</Link> */}
      <button onClick={navigateHandler}>Go to Producs Page</button>
      <span onClick={navigateHandler}>Go to Producs Page</span>
    </Fragment>
  );
};

export default HomePage;
