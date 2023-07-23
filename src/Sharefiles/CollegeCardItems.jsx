import React, { useContext } from 'react';
import useCollegeDetails from '../HooksFilesAll/useCollegeDetails';
import { Link } from 'react-router-dom';
import { AuthContextPro } from '../FirebaseAuthentication/AuthProviderPro';

const CollegeCardItems = () => {

    const [collgedetais] = useCollegeDetails()
    const {userProfile} = useContext(AuthContextPro)
console.log(collgedetais);


    return (
        <div className='border '>
            <p className='mt-16 mb-10 text-center text-4xl font-semibold text-gray-600'> ---- Here are some of our colleges ---- </p>

<div className=' sm:flex gap-5 px-5'>
{
    collgedetais?.slice(0,3).map(p=><CardCollege userProfile={userProfile} key={p._id} data={p}/>)
}
</div>



        </div>
    );
};



function CardCollege({data,userProfile}){
    const {_id,College_image,name,researchHistory,events,sports, admissionDates,} = data
    return (<>
    
    
    
<div className='shadow-red-200 sm:w-4/12 shadow-2xl text-gray-600 pb-5'>
<img src={College_image} className='w-full h-[300px] object-cover ' />
<p className='my-5 text-3xl px-5 text-center font-semibold'> {name}</p>
<p className='px-5 text-md  my-2'>Admission Dates: {admissionDates} </p>
<p className='px-5 text-md  my-2'>Research History: <span className='text-blue-500'>{researchHistory?.map(p=><li>{p.title}</li>)}</span> </p>
<p className='px-5 text-md  my-2'>Events: <span className='text-blue-500'>{events?.map(p=><span>-{p}</span>)}</span> </p>
<p className='px-5 text-md  my-2'>Sports: <span className='text-blue-500'>{sports?.map(p=><span>-{p}</span>)}</span> </p>

<div style={{alignItems:"center"}} className='px-5 flex justify-end mt-5 '>



{userProfile?<><Link to={`/details/${_id}`}><button className='btn bg-gray-800 text-white'>Details</button></Link></>:<><Link to={`/login`}><button className='btn bg-gray-800 text-white'>Details</button></Link></>

}



</div>


</div>
    
    
    
    
    
    
    
    
    </>)
}








export default CollegeCardItems;