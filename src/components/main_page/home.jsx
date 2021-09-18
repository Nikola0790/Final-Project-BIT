import { Fragment, useState } from "react";
import SingleCandidates from "../partials/candidate_single/candidate_single";
import { Search } from "../partials/search_bar/searchBar";
import "./home.css";

const Home = ({ candidates }) => {
  const [search, setSearch] = useState("");

  // Search field
  let candidateSearchTerm = candidates.filter((searchItem) => {
    let result = null;

    if (search === "") {
      result = searchItem;
    } else if (searchItem.name.toLowerCase().includes(search.toLowerCase())) {
      result = searchItem;
    }

    return result;
  });

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row searchCandidate">
              <div className="col-md-6">
                <h4>Candidates</h4>
              </div>
              <div className="col-md-6 search">
                <Search setSearch={setSearch} />
                {/* send setSearch to Search for taking input value from search bar */}
              </div>
            </div>
            <hr />
            <div className="row">
              {candidateSearchTerm.map((candidates, index) => {
                return <SingleCandidates candidate={candidates} key={index} />; // sending data for all candidates or for searched candidates
              })}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
