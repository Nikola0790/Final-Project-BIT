import { Fragment, useState } from "react";
import Candidates from "../partials/candidates/candidates";
import { Footer } from "../partials/footer/footer";
import { Header } from "../partials/header/header";
import { Search } from "../partials/search_bar/searchBar";
import "./home.css";

const Home = ({ candidates, setCandidates }) => {
  //const [search, setSearch] = useState("");

  // candidates.filter((candidates) => {
  //   let result = null

  //   if(search === '') {
  //     result = candidates;
  //   } else if (candidates.name.toLowerCase().includes(search.toLowerCase())) {
  //     result = candidates;
  //   }
  //   return result;
  // })

  return (
    <Fragment>
      <Header />

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row searchCandidate">
              <div className="col-md-6">
                <h4>Candidates</h4>
              </div>
              <div className="col-md-6 search">
                <Search setSearch={setSearch} />
              </div>
            </div>

            <div className="row">
              {setCandidates.map((candidates, index) => {
                return <Candidates items={candidates} key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Home;
