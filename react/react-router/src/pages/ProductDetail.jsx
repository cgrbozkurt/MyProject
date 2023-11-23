import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1>ProductDetailPage</h1>
      <p>product-{params.productId}</p>
      <Link to=".." relative="path">Back</Link>
    </Fragment>
  );
};

export default ProductDetailPage;
