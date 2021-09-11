import { Fragment } from "react";
import { Candidates } from "../candidates/candidates";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";

const Home = () => {
  return (
    <Fragment>
  <Header/>
  <Candidates/>
  <Footer/>
  </Fragment>
  )
};

export default Home;
