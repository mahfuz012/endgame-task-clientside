import React, { useContext } from 'react';
import useApplicationforom from '../HooksFilesAll/useApplicationforom';
import { AuthContextPro } from '../FirebaseAuthentication/AuthProviderPro';
import useCollegeDetails from '../HooksFilesAll/useCollegeDetails';
import useMyCollegeapply from '../HooksFilesAll/useMyCollegeapply';
import { Link } from 'react-router-dom';

const Mycollege = () => {
const {userProfile} = useContext(AuthContextPro)



const [applycolleges]  = useMyCollegeapply()

console.log(applycolleges);




    return (
        <div className='my-5 border  sm:grid grid-cols-2 p-10 gap-5'>
          {
            applycolleges?.map(p=><CollegeCard data={p}  key={p._id}/>)
          }
        </div>
    );
};




function CollegeCard ({data}){
const {_id,name,college_details,College_image,admissionDates,events,sports,rating,numberOfResearch,location,establishedYear,website,contactEmail,contactPhone,faculties,coursesOffered,facilities,affiliation} = data 
return (<>

<div className='border p-4'>
  <p className='text-3xl p-5'>{name}</p>
  <img src={College_image} className='w-full h-[300px] object-cover' />
  <p className='p-5'>{college_details}</p>
  <p className='text-2xl my-2 px-5 font-bold'>Some Details </p>
  <hr className='border-2 mb-5'></hr>
<div className='px-5 font-semibold text-gray-800'>


   <p>1.Admission Dates: {admissionDates}</p>
   <p>2.Rating: {rating}</p>
   <p>3.location: {location}</p>
   <p>4.Established Year: {establishedYear}</p>
   <p>5.Contact Email: {contactEmail}</p>
   <p>6.Number of Research: {numberOfResearch}</p>
</div>


<div className='mt-8 sm:mt-0  flex justify-end'>
<Link to={`/details/${_id}`} className='btn  bg-red-400'>More Details</Link>
</div>

</div>



</>)
}








export default Mycollege;