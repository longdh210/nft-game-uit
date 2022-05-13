import React, { Component } from 'react'
import '../styles/generalcss.css';
import '../styles/underDevelope.css';
import decorateCorner from '../assets/decorateCorner.png';
import developing from '../assets/developing.png';


class UnderDevelopePage extends Component {
    state = {  } 
    render() { 
        return (<div className='App' style={{'display':'block'}} >
             <img src={decorateCorner} alt="corner" className="corner1" />
               <div className='child'>
               <img src={developing} alt="developing"  className='developingImage' />
               <div className='developingText'>This page is currently under developing.</div>
               </div>
             <img src={decorateCorner} alt="corner" className="corner2" />
        </div>);
    }
}
 
export default UnderDevelopePage;