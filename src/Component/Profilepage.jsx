import React, { useContext, useState } from 'react';
import AuthProviderPro, { AuthContextPro } from '../FirebaseAuthentication/AuthProviderPro';
import { Controller, useForm } from 'react-hook-form';
import useMagicAxiosBoss from '../HooksFilesAll/useMagicAxiosBoss';
import { useParams } from 'react-router-dom';
import useAllUserIdentity from '../HooksFilesAll/useAllUserIdentity';
import { useQuery } from '@tanstack/react-query';
import swal from 'sweetalert';
import { Helmet } from 'react-helmet-async';

const Profilepage = () => {


const {id} = useParams()



const [axiosMagic] = useMagicAxiosBoss()
    const { refetch, data: findgmaildetails = [] } =
        useQuery(
        ['findgmaildetails'],
         async () => {
         const res = await axiosMagic.get(`/findgmaildetails?id=${id}`)
                return res.data
            
        })
 

console.log(findgmaildetails);






const {update_email,email,displayName,phone,university,blood,address} = findgmaildetails



    const array = ['AB+', 'A+', 'B+', '0-',"0+","AB-","A-","Don't Know","Select Your Blood"];
    const {reset, control,register, handleSubmit,  formState: { errors } } = useForm();
    const {userProfile} = useContext(AuthContextPro)



    

function submitFunction(data){



const email = data.email
const displayName =  data.text
const phone = data.phone
const university = data.university
const blood = data.option
const address = data.address
console.log(email,displayName,phone,university,blood,address);
const updatedetails = {email,displayName,phone,university,blood,address}

axiosMagic.put(`/updateuserdetails/${id}`,updatedetails )
.then(res=>{
refetch()
reset()


swal({
  text: `Hi ${userProfile?.displayName},Update Successfully `,
  icon: "success",
    });
})
.catch(error=>console.log(error))




}





    return (
      <>

<Helmet>
        <title>Profile</title>
        </Helmet>



        <div className=' flex justify-center mt-10'>
            
<div className='sm:w-3/12 border p-5'>

<img src={userProfile?.photoURL} className='rounded-full border-2 border-sky-300 p-2 
w-36 sm:w-48  h-36 sm:h-48 mx-auto' />

<div className='my-10 font-semibold '>
<p className='my-2'>Name: <span className='mx-2 font-semibold text-blue-500'> {displayName} </span>   </p>
<p className='my-2'>Email: <span className='mx-2 font-semibold text-blue-500'> {update_email?update_email:email} </span> </p>
<p className='my-2'>university: <span className='mx-2 font-semibold text-blue-500'>  {university}</span></p>
<p className='my-2'>Address: <span className='mx-2 font-semibold text-blue-500'> {address} </span> </p>
<p className='my-2'>Phone: <span className='mx-2 font-semibold text-blue-500'> {phone} </span></p>
<p className='my-2'>Blood Group: <span className='mx-2 font-semibold text-blue-500'>  {blood} </span></p>

</div>
</div>



<div className='sm:w-7/12 border px-10'>

   <h1 className='font-semibold my-5 text-xl text-center '>See your Profile Details or Update </h1> 
   <hr  className='sm:w-8/12 mx-auto border-2 border-sky-300'></hr>


<form onSubmit={handleSubmit(submitFunction)} className='my-5 py-5 grid grid-cols-2'>

<div>
<p className="font-semibold">Your Name</p>
<input {...register('text', { required: true })}
                        className='border border-blue-300 w-full sm:w-80 my-2 p-2 '
                        type='text'
                        placeholder='Type your Name'
                        name='text'
                      />
                      {errors.text && <span className='text-sm text-red-700 '>Please fill this field</span>  }

                      </div>



 <div>
<p className="font-semibold">Your Gmail</p>
<input {...register('email', { required: true })}
                        className='border border-blue-300 w-full sm:w-80 my-2 p-2 '
                        type="email"
                        placeholder='Type your Name'
                        name='email'
                      />
                      {errors.email && <span className='text-sm text-red-700 '>Please fill this field</span>  }

                      </div>
 <div>
<p className="font-semibold">Your University</p>
<input {...register('university', { required: true })}
                        className='border border-blue-300 w-full sm:w-80 my-2 p-2 '
                        type='text'
                        placeholder='Type your Name'
                        name='university'
                      />
                      {errors.text && <span className='text-sm text-red-700 '>Please fill this field</span>  }

                      </div>
 <div>
<p className="font-semibold">Your Address</p>
<input {...register('address', { required: true })}
                        className='border border-blue-300 w-full sm:w-80 my-2 p-2 '
                        type='text'
                        placeholder='Type your Name'
                        name='address'
                      />
                      {errors.text && <span className='text-sm text-red-700 '>Please fill this field</span>  }

                      </div>
 <div>

<p className="font-semibold">Your Phone</p>
<input {...register('phone', { required: true })}
                        className='border border-blue-300 w-full sm:w-80 my-2 p-2 '
                        type='number'
                        placeholder='Type your Name'
                        name='phone'
                      />
                      {errors.number && <span className='text-sm text-red-700 '>Please fill this field</span>  }

                      </div>


<div>
<p className="font-semibold">Your Blood Group</p>
<Controller
        name="option"
        control={control}
        defaultValue={array[8]}
        render={({ field }) => (
          <select
            {...field}
            className=" border border-blue-300 w-full sm:w-80 my-2 p-2"
            required
            name="blood"
           
          >
         

            {array.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        )}
      />
</div>




                      <input
                        value="Update Data"
                        className='w-52  my-5 p-2  bg-blue-600 text-white'
                        type='submit'
                      />




</form>
</div>








        </div>
        </>
    );
};

export default Profilepage;