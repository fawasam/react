import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import React from 'react'
import "./featured.scss"

const Featured = ({type}) => {
    return (
        <div className="featured">
             {type &&
             <div className="category">
                 <span>{type === 'movie' ? "Movies" : "TV Shows"}</span>
                 <select name="genre" id="genre">
                     <option >Genre</option>
                     <option value="Adventure" >Adventure</option>
                     <option value="Comedy">Comedy</option>
                     {/* <option >Crime</option>
                     <option >Fantasy</option>
                     <option >Horror</option>
                     <option >Thriller</option> */}
                 </select>
             </div>
             }
            <img 
            width="100%"
            src="https://wallpaperaccess.com/full/1262051.jpg" alt="" />
            <div className="info">
                <img src="https://www.pngfind.com/pngs/m/92-926114_prison-break-logo-prison-break-logo-png-transparent.png" alt="" />
            <span className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolorem, doloremque animi modi nulla, blanditiis quae ea nam odio quaerat maiores deleniti accusantium ut fugiat, dolore exercitationem ex quibusdam asperiores.

            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow/>
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined/>
                    <span>Info</span>
                </button>
            </div>
            </div>
            
        </div>
    )
}

export default Featured
