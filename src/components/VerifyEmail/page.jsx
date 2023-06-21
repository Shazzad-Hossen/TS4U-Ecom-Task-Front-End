"use client";
import React, { useState } from 'react';
import styles from './VerifyEmail.module.scss'
import { publicPost } from '@/utilities/apiCaller';
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { userSignin } from '@/services/userSlice';


const VerifyEmail = ({email}) => {
    const router=useRouter();
    const dispatch= useDispatch();

    const verifyOtp=()=>{
        publicPost('/api/user/verifyotp',{otp:conf, email}).then(res=>{
            Swal.fire({
        
                icon: 'success',
                title: 'Verification successful',
                showConfirmButton: false,
                timer: 1500
              })
              dispatch(userSignin(res.token));
              router.push('/profile')
            
        }).catch(err=> {
            Swal.fire({
        
                icon: 'error',
                title: 'Invalid OTP',
                showConfirmButton: false,
                timer: 1500
              })
        })
    }
    
  
   
   


    const [conf,setConf]=useState('');
    
    return (
        <div className={styles.container}>
            <p className={styles.maintext}>Verify Email</p>
            <p className={styles.subtext}>Please enter the verification code sent to {email}</p>
            <input value={conf} onChange={(e)=>setConf(e.target.value)} type="text" />
            <button onClick={verifyOtp} className={styles.verify_btn}>Verify</button>
            
        </div>
    );
};

export default VerifyEmail;