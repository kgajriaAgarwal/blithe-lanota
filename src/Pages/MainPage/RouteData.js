
import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import PrivateRoute from '../../route/PrivateRoute';

const ArchivesPage = React.lazy(() => import('../Archives/Archives'));
const NotesPage = React.lazy(() => import('../NotesPage/NotesPage'));
// const VideoListingPage = React.lazy(() => import('../VideoListingPage/VideoListingPage'));
// const LikedVideosPage = React.lazy(() => import('../LikedVideosPage/LikedVideosPage'));
// const Video = React.lazy(() => import('../Video/Video'));
// const PlayList = React.lazy(() => import('../PlayList/PlayList'));
// const WatchLater = React.lazy(() => import('../WatchLater/WatchLater'));
// const History = React.lazy(() => import('../History/History'));

function NoMatch() {
    return (
      <div>
        <h2>404.. This page is not found!</h2>
        <p>
          <Link to="/">Go to the home page</Link>
        </p>
      </div>
    );
  }

//Routing Data
const RouteData = () =>{
    return(
        <Routes>  
            <Route exact path='/user' element={<PrivateRoute/>}>                
              <Route exact path="/user/archives"  element={<ArchivesPage/>}/> 
            </Route>
            {/*<Route exact path="/video/:videoId"  element={<Video/>}/> 
            <Route exact path="/videos/:categoryId"  element={<VideoListingPage/>}/>  */}
            {/* <Route exact path='/profile' element={<UserProfile/>}/>
            <Route exact path='/home' element={<FeedsPage/>}/> */}
            <Route exact path='/' element={<NotesPage/>}/>
        </Routes>
   );
}
export default RouteData;