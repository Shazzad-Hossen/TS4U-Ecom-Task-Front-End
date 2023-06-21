"use client";
import React, { useState } from "react";
import Lottie from "lottie-react";
import signupAnim from "../../assets/animations/signup.json";
import styles from "./Signup.module.scss";
import { useForm } from "react-hook-form";
import { publicPost } from "@/utilities/apiCaller";
import VerifyEmail from "@/components/VerifyEmail/page";
import Swal from 'sweetalert2'
import Link from "next/link";




const SignUp = () => {
  const [isShow,setIsShow]=useState(true);
  const [email,setEmail]=useState('');
 
  
 
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

   
  
    
 
    publicPost('/api/user/signup',data).then(res=>{

      if(res?.isOtpSend) {
        setEmail(data.email);
        setIsShow(false);

      }
       

     
    }).catch(err=>{
      
      Swal.fire({
        
        icon: 'error',
        title: 'Email already registered',
        showConfirmButton: false,
        timer: 1500
      })
      
     
    
    })


  };
  return (
   
      
<div className={styles.container}>

{!isShow && <VerifyEmail email={email}/> }
  
  {isShow && <Lottie className={styles.anim} animationData={signupAnim} loop={true} />}
  {isShow &&  <form onSubmit={handleSubmit(onSubmit)}  className={styles.form_container}>
        <p>SIGN UP</p>


            <div className={styles.form_col}>
            <label htmlFor="Name">Name</label>
          <input {...register("name", { required: 'Name is required.',
            minLength: {
              value: 5,
              message: 'Name should be at least 5 characters long.',
            }, })} />
            {errors.name && <p>{errors.name.message}</p>}
            </div>



            <div className={styles.form_col}>
            <label htmlFor="Email">Email</label>
          <input {...register("email", {
            required: 'Email is required.',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
              message: 'Invalid email format.',
            },
          })} />
           {errors.email && <p>{errors.email.message}</p>}
           </div>



           <div className={styles.form_col}>
            <label htmlFor="Password">Password</label>
          <input  {...register("password",  {
            required: 'Password is required.',
            minLength: {
              value: 6,
              message: 'Password should be at least 6 characters long.',
            },
            maxLength: {
              value: 12,
              message: 'Password should be at most 12 characters long.',
            },
            pattern: {
              value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*]).{6,}$/,
              message: 'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.',
            },
          })} />
          {errors.password && <p>{errors.password.message}</p>}
            </div>



            <input className={styles.btn} type="submit" value='Sign Up' />
            <span className={styles.hv_acc}>Already have and account? <br /><Link href='/signin'>Sign in here</Link></span>
            

          
        </form>}

     
        

     
    </div>
    
    
   
   
    
  );
};

export default SignUp;
