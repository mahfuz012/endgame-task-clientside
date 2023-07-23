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
        <div className='my-5 border  sm:grid grid-cols-2 px-10 gap-5'>
          {
            applycolleges?.map(p=><CollegeCard data={p}  key={p._id}/>)
          }
        </div>
    );
};




function CollegeCard ({data}){
const {name,college_details,College_image,admissionDates,events,sports,rating,numberOfResearch,location,establishedYear,website,contactEmail,contactPhone,faculties,coursesOffered,facilities,affiliation} = data 
return (<>

<div className='border '>
  <p className='text-3xl p-5'>{name}</p>
  <img src={College_image} className='w-full h-[300px] object-cover' />


</div>



</>)
}








export default Mycollege;