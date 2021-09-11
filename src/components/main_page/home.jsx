import { Fragment } from "react";
import { Candidates } from "../partials/candidates/candidates";
import { Footer } from "../partials/footer/footer";
import { Header } from "../partials/header/header";
import { Modal } from "../partials/single_report/single_report";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Candidates />
      <Footer />
    </Fragment>
  );
};

export default Home;
