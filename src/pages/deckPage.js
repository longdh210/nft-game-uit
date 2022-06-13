import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { imageToken } from '../parts/imageToken'
import '../styles/deckPage.css'

function RockRow () {
  return (
    <div className='customRow'>
         
      <Grid >
        <img className='enemyCard' alt={"token image"} src={imageToken.it[0]} />
      </Grid>
      <Grid>
        <img className='enemyCard' alt={"token image"} src={imageToken.it[1]} />
      </Grid>
      <Grid>
        <img className='enemyCard' alt={"token image"} src={imageToken.it[2]} />
      </Grid>
      <Grid>
        <img className='enemyCard' alt={"token image"} src={imageToken.it[3]} />
      </Grid>
      <Grid>
        <img className='enemyCard' alt={"token image"} src={imageToken.it[4]} />
      </Grid>
    </div>
  )
}

function PaperRow () {
    return (
      <div className='customRow'>
    
        <Grid >
          <img className='enemyCard' alt={"token image"} src={imageToken.it[5]} />
        </Grid>
        <Grid>
          <img className='enemyCard' alt={"token image"} src={imageToken.it[6]} />
        </Grid>
        <Grid>
          <img className='enemyCard' alt={"token image"} src={imageToken.it[7]} />
        </Grid>
        <Grid>
          <img className='enemyCard' alt={"token image"} src={imageToken.it[8]} />
        </Grid>
        <Grid>
          <img className='enemyCard' alt={"token image"} src={imageToken.it[9]} />
        </Grid>
      </div>
    )
  }

  function ScissorRow () {
    return (
      <div className='customRow'>

        <Grid >
          <img className='enemyCard' alt={"token image"} src={imageToken.it[10]} />
        </Grid>
        <Grid>
          <img className='enemyCard' alt={"token image"} src={imageToken.it[11]} />
        </Grid>
        <Grid>
          <img className='enemyCard' alt={"token image"} src={imageToken.it[12]} />
        </Grid>
        <Grid>
          <img className='enemyCard' alt={"token image"} src={imageToken.it[13]} />
        </Grid>
        <Grid>
          <img className='enemyCard' alt={"token image"} src={imageToken.it[14]} />
        </Grid>
      </div>
    )
  }


export default function DeckPage () {
  return (

    <Box sx={{ width: '100%' ,height :'100%',minWidth:'min-content',minHeight:'min-content'}} className='deckPage' style={{'overflow':'visible'}} 
     >
        <h3 className='customText'>Your current Deck :</h3>
      <Grid
 
        container
        item
  
        style={{'margin':"0",'alignContent':'space-evenly'}}>
        <RockRow />
        <PaperRow/>
        <ScissorRow/>
      </Grid>
    </Box   >


  )
}
