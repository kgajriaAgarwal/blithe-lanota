
import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import PrivateRoute from '../../route/PrivateRoute';
import { NoMatch } from '../Shared';

const TrashPage = React.lazy(() => import('../Trash/Trash'));
const ArchivesPage = React.lazy(() => import('../Archives/Archives'));
const NotesPage = React.lazy(() => import('../NotesPage/NotesPage'));


//Routing Data
const RouteData = () =>{
    return(
        <Routes>  
            <Route exact path='/user' element={<PrivateRoute/>}>                
              <Route exact path="/user/archives"  element={<ArchivesPage/>}/> 
              <Route exact path="/user/trash"  element={<TrashPage/>}/>
            </Route>
            <Route exact path='/home' element={<NotesPage/>}/> 
            <Route exact path='/' element={<NotesPage/>}/>
            {/* <Route path="*" component={NoMatch} /> */}
            <Route path="*" element={<NoMatch/>} />
        </Routes>
   );
}
export default RouteData;