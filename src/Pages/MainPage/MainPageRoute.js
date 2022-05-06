import React,{ Suspense} from 'react';
// import { Loader } from '../Shared';
import RouteData from './RouteData'
// import PrivateRoute from './PrivateRoute';


const MainPageRoute = () =>{

    return(
        // <Suspense fallback={<Loader/>}>
        <Suspense fallback={<div>Loading...</div>}>
            <RouteData/>
        </Suspense>
    );
}

export default MainPageRoute;