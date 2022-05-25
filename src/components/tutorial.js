import React from 'react'
import '../styles/tutorialDialog.css'
import Tutorial from '../assets/tutorial1.png'

function TutorialDialog (props) {
  return (props.trigger)?(
    <div className='popup'>
      <div className='popup-inner'>
        <button className='close-btn' onClick={()=>props.setTrigger(false)}>
          X
        </button>
       <div className='tutorialLayout1'>
        <img src={Tutorial} alt={'Tutorial Image'} className={'tutorialImage'}></img>
       </div>
       <div className='tutorialLayout2'>
         <div className='tutorialText' style={{'color':'#FF5C87'}}>
         1. Scissor cut paper.Paper cover rock. Rock crush scissor.No matter fact of the the level.
         </div>
         <div className='tutorialText' style={{'color':'#FFD269'}}>
         2. If the same item is picked.Then victory of the round is determined by the level.If the level is also equal then it is a draw.
         </div>
         <div className='tutorialText' style={{'color':'#429136'}}>
         3. Standard deck include of 15 cards with 3 items: rock,paper,scissor. Every item having 5 level.
         </div>
         <div className='tutorialText' style={{'color':'#27E1CE'}}>
         4. The game using BO5 series to determine the winner.In every rounds player alway gets 3 types of card (rock,paper,scissor) from the standard deck with random level.After the round all 3 card is removed.Worst scenario,the result of the game will be a draw.
         </div>
       </div>
      </div>
    </div>
  ):'';
}

export default TutorialDialog
