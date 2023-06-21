"use client"
import React, { useState } from 'react';
import styles from './Header.module.scss'
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { userSignout } from '@/services/userSlice';
import { useRouter } from 'next/navigation';
import { RiMenuLine, RiCloseLine } from "react-icons/ri";




const Headernav = () => {

    const {isSignin}= useSelector((state)=>state.userInfo);
    const dispatch= useDispatch();
    const router=useRouter();
    const [menu,setMenu]=useState(true);

    const handleSignout=()=>{
      dispatch(userSignout());
      router.push('/signin')


    }
    
    


    const navLink= <>

    <Link className={styles.navItem} href='/'>Home</Link>
    {
      !isSignin?<> <Link className={styles.navItem}href='/signin'>Sign In</Link>
      <Link className={styles.navItem} href='/signup'>Sign Up</Link> </>
      : <>
      <Link className={styles.navItem} href='/profile'>Profile</Link>
      <span onClick={()=>handleSignout()} className={styles.navItem} >Sign Out</span></>
    }
    
    
    


    </>
    return (

        <>
      
      <div className={styles.container}>
           <h1 className={styles.h1}>TS4U ECOM</h1>
           <div className={styles.nav}>
            {navLink}
           </div>
           <button className={styles.btn} onClick={()=>setMenu(!menu)}>
            {
              menu? <RiMenuLine style={{width: '30px', height: '30px'}}/> : <RiCloseLine  style={{width: '30px', height: '30px'}}/>
            }

           </button>
        </div>

       <div onClick={()=>setMenu(!menu)} className={styles.toggleHide}>
       {
        !menu && <div style={{position: "absolute", zIndex: '20'}}>
        <div style={{display:"flex"}}> <div className={styles.toggle}>
           {
             navLink
           }</div>
 
         </div>
        </div>
       }
       </div>
        
        
        </>


        
    );
};

export default Headernav;