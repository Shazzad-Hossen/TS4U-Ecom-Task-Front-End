"use client";
import Headernav from '@/components/Header/Header'
import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import { persistor, store } from '../services/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import Footer from '@/components/Footer/page';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
        
      
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> 

      <Headernav/>
      {children}
      <Footer/>

      </PersistGate>
      </Provider>
        

        </body>
    </html>
  )
}
