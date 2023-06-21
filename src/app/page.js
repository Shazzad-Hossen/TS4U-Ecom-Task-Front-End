"use client"
import styles from './page.module.scss'
import { useEffect, useState } from 'react'
import { publicGet } from '@/utilities/apiCaller';
import ProdCard from '@/components/ProdCard/page';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper';
import bnr1 from '../assets/images/b1.jpg'
import bnr2 from '../assets/images/b2.jpg'
import bnr3 from '../assets/images/b3.jpg'
import bnr4 from '../assets/images/b4.jpg'
import bnr5 from '../assets/images/b5.jpg'
import Image from 'next/image';
import { Pagination } from 'antd';

export default function Home() {
  const [data,setData]=useState([]);
  

  useEffect(()=>{

    publicGet('/api/product/getProducts').then(res=>setData(res.products));





  },[])
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
       
        modules={[Autoplay]}
       
      >
        <SwiperSlide ><Image className={styles.mySwiper}  src={bnr1} alt='Banner Img'/></SwiperSlide>
        <SwiperSlide><Image className={styles.mySwiper}  src={bnr2} alt='Banner Img'/></SwiperSlide>
        <SwiperSlide><Image className={styles.mySwiper}  src={bnr3} alt='Banner Img'/></SwiperSlide>
        <SwiperSlide><Image className={styles.mySwiper}  src={bnr4} alt='Banner Img'/></SwiperSlide>
        <SwiperSlide><Image className={styles.mySwiper}  src={bnr5} alt='Banner Img'/></SwiperSlide>
        
      </Swiper> 
      <h1 style={{textAlign:"center"}}>Our Products</h1>

      <div className={styles.flex}>
      <div className={styles.grid}>

{
  data.map((d,i)=><ProdCard key={i} data={d}/>)
}


</div>
    </div>
    <div className={styles.flex} style={{margin:'30px 0'}}>
<Pagination defaultCurrent={1} total={50} />
</div>
      </>
    
  )
}
