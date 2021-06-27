import { PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined ,Add} from '@material-ui/icons'
import React, { useState } from 'react'
import  "./listitem.scss"
import clip from "../../clip.mp4"
const ListItem = ({index}) => {
    const [isHover,setIsHover] =useState(false)
    // const trailer ="https://www.youtube.com/embed/G4JuopziR3Q?autoplay=1?start=11"
    const trailer =clip
    return (
        <div className="listItem"
        style={{
            left: isHover && index *225-50 + index *2.5
        }}
         onMouseEnter={()=>setIsHover(true)}
         onMouseLeave={()=>setIsHover(false)}
         >
            <img src="https://assets1.ignimgs.com/2021/05/12/loki-poster-2-1620828778337_160w.jpg?width=1280" alt="" />
            {isHover && (

          <>
            {/* <iframe src={trailer} title="YouTube video player" autoPlay frameborder="0" allowfullscreen></iframe> */}
            <video src={trailer} autoPlay frameborder="0" allowfullscreen></video>
            <div className="itemInfo">
                <div className="icons">
                    <PlayArrow className="icon"/>
                    <Add className="icon"/>
                    <ThumbUpAltOutlined className="icon"/>
                    <ThumbDownAltOutlined className="icon"/>
                </div>
                <div className="itemInfoTop">
                    <span>1 hour 14 mins</span>
                    <span className="limit">+16</span>
                    <span>2021</span>
                </div>    
                    <div className="desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tenetur ullam sunt eum voluptate unde, reiciendis eius atque cupiditate, ea explicabo doloribus dolore.
                    </div>
                    <div className="genre">
                        Action Drama
                    </div>
                
            </div>
            </>
              )}

        </div>
    )
}

export default ListItem
