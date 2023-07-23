import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import {AiFillEye, AiFillEyeInvisible, AiFillFacebook} from "react-icons/ai"
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { BiLogoFacebook, BiLogoFacebookCircle } from 'react-icons/bi';
import { AuthContextPro } from './AuthProviderPro';
import swal from 'sweetalert';
import useMagicAxiosBoss from '../HooksFilesAll/useMagicAxiosBoss';



const Login = () => {

  const {loginProfile,userProfile,registerWithGoogle,registerWithFacebook} = useContext(AuthContextPro)

    const {reset, register, handleSubmit,  formState: { errors } } = useForm();


    const [axiosMagic] = useMagicAxiosBoss()



    function googleregister(){
      registerWithGoogle()
      .then(res=>{
        const dataAll = res.user
         
        const url = dataAll.photoURL
        const displayName = dataAll.displayName
        const email = dataAll.email
        const googleDataProvider = { email, url, displayName }
    
        axiosMagic.post('/userdetailsadd', googleDataProvider)
          .then(res => {
            console.log(res.data);
    
            swal({
              text: `Hi ${userProfile?.displayName}, Successfully completed Registration`,
              icon: "success",
                });
    
          })
          .catch(error => {
            console.error(error);
          
          });
      })
    
    
    
      .catch((error)=>console.log(error))
    }
    




function faceboookdopen(){
  registerWithFacebook()
  .then(res=>console.log(res))
  .catch(error=>console.log(error))
}








    function loginSubmit (data){
  
      const email= data.email
      const password = data.password
      loginProfile(email,password)
      .then(credenAccount=>{
   console.log(credenAccount);
        swal({
          title: "Login is Successfull",
           icon: "success",
        });
      
  
        
        reset()
      
      }).catch(error=>{
          console.log(error);
          const errorCodes = error.code;
          if (errorCodes === "auth/wrong-password") {
            swal({
              title: "password not match, please again?",
            
              icon: "warning",
              dangerMode: true,
            });
             
          } else if (errorCodes === "auth/user-not-found") {
            swal({
              title: "You have no account, register Now?",
            
              icon: "warning",
              dangerMode: true,
            });
              
          }
      })
      
      }
      
      

















    return (
       
<div style={{alignItems:"center"}} className='sm:flex px-5 sm:justify-center '>

<div className='sm:w-5/12  px-10 sm:px-0 '>

<form onSubmit={handleSubmit(loginSubmit)} className='mt-5 pt-5 sm:text-center'>
      <h1 className='text-grey-700 text-3xl font-bold my-5'>Login User</h1>
      <div style={{ alignItems: 'center' }} className='flex flex-col '>
      <input
        {...register('email', { required: true })}
        className='border  w-full sm:w-80 my-2 p-2'
        type='email'
        placeholder='Type your email'
        name='email'
      />
      {errors.email && <span className='text-red-700 -mt-1'>Please enter your email</span>}

   

      <input
        {...register('password', { required: true })}
        className='w-full sm:w-80  border my-2 p-2'
        type="password"
        placeholder='Type your password'
        name='password'
      />



      {errors.password && <span className='text-red-700 -mt-1'>Please enter your password</span>}
     




      
      <input
        className=' w-full text-xl sm:w-52 rounded-2 my-2 p-2 rounded-md text-white bg-purple-800'
        type='submit'
        value='Login'
      />



</div>
      <p className='my-5 sm:px-5'>
           you haven't registered yet,
        <Link to={'/registerfiles'} className='font-bold text-xl mx-1 text-green-700'>
          Registration
        </Link>
      </p>


    
    </form>
    
    <div className='sm:flex justify-center mb-5 gap-2'>
        <button onClick={googleregister}  className='btn bg-base-100 border-black  my-2 sm:my-0 w-full sm:w-1/5 text-black'>
          <FcGoogle className='text-xl' />
   
        </button>
        <button onClick={faceboookdopen}  className='btn bg-base-100 border-black  my-2 sm:my-0 w-full sm:w-1/5 text-black'>
          <BiLogoFacebookCircle className='text-xl text-blue-500' />
   
        </button>
      </div>




</div>
</div>
    );
};

export default Login;




