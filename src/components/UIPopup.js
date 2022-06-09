import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import infoSVG from '../assets/info.svg'
import '../styles/tutorialDialog.css'
import Tutorial from '../assets/tutorial1.png'
import { ThemeContext } from '@emotion/react'
import { ThemeProvider } from '@mui/styles'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'

export default function AlertDialog () {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  let theme = createTheme({  typography: {
    

  }})
  theme = responsiveFontSizes(theme)
  return (
    <ThemeProvider theme={theme}>
      <div>
        <img
          className='smallContainer'
          src={infoSVG}
          alt='info'
          variant='outlined'
          onClick={handleClickOpen}></img>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'>
          <DialogContent className='temp'>
            <div className='tutorialLayout1'>
              <img src={Tutorial} alt={'Tutorial Image'} className={'tutorialImage'}></img>
             
            
            </div>
            <div style={{'width': '3%'}}></div>
            <div className='tutorialLayout2'>
              <div className='tutorialText' style={{'color': '#FF5C87'}}>
                1. Scissor cut paper.Paper cover rock. Rock crush scissor.No matter fact of the the level.
              </div>
              <div className='tutorialText' style={{'color': '#FFD269'}}>
                2. If the same item is picked.Then victory of the round is determined by the level.If the level is also equal then it is a draw.
              </div>
              <div className='tutorialText' style={{'color': '#429136'}}>
                3. Standard deck include of 15 cards with 3 items: rock,paper,scissor. Every item having 5 level.
              </div>
              <div className='tutorialText' style={{'color': '#27E1CE'}}>
                4. The game using BO5 series to determine the winner.In every rounds player alway gets 3 types of card (rock,paper,scissor) from the standard deck with random level.After
                the round all 3 card is removed.Worst scenario,the result of the game will be a draw.
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </ThemeProvider>
  )
}
