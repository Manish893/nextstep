import React from 'react'
import Header from '../Com/Header'
import Slider from '../Com/Slider'
import What from '../Com/What'
import Why from '../Com/Why'
import Most from '../Com/Most'
import Dollar from '../Com/Dollar'
import Salma from '../Com/Salma'
import Contact from './Contact'
 

export default function Home() {
  return (
    
    <div>
       
        {/* <Header/> */}
        <Slider/>
        <What/>
        <Why/>
        <Most/>
        <Dollar/>
        <Salma/>
        {/* <Contact/> */}
      
    </div>
    
  )
}
