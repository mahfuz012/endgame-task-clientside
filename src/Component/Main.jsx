
import { createBrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import Login from '../FirebaseAuthentication/Login';
import Register from '../FirebaseAuthentication/Register';
import Profilepage from './Profilepage';
import Colleges from './Colleges';
import PrivaiteRoute from '../PriveRoute/PrivaiteRoute';
import HomeSection from './HomeSection';
import DetailsCollege from './DetailsCollege';
import AdmissionCollege from './AdmissionCollege';
import AdmissonForm from './AdmissonForm';
import Mycollege from './Mycollege';
import ErrorPage from './ErrorPage';






export const router = createBrowserRouter([
    {
      path: "/",
      errorElement:<ErrorPage />,
      element: <HomePage />,
      children:[

         { 
          
          path: "/",
      
         element: <HomeSection />,

         },


        {
        path:'/login',
        element:<Login />,
        },
        {
        path:'/details/:id',
        element:<DetailsCollege />
        },
        {
        path:'/registerfiles',
        element:<Register />
        },
        {
        path:'/profilepage/:id',
        element:<Profilepage />
        },
        {
        path:'/Colleges',
        element: <Colleges />
        },
        {
        path:'/admissioncollege',
        element: <AdmissionCollege />
        },
        {
        path:'/admissionid/:id',
        element:<AdmissonForm></AdmissonForm>
        },
        {
        path:'/mycolleges',
        element:<Mycollege />
        },
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    ]
    },
  ]);