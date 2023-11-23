import { Fragment } from "react";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  return (
    <Fragment>
      <MainNavigation />
      <main>
        <h1>Bir hata oluştu!</h1>
        <p>Bu sayfa bulunamadı!</p>
      </main>
    </Fragment>
  );
};

export default ErrorPage;
