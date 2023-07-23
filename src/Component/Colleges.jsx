import React, { useContext } from 'react';
import useAllUserIdentity from '../HooksFilesAll/useAllUserIdentity';

import useCollegeDetails from '../HooksFilesAll/useCollegeDetails';
import { Link } from 'react-router-dom';
import { AuthContextPro } from '../FirebaseAuthentication/AuthProviderPro';

const Colleges = () => {
  const {userProfile} = useContext(AuthContextPro)
  const [collgedetais] = useCollegeDetails()




    return (
        <div className='my-10  sm:grid grid-cols-3 gap-5 px-5'>
         {
            collgedetais.map(p=><CollgeCard userProfile={userProfile} key={p._id} data={p}/>)
         }
        </div>
    );
};



function CollgeCard({data,userProfile}){
const {_id,College_image, name,rating, admissionDates,numberOfResearch} = data
return (<>



<div className=' shadow-2xl text-gray-600 pb-5'>
<img src={College_image} className='w-full h-[300px] object-cover ' />
<p className='my-5 text-3xl px-5 text-center font-semibold ' > {name}</p>
<p className='px-5 text-md  my-2'>Admission Dates: {admissionDates} </p>
<p className='px-5 text-md  my-2'>Number of Research: {numberOfResearch}</p>

<div style={{alignItems:"center"}} className='px-5 flex justify-between mt-5 '>
<p className=' py-2 badge bg-red-300 font-semibold '>Rating:<span className='ms-1'>{rating}</span></p>


{userProfile?<><Link to={`/details/${_id}`}><button className='btn bg-gray-800 text-white'>Details</button></Link></>:<><Link to={`/login`}><button className='btn bg-gray-800 text-white'>Details</button></Link></>

}



</div>


</div>









</>)
}





export default Colleges;