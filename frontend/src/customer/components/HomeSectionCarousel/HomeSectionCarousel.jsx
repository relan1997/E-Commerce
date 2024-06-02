import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { mens_kurta } from '../../../Data/mens_kurta';
const HomeSectionCarousel = () => {

    const [activeIndex,setActiveIndex] = useState(0)

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
        
    };
    
    const slidePrev=()=>setActiveIndex(activeIndex-1)
    const slideNext=()=>setActiveIndex(activeIndex+1)

    const syncActiveIndex=({item})=>setActiveIndex(item)

    const items=mens_kurta.slice(0,13).map((item) => <HomeSectionCard product ={item} />)

  return (
    <div className='border'>
    <div className='relative p-5 border'>
        <AliceCarousel
    items={items}
    disableButtonsControls
    responsive={responsive}
    disableDotsControls
    onSlideChanged={syncActiveIndex}
    activeIndex={activeIndex}
        />
    { activeIndex !== items.length-5 && <Button onClick={slideNext}  aria-label="next" variant="contained" className='z-50 bg-white' sx={{position:'absolute' , top:"8rem" , right:"0rem" , transform:"translateX(50%) rotate(90deg)",bgcolor:"white"}} >
        <KeyboardArrowLeftIcon sx={{transform:"rotate(90deg)" , color:"black"}}/>
    </Button>}
    <Button onClick={slidePrev}  aria-label="next" variant="contained" className='z-50 bg-white' sx={{position:'absolute' , top:"8rem" , left:"0rem" , transform:"translateX(-50%) rotate(-90deg)",bgcolor:"white"}} >
        <KeyboardArrowLeftIcon sx={{transform:"rotate(90deg)" , color:"black"}}/>
    </Button>
</div>
</div>  
  )
}

export default HomeSectionCarousel