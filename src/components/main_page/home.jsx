import { Fragment } from "react";
import  Candidates  from "../partials/candidates/candidates";
import { Footer } from "../partials/footer/footer";
import { Header } from "../partials/header/header";


const Home = ({setCandidates}) => {
console.log(setCandidates)
  return (
    <Fragment>
      <Header/>
        <div className="container">
          <div className="row">
            <div className="col-12">

              <div className="row">
                <div className="col-12">
                  <h4>Candidates</h4>
                  </div>
              </div>
              
              <div className="row">
                {setCandidates.map((candidates) => {
                  return <Candidates items={candidates}/>
                  })}
              </div>

            </div>
          </div>
        </div>
      <Footer/>
  </Fragment>
  )
};

export default Home;
