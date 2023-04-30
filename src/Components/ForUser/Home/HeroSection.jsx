import React from 'react'
import './style.css'
import img from '../../../Assets/bookread.jpg'
import SearchBar from './SearchBar'
const HeroSection = () => {
  return (
    <div className="main_home_wrap">

      <div className='hero_section_wrap'>
        <div className="title_search">

        <h1 className='Main_Tagline'>Unlock the world of literature</h1>
        <SearchBar />
        </div>
        <div className="img_for_herosection">
<img className='bookreadimg' src={img} alt="" />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
