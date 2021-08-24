import React from 'react';
import Home from './Home';
import AlbumDetails from './components/api/AlbumDetails';
import Artist from './components/api/Artist';
import { BrowserRouter as Router , Switch , Route , useParams ,location} from "react-router-dom";
import Footer from './components/Footer';
import AddNews from './components/forms/AddNews';
import AddQuote from './components/forms/AddQuote';
import AddAlbum from './components/forms/AddAlbum';
import AddVideoClip from './components/forms/AddVideoClip';
import Auth from './components/forms/Auth';
import {UserContextProvider} from './components/contexts/UserContext';
import { ProtectedRoute } from './components/protected.route';
import Admin from './components/admin/index';


const App =() =>{
    return(
        <>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route  path="/album/:id" component={AlbumDetails} />
            <Route path="/artist/:id" render={(props)=> <Artist {...props} key={Math.random()} />} />
            
            <UserContextProvider>
              <Route path="/admin/auth" component={Auth} />
              <ProtectedRoute exact path="/admin" component={Admin} />
              <ProtectedRoute path="/admin/addnews" component={AddNews} />
              <ProtectedRoute path="/admin/addquote" component={AddQuote} />
              <ProtectedRoute path="/admin/addalbum" component={AddAlbum} />
              <ProtectedRoute path="/admin/addvideoclip" component={AddVideoClip} />
            </UserContextProvider>
            
          </Switch>
      </Router> 
        </>
    );
}

export default App;