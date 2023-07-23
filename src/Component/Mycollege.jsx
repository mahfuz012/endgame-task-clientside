import React, { useContext } from 'react';
import useApplicationforom from '../HooksFilesAll/useApplicationforom';
import { AuthContextPro } from '../FirebaseAuthentication/AuthProviderPro';
import useCollegeDetails from '../HooksFilesAll/useCollegeDetails';
import useMyCollegeapply from '../HooksFilesAll/useMyCollegeapply';

const Mycollege = () => {
const {userProfile} = useContext(AuthContextPro)



const [applycolleges]  = useMyCollegeapply()

console.log(applycolleges);




    return (
        <div className='my-5 border'>
          {
            applycolleges?.map(p=><p>{p.name}</p>)
          }
        </div>
    );
};

export default Mycollege;