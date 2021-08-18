import React from 'react';
import Home from './Home';
import AlbumDetails from './components/api/AlbumDetails';
import Artist from './components/api/Artist';
import { BrowserRouter as Router , Switch , Route , useParams ,location} from "react-router-dom";


const App =() =>{
    return(
        <>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route  path="/album/:id" component={AlbumDetails} />
            <Route path="/artist/:id" component={Artist} />
          </Switch>
      </Router> 
        </>
    );
}

export default App;