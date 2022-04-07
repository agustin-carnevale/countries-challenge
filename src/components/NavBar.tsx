import { useContext } from 'react'
import { Paper, Switch, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { ThemeModeContext } from '../context'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: '15px',
  },
}))

const NavBar = () => {
  const classes = useStyles()
  const { mode, modeToggle } = useContext(ThemeModeContext)

  return (
    <Paper className={classes.container}>
      <Typography variant="h4">Where in the world?</Typography>
      <Typography variant="h6">
        Dark Mode
        <Switch checked={mode === 'dark'} onChange={modeToggle} />
      </Typography>
    </Paper>
  )
}

export default NavBar
