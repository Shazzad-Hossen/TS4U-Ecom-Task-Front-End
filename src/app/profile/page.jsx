"use client"
import { privatePost } from '@/utilities/apiCaller';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './Profile.module.scss'
import Image from 'next/image';
import dp from '../../assets/images/dp.jpg'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation';
import LoadingSpinner from '@/components/LoadingSpinner/page';


const Profile = () => {
    const [loading,setLoading]=useState(true);
    const {token}=useSelector((state)=>state.userInfo);
    const [user,setUser]=useState(null);

    const photo= user?.profilePicture || dp;
    const router=useRouter();
    

    useEffect(()=>{
        privatePost('/api/user/verify',token).then(res=>{
           
           setLoading(false);
            setUser(res.user);
        }).catch(err=> {

            Swal.fire({
               
                icon: 'error',
                title: `${err.response.statusText}`,
                showConfirmButton: false,
                timer: 1500
              })

              router.push('/signin')




            
        })

    },[])





    if(loading) return <LoadingSpinner/>
    
    return (
        <div className={styles.userProfile}>
        <Image className={styles.photo} src={photo} alt='User Photo'/>
        <h1 className={styles.name}>{user?.name}</h1>
        <p className={styles.email}>
          Email: <a href="mailto:johndoe@example.com">{user?.email}</a>
        </p>
        <p className={styles.phone}>Phone: {user?.mobile || '+8801 6886345365'}</p>
        <p className={styles.address}>Address: 123 Main St, City, State</p>
      </div>
       
    );
};

export default Profile;