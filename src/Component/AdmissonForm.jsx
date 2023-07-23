import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';
import useMagicAxiosBoss from '../HooksFilesAll/useMagicAxiosBoss';
import { AuthContextPro } from '../FirebaseAuthentication/AuthProviderPro';


const AdmissonForm = () => {
const {id} = useParams()
const [axiosMagic] = useMagicAxiosBoss()
const {userProfile} = useContext(AuthContextPro)
const {
    handleSubmit,
 
    register,
    reset,
    formState: { errors },
  } = useForm();
    
  const onSubmit = (data) => {
    const imageToken=import.meta.env.VITE_IMAGE_UPLOAD
    const imageUrl= `https://api.imgbb.com/1/upload?key=${imageToken}`

    const formData = new FormData();

    formData.append('image', data.image[0]);

    fetch(imageUrl,{
        method:"POST",
        body:formData
    }).then(res=>res.json())
    .then(getdata=>{
       const imageUrl= getdata.data.display_url
       const candidateData = {
        collegeID:id,
        usergmail:userProfile?.email,
        subject: data.subject,
        candidateName: data.candidateName,
   
        candidateEmail: data.candidateEmail,
        candidatePhone: data.candidatePhone,
        address: data.address,
        dateOfBirth: data.dateOfBirth,
        image: imageUrl, 
      };

      axiosMagic.post(`/admissionformdetails`,candidateData)
      .then(res=>{
        console.log(res.data);
      
            swal({
                text: `Hi , Successfully Submit`,
                icon: "success",
            });
        
      }).catch(error=>{
console.log(error);
        swal({
          text: "Already You Have Applied",
          icon: "error",
        });


      })

      reset()
    })



 




  };

    return (
        <div className='p-5'>
         <p className='text-center my-5 text-gray-800 font-semibold text-2xl'>Fill up the admission form properly</p>   
         <hr className='border-2 sm:w-2/3 mx-auto'></hr>




<div className='sm:w-8/12 my-8 mx-auto'>
<form className="border p-4 grid gap-x-5 grid-cols-2 mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Candidate Name</label>
        <input
          {...register('candidateName', { required: 'Candidate Name is required' })}
          className="border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Enter Candidate Name"
        />
        {errors.candidateName && (
          <span className="text-red-600 text-sm">{errors.candidateName.message}</span>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Subject</label>
        <input
          {...register('subject', { required: 'Subject is required' })}
          className="border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Enter Subject"
        />
        {errors.subject && (
          <span className="text-red-600 text-sm">{errors.subject.message}</span>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Candidate Email</label>
        <input
          {...register('candidateEmail', {
            required: 'Candidate Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
              message: 'Invalid email format',
            },
          })}
          className="border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          type="email"
          placeholder="Enter Candidate Email"
        />
        {errors.candidateEmail && (
          <span className="text-red-600 text-sm">{errors.candidateEmail.message}</span>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Candidate Phone number</label>
        <input
          {...register('candidatePhone', {
            required: 'Candidate Phone number is required',
          })}
          className="border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          type="tel"
          placeholder="Enter Candidate Phone number"
        />
        {errors.candidatePhone && (
          <span className="text-red-600 text-sm">{errors.candidatePhone.message}</span>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Address</label>
        <input
          {...register('address', { required: 'Address is required' })}
          className="border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Enter Address"
        />
        {errors.address && (
          <span className="text-red-600 text-sm">{errors.address.message}</span>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Date of Birth</label>
        <input
          {...register('dateOfBirth', { required: 'Date of Birth is required' })}
          className="border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          type="date"
          placeholder="Enter Date of Birth"
        />
        {errors.dateOfBirth && (
          <span className="text-red-600 text-sm">{errors.dateOfBirth.message}</span>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Image</label>
        <input
          {...register('image', { required: 'Image is required' })}
          className="border   rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          type="file"
        />
        {errors.image && (
          <span className="text-red-600 text-sm">{errors.image.message}</span>
        )}
      </div>
      
      <div className="mb-5  mt-1 ">
      <label className="block text-gray-700 font-semibold">Submit This Button</label>
        <button
          className="bg-blue-500 text-white font-semibold w-3/5 py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
</div>
















        </div>
    );
};

export default AdmissonForm;