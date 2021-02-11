import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 50,
    height: '30px',
    background: '#272F38',
    marginTop: '4px',
  },
  input: {
    marginLeft: theme.spacing(2),
    flex: 1,
    color: '#A9ACAF',
  },
  iconButton: {
    padding: 10,
    color: '#fff',
  },
}))

const SearchBar = () => {
  const classes = useStyles()

  return (
    <Paper
      onSubmit={(e) => e.preventDefault()}
      component='form'
      className={`${classes.root} nav-searchbar`}
    >
      <InputBase
        className={classes.input}
        placeholder='Search Experiences...'
        inputProps={{ 'aria-label': 'search experiences...' }}
      />
      <IconButton
        type='submit'
        className={classes.iconButton}
        aria-label='search'
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default SearchBar
