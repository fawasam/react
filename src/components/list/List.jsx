import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import React from 'react'
import "./list.scss"
import ListItem from '../listItem/ListItem'
import { useRef } from 'react'
import { useState } from 'react'
const List = () => {

    const listRef =useRef()
    const [slide,setSlide] =useState(0)
    const [isMoved,setIsMoved] =useState(false)

    const handleClick = (direction)=>{
        setIsMoved(true)
        let distance =listRef.current.getBoundingClientRect().x-50
        if (direction ==="left" && slide >0){
               listRef.current.style.transform =`translateX(${2*(230)+distance}px)`
               setSlide(slide-1)
         if(slide===1)
         {
             setIsMoved(false)
         }      
        }
        if (direction ==="right" && slide <2){
               listRef.current.style.transform =`translateX(${2*(-230)+distance}px)`
               setSlide(slide+1)
        }
    }
    return (
        <div className="list">
            <span className="listTitle">
                Continue to watch
            </span>
            <div className="wrapper">
                 <ArrowBackIosOutlined className="slider left"
                 onClick={()=>handleClick("left")}
                 style={{display : !isMoved && "none"}}
                 />
                 <div className="container" ref={listRef}>
                 <ListItem index={0} />
                 <ListItem index={1}/>
                 <ListItem index={2}/>
                 <ListItem index={3}/>
                 <ListItem index={4}/>
                 <ListItem index={5}/>
                 <ListItem index={6}/>
                 <ListItem index={7}/>
                 <ListItem index={8}/>
                 <ListItem index={9}/>
                 </div>
                 <ArrowForwardIosOutlined className="slider right"
                   onClick={()=>handleClick("right")}/>
            </div>
            
        </div>
    )
}

export default List
