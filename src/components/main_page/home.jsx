import { Fragment,useState } from "react";
import { Candidates } from "../partials/candidates/candidates";
import { Footer } from "../partials/footer/footer";
import { Header } from "../partials/header/header";
import { Search } from "../partials/search_bar/searchBar";


const Home = (candidates) => {
  const [search, setSearch] = useState('');
  
  candidates.filter((candidates) => {
    let result = null

    if(search === '') {
      result = candidates;
    } else if (candidates.name.toLowerCase().includes(search.toLowerCase())) {
      result = candidates;
    }
    return result;
  })



  return (
    <Fragment>
      <Header/>

        <div className="container">
          <div className="row">
            <div className="col-12">

              <div className="row">
                <div className="col-12">
                  <h4>Candidates</h4>
                  <Search setSearch={setSearch}/>
                  </div>
              </div>
              
              <div className="row">
                {candidates.map((candidate) => {
                  return <Candidates items={candidate}/>
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
