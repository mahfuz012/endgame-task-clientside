import React, { useContext } from 'react';
import useApplicationforom from '../HooksFilesAll/useApplicationforom';
import { AuthContextPro } from '../FirebaseAuthentication/AuthProviderPro';
import useCollegeDetails from '../HooksFilesAll/useCollegeDetails';

const Mycollege = () => {
const {userProfile} = useContext(AuthContextPro)
const [collgedetais]= useCollegeDetails()
 const [applicationdetails] =  useApplicationforom()











    return (
        <div>
          
        </div>
    );
};

export default Mycollege;