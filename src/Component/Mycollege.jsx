import React, { useContext } from 'react';
import useApplicationforom from '../HooksFilesAll/useApplicationforom';
import { AuthContextPro } from '../FirebaseAuthentication/AuthProviderPro';
import useCollegeDetails from '../HooksFilesAll/useCollegeDetails';
import useMyCollegeapply from '../HooksFilesAll/useMyCollegeapply';
import { Link } from 'react-router-dom';
import useMagicAxiosBoss from '../HooksFilesAll/useMagicAxiosBoss';

const Mycollege = () => {
const {userProfile} = useContext(AuthContextPro)
const [axiosMagic] = useMagicAxiosBoss()


const [applycolleges]  = useMyCollegeapply()

console.log(applycolleges);

function feedbacksubmit (e){
  e.preventDefault()
const title = e.target.title.value
const feedback = e.target.feedback.value
const rating = e.target.rating.value
const dataoffeedback = {title,feedback,rating,email:userProfile?.email,name:userProfile?.displayName}
axiosMagic.post('/feedbackdata',dataoffeedback )
.then(res=>{
  console.log(res);
  e.target.reset()
}).catch(error=>{
  console.log(error);
})
}


    return (
      <>
        <div className='my-5   sm:grid grid-cols-2 p-10 gap-5'>
          {
            applycolleges?.map(p=><CollegeCard data={p}  key={p._id}/>)
          }
        </div>

<div className=' p-5'>
  <p className='text-4xl text-center my-5 font-bold '>Review add please</p>
  <hr className='border-2 '></hr>


<div className='sm:w-8/12 mt-5 mx-auto border-black '>


<form onSubmit={feedbacksubmit} className='border p-5'>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-bold">
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder='Write something like Subject'
              name="title"
              className="mt-1 px-4 py-2 w-full border-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            
             
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="feedback" className="block text-gray-700 font-bold">
              Feedback
            </label>
            <textarea
              id="feedback"
              name="feedback"
              rows="4"
              placeholder='You can make any decent comment to us'
              className="mt-1 px-4 py-2 w-full border-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
         
         
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="rating" className="block text-gray-700 font-bold">
              Rating
            </label>
            <select
              id="rating"
              name="rating"
              className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
      
         
              required
            >
              <option value="">Select Rating</option>
              <option value="5">5 </option>
              <option value="4">4 </option>
              <option value="3">3 </option>
              <option value="2">2 </option>
              <option value="1">1 </option>
            </select>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>




</div>

</div>


        </>

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