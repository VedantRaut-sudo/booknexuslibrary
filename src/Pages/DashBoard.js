import React, { useEffect } from 'react'

import Dasboardcomponent from '../Components/ForAdmin/Dasboardcomponent'
import DashboardBoolList from '../Components/ForAdmin/DashboardBoolList'
import { useNavigate } from "react-router-dom";

const DashBoard = ({adminAuth}) => {
  const NAVIGATE = useNavigate();
  useEffect(()=>{
    const openDashboard=()=>{
      if(!adminAuth){
        NAVIGATE('/loginforadmin')
      }
    }
    openDashboard();
  },[])
  return (
    <div>
    <Dasboardcomponent/>
    
    </div>
  )
}

export default DashBoard
