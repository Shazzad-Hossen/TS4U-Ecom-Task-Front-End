"use client";
import React from "react";
import Lottie from "lottie-react";
import signinAnim from "../../assets/animations/signin.json";
import styles from "./Signin.module.scss";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { userSignin } from "@/services/userSlice";
import { publicPost } from "@/utilities/apiCaller";
import Swal from 'sweetalert2'
import { useRouter } from "next/navigation";
import Link from "next/link";


const SignIn = () => {
  const router=useRouter();
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

  publicPost('/api/user/signin',{password: data.password, email:data.email})
  .then(res=>{
   
    dispatch(userSignin(res.token));
    
    Swal.fire({
               
      icon: 'success',
      title: `Sign In successfull`,
      showConfirmButton: false,
      timer: 1500
    })

    router.push('/profile');

  })
   

    
  };


  return (
    <div className={styles.container}>
      <Lottie className={styles.anim} animationData={signinAnim} loop={true} />
      <form onSubmit={handleSubmit(onSubmit)}  className={styles.form_container}>
        <p>SIGN IN</p>


            


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



            <input className={styles.btn} type="submit" value='Sign In' />
            <span className={styles.hv_acc}>New to this site? <br /><Link href='/signup'>Sign up here</Link></span>

          
        </form>

     
    </div>
  );
};

export default SignIn;
