import React from 'react';
import { useParams } from 'react-router-dom';
import useCollegeDetails from '../HooksFilesAll/useCollegeDetails';

const DetailsCollege = () => {
    const {id} = useParams()
    const [collgedetais] = useCollegeDetails()
  

const findCollegeDetails = collgedetais?.find(p=>p._id === id)
console.log(findCollegeDetails);


const {name,college_details,College_image,graduation_image,admissionDates,events,researchHistory,sports,rating,numberOfResearch,location,establishedYear,website,contactEmail,contactPhone,faculties,coursesOffered,facilities,affiliation} = findCollegeDetails



    return (
        <div className=' sm:flex p-5 justify-center'>
         
         <div className='sm:w-7/12  p-5'>
            <p className='text-4xl my-5'>{name}</p>
            <img src={College_image} className='h-[300px] object-cover' />


            <p className='my-5 '>{college_details}</p>
            <p className='text-xl font-bold my-2'>College Details:</p>


  <div className='flex  justify-evenly sm:w-2/3 '>
   <p className='w-full p-2 border text-center text-md text-gray-700'>College Location</p>
   <p className='w-full p-2 border text-center text-md text-gray-700'>{location}</p>
</div>

  <div className='flex  justify-evenly sm:w-2/3 '>
   <p className='w-full p-2 border text-center text-md text-gray-700'> Admission Dates</p>
   <p className='w-full p-2 border text-center text-md text-gray-700'>{admissionDates}</p>
</div>


  <div className='flex  justify-evenly sm:w-2/3 '>
   <p className='w-full p-2 border text-center text-md text-gray-700'>College rating </p>
   <p className='w-full p-2 border text-center text-md text-gray-700'>{rating}</p>
</div>

  <div className='flex  justify-evenly sm:w-2/3 '>
   <p className='w-full p-2 border text-center text-md text-gray-700'>Established Year</p>
   <p className='w-full p-2 border text-center text-md text-gray-700'>{establishedYear}</p>
</div>

  <div className='flex  justify-evenly sm:w-2/3 '>
   <p className='w-full p-2 border text-center text-md text-gray-700'>Website</p>
   <p className='w-full p-2 border text-center text-md text-gray-700'>{website}</p>
</div>
  <div className='flex  justify-evenly sm:w-2/3 '>
   <p className='w-full p-2 border text-center text-md text-gray-700'>Contact Email</p>
   <p className='w-full p-2 border text-center text-md text-gray-700'>{contactEmail}</p>
</div>

  <div className='flex  justify-evenly sm:w-2/3 '>
   <p className='w-full p-2 border text-center text-md text-gray-700'>Number of Research</p>
   <p className='w-full p-2 border text-center text-md text-gray-700'>{numberOfResearch}</p>
</div>
  <div className='flex  justify-evenly sm:w-2/3 '>
   <p className='w-full p-2 border text-center text-md text-gray-700'>Contact Phone</p>
   <p className='w-full p-2 border text-center text-md text-gray-700'>{contactPhone}</p>
</div>
  <div className='flex  justify-evenly sm:w-2/3 '>
   <p className='w-full p-2 border text-center text-md text-gray-700'>Affiliation</p>
   <p className='w-full p-2 border text-center text-md text-gray-700'>{affiliation}</p>
</div>
  <div className='flex  justify-evenly sm:w-2/3 '>
   <p className='w-full p-2 border text-center text-md text-gray-700'>Faculties</p>
   <p className='w-full p-2 border text-center text-md text-gray-700'>{faculties.map((p,index)=><li key={index} className='list-none '>{p}</li>)}</p>
</div>

  <div className='flex  justify-evenly sm:w-2/3 '>
   <p className='w-full p-2 border text-center text-md text-gray-700'>Courses Offered</p>
   <p className='w-full p-2 border text-center text-md text-gray-700'>{coursesOffered.map((p,index)=><li key={index} className='list-none '>{p}</li>)}</p>
</div>

  <div className='flex  justify-evenly sm:w-2/3 '>
   <p className='w-full p-2 border text-center text-md text-gray-700'>Facilities</p>
   <p className='w-full p-2 border text-center text-md text-gray-700'>{facilities.map((p,index)=><li key={index} className='list-none '>{p}</li>)}</p>
</div>





         </div>




         <div className='sm:4/12 p-5'>
            
      <div className='border-2 '>  
          <p className='px-16 py-5 border bg-red-300 text-center  font-bold text-xl'>Events</p>
          <div>
            {events?.map((p,index)=><p key={index}  className='mt-1 text-center border-b-2 px-20 py-2 '>{p}</p>)}
          </div>
   </div>

      <div className='border-2 my-5'>  
          <p className='px-16 py-5 border bg-green-200 text-center  font-bold text-xl'>Sports</p>
          <div>
            {sports?.map((p,index)=><p key={index}  className='mt-1 text-center border-b-2 px-20 py-2 '>{p}</p>)}
          </div>
   </div>
    
         

         </div>



        </div>
    );
};










export default DetailsCollege;