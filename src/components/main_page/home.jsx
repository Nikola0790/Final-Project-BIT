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
  <Search setSearch={setSearch}/>
  <Candidates/>
  <Footer/>
  </Fragment>
  )
};

export default Home;
