import React, { useContext } from 'react';
import useCollegeDetails from '../HooksFilesAll/useCollegeDetails';
import { Link } from 'react-router-dom';
import { AuthContextPro } from '../FirebaseAuthentication/AuthProviderPro';

const AdmissionCollege = () => {
    const {userProfile} = useContext(AuthContextPro)
    const [collgedetais] = useCollegeDetails()
function admissionsubmit(){
    console.log("ok");
}

    return (
        <div className='mt-20 mb-10 sm:grid grid-cols-2 gap-5 sm:px-20'>
            {
               collgedetais.map(p=><CollegeCard userProfile={userProfile} admissionsubmit={admissionsubmit} data={p} key={p._id}/>) 
            }
            
        </div>
    );
};


 function CollegeCard({data,userProfile}){
const {_id,name} = data
return(<>
{userProfile?<><Link to={`/admissionid/${_id}`} className=''>
    <p className='p-5 shadow-md shadow-red-300 text-gray-600 cursor-pointer active:bg-red-300   border text-xl text-center '>{name}</p>
</Link></> : <><Link to={`/login`} className=''>
    <p className='p-5 shadow-md shadow-red-300 text-gray-600 cursor-pointer active:bg-red-300   border text-xl text-center '>{name}</p>
</Link></>
    
}




</>)
 }














export default AdmissionCollege;