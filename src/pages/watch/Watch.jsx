import { ArrowBackOutlined } from '@material-ui/icons'
import React from 'react'
import  "./watch.scss"
import clip from "../../clip.mp4"
const Watch = () => {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined className="arrow"/>
                Home
            </div>
            <video className="video" src={clip} 
            autoPlay frameborder="0" progress controls ></video>
            
        </div>
    )
}

export default Watch
